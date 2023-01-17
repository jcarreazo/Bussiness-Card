import React from 'react';
const Photo = 'https://images.dailyhive.com/20210201095923/Armel-Beaudry-.jpeg';
const LinkedInPhoto =
  'https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png';
const EmailPhoto =
  'https://banner2.cleanpng.com/20180718/twz/kisspng-computer-icons-stock-photography-email-clip-art-simblo-5b4faed2d78991.2976490215319487548829.jpg';
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
      <div className="ProfileButtons">
        <div className="Email">
          <img src={EmailPhoto} alt="" className="EmailIcon" /> Email
        </div>
        <div className="LinkedIn">
          {' '}
          <img
            src={LinkedInPhoto}
            alt="linkedin-ico"
            className="LinkedInIcon"
          />{' '}
          LinkedIn
        </div>
      </div>
    </div>
  );
}
