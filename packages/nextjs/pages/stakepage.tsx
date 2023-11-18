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

    const dietician = begum.dieticians.find((data) => data.id.toString() === route.query.slug);


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

    </div>

)
}