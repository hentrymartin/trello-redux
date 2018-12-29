const defaultState = {
  emptyState: 'emptyState',
};

const AppReducer = function(state = defaultState, actions) {
  switch (actions.type) {
    case 'DUMMY_ACTION':
      return state;
    default:
      return state;
  }
};

export default AppReducer;
