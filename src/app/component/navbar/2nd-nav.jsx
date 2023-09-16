import React from 'react'
import './NavBar.css'
import imag from '..//IMAGES/search.svg'
import Image from 'next/image'
import phone from '..//IMAGES/phone-solid 1.svg'
import social from '../IMAGES/Group 4501.svg'
import logo from '..//IMAGES/OWW-Toys-log-for-website 1.svg'
import immg from '../IMAGES/Vector (1).svg'
const Navbar =()=>{
    return(
     
     
    
    <div class="b-example-divider">
  
    
    <header class="py-3 mb-4 border-bottom">
      <div class="container d-flex flex-wrap justify-content-center">
      <div class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
          
          <span class="fs-5"><Image src={ phone} width={25} alt='logo'/>1234567890</span>
        </div>
        <pre>
        <form class="example d-flex px-5 mt-2 " action="action_page.php">
  <input type="text"  placeholder="Search.."  name="search" className='namee ' width={400}/>
  
  <button type="submit"><Image src={imag} width={20} className=''/> </button>
</form></pre>
<pre>
<div className='px-3 '>
<ul class="nav px-3 ">
          <Image src={social} width={300} className='mt-3 mx-2 '/>
          <div className='py-4 mb-3'></div>
          
        </ul>

      </div>
</pre>

  </div>
    </header>
  
  
    <nav class="navbar navbar-expand-lg nav border-bottom" aria-label="Eighth navbar example">
    <div class=" container ">
   
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample07">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 px-5">
        <li class="nav-item"><a href="#" class="nav-link link-da  active px-4" aria-current="page">Home</a></li>
          <li class="nav-item"><a href="#" class="nav-link link-dark  px-4">Shop <Image src={immg} width={10} className=''/></a></li>
          <li class="nav-item"><a href="#" class="nav-link link-dark px-4">ABOUT US <Image src={immg} width={10} className=''/></a></li>
          
          <Image src={ logo}  width={200} className='mx-4 mb-2' />
          <li class="nav-item"><a href="#" class="nav-link link-dark px-4">Blog</a></li>
          <li class="nav-item"><a href="#" class="nav-link link-dark px-4">Content</a></li>
          <li class="nav-item"><a href="#" class="nav-link link-da px-4">WATCH VIDEO</a></li>
            </ul>
    
      </div>
    </div>
  </nav>
    </div>
    
    )
}
export default Navbar