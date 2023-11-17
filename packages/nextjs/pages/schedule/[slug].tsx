import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MetaHeader } from "~~/components/MetaHeader";

import begum from "~~/components/dietician.json";


const getCurrentDate = (): string => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return today.toLocaleDateString("en-US", options);
};

const getTomorrowDate = (): string => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return tomorrow.toLocaleDateString("en-US", options);
};
const getTodayPlus2 = (): string => {
    const todayplus2 = new Date();
    todayplus2.setDate(todayplus2.getDate() + 2);

    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return todayplus2.toLocaleDateString("en-US", options);
};

const getTodayPlus3 = (): string => {
    const todayplus3 = new Date();
    todayplus3.setDate(todayplus3.getDate() + 3);

    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return todayplus3.toLocaleDateString("en-US", options);
};


export default function Schedule() {

    const [dateOption, setDateOption] = useState(getCurrentDate())
    const [timeOption, setTimeOption] = useState("09:00 CET");
    const [result, setResult] = useState(false);
    const route = useRouter();



    const onDateOptionChange = (e: any) => {
        setDateOption(e.target.value);
    }

    const onTimeOptionChange = (e: any) => {
        setTimeOption(e.target.value);
    }

    const displayRadioValue = () => {
        console.log(dateOption, "DATE");
        console.log(timeOption, "TIME");
        setResult(true);
    }


    if (result) {

        const dietician = begum.dieticians.filter((data) => { return (data.id.toString() == route.query.slug); }).at(0);

        return (
            <div>
                <MetaHeader />

                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Confirm Spot!</h1>
                            <p className="py-6"> Eat Smart, Live well. You are about to confirm your spot with <b>{dietician?.name}</b> at <b>{timeOption}</b> on <b>{dateOption}</b>. Check your booking details before staking!</p>
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <label className="label">
                                        <span className="label-text">0x145F569B9D46F509286a66e4597FC5cC2Ec0fdE4</span>
                                    </label>


                                    
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Amount</span>
                                    </label>
                                    <label className="label">
                                        <span className="label-text">{dietician?.hourlyRate}</span>
                                    </label>



                

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Stake</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </div>


        )
    }
    else {
        return (
            <>
                <div className="md:py-8 py-5 md:px-16 px-15 dark:bg-gray-700 bg-gray-50 rounded-b">
                    <label>Select Date:</label>
                    <div className="md:py-18 py-5 md:px-16 px-15 dark:bg-gray-700 bg-gray-50 rounded-b">
                        <div className="px-15">
                            <input type="radio" name="date" className="radio radio-success" value={getCurrentDate()} onChange={onDateOptionChange} /> {getCurrentDate()}
                            <input type="radio" name="date" className="radio radio-success" value={getTomorrowDate()} onChange={onDateOptionChange} /> {getTomorrowDate()}
                            <input type="radio" name="date" className="radio radio-success" value={getTodayPlus2()} onChange={onDateOptionChange} /> {getTodayPlus2()}
                            <input type="radio" name="date" className="radio radio-success" value={getTodayPlus3()} onChange={onDateOptionChange} /> {getTodayPlus3()}



                            <div className="md:py-8 py-5 md:px-16 px-15 dark:bg-gray-700 bg-gray-50 rounded-b">
                                <label>Select Time:</label>
                                <div className="md:py-18 py-5 md:px-16 px-15 dark:bg-gray-700 bg-gray-50 rounded-b">
                                    <div className="px-15">
                                        <input type="radio" name="time" className="radio radio-success" value="09:00 CET" onChange={onTimeOptionChange} /> 09:00 CET
                                        <input type="radio" name="time" className="radio radio-success" value="10:00 CET" onChange={onTimeOptionChange} /> 10:00 CET
                                        <input type="radio" name="time" className="radio radio-success" value="11:00 CET" onChange={onTimeOptionChange} /> 11:00 CET
                                        <input type="radio" name="time" className="radio radio-success" value="14:00 CET" onChange={onTimeOptionChange} /> 14:00 CET
                                        <input type="radio" name="time" className="radio radio-success" value="16:00 CET" onChange={onTimeOptionChange} /> 16:00 CET
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-s text-white bg-blue-700 space-y-24" type="button" onClick={displayRadioValue}>Submit
                        </button>
                    </div>
                </div>
            </>
        );
    }
};

