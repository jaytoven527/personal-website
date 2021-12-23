import './App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Homepage, About, Summary, Work, Tech} from './components/pages';

function App () {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="About" element={<About />} />
            <Route path="Sum" element={<Summary />} />
            <Route path="Work" element={<Work />} />
            <Route path="Tech" element={<Tech />} />
        </Routes>
    )
}


export default App;