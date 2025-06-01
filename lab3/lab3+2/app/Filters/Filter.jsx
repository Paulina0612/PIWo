
import Combobox from "./Combobox";
import SearchBar from "./SearchBar";
import Slider from "./Slider";
import { useState } from "react";


function Filters({ setFilterTitle, setFilterAuthor, setFilterCover, setFilterPages, setFilterPrice }){
    return (
        <div className="filtersBar">
            <SearchBar name="Title" onChange={(value) => setFilterTitle(value)}/>
            <SearchBar name="Author" onChange={(value) => setFilterAuthor(value)}/>
            <Combobox name="Cover" onChange={(value) => setFilterCover(value)}/>
            <Slider name="Max Price" max={100} onChange={(value) => setFilterPrice(value)}/>
            <Slider name="Max Pages" max={2000} onChange={(value) => setFilterPages(value)}/>
        </div>
    );
}

export default Filters;