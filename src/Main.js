import React from 'react';
const LinkedInPhoto =
  'https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png';
const EmailPhoto =
  'https://banner2.cleanpng.com/20180718/twz/kisspng-computer-icons-stock-photography-email-clip-art-simblo-5b4faed2d78991.2976490215319487548829.jpg';
export default function Main() {
  return (
    <div className="Main">
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
      <div className="About">
        <h2>About</h2>
        <p className="TextAbout">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>
      <div className="Interests">
        <h2>Interest</h2>
        <p className="TextInterest">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}
