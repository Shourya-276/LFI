
import React, { useState } from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const LoanCoordinatorProfile = () => {
  const [profileData, setProfileData] = useState({
    firstName: "Mohit",
    middleName: "",
    fullName: "Mohit Rajput",
    email: "mohitrajput@loancoordinator.com",
    phoneNumber: "+91 7588072877",
    gender: "",
    dateOfBirth: "",
    employeeCode: "",
    headquarters: "",
    subHeadquarters: ""
  });

  const handleSave = () => {
    toast.success("Profile updated successfully!");
  };

  const handleClear = () => {
    setProfileData({
      firstName: "",
      middleName: "",
      fullName: "",
      email: "",
      phoneNumber: "",
      gender: "",
      dateOfBirth: "",
      employeeCode: "",
      headquarters: "",
      subHeadquarters: ""
    });
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold">My Profile</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your personal information</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div className="space-y-6">
            {/* Profile Photo Section */}
            <div className="flex items-center gap-4 pb-6 border-b border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Profile Photo</h3>
                <p className="text-sm text-gray-500">Update your profile picture</p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <Input
                  value={profileData.firstName}
                  onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Middle Name</label>
                <Input
                  value={profileData.middleName}
                  onChange={(e) => setProfileData({...profileData, middleName: e.target.value})}
                  placeholder="Middle Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <Input
                  value={profileData.fullName}
                  onChange={(e) => setProfileData({...profileData, fullName: e.target.value})}
                  placeholder="Full Name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email ID</label>
                <Input
                  value={profileData.email}
                  onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                  placeholder="Email ID"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mobile Number</label>
                <Input
                  value={profileData.phoneNumber}
                  onChange={(e) => setProfileData({...profileData, phoneNumber: e.target.value})}
                  placeholder="Mobile Number"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Gender</label>
                <Select value={profileData.gender} onValueChange={(value) => setProfileData({...profileData, gender: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Date of Birth</label>
                <Input
                  type="date"
                  value={profileData.dateOfBirth}
                  onChange={(e) => setProfileData({...profileData, dateOfBirth: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Employee Code</label>
                <Input
                  value={profileData.employeeCode}
                  onChange={(e) => setProfileData({...profileData, employeeCode: e.target.value})}
                  placeholder="Employee Code"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Headquarters</label>
                <Select value={profileData.headquarters} onValueChange={(value) => setProfileData({...profileData, headquarters: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Headquarters" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="chennai">Chennai</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Sub Headquarters</label>
                <Select value={profileData.subHeadquarters} onValueChange={(value) => setProfileData({...profileData, subHeadquarters: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Sub Headquarters" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="andheri">Andheri</SelectItem>
                    <SelectItem value="bandra">Bandra</SelectItem>
                    <SelectItem value="thane">Thane</SelectItem>
                    <SelectItem value="navi-mumbai">Navi Mumbai</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 pt-6">
              <Button variant="outline" onClick={handleClear}>
                Clear
              </Button>
              <Button onClick={handleSave} className="bg-brand-purple hover:bg-brand-purple/90">
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoanCoordinatorProfile;
