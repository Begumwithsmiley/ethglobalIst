import Hero from "~~/components/Hero";
import { MetaHeader } from "~~/components/MetaHeader";
import { parseEther } from "viem";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { useState } from "react";
import begum from "~~/components/dietician.json";
import { useRouter } from "next/router";


export default function SuccessPage() {
   
    const route = useRouter();
    const dietician = begum.dieticians.filter((data) => { return (data.id.toString() == route.query.slug); }).at(0);


    return (
        <div>
            <MetaHeader />
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Spot Confirmed!</h1>
                        <br />You confirmed your spot with <b>{dietician?.name}</b> at <b>"09:00 CET"</b> on <b>tomorrow</b>. 
                    </div>
                </div>
            </div>
        </div>
    )
}