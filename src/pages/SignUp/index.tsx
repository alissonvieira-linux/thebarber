import React from 'react';
import * as S from './styles';

import { Input } from '~/components/Input';
import { Button } from '~/components/Button';
import Barber from '~/assets/barber.svg';

export function SignUp({ navigation }: any) {
  function handleSignup() {
    console.log('Botão pressionado');
  }

  return (
    <S.Container>
      <Barber width="200" height="200" />

      <S.Warning>
        Preencha todos os campos para criar sua conta.
      </S.Warning>

      <Input placeholder="Digite seu nome" iconName="person" />

      <S.WrapperInput>
        <Input type="email" placeholder="Digite seu melhor e-mail" />
      </S.WrapperInput>

      <S.WrapperInput>
        <Input type="password" secureTextEntry={true} placeholder="Crie uma senha" />
      </S.WrapperInput>

      <S.WrapperInput>
        <Button onPress={handleSignup} label="Criar conta" />
      </S.WrapperInput>

      <S.Login onPress={() => navigation.navigate('SignIn')}>
        <S.AlreadyHaveAccount>
          Já possui conta? <S.TextBold>Faça login.</S.TextBold>
        </S.AlreadyHaveAccount>
      </S.Login>
    </S.Container>
  );
}