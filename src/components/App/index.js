import React from 'react'
import './App.css'
import Things from '../Things'
import AddThing from '../Form'
import Header from '../Header'
import Footer from '../Footer'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      things: [
        {
          id: 1,
          name: 'monitor',
          type: 'electronics',
          quantity: 2
        },
        {
          id: 2,
          name: 'standing desk',
          type: 'furniture',
          quantity: 1
        }
      ]
    }
    this.handleThing = this.handleThing.bind(this)
  }

  handleThing (thing) {
    const updateThings = this.state.things
    console.log(updateThings)
    updateThings.push({
      id: (this.state.things[this.state.things.length - 1].id + 1),
      name: thing.name,
      type: thing.type,
      quantity: thing.quantity
    })
    this.setState({ things: updateThings })
  }

  render () {
    return (
      <div className='App'>
        <Header things={this.state.things} />
        <main>
          <Things things={this.state.things} />
          <AddThing onNewThing={this.handleThing} />
        </main>
        <Footer trademark='Eye Spy React™' />
      </div>
    )
  }
}

export default App
