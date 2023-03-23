import s from './content.module.css'
function Content({obj}){
    const {title, image, direction, background, text_color, text} = obj
    return(
        <section className={s.section} style={{flexDirection: direction,  
        backgroundColor: background, 
        color: text_color}}>
          <div className={s.textstyle}>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
           <img src = {image} alt = '#'/>
        </section>
    )
}
export default Content




