import MealList from '@/components/MealList/MealList';
import React from 'react';

const Menu = () => {
  return (
    <>
      <MealList limit={7} />
    </>
  );
};

export default Menu;
