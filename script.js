const contArr = document.querySelector('.container-chart');
const contDiv = document.querySelector('.container-result');
const form = document.querySelector('#form');
const outerChart = document.querySelector('.chart__outer');

/**
 * Создание div с результатом 
 * @param {number} result - Итоговая сумма
 */
const renderResult = (result) => {
	let resultHTMLElement = document.createElement('div');
	resultHTMLElement.textContent = 'Результат: ' + result.toFixed(0);
	resultHTMLElement.classList.add('result')
	contDiv.appendChild(resultHTMLElement);
};

/**
 * Создание графика
 * @param {number[]} arrRes 
 */
const renderChart = (arrRes) => {
	const createDiv = (value, index, arr) => {
		let outerChartItem = document.createElement('div');
		outerChartItem.classList.add('chart__outer');

		outerChartItem.innerHTML = `
			
				<div style="height: ${value / arr[arr.length - 1] * 100 + '%'}" class="chart__element">
				
				</div>
				<div>${value.toFixed(0)}</div>
		`


		contArr.appendChild(outerChartItem);
	};

	arrRes.forEach(createDiv);
}

/**
 * Очистка контейнеров
 */
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
	const annualReplenishment = document.querySelector('#annRepl');

	return {
		years: years.value,
		percent: percent.value,
		sum: sum.value,
		annualReplenishment: annualReplenishment.value,
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
const getResult = (years, percent, sum, annualReplenishment) => {
	let result = Number(sum);
	let arrRes = [];

	for (let i = 0; i < years; i++) {
		result = (Number(annualReplenishment) + result) * (1 + percent / 100);
		arrRes.push(result);
	}

	return {
		result,
		arrRes
	}
};

/**
 * Функция вычисляющая результат и выводящая график на экран
 */
const main = (e) => {
	e.preventDefault()
	clearContainers()

	const { years, percent, sum, annualReplenishment } = getInputsValues()
	const res = getResult(years, percent, sum, annualReplenishment)

	renderResult(res.result);
	renderChart(res.arrRes);
};

form.addEventListener('submit', main);

toggleThemeBtn.onclick = () => {
	document.body.classList.toggle('dark-theme');
	toggleThemeBtn.innerText = document.body.classList.contains('dark-theme') ? 'Светлая тема' : 'Темная тема';
}








