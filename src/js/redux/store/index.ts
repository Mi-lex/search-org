import { createStore, combineReducers } from 'redux';
import { tabsReducer } from './tabs/reducer';

const rootReducer = combineReducers({
    tab: tabsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const rootStore = createStore(rootReducer);
