import React, { useEffect, useState } from 'react';
import { TextInputProps } from 'react-native';
import * as S from './styles';

import { MaterialIcons } from '@expo/vector-icons';
import theme from '~/global/theme';

type InputProps = {
  type?: 'email' | 'password';
  withIcon?: boolean;
  iconName?: string;
} & TextInputProps;

export function Input({ 
  type, 
  withIcon = true, 
  placeholder,
  secureTextEntry = false,
  iconName = '', 
}: InputProps) {
  const [icon, setIcon] = useState<string>('');

  useEffect(() => {
    if (iconName !== '') {
      setIcon(iconName);
    } else {
      switch (type) {
        case 'email':
          setIcon('email');
          break;
        case 'password':
          setIcon('lock');
        default:
          break;
      }
    }

  }, []);

  return (
    <S.Container>
      {withIcon && (
        <MaterialIcons 
          name={icon}
          size={24} 
          color={theme.colors.primary_dark} 
        />
      )}
      
      <S.WrapperInput>
        <S.Input 
          secureTextEntry={secureTextEntry}
          placeholder={placeholder} 
          placeholderTextColor={theme.colors.primary_dark}
        />
      </S.WrapperInput>
    </S.Container>
  )
}