import React from 'react'
import './Widgets.css'
import{UilArrowUp} from"@iconscout/react-unicons";

function Widgets({type}) {
   

  return (
    <div className='widget'>
        <div className='left'>
            <span className="title">USERS</span>
            <span className='counter'>2515</span>
            <span className='link'>See All Users</span>
        </div>
        <div className='right'>
            <div className='percentage positive'><UilArrowUp/>200%</div>
            
        </div>
    </div>
  )
}

export default Widgets