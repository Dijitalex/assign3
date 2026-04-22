import * as React from 'react'
import * as ReactBootstrap from 'react-bootstrap'

const { Badge, Button, Card } = ReactBootstrap

export default function Square() {
  return <>
  <div className = "board-row">
    <button className="square">1</button>
    <button className="square">2</button>
    <button className="square">3</button>
  </div>
  <div className = "board-row">
    <button className="square">X</button>
    <button className="square">X</button>
    <button className="square">X</button>
  </div>
  <div className = "board-row">
    <button className="square">X</button>
    <button className="square">X</button>
    <button className="square">X</button>
  </div>
  </>;
}