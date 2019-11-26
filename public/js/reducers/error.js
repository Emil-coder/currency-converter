var defaultState = {
  errorMsg: ''
}

function error(state = defaultState, action) {
  switch (action.type) {
    case ('RECEIVED_[AJAX_CALL]_FAILURE'):
      return {
        ...state,
        errorMsg: action.data.msg
      }
    default:
      return state;
  }
}

export default error;