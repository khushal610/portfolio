// import React from 'react'
// import { NavLink } from 'react-router-dom'

// function Header() {
//   return (
//     <>
//     <header className='bg-slate-100 fixed w-full z-10'>
//       <div className="container p-3 flex items-center justify-between">
//         <div className="logo px-10">
//             <h1 className='text-4xl'>PORTFOLIO</h1>
//         </div>  
//         <div className="links">
//           <nav>
//             <ul className='flex gap-4'>
//               <li><NavLink to={'/'}>Home</NavLink></li>
//               <li><NavLink to={'/about'}>About</NavLink></li>
//               <li><NavLink to={'/contact'}>Contact</NavLink></li>
//               <li><NavLink>My Projects</NavLink></li>
//             </ul>
//           </nav>
//         </div>
//       </div>  
//     </header>      
//     </>
//   )
// }

// export default Header
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className='bg-slate-100 fixed w-full z-10'>
        <div className="container p-3 flex items-center justify-between">
          <div className="logo px-4 md:px-10">
            <h1 className='text-3xl md:text-4xl'>PORTFOLIO</h1>
          </div>  

          {/* Mobile Menu Toggle Button */}
          <button 
            className="text-3xl md:hidden px-4" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </button>

          {/* Desktop Links */}
          <div className="links hidden md:block">
            <nav>
              <ul className='flex gap-6'>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/about'}>About</NavLink></li>
                <li><NavLink to={'/contact'}>Contact</NavLink></li>
                <li><NavLink to={'/achievements'}>Achievements</NavLink></li>
              </ul>
            </nav>
          </div>
        </div>  
        
        {/* Mobile Links, positioned below the header */}
        {menuOpen && (
          <div className="bg-slate-100 w-full absolute top-full left-0 md:hidden">
            <nav>
              <ul className='flex flex-col items-center gap-4 p-4'>
                <li><NavLink to={'/'} onClick={handleLinkClick}>Home</NavLink></li>
                <li><NavLink to={'/about'} onClick={handleLinkClick}>About</NavLink></li>
                <li><NavLink to={'/contact'} onClick={handleLinkClick}>Contact</NavLink></li>
                <li><NavLink to={'/achievements'} onClick={handleLinkClick}>Achievements</NavLink></li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
