function selectRandomly(arr) {
  const result = [];
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * 4);
    result.push(arr[randomIndex]);
  }
  return result;
}
const originalArray = [1, 2, 3, 4];
const newArray = selectRandomly(originalArray);
console.log(newArray);