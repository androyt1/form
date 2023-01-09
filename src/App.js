import React from 'react'
import Header from './components/Header'
import RegForm from './components/RegForm'

const App = () => {
  return (
    <>
    <div className='max-w-[1200px] mx-auto'>
      <Header/>
      <RegForm/>
    </div>
    </>
  )
}

export default App