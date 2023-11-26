import { rootDomain } from '@stores/global';
import { User } from '@domains/user';

export const profileDomain = rootDomain.createDomain();

type ProfileState = {
    user: User | null;
};

const profileInitialState: ProfileState = {
    user: null,
};

export const setUser = profileDomain.createEvent<ProfileState['user']>();

export const $profile = profileDomain
    .createStore<ProfileState>(profileInitialState, { name: 'profile' })
    .on(setUser, (_, payload) => ({
        user: payload,
    }));

export const $isLoggedIn = $profile.map<boolean>(({ user }) => user !== null);
