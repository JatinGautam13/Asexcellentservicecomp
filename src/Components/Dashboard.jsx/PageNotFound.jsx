import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const NotFoundPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '10%' }}>
      <img 
        src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png" 
        alt="Monkey with magnifying glass" 
        style={{ width: '150px', height: '150px' }}
      />
      <h2 style={{ textAlign: 'center' }}>This page isn't available. Sorry about that.</h2>
      <p style={{ textAlign: 'center' }}>Try searching for something else.</p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
        <img 
          src="/src/assets/loooooogo-removebg-preview.png" 
          alt="AsEcellent" 
          style={{ width: '150px', marginRight: '10px' }}
        />
         <Link
            to="/"
          >
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#19a2e6] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] transition-transform transform active:scale-95">
            <span className="truncate">Home</span>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

