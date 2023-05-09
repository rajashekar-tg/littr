import React from 'react'
import './MainDash.css'
import Widgets from './Widgets/Widgets';
import Featured from '../featured/Featured';
import Chart from '../charts/Chart';
// import Table from '../Table/Table';


const Dashboard = () => {
  return (
    <div className='Maindash'>
   <div className='header'>
<h2 style={{paddingRight: "20px"}}>Dashboard</h2>
</div>
<div className='widgets' style={{marginTop:'3rem'}}>
<Widgets type="user"/>
<Widgets type="orders"/>
<Widgets type="earning"/>
<Widgets type="balance"/>
</div>
<div className='charts'>
<Featured/>
<Chart/>
</div>
<div className='listContainer'>
<div className='listTitle'>Latest Transaction</div>
</div> 
    </div>
  )
}

export default Dashboard