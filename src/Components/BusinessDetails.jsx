import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const BusinessDetails = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext();
    return (
        <>
            <Controller
                control={control}
                name="businessName"
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                    <TextField
                        id="bus-name"
                        label="Business Name"
                        variant="outlined"
                        placeholder="Enter  Business Name"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors.businessName)}
                        helperText={errors.businessName?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="gstNo"
                rules={{
                    required: "This field is required",
                    pattern: {
                        value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
                        message: "Please fill valid gst number",
                    },
                }}
                render={({ field }) => (
                    <TextField
                        id="gst-no"
                        label="GST Numbser"
                        variant="outlined"
                        placeholder="Enter  GST Number"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors.gstNo)}
                        helperText={errors.gstNo?.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="address"
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                    <TextField
                        id="address"
                        label="Address"
                        variant="outlined"
                        placeholder="Enter Address"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors.address)}
                        helperText={errors.address?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="employeeNo"
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                    <TextField
                        id="emp-no"
                        label="Number of Employees"
                        variant="outlined"
                        placeholder="Enter Number of Employees"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors.employeeNo)}
                        helperText={errors.employeeNo?.message}
                    />
                )}
            />
        </>
    );
};

export default BusinessDetails;
