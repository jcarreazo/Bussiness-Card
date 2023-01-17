import React from 'react';
const Photo = 'https://images.dailyhive.com/20210201095923/Armel-Beaudry-.jpeg';

export default function Header() {
  return (
    <div className="Header">
      <div className="ProfilePhoto">
        <img src={Photo} alt="profile-photo" />
      </div>
      <div className="ProfileText">
        <p className="Texto-1">Carl Johnson</p>
        <p className="Texto-2">Frontend Developer</p>
        <p className="Texto-3">carl.johnson.website</p>
      </div>
    </div>
  );
}
