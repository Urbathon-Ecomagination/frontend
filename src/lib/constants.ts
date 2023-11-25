export const defaultMapControls = ['geolocationControl', 'zoomControl', 'fullscreenControl'];

export const defaultMapModules: YandexMapModule[] = [
    'control.ZoomControl',
    'control.FullscreenControl',
    'control.GeolocationControl',
    'geoObject.addon.balloon',
    'util.bounds',
    'templateLayoutFactory',
];

export type YandexMapModule =
    | 'control.ZoomControl'
    | 'control.FullscreenControl'
    | 'control.GeolocationControl'
    | 'geoObject.addon.balloon'
    | 'util.bounds'
    | 'templateLayoutFactory';
