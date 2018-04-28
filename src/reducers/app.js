import { Map } from 'immutable';

const initialState = Map({
  counter: 0,
  isDataLoading: false,
  patientList: [],
  inOverview: false,
  patientSelected: null,
  fetchingAppointments: false,
  appointments: [],
});

export default function app(state = initialState, action = {}) {
  const { type, ...payload } = action;

  switch (type) {
    case 'ADD_COUNTER':
      return state.set('counter', state.get('counter') + payload.amount);
    case 'SUB_COUNTER':
      return state.set('counter', state.get('counter') - payload.amount);
    case 'FETCHING_PATIENTS':
      return state.set('isDataLoading', true).set('patientSelected', null);
    case 'PATIENTS_LOADED':
      return state.set('isDataLoading', false).set('patientList', payload.data).set('patientSelected', null);
    case 'PATIENT_SELECTED':
      return state.set('patientSelected', payload.id).set('fetchingAppointments', true);
    case 'APPOINTMENTS_FETCHED':
      return state.set('appointments', payload.data).set('fetchingAppointments', false);
    default:
      return state;
  }
}
