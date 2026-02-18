import App from './App'
function PProps(props){
    return(
        <div>
            <h2>{props.name}</h2>
            <h2>{props.age}</h2>
            <h2>{props.phone}</h2>
        </div>
    )
}
export default PProps;