import styled from 'styled-components'
import {colors} from './colors'

export const Container = styled.div`
  padding: 20px;
  background-color: ${colors.background};
  @media (max-width: 768px) {
    padding: 10px;
  }
`

export const Header = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: ${colors.primary};
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`

export const SearchInput = styled.input`
  display: block;
  margin: 0 auto 20px auto;
  padding: 10px;
  width: 80%;
  background-color: ${colors.inputBackground};
  border: 1px solid ${colors.inputBorder};
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const BlogList = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const BlogItem = styled.li`
  border: 1px solid ${colors.border};
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  background-color: ${colors.background};
  @media (max-width: 768px) {
    padding: 5px;
    margin: 5px 0;
  }
`

export const Button = styled.button`
  margin-top: 10px;
  padding: 10px 15px;
  background-color: ${colors.buttonBackground};
  color: ${colors.buttonText};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 8px 10px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 10px;
  }
`

export const Label = styled.label`
  margin-top: 10px;
  color: ${colors.text};
`

export const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  background-color: ${colors.inputBackground};
  border: 1px solid ${colors.inputBorder};
  border-radius: 5px;
  @media (max-width: 768px) {
    padding: 8px;
  }
`

export const TextArea = styled.textarea`
  padding: 10px;
  margin-top: 5px;
  background-color: ${colors.inputBackground};
  border: 1px solid ${colors.inputBorder};
  border-radius: 5px;
  @media (max-width: 768px) {
    padding: 8px;
  }
`
export const LogOutButton = styled.button`
  margin-top: 10px;
  padding: 10px 15px;
  background-color: ${colors.buttonBackground};
  color: ${colors.buttonText};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 8px 10px;
  }
`
