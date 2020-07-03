import React from 'react'
import { Form } from 'antd'
import { RouteChildrenProps } from 'react-router-dom'
import { useMutation, queryCache } from 'react-query'

import { Container } from '../components/Container'
import * as Http from '../http'
import { Queries } from '../queries'
import { AppRoutes } from '../routes'
import { BoatForm } from '../forms/BoatForm'

export const CreateBoatScreen: React.FC<RouteChildrenProps> = props => {
  const [form] = Form.useForm()
  const [mutate] = useMutation(Http.createBoat, {
    onSuccess: () => {
      queryCache.invalidateQueries(Queries.GET_BOATS)
      props.history.push(AppRoutes.HOME)
    },
  })

  return (
    <Container>
      <h1>Create boat</h1>
      <BoatForm form={form} onSubmit={mutate} />
    </Container>
  )
}
