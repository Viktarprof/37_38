// 1. Создать компонент square - квадрат зеленого цвета с размерами 300х300 px
// 2. При клике на кнопку менять у квадрата цвет на синий, а размер на 400х400 px

import React, { useState } from 'react'

export default function Square() {

  // const square_styles = {
  //   background: 'green',
  //   size: 300
  // }

  let [ squareStyles, setSquareStyles ] = useState(false);

  // console.log(squareStyles);

  // const styles = {
  //   backgroundColor: squareStyles.background,
  //   width: squareStyles.size + 'px',
  //   height: squareStyles.size + 'px'
  // }

  // const change_styles = () => {
  //   setSquareStyles(
  //     squareStyles = {
  //       background: 'blue',
  //       size: 400
  //     }
  //   );
  // }

   const styles = {
    backgroundColor: squareStyles ? 'blue' : 'green',
    width: squareStyles ? '400px' : '300px', 
    height: squareStyles ? '400px' : '300px'
  }

  const change_styles = () => {
    setSquareStyles(squareStyles = !squareStyles);
  }

  return (
    <div>
      <div style={styles}></div>
      <button onClick={change_styles}>Change square</button>
    </div>
  )
}