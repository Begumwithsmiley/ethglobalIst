import Hero from "~~/components/Hero";
import { MetaHeader } from "~~/components/MetaHeader";
import { parseEther } from "viem";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { useState } from "react";
import begum from "~~/components/dietician.json";
import { useRouter } from "next/router";


export default function SuccessPage() {
    const [dieticianAddress, setDieticianAddress] = useState("0x00782e2e2F77aDCCeeBAD44607CFbF08f732223d");
    const [paymentAmount, setPaymentAmount] = useState("0.3");
    const route = useRouter();

    const dietician = begum.dieticians.filter((data) => { return (data.id.toString() == route.query.slug); }).at(0);


    return (
        <div>
            <MetaHeader />
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Spot Confirmed!</h1>
                        <p className="py-6">  
                        <br />You confirmed your spot with <b>{dietician?.name}</b> at <b>"09:00 CET"</b> on <b>tomorrow</b>. 
                        <br />Check your booking details before staking!</p>
                        <p className="py-6"> </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}