
function Combobox(props){
    const selectID = props.name+"_select";

    return (
        <div>
            <label>{props.name}</label>
            <select id={selectID}>
                <option value="hard">Hard</option>
                <option value="soft">Soft</option>
            </select>
        </div>
    );
}

export default Combobox;