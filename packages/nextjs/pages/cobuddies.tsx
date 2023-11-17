'use client'
import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import Card from "~~/components/Card";


const Home: NextPage = () => {
  
  return (
    <>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">


            <Card title="DietBuddy made healthy living a breeze!" image="https://img.freepik.com/free-vector/five-stars-rating-button-experience-reviews_8829-2624.jpg?w=2000&t=st=1700224472~exp=1700225072~hmac=18959ea933adc3a8194964a1c590846f267ed821db73196d747f3ea973601842" className="h-8 w-8 fill-secondary" description="The personalized guidance from my dietician and the supportive community kept me on track. It's more than an app; it's a lifestyle changer!">

            </Card>
            <Card title="Thanks to DietBuddy, I found a sustainable way to eat well without sacrificing taste." image="https://img.freepik.com/free-vector/five-stars-rating-button-experience-reviews_8829-2624.jpg?w=2000&t=st=1700224472~exp=1700225072~hmac=18959ea933adc3a8194964a1c590846f267ed821db73196d747f3ea973601842" className="h-8 w-8 fill-secondary" description="The quick access to expert advice and the friendly interactions with other users made my journey enjoyable and effective!">

            </Card>
            <Card title="DietBuddy is my go-to for nutritional support." image= "https://img.freepik.com/free-vector/five-stars-rating-button-experience-reviews_8829-2624.jpg?w=2000&t=st=1700224472~exp=1700225072~hmac=18959ea933adc3a8194964a1c590846f267ed821db73196d747f3ea973601842" className="h-8 w-8 fill-secondary" description="The app's simplicity, combined with the wisdom from my dietician, turned my health goals into achievable milestones. Highly recommend it for anyone serious about their well-being!">
            </Card>
          </div>
        </div>

    </>
  );
};

export default Home;
