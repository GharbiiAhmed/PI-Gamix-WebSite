import React from 'react'
import WidgetLg from './WidGet'
import WidgetSm from './WitSm'
import ChartComponent from './Chart'
import "./home.css";
import Featured from './Feature';

function Home() {
    
  return (
    <div className='home'>
        <Featured />
        <ChartComponent />
         <div class="homeWidgets">
       <WidgetSm />
       <WidgetLg />
      </div>
    </div>
  )
}

export default Home