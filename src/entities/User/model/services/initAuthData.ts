import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from '@/app/providers/StoreProvider';
import type { User } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { getUserDataByIdQuery } from '../../api/userApi';

export const initAuthData = createAsyncThunk<
  User,
  undefined,
  ThunkConfig<string>
>('user/initAuthData', async (User, thunkApi) => {
  const { rejectWithValue, dispatch } = thunkApi;

  const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

  if (!userId) {
    return rejectWithValue('');
  }

  try {
    const response = await dispatch(getUserDataByIdQuery(userId)).unwrap();

    return response;
  } catch (e) {
    console.log(e);
    return rejectWithValue('');
  }
});
