import styled from 'styled-components'
import {colors} from './colors'

export const BlogItem = styled.div`
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

export const BlogTitle = styled.h1`
  font-size: 1.5em;
  color: ${colors.primary};
  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`

export const BlogAuthor = styled.p`
  font-style: italic;
  color: ${colors.secondary};
  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`

export const BlogDate = styled.p`
  color: ${colors.text};
  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`

export const BlogSummary = styled.p`
  margin-top: 10px;
  color: ${colors.text};
  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`

export const BlogContent = styled.p`
  margin-top: 10px;
  color: ${colors.text};
  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`

export const Button = styled.button`
  margin-top: 10px;
  margin-right:10px;
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
