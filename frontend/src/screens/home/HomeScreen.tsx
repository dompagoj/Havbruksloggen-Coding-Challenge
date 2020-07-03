import React from 'react'
import { useQuery } from 'react-query'

import { Container } from '../../components/Container'
import { getBoats } from '../../http'
import { BoatList } from './BoatList'
import { Queries } from '../../queries'
import { Row, Button } from 'antd'
import { RouteChildrenProps } from 'react-router-dom'
import { AppRoutes } from '../../routes'

export const HomeScreen: React.FC<RouteChildrenProps> = props => {
  const { data, isLoading, error } = useQuery(Queries.GET_BOATS, getBoats)

  if (isLoading) return <div></div>
  if (error || !data) return <div>Failed to fetch...</div>

  return (
    <Container>
      <Row justify="end" style={{ marginBottom: 10 }}>
        <Button onClick={() => props.history.push(AppRoutes.CREATE_BOAT)}>Create new</Button>
      </Row>
      {data.length ? (
        <BoatList boats={data} />
      ) : (
        <Row justify="center" className="bold">
          No boats :({' '}
        </Row>
      )}
    </Container>
  )
}
