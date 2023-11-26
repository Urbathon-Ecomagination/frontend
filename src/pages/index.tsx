import { Home } from '@views/Home/Home';

import { GetServerSideProps } from 'next';
import { MOCK_NEWS_CARDS } from '@mock/news';
import { HomePageProps } from '@domains/view';

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
    return {
        props: { data: { news: MOCK_NEWS_CARDS } },
    };
};

export default Home;
