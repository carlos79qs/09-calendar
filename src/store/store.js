import { configureStore } from '@reduxjs/toolkit';
import { calendarSlice, uiSlice } from './';

export const store = configureStore({
	reducer: {
		ui: uiSlice.reducer,
		calendar: calendarSlice.reducer,
	},
	//* Evita el error con la serialización de las fechas
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
