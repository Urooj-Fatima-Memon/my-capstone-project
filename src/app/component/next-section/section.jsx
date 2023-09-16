import './section.css'
import React from 'react'
import Image from "next/image";
import Imago from '..//IMAGES/Rectangle 712.svg'

const Herocard = () => {
    return(
<div className=' '>

<div className='container py-5 mt-5 '>
<div class="row featurette ">
      <div class="col-md-7 order-md-2 px-5">
        <h2 class="featurette-heading simple ">It's simple
        </h2>
        <p class="lead new  ">It is a long established fact that a reader will be distracted 
by the readable content of a page when looking at its layout. 
The point of using Lorem Ipsum is that it has a more-or-less normal distribution of 
letters, as opposed to using 'Content here, content here', making it look like readable 
English. Many desktop publishin
by the readable content of a page when looking at its layout. 

by the readable content of a page when looking at its layout. 
The point of using Lorem Ipsum is that it has a more-or-less normal distribution of 
letters, as opposed to using 'Content here, content here', making it look like readable </p>
<button className="btn-btn pb- but ">Read more About us</button>
      </div>
      <div class="col-md-5 order-md-1">
      
<Image src={Imago} width={450}  className='pic' alt='Imag'/>
      </div>
    </div>

</div>

</div>
        
    )
}

export default Herocard