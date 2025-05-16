import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { RiMenu3Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router';
import { IoRocketOutline } from "react-icons/io5";
import CategoryPanel from './CategoryPanel';

function Navigation() {


    const [isopencatPanel, serIsOpenCatPanel] = useState(false);

    const openCategoryPanel =(val) =>{
        serIsOpenCatPanel(val)
    }


  return (
    <>
    <nav>
        <div className=' container flex items-center justify-end gap-8  py-3'>
            <div className=' lg:block hidden w-[20%]'>
               
                 <Button className='!text-black gap-2   ' onClick={openCategoryPanel} >  <RiMenu3Fill className='text-xl font-bold' />Shop By Categories <FaAngleDown className='text-sm ml-3' /></Button>
            </div>

            <div className=' overflow-x-auto whitespace-nowrap no-scrollbar  lg:w-[60%] w-full'>
                <ul className='items-center gap-2 flex   '>
                    <li>
                    
                        <Link to={"/"}>  <Button size="large"   sx={{ textTransform: 'none', fontFamily: "Lora, serif", color:"black", "&:hover":{
                            color: "#ff5252"
                        }}} >Home</Button>  </Link>
                    </li>
                    <li>
                    
                        <Link to={"/"}>  <Button size="large"   sx={{ textTransform: 'none', fontFamily: "Lora, serif", color:"black", "&:hover":{
                            color: "#ff5252"
                        }}} >Fashion</Button>  </Link>
                    </li>
                    <li>
                    
                        <Link to={"/"}>  <Button size="large"   sx={{ textTransform: 'none', fontFamily: "Lora, serif", color:"black", "&:hover":{
                            color: "#ff5252"
                        }}} >Bags</Button>  </Link>
                    </li>
                    <li>
                    
                        <Link to={"/"}>  <Button size="large"   sx={{ textTransform: 'none', fontFamily: "Lora, serif", color:"black", "&:hover":{
                            color: "#ff5252"
                        }}} >Footwear</Button>  </Link>
                    </li>
                    <li>
                    
                        <Link to={"/"}>  <Button size="large"   sx={{ textTransform: 'none', fontFamily: "Lora, serif", color:"black", "&:hover":{
                            color: "#ff5252"
                        }}} >Groceries</Button>  </Link>
                    </li>
                    <li>
                    
                        <Link to={"/"}>  <Button size="large"   sx={{ textTransform: 'none', fontFamily: "Lora, serif", color:"black", "&:hover":{
                            color: "#ff5252"
                        }}} >Beauty</Button>  </Link>
                    </li>
                    <li>
                    
                        <Link to={"/"}>  <Button size="large"   sx={{ textTransform: 'none', fontFamily: "Lora, serif", color:"black", "&:hover":{
                            color: "#ff5252"
                        }}} >Wellness</Button>  </Link>
                    </li>
                    <li>
                    
                        <Link to={"/"}>  <Button size="large"   sx={{ textTransform: 'none', fontFamily: "Lora, serif", color:"black", "&:hover":{
                            color: "#ff5252"
                        }}} >Jewellry</Button>  </Link>
                    </li>
            

                </ul>
            </div>


            <div className='w-[20%] lg:flex hidden ' >
                <p className=' font-[300] text-[14px] gap-3 flex  '> <IoRocketOutline className='text-xl' />Free International Delivery</p>
            </div>

        </div>
    </nav>
    <CategoryPanel
  isOpen={isopencatPanel} 
  setOpen={openCategoryPanel}
/>



    </>
  )
}

export default Navigation;
