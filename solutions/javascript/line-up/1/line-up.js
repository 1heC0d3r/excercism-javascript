//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  const lastTwo = number % 100;
  const lastOne = number % 10;

  if (lastOne === 1 && lastTwo !== 11)
    return `${name}, you are the ${number}st customer we serve today. Thank you!`;
  if (lastOne === 2 && lastTwo !== 12)
    return `${name}, you are the ${number}nd customer we serve today. Thank you!`;
  if (lastOne === 3 && lastTwo !== 13)
    return `${name}, you are the ${number}rd customer we serve today. Thank you!`;
  return `${name}, you are the ${number}th customer we serve today. Thank you!`;
};
