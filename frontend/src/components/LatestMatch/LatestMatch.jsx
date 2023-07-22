import React from 'react'
import { format } from 'date-fns';
import './latestmatch.css'

const LatestMatch = (props) => {
  const {id,umpires,man_of_the_match, second_innings,first_innings,result,venue,date,competing_team,competing_team_logo,match_status} = props.latest_match_details;
  const status = match_status === 'Won' ? 'Lost' : 'Won'
  const formatted_date = format(new Date(date), 'yyyy-MM-dd');
  const resultCss = status === 'Won' ? 'result-won' : 'result-lost'
  return (
    <div>
        <p className="latest-match-heading">Latest Matches</p>
        <div className="latest-matches-container">
          <div className="latest-matches-top-container">
            <div className="latest-match-details">
              <p className='match'>Match - {id}</p>
              <h1 className="competing-team-name">{competing_team}  -  <span className={`${resultCss}`}>   {status}</span>
              </h1>
              <p className="date">{formatted_date}</p>
              <p className="venue">{venue}</p>
              <p className="result">{result}</p>
            </div>
            
            <img
              className="competing-team-logo"
              src={competing_team_logo}
              alt={competing_team}
            />
            
          </div>
          <hr className="line" />
          <div className="latest-matches-bottom">
            <p className="details">First Innings</p>
            <p className="details">{first_innings}</p>
            <p className="details">Second Innings</p>
            <p className="details">{second_innings}</p>
            <p className="man-of-the-match">Man Of The Match</p>
            <p className="details">{man_of_the_match}</p>
            <p className="details">Umpires</p>
            <p className="details">{umpires}</p>
          </div>
        </div>
      </div>
  )
}

export default LatestMatch