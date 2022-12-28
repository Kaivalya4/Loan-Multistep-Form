import React from "react";
import { Step, Stepper, StepLabel, Button } from "@mui/material";
import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import BusinessDetails from "./BusinessDetails";
import LoanDetail from "./LoanDetail";
import { useForm, FormProvider } from "react-hook-form";
import fetch from "node-fetch";
import { useNavigate } from "react-router-dom";

const LinearStepper = () => {
    const navigate = useNavigate();

    const [currstep, changeStep] = useState(0);
    const labels = [
        "Personal Details",
        "Business Details",
        "Loan Application Details",
    ];
    const methods = useForm();

    function getcontent() {
        switch (currstep) {
            case 0:
                return <PersonalDetails />;
            case 1:
                return <BusinessDetails />;
            case 2:
                return <LoanDetail />;
            default:
                return "Blank Page Error";
        }
    }

    function handlePrev() {
        if (currstep > -1) changeStep(currstep - 1);
    }

    function handleNext(data) {
        console.log(data);
        if (currstep < labels.length - 1) changeStep(currstep + 1);
        if (currstep === labels.length - 1) {
            console.log("hello");
            let datas = {
                firstname: data.firstName,
                lastname: data.lastName,
                mobile: data.mobileNo,
                age: data.age,
                business: data.businessName,
                gstno: data.gstNo,
                address: data.address,
                employees: data.employeeNo,
                loanamt: data.loanAmt,
                interest: data.interestRate,
                tenure: data.loanTen,
            };
            fetch("https://save-form.onrender.com/save", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(datas),
            })
                .then((res) => {
                    if (res.status === 200) {
                        navigate("/success");
                    } else {
                        navigate("/fail");
                    }
                })
                .catch((err) => {
                    console.log("client side failure");
                    navigate("/fail");
                });
        }
    }

    return (
        <div style={{ padding: "1rem" }}>
            <Stepper activeStep={currstep}>
                {labels.map((eachlabel, index) => {
                    return (
                        <Step key={index}>
                            <StepLabel>{eachlabel}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleNext)}>
                    {getcontent()}
                    <Button
                        variant="contained"
                        sx={{ m: 2 }}
                        disabled={currstep === 0}
                        onClick={() => handlePrev()}
                        type="button"
                    >
                        Prev
                    </Button>
                    <Button variant="contained" type="submit">
                        {currstep === labels.length - 1 ? "Submit" : "Next"}
                    </Button>
                </form>
            </FormProvider>
        </div>
    );
};

export default LinearStepper;
