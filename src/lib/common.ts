import { HeaderTab, NavTabs } from '@domains/common';

export const HeaderTabs: HeaderTab[] = [
    {
        name: 'Новости',
        link: `/${NavTabs.News}`,
    },
    {
        name: 'Обращения',
        link: `/${NavTabs.Requests}`,
    },
    {
        name: 'Опросы',
        link: `/${NavTabs.Polls}`,
    },
    {
        name: 'Карта',
        link: `/${NavTabs.Map}`,
    },
];
