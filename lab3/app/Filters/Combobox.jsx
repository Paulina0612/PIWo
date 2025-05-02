
function Combobox(props){

    return (
        <div>
            <label>{props.name}</label>
            <select>
                <option value="hard">Hard</option>
                <option value="soft">Soft</option>
            </select>
        </div>
    );
}

export default Combobox;