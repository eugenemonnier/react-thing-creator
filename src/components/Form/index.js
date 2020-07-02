import React from 'react'

export default class AddThing extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: null,
      name: null,
      type: null,
      quantity: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    console.log('Typing')
    if (event.target.name === 'name') {
      const newItemName = event.target.value
      this.setState({
        name: newItemName
      })
    } else if (event.target.name === 'type') {
      const newItemType = event.target.value
      this.setState({
        type: newItemType
      })
    } else {
      const newItemQuantity = event.target.value
      this.setState({
        quantity: newItemQuantity
      })
    }
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.onNewThing(this.state)
    document.getElementById('thingForm').reset()
  }

  render () {
    return (
      <form id='thingForm' onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name='name' type='text' onChange={this.handleChange} required />
        </label>
        <label>
          Type:
          <input name='type' type='text' onChange={this.handleChange} required />
        </label>
        <label>
          Quantity:
          <input name='quantity' type='number' onChange={this.handleChange} required />
        </label>
        <input type='submit' />
      </form>
    )
  }
}
