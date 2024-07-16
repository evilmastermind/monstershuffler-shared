///////////////////////////////////////////////////
// DEBOUNCE AND THROTTLE FUNCTIONS
///////////////////////////////////////////////////

/** Handles multiple calls to the same function: only one is called after X seconds */
export function debounce(cb: unknown, delay = 1000): unknown {
  let timeout: NodeJS.Timeout;
  return (...args: string[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      // @ts-expect-error - this is a function
      cb(...args);
    }, delay);
  };
}

/** Handles multiple calls to the same function: one is called immmediately and others are called after X seconds */
export function throttle<T extends unknown[]>(
  cb: (...args: T) => void,
  delay = 1000
) {
  let shouldWait = false;
  let waitingArgs: T | null;
  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args: T) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;

    setTimeout(timeoutFunc, delay);
  };
}

///////////////////////////////////////////////////
// RANDOM FUNCTIONS
///////////////////////////////////////////////////

export function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


export function randomDecimal(
  min: number,
  max: number,
  distribution?: 'beginning' | 'middle' | 'end'
): number {
  let randomValue = Math.random();

  switch (distribution) {
  case 'beginning':
    randomValue = Math.sqrt(randomValue);
    break;
  case 'middle':
    randomValue = Math.random() * Math.random();
    break;
  case 'end':
    randomValue = 1 - Math.sqrt(1 - randomValue);
    break;
  default: // This covers the undefined case where we just want a uniform distribution
    break;
  }
  return randomValue * (max - min) + min;
}

///////////////////////////////////////////////////
// ROUNDING FUNCTIONS
///////////////////////////////////////////////////

/**
 * Rounds a number to 2 decimal places.
 */
export function round2Decimals(value: number): number {
  return Math.round(value * 100) / 100;
}
/**
 * Rounds a number to n decimal places.
 */
export function roundNDecimals(value: number, n: number): number {
  return Math.round(value * Math.pow(10, n)) / Math.pow(10, n);
}

///////////////////////////////////////////////////
// STRING FUNCTIONS
///////////////////////////////////////////////////

export function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

///////////////////////////////////////////////////
// ARRAY FUNCTIONS
///////////////////////////////////////////////////

/**
 * Toggles an item in an array. If the item is not present, it will be added. If it is present, it will be removed.
 */
export function toggle<T>(array: T[], item: T): void {
  const index = array.indexOf(item);
  if (index === -1) {
    array.push(item); // Add the item if it's not present
  } else {
    array.splice(index, 1); // Remove the item if it's already in the array
  }
}

/**
 * Removes an item from an array.
 */
export function removeItem<T>(anArray: Array<T>, anItem: T) {
  const index = anArray.indexOf(anItem);
  if (index > -1) {
    anArray.splice(index, 1);
  }
  return anArray;
}
/**
 * Adds an item to an array if it is not already present.
 */
export function addUniqueItem<T>(anArray: Array<T>, anItem: T) {
  const index = anArray.indexOf(anItem);
  if (index === -1) {
    anArray.push(anItem);
  }
  return anArray;
}

///////////////////////////////////////////////////
// OBJECT FUNCTIONS
///////////////////////////////////////////////////

export function hasDefined(object: any, key: string): boolean {
  return (
    Object.hasOwn(object, key) &&
    object[key] !== undefined &&
    object[key] !== null &&
    object[key] !== ''
  );
}
export function createKeyIfUndefined(object: any, key: string): void {
  if (!Object.hasOwn(object, key)) {
    object[key] = {};
  }
}

export function deleteKeyIfEmpty(object: any, key: string): void {
  if (
    Object.hasOwn(object, key) &&
    (object[key] === undefined || object[key] === null)
  ) {
    delete object[key];
  }
}
