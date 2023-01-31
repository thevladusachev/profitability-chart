import React from 'react';
import style from './Title.module.css';

const Title = (props) => {
	return (
		<div className={style.title}>
			<p>{props.title}</p>
		</div>
	);
}

export default Title;