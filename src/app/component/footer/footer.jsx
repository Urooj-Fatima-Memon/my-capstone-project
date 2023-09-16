import Image from "next/image"
import'../footer/footer.css'
import iimmg from '..//IMAGES/phone-solid 1 (1).svg'
import IMG from '..//IMAGES/Group 1000005243.svg'
import immo from '..//IMAGES/Group 1000005246.svg'
 const Lastcard = () => {
    return(

<div className="bck-clr">
 
<div class="container">
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5 my-5 ">
    <div class="col mb-3">
      <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
      <span class="fw-bold coloroo"> 
      <Image src={iimmg} width={30} className="mx-2"/>
        WED LOVE TO HERA FROM YOU
     </span>
      </a>
      <ul class="nav flex-column py-3">
        <p>Contact us:</p>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 py-2 text-body-secondary " className="collo mt-2">owwtoys@gmail.com</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0  py-2 text-body-secondary " className="collo mt-2" >+8801726920405</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary" className="fonyt">Opening hours: 9am - 5.30pm MOnday - Friday</a></li>

       </ul>    </div>

    <div class="col px-2 mb-3">
<p> <span className="collooo">30% off</span> your first order when you subscribe.
You will receive an email with a discount code.</p>
    </div>

    <div class="col  mb-3">
<button className="btn mx-3 ">Subscribe now!</button>
    </div>
    <div class="col px-2 mb-3">
    
<p>    <Image src={IMG} width={30} className="mx-3"/> <span className="coloroo">MORE   INFORMATION</span></p>
   <p> <span className="">Testimonials</span> 
   <span className="mx-3">  T&Cs and Privacy Policy</span>
   <span className="">  Sitemap</span>
   <span className="mx-3">Return Policy</span>
          Wholesale
         Useful links</p>
         <Image src={immo} width={280} className="ms-3 mt-3"/>
    </div>
   

</footer>
<div className="align-item-center classss text-center">    <p className="text-center ">© 2022 Pebblechild UK Ltd. – All rights reserved | Website by Design Incorporated Ltd </p>
</div>
</div>
</div>
    )
 }
 export default Lastcard