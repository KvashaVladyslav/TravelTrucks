import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite, selectFavorites } from '../../redux/favourites/slice';
import { useNavigate } from 'react-router-dom';
import css from './CatalogListItem.module.css';
import BadgesList from '../BadgesList/BadgesList';
import icons from '../../assets/icons.svg';

export default function CatalogListItem({
  item: {
    id,
    name,
    price,
    rating,
    location,
    description,
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
    gallery,
    reviews,
  },
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector(selectFavorites);

    const handleShowMore = () => {
    window.scrollTo(0, 0);
    navigate(`/catalog/${id}`);
  };

  const isFavorite = favorites.some(truck => truck.id === id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite({ id }));
    } else {
      dispatch(addFavorite({ id, name, price, rating, location, description, gallery, reviews }));
    }
  };

  const trueFeatures = [
    { label: 'Transmission', value: transmission },
    { label: 'Engine', value: engine },
    { label: 'AC', value: AC },
    { label: 'Bathroom', value: bathroom },
    { label: 'Kitchen', value: kitchen },
    { label: 'TV', value: TV },
    { label: 'Radio', value: radio },
    { label: 'Refrigerator', value: refrigerator },
    { label: 'Microwave', value: microwave },
    { label: 'Gas', value: gas },
    { label: 'Water', value: water },
  ];

  const trueFeaturesList = trueFeatures.filter((feature) => feature.value);

  const iconMap = {
    AC: 'icon-wind',
    Bathroom: 'icon-shower',
    Kitchen: 'icon-cup',
    TV: 'icon-tv',
    Radio: 'icon-radio',
    Refrigerator: 'icon-fridge',
    Microwave: 'icon-microwave',
    Gas: 'icon-gas',
    Water: 'icon-water',
    Transmission: 'icon-diagram',
    Engine: 'icon-petrol',
  };

  const thumbImg = gallery && gallery.length > 0 ? gallery[0].thumb : '';

  const toUpperCaseFirstLatter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.listItemBox}>
        {thumbImg && <img className={css.image} src={thumbImg} alt={name} />}
        <div className={css.infoWrapper}>
          <div className={css.namePriceWrapper}>
            <div className={css.namePriceBox}>
              <h2 className={css.nameTitle}>{name}</h2>
              <div className={css.priceBox}>
                <p className={css.priceText}>€{price}.00</p>
                <svg
                  className={`${css.iconHeart} ${isFavorite ? css.filledHeart : ''}`}
                  height={24}
                  width={26}
                  onClick={handleFavoriteClick}
                >
                  <use href={`${icons}#icon-heart`}></use>
                </svg>
              </div>
            </div>
            <div className={css.ratingBox}>
              <div className={css.ratingBoxInfo}>
                <svg className={css.iconStar} height={16} width={16}>
                  <use href={`${icons}#icon-star`}></use>
                </svg>
                <p className={css.textUnderline}>
                  {rating} ({reviews.length} Reviews)
                </p>
              </div>
              <div className={css.ratingBoxInfo}>
                <svg height={16} width={16}>
                  <use href={`${icons}#icon-map`}></use>
                </svg>
                <p className={css.ratingBoxInfoText}>{location}</p>
              </div>
            </div>
          </div>
          <p className={css.descText}>{description}</p>
          <div>
            <BadgesList
              features={trueFeaturesList}
              iconMap={iconMap}
              toUpperCaseFirstLatter={toUpperCaseFirstLatter}
            />
          </div>
          <button className={css.button} onClick={handleShowMore}>
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}
