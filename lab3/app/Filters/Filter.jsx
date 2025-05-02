
import Combobox from "./Combobox";
import SearchBar from "./SearchBar";
import Slider from "./Slider";
import { useState } from "react";


function Filters({ setFilterTitle, setFilterAuthor, setFilterCover }){
    return (
        <div className="filtersBar">
            <SearchBar name="Title" onChange={(value) => setFilterTitle(value)}/>
            <SearchBar name="Author" onChange={(value) => setFilterAuthor(value)}/>
            <Combobox name="Cover" onChange={(value) => setFilterCover(value)}/>
            <Slider name="Price"/>
            <Slider name="Pages"/>
        </div>
    );
}

export default Filters;