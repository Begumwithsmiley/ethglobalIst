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


            <Card title="Dr. Olivia Nutritionista" image="https://img.freepik.com/free-photo/smiling-nutritionist-her-office-she-is-showing-healthy-vegetables-fruits-healthcare-diet-concept-female-nutritionist-with-fruits-working-her-desk_657921-280.jpg?w=2000&t=st=1700166392~exp=1700166992~hmac=d09ece27e1b873d55ae297b474546b053febf07faf08d47b5797701eec4d7d0a" className="h-8 w-8 fill-secondary" description="Hello there! I'm Dr. Olivia, your dedicated nutrition expert. Let's embark on a journey towards a healthier, more vibrant you, one delicious meal at a time!" button="Book a call">

            </Card>
            <Card title="Dr. Marcus WellnessMaster" image="https://img.freepik.com/free-photo/portrait-cheerful-physician-glasses-offering-ripe-apple_1262-12815.jpg?w=2000&t=st=1700167266~exp=1700167866~hmac=a657e2810cb25fac6c606ead477998f17b23b1636010bfb3982996ca140fa51a" className="h-8 w-8 fill-secondary" description="Greetings! I'm Chef Marcus, your culinary guide to a balanced and flavorful diet. Together, we'll create a menu that not only nourishes your body but also delights your taste buds." button="Book a call">

            </Card>
            <Card title="Dr. James FitFuel" image="https://img.freepik.com/free-photo/young-hispanic-dietitian-man-holding-doughnut-apple-smiling-looking-side-staring-away-thinking_839833-14017.jpg?w=2000&t=st=1700167437~exp=1700168037~hmac=250e5708ae32ec858361b449b986bcd410ca111e41cd47d96b48d5de8e1d4dca" className="h-8 w-8 fill-secondary" description="Hey, I'm James, your go-to nutrition guru. Excited to help you fuel your body with the right nutrients, achieve your fitness goals, and make healthy living a lifestyle, not a chore." button="Book a call">

            </Card>
            <Card title="Dr. Emily NutriWellness" image="https://img.freepik.com/free-photo/expressive-senior-woman-posing_344912-976.jpg?w=2000&t=st=1700167376~exp=1700167976~hmac=2efd91ddbfedc3bf26d22859cbd73ed975034da98e7349be97c303dbe14692ae" className="h-8 w-8 fill-secondary" description="Hi, I'm Dr. Emily, your nutrition companion. Let's navigate the world of wholesome eating, uncovering the secrets to a healthier lifestyle tailored just for you." button="Book a call">

</Card>

          </div>



        </div>

      


    </>
  );
};

export default Home;
