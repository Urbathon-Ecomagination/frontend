import { rootDomain } from '@stores/global';

export type DialogsState = {
    isOpenLogin: boolean;
    isOpenSignUp: boolean;
    isOpenNotLoggedIn: boolean;
    isOpenFeedback: boolean;
};
const dialogsDomain = rootDomain.createDomain();

// --- Events ---
export const setIsOpenLogin = dialogsDomain.createEvent<boolean>();
export const setIsOpenSignUp = dialogsDomain.createEvent<boolean>();
export const setIsOpenNotLoggedIn = dialogsDomain.createEvent<boolean>();
export const setIsOpenFeedback = dialogsDomain.createEvent<boolean>();

const dialogsInitialState: DialogsState = {
    isOpenLogin: false,
    isOpenSignUp: false,
    isOpenNotLoggedIn: false,
    isOpenFeedback: false,
};

export const $dialogs = dialogsDomain
    .createStore<DialogsState>(dialogsInitialState, { name: 'dialogs' })
    .on(setIsOpenLogin, (state, newValue) => ({
        ...state,
        isOpenLogin: newValue,
    }))
    .on(setIsOpenSignUp, (state, newValue) => ({
        ...state,
        isOpenSignUp: newValue,
    }))
    .on(setIsOpenNotLoggedIn, (state, newValue) => ({
        ...state,
        isOpenNotLoggedIn: newValue,
    }))
    .on(setIsOpenFeedback, (state, newValue) => ({
        ...state,
        setIsOpenFeedback: newValue,
    }));
