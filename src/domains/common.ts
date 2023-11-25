export enum NavTabs {
    'News' = 'news',
    'Requests' = 'feedback',
    'Map' = 'map',
    'Polls' = 'polls',
}

export type HeaderTab = {
    name: string;
    link: `/${NavTabs}`;
};
