/**
 * @memberOf Qualifiers
 * @description This namespace contains all the foreground objects used in the SDK
 * @namespace ForegroundObject
 * @example
 * import {ForegroundObject} from '@cloudinary/url-gen/qualifiers/foregroundObject'
 */

const ForegroundObject = {
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

export {ForegroundObject};
export type ForegroundObjectValue = typeof ForegroundObject[keyof typeof ForegroundObject];

/**
 * @summary qualifier
 * @description Foreground object "airplane".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const airplane = (): ForegroundObjectValue => ForegroundObject.AIRPLANE;

/**
 * @summary qualifier
 * @description Foreground object "bus".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const bus = (): ForegroundObjectValue => ForegroundObject.BUS;

/**
 * @summary qualifier
 * @description Foreground object "dining_table".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const diningTable = (): ForegroundObjectValue => ForegroundObject.DINING_TABLE;

/**
 * @summary qualifier
 * @description Foreground object "sheep".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const sheep = (): ForegroundObjectValue => ForegroundObject.SHEEP;

/**
 * @summary qualifier
 * @description Foreground object "bicycle".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const bicycle = (): ForegroundObjectValue => ForegroundObject.BICYCLE;

/**
 * @summary qualifier
 * @description Foreground object "car".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const car = (): ForegroundObjectValue => ForegroundObject.CAR;

/**
 * @summary qualifier
 * @description Foreground object "dog".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const dog = (): ForegroundObjectValue => ForegroundObject.DOG;

/**
 * @summary qualifier
 * @description Foreground object "sofa".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const sofa = (): ForegroundObjectValue => ForegroundObject.SOFA;

/**
 * @summary qualifier
 * @description Foreground object "bird".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const bird = (): ForegroundObjectValue => ForegroundObject.BIRD;

/**
 * @summary qualifier
 * @description Foreground object "cat".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const cat = (): ForegroundObjectValue => ForegroundObject.CAT;

/**
 * @summary qualifier
 * @description Foreground object "horse".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const horse = (): ForegroundObjectValue => ForegroundObject.HORSE;

/**
 * @summary qualifier
 * @description Foreground object "train".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const train = (): ForegroundObjectValue => ForegroundObject.TRAIN;

/**
 * @summary qualifier
 * @description Foreground object "boat".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const boat = (): ForegroundObjectValue => ForegroundObject.BOAT;

/**
 * @summary qualifier
 * @description Foreground object "chair".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const chair = (): ForegroundObjectValue => ForegroundObject.CHAIR;

/**
 * @summary qualifier
 * @description Foreground object "person".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const person = (): ForegroundObjectValue => ForegroundObject.PERSON;

/**
 * @summary qualifier
 * @description Foreground object "tv".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const tv = (): ForegroundObjectValue => ForegroundObject.TV;

/**
 * @summary qualifier
 * @description Foreground object "bottle".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const bottle = (): ForegroundObjectValue => ForegroundObject.BOTTLE;

/**
 * @summary qualifier
 * @description Foreground object "cow".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const cow = (): ForegroundObjectValue => ForegroundObject.COW;

/**
 * @summary qualifier
 * @description Foreground object "potted_plant".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const pottedPlant = (): ForegroundObjectValue => ForegroundObject.POTTED_PLANT;

/**
 * @summary qualifier
 * @description Foreground object "motorbike".
 * @memberOf Qualifiers.ForegroundObject
 * @return {Qualifiers.ForegroundObject}
 */
export const motorbike = (): ForegroundObjectValue => ForegroundObject.MOTORBIKE;
