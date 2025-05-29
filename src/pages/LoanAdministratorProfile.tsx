
import React, { useState } from "react";
import LoanAdministratorLayout from "../components/LoanAdministratorLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Camera } from "lucide-react";

const LoanAdministratorProfile = () => {
  const [formData, setFormData] = useState({
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClear = () => {
    setFormData({
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

  const handleSave = () => {
    console.log("Saving profile data:", formData);
    // Handle save logic here
  };

  return (
    <LoanAdministratorLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Profile</h1>
        
        <Card className="bg-white dark:bg-gray-800 p-6">
          {/* Profile Photo Section */}
          <div className="mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-gray-600" />
                </div>
                <button className="absolute bottom-0 right-0 w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                  <Camera className="w-3 h-3 text-white" />
                </button>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Profile Photo</p>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="middleName">Middle Name</Label>
              <Input
                id="middleName"
                name="middleName"
                value={formData.middleName}
                onChange={handleInputChange}
                placeholder="Middle Name"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="surname">Surname</Label>
              <Input
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
                placeholder="Surname"
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <Label htmlFor="emailId">Email ID</Label>
              <Input
                id="emailId"
                name="emailId"
                type="email"
                value={formData.emailId}
                onChange={handleInputChange}
                placeholder="Email ID"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="mobileNumber">Mobile Number</Label>
              <Input
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                placeholder="Mobile Number"
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <Label htmlFor="gender">Gender</Label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-purple"
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="employeeCode">Employee Code</Label>
              <Input
                id="employeeCode"
                name="employeeCode"
                value={formData.employeeCode}
                onChange={handleInputChange}
                placeholder="Employee Code"
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <Label htmlFor="headquarters">Headquarters</Label>
              <select
                id="headquarters"
                name="headquarters"
                value={formData.headquarters}
                onChange={handleInputChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-purple"
              >
                <option value="">Headquarters</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="bangalore">Bangalore</option>
                <option value="hyderabad">Hyderabad</option>
              </select>
            </div>
            <div>
              <Label htmlFor="subHeadquarters">Sub Headquarters</Label>
              <select
                id="subHeadquarters"
                name="subHeadquarters"
                value={formData.subHeadquarters}
                onChange={handleInputChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-purple"
              >
                <option value="">Sub Headquarters</option>
                <option value="andheri">Andheri</option>
                <option value="bandra">Bandra</option>
                <option value="thane">Thane</option>
                <option value="navi-mumbai">Navi Mumbai</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <Button variant="outline" onClick={handleClear}>
              Clear
            </Button>
            <Button onClick={handleSave} className="bg-brand-purple hover:bg-brand-purple/90">
              Save
            </Button>
          </div>
        </Card>
      </div>
    </LoanAdministratorLayout>
  );
};

export default LoanAdministratorProfile;
