import './3rd-card.css'
import React from 'react'
import Image from "next/image";
import Ima from '..//IMAGES/Rectangle 717.svg'
import play from '..//IMAGES/play.svg'

const CCard = () => {
    return(
<div className='py-5 mt-5 '>
<div className='coolor py-3'><div className='container py-5 mt-5 '>
<div class="row featurette ">
      <div class="col-md-7 order-md-2 px-5">
        <h2 class="featurette-heading simple ">Lorem Ipsum is simply dummy text 
of the printing and typesetting 
        </h2>
        <p class="lead new  ">It is a long established fact that a reader will be distracted 
by the readable content of a page when looking at its layout. 
The point of using Lorem Ipsum is that it has a more-or-less normal distribution of 
letters, as opposed to using 'Content here, content here', making it look like readable 
English. Many desktop publishinbr

by the readable content of a page when looking at its layout. 
<br/><br />
by the readable content of a page when looking at its layout. 
The point of using Lorem Ipsum is that it has a more-or-less normal distribution of 
letters, as opposed to using 'Content here, content here', making it look like readable </p>
<button className="btn-btn pb- but ">Read more About us</button>
      </div>
      <div class="col-md-5 order-md-1">
      
<Image src={Ima}  className='picc' alt='Imag'/>
<div className='d-flex justify-content-center'><Image src={play} className='dter' width={30} />
    </div>  </div>
    </div>

</div>

</div>
   </div>     
    )
}

export default CCard