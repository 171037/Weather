import React, { useState } from 'react';
import Weather from './Weather';
import Navbar from './Navbar';
import Card from './Card';
import Moment from 'react-moment';
import { useInterval } from 'use-interval';

const Home = () => {
  const [nowTime, setNowTime] = useState(Date.now());


  useInterval(() => {
    setNowTime(Date.now());
  }, 1000);

  return (
    <div className='home'>
      <Navbar />
      <div style={{ height: '95px' }}></div>
      <h1 style={{ margin: '0%' }}>지금 날씨</h1>
      <h3><Moment format={"HH:mm:ss"} className={'moment-box'}>{nowTime}</Moment></h3>

      <Weather />
      <div className='card'>
        <Card />
      </div>
    </div>
  );
};

export default Home;
