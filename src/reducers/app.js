import { Map } from 'immutable';

const initialState = Map({
  counter: 0,
  isDataLoading: false,
  patientList: [],
  inOverview: false,
  patientSelected: null,
});

export default function app(state = initialState, action = {}) {
  const { type, ...payload } = action;

  switch (type) {
    case 'ADD_COUNTER':
      return state.set('counter', state.get('counter') + payload.amount);
    case 'SUB_COUNTER':
      return state.set('counter', state.get('counter') - payload.amount);
    case 'FETCHING_PATIENTS':
      return state.set('isDataLoading', true);
    case 'PATIENTS_LOADED':
      return state.set('isDataLoading', false).set('patientList', payload.data);
    default:
      return state;
  }
}
