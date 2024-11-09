import css from './CatalogListItem.module.css'

export default function CatalogListItem({ item: { name, price, rating, location, description, form, length, width, height, tank, consumption, transmission, engine, AC, bathroom, kitchen, TV, radio, refrigerator, microwave, gas, water, gallery, reviews } }) {
    
   
    const thumbImg = gallery && gallery.length > 0 ? gallery[0].thumb : ''; 

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
                                <svg className={css.iconHeart} height={24} width={26}>
                                    <use href='/src/assets/icons.svg#icon-heart'></use>
                                </svg>
                            </div>
                        </div>
                        <div className={css.ratingBox}>
                            <div className={css.ratingBoxInfo}>
                                <svg className={css.iconStar} height={16} width={16}>
                                        <use href='/src/assets/icons.svg#icon-star'></use>
                                </svg>
                                <p className={css.textUnderline}>{rating} ({reviews.length} Reviews)</p>
                            </div>
                            <div className={css.ratingBoxInfo}>
                                <svg height={16} width={16}>
                                    <use href='/src/assets/icons.svg#icon-map'></use>
                                </svg>
                                <p className={css.ratingBoxInfoText}>{location}</p>
                            </div>
                        </div>
                    </div>
                    <p className={css.descText}>{description}</p>
                    <div>  
                    </div>
                    <button className={css.button}>Show more</button>
                </div>
            </div>
        </div>
    );
}
