
import React, { useState } from "react";
import LoanAdministratorLayout from "../components/LoanAdministratorLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "../contexts/AuthContext";
import { Camera } from "lucide-react";
import { toast } from "sonner";

const LoanAdministratorProfile = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: "Soumil",
    middleName: "Kumar",
    surname: "Administrator",
    email: "soumil@loanadministrator.com",
    mobile: "+91 9876543210",
    gender: "Male",
    dateOfBirth: "1985-06-15",
    employeeCode: "EMP001",
    headquarters: "Mumbai",
    subHeadquarters: "Andheri West"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    toast.success("Profile updated successfully");
  };

  const handleClear = () => {
    setFormData({
      name: "",
      middleName: "",
      surname: "",
      email: "",
      mobile: "",
      gender: "",
      dateOfBirth: "",
      employeeCode: "",
      headquarters: "",
      subHeadquarters: ""
    });
    toast.info("Form cleared");
  };

  return (
    <LoanAdministratorLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">My Profile</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your administrator profile information</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Administrator Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Profile Photo Section */}
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="h-24 w-24 rounded-full bg-brand-purple flex items-center justify-center">
                  <span className="text-white text-2xl font-medium">
                    {formData.name?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <button className="absolute bottom-0 right-0 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg border border-gray-200 dark:border-gray-700">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              <div>
                <h3 className="text-lg font-medium">Profile Photo</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Click the camera icon to upload a new photo</p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="middleName">Middle Name</Label>
                <Input
                  id="middleName"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleInputChange}
                  placeholder="Enter your middle name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="surname">Surname</Label>
                <Input
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleInputChange}
                  placeholder="Enter your surname"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email ID</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="Enter your mobile number"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="employeeCode">Employee Code</Label>
                <Input
                  id="employeeCode"
                  name="employeeCode"
                  value={formData.employeeCode}
                  onChange={handleInputChange}
                  placeholder="Enter employee code"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="headquarters">Headquarters</Label>
                <Input
                  id="headquarters"
                  name="headquarters"
                  value={formData.headquarters}
                  onChange={handleInputChange}
                  placeholder="Enter headquarters location"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subHeadquarters">Sub Headquarters</Label>
                <Input
                  id="subHeadquarters"
                  name="subHeadquarters"
                  value={formData.subHeadquarters}
                  onChange={handleInputChange}
                  placeholder="Enter sub headquarters location"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-6">
              <Button onClick={handleClear} variant="outline" className="flex-1">
                Clear
              </Button>
              <Button onClick={handleSave} className="flex-1 bg-brand-purple hover:bg-brand-purple/90">
                Save
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </LoanAdministratorLayout>
  );
};

export default LoanAdministratorProfile;
