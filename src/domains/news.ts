import { User } from '@domains/user';

export type Category = {
    id: number;
    name: string;
};

export type NewsCard = {
    id: number;
    title: string;
    text: string;
};

export type NewsDetail = NewsCard & {
    picture: string;
    author: User;
    category: Category;
    date: string;
};
