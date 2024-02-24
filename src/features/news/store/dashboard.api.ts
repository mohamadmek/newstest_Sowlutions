import {TTagType} from '../../../common/types';
import {gNewsApi} from '../../../services/api/rtkq';

export const tagType: TTagType = 'News';

export const newsApi = gNewsApi.injectEndpoints({
  endpoints: builder => ({
    getNews: builder.query<any, any>({
      query: () => ({
        url: '/todos/1',
      }),
    }),
  }),
  overrideExisting: false,
});

export const {useGetNewsQuery} = newsApi;
