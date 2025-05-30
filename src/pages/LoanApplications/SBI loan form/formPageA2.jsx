// FormPageA2.jsx
import React, { useRef, useEffect } from 'react';

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
    
    if (newValue && idx < length - 1) {
      inputRefs.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      let chars = value.split("");
      
      if (chars[idx]) {
        chars[idx] = "";
        onChange(chars.join(""));
      } else if (idx > 0) {
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

export default function FormPageA2({ formData, updateFormData, onNext, onPrev, currentPage, totalPages }) {
  const formRef = useRef(null);

  const setField = (key, val) => updateFormData({ [key]: val });

  return (
    <div>
      {/* REMOVED - Buttons on top */}
      
      <div ref={formRef} className="sbi-form-container-fullwidth" id="sbi-form-container">
        <div className="sbi-address-section">
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
            <LetterBoxes length={2} value={formData.yearsInCurrentAddress} onChange={v => setField("yearsInCurrentAddress", v)} name="yearsInCurrentAddress" />
            <span className="sbi-label-months">Months residing in current address:</span>
            <LetterBoxes length={2} value={formData.monthsInCurrentAddress} onChange={v => setField("monthsInCurrentAddress", v)} name="monthsInCurrentAddress" />
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
            <LetterBoxes length={2} value={formData.existingHousePlot} onChange={v => setField("existingHousePlot", v)} name="existingHousePlot" />
          </div>

          {/* Units acquired */}
          <div className="sbi-form-row">
            <span className="sbi-label-long">No. of units acquired in single residential housing project/co-operative residential complex:</span>
            <LetterBoxes length={2} value={formData.unitsAcquired} onChange={v => setField("unitsAcquired", v)} name="unitsAcquired" />
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
            <LetterBoxes length={40} value={formData.poaHolderName} onChange={v => setField("poaHolderName", v)} name="poaHolderName" />
          </div>

          {/* POA Contact */}
          <div className="sbi-form-row">
            <span className="sbi-label-medium">Contact no. of POA Holder:</span>
            <LetterBoxes length={12} value={formData.poaHolderContact} onChange={v => setField("poaHolderContact", v)} name="poaHolderContact" />
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
            <LetterBoxes length={40} value={formData.chairmanName} onChange={v => setField("chairmanName", v)} name="chairmanName" />
          </div>

          {/* Bank name */}
          <div className="sbi-form-row">
            <span className="sbi-label-very-long">Indicate Name of Bank/ Subsidiary/ Schedule co-operative Banks/ Trustees of Mutual Fund/ Venture Capital Fund:</span>
            <LetterBoxes length={40} value={formData.bankName} onChange={v => setField("bankName", v)} name="bankName" />
          </div>

          {/* Capital Fund */}
          <div className="sbi-form-row">
            <span className="sbi-label">Capital Fund:</span>
            <LetterBoxes length={40} value={formData.capitalFund} onChange={v => setField("capitalFund", v)} name="capitalFund" />
          </div>
        </div>
      </div>
    </div>
  );
}
