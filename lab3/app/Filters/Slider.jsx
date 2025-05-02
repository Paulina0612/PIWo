
function Slider(props){
    const sliderID = props.name+"_slider";

    return (
        <div>
            <label>{props.name}</label>
            <input type="range" id={sliderID}/>
        </div>
    );
}

export default Slider;