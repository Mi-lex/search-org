import React from 'react';
import PageHeader from '../components/PageHeader';
import classes from './App.module.css';

const App = (): React.ReactNode => {
    return (
        <>
            <PageHeader />
            <div className={classes.wrapper}>
                <h1>Мои организации</h1>
            </div>
        </>
    );
};

export default App;
