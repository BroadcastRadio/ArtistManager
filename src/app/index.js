import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';

import Artist from './artist';
import Artists from './artists';

export default function App () {
	return <>
		<div className="header">
			<h1 className="app_name">
				Artist Management
			</h1>
		</div>

		<BrowserRouter>
			<Routes>
				<Route element={ <Artist /> } path="/artists/:id" />
				<Route element={ <Artists /> } path="/" />
			</Routes>
		</BrowserRouter>
	</>
}
