
import styled from "styled-components";

const Button = styled.button`
display: inline-flex;
font-size: 12px;
margin: 1px;
align-content: flex-end;
border-radius: 12px;
border: 1px solid black;
color: black;
padding: 0.25rem 1rem;
width: 12%;
height: 1.8rem;
border-radius: 12px 12px 0px 0px;
transition : 1000ms;
transform: translateY(0);
background-color: ${props => (props.name === 'monday' ? 'red'  : props.name === 'tuesday' ? '#ff6100'  : props.name === 'wednesday' ? '#ebd009' : props.name === 'thursday' ? '#f12e52' : props.name === 'friday' ? '#feba5f' : props.name === 'saturday' ? '#fef45f' : '#f590c7' )};

&:hover{

  transition : 1000ms;
  padding: 5px 30px;
  transform : translateY(-0px);
  background-color: #fff;
  color: #0066cc;
  border: solid 2px #0066cc;
  box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.25);  ;
  }
`

export default Button;
