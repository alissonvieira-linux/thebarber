import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.primary};
    padding: 40px;
    justify-content: center;
    align-items: center;
  `}
`;

export const WrapperInput = styled.View`
  margin-top: 18px;
  width: 100%;
`;

export const CreateAnAccount = styled.TouchableOpacity`
  margin-top: 30px;
`;

export const DontHaveAccount = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.primary_dark};
    font-family: ${theme.fonts.regular};
    font-size: 14px;
  `}
`;

export const TextBold = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
  `}
`;