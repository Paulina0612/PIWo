
import Combobox from "./Combobox";
import SearchBar from "./SearchBar";
import Slider from "./Slider";
import { useState } from "react";


function Filters({ setFilterTitle }){
    return (
        <div className="filtersBar">
            <SearchBar name="Title" onChange={(value) => setFilterTitle(value)}/>
            <SearchBar name="Author"/>
            <Combobox name="Cover"/>
            <Slider name="Price"/>
            <Slider name="Pages"/>
        </div>
    );
}

export default Filters;