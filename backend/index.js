import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import teamsRoute from './routes/teams.js'
import teamMatchesRoute from './routes/team_matches.js'
import recentMatchesRoute from './routes/recent_matches.js'
dotenv.config()

const app = express()
app.use(express.json());

const connect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("MongoDB connected Successfully")
    }
    catch(error){
        
        throw error;
    }
}

mongoose.connection.on("disconnected", () =>{
    console.log("mongoDB disconnected!")
})
 
// middlewares 

app.use("/ipl" ,teamsRoute)
app.use("/ipl/team-matches" , teamMatchesRoute)
app.use("/ipl/team-matches",recentMatchesRoute)

app.listen(8080, () =>{
    connect();
    console.log("Connected to backend!")
}) 