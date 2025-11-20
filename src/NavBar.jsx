import './NavBar.css'
import kalviumLogo from './assets/kalviumLogo.webp'

function Header(){
    return(
        <>
            <header className="Header">
                <div className="Logo">
                    <img src={kalviumLogo} alt="Kalvium Logo" id='KalLogo'/>
                    <h1>Squad 124</h1>
                </div>
                <ul className="HomeNav">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Mentor">Mentors</a></li>
                    <li><a href="#Student">Students</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </header>
        </>
    )
}

export default Header