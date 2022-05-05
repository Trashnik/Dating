import './Footer.css';

function Footer() {
    return(
    <div className="Footer-site">

        {/* <h1>FOOOOOOOTER</h1>
        <h2>Ok, my appologies (again)</h2> */}
   <nav className="top-menu">
                    <a className='nav-logo'><img src='./images/empty.png'/></a>
                   <ul className='menu-main'>
					<li><a href="index.html">Main</a></li>
					<li><a class="active" href="about.html">About us</a></li>
					<li><a href="service.html">Contact</a></li>
					<li><a href="feedback.html">Feedback</a></li>
					
                    </ul> 
				</nav>
  

    </div>
    
    );
}

export default Footer;