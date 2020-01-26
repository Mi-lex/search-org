import React from 'react';
import classes from './PageContent.module.css';
import Tabs from '../Tabs';

const PageContent: React.FC = () => {
    return (
        <>
            <div className={classes.wrapper}>
                <h1>Мои организации</h1>
                <Tabs />
            </div>
        </>
    );
};

export default PageContent;
