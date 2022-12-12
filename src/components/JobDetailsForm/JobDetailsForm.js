import React, { useEffect } from "react";
import { FloatingLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../../helpers/axios/axios";
import { getJobCategories } from "../../helpers/requests/job_requests";
import {
  POPULATE_JOB_POSTING_FORM,
  UPDATE_EMIRATES_NAMES,
} from "../../store/actions/jobActions";

import "./JobDetailsForm.css";

const JobDetailsForm = () => {
  const dispatch = useDispatch();
  const {
    jobPostingFormData,
    jobPostingFormErrors,
    jobCategories,
    emiratesNames,
  } = useSelector((state) => state.jobsReducer);

  const handleChange = (e) => {
    const jobFormData = jobPostingFormData;
    const name = e.target.name;
    const value = e.target.value;
    const data = { ...jobFormData, [name]: value };
    dispatch({
      type: POPULATE_JOB_POSTING_FORM,
      payload: data,
    });
  };

  const getEmiratesNames = async () => {
    try {
      const response = await axiosInstance.get("jobs/emirates-names/");
      dispatch({
        type: UPDATE_EMIRATES_NAMES,
        payload: response.data.results,
      });
    } catch (error) {
      return console.log(error);
    }
  };

  const FetchFormData = () => {
    Promise.all([getJobCategories(dispatch), getEmiratesNames()]).then(
      function (results) {
        // const categoriesData = results[0]
        // const emiratesData = results[1]
        // console.log("result 0 data >>>>", results[0])
        // console.log("result 1 data >>>>", results[1])
      }
    );
  };

  useEffect(() => {
    FetchFormData();
  }, []);

  return (
    <div>
      <div className="jobDetailsContainer">
        <div className="jobDetailsBox">
          <div className="jobPostHeadline">
            <h1>
              Write a headline for your job post
              <svg
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8534 16.2916H12.2909V10.5416H10.8534V16.2916ZM11.5003 8.76871C11.7239 8.76871 11.9116 8.69683 12.0633 8.55308C12.2151 8.40933 12.2909 8.22565 12.2909 8.00204C12.2909 7.77843 12.2151 7.58676 12.0633 7.42704C11.9116 7.26732 11.7239 7.18746 11.5003 7.18746C11.2767 7.18746 11.089 7.26732 10.9373 7.42704C10.7856 7.58676 10.7097 7.77843 10.7097 8.00204C10.7097 8.22565 10.7856 8.40933 10.9373 8.55308C11.089 8.69683 11.2767 8.76871 11.5003 8.76871ZM11.5003 21.0833C10.1906 21.0833 8.95276 20.8317 7.78678 20.3286C6.62081 19.8255 5.60258 19.1387 4.7321 18.2682C3.86161 17.3977 3.1748 16.3795 2.67168 15.2135C2.16855 14.0475 1.91699 12.8017 1.91699 11.476C1.91699 10.1663 2.16855 8.92843 2.67168 7.76246C3.1748 6.59649 3.86161 5.58225 4.7321 4.71975C5.60258 3.85725 6.62081 3.17444 7.78678 2.67131C8.95276 2.16819 10.1986 1.91663 11.5243 1.91663C12.834 1.91663 14.0719 2.16819 15.2378 2.67131C16.4038 3.17444 17.418 3.85725 18.2805 4.71975C19.143 5.58225 19.8258 6.59649 20.329 7.76246C20.8321 8.92843 21.0837 10.1743 21.0837 11.5C21.0837 12.8097 20.8321 14.0475 20.329 15.2135C19.8258 16.3795 19.143 17.3977 18.2805 18.2682C17.418 19.1387 16.4038 19.8255 15.2378 20.3286C14.0719 20.8317 12.826 21.0833 11.5003 21.0833ZM11.5243 19.6458C13.7764 19.6458 15.693 18.8512 17.2743 17.2619C18.8555 15.6727 19.6462 13.7441 19.6462 11.476C19.6462 9.22392 18.8555 7.30725 17.2743 5.726C15.693 4.14475 13.7684 3.35413 11.5003 3.35413C9.24824 3.35413 7.32758 4.14475 5.73835 5.726C4.14911 7.30725 3.35449 9.2319 3.35449 11.5C3.35449 13.752 4.14911 15.6727 5.73835 17.2619C7.32758 18.8512 9.25623 19.6458 11.5243 19.6458Z"
                  fill="black"
                />
              </svg>
            </h1>
            <input
              type="text"
              className="jobPostHeadlineInput mb-3"
              placeholder="Enter job title..."
              name="name"
              value={jobPostingFormData.name}
              onChange={handleChange}
            />
            <p className={jobPostingFormErrors.name ? "text-danger" : "d-none"}>
              {jobPostingFormErrors.name}
            </p>
            <div className="jobDetailsInputs">
              {/* <input placeholder="Job Name" type="text" required />
              <input placeholder="Job Id" type="text" required /> */}
              <div className="jobDetailsSelector">
                <Form.Label className="font-weight-bold mb-0">
                  Job Category
                </Form.Label>
                <Form.Select
                  className="jobCategoryDrop"
                  size="sm"
                  id="uu"
                  name="category"
                  defaultValue={jobPostingFormData.category}
                  onChange={handleChange}
                >
                  <option defaultValue={0}>Select category</option>
                  {jobCategories.length === 0 ? (
                    <option defaultValue={true}>Loading...</option>
                  ) : (
                    jobCategories.map((category) => {
                      return (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      );
                    })
                  )}
                </Form.Select>
                <p
                  className={
                    jobPostingFormErrors.category ? "text-danger" : "d-none"
                  }
                >
                  {jobPostingFormErrors.category}
                </p>
              </div>
              <div className="ml-5">
                <Form.Label className="font-weight-bold mb-0">
                  Emirates Name
                </Form.Label>
                <Form.Select
                  className="jobCategoryDrop"
                  size="sm"
                  id="emirates"
                  name="emirate_name"
                  defaultValue={jobPostingFormData.emirate_name}
                  onChange={handleChange}
                >
                  <option defaultValue={0}>Select Emirates Name</option>
                  {emiratesNames.length === 0 ? (
                    <option defaultValue={true}>Loading...</option>
                  ) : (
                    emiratesNames.map((emirate) => {
                      return (
                        <option key={emirate.id} value={emirate.id}>
                          {emirate.name}
                        </option>
                      );
                    })
                  )}
                </Form.Select>
                <p
                  className={
                    jobPostingFormErrors.emirate_name ? "text-danger" : "d-none"
                  }
                >
                  {jobPostingFormErrors.emirate_name}
                </p>
              </div>
            </div>
            <h1>
              Job Description
              <svg
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8534 16.2916H12.2909V10.5416H10.8534V16.2916ZM11.5003 8.76871C11.7239 8.76871 11.9116 8.69683 12.0633 8.55308C12.2151 8.40933 12.2909 8.22565 12.2909 8.00204C12.2909 7.77843 12.2151 7.58676 12.0633 7.42704C11.9116 7.26732 11.7239 7.18746 11.5003 7.18746C11.2767 7.18746 11.089 7.26732 10.9373 7.42704C10.7856 7.58676 10.7097 7.77843 10.7097 8.00204C10.7097 8.22565 10.7856 8.40933 10.9373 8.55308C11.089 8.69683 11.2767 8.76871 11.5003 8.76871ZM11.5003 21.0833C10.1906 21.0833 8.95276 20.8317 7.78678 20.3286C6.62081 19.8255 5.60258 19.1387 4.7321 18.2682C3.86161 17.3977 3.1748 16.3795 2.67168 15.2135C2.16855 14.0475 1.91699 12.8017 1.91699 11.476C1.91699 10.1663 2.16855 8.92843 2.67168 7.76246C3.1748 6.59649 3.86161 5.58225 4.7321 4.71975C5.60258 3.85725 6.62081 3.17444 7.78678 2.67131C8.95276 2.16819 10.1986 1.91663 11.5243 1.91663C12.834 1.91663 14.0719 2.16819 15.2378 2.67131C16.4038 3.17444 17.418 3.85725 18.2805 4.71975C19.143 5.58225 19.8258 6.59649 20.329 7.76246C20.8321 8.92843 21.0837 10.1743 21.0837 11.5C21.0837 12.8097 20.8321 14.0475 20.329 15.2135C19.8258 16.3795 19.143 17.3977 18.2805 18.2682C17.418 19.1387 16.4038 19.8255 15.2378 20.3286C14.0719 20.8317 12.826 21.0833 11.5003 21.0833ZM11.5243 19.6458C13.7764 19.6458 15.693 18.8512 17.2743 17.2619C18.8555 15.6727 19.6462 13.7441 19.6462 11.476C19.6462 9.22392 18.8555 7.30725 17.2743 5.726C15.693 4.14475 13.7684 3.35413 11.5003 3.35413C9.24824 3.35413 7.32758 4.14475 5.73835 5.726C4.14911 7.30725 3.35449 9.2319 3.35449 11.5C3.35449 13.752 4.14911 15.6727 5.73835 17.2619C7.32758 18.8512 9.25623 19.6458 11.5243 19.6458Z"
                  fill="black"
                />
              </svg>
            </h1>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Job Description"
            >
              <Form.Control
                as="textarea"
                placeholder="Job Description"
                style={{
                  height: "200px",
                  background: "#F9F9F9",
                }}
                name="description"
                value={jobPostingFormData.description}
                onChange={handleChange}
              />
            </FloatingLabel>
            <p
              className={
                jobPostingFormErrors.description ? "text-danger" : "d-none"
              }
            >
              {jobPostingFormErrors.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsForm;
