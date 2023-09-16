

import Card from "../../cards/card"
import Herosection from "../../hero-section/hero-section"
import Navbar from "../../navbar/2nd-nav"
   
import React from "react"
import Herocard from "../../next-section/section"
import Section from "../../2nd-card/card2"
import CCard from "../../3rd-card/3rd-card"
import Lastcard from "../../footer/footer"

const Pages = () => {
    
    return (
        <>
<Navbar /> 
< Herosection />
<Card />
<Herocard/>
<Section />
<CCard/>
<Lastcard/>
</>
    )
}
export default Pages