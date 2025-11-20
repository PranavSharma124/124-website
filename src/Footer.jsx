import './Footer.css';
import kalviumLogo from './assets/kalviumLogo.webp'

function Footer() {
  return (
    <footer>
      
        <div className="footer-content">

          <div className="logo">
            <img src={kalviumLogo} alt="Kalvium Logo" id='kalLogo'/>
            <h4>Squad 124</h4>
            <p id="idk">Building the future, one line of code at a time.</p>
          </div>
          
          <div className='team'>
            <h4>Our Team:</h4>
            <ul>
              <li id='leader'>Mohit Singh (team lead)</li>
              <li>Pranav Sharma</li>
              <li>Aryan Rustagi</li>
              <li>Mayank Khabya</li>
              <li>Arya Tiwari</li>
              <li>Kanchi Chugh</li>
            </ul>
          </div>

        </div>
        
        <hr />
        <p className="Copyright">©2024 Class Batch Website. Made with ❤️ by Kalvians.</p>

    </footer>
  );
}

export default Footer;