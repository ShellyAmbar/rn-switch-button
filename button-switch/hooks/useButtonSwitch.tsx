import {Animated} from 'react-native';
import {useState} from 'react';

const useButtonSwitch = (deafultSelectedIndex: number) => {
  const [active, setActive] = useState(deafultSelectedIndex);
  const [xTabOne, setXTabOne] = useState(0);
  const [xTabTwo, setXTabTwo] = useState(0);
  const [translateX, setTranslateX] = useState(new Animated.Value(0));

  return {
    active,
    setActive,
    xTabOne,
    setXTabOne,
    xTabTwo,
    setXTabTwo,
    translateX,
    setTranslateX,
  };
};

export default useButtonSwitch;

