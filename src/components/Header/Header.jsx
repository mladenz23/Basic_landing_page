import Nav from '../Nav/Nav.jsx';
import './Header.css';
import './HeaderMedia.css';

import headerImg from '../../assets/images/man-silhouette-profile-picture-vector-2139732.png';

export default function Header() {
  return (
    <header id='header'>
      <Nav />
      <div id='header-content--wrapper'>
        <div id='header-content--left'>
          <h1>Welcome to my page</h1>
          <h2>My name is {'<Insert Name>'}</h2>
          <div id="break-line"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br />nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div id='header-content--right'>
          <img src={headerImg} alt='male silhouette' />
        </div>
      </div>
    </header>
  );
}
