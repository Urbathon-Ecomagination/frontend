import { HeaderTab, NavTabs } from '@domains/common';
import { makeRoute } from '@lib/utils';

export const HeaderTabs: HeaderTab[] = [
    {
        name: 'Новости',
        link: makeRoute(NavTabs.News),
        needAuth: false,
    },
    {
        name: 'Обращения',
        link: makeRoute(NavTabs.Requests),
        needAuth: true,
    },
    {
        name: 'Опросы',
        link: makeRoute(NavTabs.Polls),
        needAuth: true,
    },
    {
        name: 'Карта',
        link: makeRoute(NavTabs.Map),
        needAuth: false,
    },
];
