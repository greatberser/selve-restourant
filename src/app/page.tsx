import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import MealList from '../components/MealList/MealList';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MealList limit={3} />
    </>
  );
}
