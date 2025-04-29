/**
 * Reusable sort function for plain arrays and arrays of objects
 *
 * @param {Array} array - The input array to sort
 * @param {Object} options - Optional sorting options
 * @param {string} [options.order='asc'] - Sort order: 'asc' or 'desc'
 * @param {string} [options.key] - Property name to sort by (for objects)
 * @returns {Array} - The sorted array
 */
const sortArray = (data, options = {}) => {
  const { order = "asc", key } = options;
  const isArray = Array.isArray(data);
  const isArrayOfObjects =
    data.length > 0 && typeof data[0] === "object" && !Array.isArray(data[0]);

  if (!isArray) {
    console.log("Input must be an array");
    return;
  }

  if (isArrayOfObjects && !key) {
    console.log("Missing 'key' for sorting array of objects");
    return;
  }

  const sorted = [...data].sort((a, b) => {
    const valA = key ? a[key] : a;
    const valB = key ? b[key] : b;

    if (valA < valB) return order === "asc" ? -1 : 1;
    if (valA > valB) return order === "asc" ? 1 : -1;
    return 0;
  });

  return sorted;
};

export { sortArray };
