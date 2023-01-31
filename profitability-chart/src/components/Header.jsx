import React from 'react';
import style from './Header.module.css';
import BurgerMenu from '/Users/vladislav/JS/profitability-chart-react/profitability-chart/src/icons/hambergermenu.svg'
import SearchIcon from '/Users/vladislav/JS/profitability-chart-react/profitability-chart/src/icons/search.svg'


const Header = (props) => {
	return (
		<header className={style.header}>
			<div className={style.headerContainer}>
				<img className={style.headerContainerMenu} src={BurgerMenu} alt="menu" />
				<img className={style.headerContainerSearch} src={SearchIcon} alt="search" />
			</div>
		</header >
	)
}

export default Header;