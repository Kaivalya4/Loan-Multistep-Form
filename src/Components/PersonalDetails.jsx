import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import React from "react";

const PersonalDetails = () => {
    const {
        control,
        formState: { errors },
        register,
    } = useFormContext();

    return (
        <>
            <Controller
                control={control}
                name="firstName"
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                    <TextField
                        id="last-name"
                        label="Firat Name"
                        variant="outlined"
                        placeholder="Enter Your First Name"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors.firstName)}
                        helperText={errors.firstName?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="lastName"
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                    <TextField
                        id="last-name"
                        label="Last Name"
                        variant="outlined"
                        placeholder="Enter Your Last Name"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors.lastName)}
                        helperText={errors.lastName?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="mobileNo"
                rules={{
                    required: "Please fill this field",
                    pattern: {
                        value: /^\d{10}$/,
                        message: "Exactly 10 digits needed",
                    },
                }}
                render={({ field }) => (
                    <TextField
                        id="mobile-no"
                        label="Mobile Number"
                        variant="outlined"
                        placeholder="Enter Your Mobile Number"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors.mobileNo)}
                        helperText={errors.mobileNo?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="age"
                rules={{
                    required: "This field is required",
                    min: {
                        value: 18,
                        message: "Age should be atleast 10",
                    },
                }}
                render={({ field }) => (
                    <TextField
                        type="number"
                        id="age"
                        label="Age"
                        variant="outlined"
                        placeholder="Enter Your age"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors.age)}
                        helperText={errors.age?.message}
                    />
                )}
            />
        </>
    );
};

export default PersonalDetails;
