import React, {useEffect} from "react";
import {
  TouchableOpacity,
  Animated,
  Dimensions,
  Text,
  View,
  I18nManager,
} from "react-native";
import ButtonSwitchProps from "./interfaces";
import useButtonSwitch from "./hooks/useButtonSwitch";
const {width} = Dimensions.get("window");
import createStyle from "./button-switch.styles";

const ButtonSwitch = ({
  leftText,
  rightText,
  onClickLeft,
  onClickRight,
  outerViewStyle,
  innerViewStyle,
  buttonsStyle,
  activeButtonStyle,

  activeColor = "#FFFF",
  unActiveTextColor = "#FFFF",
  unActiveBackColor = "#F2F1F6",
  horizontalOffset = 5,
  textSelectedStyle,
  textUnSelectedStyle,
  deafultSelectedIndex = 0,

  ...props
}: ButtonSwitchProps) => {
  const {
    active,
    setActive,
    xTabOne,
    setXTabOne,
    xTabTwo,
    setXTabTwo,
    translateX,
  } = useButtonSwitch(deafultSelectedIndex);
  const Styles = createStyle(translateX);

  const handleSlide = (type) => {
    Animated.spring(translateX, {
      toValue: type,

      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    console.log("active change", active, xTabTwo, horizontalOffset);

    if (active === 0) {
      const offset = I18nManager.isRTL ? -horizontalOffset : horizontalOffset;
      handleSlide(xTabOne + offset);
      onClickLeft && onClickLeft();
    } else {
      const offset = I18nManager.isRTL ? horizontalOffset : -horizontalOffset;
      handleSlide(xTabTwo + offset);
      onClickRight && onClickRight();
    }
  }, [active, xTabOne, xTabTwo]);

  return (
    <View
      style={[{width: width}, Styles.buttonSwitchOuter, {...outerViewStyle}]}
    >
      <View style={[Styles.buttonSwitchInner, {...innerViewStyle}]}>
        <View style={Styles.row}>
          <Animated.View
            style={[Styles.buttonSwitchActiveButton, {...activeButtonStyle}]}
          />
          <TouchableOpacity
            style={[Styles.buttonSwitchButton, {...buttonsStyle}]}
            onLayout={(event) => setXTabOne(0)}
            onPress={() => setActive(0)}
          >
            <Text
              style={{
                ...(active === 1
                  ? {...Styles.switchTitleUnSelected, ...textUnSelectedStyle}
                  : {...Styles.switchTitleSelected, ...textSelectedStyle}),

                color: active === 0 ? activeColor : unActiveTextColor,
              }}
            >
              {leftText}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.buttonSwitchButton, {...buttonsStyle}]}
            onLayout={(event) => {
              xTabTwo === 0
                ? setXTabTwo(
                    I18nManager.isRTL
                      ? -event.nativeEvent.layout.width
                      : event.nativeEvent.layout.width
                  )
                : null;
            }}
            onPress={() => setActive(1)}
          >
            <Text
              style={{
                ...(active === 1
                  ? {...Styles.switchTitleSelected, ...textSelectedStyle}
                  : {...Styles.switchTitleUnSelected, ...textUnSelectedStyle}),

                color: active === 1 ? activeColor : unActiveTextColor,
              }}
            >
              {rightText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ButtonSwitch;
