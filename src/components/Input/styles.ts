import styled, {css} from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    height: 60px;
    width: 100%;
    border-radius: 10px;
    background-color: ${theme.colors.primary_light};
    align-items: center;
    padding: 15px;
    flex-direction: row;
  `}
`;

export const WrapperInput = styled.View`
  margin-left: 20px;
  width: 100%;
`;

export const Input = styled.TextInput`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.primary_dark};
    font-size: 15px;
    font-family: ${theme.fonts.regular};
  `}
`;