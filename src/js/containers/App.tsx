import React from 'react';
import { Provider } from 'react-redux';
import { rootStore } from '../redux/store';
import PageHeader from '../components/PageHeader';
import PageContent from '../components/PageContent';

const App: React.FC = () => {
    return (
        <>
            <PageHeader />
            <Provider store={rootStore}>
                <PageContent />
            </Provider>
        </>
    );
};

export default App;
