import React from 'react'

const TestComponent = (props) => {
  return (
    <div>
      <h5>compte avec variable let : {props.points}</h5>
      <button onClick={props.functionClick}>Click me</button>
    </div>
  )
}

export default TestComponent