import React from 'react';
import { useGlobalContext } from '../context';
import heroImg from '../img/kokteli.webp';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus();
    return () => setSearchTerm('a');
  }, []);

  const searchCocktail = function () {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = function (e) {
    e.preventDefault();
  };

  return (
    <section className='section search'>
      <img src={heroImg} alt='' className='hero-bg-img' aria-hidden='true' />
      <div className='hero-content'>
        <span className='hero-eyebrow'>CocktailDB</span>
        <div className='ornament'><span></span></div>
        <div className='search-hero-text'>
          <h2>
            Discover Your Perfect{' '}
            <em>Cocktail</em>
          </h2>
        </div>
        <div className='ornament'><span></span></div>
        <p className='hero-subtitle'>
          Explore thousands of handcrafted recipes from around the world
        </p>
        <form className='search-form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='name'>Search Your Favorite Cocktail</label>
            <div className='input-wrapper'>
              <svg
                className='search-icon'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
              <input
                type='text'
                id='name'
                ref={searchValue}
                onChange={searchCocktail}
                placeholder='e.g. Margarita, Mojito, Daiquiri…'
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
