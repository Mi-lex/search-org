import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../redux/store';
import { changeTab } from '../../../redux/store/tabs/actions';
import { TabName } from '../../../constants/tabs';
import { classesExtractor } from '../../../utils';
import classes from './Tab.module.css';

const mapState = (state: RootState) => ({
    currentTab: state.tab.current,
});

const mapDispatch = {
    changeTab,
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector> & {
    name: TabName;
    children?: JSX.Element;
};

const Tab = ({ currentTab, changeTab, name, children = `` }: Props) => {
    const tabClassName: string[] = ['tab'];

    if (currentTab === name) {
        tabClassName.push('active');
    }

    return (
        <li key={name}>
            <button
                className={classesExtractor(classes, tabClassName)}
                type="button"
                onClick={(): void => {
                    changeTab(name);
                }}
            >
                {name}
                {children}
            </button>
        </li>
    );
};

export default connector(Tab);
