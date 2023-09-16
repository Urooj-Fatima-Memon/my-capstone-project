import React from "react";
import './hero-section.css'
import Image from "next/image";
import Imagone from '../IMAGES/Farm-Animal- 1.svg'
import IImage from'..//IMAGES/Fruit_Veggi- 1.svg'
import Iimag from '../IMAGES/Ellipse 17.svg'
import immmg from '..//IMAGES/Puffin-300x300 1.svg'
import rubin from '..//IMAGES/Robin-300x300 2.svg'
import tack from '../IMAGES/Tractor-300x300 1.svg'
import ttuck from '..//IMAGES/Tractor-300x300 2.svg'
import paguain from'..//IMAGES/Penguin-rattle-knitting-1-300x300 1.svg'
import  images  from '../IMAGES/Ellipse 17.svg';

const Herosection =()=>{
    return(
        
      <div class="bg-cOlor mt-5">
    <div class="container">
      <div class="row pt-5 pb-5 d-flex align-item-center">
      <div class="col-md-6 ">
      <h1 className="py-5">Experience Better<br/>
         Real <span className="colorr">OWWToys</span> with us  
      </h1> 
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officia maiores sapiente at recusandae! Iusto beatae voluptatibus cumque reprehenderit eaque fugit maiores rerum excepturi ullam aliquam quam, soluta consequatur voluptatum?</p>


<button className="btn-btn butn text-center">Shop now</button><button className="btn-btn mt-5 ms-2   text-center butun ">Watch videos</button>
      </div>

      <div class="col-md-6">
       
      <Image
        src={Imagone}
        alt="Logo"
        className="eng"
        
    
        priority
      />
       
 <Image src={IImage} className=" lef "/>
    <Image src={Iimag}  className="imag  "/> </div>   
      </div>
      <div>
   
      
      <h1 class="fw-bold colorr"> 
   
      Most Popular Product
     </h1>
     <div className="d-flex justify-content-end colorr">
  <h5>View More</h5>
   
   </div>
    </div>
  <div class="row row-cols-1 row-cols-lg-4 py-5 align-items-stretch  ">
  <div className="mt-4">
      <div class="col color ">

<li class="d-flex  justify-content-center ">
  <div className=" py-2">
  <Image  src={rubin} width={300}></Image>
  <div className="d-flex align-items-center justify-content-center nameee">
  <Image src={images} width={150} className=""/></div>
 <h3 className="text-center class">Robin rattle</h3>
  </div>
  </li>
  

<div className="py-2"></div>
</div>
        
      </div>
      <div className="mt-4">
      <div class="col coloo ">

<li class="d-flex  justify-content-center ">
  <div className=" py-2">
  <Image  src={immmg} width={300}></Image>
  <div className="d-flex align-items-center justify-content-center nameee">
  <Image src={images} width={150} className=""/></div>
 <h3 className="text-center class">Puffin rattle</h3>
  </div>
  </li>
  

<div className="py-2"></div>
</div>
    </div>
    <div className="mt-4">
      <div class="col coloro ">

<li class="d-flex  justify-content-center ">
  <div className=" py-2">
  <Image  src={tack} width={300}></Image>
  <div className="d-flex align-items-center justify-content-center nameee">
  <Image src={ttuck} width={15} className=""/></div>
 <h3 className="text-center class ">Tractor rattle
</h3>
  </div>
  </li>
  

<div className="py-2"></div>
</div>
</div>
<div className="mt-4">
      <div class="col colo ">

<li class="d-flex  justify-content-center ">
  <div className=" py-2">
  <Image  src={paguain} width={320}></Image>
  <div className="d-flex align-items-center justify-content-center nameee">
  <Image src={images} width={150} className=""/></div>
 <h3 className="lass">Penguin rattle – knitting</h3>
  </div>
  </li>
  

<div className="py-2"></div>
</div></div>
    
</div>

  </div>



    </div>
    )
}
    export default Herosection;
