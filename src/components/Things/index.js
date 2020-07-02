import React from 'react'

function ListThing (props) {
  return (
    <>
      <li>{props.what.name.toUpperCase()}</li>
      <span>Type: {props.what.type}</span><br />
      <span>Quantity: {props.what.quantity}</span><br />
      <br />
    </>
  )
}

export default function Things (props) {
  return (
    <>
      <h1>The things in my room</h1>
      <ul>
        {props.things.map(item => <ListThing what={item} key={item.id} />)}
      </ul>
    </>
  )
}
