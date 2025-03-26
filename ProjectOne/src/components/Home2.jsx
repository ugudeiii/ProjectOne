import React from 'react';

function Home() {
  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Welcome to Our Poster Collection!</h1>
      <p style={{ fontSize: '18px', color: '#555', textAlign: 'center' }}>
        Explore a variety of stunning album posters designed by talented artists from different genres. Whether you are a fan of hip-hop, rock, or pop, we have something for everyone.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={{ width: '300px', margin: '10px', textAlign: 'center' }}>
          <img src="https://i.pinimg.com/736x/73/09/64/730964554ed37215ab9f39b661ec13fa.jpg" alt="Album 1" style={{ width: '205px',
          height:'280px',borderRadius: '10px' }} />
          <h3>The Weeknd Poster</h3>
          <p>Shop the latest album poster of The Weeknd's groundbreaking album or pictures</p>
        </div>
        
        <div style={{ width: '300px', margin: '10px', textAlign: 'center' }}>
          <img src="https://i.pinimg.com/736x/34/58/2a/34582abc4b9030dd938c8b01ebbfe3c1.jpg" alt="Album 2" style={{ width: '205px',height:'280px', borderRadius: '10px' }} />
          <h3>Metro Boomin Poster</h3>
          <p>Get your hands on this poster from Metro Boomin's iconic album & picture</p>
        </div>

        <div style={{ width: '300px', margin: '10px', textAlign: 'center' }}>
          <img src="https://i.pinimg.com/736x/80/27/4e/80274e0c608d05ea2a4a303329a0df43.jpg" alt="Album 3" style={{ width: '200px', borderRadius: '10px' }} />
          <h3>Make your custom Poster</h3>
          <p>You can send us the picture you want it to be poster.  Perfect for your collection!</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <h2 style={{ color: '#444' }}>Why Choose Our Posters?</h2>
        <p style={{ fontSize: '16px', color: '#777', width: '70%', margin: '0 auto' }}>
          Our posters are printed on high-quality materials to make sure your favorite album art looks perfect on your wall. With exclusive designs and collaborations with popular artists, these posters bring your music fandom to life. Transform your space today!
        </p>
      </div>
    </div>
  );
}

export default Home;
