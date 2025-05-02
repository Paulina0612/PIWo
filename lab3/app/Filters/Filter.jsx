import Combobox from "./Combobox";
import SearchBar from "./SearchBar";
import Slider from "./Slider";
import stylesheet from "./styles.css";

function Filters(){
    return (
        <div className="filtersBar">
            <SearchBar name="Title"/>
            <SearchBar name="Author"/>
            <Combobox name="Cover"/>
            <Slider name="Price"/>
            <Slider name="Pages"/>
        </div>
    );
}

export default Filters;