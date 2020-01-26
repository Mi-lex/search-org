import React from 'react';
import logoIcon from '../../../img/icons/logo.svg';
import classes from './PageHeader.module.css';

const PageHeader: React.FC = () => {
    return (
        <header className={classes.header}>
            <img src={logoIcon} alt="search compony logo" />
        </header>
    );
};

export default PageHeader;
