import { NewsCard, NewsDetail } from '@domains/news';

export type HomeResult = { news: NewsCard[] };

export type HomePageProps = { data: HomeResult };
export type NewsPageProps = { data: NewsDetail[] };
