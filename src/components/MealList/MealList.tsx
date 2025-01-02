'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { fetchMeals } from '../../services/api';
import MealCard from '../MealCard/MealCard';
import s from './MealList.module.css';

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
}

interface MealListProps {
  limit: number;
}

const MealList: React.FC<MealListProps> = ({ limit }) => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [filteredMeals, setFilteredMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const loadMeals = async () => {
      try {
        setLoading(true);
        const mealsData = await fetchMeals(limit);
        setMeals(mealsData);
        setFilteredMeals(mealsData);
      } catch (err) {
        console.error(err);
        setError('Failed to load meals');
      } finally {
        setLoading(false);
      }
    };

    loadMeals();
  }, [limit]);

  useEffect(() => {
    setFilteredMeals(
      meals.filter((meal) =>
        meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, meals]);

  const handleSearch = () => {
    const filtered = meals.filter((meal) =>
      meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMeals(filtered);
  };

  const handleNavigate = () => {
    router.push('/menu');
  };

  if (loading) return <div className={s.loader}>Loading...</div>;
  if (error) return <div className={s.error}>{error}</div>;

  return (
    <section>
      <div
        className={`${s.container} ${pathname === '/menu' ? s.menuPageContainer : ''}`}
      >
        <h2>Menu</h2>
        {pathname === '/menu' && (
          <div className={s.searchContainer}>
            <input
              type="text"
              placeholder="Search for meals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={s.searchInput}
            />
            <button className={s.searchButton} onClick={handleSearch}>
              Search
            </button>
          </div>
        )}
        <div className={s.mealList}>
          {filteredMeals.length > 0 ? (
            filteredMeals.map((meal, index) => (
              <div key={meal.idMeal}>
                <MealCard
                  name={meal.strMeal}
                  image={meal.strMealThumb}
                  desc={meal.strInstructions}
                  reverse={index % 2 !== 0}
                />
                {index !== filteredMeals.length - 1 && (
                  <div className={s.divider}></div>
                )}
              </div>
            ))
          ) : (
            <div>No meals found</div>
          )}
        </div>
        {pathname === '/' && (
          <button onClick={handleNavigate} className={s.navigateButton}>
            More
          </button>
        )}
      </div>
    </section>
  );
};

export default MealList;
