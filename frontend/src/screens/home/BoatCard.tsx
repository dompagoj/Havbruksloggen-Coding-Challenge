import React, { SyntheticEvent } from 'react'
import classNames from 'classnames'
import { Card, Button } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

import { InfoRow } from '../../components/InfoRow'
import { IBoat, ICrewMember } from '../../types/data'
import { CardCrewList } from './CardCrewList'
import { useHistory } from 'react-router-dom'
import { AppRoutes } from '../../routes'

interface Props {
  boat: IBoat
  crewCount?: number
  crew?: ICrewMember[]
  hover?: boolean
  onClick?: (boatId: number) => any
  onDelete?: (boatId: number) => any
}

export const BoatCard: React.FC<Props> = props => {
  const history = useHistory()
  const { boat, onDelete, crewCount, onClick, hover } = props

  const deleteHandler = (e: SyntheticEvent) => {
    e.stopPropagation()
    onDelete && onDelete(boat.id)
  }

  const editHandler = (e: any) => {
    e.stopPropagation()
    history.push(AppRoutes.EDIT_BOAT.getRoute(boat.id))
  }

  return (
    <Card
      title={boat.name}
      bordered
      onClick={onClick ? () => onClick(boat.id) : undefined}
      className={classNames({
        'boat-card-hover': !!hover,
        'boat-card': !hover,
      })}
      cover={<img src={boat.picture} alt="boat" />}
      actions={
        onDelete && [
          <div onClick={e => e.stopPropagation()}>
            <Button danger icon={<DeleteOutlined onClick={deleteHandler} />} />
          </div>,
          <div>
            <Button icon={<EditOutlined onClick={editHandler} />} />
          </div>,
        ]
      }
    >
      <InfoRow title="Producer" value={boat.producer} />
      <InfoRow title="Build number" value={boat.buildNumber} />
      <InfoRow title="Max Length" value={boat.loa} />
      <InfoRow title="Max Width" value={boat.b} />
      {crewCount !== undefined && <InfoRow title="Crew count" value={crewCount} />}
      {boat.crew && <CardCrewList boat={boat} />}
    </Card>
  )
}
