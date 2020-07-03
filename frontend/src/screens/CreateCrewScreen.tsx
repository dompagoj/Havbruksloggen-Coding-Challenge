import React from 'react'
import { Form } from 'antd'
import { RouteChildrenProps } from 'react-router-dom'
import { useMutation, queryCache } from 'react-query'

import { Container } from '../components/Container'
import { CrewForm } from '../forms/CrewForm'
import { ICrewForm } from '../types/forms'
import * as Http from '../http'
import { Queries } from '../queries'
import { AppRoutes } from '../routes'

export const CreateCrewScreen: React.FC<RouteChildrenProps<{ boatId: string }>> = props => {
  const boatId = parseInt(props.match!.params.boatId)
  const [form] = Form.useForm()
  const [mutate] = useMutation(Http.createCrewMember, {
    onSuccess: () => {
      queryCache.invalidateQueries([Queries.GET_BOAT, boatId])
      props.history.push(AppRoutes.BOAT.getRoute(boatId))
    },
  })

  const onSubmit = (form: ICrewForm) => {
    mutate({ boatId, form })
  }

  return (
    <Container>
      <h1>Create crew member</h1>
      <CrewForm boatId={boatId} form={form} onSubmit={onSubmit} />
    </Container>
  )
}
