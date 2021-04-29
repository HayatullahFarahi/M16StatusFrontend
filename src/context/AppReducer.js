const AppReducer = (state, action) => {
  switch (action.type) {
    case 'GET_SEARCH_FORM_DATA':
      return { ...state, loading: false, searchFormData: action.payload };
    case 'GET_STAGES_DATA':
      return { ...state, loading: false, stages: action.payload };
    case 'ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default AppReducer;
