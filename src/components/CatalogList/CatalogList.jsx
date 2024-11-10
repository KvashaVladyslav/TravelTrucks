import { useEffect } from 'react';
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

  return (
    <div className={css.wrapper}>
      <FilterForm />
      <ul className={css.list}>
        {trucksToRender.length > 0 ? (
          trucksToRender.map((item) => (
            <li key={item.id}>
              <CatalogListItem item={item} />
            </li>
          ))
        ) : (
          <p>No trucks found for the selected filters.</p>
        )}
      </ul>
    </div>
  );
}
