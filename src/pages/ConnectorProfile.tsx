
import React, { useState } from "react";
import ConnectorLayout from "../components/ConnectorLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Upload } from "lucide-react";
import { format } from "date-fns";

const ConnectorProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    middleName: "",
    lastName: "",
    email: "",
    mobile: "",
    gender: "",
    panNumber: "",
    aadharNumber: "",
    employeeCode: "",
    companyName: "",
    companyAddress: "",
    gstNumber: "",
    bankName: "",
    bankAccountNumber: "",
    ifscCode: "",
    branchName: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleClear = () => {
    setFormData({
      name: "",
      middleName: "",
      lastName: "",
      email: "",
      mobile: "",
      gender: "",
      panNumber: "",
      aadharNumber: "",
      employeeCode: "",
      companyName: "",
      companyAddress: "",
      gstNumber: "",
      bankName: "",
      bankAccountNumber: "",
      ifscCode: "",
      branchName: ""
    });
    setDate(undefined);
  };

  const handleSave = () => {
    console.log("Saving profile data:", formData);
  };

  return (
    <ConnectorLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>My Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Photo Upload Section */}
            <div className="flex flex-col items-center space-y-4">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Photo</h3>
                <p className="text-sm text-gray-600">JPG/PNG/PDF format accepted</p>
              </div>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="text-gray-600 dark:text-gray-400">Upload photo</p>
                <p className="text-sm text-gray-500 mt-1">Drag file here or</p>
                <Button variant="outline" className="mt-2">Browse</Button>
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="middleName">Middle Name</Label>
                <Input
                  id="middleName"
                  placeholder="Middle Name"
                  value={formData.middleName}
                  onChange={(e) => handleInputChange("middleName", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input
                  id="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange("mobile", e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="gender">Gender</Label>
                <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
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
                      {date ? format(date, "PPP") : <span>Date Of Birth</span>}
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="panNumber">Pan Number</Label>
                <Input
                  id="panNumber"
                  placeholder="Pan Number"
                  value={formData.panNumber}
                  onChange={(e) => handleInputChange("panNumber", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="aadharNumber">Aadhar Number</Label>
                <Input
                  id="aadharNumber"
                  placeholder="Aadhar Number"
                  value={formData.aadharNumber}
                  onChange={(e) => handleInputChange("aadharNumber", e.target.value)}
                />
              </div>
            </div>

            {/* Company Details */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Company details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="companyAddress">Company Address</Label>
                  <Input
                    id="companyAddress"
                    placeholder="Company Address"
                    value={formData.companyAddress}
                    onChange={(e) => handleInputChange("companyAddress", e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-4">
                <Label htmlFor="gstNumber">GST Number</Label>
                <Input
                  id="gstNumber"
                  placeholder="GST Number"
                  value={formData.gstNumber}
                  onChange={(e) => handleInputChange("gstNumber", e.target.value)}
                />
              </div>
            </div>

            {/* Bank Account Details */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Bank Account details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="bankName">Bank Name</Label>
                  <Input
                    id="bankName"
                    placeholder="Bank Name"
                    value={formData.bankName}
                    onChange={(e) => handleInputChange("bankName", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="bankAccountNumber">Bank Account Number</Label>
                  <Input
                    id="bankAccountNumber"
                    placeholder="Bank Account Number"
                    value={formData.bankAccountNumber}
                    onChange={(e) => handleInputChange("bankAccountNumber", e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <Label htmlFor="ifscCode">IFSC Code</Label>
                  <Input
                    id="ifscCode"
                    placeholder="IFSC Code"
                    value={formData.ifscCode}
                    onChange={(e) => handleInputChange("ifscCode", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="branchName">Branch Name</Label>
                  <Input
                    id="branchName"
                    placeholder="Branch Name"
                    value={formData.branchName}
                    onChange={(e) => handleInputChange("branchName", e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Bank Documents */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Bank Documents</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Pan card</h4>
                  <p className="text-sm text-gray-600 mb-2">JPG/PNG/PDF format accepted</p>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    Drag file here or Browse
                  </Button>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Aadhar card</h4>
                  <p className="text-sm text-gray-600 mb-2">JPG/PNG/PDF format accepted</p>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    Drag file here or Browse
                  </Button>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Cancelled Cheque</h4>
                  <p className="text-sm text-gray-600 mb-2">JPG/PNG/PDF format accepted</p>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    Drag file here or Browse
                  </Button>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Rera Certificate</h4>
                  <p className="text-sm text-gray-600 mb-2">JPG/PNG/PDF format accepted</p>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    Drag file here or Browse
                  </Button>
                </div>

                <div>
                  <h4 className="font-medium mb-2">GST Certificate</h4>
                  <p className="text-sm text-gray-600 mb-2">JPG/PNG/PDF format accepted</p>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    Drag file here or Browse
                  </Button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <Button variant="outline" onClick={handleClear} className="flex-1">
                Clear
              </Button>
              <Button onClick={handleSave} className="flex-1 bg-indigo-600 hover:bg-indigo-700">
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
