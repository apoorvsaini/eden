import PropTypes from 'prop-types';

/*
 * Accepts an array of actions and return a PropTypes object for validation of actions.
 */
export const mapActionsToPropTypes = (actions) => {
  if (!Array.isArray(actions)) {
    actions = [actions];
  }
  const propTypeMap = {};
  actions.forEach((actionMap) => {
    Object.entries(actionMap).forEach(([key]) => {
      propTypeMap[key] = PropTypes.func.isRequired;
    });
  });
  return PropTypes.shape(propTypeMap);
};

/*
 * Simple utility function to combine an array of assoc arrays into a single
 * assoc array
 */
export const combineArrayOfMaps = (input) => {
  return input.reduce((prev, curr) => { return Object.assign(prev, curr); });
};
