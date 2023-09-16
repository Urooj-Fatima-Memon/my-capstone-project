import React from "react";
import './card.css'
import Image from "next/image";


import pagu from '..//IMAGES/Group 1000005217.svg'
import Rain from '..//IMAGES/rain.svg'
import Girl from '..//IMAGES/girl.svg'
import hand from '../IMAGES/hands.svg'

const Card = () => {
    const card = [
        {
            id: 1,
            content: 'Eco-friendly Product',
            ImageUrl: pagu
        },
        {
            id: 2,
            content: 'Women Empowerment',
            ImageUrl: Girl
        },
        {
            id: 3,

            content: '100% Recylable',
            ImageUrl: hand
        },
        {
            id: 4,
            content: 'Zero Carbon Emission',
            ImageUrl: Rain
        },

    ]





    return (
        <>
            <div className=" colooo">
                <div className="container py-5 mt-5 ">

                    <div>
                        <h1 className=" text-center py-5">WHAT WE DO</h1>
                        <p className=" text-center">OWW Toys is established to produce eco-friendly toys. The toys
                            are completely handmade with 100% organic <br /> cotton. In
                            addition, OWW Toys are working to empower rural women to
                            achieve sustainable development goals.
                        </p>
                    </div>
                    <div className="row row-cols-lg-4 g-4 ">
                        {card.map((item) => (
                            <div className="card text-center py-4">
                                <div className="align-item-center">
                                    <Image src={item.ImageUrl} /></div>
                                <h5 className="text-center">{item.content}</h5>

                            </div>

                        ))}

                    </div>

                    <div className="py-3">
                    </div>
                </div>


            </div>
        </>
    )
}
export default Card