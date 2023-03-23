import style from "./content.module.css"
function Content(props){
    const {color, discount_price, price} = props;
    const sales = Math.round(Math.abs(100*(( discount_price / price) -1)))

    return(
        <div className={style.item}>
            <div className = {style.image}
            style={{backgroundColor: color}}>картинка</div>
            <p>Цена товара без скидки: {price}</p>
            <p>Скидка в рублях: {price-discount_price}</p>
            <p>Скидка товара: {`${sales}`} %</p>
           
        </div>
    )
}
export default Content