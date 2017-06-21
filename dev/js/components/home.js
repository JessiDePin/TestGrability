import React from 'react'
import {connect} from 'react-redux'
import {getCharacters} from '../actions/index.js'

const HomeContainer = ({marvel}) => {
  const elements = marvel.map((object, index) => (
    <div key={index}>
      {
        object.map((value, property) => (
          <div>
            <h1>{property}</h1>
            <p>{value}</p>
          </div>
        ))
      }
    </div>
  ))
  return (
    <section className='home'>
      <h1>Encuentre los mejore comics a los mejores precios</h1>
      {elements}
    </section>
  )
}

const states = (state) => ({
  marvel: state.marvel
})

const actions = (dispatch) => ({
  characters: dispatch(getCharacters())
})

const Home = connect(
  states, 
  actions
)(HomeContainer)

export default Home
