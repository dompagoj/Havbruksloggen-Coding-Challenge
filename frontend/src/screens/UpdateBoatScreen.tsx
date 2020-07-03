import React from 'react'
import { Form } from 'antd'
import { RouteChildrenProps, Redirect } from 'react-router-dom'
import { useMutation, queryCache, useQuery } from 'react-query'

import { Container } from '../components/Container'
import * as Http from '../http'
import { Queries } from '../queries'
import { AppRoutes } from '../routes'
import { BoatForm } from '../forms/BoatForm'
import { IBoatForm } from '../types/forms'

export const UpdateBoatScreen: React.FC<RouteChildrenProps<{ id: string }>> = props => {
  const boatId = parseInt(props.match!.params.id)
  const [form] = Form.useForm()
  const [mutate] = useMutation(Http.updateBoat, {
    onSuccess: () => {
      queryCache.invalidateQueries(Queries.GET_BOATS)
      queryCache.invalidateQueries([Queries.GET_BOAT, boatId])
      props.history.push(AppRoutes.HOME)
    },
  })

  const { data, isLoading, error } = useQuery([Queries.GET_BOAT, boatId], Http.getBoat)

  if (isLoading) return <div></div>
  if (error || !data) return <Redirect to={AppRoutes.HOME} />

  const onSubmit = (form: IBoatForm) => {
    mutate({ boatId, form })
  }

  return (
    <Container>
      <h1>Update boat</h1>
      <BoatForm form={form} onSubmit={onSubmit} initialValues={data} />
    </Container>
  )
}
