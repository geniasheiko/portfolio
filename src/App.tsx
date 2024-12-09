import './App.css';
import styled from 'styled-components';
import { Main } from './layoout/sections/main/Main';
import { Skills } from './layoout/sections/sckills/Skills';
import { Works } from './layoout/sections/works/Works';
import { Header } from './layoout/header/Header';
import { Testimony } from './layoout/sections/testimony/Testimony';
import {Contact} from './layoout/sections/contacts/Contacts'
import { Slogan } from './layoout/sections/slogan/Slogan';
import { Footer } from './layoout/footer/Footer';



function App() {
    return (
        <div className="App">
           <Header />
           <Main />
           <Skills />
           <Works />
           <Testimony />
           <Contact />
           <Slogan />
           <Footer />
        </div>
    );
}

export default App;

