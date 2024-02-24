import {API_KEY} from '../../../app/constants';
import {TTagType} from '../../../common/types';
import {gNewsApi} from '../../../services/api/rtkq';
import {IArticle} from '../types';

export const tagType: TTagType = 'News';

export const newsApi = gNewsApi.injectEndpoints({
  endpoints: builder => ({
    getNews: builder.query<Array<IArticle>, any>({
      query: () => ({
        url: `/top-headlines?category=general&max=10&lang=en&apikey=${API_KEY}`,
      }),
      transformResponse: (response: {articles: Array<IArticle>}) => {
        return response.articles;
      },
      providesTags: () => [{type: tagType, id: 'LIST'}],
    }),
    searchNews: builder.query<Array<IArticle>, string>({
      query: search => {
        console.log('SEARCH ', search);
        return {
          url: `/search?q=${search}&max=10&lang=en&apikey=${API_KEY}`,
        };
      },
      transformResponse: (response: {articles: Array<IArticle>}) => {
        return response.articles;
      },
    }),
  }),
  overrideExisting: true,
});

export const {useGetNewsQuery, useLazySearchNewsQuery} = newsApi;
