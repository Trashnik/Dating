
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header/>
     {/* <h1>This is your chance</h1> */}
     {/* <p className="text">Just fill the blank and wait for results)</p> */}

    
    <Main/>
    <Footer/>
    <img className='logo'  src='./images/logo.png'/>
    </div>
  );
}

export default App;


