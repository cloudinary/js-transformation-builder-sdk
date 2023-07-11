/**
 * @memberOf Qualifiers
 * @description This namespace contains all the foreground objects used in the SDK
 * @namespace ForegroundObject
 * @example
 * import {ForegroundObject} from '@cloudinary/url-gen/qualifiers/foregroundObject'
 */

const FOREGROUND_OBJECT = {
  AIRPLANE: 'airplane',
  BUS: 'bus',
  DINING_TABLE: 'dining_table',
  SHEEP: 'sheep',
  BICYCLE: 'bicycle',
  CAR: 'car',
  DOG: 'dog',
  SOFA: 'sofa',
  BIRD: 'bird',
  CAT: 'cat',
  HORSE: 'horse',
  TRAIN: 'train',
  BOAT: 'boat',
  CHAIR: 'chair',
  PERSON: 'person',
  TV: 'tv',
  BOTTLE: 'bottle',
  COW: 'cow',
  POTTED_PLANT: 'potted_plant',
  MOTORBIKE: 'motorbike',
} as const;

export type ForegroundObjectValue = typeof FOREGROUND_OBJECT[keyof typeof FOREGROUND_OBJECT];

/**
 * @summary qualifier
 * @description Foreground object "airplane".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const airplane = (): ForegroundObjectValue => FOREGROUND_OBJECT.AIRPLANE;

/**
 * @summary qualifier
 * @description Foreground object "bus".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const bus = (): ForegroundObjectValue => FOREGROUND_OBJECT.BUS;

/**
 * @summary qualifier
 * @description Foreground object "dining_table".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const diningTable = (): ForegroundObjectValue => FOREGROUND_OBJECT.DINING_TABLE;

/**
 * @summary qualifier
 * @description Foreground object "sheep".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const sheep = (): ForegroundObjectValue => FOREGROUND_OBJECT.SHEEP;

/**
 * @summary qualifier
 * @description Foreground object "bicycle".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const bicycle = (): ForegroundObjectValue => FOREGROUND_OBJECT.BICYCLE;

/**
 * @summary qualifier
 * @description Foreground object "car".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const car = (): ForegroundObjectValue => FOREGROUND_OBJECT.CAR;

/**
 * @summary qualifier
 * @description Foreground object "dog".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const dog = (): ForegroundObjectValue => FOREGROUND_OBJECT.DOG;

/**
 * @summary qualifier
 * @description Foreground object "sofa".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const sofa = (): ForegroundObjectValue => FOREGROUND_OBJECT.SOFA;

/**
 * @summary qualifier
 * @description Foreground object "bird".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const bird = (): ForegroundObjectValue => FOREGROUND_OBJECT.BIRD;

/**
 * @summary qualifier
 * @description Foreground object "cat".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const cat = (): ForegroundObjectValue => FOREGROUND_OBJECT.CAT;

/**
 * @summary qualifier
 * @description Foreground object "horse".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const horse = (): ForegroundObjectValue => FOREGROUND_OBJECT.HORSE;

/**
 * @summary qualifier
 * @description Foreground object "train".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const train = (): ForegroundObjectValue => FOREGROUND_OBJECT.TRAIN;

/**
 * @summary qualifier
 * @description Foreground object "boat".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const boat = (): ForegroundObjectValue => FOREGROUND_OBJECT.BOAT;

/**
 * @summary qualifier
 * @description Foreground object "chair".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const chair = (): ForegroundObjectValue => FOREGROUND_OBJECT.CHAIR;

/**
 * @summary qualifier
 * @description Foreground object "person".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const person = (): ForegroundObjectValue => FOREGROUND_OBJECT.PERSON;

/**
 * @summary qualifier
 * @description Foreground object "tv".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const tv = (): ForegroundObjectValue => FOREGROUND_OBJECT.TV;

/**
 * @summary qualifier
 * @description Foreground object "bottle".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const bottle = (): ForegroundObjectValue => FOREGROUND_OBJECT.BOTTLE;

/**
 * @summary qualifier
 * @description Foreground object "cow".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const cow = (): ForegroundObjectValue => FOREGROUND_OBJECT.COW;

/**
 * @summary qualifier
 * @description Foreground object "potted_plant".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const pottedPlant = (): ForegroundObjectValue => FOREGROUND_OBJECT.POTTED_PLANT;

/**
 * @summary qualifier
 * @description Foreground object "motorbike".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const motorbike = (): ForegroundObjectValue => FOREGROUND_OBJECT.MOTORBIKE;

export const ForegroundObject = {
  ...FOREGROUND_OBJECT,
  airplane,
  bus,
  diningTable,
  sheep,
  bicycle,
  car,
  dog,
  sofa,
  bird,
  cat,
  horse,
  train,
  boat,
  chair,
  person,
  tv,
  bottle,
  cow,
  pottedPlant,
  motorbike
};
