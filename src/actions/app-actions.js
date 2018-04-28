

export const ADD_COUNTER = (amount = 1) => ({
  type: 'ADD_COUNTER',
  amount,
});

export const SUB_COUNTER = (amount = 1) => ({
  type: 'SUB_COUNTER',
  amount,
});

export const FETCHING_PATIENTS = () => ({
  type: 'FETCHING_PATIENTS',
});

export const PATIENTS_LOADED = (data) => ({
  type: 'PATIENTS_LOADED',
  data: data
});

export const AppActions = {
  ADD_COUNTER,
  SUB_COUNTER,
  FETCHING_PATIENTS,
  PATIENTS_LOADED
};
