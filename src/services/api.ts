import axios from 'axios';

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
}

export const fetchMeals = async (count: number = 5): Promise<Meal[]> => {
  try {
    const requests = Array(count)
      .fill(null)
      .map(() =>
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      );
    const responses = await Promise.all(requests);
    return responses.map((response) => response.data.meals[0]);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to fetch meals: ${error.message}`);
    } else {
      throw new Error('Failed to fetch meals');
    }
  }
};
