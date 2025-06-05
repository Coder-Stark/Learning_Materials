import React, { useContext } from 'react'
import { data, data1 } from '../App'

function Child3() {
  const name = useContext(data);
  const gender = useContext(data1);
  return (
    <>
        <div>Component C or 3 displaying name : {name} & gender : {gender}</div>
    </>
  )
}

export default Child3