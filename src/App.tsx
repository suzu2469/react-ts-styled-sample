import * as React from 'react'
import styled from 'styled-components'

import Button from './components/Button'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

interface State {
  count: number
}

export default class extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }

  decrement() {
    this.setState({ count: this.state.count - 1 })
  }
  
  render() {
    const { children, ...props } = this.props
    return (
      <Container {...props}>
        <Row>
          <Button onClick={e => this.decrement()}>-</Button>
          <Text>{this.state.count}</Text>
          <Button onClick={e => this.increment()}>+</Button>
        </Row>
      </Container>
    )
  }
}

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`

const Text = styled.div`
  font-weight: bold;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:first-child) {
    margin-left: 24px;
  }
`