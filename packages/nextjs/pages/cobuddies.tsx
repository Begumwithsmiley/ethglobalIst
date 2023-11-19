'use client'
import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import Card from "~~/components/Card";
import metin from "~~/components/cobuddies.json"

const Cobuddies: NextPage = () => {
  
  return (
    <>

<div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">

            {metin.cobuddies.map((data,idx)=> (
                <Card title={data.name} image={data.image} description={data.description}></Card>
            ))}


          </div>



        </div>

      


    </>
  );
};

export default Cobuddies;
