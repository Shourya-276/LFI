
import React, { useState, useEffect } from "react";
import { useLoan } from "../../contexts/LoanContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { 
  genderOptions,
  countryOptions,
  stateOptions,
  districtOptions,
  cityOptions,
  employerTypeOptions
} from "../../utils/formOptions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, X } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface CoApplicantFormProps {
  onClose: () => void;
}

const personalDetailsSchema = z.object({
  name: z.string().min(1, "Name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  mobile: z.string().min(10, "Mobile number must be at least 10 digits"),
  aadhaarNumber: z.string().min(12, "Aadhaar number must be 12 digits"),
  panCardNumber: z.string().min(10, "PAN card number must be 10 characters"),
  gender: z.string().min(1, "Please select your gender"),
  dateOfBirth: z.date({
    required_error: "Please select a date of birth",
  }),
  useApplicantAddress: z.boolean(),
  streetAddress: z.string().optional(),
  pinCode: z.string().optional(),
  country: z.string().optional(),
  state: z.string().optional(),
  district: z.string().optional(),
  city: z.string().optional(),
});

const incomeDetailsSchema = z.object({
  employerType: z.string().min(1, "Please select employer type"),
  grossSalary: z.string().min(1, "Gross salary is required"),
  netSalary: z.string().min(1, "Net salary is required"),
  rentIncome: z.string().optional(),
  pension: z.string().optional(),
});

const coApplicantSchema = z.object({
  personalDetails: personalDetailsSchema,
  incomeDetails: incomeDetailsSchema,
});

type CoApplicantFormValues = z.infer<typeof coApplicantSchema>;

const CoApplicantForm: React.FC<CoApplicantFormProps> = ({ onClose }) => {
  const { application, saveCoApplicantDetails } = useLoan();
  const [useApplicantAddress, setUseApplicantAddress] = useState(true);
  const [selectedDistrict, setSelectedDistrict] = useState<string | undefined>();

  const defaultValues: Partial<CoApplicantFormValues> = {
    personalDetails: {
      name: "",
      middleName: "",
      lastName: "",
      email: "",
      mobile: "",
      aadhaarNumber: "",
      panCardNumber: "",
      gender: "",
      useApplicantAddress: true,
      streetAddress: application.personalDetails?.streetAddress || "",
      pinCode: application.personalDetails?.pinCode || "",
      country: application.personalDetails?.country || "india",
      state: application.personalDetails?.state || "",
      district: application.personalDetails?.district || "",
      city: application.personalDetails?.city || "",
    },
    incomeDetails: {
      employerType: "",
      grossSalary: "",
      netSalary: "",
      rentIncome: "",
      pension: "",
    },
  };

  const form = useForm<CoApplicantFormValues>({
    resolver: zodResolver(coApplicantSchema),
    defaultValues,
  });

  useEffect(() => {
    if (useApplicantAddress && application.personalDetails) {
      form.setValue("personalDetails.streetAddress", application.personalDetails.streetAddress);
      form.setValue("personalDetails.pinCode", application.personalDetails.pinCode);
      form.setValue("personalDetails.country", application.personalDetails.country);
      form.setValue("personalDetails.state", application.personalDetails.state);
      form.setValue("personalDetails.district", application.personalDetails.district);
      form.setValue("personalDetails.city", application.personalDetails.city);
    }
  }, [useApplicantAddress, application.personalDetails, form]);

  useEffect(() => {
    const district = form.watch("personalDetails.district");
    if (district !== selectedDistrict) {
      setSelectedDistrict(district);
      form.setValue("personalDetails.city", "");
    }
  }, [form.watch("personalDetails.district"), selectedDistrict, form]);

  const onSubmit = (data: CoApplicantFormValues) => {
    saveCoApplicantDetails(data);
    onClose();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Co-applicant Details</h3>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X size={18} />
        </Button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <h4 className="text-base font-medium mb-4">Personal Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Name */}
              <FormField
                control={form.control}
                name="personalDetails.name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Middle Name */}
              <FormField
                control={form.control}
                name="personalDetails.middleName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Middle Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Middle Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Last Name */}
              <FormField
                control={form.control}
                name="personalDetails.lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="personalDetails.email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Email Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Mobile */}
              <FormField
                control={form.control}
                name="personalDetails.mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Mobile Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Aadhaar */}
              <FormField
                control={form.control}
                name="personalDetails.aadhaarNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Aadhaar Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Aadhaar Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* PAN Card */}
              <FormField
                control={form.control}
                name="personalDetails.panCardNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>PAN Card Number</FormLabel>
                    <FormControl>
                      <Input placeholder="PAN Card Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Gender */}
              <FormField
                control={form.control}
                name="personalDetails.gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {genderOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Date of Birth */}
              <FormField
                control={form.control}
                name="personalDetails.dateOfBirth"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of Birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox 
              id="applicantAddress" 
              checked={useApplicantAddress}
              onCheckedChange={(checked) => {
                setUseApplicantAddress(!!checked);
                form.setValue("personalDetails.useApplicantAddress", !!checked);
              }}
            />
            <label 
              htmlFor="applicantAddress" 
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Same as applicant's address
            </label>
          </div>

          {!useApplicantAddress && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Street Address */}
              <FormField
                control={form.control}
                name="personalDetails.streetAddress"
                render={({ field }) => (
                  <FormItem className="col-span-full">
                    <FormLabel>Street Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Street Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Pin Code */}
              <FormField
                control={form.control}
                name="personalDetails.pinCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pin Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Pin Code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Country */}
              <FormField
                control={form.control}
                name="personalDetails.country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {countryOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* State */}
              <FormField
                control={form.control}
                name="personalDetails.state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select State" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {stateOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* District */}
              <FormField
                control={form.control}
                name="personalDetails.district"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>District</FormLabel>
                    <Select onValueChange={(value) => {
                      setSelectedDistrict(value);
                      field.onChange(value);
                    }} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select District" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {districtOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* City */}
              <FormField
                control={form.control}
                name="personalDetails.city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value} disabled={!selectedDistrict}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select City" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {selectedDistrict && 
                          cityOptions[selectedDistrict as keyof typeof cityOptions]?.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))
                        }
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {/* Income Details */}
          <div>
            <h4 className="text-base font-medium mb-4">Income Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Type of Employer */}
              <FormField
                control={form.control}
                name="incomeDetails.employerType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type of Employer</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Employer Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {employerTypeOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Monthly Gross Salary */}
              <FormField
                control={form.control}
                name="incomeDetails.grossSalary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>₹ Monthly Gross Salary</FormLabel>
                    <FormControl>
                      <Input placeholder="Monthly Gross Salary" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Monthly Net Salary */}
              <FormField
                control={form.control}
                name="incomeDetails.netSalary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>₹ Monthly Net Salary</FormLabel>
                    <FormControl>
                      <Input placeholder="Monthly Net Salary" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Rent Income */}
              <FormField
                control={form.control}
                name="incomeDetails.rentIncome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>₹ Rent Income (If Applicable)</FormLabel>
                    <FormControl>
                      <Input placeholder="Rent Income" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Pension */}
              <FormField
                control={form.control}
                name="incomeDetails.pension"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>₹ Pension (If Applicable)</FormLabel>
                    <FormControl>
                      <Input placeholder="Pension" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Clear
            </Button>
            <Button type="submit">Save & Check Eligibility</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CoApplicantForm;
