import React from "react";

const EscalationChannels = () => {
  return (
    <div className="mt-5 md:mt-0 lg:mt-0 lg:w-[45%] bg-subtle-neutral py-10 px-8">
      <div className="pb-8">
        <h1 className="mb-4 text-xl md:text-2xl text-primary">Escalation Channels</h1>
        <p className="mb-8 text-secondary font-light">
          If you are not satisfied with your complaint resolution, you may
          escalate your complaint via the escalation channels listed below
          within thirty (30) business days from our response.
        </p>
        <p className="border border-default inline-block w-10"></p>
      </div>

      <div className="pb-6">
        <h1 className="mb-2 text-primary text-lg">Contact us by post mail</h1>
        <p className="text-secondary font-light">Customer Service and Excellence Unit,</p>
        <p className="text-secondary font-light">Arab Financial Services Company B.S.C. (c),</p>
        <p className="text-secondary font-light">PO BOX 2152</p>
        <p className="mb-8 text-secondary font-light">Manama, Kingdom of Bahrain</p>
        <p className="border border-default inline-block w-10"></p>
      </div>

      <div>
        <h1 className="mb-2 text-primary text-lg">Contact us by email</h1>
        <p className="text-brand-secondary font-light">
          <a href="mailto:complaintsofficer@afs.com.bh">
            complaintsofficer@afs.com.bh
          </a>
        </p>
      </div>
    </div>
  );
};

export default EscalationChannels;