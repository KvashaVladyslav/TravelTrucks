export const selectTrucks = state => state.trucks.items;

export const selectTruckById = (state, id) => {
  return state.trucks.items.find(truck => truck.id === id);
};

export const selectedTruck = state => state.trucks.selectedTruck;
