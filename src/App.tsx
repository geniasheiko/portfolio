import './App.css';
import styled from 'styled-components';
import { Header } from './layoout/header/header';
import { Main } from './layoout/sections/main/Main';
import { Skills } from './layoout/sections/sckills/Skills';
import { Works } from './layoout/sections/works/Works';



function App() {
    return (
        <div className="App">
           <Header />
           <Main />
           <Skills />
           <Works />
        </div>
    );
}

export default App;

