import React from 'react'
import {Link} from 'react-router-dom'
import './teamcard.css' 


const TeamCard = (props) => {
    const {eachTeamDetails} = props;
    const {name,team_logo,latest_match_id} = eachTeamDetails

  return (
    <Link to={`/team-matches/${latest_match_id}`} className="link-item"  >
        <li className="card-container">
            <img src={team_logo} alt={name} className="team-logo" />
            <p className="team-name">{name}</p>
        </li>
    </Link>
  )
}

export default TeamCard