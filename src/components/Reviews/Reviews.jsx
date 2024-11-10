import css from './Reviews.module.css';
import icons from '../../assets/icons.svg'

export default function Reviews({ reviews }) {
  return (
    <ul className={css.list}>
      {reviews.map((review, index) => (
        <li className={css.listItem} key={index}>
          <div className={css.nameRatingBox}>
            <p className={css.avatar}>{review.reviewer_name.charAt(0)}</p>
            <div>
              <p className={css.name}>{review.reviewer_name}</p>
              <div className={css.ratingStars}>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={i < review.reviewer_rating ? css.starYellow : css.starGray}
                    height={16}
                    width={16}
                  >
                    <use href={`${icons}#icon-star`}></use>
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className={css.comment}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
}
