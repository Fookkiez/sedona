// import React from 'react'
import ImageReact from './assets/react.svg'

// type Props = {}

// const App = (props: Props) => {
const App = () => {
  return (
    <div>
      App <img src={ImageReact}></img>
      <div>{import.meta.env.VITE_TITLE}</div>
      <div>{import.meta.env.VITE_URL}</div>
    </div>
  )
}

export default App