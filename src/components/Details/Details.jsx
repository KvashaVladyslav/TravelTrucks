import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTruckById } from '../../redux/trucks/operations';
import { selectedTruck } from '../../redux/trucks/selectors';
import css from './Details.module.css';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews';
import icons from '../../assets/icons.svg';
import SubmitForm from '../SubmitForm/SubmitForm';
import { toast } from 'react-hot-toast';

export default function Details() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const truck = useSelector(selectedTruck);
    const loading = useSelector(state => state.trucks.loading);

    const [activeTab, setActiveTab] = useState('features');

    useEffect(() => {
    if (!truck || truck.id !== id) {
      dispatch(getTruckById(id))
        .unwrap()
        .then(() => {
          toast.success('Truck data loaded successfully!');
        })
        .catch((error) => {
          toast.error(`Failed to load truck data: ${error.message}`);
        });
    }
  }, [dispatch, id, truck]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!truck) {
        return <div>Truck not found</div>;
    }

    const {
        name,
        price,
        rating,
        location,
        description,
        gallery,
        reviews,
    } = truck;

    return (
        <div>
            <div className={css.itemDetailsBox}>
                <div className={css.namePriceWrapper}>
                    <h2 className={css.nameTitle}>{name}</h2>
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

                    <div className={css.priceBox}>
                        <p className={css.priceText}>€{price}.00</p>
                    </div>
                </div>

                <div className={css.gallery}>
                    {gallery.map((photo, index) => (
                        <div key={index} className={css.galleryItem}>
                            <img
                                src={photo.thumb}
                                alt={`photo-${index}`}
                                className={css.galleryImage}
                            />
                        </div>
                    ))}
                </div>

                <p className={css.description}>{description}</p>
            </div>

            <div className={css.featuresRevievsBox}>
                <button 
                    onClick={() => setActiveTab('features')} 
                    className={`${css.tabButton} ${activeTab === 'features' ? css.active : ''}`}
                >
                    Features
                </button>
                <button 
                    onClick={() => setActiveTab('reviews')} 
                    className={`${css.tabButton} ${activeTab === 'reviews' ? css.active : ''}`}
                >
                    Reviews
                </button>
            </div>

            <div className={css.featuresFormBox}>
                {activeTab === 'features' && <Features truck={truck} />}
                {activeTab === 'reviews' && <Reviews reviews={reviews} />}
                <SubmitForm/>
            </div>
        </div>
    );
}
