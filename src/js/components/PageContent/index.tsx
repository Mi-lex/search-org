import React from 'react';
import Tabs from '../Tabs';
import TabContent from '../../containers/TabContent';
import classes from './PageContent.module.css';

const PageContent: React.FC = () => {
    return (
        <>
            <div className={classes.wrapper}>
                <h1>Мои организации</h1>
                <Tabs />
                <TabContent name="Новая организация">
                    <label htmlFor="">Does it matter ?</label>
                </TabContent>
                <TabContent name="Сохраненные организации">
                    <h2>Saved organizations</h2>
                </TabContent>
            </div>
        </>
    );
};

export default PageContent;
