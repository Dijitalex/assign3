import * as React from 'react'
import * as ReactBootstrap from 'react-bootstrap'

const { Badge, Button, Card } = ReactBootstrap

function Square({value}){
  function handleClick(){
    console.log("Clicked!")
  }
  return(
    <button className="square" onClick={handleClick}></button>
  )
}

export default function Board() {
  return <>
  <div className = "board-row">
    <Square value="1" />
    <Square value="2"/>
    <Square value="3"/>
  </div>
  <div className = "board-row">
    <Square value="3"/>
    <Square value="3"/>
    <Square value="3"/>
  </div>
  <div className = "board-row">
    <Square value="3"/>
    <Square value="3"/>
    <Square value="3"/>
  </div>
  </>;
}