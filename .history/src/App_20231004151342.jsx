import React from 'react';

import './App.scss';
import PokemonList from './components/PokemonList';

/**
 * The App function returns a JSX element that renders a div with a heading and two components called
 * Primary and Secondary.
 * @returns The App component is returning a JSX element.
 */
function App() {
  return (
    <div className="example">
      <PokemonList />
    </div>
  );
}

export default App;
