import React from 'react'
import { useEffect } from 'react';
import { useGlobalContext } from '../context'

const SearchForm = () => {

    const {setSearchTerm}  = useGlobalContext();
    const searchValue = React.useRef("");

    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value)
    }

    useEffect(() => {
      searchValue.current.focus()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input 
              type="text" 
              id='name' 
              placeholder='E.g Henessy'
              ref={searchValue}
              onChange={searchCocktail}
              />
        </div>
      </form>
    </section>
  )
}

export default SearchForm