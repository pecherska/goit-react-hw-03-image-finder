import { ButtonStyle } from './Button.styled';
const Button = ({ handleClick }) => {
  return (
    <ButtonStyle onClick={() => handleClick()} type="submit">
      Load more
    </ButtonStyle>
  );
};

export default Button;
