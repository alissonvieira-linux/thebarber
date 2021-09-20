import React from 'react';
import * as S from './styles';

import { Input } from '~/components/Input';
import { Button } from '~/components/Button';
import Barber from '~/assets/barber.svg';

export function SignIn({ navigation }: any) {
  function handleSignin() {
    console.log('Botão pressionado');
  }

  return (
    <S.Container>
      <Barber width="200" height="200" />

      <Input type="email" placeholder="Digite seu e-mail" />

      <S.WrapperInput>
        <Input type="password" secureTextEntry={true} placeholder="********" />
      </S.WrapperInput>

      <S.WrapperInput>
        <Button onPress={handleSignin} label="Entrar" />
      </S.WrapperInput>

      <S.CreateAnAccount onPress={() => navigation.navigate('SignUp')}>
        <S.DontHaveAccount>
          Ainda não possui conta? <S.TextBold>Cadastre-se.</S.TextBold>
        </S.DontHaveAccount>
      </S.CreateAnAccount>
    </S.Container>
  );
}