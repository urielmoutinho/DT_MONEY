import styled, { isStyledComponent } from "styled-components";
import { darken } from "polished";

export const ImgStyleModal = styled.img`
    width:20px;
    height:20px;
`;

export const TextStyleModal = styled.span`
    display:inline-block;
    margin-left:1rem;
    font-size:1rem;
    color: var(--text-title);
`;

interface IbuttonRadioProps{
  isActive: boolean;
  activeColor:'red' | "green";

}
const colors={
  green : '#90EE90',
  red : '#ff7272'
}


export const ButtonRadio = styled.button<IbuttonRadioProps>`
  height:4rem;
  border:1px solid #d7d7d7;
  border-radius:0.55rem;
  //background:transparent;
  background:${({isActive, activeColor}) => isActive ? colors[activeColor] : 'transparent'};
  display:flex;
  justify-content:center;
  align-items:center;

  &:hover{
    border-color:#aaa;
    filter:brightness(0.9);

  }

`;

export const TransactionTypeContainer = styled.div`
  margin:1rem 0;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:0.5rem;

`;

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;

    font-size: 1rem;
    &::placeholder {
      color: var(--text-body);
    }
    & + input {
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background-color: var(--green);
    border: 0;
    color: #fff;
    border-radius: 0.25rem;
    margin-top: 1rem;
    font-size: 1rem;
    transition: .2s ease;
    font-weight:600;
    &:hover{
        filter: brightness(0.9);

    }
  }

`;
