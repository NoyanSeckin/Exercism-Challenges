/// <reference path="./global.d.ts" />

// import { forEach } from "core-js/core/array";

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

export function cookingStatus(remainingTime = -1) {
  if (remainingTime > 0) {
    return "Not done, please wait.";
  } else if (remainingTime === 0) {
    return "Lasagna is done.";
  } else if (remainingTime === -1) {
    return "You forgot to set the timer.";
  }
}

export function preparationTime(layers, avgTime = 2) {
  return layers.length * avgTime;
}

export function quantities(arr) {
  let returnObj = {
    noodles: 0,
    sauce: 0,
  };
  if (arr.length > 0) {
    arr.forEach((el) => {
      if (el === "sauce") {
        returnObj.sauce += 0.2;
      } else if (el === "noodles") {
        returnObj.noodles += 50;
      }
    });
  }

  return returnObj;
}

export function addSecretIngredient(friendsList, myList) {
  myList.splice(myList.length, 0, friendsList[friendsList.length - 1]);
  // myList.push(friendsList[friendsList.length - 1]);
  return undefined;
}

export function scaleRecipe(amountsObj, portions) {
  let copyAmountsObj = { ...amountsObj };
  if (portions === 2) {
    return amountsObj;
  } else {
    let objectKeys = Object.keys(amountsObj);
    objectKeys.forEach((key) => {
      // if (key === "noodles" || key === "sauce") {
      copyAmountsObj[key] = copyAmountsObj[key] * (portions / 2);
      // }
    });
    return copyAmountsObj;
  }
}
