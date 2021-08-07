import React, { useState, useEffect } from 'react';
import Card from './Card'


// 1. init a array; 52 items, 
// 2. 每次取五个，然后把这五个删除
// 3. 最后剩二个

// 使用 tire 去做，但是需要时间，
// 我这种方式最简单，实现起来最容易
/*

 { Herts: 12, Diamonds: 12, Spades: 12, Clubs: 12 }

 {
  'king': [{'A':true}, {'B':false}.....],
  'Diamonds':[12],
  'Herts':[12],
  'Spades':[12]
}
*/

export default function Icc() {

  const suits = ['Herts', 'Diamonds', 'Spades', 'Clubs']

  const CardValue = ['A', '2', '3', '4', '5', '6', '7',
    '8', '9', '10', 'J', 'Q', 'K'];


  useEffect(() => {
    shuffle();
  }, []);

  let res = [];
  for (let i of suits) {
    for (let j of CardValue) {
      res.push([i, j])
    }
  }

  const [fiveCard, setfiveCard] = useState([
    { color: 'Diamonds', value: 'A' },
    { color: 'Herts', value: '2' }
  ]);


  const shuffle = () => {
    let newRes = []
    for (let i of suits) {
      for (let j of CardValue) {
        res.push([i, j]);
      }
    }



    console.log('shuffle');
  }

  const getFive = () => {
    console.log('getFive');
  }


  return (
    <div>
      <button onClick={getFive}>get five</button>
      <button onClick={shuffle}>shuffle</button>
      {fiveCard.map((item) => {
        return <Card color={item.color} value={item.value} />
      })}
    </div>
  )
}
