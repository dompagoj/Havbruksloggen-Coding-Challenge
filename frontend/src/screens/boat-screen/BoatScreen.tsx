import React from 'react'
import { useQuery, useMutation, queryCache } from 'react-query'
import { message } from 'antd'
import { Redirect, RouteChildrenProps } from 'react-router-dom'

import { Container } from '../../components/Container'
import { BoatCard } from '../home/BoatCard'
import { Queries } from '../../queries'
import * as Http from '../../http'
import { AppRoutes } from '../../routes'

type Props = RouteChildrenProps<{ id: string }>

export const BoatScreen: React.FC<Props> = props => {
  const { data, isLoading, error } = useQuery([Queries.GET_BOAT, parseInt(props.match!.params.id)], Http.getBoat)

  const [deleteBoat] = useMutation(Http.deleteBoat, {
    onSuccess: () => {
      message.warn('Deleted!', 1)
      queryCache.invalidateQueries(Queries.GET_BOATS)
      props.history.push(AppRoutes.HOME)
    },
  })

  if (isLoading) return <div></div>
  if (error || !data) return <Redirect to={AppRoutes.HOME} />

  return (
    <Container>
      <BoatCard boat={data} onDelete={deleteBoat} />
    </Container>
  )
}
