
/**
 * CONNECTOR PROFILE PAGE
 * 
 * This component handles the profile management for connector users.
 * It includes personal information, company details, and bank account information
 * exactly as shown in the reference image.
 * 
 * USAGE:
 * - Accessible via /connector-profile route
 * - Used within ConnectorDashboard navigation
 */

import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import ConnectorLayout from "../components/ConnectorLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Upload } from "lucide-react";
import { format } from "date-fns";

const ConnectorProfile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");
  const [date, setDate] = useState<Date>();

  const [profileData, setProfileData] = useState({
    name: "",
    middleName: "",
    lastName: "",
    emailAddress: "",
    mobileNumber: "",
    gender: "",
    panNumber: "",
    aadharNumber: "",
    companyName: "",
    companyAddress: "",
    gstNumber: "",
    bankName: "",
    bankAccountNumber: "",
    ifscCode: "",
    branchName: "",
  });

  // Check if user is authorized
  if (!user || user.role !== "connector") {
    return <Navigate to="/dashboard" />;
  }

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleClear = () => {
    setProfileData({
      name: "",
      middleName: "",
      lastName: "",
      emailAddress: "",
      mobileNumber: "",
      gender: "",
      panNumber: "",
      aadharNumber: "",
      companyName: "",
      companyAddress: "",
      gstNumber: "",
      bankName: "",
      bankAccountNumber: "",
      ifscCode: "",
      branchName: "",
    });
    setDate(undefined);
  };

  const handleSave = () => {
    console.log("Profile data saved:", profileData);
    // Here you would typically save to a backend
  };

  return (
    <ConnectorLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>My Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Name"
                  value={profileData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="middleName">Middle Name</Label>
                <Input
                  id="middleName"
                  placeholder="Middle Name"
                  value={profileData.middleName}
                  onChange={(e) => handleInputChange("middleName", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Last Name"
                  value={profileData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="emailAddress">Email Address</Label>
                <Input
                  id="emailAddress"
                  placeholder="Email Address"
                  value={profileData.emailAddress}
                  onChange={(e) => handleInputChange("emailAddress", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="mobileNumber">Mobile Number</Label>
                <Input
                  id="mobileNumber"
                  placeholder="Mobile Number"
                  value={profileData.mobileNumber}
                  onChange={(e) => handleInputChange("mobileNumber", e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="gender">Gender</Label>
                <Select value={profileData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Date Of Birth</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="panNumber">Pan Number</Label>
                <Input
                  id="panNumber"
                  placeholder="Pan Number"
                  value={profileData.panNumber}
                  onChange={(e) => handleInputChange("panNumber", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="aadharNumber">Aadhar Number</Label>
                <Input
                  id="aadharNumber"
                  placeholder="Aadhar Number"
                  value={profileData.aadharNumber}
                  onChange={(e) => handleInputChange("aadharNumber", e.target.value)}
                />
              </div>
            </div>

            {/* Company Details */}
            <div className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Company details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    placeholder="Company Name"
                    value={profileData.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="companyAddress">Company Address</Label>
                  <Input
                    id="companyAddress"
                    placeholder="Company Address"
                    value={profileData.companyAddress}
                    onChange={(e) => handleInputChange("companyAddress", e.target.value)}
                  />
                </div>
              </div>
              <div className="w-1/2 mt-4">
                <Label htmlFor="gstNumber">GST Number</Label>
                <Input
                  id="gstNumber"
                  placeholder="GST Number"
                  value={profileData.gstNumber}
                  onChange={(e) => handleInputChange("gstNumber", e.target.value)}
                />
              </div>
            </div>

            {/* Bank Account Details */}
            <div className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Bank Account details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="bankName">Bank Name</Label>
                  <Input
                    id="bankName"
                    placeholder="Bank Name"
                    value={profileData.bankName}
                    onChange={(e) => handleInputChange("bankName", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="bankAccountNumber">Bank Account Number</Label>
                  <Input
                    id="bankAccountNumber"
                    placeholder="Bank Account Number"
                    value={profileData.bankAccountNumber}
                    onChange={(e) => handleInputChange("bankAccountNumber", e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <Label htmlFor="ifscCode">IFSC Code</Label>
                  <Input
                    id="ifscCode"
                    placeholder="IFSC Code"
                    value={profileData.ifscCode}
                    onChange={(e) => handleInputChange("ifscCode", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="branchName">Branch Name</Label>
                  <Input
                    id="branchName"
                    placeholder="Branch Name"
                    value={profileData.branchName}
                    onChange={(e) => handleInputChange("branchName", e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Bank Documents */}
            <div className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Bank Documents</h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <div className="text-lg mb-2">Drag file here</div>
                <div className="text-sm text-gray-500 mb-4">Photo</div>
                <Button variant="outline">Choose File</Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <Button variant="outline" onClick={handleClear}>Clear</Button>
              <Button onClick={handleSave} className="bg-indigo-600 hover:bg-indigo-700">
                Save
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </ConnectorLayout>
  );
};

export default ConnectorProfile;
