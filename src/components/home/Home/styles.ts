import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
background-color:#290742;
`

export const Menu = styled.div`
display: flex;
margin: 2em 2.2em 0 1.8em; 

flex-direction: row;
justify-content: space-around;
align-items: center;
`

export const Buttons = styled.div`
display: flex;
justify-content: space-evenly;
width: 25em;
`


export const Logo = styled.span`
font-family: 'Poppins', sans-serif;
color: white;
font-size: 36px;
`

export const Input = styled.input`
border: none;
height: 3em;
width: 17em;
background-color: #170027;
border-top-left-radius: 4px;
border-bottom-left-radius:4px;
color: #fff;
padding-left:1em;

::placeholder {
    color:#FBF6FF;
    padding: 1.5em;
  }
  &:focus{
  
    outline: none;
  }

`

export const MagGlass = styled.button`
background-color: #9e6dc2;
padding: 0em 1.7em;
border: none;
border-top-right-radius: 4px;
border-bottom-right-radius:4px;
:hover{
  cursor: pointer;
}
`

export const InputWrap = styled.div`
display: flex;
`

export const Content = styled.div`
display: flex;
margin: 4em 8.4em ;
`

export const Text = styled.div`
display: flex;
flex-direction:column;
margin-right: 8em;
`

export const Title = styled.h1`
font-size: 36px;
font-family: Poppins;
color:#fbf6;
margin-bottom: 0.7em;
`
export const SubTitle = styled.span`
font-size: 18px;
color:#FBF6FF;
font-family: Roboto;
margin-right: 4em;
`

export const Image = styled.img`

`

export const More = styled.div`
margin-top: 1.5em;
display: flex;
align-items: center;

:hover{
  cursor: pointer;
}
`

export const MoreText = styled.span`
color:#fbf6;
font-family: Roboto;
font-weight: bold;
font-size: 18px;
margin-right: 0.5em;

`





















