import * as React from 'react'
import styled from 'styled-components'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default class extends React.Component<Props> {
  render() {
    const { children, ...props } = this.props
    return (
      <Button {...props}>{children}</Button>
    )
  }
}

const Button = styled.button`
  padding: 8px 16px;
  color: white;
  font-size: 16px;
  background-color: #4286f4;
  border-style: none;
  border-radius: 6px;
  cursor: pointer;
`