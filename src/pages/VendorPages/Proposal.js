import React from "react";
import ProposalForm from "../../components/Forms/ProposalForm";
import GlobalLayout from "../../components/Layout/GlobalLayout";
import Poster from "../../components/page/Poster";

export default function Proposal() {
  return (
    <GlobalLayout
      authenticated={true}
      user="images/profile.png"
      notification="3"
      name="David"
    >
      <div className="block lg:flex px-4 md:px-[52px] pt-[10px] lg:pt-[10px] pb-[100px] lg:pb-[133px]">
        <ProposalForm />
        <Poster />
      </div>
    </GlobalLayout>
  );
}
