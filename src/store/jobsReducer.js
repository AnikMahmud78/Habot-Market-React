// action - state management

import {
  CLEAR_JOB_POSTING_FORM_DATA,
  CLEAR_JOB_POSTING_FORM_ERRORS,
  POPULATE_JOB_POSTING_FORM,
  UPDATE_EMIRATES_NAMES,
  UPDATE_JOB_CATEGORIES,
  UPDATE_JOB_POSTING_FORM_ERRORS,
} from "./actions/jobActions"

export const initialState = {
  jobPostingFormData: {
    name: "",
    category: "",
    emirate_name: "",
    description: "",
  },
  jobPostingFormErrors: {
    name: "",
    category: "",
    emirate_name: "",
    description: "",
  },
  jobCategories: [],
  emiratesNames: [],
}

//-----------------------|| ACCOUNT REDUCER ||-----------------------//

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULATE_JOB_POSTING_FORM: {
      const data = action.payload
      return { ...state, jobPostingFormData: data }
    }

    case CLEAR_JOB_POSTING_FORM_DATA:
      return {
        ...state,
        jobPostingFormErrors: initialState.jobPostingFormData,
      }

    case UPDATE_JOB_POSTING_FORM_ERRORS: {
      const field = action.field
      const data = action.payload
      return {
        ...state,
        jobPostingFormErrors: { ...state.jobPostingFormErrors, [field]: data },
      }
    }

    case CLEAR_JOB_POSTING_FORM_ERRORS:
      return {
        ...state,
        jobPostingFormErrors: initialState.jobPostingFormErrors,
      }

    case UPDATE_JOB_CATEGORIES: {
      return { ...state, jobCategories: action.payload }
    }

    case UPDATE_EMIRATES_NAMES: {
      return { ...state, emiratesNames: action.payload }
    }

    default: {
      return { ...state }
    }
  }
}

export default jobsReducer
