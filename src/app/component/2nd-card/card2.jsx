import React from "react";
import Image from "next/image";
import'./card2.css'
import Imae from '..//IMAGES/Group 1000005237.svg'

const Section =()=>{
    return(
      <div className="coolor py-5">
<div className='container py-5 mt-5 '>
<div class="row featurette ">
      <div class="col-md-7 order-md-1 px-5">
        <h2 class="featurette-heading simple ">Lorem Ipsum is simply dummy text 
of the printing and typesetting 
        </h2>
        <p class="lead new  ">It is a long established fact that a reader will be distracted 
by the readable content of a page when looking at its layout. <br/>
The point of using Lorem Ipsum is that it has a more-or-less normal distribution of 
letters, as opposed to using 'Content here, content here', making it look like readable
English. Many desktop publishin<br/>
by the readable content of a page when looking at its layout. <br/>
<br/>
by the readable content of a page when looking at its layout. <br/>
The point of using Lorem Ipsum is that it has a more-or-less normal distribution of <br/>
letters, as opposed to using 'Content here, content here', making it look like readable  </p>
<button className="btn-btn pb- butt ">Read more About us</button>
      </div>
      <div class="col-md-5 order-md-2">
      
<Image src={Imae} width={450}  className='pic' alt='Imag'/>
      </div>
    </div>

</div>

</div>
    )
}
    export default Section;
