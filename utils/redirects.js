const redirects = [
  // Basic Redirects
  { source: "/public", destination: "/", permanent: true },
  { source: "/aboutus", destination: "/about", permanent: true },
  { source: "/certification", destination: "/certifications", permanent: true },
  { source: "/career", destination: "/careers", permanent: true },

  // AFS Redirects - MOST SPECIFIC FIRST
  { source: "/services/view/2/credit_card_processing", destination: "/solutions/banks/card-issuing-processing", permanent: true },
  { source: "/services/view/21/bpay", destination: "/solutions/consumers/bpay", permanent: true },
  { source: "/services/view/3/prepaid_card_processing", destination: "/solutions/banks/card-issuing-processing", permanent: true },
  { source: "/services/view/4/debit_card_processing_and_atm_/_pos_driving", destination: "/solutions/banks/card-issuing-processing", permanent: true },
  { source: "/services/view/4/debit_card_processing_and_atm_/", destination: "/solutions/banks/card-issuing-processing", permanent: true },
  { source: "/services/view/5/emv_and_contactless_personalization", destination: "/solutions/banks/card-issuing-processing", permanent: true },
  { source: "/public/services/view/15/islamic_credit_cards", destination: "/solutions/banks/card-issuing-processing", permanent: true },
  { source: "/public/services/view/16/_instant_card_issuance", destination: "/solutions/banks/card-issuing-processing", permanent: true },
  { source: "/public/technology/view/13/credit_platform", destination: "/solutions/banks/card-issuing-processing", permanent: true },
  { source: "/technology/view/13/credit_platform", destination: "/solutions/banks/card-issuing-processing", permanent: true },
  { source: "/public/technology/view/14/debit_platform", destination: "/solutions/banks/card-issuing-processing", permanent: true },
  { source: "/technology/view/14/debit_platform", destination: "/solutions/banks/card-issuing-processing", permanent: true },
  { source: "/services/view/17/fintech_services", destination: "/solutions/business", permanent: true },

  // New Redirect - AFS GO (Business Solutions)
  { source: "/afsgo/afsgo-digital-solutions-and-tools", destination: "/solutions/business/pos-terminals", permanent: true },  
  { source: "/afsgo/afspay", destination: "/solutions/business/afspay-softpos", permanent: true },  
  { source: "/afsgo", destination: "/solutions/business", permanent: true },  

  // Value-Added Services
  { source: "/public/services/view/7/loyalty_solutions", destination: "/solutions/banks/value-added-services", permanent: true },
  { source: "/public/services/view/8/data_analytics", destination: "/solutions/banks/value-added-services", permanent: true },
  { source: "/public/services/view/9/3d_secure_", destination: "/solutions/banks/value-added-services", permanent: true },
  { source: "/public/services/view/10/sms_services", destination: "/solutions/banks/value-added-services", permanent: true },
  { source: "/services/view/11/24/7_contact_centre", destination: "/solutions/banks/value-added-services", permanent: true },
  { source: "/public/services/view/13/interactive_epp_(easy_payment_plan)", destination: "/solutions/banks/value-added-services", permanent: true },
  { source: "/public/services/view/14/chargeback_service", destination: "/solutions/banks/value-added-services", permanent: true },
  { source: "/public/services/view/18/e-statements", destination: "/solutions/banks/value-added-services", permanent: true },
  { source: "/services/view/20/value_added_services", destination: "/solutions/banks/value-added-services", permanent: true },
  { source: "/public/technology/view/11/disaster_recovery_center", destination: "/solutions/banks/value-added-services", permanent: true },
  { source: "/technology/view/11/disaster_recovery_center", destination: "/solutions/banks/value-added-services", permanent: true },
  { source: "/public/technology/view/10/smart_alert_sms_messaging_system", destination: "/solutions/banks/value-added-services", permanent: true },
  { source: "/technology/view/10/smart_alert_sms_messaging_system", destination: "/solutions/banks/value-added-services", permanent: true },

  // Fraud & Risk Management
  { source: "/public/services/view/12/online_fraud_management_services", destination: "/solutions/banks/fraud-risk-management", permanent: true },
  { source: "/public/technology/view/1/risknet", destination: "/solutions/banks/fraud-risk-management", permanent: true },
  { source: "/technology/view/1/risknet", destination: "/solutions/banks/fraud-risk-management", permanent: true },

 // Slightly Less Specific Redirects
 { source: "/services/view/21", destination: "/solutions/consumers/bpay", permanent: true },
 { source: "/services/view/22", destination: "/legal", permanent: true },
 { source: "/services/view/24", destination: "/legal", permanent: true },
 { source: "/services/view/2", destination: "/solutions/banks/card-issuing-processing", permanent: true },
 { source: "/services/view/3", destination: "/solutions/banks/card-issuing-processing", permanent: true },
 { source: "/services/view/4", destination: "/solutions/banks/card-issuing-processing", permanent: true },
 { source: "/services/view/5", destination: "/solutions/banks/card-issuing-processing", permanent: true },
 { source: "/public/services/view/15", destination: "/solutions/banks/card-issuing-processing", permanent: true },
 { source: "/public/services/view/16", destination: "/solutions/banks/card-issuing-processing", permanent: true },
 { source: "/public/technology/view/13", destination: "/solutions/banks/card-issuing-processing", permanent: true },
 { source: "/technology/view/13", destination: "/solutions/banks/card-issuing-processing", permanent: true },
 { source: "/public/technology/view/14", destination: "/solutions/banks/card-issuing-processing", permanent: true },
 { source: "/technology/view/14", destination: "/solutions/banks/card-issuing-processing", permanent: true },
 { source: "/public/services/view/7", destination: "/solutions/banks/value-added-services", permanent: true },
 { source: "/public/services/view/8", destination: "/solutions/banks/value-added-services", permanent: true },
 { source: "/public/services/view/9", destination: "/solutions/banks/value-added-services", permanent: true },
 { source: "/public/services/view/10", destination: "/solutions/banks/value-added-services", permanent: true },
 { source: "/services/view/11/24", destination: "/solutions/banks/value-added-services", permanent: true },
 { source: "/services/view/11", destination: "/solutions/banks/value-added-services", permanent: true },
 { source: "/public/services/view/13", destination: "/solutions/banks/value-added-services", permanent: true },
 { source: "/public/services/view/14", destination: "/solutions/banks/value-added-services", permanent: true },
 { source: "/public/services/view/18", destination: "/solutions/banks/value-added-services", permanent: true },
 { source: "/services/view/20", destination: "/solutions/banks/value-added-services", permanent: true },
 { source: "/public/technology/view/11", destination: "/solutions/banks/value-added-services", permanent: true },
 { source: "/technology/view/11", destination: "/solutions/banks/value-added-services", permanent: true },
 { source: "/public/technology/view/10", destination: "/solutions/banks/value-added-services", permanent: true },
 { source: "/technology/view/10", destination: "/solutions/banks/value-added-services", permanent: true },
 { source: "/public/services/view/12", destination: "/solutions/banks/fraud-risk-management", permanent: true },
 { source: "/public/technology/view/1", destination: "/solutions/banks/fraud-risk-management", permanent: true },
 { source: "/technology/view/1", destination: "/solutions/banks/fraud-risk-management", permanent: true },
 { source: "/services/view/17", destination: "/solutions/business", permanent: true }, 


// Broader AFS Redirects
{ source: "/services/view", destination: "/solutions", permanent: true },
{ source: "/public/services", destination: "/solutions", permanent: true },
{ source: "/public/technology/view", destination: "/solutions", permanent: true },
{ source: "/technology/view/", destination: "/solutions", permanent: true }, // More specific than /technology
{ source: "/services", destination: "/solutions", permanent: true },
{ source: "/public/technology", destination: "/solutions", permanent: true },
{ source: "/technology", destination: "/solutions", permanent: true },
{ source: "/bpayoffers", destination: "/solutions/consumers/bpay", permanent: true },
{ source: "/privacy_notice", destination: "/legal", permanent: true },
{ source: "/bpay_fees_and_charges", destination: "/legal", permanent: true },

]

module.exports = redirects;