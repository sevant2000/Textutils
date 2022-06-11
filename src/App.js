
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForms from './component/TextForms';



function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      <div className="container my-3">
      <TextForms heading="Type your Text Below"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
