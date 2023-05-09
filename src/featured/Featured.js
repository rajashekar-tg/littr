import React from 'react'
import './featured.css'
import{
  UilDraggabledots
} from"@iconscout/react-unicons";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function featured() {
  return (
    <div className='featured'>
        <div className='top'>
            <h1 className='title'>Total Revenue</h1>
            <UilDraggabledots fontSize="small"/>
        </div>
        
        <div className='bottom'>
          <div className='featuredChart'>
            <div style={{ width: 150, height: 150 }}>
              <CircularProgressbar value={70} text={"70%"}  strokeWidth={4}/>
            </div>
            <p className='title'>Total Sales Made Today</p>
            <p className='title'>$420</p>
          </div>
        </div>
    </div>
  )
}

export default featured