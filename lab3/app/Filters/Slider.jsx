
function Slider(props){

    return (
        <div>
            <label>{props.name}</label>
            <input type="range"/>
        </div>
    );
}

export default Slider;