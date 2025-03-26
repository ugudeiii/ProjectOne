import React from 'react';

function AboutUs() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>About Us</h1>
      <p>We are a team passionate about bringing album posters to life!</p>
      
      <div style={{ display: 'flex', justifyContent: 'start', gap: '30px', flexWrap: 'wrap', marginBottom: '50px', marginTop: '50px' }}>
        <div style={{ textAlign: 'center' }}>
          <h3>Follow us on Facebook</h3>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
              alt="Facebook" 
              style={{ width: '80px', height: '80px' }} 
            />
          </a>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3>Follow us on Instagram</h3>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" 
              alt="Instagram" 
              style={{ width: '80px', height: '80px' }} 
            />
          </a>
        </div>

  </div>
<div style={{ marginBottom: '70px' }}>
  <p>We are not responsible if you purchased the wrong poster. Choose carefully</p>
  <p>Visit our social media to contanct us or explore more things.</p>
  </div>
    </div>
  );
}

export default AboutUs;
