import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Murex from './Interface/Murex'; // Assurez-vous que le chemin est correct
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Murex />} />
            </Routes>
        </Router>
    );
}

export default App;
