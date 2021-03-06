import { Map } from 'immutable';

const initialState = Map({
  counter: 0,
  isDataLoading: false,
  patientList: [],
  inOverview: false,
  patientSelected: null,
  patientNameSelected: null,
  fetchingAppointments: false,
  appointments: [],
  messageCount: 0,
  currentScene: 'patients',
  userNameCache: {},
  appointmentPage: 1,
  allAppointments: [],
});

export default function app(state = initialState, action = {}) {
  const { type, ...payload } = action;

  switch (type) {
    case 'FETCHING_PATIENTS':
      return state.set('isDataLoading', true).set('patientSelected', null).set('patientNameSelected', null);
    case 'SETUP_USER_CACHE':
      return state.set('userNameCache', payload.data);
    case 'PATIENTS_LOADED':
      return state.set('isDataLoading', false).set('patientList', payload.data).set('patientSelected', null).set('patientNameSelected', null).set('messageCount', 0);
    case 'PATIENT_SELECTED':
      return state.set('patientSelected', payload.id).set('patientNameSelected', payload.name).set('fetchingAppointments', true);
    case 'SET_MESSAGE_COUNT':
      return state.set('messageCount', payload.count);
    case 'APPOINTMENTS_FETCHED':
      return state.set('appointments', payload.data).set('fetchingAppointments', false); 
    case 'SET_ALL_APPOINTMENTS':
      return state.set('allAppointments', payload.data); 
    case 'CHANGE_SCENE':
      if (payload.scene === 'patients')
        return state.set('currentScene', payload.scene).set('appointments', []).set('patientNameSelected', null).set('patientList', []).set('isDataLoading', true).set('messageCount', 0);
      else
        return state.set('currentScene', payload.scene).set('appointments', []).set('patientNameSelected', null).set('patientList', []).set('isDataLoading', false);
    default:
      return state;
  }
}
