import React from "react";

const EscalationChannels = () => {
  return (
    <div className="mt-5 md:mt-0 lg:mt-0 lg:w-[45%] bg-subtle-neutral py-10 px-8">
      <div className="pb-8">
        <h4 className="mb-4 text-xl md:text-2xl text-primary font-regular">Escalation Channels</h4>
        <p className="mb-8 text-secondary ">
          If you are not satisfied with your complaint resolution, you may
          escalate your complaint via the escalation channels listed below
          within thirty (30) business days from our response.
        </p>
        <p className="border border-default inline-block w-10"></p>
      </div>

      <div className="pb-6">
        <h6 className="mb-2 text-primary text-lg font-regular">Contact us by post mail</h6>
        <p className="text-secondary ">Customer Service and Excellence Unit,</p>
        <p className="text-secondary ">Arab Financial Services Company B.S.C. (c),</p>
        <p className="text-secondary ">PO BOX 2152</p>
        <p className="mb-8 text-secondary ">Manama, Kingdom of Bahrain</p>
        <p className="border border-default inline-block w-10"></p>
      </div>

      <div>
        <h6 className="mb-2 text-primary text-lg font-regular">Contact us by email</h6>
        <p className="text-brand-secondary ">
          <a href="mailto:complaintsofficer@afs.com.bh">
            complaintsofficer@afs.com.bh
          </a>
        </p>
      </div>
    </div>
  );
};

export default EscalationChannels;
