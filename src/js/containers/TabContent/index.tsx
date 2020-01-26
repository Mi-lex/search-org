import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../redux/store';
import { TabName } from '../../constants/tabs';
import classes from './TabContent.module.css';
import { classesExtractor } from '../../utils';

const mapState = (state: RootState) => ({
    currentTab: state.tab.current,
});

const connector = connect(mapState, null);

type Props = ConnectedProps<typeof connector> & {
    name: TabName;
    children: JSX.Element;
};

const TabContent = ({ currentTab, name, children }: Props): JSX.Element => {
    const tabContentClassName: string[] = ['tab-content'];

    if (currentTab === name) {
        tabContentClassName.push('active');
    }

    return <div className={classesExtractor(classes, tabContentClassName)}>{children}</div>;
};

export default connector(TabContent);
