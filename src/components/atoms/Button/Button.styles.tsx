import styled from 'styled-components'

const StyledButton = styled.button`
  font-weight: 500;
  font-size: 1rem;
  color: #edf0f1;
  text-decoration: none;
  padding: 9px 25px;
  background-color: rgba(0, 136, 169, 1);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  &:hover {
    background-color: rgba(0, 136, 169, 0.8);
  }
`

export default StyledButton
