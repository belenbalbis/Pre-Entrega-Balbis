import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button'

function App() {

  const saludar=()=>{
    alert ("Hola")
  }

  return (
    <div>
      <h1>
        Nike
      </h1>
      <p>Tienda en línea</p>
      <Button texto="Tenis"/>
      <Button texto="Deportivos"/>
      <Button texto="Infantil"/>
    </div>
  )
}

export default App
