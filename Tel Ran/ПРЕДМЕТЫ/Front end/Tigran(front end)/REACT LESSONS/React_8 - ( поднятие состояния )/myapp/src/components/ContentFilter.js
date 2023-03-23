function ContentFilter(props){

    const{ deleteCardById, changeCheckById } = props
 
    return(
        <div>
            <button onClick={deleteCardById}>Remove</button>
            <button onClick={changeCheckById}>Change check</button>
        </div>
    )
}
export default ContentFilter

// 2 задание
    // В компоненте ContentFilter создайте кнопку, которая будет вызывать модальное окно, которая будет
    // ссылаться на id элемента массива. Функция должна изменить сво-во check с true на false (или с false на true)
    // Компонент ContentItem должен получить также проп check, который взависиомсти от булевого типа
    // должен сформировать (в конце div) тег <p></p> с значением 'Просмотрен'. 
    // Если значение пропа check будет false - этот тег появится не должен