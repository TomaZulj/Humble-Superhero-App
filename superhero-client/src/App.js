import React from 'react';
import SuperheroForm from './SuperheroForm';
import SuperheroList from './SuperheroList';

const App = () => {
  const [update, setUpdate] = React.useState(false);

  const handleAdd = () => {
    setUpdate(!update);
  };

  return (
    <div>
      <h1>Superhero Manager</h1>
      <SuperheroForm onAdd={handleAdd} />
      <SuperheroList key={update} />
    </div>
  );
};

export default App;
