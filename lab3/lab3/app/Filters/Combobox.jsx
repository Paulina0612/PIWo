
function Combobox(props){
    const selectID = props.name+"_select";

    return (
        <div>
            <label>{props.name}</label>
            <select onChange={(e) => props.onChange && props.onChange(e.target.value)}>
                <option value="null">All</option>
                <option value="hard">Hard</option>
                <option value="soft">Soft</option>
            </select>
        </div>
    );
}

export default Combobox;