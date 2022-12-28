import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const LoanDetail = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <>
            <Controller
                control={control}
                name="loanAmt"
                rules={{
                    required: "Please fill this field",
                    pattern: {
                        value: /^([0-9]*[.])?[0-9]+$/,
                        message: "Enter valid amount",
                    },
                }}
                render={({ field }) => (
                    <TextField
                        id="cardNumber"
                        label="Loan Amount"
                        variant="outlined"
                        placeholder="Enter Loan Amount"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors.loanAmt)}
                        helperText={errors.loanAmt?.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="interestRate"
                rules={{
                    required: "Please fill this field",
                    pattern: {
                        value: /^([0-9]*[.])?[0-9]+$/,
                        message: "Please fill appropriately",
                    },
                    maxLength: 4,
                }}
                render={({ field }) => (
                    <TextField
                        id="interest-rate"
                        label="Interest Rate"
                        variant="outlined"
                        placeholder="Enter Interest Rate"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors.interestRate)}
                        helperText={errors.interestRate?.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="loanTen"
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                    <TextField
                        type="number"
                        id="loan-ten"
                        label="Loan Tenure"
                        variant="outlined"
                        placeholder="Enter Loan Tenure in months"
                        fullWidth
                        margin="normal"
                        min={0}
                        {...field}
                        error={Boolean(errors.loanTen)}
                        helperText={errors.loanTen?.message}
                    />
                )}
            />
        </>
    );
};

export default LoanDetail;
