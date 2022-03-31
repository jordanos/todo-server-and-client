import { color, font } from 'shared/utils/Styles';
import styled from 'styled-components';

interface InputInterface {
  width?: string;
  height?: string;
}

const StyledForm = styled.form`
  width: 437px;
  height: 380px;
  background: ${color.backgroundMedium};
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  padding: 35px 25px;

  & > .form-row {
    margin-bottom: 20px;
  }
`;

export const StyledInput = styled.input<InputInterface>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: white;
  border: 1px solid #c1ccdd;
  border-radius: 2px;
`;

export const StyledButton = styled.button`
  width: 105px;
  height: 28px;
  background: ${color.backgroundDark};
  color: ${color.backgroundLightest};
  ${font.bold}
  border-radius: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 2px;
`;

export default StyledForm;

StyledInput.defaultProps = {
  width: '300px',
  height: '32px',
};