import { useEffect, useState } from "react"
import axios from "axios"
const useFetch = (url) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    // const [error,setError] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
          await axios.get(url)
          .then((res) =>{
            const resData = res.data;
            setData(resData)
            // console.log(data)
            // console.log("Data has been received")
          })
          .catch(()=>{
            
            console.log("Data not received")
          })
          setLoading(false)
        }
    fetchData();
    },[url]);
   

    const reFetch = async () => {
      setLoading(true)
    await axios.get(url)
    .then((res) =>{
      const resData = res.data;
      setData(resData)
      // console.log(data)
      // console.log("Data has been received")
    })
    .catch(()=>{
      console.log("Data not received")
    })
    setLoading(false)
  }
  return {data,loading,reFetch}

}    

    
    // useEffect(()=>{
    //     const fetchData = async()=>{
    //         setLoading(true)
    //         try{
    //             const res = await axios.get(url)
    //             console.log(res)
    //             // setData(res.data)
    //             // console.log(data)
    //         }catch(err){
    //             setError(err)
    //         }
    //         setLoading(false)
    //     };
    //     fetchData();
    // },[url])  // when url changes this function fires 
    


export default useFetch