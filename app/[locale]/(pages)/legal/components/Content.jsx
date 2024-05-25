import SingleNav from "app/common/SingleNav";

const Content = ({ title }) => {
  return (
    <div className="">
      <SingleNav title={title} style={"md:hidden"} />
      <h3 className="text-[40px] font-[400] leading-[48px] text-primary">
        {title}
      </h3>
      <h5 className="text-[18px] font-[400] leading-[25.2px] text-primary mt-8">
        Anti-Money Laundering & Anti-Terrorism Financing Policy & Procedures
      </h5>
      <p className="text-secondary mt-4 text-[18px] font-[400] leading-[28px]">
        AFS is regulated and supervised by the Central Bank of Bahrain. Central
        Bank of Bahrain requires its licensees to comply with all aspects of
        legislation related to Anti-Money Laundering and combating terrorist
        financing, including Customer Due Diligence.
      </p>
      <p className="text-secondary mt-4 text-[18px] font-[400] leading-[28px]">
        AFS complies with Central Bank of Bahrain guidelines to combat money
        laundering in the Kingdom of Bahrain, namely the Amiri Decree Law No. 4
        of 2001 with respect to the prevention and prohibition of the laundering
        of money and the Central Bank of Bahrain Money Laundering Regulations
        issued in October 2002. Bahrain is a member of the Gulf cooperative
        Council (GCC), which is a member of the Financial Action Task Force
        (FATF). Central Bank of Bahrain asks for strict compliance with UN and
        FATF directives.
      </p>
      <p className="text-secondary mt-4 text-[18px] font-[400] leading-[28px]">
        AFS has issued an anti-money laundering manual, which has been approved
        by the Board of Directors and complies with the Central Bank of Bahrain
        regulations, FATF recommendations and international best practice in
        this respect. These procedures include specific requirements with regard
        to, amongst other things:
      </p>
      <h5 className="text-[18px] font-[400] leading-[25.2px] text-primary mt-8">
        Know your customer (KYC) guidelines
      </h5>
      <p className="text-secondary mt-4 text-[18px] font-[400] leading-[28px]">
        AFS is regulated and supervised by the Central Bank of Bahrain. Central
        Bank of Bahrain requires its licensees to comply with all aspects of
        legislation related to Anti-Money Laundering and combating terrorist
        financing, including Customer Due Diligence.
      </p>
      <p className="text-secondary mt-4 text-[18px] font-[400] leading-[28px]">
        AFS complies with Central Bank of Bahrain guidelines to combat money
        laundering in the Kingdom of Bahrain, namely the Amiri Decree Law No. 4
        of 2001 with respect to the prevention and prohibition of the laundering
        of money and the Central Bank of Bahrain Money Laundering Regulations
        issued in October 2002. Bahrain is a member of the Gulf cooperative
        Council (GCC), which is a member of the Financial Action Task Force
        (FATF). Central Bank of Bahrain asks for strict compliance with UN and
        FATF directives.
      </p>
      <p className="text-secondary mt-4 text-[18px] font-[400] leading-[28px]">
        AFS has issued an anti-money laundering manual, which has been approved
        by the Board of Directors and complies with the Central Bank of Bahrain
        regulations, FATF recommendations and international best practice in
        this respect. These procedures include specific requirements with regard
        to, amongst other things:
      </p>
      <h5 className="text-[18px] font-[400] leading-[25.2px] text-primary mt-8">
        Know your customer (KYC) guidelines
      </h5>
      <p className="text-secondary mt-4 text-[18px] font-[400] leading-[28px]">
        AFS has strict KYC procedures in place which include the validation of
        business and customer identities prior to commencing business with any
        customer. Such information is updated on a regular basis.
      </p>
      <h5 className="text-[18px] font-[400] leading-[25.2px] text-primary mt-8">
        Suspicious Activity Reporting
      </h5>
      <p className="text-secondary mt-4 text-[18px] font-[400] leading-[28px]">
        Any staff identifying an account or transaction as suspicious is
        required to report the case to his / her unit's Money Laundering
        Reporting Officer. The MLRO will review the facts and determine whether
        a report to the local regulator is required. The filing of a suspicious
        Transaction Report (STR) cannot be suppressed. Under no circumstances
        will staff “tip-off” the customer that an STR is being prepared.
      </p>
      <h5 className="text-[18px] font-[400] leading-[25.2px] text-primary mt-8">
        Training
      </h5>
      <p className="text-secondary mt-4 text-[18px] font-[400] leading-[28px]">
        It is a requirement that all employees who have potential contract with
        customers or who process transactions on behalf of customers are
        required to undertake anti-money laundering training.
      </p>
      <h5 className="text-[18px] font-[400] leading-[25.2px] text-primary mt-8">
        Record Retention 
      </h5>
      <p className="text-secondary mt-4 text-[18px] font-[400] leading-[28px]">
        AFS is required by law to maintain records which are appropriate to the
        scale, nature and complexity of the customer’s business. All identity or
        business relationship records must be kept for a minimum period of 5
        years from the end of the banks’ relationship with the customer.
      </p>
      <h5 className="text-[18px] font-[400] leading-[25.2px] text-primary mt-8">
        Compliance
      </h5>
      <p className="text-secondary mt-4 text-[18px] font-[400] leading-[28px]">
        AFS ensures compliance with its AML procedures through regular
        reporting. In addition, AFS’s internal audit unit conducts periodic
        review of AFS’s compliance with AML procedures.
      </p>
    </div>
  );
};

export default Content;
