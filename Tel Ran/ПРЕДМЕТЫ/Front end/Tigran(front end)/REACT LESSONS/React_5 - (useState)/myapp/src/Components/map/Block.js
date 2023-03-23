// import style from './Block.module.css'
function Block(props){
    const {id,title,text} = props
    return(
        <div className = {style.card}>
            <p>{id}</p>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}
export default Block