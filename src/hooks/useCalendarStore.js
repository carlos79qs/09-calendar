import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onSetActiveEvent, onUpdateEvent } from '../store';

export const useCalendarStore = () => {
	const dispatch = useDispatch();

	const { events, activeEvent } = useSelector((state) => state.calendar);

	const setActiveEvent = (calendarEvent) => {
		dispatch(onSetActiveEvent(calendarEvent));
	};

	const startSavingEvent = (calendarEvent) => {
		if (calendarEvent._id) {
			// Actualizando evento
			dispatch(onUpdateEvent({ ...calendarEvent }));
		} else {
			// Creando nuevo evento
			dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
		}
	};

	return {
		//* Propiedades
		activeEvent,
		events,
		//* Métodos
		setActiveEvent,
		startSavingEvent,
	};
};
