import React, { useState } from 'react'
import './matchcard.css'

const MatchCard = (props) => {
    const [hovered,setHovered] = useState(false)
    // console.log(props.matchDetails)
    const {id,first_innings,second_innings,umpires,date,venue,result,man_of_the_match,
        competing_team,competing_team_logo, match_status} = props.matchDetails
    const resultCss = match_status === 'Won' ? 'result-won' : 'result-lost'
  return (
    <li
        className={`match-list-container ${hovered ? 'hovered' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)} 
      >
        {hovered ? (
          <div className="content-container">
            <p className='hovered-id'>Match - {id}</p>
            <h1 className="hovered-competing-team">{first_innings}</h1>
            <p className="hovered-competing-team">VS</p>
            <h1 className="hovered-competing-team">{second_innings}</h1>
            <p className="hovered-date">{date}</p>
            <p className="hovered-venue">{venue}</p>
            <p className="hovered-umpires">Umpires {umpires}</p>
            <p className="hovered-match-result">{result}</p>
            <p className="hovered-man-of-the-match">Man Of The Match</p>
            <p className="hovered-man-of-the-match">{man_of_the_match}</p>
            <p className={`status ${resultCss}`}>{match_status}</p>
          </div>
        ) : (
          <div className="content-container">
            <p className='id'>Match - {id}</p>
            <img
              className="match-list-team-logo"
              src={competing_team_logo}
              alt={competing_team}
            />
            <h1 className="competing-team">{competing_team}</h1>
            <p className="match-result">{result}</p>
            <p className={`status ${resultCss}`}>{match_status}</p>
          </div>
        )}
      </li>
  )
}

export default MatchCard