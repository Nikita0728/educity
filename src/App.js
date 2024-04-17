import './App.css';
import { Header } from './components/Header';
import { Headermax } from './components/Headermax';
import { Programs } from './components/Programs';
import {About} from './components/About';
import { Campus } from './components/Campus';
import {Testimonials} from './components/Testimonials';
import { Contact } from './components/Contact';
function App() {
  return (
    <>
   <Header/>
   <Headermax/>
   <Programs/>
   <About/>
   <Campus/>
    <Testimonials/>
    <Contact/>
    </>
  );
}

export default App;
