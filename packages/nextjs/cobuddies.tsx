'use client'
import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import Card from "~~/components/Card";
import manifest from "~~/components/dietician.json"

const Home: NextPage = () => {
  
  return (
    <>

<div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">

            {manifest.cobuddies.map((data,idx)=> (
                <Card title={data.name} image={data.image} description={data.description} hourlyRate={data.hourlyRate} destination={"/schedule/"+data.id} button="Book a call"></Card>
            ))}


          </div>



        </div>

      


    </>
  );
};

export default Home;
