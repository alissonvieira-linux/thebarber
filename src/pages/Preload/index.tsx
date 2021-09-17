import React, { useEffect } from 'react';
import * as S from './styles';

import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Preload({ navigation }: any) {
  // const navigation = useNavigation();
  const user = false;

  useEffect(() => {
    if (!user) {
      navigation.navigate('Auth');
    } else {
      navigation.navigate('App');
    }
  }, []);

  return (
    <S.Container>
      <ActivityIndicator size="large" color="#fff" />
    </S.Container>
  )
}