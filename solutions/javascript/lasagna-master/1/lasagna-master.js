/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function preparationTime(layers, average = 2) {
  return layers.length * average;
}

export function quantities(layers) {
  let obj = {
    noodles: 0,
    sauce: 0
  };
  for (let index = 0; index < layers.length; index++) {
    if(layers[index] === 'noodles') {
      obj.noodles += 50;
    }

    if(layers[index] === 'sauce') {
      obj.sauce += 0.2;
    }
  }
  return obj;
}

export function scaleRecipe(recipe, portions) {
  const factor = portions / 2;
  const scaled = {};
  for (const key in recipe) {
    scaled[key] = recipe[key] * factor;
  }
  return scaled;
}

export function cookingStatus(time) {
  if(time === undefined) {
    return `You forgot to set the timer.`
  }
  if(time === 0) {
    return `Lasagna is done.`
  } else {
    return `Not done, please wait.`
  }
}