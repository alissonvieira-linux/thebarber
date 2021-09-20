import styled, {css} from "styled-components/native";

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    height: 60px;
    width: 100%;
    border-radius: 10px;
    background-color: ${theme.colors.primary_dark};
    align-items: center;
    justify-content: center;
    padding: 15px;
    flex-direction: row;
  `}
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.light};
    font-size: 15px;
    font-family: ${theme.fonts.bold};
  `}
`;