import React from 'react';
import PageHeader from '../components/PageHeader';
import classes from './App.module.css';

const App = (): React.ReactNode => {
    return (
        <>
            <PageHeader />
            <div className={classes.wrapper}>

            </div>
        </>
    );
};

export default App;
