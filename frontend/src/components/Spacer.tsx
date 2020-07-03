import React from 'react'

interface Props {
  height?: number
  width?: number
}

export const Spacer: React.FC<Props> = ({ height, width }) => {
  return <div style={{ height, width }} />
}
