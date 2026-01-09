import {BaseSource} from "../BaseSource.js";

/**
 * @memberOf Qualifiers.Source
 * @extends {Qualifiers.Source.AudioSource}
 * @description Defines how to manipulate a Subtitles layer
 */
class AudioSource extends BaseSource {
  private _publicId: string;

  constructor(publicId: string) {
    super();
    this._publicId = publicId;
  }

  /**
   * @description
   * Returns the opening string of the layer,
   * This method is used internally within {@link SDK.LayerAction|LayerAction}
   * @returns {string}
   */
  getOpenSourceString(layerType: 'u' | 'l'): string {
    const encodedPublicID = this.encodeAssetPublicID(this._publicId);

    return `${layerType}_audio:${encodedPublicID}`;
  }
}

export {AudioSource};
