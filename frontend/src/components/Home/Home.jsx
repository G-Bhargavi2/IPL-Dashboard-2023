import {Rings } from 'react-loader-spinner'
import './home.css'
import useFetch from '../hooks/useFetch.js'
import TeamCard from "../TeamCard/TeamCard"



const Home = () => {
    const {data, loading}  = useFetch("/teams")
    const renderLoader = () => (
        <div data-testid="loader">
          <Rings height="80" width="80" color="#ffffff" radius="6" wrapperStyle={{}} wrapperClass="" visible={true} ariaLabel="rings-loading" />
        </div>
      )
      const renderIplTeamsList = () =>(
        <ul className="teams-list-container">

        {data.map(eachTeam => (
          <TeamCard key={eachTeam.id} eachTeamDetails={eachTeam} />
        ))}
      </ul>
      )

  return (
    <div className="app-container">
        <div className="ipl-container">
          <div className="header-container">
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
            <h1 className="heading">IPL Dashboard 2023</h1>
          </div>
          {loading ? renderLoader() : renderIplTeamsList()}
        </div>
      </div>
    
  )
}

export default Home

// useEffect(() => {
  //   const fetchData = async () => {
  //     await axios.get("/teams")
  //     .then((res) =>{
  //       const data = res.data;
  //       setData(data)
  //       console.log(res.data)
  //       console.log("Data has been recived")
  //     })
  //     .catch(()=>{
  //       console.log("no no no")
  //     })
      // setData(data);
      // console.log(data);
  //   };
  //   fetchData(); // Call the fetchData function to initiate the data fetching
  // }, []);