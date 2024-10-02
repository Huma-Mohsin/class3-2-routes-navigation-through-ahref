interface propsStructure{
    text:string,
    style?:React.CSSProperties;
}
function Content(props:propsStructure){
    return(
        <div>
            <h1 style={props.style}>{props.text}</h1>
        </div>
    )
}
export default Content