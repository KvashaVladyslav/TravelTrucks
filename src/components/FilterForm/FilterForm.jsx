import { useDispatch, useSelector } from 'react-redux';
import { getAllFiltredTrucks } from '../../redux/filter/operations';
import { selectLocations, selectVehicleEquipment, selectVehicleType } from '../../redux/filter/selectors';
import { Formik, Form, Field } from 'formik';
import Select from 'react-select';
import css from './FilterForm.module.css';
import icons from '../../assets/icons.svg'

const iconMap = {
    Location: 'icon-map',
    AC: 'icon-wind',
    bathroom: 'icon-shower',
    kitchen: 'icon-cup',
    TV: 'icon-tv',
    radio: 'icon-radio',
    refrigerator: 'icon-fridge',
    microwave: 'icon-microwave',
    gas: 'icon-gas',
    water: 'icon-water',
    alcove: 'icon-nine-square', 
    fullyIntegrated: 'icon-four-square',
    panelTruck: 'icon-three-square',
};

const capitalizeFirstLetter = (string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const formatVehicleType = (type) => {
  if (!type) return '';
  return type
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/^./, (str) => str.toUpperCase());
};

const FilterForm = () => {
  const dispatch = useDispatch();
  const locations = useSelector(selectLocations);
  const vehicleEquipment = useSelector(selectVehicleEquipment);
  const vehicleTypes = useSelector(selectVehicleType);

  const initialValues = {
    location: null,
    vehicleType: '',
    vehicleEquipment: [],
  };


  const resetFilters = (resetForm) => {
    resetForm();
  };

  const handleSubmit = (values, { resetForm }) => {
    const filters = {
      location: values.location ? values.location.value : '',
      vehicleType: values.vehicleType,
      vehicleEquipment: values.vehicleEquipment,
    };

    dispatch(getAllFiltredTrucks(filters)).then(() => {
    resetFilters(resetForm);
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ setFieldValue, values}) => (
        <Form className={css.wrapper}>
            <div className={css.inputContainer}>
                  <h3 className={css.titleLocation}>Location</h3>
                  <div className={css.selectContainer}>
                        <svg className={css.iconMap} height={16} width={16}>
                          <use href={`${icons}#icon-map`}></use>
                        </svg>
                        <Field name="location">{({ field }) => (
                            <Select
                              {...field}
                              name="location"
                              value={values.location}
                              onChange={(selectedOption) => {
                                setFieldValue('location', selectedOption);
                              }}
                              options={locations.map((location) => ({
                                value: location,
                                label: capitalizeFirstLetter(location),
                              }))}
                              placeholder="Select Location"
                              components={{ DropdownIndicator: null }}
                              className={css.widthForInput}
                              styles={{
                                control: (provided) => ({
                                  ...provided,
                                  paddingLeft: '36px',
                                })
                              }}
                            />
                            )}
                        </Field>
                </div>
            </div>
            <div className={css.filtersBox}>
                <p>Filters</p>
                    <div className={css.filterWrapper}>
                        <h3 className={css.title}>Vehicle Equipment</h3>
                        <span className={css.line}></span>
                        <div className={css.buttonGroup}>
                          {vehicleEquipment.map((equipment, index) => (
                            <button
                              key={index}
                              type="button"
                              className={`${css.button} ${values.vehicleEquipment.includes(equipment) ? css.active : ''}`}
                              onClick={() => {
                                const newEquipment = values.vehicleEquipment.includes(equipment)
                                  ? values.vehicleEquipment.filter(item => item !== equipment)
                                  : [...values.vehicleEquipment, equipment];
                                setFieldValue('vehicleEquipment', newEquipment);
                              }}
                            >
                              <svg className={`${css.icon} ${css[equipment]}`} height={32} width={32}>
                                <use href={`${icons}#${iconMap[equipment] || ''}`}></use>
                              </svg>
                              {capitalizeFirstLetter(equipment)}
                            </button>
                          ))}
                        </div> 
                    </div>
                    <div className={css.filterWrapper}>
                        <h3 className={css.title}>Vehicle Type</h3>
                        <span className={css.line}></span>
                        <div className={css.buttonGroup}>
                          {vehicleTypes.map((type, index) => (
                            <button
                              key={index}
                              type="button"
                              className={`${css.button} ${values.vehicleType === type ? css.active : ''}`}
                              onClick={() => {
                                const newVehicleType = values.vehicleType === type ? '' : type;
                                setFieldValue('vehicleType', newVehicleType);
                              }}
                            >
                              <svg className={css.icon} height={32} width={32}>
                                <use href={`${icons}#${iconMap[type] || ''}`}></use>
                              </svg>
                              {formatVehicleType(type)}
                            </button>
                          ))}
                    </div>
                </div>
            </div>
                  
            <button type="submit" className={css.submitButton}>Search</button>
        </Form>
      )}
    </Formik>
  );
};

export default FilterForm;
