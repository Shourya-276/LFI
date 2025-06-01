
import React, { useState } from "react";
import LoanAdministratorLayout from "../components/LoanAdministratorLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AdminProfileForm, { AdminProfileFormData } from "../components/profile/AdminProfileForm";
import ProfilePhotoSection from "../components/profile/ProfilePhotoSection";

/**
 * Loan Administrator Profile Management Page
 * Allows administrators to view and edit their personal and professional information
 * Uses modular components for better code organization and reusability
 */
const LoanAdministratorProfile: React.FC = () => {
  /**
   * Form state management for all profile data
   * Centralized state handling for better data consistency
   */
  const [profileFormData, setProfileFormData] = useState<AdminProfileFormData>({
    name: "",
    middleName: "",
    surname: "",
    emailId: "",
    mobileNumber: "",
    gender: "",
    dateOfBirth: "",
    employeeCode: "",
    headquarters: "",
    subHeadquarters: ""
  });

  /**
   * Handles input changes for all form fields
   * Updates the corresponding field in the form state
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setProfileFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Clears all form fields to their initial empty state
   * Provides users with a quick way to reset the form
   */
  const handleClearForm = (): void => {
    setProfileFormData({
      name: "",
      middleName: "",
      surname: "",
      emailId: "",
      mobileNumber: "",
      gender: "",
      dateOfBirth: "",
      employeeCode: "",
      headquarters: "",
      subHeadquarters: ""
    });
  };

  /**
   * Saves the profile data
   * Currently logs the data - can be extended to save to backend
   */
  const handleSaveProfile = (): void => {
    console.log("Saving profile data:", profileFormData);
    // TODO: Implement actual save functionality to backend
  };

  return (
    <LoanAdministratorLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Profile</h1>
        
        <Card className="bg-white dark:bg-gray-800 p-6">
          {/* Profile Photo Upload Section */}
          <ProfilePhotoSection />

          {/* Profile Form Fields */}
          <AdminProfileForm 
            formData={profileFormData}
            onInputChange={handleInputChange}
          />

          {/* Action Buttons - Clear and Save */}
          <div className="flex justify-end space-x-4">
            <Button variant="outline" onClick={handleClearForm}>
              Clear
            </Button>
            <Button onClick={handleSaveProfile} className="bg-brand-purple hover:bg-brand-purple/90">
              Save
            </Button>
          </div>
        </Card>
      </div>
    </LoanAdministratorLayout>
  );
};

export default LoanAdministratorProfile;
