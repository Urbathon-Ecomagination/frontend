import { rootDomain } from '@stores/global';

export type DialogsState = {
    isOpenLogin: boolean;
    isOpenSignUp: boolean;
    isOpenNotLoggedIn: boolean;
    isOpenAppeal: boolean;
};
const dialogsDomain = rootDomain.createDomain();

// --- Events ---
export const setIsOpenLogin = dialogsDomain.createEvent<boolean>();
export const setIsOpenSignUp = dialogsDomain.createEvent<boolean>();
export const setIsOpenNotLoggedIn = dialogsDomain.createEvent<boolean>();
export const setIsOpenAppeal = dialogsDomain.createEvent<boolean>();

const dialogsInitialState: DialogsState = {
    isOpenLogin: false,
    isOpenSignUp: false,
    isOpenNotLoggedIn: false,
    isOpenAppeal: false,
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
    .on(setIsOpenAppeal, (state, newValue) => ({
        ...state,
        isOpenAppeal: newValue,
    }));
