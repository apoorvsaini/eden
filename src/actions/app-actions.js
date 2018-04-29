

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

export const PATIENT_SELECTED = (id, name) => ({
  type: 'PATIENT_SELECTED',
  id: id,
  name: name
}); 

export const SET_MESSAGE_COUNT = (count) => ({
  type: 'SET_MESSAGE_COUNT',
  count: count
})

export const APPOINTMENTS_FETCHED = (data) => ({
  type: 'APPOINTMENTS_FETCHED',
  data: data
});

export const CHANGE_SCENE = (scene) => ({
  type: 'CHANGE_SCENE',
  scene: scene
});

export const SET_ALL_APPOINTMENTS = (data) => ({
  type: 'SET_ALL_APPOINTMENTS',
  data: data
});

export const SETUP_USER_CACHE = (data) => ({
  type: 'SETUP_USER_CACHE',
  data: data
});

export const AppActions = {
  ADD_COUNTER,
  SUB_COUNTER,
  FETCHING_PATIENTS,
  PATIENTS_LOADED,
  PATIENT_SELECTED,
  APPOINTMENTS_FETCHED,
  CHANGE_SCENE,
  SET_MESSAGE_COUNT,
  SET_ALL_APPOINTMENTS,
  SETUP_USER_CACHE
};
