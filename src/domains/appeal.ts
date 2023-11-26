import { User } from '@domains/user';

export type Appeal = {
    id: number;
    text: string;
    author: User;
    phone: string;
    email: string;
    date: Date;
    status: string;
};
