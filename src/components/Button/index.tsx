import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

type ButtonProps = {
  label: string;
  onPress: () => void;
} & TouchableOpacityProps;

export function Button({ label, onPress }: ButtonProps) {
  return(
    <S.Container onPress={onPress}>
      <S.ButtonText>{label}</S.ButtonText>
    </S.Container>
  )
}