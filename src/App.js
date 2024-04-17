import './App.css';
import { Header } from './components/Header';
import { Headermax } from './components/Headermax';
import { Programs } from './components/Programs';
import {About} from './components/About';
import { Campus } from './components/Campus';
import {Testimonials} from './components/Testimonials';
function App() {
  return (
    <>
   <Header/>
   <Headermax/>
   <Programs/>
   <About/>
   <Campus/>
    <Testimonials/>
    </>
  );
}

export default App;
