import React from 'react'
import './chart.css'
import{ UilDraggabledots} from"@iconscout/react-unicons";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'Page A',
    ABC: 4000,
    DEF: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    ABC: 3000,
    DEF: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    ABC: 2000,
    DEF: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    ABC: 2780,
    DEF: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    ABC: 1890,
    DEF: 4800,
    amt: 2181,
  },
];
function chart() {
  
  return (
    <div className='chart'>
      <div className='top'>
          <h1 className='title'>Total Revenue</h1>
          <UilDraggabledots fontSize="small"/>
      </div>
      <div className='bottom'>
        
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="ABC" fill="#8884d8" />
            <Bar dataKey="DEF" fill="#82ca9d" />
          </BarChart>
        
      </div>
    </div>
  )
  
}

export default chart