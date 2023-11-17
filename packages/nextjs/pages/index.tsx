'use client'
import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import Card from "~~/components/Card";
import manifest from "~~/components/dietician.json"
import { concat } from "viem";

const Home: NextPage = () => {
  
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="bg-base-300 block text-2xl mb-2">Welcome to</span>
            <span className="block text-8xl font-bold">DietBuddy</span>
          </h1>
          <p className="bg-base-300 text-center text-lg">
          Eat Smart, Live Well: Your Journey to a Healthier You Starts Here with DietBuddy!
            {" "}

          </p>
          
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">

            {manifest.dieticians.map((data,idx)=> (
                <Card title={data.name} image={data.image} description={data.description} hourlyRate={data.hourlyRate} destination={"/schedule/"+data.id} button="Book a call"></Card>
            ))}


          </div>



        </div>

      </div>


    </>
  );
};

export default Home;
