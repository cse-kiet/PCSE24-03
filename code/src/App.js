import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Models3D from './pages/3DModels/3DModels';
import Chatbot from './components/Chatbot/Chatbot';
import './App.css';
import Sample from './components/Sample';
import F6sample from './components/F6sample';
import Turbosample from './components/Turbosample';
import V8sample from './components/V8sample';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/models3D" exact element={<Models3D />} />
					<Route path="/combustion" exact element={<Sample />} />
					<Route path="/f6boxer" exact element={<F6sample />} />
					<Route path="/turbofan" exact element={<Turbosample />} />
					<Route path="/v8pontic" exact element={<V8sample />} />
				</Routes>

				<Chatbot />
			</Router>
		</>
	);
}

export default App;
