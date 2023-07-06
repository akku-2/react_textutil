
import './App.css';
import Nav from './component/navb';
import Textform from './component/Textform';

function App() {
  return (
    <>
    <Nav title='Textutils'/>
    <div className="container">
    <Textform heading='Enter The text to analyze'/>
    </div>
   
    
    </>
  );
}


export default App;
