import React from 'react'
import { useParams } from 'react-router-dom';
import {BallTriangle} from "react-loader-spinner";
import useFetch from '../hooks/useFetch'
import './teammatches.css'
import LatestMatch from '../LatestMatch/LatestMatch'
import MatchCard from '../MatchCard/MatchCard'


const TeamMatches = () => {
  const {latest_match_id} = useParams();
  const {data,loading} = useFetch(`/team-matches/${latest_match_id}`);
  const {latest_match_details,team_banner_url,recent_matches} = data;
  // console.log(recent_matches)

  const renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <BallTriangle height={100} width={100} radius={5} color="#0BBFFF" ariaLabel="ball-triangle-loading" wrapperClass={{}} wrapperStyle="" visible={true} />
    </div>
  )
  const renderTeamMatches = () => (
    <div  >
      {
          latest_match_details &&
      <div className={`app-team-matches ${latest_match_details.team_id}`} >

      <div className={`team-matches-container`}>
          <>
          <img src={team_banner_url} className="team-banner" alt="team banner" />
          {/* <p>{latest_match_details.umpires}</p> */}
          <LatestMatch latest_match_details ={latest_match_details} />
          {renderRecentMatches()}
          </>
          </div>
         </div> 
        }

    </div>
  )

  const renderRecentMatches = () => (
     (
      <ul className="recent-matches-container">
        {recent_matches.map(eachMatch => (
          <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
        ))}
      </ul>
    )
  )

  return (

    <div className='team-app'>
        {loading ? renderLoader() : renderTeamMatches()}
     </div>
  )
}

export default TeamMatches