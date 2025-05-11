import React from 'react'
import Button from '@mui/material/Button';
import { CiSearch } from "react-icons/ci";


function Search() {
  return (
  <div className='searchBox w-full bg-[#e5e5e5] rounded-2xl p-1 relative'>
  <input
    type="text"
    placeholder='Search for product...'
    className='w-full focus:outline-none bg-inherit p-1 text-sm'
  />
  <Button className=' !absolute top-[1px] right-[1px] z-50 !w-[34px] !main-w-[34px]  !h-[34px] !rounded-full !text-black'>
    <CiSearch  className='text-black '/>
  </Button>
</div>

  )
}

export default Search
