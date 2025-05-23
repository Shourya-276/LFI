
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addressProofOptions } from "../utils/formOptions";

const DocumentUpload = () => {
  const navigate = useNavigate();
  const [uploadedDocs, setUploadedDocs] = useState<{ [key: string]: boolean }>({
    passport: true,
    panCard: false,
  });

  const handleFileChange = (docType: string) => {
    setUploadedDocs((prev) => ({
      ...prev,
      [docType]: true,
    }));
    toast.success(`Document uploaded successfully!`);
  };

  const handleSaveDocuments = () => {
    toast.success("Documents saved successfully!");
    navigate("/disbursement");
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">Loan Document Submission</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Upload all required documents for loan processing</p>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div className="space-y-8">
            {/* KYC Documents */}
            <div>
              <h2 className="text-lg font-semibold mb-4">KYC Documents</h2>
              
              <div className="space-y-4">
                <div>
                  <p className="mb-2 text-sm font-medium">Passport Photo</p>
                  <p className="text-xs text-gray-500 mb-2">JPG/PNG/PDF format accepted</p>
                  
                  {uploadedDocs.passport ? (
                    <div className="flex items-center text-green-600 gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Document Uploaded</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
                      <Input type="file" className="hidden" id="passportPhoto" onChange={() => handleFileChange("passport")} />
                      <label htmlFor="passportPhoto" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        Drag file here or Browse
                      </label>
                    </div>
                  )}
                </div>
                
                <div>
                  <p className="mb-2 text-sm font-medium">Pan Card</p>
                  <p className="text-xs text-gray-500 mb-2">JPG/PNG/PDF format accepted</p>
                  
                  {uploadedDocs.panCard ? (
                    <div className="flex items-center text-green-600 gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Document Uploaded</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
                      <Input type="file" className="hidden" id="panCard" onChange={() => handleFileChange("panCard")} />
                      <label htmlFor="panCard" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        Drag file here or Browse
                      </label>
                    </div>
                  )}
                </div>
                
                <div>
                  <div className="mb-2 space-y-1">
                    <p className="text-sm font-medium">Select Residence Address Proof</p>
                    <p className="text-xs text-gray-500">Select any one of the following doc.</p>
                  </div>
                  
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {addressProofOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <p className="mb-2 text-sm font-medium">Upload Selected Address Proof</p>
                  <p className="text-xs text-gray-500 mb-2">JPG/PNG/PDF format accepted</p>
                  
                  <div className="flex items-center gap-2 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
                    <Input type="file" className="hidden" id="addressProof" onChange={() => handleFileChange("addressProof")} />
                    <label htmlFor="addressProof" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      Drag file here or Browse
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Income Documents */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Income Documents</h2>
              
              <div className="space-y-4">
                <div>
                  <p className="mb-2 text-sm font-medium">Three month Salary Slip</p>
                  <p className="text-xs text-gray-500 mb-2">JPG/PNG/PDF format accepted</p>
                  
                  <div className="flex items-center gap-2 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
                    <Input type="file" className="hidden" id="salarySlip" onChange={() => handleFileChange("salarySlip")} />
                    <label htmlFor="salarySlip" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      Drag file here or Browse
                    </label>
                  </div>
                </div>
                
                <div>
                  <p className="mb-2 text-sm font-medium">Sequential Bank Statement</p>
                  <p className="text-xs text-gray-500 mb-2">JPG/PNG/PDF format accepted</p>
                  
                  <div className="flex items-center gap-2 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
                    <Input type="file" className="hidden" id="bankStatement" onChange={() => handleFileChange("bankStatement")} />
                    <label htmlFor="bankStatement" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      Drag file here or Browse
                    </label>
                  </div>
                </div>
                
                <div>
                  <p className="mb-2 text-sm font-medium">Form 16 A & B</p>
                  <p className="text-xs text-gray-500 mb-2">JPG/PNG/PDF format accepted</p>
                  
                  <div className="flex items-center gap-2 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
                    <Input type="file" className="hidden" id="form16" onChange={() => handleFileChange("form16")} />
                    <label htmlFor="form16" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      Drag file here or Browse
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Property Documents */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Property Documents</h2>
              
              <div className="space-y-4">
                <div>
                  <p className="mb-2 text-sm font-medium">Cost Sheet</p>
                  <p className="text-xs text-gray-500 mb-2">JPG/PNG/PDF format accepted</p>
                  
                  <div className="flex items-center gap-2 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
                    <Input type="file" className="hidden" id="costSheet" onChange={() => handleFileChange("costSheet")} />
                    <label htmlFor="costSheet" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      Drag file here or Browse
                    </label>
                  </div>
                </div>
                
                <div>
                  <p className="mb-2 text-sm font-medium">OC (Occupancy Certificate)</p>
                  <p className="text-xs text-gray-500 mb-2">JPG/PNG/PDF format accepted</p>
                  
                  <div className="flex items-center gap-2 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
                    <Input type="file" className="hidden" id="occupancyCert" onChange={() => handleFileChange("occupancyCert")} />
                    <label htmlFor="occupancyCert" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      Drag file here or Browse
                    </label>
                  </div>
                </div>
                
                <div>
                  <p className="mb-2 text-sm font-medium">Sale Agreement</p>
                  <p className="text-xs text-gray-500 mb-2">JPG/PNG/PDF format accepted</p>
                  
                  <div className="flex items-center gap-2 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
                    <Input type="file" className="hidden" id="saleAgreement" onChange={() => handleFileChange("saleAgreement")} />
                    <label htmlFor="saleAgreement" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      Drag file here or Browse
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button onClick={handleSaveDocuments} className="bg-brand-purple hover:bg-brand-purple/90">
              Save Document
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DocumentUpload;
