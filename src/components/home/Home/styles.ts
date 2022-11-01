import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
background-color:#290742;
`

export const Menu = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`

export const Logo = styled.span`
font-family: 'Poppins', sans-serif;
color: white;
font-size: 36px;
`

export const Input = styled.input`
border: none;
height: 2em;
background-color: #170027;
border-radius: 4px;
::placeholder {
    color:#FBF6FF;
    padding-left: 1.5em;
  }

`