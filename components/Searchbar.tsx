"use client";
import React from 'react'
import { useState } from 'react';
import SearchManufacturer from './SearchManufacturer';

const Searchbar = () => {
    const [manufacturer, setManufacturer] = useState("");
    const handleSearch = () => {}
  return (
    <form action="" className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar___item'>
        <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
        
         />

    </div>
    </form>
    
  )
}

export default Searchbar