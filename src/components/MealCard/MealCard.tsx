import React from 'react';
import s from './MealCard.module.css';

interface MealCardProps {
  image: string;
  name: string;
  desc: string;
  reverse?: boolean;
  showDivider?: boolean; // Новий проп для показу лінії
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
};

const MealCard: React.FC<MealCardProps> = ({
  image,
  name,
  desc,
  reverse,
  showDivider,
}) => {
  return (
    <>
      <div className={`${s.mealCard} ${reverse ? s.reverse : ''}`}>
        <img src={image} alt={name} className={s.image} />
        <div className={s.textWrapper}>
          <h3 className={s.name}>{name}</h3>
          <p className={s.desc}>{truncateText(desc, 350)}</p>
        </div>
      </div>
      {showDivider && <hr className={s.divider} />}
    </>
  );
};

export default MealCard;
