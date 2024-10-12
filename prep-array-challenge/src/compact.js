function compact(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (
      array[i] !== undefined &&
      array[i] !== null &&
      array[i] !== '' &&
      array[i] !== -0 &&
      array[i] !== false &&
      !Number.isNaN(array[i])
    ) {
      result.push(array[i]);
    }
  }

  return result;
}
