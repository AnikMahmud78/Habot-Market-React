import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PayButton from "../Global/PayButton";

export default function ProposalForm() {
  const [vendorProposal, setVendorProposal] = useState();
  const [files, setFiles] = useState([]);
  useEffect(() => {
    console.log(vendorProposal);
    axios
      .post(`https://habot.io/jobs/apply-job/${vendorProposal?.job_post}`)
      .then(
        (response) => {
          setVendorProposal(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  console.log(vendorProposal);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmitHandler = (data) => {
    // console.log(data);
    // console.log(data);
  };

  const handleClick = (event) => {
    document.getElementById("document").click();
  };

  const handleChange = (e) => {
    setFiles([...files, e.target.files[0]]);
  };

  const deleteHandler = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmitHandler)}
      className="w-full lg:w-[58%] bg-white shadow-form px-4 lg:px-[42px] pt-8 lg:pt-14 pb-[50px] lg:pb-[70px] rounded-r-[10px] rounded-l-[10px] lg:rounded-r-none"
    >
      <div className="flex gap-[10px] items-center">
        <span className="text-2xl lg:text-[30px] text-[#232222] font-semibold">
          Create your proposal
        </span>
        <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[10px] rounded-[0.8px] border-l-lime-500"></div>
      </div>
      <div className="bg-tailSecondary flex justify-between items-center rounded-[5px] w-full px-4 lg:px-8  lg:py-[10px] mt-4 lg:mt-8">
        <span className="text-white text-base lg:text-xl font-semibold">
          Job Headline Demo
        </span>
        <div className="flex gap-1 items-center">
          <span className="text-white text-sm lg:text-lg font-medium">
            Client Name
          </span>
          <img src="images/account.svg" width={20} height={20} alt="account" />
        </div>
      </div>
      <div className="mt-8">
        <label className="text-base lg:text-lg font-semibold" htmlFor="subject">
          <span className="text-black">Subject</span>
          <span className="text-[#E91010] pl-1">*</span>
        </label>
        <input
          type="text"
          id="subject"
          className="block w-full mt-3 outline-none border border-[#B1B0B0] rounded-[5px] py-2 lg:py-5 px-4 lg:px-8 placeholder:text-sm placeholder:text-[#8E8E8E]"
          placeholder="Enter your subject here"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <span className="text-xs leading-5 text-[#E91010]">
            This field is required
          </span>
        )}
      </div>
      <div className="mt-8">
        <label
          className="text-base lg:text-lg font-semibold"
          htmlFor="proposal"
        >
          <span className="text-black">Your proposal</span>
          <span className="text-[#E91010] pl-1">*</span>
        </label>
        <textarea
          id="proposal"
          className="block mt-3 w-full outline-none border border-[#B1B0B0] rounded-[5px] py-2 lg:py-5 px-4 lg:px-8 placeholder:text-sm placeholder:text-[#8E8E8E]"
          placeholder="Describe your proposal here"
          rows={5}
          {...register("proposal", { required: true })}
        />
        {errors.proposal && (
          <span className="text-xs leading-5 text-[#E91010]">
            This field is required
          </span>
        )}
      </div>
      <div className="mt-8">
        <label className="text-black text-base lg:text-lg">
          <span className="font-semibold">Upload neccessary documents </span>
          <span className="font-light">(if any)</span>
        </label>
        <input
          type="file"
          className="hidden"
          id="document"
          onChange={handleChange}
        />
        <button
          className="w-full bg-[#292D55] text-white mt-3 py-3 lg:py-[23px] flex justify-center items-center gap-2 rounded-[5px]"
          type="button"
          onClick={handleClick}
        >
          <span className="textbase lg:text-lg">Upload your document</span>
          <img src="images/upload.svg" width={29} height={29} alt="upload" />
        </button>
        {files && (
          <div className="mt-2">
            {files.map((file, key) => (
              <div key={key} className="flex justify-between pr-2">
                <span className="text-[#8E8E8E] font-medium">{file.name}</span>
                <button onClick={deleteHandler.bind(null, file.name)}>
                  <img
                    src="images/delete.svg"
                    width={24}
                    height={24}
                    alt="delete"
                  />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <span className="text-[10px] leading-4 text-[#8E8E8E] block pt-3 lg:pt-8">
        Attach file. File size of your documents should not exceed 10MB
      </span>
      <div className="flex justify-center mt-14">
        <PayButton type="submit" />
      </div>
    </form>
  );
}
