import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./SBILoanForm.css";
import FullPageCapture from "./FullPageCapture";

function LetterBoxes({ length, value, onChange, name, className = "" }) {
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [length]);

  const handleChange = (e, idx) => {
    const newValue = e.target.value.replace(/[^a-zA-Z0-9@.\s]/, "").slice(0, 1);
    let chars = value.split("");
    chars[idx] = newValue;
    onChange(chars.join(""));
    
    // Auto-focus next input if value entered
    if (newValue && idx < length - 1) {
      inputRefs.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      let chars = value.split("");
      
      if (chars[idx]) {
        // Clear current box
        chars[idx] = "";
        onChange(chars.join(""));
      } else if (idx > 0) {
        // Move to previous box and clear it
        chars[idx - 1] = "";
        onChange(chars.join(""));
        inputRefs.current[idx - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && idx > 0) {
      e.preventDefault();
      inputRefs.current[idx - 1]?.focus();
    } else if (e.key === "ArrowRight" && idx < length - 1) {
      e.preventDefault();
      inputRefs.current[idx + 1]?.focus();
    } else if (e.key === "Enter") {
      e.preventDefault();
      // Move to next input group
      const nextElement = e.currentTarget.closest('.sbi-form-row')?.nextElementSibling?.querySelector('input');
      if (nextElement) {
        nextElement.focus();
      }
    }
  };

  return (
    <div className={`letter-box-row ${className}`}>
      {Array.from({ length }).map((_, idx) => (
        <input
          key={idx}
          ref={(el) => (inputRefs.current[idx] = el)}
          type="text"
          maxLength={1}
          className="letter-box"
          value={value[idx] || ""}
          onChange={(e) => handleChange(e, idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
          autoComplete="off"
        />
      ))}
    </div>
  );
}

export default function SBILoanForm() {
  const formRef = useRef(null);
  const [fields, setFields] = useState({
    existingCustomer: { yes: false, no: false },
    cif: "",
    name: "",
    dob: "",
    pan: "",
    mobile: "",
    email: "",
    spouse: "",
    father: "",
    gender: { male: false, female: false, thirdGender: false },
    maritalStatus: { single: false, married: false, divorced: false, widowed: false },
    aadhar: "",
    voter: "",
    passport: "",
    dl: "",
    mgnrega: "",
    npr: "",
    residentialStatus: { ri: false, nri: false, pio: false, foreignCitizen: false },
    defencePersonnel: { army: false, navy: false, airForce: false },
    serviceUnder: { definedBenefit: false, newPension: false },
    perm_addr1: "",
    perm_addr2: "",
    perm_addr3: "",
    perm_village: "",
    perm_city: "",
    perm_district: "",
    perm_state: "",
    perm_country: "",
    perm_pincode: "",
    currentSameAsPermanent: { yes: false, no: false },
    curr_addr1: "",
    curr_addr2: "",
    curr_addr3: "",
    curr_village: "",
    curr_city: "",
    curr_district: "",
    curr_state: "",
    curr_country: "",
    curr_pincode: "",
    addressType: { permanent: false, current: false },
    residentialType: { rented: false, companyLease: false, owned: false },
    yearsInCurrentAddress: "",
    monthsInCurrentAddress: "",
    relationship: {
      spouse: false,
      father: false,
      mother: false,
      brother: false,
      sister: false,
      son: false,
      daughter: false,
      daughterInLaw: false,
      others: false
    },
    existingHousePlot: "",
    unitsAcquired: "",
    builderPartner: { yes: false, no: false },
    powerOfAttorney: { yes: false, no: false },
    poaHolderName: "",
    poaHolderContact: "",
    directorOtherBank: { yes: false, no: false },
    chairmanName: "",
    bankName: "",
    capitalFund: ""
  });

  const setField = (key, val) => setFields(f => ({ ...f, [key]: val }));

  const exportToPDF = async () => {
    if (!formRef.current) return;

    try {
      // Create a temporary container for PDF generation
      const originalForm = formRef.current;
      const clonedForm = originalForm.cloneNode(true);
      
      // Style the cloned form for PDF
      clonedForm.style.width = "794px";
      clonedForm.style.backgroundColor = "white";
      clonedForm.style.transform = "scale(0.85)";
      clonedForm.style.transformOrigin = "top left";
      
      // Append to body temporarily
      document.body.appendChild(clonedForm);
      
      const canvas = await html2canvas(clonedForm, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "white"
      });
      
      // Remove temporary element
      document.body.removeChild(clonedForm);
      
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;
      
      pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save("SBI_Loan_Form.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-gray-50">
      <div className="mb-4 flex justify-end">
        <Button onClick={exportToPDF} className="bg-blue-600 hover:bg-blue-700">
          Export to PDF
        </Button>
      </div>
      
      <div ref={formRef} className="sbi-form-container" id="sbi-form-container">
        {/* Header */}
        <div className="sbi-header-row">
          <div className="sbi-header-title">FORM A: PERSONAL DETAILS</div>
          <div className="sbi-header-options">
            <label className="sbi-checkbox-label">
              <input type="checkbox" className="sbi-checkbox" />
              <span className="sbi-checkbox-text">APPLICANT</span>
            </label>
            <label className="sbi-checkbox-label">
              <input type="checkbox" className="sbi-checkbox" />
              <span className="sbi-checkbox-text">CO-APPLICANT</span>
            </label>
            <label className="sbi-checkbox-label">
              <input type="checkbox" className="sbi-checkbox" />
              <span className="sbi-checkbox-text">GUARANTOR</span>
            </label>
          </div>
        </div>

        <div className="sbi-main-row">
          {/* Left: Form Fields */}
          <div className="sbi-fields">
            {/* Existing Customer */}
            <div className="sbi-form-row">
              <span className="sbi-label">Existing Customer:</span>
              <label className="sbi-checkbox-label">
                <input 
                  type="checkbox" 
                  className="sbi-checkbox"
                  checked={fields.existingCustomer.yes}
                  onChange={(e) => setField("existingCustomer", { yes: e.target.checked, no: !e.target.checked })}
                />
                <span className="sbi-checkbox-text">Yes</span>
              </label>
              <label className="sbi-checkbox-label">
                <input 
                  type="checkbox" 
                  className="sbi-checkbox"
                  checked={fields.existingCustomer.no}
                  onChange={(e) => setField("existingCustomer", { no: e.target.checked, yes: !e.target.checked })}
                />
                <span className="sbi-checkbox-text">No</span>
              </label>
            </div>
            <div className="sbi-form-row">
              <span className="sbi-label-small">If Yes, CIF No/Account No.</span>
              <LetterBoxes length={11} value={fields.cif} onChange={v => setField("cif", v)} name="cif" />
            </div>

            {/* Name */}
            <div className="sbi-form-row sbi-name-row">
              <span className="sbi-label">Name:</span>
              <div className="sbi-name-field">
                <div className="sbi-name-labels">
                  <span>First Name</span>
                  <span>Middle Name</span>
                  <span>Last Name</span>
                </div>
                <LetterBoxes length={36} value={fields.name} onChange={v => setField("name", v)} name="name" />
              </div>
            </div>

            {/* Date of Birth, PAN, Mobile */}
            <div className="sbi-form-row">
              <span className="sbi-label-dob">Date of Birth:</span>
              <LetterBoxes length={8} value={fields.dob} onChange={v => setField("dob", v)} name="dob" />
              <span className="sbi-label-pan">PAN:</span>
              <LetterBoxes length={10} value={fields.pan} onChange={v => setField("pan", v)} name="pan" />
            </div>
            
            <div className="sbi-form-row">
              <span className="sbi-label">Mobile:</span>
              <LetterBoxes length={10} value={fields.mobile} onChange={v => setField("mobile", v)} name="mobile" />
            </div>

            {/* Email */}
            <div className="sbi-form-row">
              <span className="sbi-label">e-mail:</span>
              <LetterBoxes length={20} value={fields.email} onChange={v => setField("email", v)} name="email" />
            </div>

            {/* Spouse */}
            <div className="sbi-form-row">
              <span className="sbi-label">Name of Spouse:</span>
              <LetterBoxes length={30} value={fields.spouse} onChange={v => setField("spouse", v)} name="spouse" />
            </div>

            {/* Father */}
            <div className="sbi-form-row">
              <span className="sbi-label">Name of Father:</span>
              <LetterBoxes length={30} value={fields.father} onChange={v => setField("father", v)} name="father" />
            </div>

            {/* Gender, Marital Status */}
            <div className="sbi-form-row">
              <span className="sbi-label">Gender:</span>
              <label className="sbi-checkbox-label">
                <input type="checkbox" className="sbi-checkbox" />
                <span className="sbi-checkbox-text">Male</span>
              </label>
              <label className="sbi-checkbox-label">
                <input type="checkbox" className="sbi-checkbox" />
                <span className="sbi-checkbox-text">Female</span>
              </label>
              <label className="sbi-checkbox-label">
                <input type="checkbox" className="sbi-checkbox" />
                <span className="sbi-checkbox-text">Third Gender</span>
              </label>
            </div>

            <div className="sbi-form-row">
              <span className="sbi-label">Marital Status:</span>
              <label className="sbi-checkbox-label">
                <input type="checkbox" className="sbi-checkbox" />
                <span className="sbi-checkbox-text">Single</span>
              </label>
              <label className="sbi-checkbox-label">
                <input type="checkbox" className="sbi-checkbox" />
                <span className="sbi-checkbox-text">Married</span>
              </label>
              <label className="sbi-checkbox-label">
                <input type="checkbox" className="sbi-checkbox" />
                <span className="sbi-checkbox-text">Divorced</span>
              </label>
              <label className="sbi-checkbox-label">
                <input type="checkbox" className="sbi-checkbox" />
                <span className="sbi-checkbox-text">Widowed</span>
              </label>
            </div>

            {/* KYC Section */}
            <div className="sbi-form-row sbi-kyc-title">
              <span className="sbi-label">Details of KYC (Minimum one to be filled)</span>
            </div>
            
            <div className="sbi-form-row sbi-kyc-row">
              <span className="sbi-label-kyc">1) Aadhaar / UID No.</span>
              <LetterBoxes length={12} value={fields.aadhar} onChange={v => setField("aadhar", v)} name="aadhar" />
            </div>
            
            <div className="sbi-form-row sbi-kyc-row">
              <span className="sbi-label-kyc">2) Voter ID No.</span>
              <LetterBoxes length={12} value={fields.voter} onChange={v => setField("voter", v)} name="voter" />
            </div>
            
            <div className="sbi-form-row sbi-kyc-row">
              <span className="sbi-label-kyc">3) Passport No.</span>
              <LetterBoxes length={12} value={fields.passport} onChange={v => setField("passport", v)} name="passport" />
            </div>
            
            <div className="sbi-form-row sbi-kyc-row">
              <span className="sbi-label-kyc">4) Driving License No.</span>
              <LetterBoxes length={12} value={fields.dl} onChange={v => setField("dl", v)} name="dl" />
            </div>
            
            <div className="sbi-form-row sbi-kyc-row">
              <span className="sbi-label-kyc">5) MGNREGA Job card No.</span>
              <LetterBoxes length={12} value={fields.mgnrega} onChange={v => setField("mgnrega", v)} name="mgnrega" />
            </div>
            
            <div className="sbi-form-row sbi-kyc-row">
              <span className="sbi-label-kyc-long">6) Letter issued by National Population Register Containing Name and Address:</span>
              <LetterBoxes length={36} value={fields.npr} onChange={v => setField("npr", v)} name="npr" />
            </div>

            {/* CHANGED: Residential Status - Split into two rows */}
            <div className="sbi-residential-status-row-1">
              <span className="sbi-label">Residential Status:</span>
              <label className="sbi-checkbox-label">
                <input type="checkbox" className="sbi-checkbox" />
                <span className="sbi-checkbox-text">Resident Indian (RI)</span>
              </label>
              <label className="sbi-checkbox-label">
                <input type="checkbox" className="sbi-checkbox" />
                <span className="sbi-checkbox-text">Non-Resident Indian (NRI)</span>
              </label>
            </div>
            <div className="sbi-residential-status-row-2">
              <label className="sbi-checkbox-label">
                <input type="checkbox" className="sbi-checkbox" />
                <span className="sbi-checkbox-text">Person Of Indian Origin (PIO)</span>
              </label>
              <label className="sbi-checkbox-label">
                <input type="checkbox" className="sbi-checkbox" />
                <span className="sbi-checkbox-text">Foreign Citizen</span>
              </label>
            </div>

            {/* CHANGED: Defence Personnel Section - Stack vertically */}
            <div className="sbi-defence-section">
              <div className="sbi-defence-row">
                <span className="sbi-defence-label">FOR DEFENCE PERSONNEL:</span>
                <div className="sbi-defence-options">
                  <label className="sbi-checkbox-label">
                    <input type="checkbox" className="sbi-checkbox" />
                    <span className="sbi-checkbox-text">Indian Army</span>
                  </label>
                  <label className="sbi-checkbox-label">
                    <input type="checkbox" className="sbi-checkbox" />
                    <span className="sbi-checkbox-text">Indian Navy</span>
                  </label>
                  <label className="sbi-checkbox-label">
                    <input type="checkbox" className="sbi-checkbox" />
                    <span className="sbi-checkbox-text">Indian Air force</span>
                  </label>
                </div>
              </div>
              
              <div className="sbi-defence-row">
                <span className="sbi-defence-label">IS YOUR SERVICE UNDER:</span>
                <div className="sbi-defence-options">
                  <label className="sbi-checkbox-label">
                    <input type="checkbox" className="sbi-checkbox" />
                    <span className="sbi-checkbox-text">Defined Benefit Pension</span>
                  </label>
                  <label className="sbi-checkbox-label">
                    <input type="checkbox" className="sbi-checkbox" />
                    <span className="sbi-checkbox-text">New Pension Scheme</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Photo/Signature */}
          <div className="sbi-photo-col">
            <div className="sbi-photo-box">
              Attach your recent<br />passport size<br />photograph here
            </div>
            <div className="sbi-sign-box">Please sign here</div>
          </div>
        </div>

        {/* Address Section */}
        <div className="sbi-address-section">
          <div className="sbi-address-header">
            <div className="sbi-address-label-row">
              <span className="sbi-address-label-residential">Residential Address:</span>
            </div>
            <div className="sbi-address-label-row">
              <span className="sbi-address-label-permanent">Permanent Address:</span>
            </div>
          </div>

          {/* Permanent Address */}
          <div className="sbi-form-row">
            <span className="sbi-label">Address 1:</span>
            <LetterBoxes length={50} value={fields.perm_addr1} onChange={v => setField("perm_addr1", v)} name="perm_addr1" />
          </div>
          
          <div className="sbi-form-row">
            <span className="sbi-label">Address 2:</span>
            <LetterBoxes length={50} value={fields.perm_addr2} onChange={v => setField("perm_addr2", v)} name="perm_addr2" />
          </div>
          
          <div className="sbi-form-row">
            <span className="sbi-label">Address 3:</span>
            <LetterBoxes length={50} value={fields.perm_addr3} onChange={v => setField("perm_addr3", v)} name="perm_addr3" />
          </div>
          
          <div className="sbi-form-row">
            <span className="sbi-label">Village:</span>
            <LetterBoxes length={10} value={fields.perm_village} onChange={v => setField("perm_village", v)} name="perm_village" />
            <span className="sbi-label-city">City:</span>
            <LetterBoxes length={16} value={fields.perm_city} onChange={v => setField("perm_city", v)} name="perm_city" />
          </div>
          
          <div className="sbi-form-row">
            <span className="sbi-label">District:</span>
            <LetterBoxes length={12} value={fields.perm_district} onChange={v => setField("perm_district", v)} name="perm_district" />
            <span className="sbi-label-state">State:</span>
            <LetterBoxes length={16} value={fields.perm_state} onChange={v => setField("perm_state", v)} name="perm_state" />
          </div>
          
          <div className="sbi-form-row">
            <span className="sbi-label">Country:</span>
            <LetterBoxes length={12} value={fields.perm_country} onChange={v => setField("perm_country", v)} name="perm_country" />
            <span className="sbi-label-pincode">Pin Code:</span>
            <LetterBoxes length={6} value={fields.perm_pincode} onChange={v => setField("perm_pincode", v)} name="perm_pincode" />
          </div>

          {/* Current address same as permanent */}
          <div className="sbi-form-row sbi-same-address-row">
            <span className="sbi-label-same-address">Current address same as the permanent address</span>
            <label className="sbi-checkbox-label">
              <input type="checkbox" className="sbi-checkbox" />
              <span className="sbi-checkbox-text">Yes</span>
            </label>
            <label className="sbi-checkbox-label">
              <input type="checkbox" className="sbi-checkbox" />
              <span className="sbi-checkbox-text">No</span>
            </label>
          </div>

          {/* Current Address */}
          <div className="sbi-form-row">
            <span className="sbi-label">Address 1:</span>
            <LetterBoxes length={50} value={fields.curr_addr1} onChange={v => setField("curr_addr1", v)} name="curr_addr1" />
          </div>
          
          <div className="sbi-form-row">
            <span className="sbi-label">Address 2:</span>
            <LetterBoxes length={50} value={fields.curr_addr2} onChange={v => setField("curr_addr2", v)} name="curr_addr2" />
          </div>
          
          <div className="sbi-form-row">
            <span className="sbi-label">Address 3:</span>
            <LetterBoxes length={50} value={fields.curr_addr3} onChange={v => setField("curr_addr3", v)} name="curr_addr3" />
          </div>
          
          <div className="sbi-form-row">
            <span className="sbi-label">Village:</span>
            <LetterBoxes length={10} value={fields.curr_village} onChange={v => setField("curr_village", v)} name="curr_village" />
            <span className="sbi-label-city">City:</span>
            <LetterBoxes length={16} value={fields.curr_city} onChange={v => setField("curr_city", v)} name="curr_city" />
          </div>
          
          <div className="sbi-form-row">
            <span className="sbi-label">District:</span>
            <LetterBoxes length={12} value={fields.curr_district} onChange={v => setField("curr_district", v)} name="curr_district" />
            <span className="sbi-label-state">State:</span>
            <LetterBoxes length={16} value={fields.curr_state} onChange={v => setField("curr_state", v)} name="curr_state" />
          </div>
          
          <div className="sbi-form-row">
            <span className="sbi-label">Country:</span>
            <LetterBoxes length={12} value={fields.curr_country} onChange={v => setField("curr_country", v)} name="curr_country" />
            <span className="sbi-label-pincode">Pin Code:</span>
            <LetterBoxes length={6} value={fields.curr_pincode} onChange={v => setField("curr_pincode", v)} name="curr_pincode" />
          </div>

          {/* Address type for communication */}
          <div className="sbi-form-row">
            <span className="sbi-label">Address type for communication:</span>
            <label className="sbi-checkbox-label">
              <input type="checkbox" className="sbi-checkbox" />
              <span className="sbi-checkbox-text">Permanent</span>
            </label>
            <label className="sbi-checkbox-label">
              <input type="checkbox" className="sbi-checkbox" />
              <span className="sbi-checkbox-text">Current</span>
            </label>
          </div>

          {/* Residential type */}
          <div className="sbi-form-row">
            <span className="sbi-label">Residential type</span>
            <label className="sbi-checkbox-label">
              <input type="checkbox" className="sbi-checkbox" />
              <span className="sbi-checkbox-text">Rented</span>
            </label>
            <label className="sbi-checkbox-label">
              <input type="checkbox" className="sbi-checkbox" />
              <span className="sbi-checkbox-text">Company lease</span>
            </label>
            <label className="sbi-checkbox-label">
              <input type="checkbox" className="sbi-checkbox" />
              <span className="sbi-checkbox-text">Owned</span>
            </label>
          </div>

          {/* Years/months residing */}
          <div className="sbi-form-row">
            <span className="sbi-label">Years residing in current address:</span>
            <LetterBoxes length={2} value={fields.yearsInCurrentAddress} onChange={v => setField("yearsInCurrentAddress", v)} name="yearsInCurrentAddress" />
            <span className="sbi-label-months">Months residing in current address:</span>
            <LetterBoxes length={2} value={fields.monthsInCurrentAddress} onChange={v => setField("monthsInCurrentAddress", v)} name="monthsInCurrentAddress" />
          </div>

          {/* Relationship with Primary Applicant */}
          <div className="sbi-form-row sbi-relationship-row">
            <span className="sbi-label-relationship">Relationship with Primary Applicant:</span>
            <label className="sbi-checkbox-label">
              <input type="checkbox" className="sbi-checkbox" />
              <span className="sbi-checkbox-text">Spouse</span>
            </label>
            <label className="sbi-checkbox-label">
              <input type="checkbox" className="sbi-checkbox" />
              <span className="sbi-checkbox-text">Father</span>
            </label>
            <label className="sbi-checkbox-label">
              <input type="checkbox" className="sbi-checkbox" />
              <span className="sbi-checkbox-text">Mother</span>
            </label>
            <label className="sbi-checkbox-label">
              <input type="checkbox" className="sbi-checkbox" />
              <span className="sbi-checkbox-text">Brother</span>
            </label>
            <label className="sbi-checkbox-label">
              <input type="checkbox" className="sbi-checkbox" />
              <span className="sbi-checkbox-text">Sister</span>
            </label>
            <label className="sbi-checkbox-label">
              <input type="checkbox" className="sbi-checkbox" />
              <span className="sbi-checkbox-text">Son</span>
            </label>
            <label className="sbi-checkbox-label">
              <input type="checkbox" className="sbi-checkbox" />
              <span className="sbi-checkbox-text">Daughter</span>
            </label>
            <label className="sbi-checkbox-label">
              <input type="checkbox" className="sbi-checkbox" />
              <span className="sbi-checkbox-text">Daughter-in-law</span>
            </label>
          </div>

          <div className="sbi-form-row">
            <label className="sbi-checkbox-label">
              <input type="checkbox" className="sbi-checkbox" />
              <span className="sbi-checkbox-text">Others, Please specify</span>
            </label>
          </div>

          {/* Existing house/plot */}
          <div className="sbi-form-row">
            <span className="sbi-label-long">No. of existing house/plot owned individually or jointly by the customer:</span>
            <LetterBoxes length={2} value={fields.existingHousePlot} onChange={v => setField("existingHousePlot", v)} name="existingHousePlot" />
          </div>

          {/* Units acquired */}
          <div className="sbi-form-row">
            <span className="sbi-label-long">No. of units acquired in single residential housing project/co-operative residential complex:</span>
            <LetterBoxes length={2} value={fields.unitsAcquired} onChange={v => setField("unitsAcquired", v)} name="unitsAcquired" />
          </div>

          {/* Builder/Partner question */}
          <div className="sbi-form-row">
            <span className="sbi-label-very-long">Is the customer, who is Builder/ Partner/Director/Owner/Promoter acquiring at/house /unit/plot in the project developed by them /their Company?</span>
            <label className="sbi-checkbox-label">
              <input type="checkbox" className="sbi-checkbox" />
              <span className="sbi-checkbox-text">Yes</span>
            </label>
            <label className="sbi-checkbox-label">
              <input type="checkbox" className="sbi-checkbox" />
              <span className="sbi-checkbox-text">No</span>
            </label>
          </div>

          {/* Power of attorney */}
          <div className="sbi-form-row">
            <span className="sbi-label">Power of attorney provided:</span>
            <label className="sbi-checkbox-label">
              <input type="checkbox" className="sbi-checkbox" />
              <span className="sbi-checkbox-text">Yes</span>
            </label>
            <label className="sbi-checkbox-label">
              <input type="checkbox" className="sbi-checkbox" />
              <span className="sbi-checkbox-text">No</span>
            </label>
          </div>

          {/* POA Holder Name */}
          <div className="sbi-form-row">
            <span className="sbi-label-medium">If Yes: Name of the POA Holder:</span>
            <LetterBoxes length={40} value={fields.poaHolderName} onChange={v => setField("poaHolderName", v)} name="poaHolderName" />
          </div>

          {/* POA Contact */}
          <div className="sbi-form-row">
            <span className="sbi-label-medium">Contact no. of POA Holder:</span>
            <LetterBoxes length={12} value={fields.poaHolderContact} onChange={v => setField("poaHolderContact", v)} name="poaHolderContact" />
          </div>

          {/* Director in other bank */}
          <div className="sbi-form-row">
            <span className="sbi-label-very-long">Is Applicant / co-Applicant / Guarantor a director including Chairman and Managing Director) in another bank or specified near relative of any of the director ((including Chairman and Managing Director) of SBI /Other Bank</span>
            <label className="sbi-checkbox-label">
              <input type="checkbox" className="sbi-checkbox" />
              <span className="sbi-checkbox-text">Yes</span>
            </label>
            <label className="sbi-checkbox-label">
              <input type="checkbox" className="sbi-checkbox" />
              <span className="sbi-checkbox-text">No</span>
            </label>
          </div>

          {/* Chairman/MD name */}
          <div className="sbi-form-row">
            <span className="sbi-label-medium">Name of the Chairman/ MD or other director:</span>
            <LetterBoxes length={40} value={fields.chairmanName} onChange={v => setField("chairmanName", v)} name="chairmanName" />
          </div>

          {/* Bank name */}
          <div className="sbi-form-row">
            <span className="sbi-label-very-long">Indicate Name of Bank/ Subsidiary/ Schedule co-operative Banks/ Trustees of Mutual Fund/ Venture Capital Fund:</span>
            <LetterBoxes length={40} value={fields.bankName} onChange={v => setField("bankName", v)} name="bankName" />
          </div>

          {/* Capital Fund */}
          <div className="sbi-form-row">
            <span className="sbi-label">Capital Fund:</span>
            <LetterBoxes length={40} value={fields.capitalFund} onChange={v => setField("capitalFund", v)} name="capitalFund" />
          </div>
        </div>
      </div>

      {/* Add the Full Page Capture component below the form */}
      {/* <FullPageCapture targetElementId="sbi-form-container" /> */}
    </div>
  );
}
