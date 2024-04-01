import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Detailpage, Home, Popularmovies } from './components'

const App = () => {

  return (
    <>
    <div className="bg-Dark">
    <Routes >
      <Route index element={ <Home/>}/>
      <Route path='/PopularMovies' element={ <Popularmovies/>}/>
      <Route path='/movies/:id' element={ <Detailpage/>}/>
    </Routes>
    </div>
   
    </>
  )
}

export default App