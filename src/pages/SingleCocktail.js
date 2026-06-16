import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCoctail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          setCocktail({ name, image, info, category, glass, instructions, ingredients });
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
    getCoctail();
  }, [id]);

  if (loading) return <Loading />;
  if (!cocktail) return <h2 className='section-title'>no cocktail to display</h2>;

  const { name, image, category, info, glass, instructions, ingredients } = cocktail;

  return (
    <section className='section cocktail-section'>
      <div className='drink-nav'>
        <Link to='/' className='btn'>back home</Link>
      </div>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <h2 className='drink-title'>{name}</h2>
          <p>
            <span className='drink-data'>category:</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info:</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass:</span>
            {glass}
          </p>
          <p className='instructions-row'>
            <span className='drink-data'>instructions:</span>
            <span className='instructions-text'>{instructions}</span>
          </p>
          <p>
            <span className='drink-data'>ingredients:</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
