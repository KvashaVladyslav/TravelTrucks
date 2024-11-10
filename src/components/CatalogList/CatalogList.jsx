import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTrucks } from '../../redux/trucks/operations';
import { selectTrucks } from '../../redux/trucks/selectors';
import CatalogListItem from '../CatalogListItem/CatalogListItem';
import css from './CatalogList.module.css';
import FilterForm from '../FilterForm/FilterForm';
import { selectFilteredTrucks } from '../../redux/filter/selectors';
import { toast } from 'react-hot-toast';

export default function CatalogList() {
  const dispatch = useDispatch();
  const allTrucks = useSelector(selectTrucks);
  const filteredTrucks = useSelector(selectFilteredTrucks) || [];

  const [visibleTrucks, setVisibleTrucks] = useState(4);

  const newItemRef = useRef(null);

  useEffect(() => {
    const fetchTrucks = async () => {
      try {
        await dispatch(getAllTrucks()).unwrap();
        toast.success('Trucks fetched successfully!');
      } catch {
        toast.error('Failed to fetch trucks. Please try again later.');
      }
    };

    fetchTrucks();
  }, [dispatch]);

  const trucksToRender = filteredTrucks.length > 0 ? filteredTrucks : allTrucks;

  const displayedTrucks = trucksToRender.slice(0, visibleTrucks);

  const handleLoadMore = () => {
    setVisibleTrucks(prevCount => prevCount + 4);
  };

  useEffect(() => {
    if (visibleTrucks > 4 && newItemRef.current) {
      newItemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [visibleTrucks]);

  useEffect(() => {
    setVisibleTrucks(4);
  }, [filteredTrucks]);

  return (
    <div className={css.wrapper}>
      <FilterForm />
      <div className={css.listWrapper}>
        <ul className={css.list}>
          {displayedTrucks.length > 0 ? (
            displayedTrucks.map((item, index) => (
              <li
                key={item.id}
                ref={index === visibleTrucks - 4 ? newItemRef : null}
              >
                <CatalogListItem item={item} />
              </li>
            ))
          ) : (
            <p>No trucks found for the selected filters.</p>
          )}
        </ul>

        {displayedTrucks.length < trucksToRender.length && (
          <button className={css.loadMore} onClick={handleLoadMore}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
}
