import React, { useState } from 'react'
import AddCategory from '../components/AddCategory'
import GifGrid from './GifGrid'

const GifApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball'])

  console.log(categories)

  return (
    <>
      <h2>GifApp</h2>
      <AddCategory setCategories={setCategories} />
      <br />

      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  )
}

export default GifApp
