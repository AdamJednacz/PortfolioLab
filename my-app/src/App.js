import './scss/App.scss';
import {
    Route,
    Routes,
    BrowserRouter
} from 'react-router-dom';

import Home from "./components/Home"

import Login from "./components/Login";
import Register from "./components/Register"

export const isLoggedIn = false; //
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/Login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
