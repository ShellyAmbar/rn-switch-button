import {TextStyle, ViewStyle} from 'react-native';

type ButtonSwitchProps = {
  leftText?: string;
  rightText?: string;
  onClickLeft?: () => void;
  onClickRight?: () => void;
  outerViewStyle?: ViewStyle;
  innerViewStyle?: ViewStyle;
  buttonsStyle?: ViewStyle;
  activeButtonStyle?: ViewStyle;

  activeColor?: string;
  unActiveTextColor?: string;
  unActiveBackColor?: string;
  horizontalOffset?: number;
  textSelectedStyle?: TextStyle;
  textUnSelectedStyle?: TextStyle;
  deafultSelectedIndex: number;
};

export default ButtonSwitchProps;

