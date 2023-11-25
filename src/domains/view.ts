import { User } from '@domains/user';

export type HomeResult = {
    users: User[];
};

export type HomePageProps = { data: void };
