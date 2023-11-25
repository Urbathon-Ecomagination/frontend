import { NewsCard } from '@domains/news';
import { fakerRU as faker } from '@faker-js/faker';

export const NEWS_CARDS: NewsCard[] = [
    {
        id: faker.number.int(),
        title: 'Крупная коммунальная авария',
        description:
            'В центре Екатеринбурга произошла крупная коммунальная авария. Напротив центрального паркинга ТРЦ «Гринвич» прорвало трубу в канализационном колодце, вода рекой потекла по улице.\n' +
            '— Вот это фонтан! — восклицает очевидец.\n' +
            '— Каток зато будет, — шутит другой.\n' +
            'Мы запросили комментарий у Водоканала. Как только ответ появится, мы дополним новость.\n' +
            'Коммунальные аварии в Екатеринбурге случаются часто. Накануне мы рассказывали, как во дворах на Татищева случился настоящий потоп. Вода поднялась из люка на парковке и затопила дороги и автомобили. Местным жителям пришлось расчищать снежную кашицу самостоятельно.',
    },
    {
        id: faker.number.int(),
        title: faker.lorem.words({ min: 2, max: 5 }),
        description: faker.lorem.paragraphs(3),
    },
    {
        id: faker.number.int(),
        title: faker.lorem.words({ min: 2, max: 5 }),
        description: faker.lorem.paragraphs(3),
    },
    {
        id: faker.number.int(),
        title: faker.lorem.words({ min: 2, max: 5 }),
        description: faker.lorem.paragraphs(5),
    },
];
