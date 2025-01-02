// services/api.ts
import axios from 'axios';

export const fetchMeals = async (count: number = 5) => {
  try {
    const requests = Array(count)
      .fill(null)
      .map(() =>
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      );
    const responses = await Promise.all(requests);
    return responses.map((response) => response.data.meals[0]);
  } catch (error) {
    throw new Error('Failed to fetch meals');
  }
};
