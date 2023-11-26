export enum NavTabs {
    'News' = 'news',
    'Requests' = 'appeal',
    'Map' = 'map',
    'Polls' = 'polls',
}

export type HeaderTab = {
    name: string;
    link: string;
    needAuth: boolean;
};
