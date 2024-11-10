import { createSelector } from 'reselect';

export const selectFilteredTrucks = state => state.filters.filteredTrucks;

export const selectLocations = createSelector(
  state => state.trucks.items,
  items => {
    const locations = items.map(item => item.location);
    return Array.from(new Set(locations));
  }
);

export const selectVehicleEquipment = createSelector(
  state => state.trucks.items,
  items => {
    const allEquipment = items.reduce((acc, truck) => {
      Object.keys(truck).forEach(key => {
        if (
          truck[key] === true &&
          (key === 'AC' ||
            key === 'bathroom' ||
            key === 'kitchen' ||
            key === 'TV' ||
            key === 'radio' ||
            key === 'refrigerator' ||
            key === 'microwave' ||
            key === 'gas' ||
            key === 'water')
        ) {
          acc.add(key);
        }
      });
      return acc;
    }, new Set());

    return Array.from(allEquipment);
  }
);

export const selectVehicleType = createSelector(
  state => state.trucks.items,
  items => {
    const types = items.map(truck => truck.form);
    return [...new Set(types)];
  }
);
