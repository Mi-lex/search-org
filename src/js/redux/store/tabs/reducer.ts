import { CHANGE_TAB, TabsState, TabActionType } from './types';

const initialState: TabsState = {
    current: 'new',
};

export function tabsReducer(state = initialState, action: TabActionType): TabsState {
    switch (action.type) {
        case CHANGE_TAB:
            return {
                current: action.current,
            };
        default:
            return state;
    }
}
