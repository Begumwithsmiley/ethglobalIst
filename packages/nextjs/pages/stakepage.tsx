import Hero from "~~/components/Hero";
import { MetaHeader } from "~~/components/MetaHeader";
import { parseEther } from "viem";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { useState } from "react";
import begum from "~~/components/dietician.json";
import { useRouter } from "next/router";


export default function Stake() {
    const [dieticianAddress, setDieticianAddress] = useState("0x00782e2e2F77aDCCeeBAD44607CFbF08f732223d");
    const [paymentAmount, setPaymentAmount] = useState("0.3");
    const route = useRouter();

    const dietician = begum.dieticians.filter((data) => { return (data.id.toString() == route.query.slug); }).at(0);


    const { writeAsync, isLoading, isMining } = useScaffoldContractWrite({
        contractName: "YourContract",
        functionName: "bookDietician",
        args: [
            dieticianAddress, 
            String(1702849030)],
        // For payable functions
        value: parseEther(paymentAmount),
        // The number of block confirmations to wait for before considering transaction to be confirmed (default : 1).
        blockConfirmations: 1,
        // The callback function to execute when the transaction is confirmed.
        onBlockConfirmation: txnReceipt => {
          console.log("Transaction blockHash", txnReceipt.blockHash);
        },
      });


    return (
        <div>
            <MetaHeader />
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Confirm Spot!</h1>
                        <p className="py-6"> Eat Smart, Live well. 
                        <br />You confirm the spot with <b>{dietician?.name}</b> at <b>"09:00 CET"</b> on <b>tomorrow</b>. 
                        <br />Check your booking details before staking!</p>
                        <p className="py-6"> </p>
                    </div>
                    <div className="card p-4 shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" className="input input-bordered" value={dieticianAddress} required disabled />
                            </div>
                           // <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Amount</span>
                                </label>
                                <input type="text" className="input input-bordered" value={paymentAmount} required disabled />

                            </div>
                            <div className="form-control mt-6">
                                <button onClick={() => writeAsync()} className="btn btn-primary">Stake</button>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}