
export const filterItem = filters => (item) => {
  for (const filter of Object.values(filters)) {
    if (filter.value) {
      if (!filter.func(item)) {
        return false;
      }
    }
  }
  return true;
};
