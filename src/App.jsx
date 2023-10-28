import { useState } from 'react';
import { AddCategory, GiftGrid } from './components';

const App = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = newCategory => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map(category => (
        <GiftGrid key={category} category={category} />
      ))}
    </>
  );
};

export default App;
