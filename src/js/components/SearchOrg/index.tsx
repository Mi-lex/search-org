import React from 'react';
import classes from './SearchOrg.module.css';

const SearchOrg = (): JSX.Element => {
    return (
        <>
            <label htmlFor="orgInput">Организация или ИП</label>
            <input type="text" className={classes.inp} placeholder="Введите название, ИНН или адрес организации" />
            <div className={classes.hint}>
                <span className={classes.icon}></span>
                <p className={classes['hint-message']}>
                    Для добавления новой организации введите ее название, ИНН или адрес.
                </p>
            </div>
        </>
    );
};

export default SearchOrg;
