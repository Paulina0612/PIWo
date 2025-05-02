
function SearchBar(props){
    const buttonID = props.name+"_button";

    return (
        <div>
            <label>{props.name}</label>
            <input type="text" id={buttonID} onChange={(e) => props.onChange && props.onChange(e.target.value)} />
        </div>
    );
}

export default SearchBar;