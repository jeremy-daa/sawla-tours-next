const pickRandom = <T>(arr: T[], numElements: number) => {
  const shuffled = arr.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, numElements);
};

export default pickRandom;
