import React from 'react'
import styled from 'styled-components'
import { Color } from './Color'

export const Highlight = styled.span`
  color: ${Color.yellow};
  ${p => p.large && 'font-size: 1.15em;'}
  ${p => p.bold && 'font-weight: bold;'}
  ${p => p.underline && 'text-decoration: underline;'}
`
