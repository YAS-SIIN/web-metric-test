import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/tasksSlice';

export const store = configureStore({
  reducer: {
    tasksReducer: tasksReducer, 
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
