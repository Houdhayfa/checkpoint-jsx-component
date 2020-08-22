import React from 'react';

import './Main.css';
import Adress from './Profile/Adress';
import FullName from './Profile/FullName'
import ProfilePhoto from './Profile/ProfilePhoto'

function Main() {
  return (
    <div className="Main">
      <div className="cadre">
      <ProfilePhoto/>
      <FullName/>
      <Adress/>
      
      </div>

    </div>
  );
}

export default Main;
