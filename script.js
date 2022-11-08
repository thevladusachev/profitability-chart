const contArr = document.querySelector('.container-chart');
const contDiv = document.querySelector('.container-result');
const form = document.querySelector('#form');

const renderResult = (result) => {
	let resultHTMLElement = document.createElement('div');
	resultHTMLElement.textContent = 'Результат: ' + result.toFixed(0);
	resultHTMLElement.classList.add('result')
	contDiv.appendChild(resultHTMLElement);
};

const renderChart = (arrRes) => {
	const createDiv = (value, index, arr) => {
		let chartItem = document.createElement('div');
		chartItem.style.height = value / arr[arr.length - 1] * 100 + '%';
		chartItem.classList.add('chart__element');
		contArr.appendChild(chartItem);
	};

	arrRes.forEach(createDiv);
}

const clearContainers = () => {
	contArr.innerHTML = '';
	contDiv.innerHTML = '';
}

/**
 * Получение данных из инпутов
 * 
 * @returns Значения инпутов
 */
const getInputsValues = () => {
	const years = document.querySelector('#years');
	const percent = document.querySelector('#percent');
	const sum = document.querySelector('#sum');

	return {
		years: years.value,
		percent: percent.value,
		sum: sum.value,
	}
}

/**
 * Функция подсчета доходности
 * @param {number} years - Кол-во лет 
 * @param {number} percent - Доходность в %
 * @param {number} sum - Вложения 
 * 
 * @returns {{result: number, arrRef: number[]}} Результат
 */
const getResult = (years, percent, sum) => {
	let result = Number(sum);
	let arrRes = [];

	for (let i = 0; i < years; i++) {
		result += percent / 100 * result;
		arrRes.push(result);
	}

	return {
		result,
		arrRes
	}
};

const main = (e) => {
	e.preventDefault()
	clearContainers()

	const { years, percent, sum } = getInputsValues()
	const res = getResult(years, percent, sum)

	renderResult(res.result);
	renderChart(res.arrRes);
}

form.addEventListener('submit', main);








