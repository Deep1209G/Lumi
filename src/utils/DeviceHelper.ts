import {Dimensions, Platform} from 'react-native';

const FOLDABLE_WIDTH_THRESHOLD = 650;

export class DeviceHelper {

  static isFoldableByWidth(width: number): boolean {
    return width >= FOLDABLE_WIDTH_THRESHOLD;
  }

  static isFoldableDevice(): boolean {
    return this.isFoldableByWidth(Dimensions.get('window').width);
  }

  static isMiniDevice(): boolean {
    return Dimensions.get('window').height < 700;
  }

  static width(): number {
    return Dimensions.get('window').width;
  }

  static height(): number {
    return Dimensions.get('window').height;
  }

  static calWidth(size: number, final?: string): number {
    const {width} = Dimensions.get('window');
    const widthInDesign = 375;

    if (this.isFoldableByWidth(width)) {
      if (final === 'ff') {
        return width - 20;
      }
      return (size * width) / (widthInDesign * 2);
    }

    return (size * width) / widthInDesign;
  }

  static calHeight(size: number): number {
    const heightInDesign = 812;
    return (size * Dimensions.get('window').height) / heightInDesign;
  }

  static ios(): boolean {
    return Platform.OS === 'ios';
  }

  static isIos(): boolean {
    return Platform.OS === 'ios';
  }

  static isAndroid(): boolean {
    return Platform.OS === 'android';
  }

  static device(): string {
    return this.ios() ? 'Ios' : 'Android';
  }

  static deviceOS(): string {
    return Platform.OS;
  }

  static isAndroid15OrAbove(): boolean {
    return Platform.OS === 'android' && Platform.Version >= 35;
  }

  /**
   * Returns safe-area bottom inset:
   * - iPhone with home indicator (notch/Dynamic Island): 34
   * - iPhone with home button (older): 0
   * - Android edge-to-edge (API 35+): 24
   * - Android standard: 0
   */
  static bottomInset(): number {
    if (Platform.OS === 'ios') {
      return Dimensions.get('window').height >= 812 ? 34 : 0;
    }
    if (Platform.OS === 'android' && Platform.Version >= 35) {
      return 24;
    }
    return 0;
  }
}
