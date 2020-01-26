import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../redux/store';
import { changeTab } from '../../redux/store/tabs/actions';
import { TabName } from '../../constants/tabs';
import { classesExtractor } from '../../utils';

import classes from './Tabs.module.css';

const mapState = (state: RootState) => ({
    currentTab: state.tab.current,
});

const mapDispatch = {
    changeTab,
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

const tabNames: TabName[] = ['new', 'saved'];

const Tabs = ({ currentTab, changeTab }: Props) => {
    return (
        <>
            <ul className={classes.tabs}>
                {tabNames.map(tabName => {
                    const tabClassName: string[] = ['tab'];

                    if (currentTab === tabName) {
                        tabClassName.push('active');
                    }

                    return (
                        <li key={tabName}>
                            <button
                                className={classesExtractor(classes, tabClassName)}
                                type="button"
                                onClick={(): void => {
                                    changeTab(tabName);
                                }}
                            >
                                {tabName}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default connector(Tabs);
