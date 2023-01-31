import React from 'react';
import style from './FormList.module.css';

const FormList = ({ items }) => {
	return (
		<ul className={style.formList}>
			{items.map(item => <li key={item}>{item}</li>)}
		</ul>
	);
}

export default FormList;