import React from 'react';
import Tab from './Tab';
import SavedOrgsCounter from './SavedOrgsCounter';
import classes from './Tabs.module.css';

const Tabs = (): JSX.Element => {
    return (
        <>
            <ul className={classes.tabs}>
                <Tab name="Новая организация" />
                <Tab name="Сохраненные организации">
                    <SavedOrgsCounter />
                </Tab>
            </ul>
        </>
    );
};

export default Tabs;
