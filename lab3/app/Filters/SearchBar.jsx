
function SearchBar(props){
    const buttonID = props.name+"_button";

    return (
        <div>
            <label>{props.name}</label>
            <input type="text" id={buttonID}/>
        </div>
    );
}

export default SearchBar;