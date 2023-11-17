import React from 'react';
import Link from 'next/link';



export default function Card(props: {image: string, title: string, description: string, destination: string, hourlyRate: string, button: string}): JSX.Element {
    
    return(
    <div className="card w-96 glass">
        <figure><img src={props.image} alt="car!" /></figure>
        <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <p>{props.description}</p>
            <p className="card-title">{props.hourlyRate}</p>

            {props.destination ? (<Link href={props.destination}>
            <div className="card-actions justify-end">
            
          <a>{props.button? (
                    <button className="btn btn-s text-white bg-blue-700 space-y-24">{props.button}</button>): (<></>)
}</a>
          </div>
        </Link>) : (<></>) }

            
            
            
              
            
        </div>
    </div>
    )
}