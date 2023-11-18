import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { parseEther } from "viem";
import { MetaHeader } from "~~/components/MetaHeader";

import begum from "~~/components/dietician.json";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";


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


function convertDateToUnixTimestamp(year: number, month: number, day: number, hours: number = 0, minutes: number = 0, seconds: number = 0): number {
    const date = new Date(year, month - 1, day, hours, minutes, seconds);
    return Math.floor(date.getTime() / 1000);
}

// Example: Convert a specific date and time to Unix timestamp
const unixTimestamp = convertDateToUnixTimestamp(2023, 11, 18, 12, 30, 0);
console.log(unixTimestamp);


export default function Schedule() {

    const { writeAsync, isLoading, isMining } = useScaffoldContractWrite({
        contractName: "YourContract",
        functionName: "bookDietician",
        args: [
            "0x00782e2e2F77aDCCeeBAD44607CFbF08f732223d", 
            String(1729949130)],
        // For payable functions
        value: parseEther("0.3"),
        // The number of block confirmations to wait for before considering transaction to be confirmed (default : 1).
        blockConfirmations: 1,
        // The callback function to execute when the transaction is confirmed.
        onBlockConfirmation: txnReceipt => {
          console.log("Transaction blockHash", txnReceipt.blockHash);
        },
      });

    const [dateOption, setDateOption] = useState()
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

        if (!dateOption || !timeOption) {
            alert("Please choose date and time");
        }
        else {
            console.log(dateOption, "DATE");
            console.log(timeOption, "TIME");
            setResult(true);
        }
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
                                    <button onClick={() => writeAsync()} className="btn btn-primary">Stake</button>
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

