import React from 'react'
import { Form } from 'antd'
import { RouteChildrenProps, Redirect } from 'react-router-dom'
import { useMutation, queryCache, useQuery } from 'react-query'

import { Container } from '../components/Container'
import { CrewForm } from '../forms/CrewForm'
import { ICrewForm } from '../types/forms'
import * as Http from '../http'
import { Queries } from '../queries'
import { AppRoutes } from '../routes'

export const UpdateCrewScreen: React.FC<RouteChildrenProps<{ boatId: string; id: string }>> = props => {
  const boatId = parseInt(props.match!.params.boatId)
  const id = parseInt(props.match!.params.id)
  const [form] = Form.useForm()

  const [mutate] = useMutation(Http.updateCrewMember, {
    onSuccess: () => {
      queryCache.invalidateQueries([Queries.GET_BOAT, boatId])
      queryCache.invalidateQueries([Queries.GET_CREW_MEMBER, boatId, id])
      props.history.push(AppRoutes.BOAT.getRoute(boatId))
    },
  })

  const { data, isLoading, error } = useQuery([Queries.GET_CREW_MEMBER, boatId, id], Http.getCrewMember)

  if (isLoading) return <div></div>
  if (error || !data) return <Redirect to={AppRoutes.BOAT.getRoute(boatId)} />

  const onSubmit = (form: ICrewForm) => {
    mutate({ boatId, id, form })
  }

  return (
    <Container>
      <h1>Update crew member</h1>
      <CrewForm boatId={boatId} form={form} onSubmit={onSubmit} initialValues={data} />
    </Container>
  )
}
