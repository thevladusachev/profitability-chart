import React from 'react';
import FormList from './FormList/FormList';
import style from './FormOfCalculation.module.css';

const FormOfCalculation = (props) => {
	return (
		<div className={style.formOfCalculation}>
			<form className={style.formOfCalculationWrapper}>
				<div className={style.formListCalc}>
					<FormList items={['Сумма вклада', 'Срок размещения', 'Дата начала срока', 'Процентная ставка', 'Периодичность выплат', 'Пополнение вклада']} />
				</div>
				<div className={style.formList}>

				</div>
			</form>
		</div>
	);
}

export default FormOfCalculation;