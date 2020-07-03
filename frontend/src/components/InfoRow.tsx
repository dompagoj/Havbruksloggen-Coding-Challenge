import React from 'react'
import { Col } from 'antd'

interface Props {
  title: string
  value: string | number
}

export const InfoRow: React.FC<Props> = ({ title, value }) => {
  return (
    <Col>
      <span className="bold">{title}:</span>
      <span style={{ marginLeft: 10 }}>{value}</span>
    </Col>
  )
}
