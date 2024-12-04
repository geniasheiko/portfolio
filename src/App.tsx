import './App.css';
import styled from 'styled-components';
import { Header } from './layoout/header/header';
import { Main } from './layoout/sections/main/Main';



function App() {
    return (
        <div className="App">
           <Header />
           <Main />
        </div>
    );
}

export default App;

