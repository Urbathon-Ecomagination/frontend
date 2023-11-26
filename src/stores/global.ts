import { User } from '@domains/user';
import { createDomain } from 'effector';
import { useUnit } from 'effector-react';

type GlobalDataState = {
    user: User | null;
};

const globalDataDefaultState: GlobalDataState = {
    user: null,
};

export const rootDomain = createDomain();
const globalDataDomain = rootDomain.createDomain();
export const setGlobalData = globalDataDomain.createEvent<GlobalDataState>();

export const $globalData = globalDataDomain
    .createStore<GlobalDataState>(globalDataDefaultState, { name: 'global-data' })
    .on(setGlobalData, (state, value) => value);

export const $commonDataUser = $globalData.map<User | null>((data) => data.user);
export const useGlobalData = (): GlobalDataState => useUnit($globalData);
