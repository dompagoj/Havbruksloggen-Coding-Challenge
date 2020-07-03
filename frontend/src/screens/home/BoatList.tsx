import React from 'react'
import { useMutation, queryCache } from 'react-query'
import { Row, Col, message } from 'antd'

import * as Http from '../../http'
import { BoatCard } from './BoatCard'
import { BoatDTO } from '../../types/http'
import { Queries } from '../../queries'
import { useHistory } from 'react-router-dom'
import { AppRoutes } from '../../routes'
interface Props {
  boats: BoatDTO[]
}

export const BoatList: React.FC<Props> = ({ boats }) => {
  const history = useHistory()
  const [deleteBoat] = useMutation(Http.deleteBoat, {
    onSuccess: () => {
      message.warn('Deleted!', 1)
      queryCache.invalidateQueries(Queries.GET_BOATS)
    },
  })

  const onCardClick = (boatId: number) => history.push(AppRoutes.BOAT.getRoute(boatId))

  return (
    <Row gutter={24} justify="center">
      {boats.map(({ boat, crewCount }) => {
        return (
          <Col key={boat.id} xl={8} md={24} style={{ marginBottom: 50 }}>
            <BoatCard hover crewCount={crewCount} boat={boat} onClick={onCardClick} onDelete={deleteBoat} />
          </Col>
        )
      })}
    </Row>
  )
}
