
function Slider(props){
    const sliderID = props.name+"_slider";

    return (
        <div>
            <label>{props.name}</label>
            <input type="range" onChange={(e) => props.onChange && props.onChange(e.target.value)}/>
        </div>
    );
}

export default Slider;