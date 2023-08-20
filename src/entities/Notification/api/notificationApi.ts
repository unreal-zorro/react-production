import { rtkApi } from 'shared/api/rktApi';
import { type Notifications } from '../model/types/notifications';

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notifications[], null>({
      query: () => ({
        url: '/notifications'
      })
    })
  })
});

export const useNotifications = notificationApi.useGetNotificationsQuery;
