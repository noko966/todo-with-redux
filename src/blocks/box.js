import styled from 'styled-components'
import { color, space, width, display, height } from 'styled-system'

const Box = styled.div`
  ${space}
  ${width}
  ${height}
  ${color}
  ${display}
`

Box.displayName = 'Box';

export { Box }
export default Box
