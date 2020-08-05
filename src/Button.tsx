import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  label: string;
}

const StyledButton = styled.button`
  background: transparent;
  border: 2px solid rgb(128, 128, 130);
  border-radius: 5px;
  padding: 4px 10px;
  cursor: pointer;
  color: rgb(128, 128, 130);
  &:hover {
    background: rgba(255,255,255,.2);
    border: 2px solid white;
    color: white
  }
`;

export const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
  <StyledButton type="submit">{label}</StyledButton>
  )
}