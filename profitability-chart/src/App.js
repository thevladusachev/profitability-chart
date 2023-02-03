import React from 'react';
import './App.css';
import FormOfCalculation from './components/FormOfCalculation/FormOfCalculation';
import Header from './components/Header';
import Title from './components/Title/Title';

function App() {
	return (
		<div className="AppWrapper">
			<Header />
			<Title title='Калькулятор доходности вклада онлайн' />
			<FormOfCalculation />
		</div>
	);
}

export default App;
