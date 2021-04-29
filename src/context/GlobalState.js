import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import AppReducer from './AppReducer';

//Initial state
const initialState = {
  loading: true,
  error: null,
  stages: {
    count: 2,
    data: [
      {
        stageNo: 1,
        stageName: 'M16 Created',
        printDate: Date.now().toString(),
        chequeNumber: 7978,
        cheqAmount: 123000,
        transitionTime: Date.now().toString(),
        stepNote: 'step1 note',
      },
      {
        stageNo: 2,
        stageName: 'Approval Requested',
        transitionTime: Date.now().toString(),
        stepNote: 'step2 note',
      },
      //   {
      //     stageNo: 3,
      //     stageName: 'Approved',
      //     transitionTime: Date.now().toString(),
      //     stepNote: 'step3 note',
      //   },
    ],
  },
  searchFormData: {
    location: [
      { value: '1', label: 'Kabul' },
      { value: '2', label: 'Balkh' },
      { value: '3', label: 'Herat' },
    ],
    organization: [
      { value: '4', label: 'Ministries' },
      { value: '5', label: 'Provinces' },
      { value: '6', label: 'NGO' },
    ],
    budgetType: [
      { value: '0', label: 'Ordinary Budget - Code: 1' },
      { value: '1', label: 'Development Budget - Code: 2' },
    ],
  },
};

//Create context
export const GlobalContext = createContext(initialState);

//Provider to provide data to components
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  async function getSearchFormData() {
    try {
      const res = await axios.get('URL');

      dispatch({
        type: 'GET_SEARCH_FORM_DATA',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'ERROR',
        payload: {
          message: 'somthing went wrong!',
        },
      });
    }
  }
  function getM16StagesData() {
    dispatch({
      type: 'GET_STAGES_DATA',
      payload: 'demo data',
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        stages: state.stages,
        searchFormData: state.searchFormData,
        getSearchFormData,
        getM16StagesData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
