import { News } from '@views/News/News';
import { GetServerSideProps } from 'next';
import { MOCK_NEWS_DETAILS } from '@mock/news';
import { NewsPageProps } from '@domains/view';

export const getServerSideProps: GetServerSideProps<NewsPageProps> = async () => {
    return {
        props: { data: MOCK_NEWS_DETAILS },
    };
};
export default News;
