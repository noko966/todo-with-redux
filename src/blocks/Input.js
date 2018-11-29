import styled from 'styled-components'
import { color, space, width, display, height, outline } from 'styled-system'

const Input = styled.input`
  ${space}
  ${outline}
  ${width}
  ${height}
  ${color}
  ${display}
`

Input.displayName = 'Input'

export default Input
