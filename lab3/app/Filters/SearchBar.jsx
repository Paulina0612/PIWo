
function SearchBar(props){

    return (
        <div>
            <label>{props.name}</label>
            <input type="text" onChange={(e) => props.onChange && props.onChange(e.target.value)} />
        </div>
    );
}

export default SearchBar;