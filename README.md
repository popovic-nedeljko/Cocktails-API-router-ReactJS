# Web app for browsing cocktails

[Check it out](https://cocktail-application-2022.netlify.app/)

<img src='/src/img/cocktailapp.png' width=500 height=400> <img src='/src/img/cocktailsapp-phone.png' width=250 height=400>

- Data pulled from external API
- Made with ReactJS
- Multiple page app (Used react router)

A cocktail recipe search engine that allows users to search for their favorite drinks and get a list of cocktail recipes that match their search. The purpose of the application is to provide a user-friendly interface for cocktail enthusiasts to find new and exciting drinks to try.

By utilizing the API provided by TheCocktailDB, the application offers a vast library of cocktail recipes, including the ingredients required and the instructions to make them.

The app is built using a component-based structure with state managed by a custom context provider using the useContext hook. Data is fetched asynchronously using the fetch API from TheCocktailDB API and stored in a simplified object structure in state for easy access. React Router handles page navigation and error handling displays a user-friendly message if API requests fail.

## NOTE*** 
node version: 16.15.0

npm version: 8.5.5
