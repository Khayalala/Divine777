// import "../styles/Header.css";

// const Header = () => {
//   return (
//     <header className="mystic-header">
//       <div className="logo">
//         <h1>Khayala's Celestial Insights</h1>
//         <p className="tagline">
//           “Your divine inheritance includes all of your earthly needs being met,
//           as well as receiving all of your heart’s desires.”
//         </p>
//       </div>
//       <nav className="nav-menu">
//         <a href="#angel-numbers">Angel Numbers</a>
//         <a href="#angelic-cards">Angelic Cards</a>
//         <a href="#contact">Contact</a>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import "../styles/Header.css";

const Header = () => {
  return (
    <header className="mystic-header">
      <div className="logo">
        <h1>Khayala's Celestial Insights</h1>
        <div className="quote-container">
          <p className="quote">
            “Your divine inheritance includes all of your earthly needs being
            met, as well as receiving all of your heart’s desires.” <span className="quote-author">Kaia Ra, The Sophia Code</span>
          </p>
        </div>
      </div>
      <nav className="nav-menu">
        <a href="#angel-numbers">Angel Numbers</a>
        <a href="#angelic-cards">Angelic Cards</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
