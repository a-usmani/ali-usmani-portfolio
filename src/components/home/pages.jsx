import { useEffect, useRef, useState } from "react";
import {gsap} from 'gsap'

export default function Pages(props){
    const listItems= useRef([])

    const listHover = (index) => {
        gsap.to(listItems.current, {
            opacity: 0.5, 
            duration: 0.2,
          })
      
          gsap.to(listItems.current[index], {
            opacity: 1, 
            duration: 0.2,
          })
    }
    
    const listLeave = () => {

        gsap.to(listItems.current, {
            duration: 0.2,
            opacity: 1, 

          })
    }

    return (
        <ul className="text-3xl font-bold   overflow [&>*]:cursor-pointer">
            {["About Me","Skills","Projects","Contact Me"].map((item,index) => (
                <li
                    key={index}
                    ref={(x) => (listItems.current[index] = x)}
                    onMouseEnter={() => listHover(index)}
                    onMouseLeave={() => listLeave()}
                    onClick={() => props.scrollTo(props.sections[index+1])}
                    className="my-4"
                >
                    {item}
                </li>
            ))}
        </ul>
    )
}