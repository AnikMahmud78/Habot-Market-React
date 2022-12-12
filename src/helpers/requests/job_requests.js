import { UPDATE_JOB_CATEGORIES } from "../../store/actions/jobActions"
import { axiosInstance } from "../axios/axios"

export const getJobCategories = async (dispatch) => {
  try {
    const response = await axiosInstance.get("jobs/job-categories/")
    dispatch({
      type: UPDATE_JOB_CATEGORIES,
      payload: response.data.results,
    })
  } catch (error) {
    return console.log(error)
  }
}

export const handleJobPosting = async (
  data,
  loadStateFunc,
  navigateFunc,
  navigateUrl
) => {
  try {
    if (typeof loadStateFunc === "function") {
      loadStateFunc(true)
    }
    const response = axiosInstance.post("jobs/create-job/", data)

    if (typeof loadStateFunc === "function") {
      loadStateFunc(false)
    }

    if (typeof navigateFunc === "function") {
      navigateFunc(navigateUrl)
    }
    return response
  } catch (err) {
    console.log(err)
    if (typeof loadStateFunc === "function") {
      loadStateFunc(false)
    }
    return "error"
  }
}
