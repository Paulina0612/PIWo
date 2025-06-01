
function Slider(props){

    return (
        <div>
            <label>{props.name}</label><br/>
            <label>0</label>
            <input 
                type="range" 
                id="slider" 
                min={0} 
                max={props.max} 
                onChange={(e) => props.onChange && props.onChange(e.target.value)}/>
                
            <label>{props.max}</label>
        </div>
    );
}

export default Slider;