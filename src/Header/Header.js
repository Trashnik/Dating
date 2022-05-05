import './Header.css';

function Header() {
    return(
        
    <div className="Header-site">
         
        {/* <h1>Wanna date? LOL XD</h1>
        <h2>Ok, my appologies</h2> */}
        <div class="navg">
        <nav className="top-menu">
                     <a className='nav-logo'><img src='./images/header-logo.png'/></a>
                   <ul className='menu-main'>
					<li><a href="index.html">Main</a></li>
					<li><a class="active" href="about.html">About us</a></li>
					<li><a href="service.html">Contact</a></li>
					<li><a href="feedback.html">Feedback</a></li>
					
                    </ul> 
				</nav>
                </div>
    </div>
    );
}

export default Header;