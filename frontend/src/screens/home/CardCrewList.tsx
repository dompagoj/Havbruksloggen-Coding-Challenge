import React from 'react'
import { useMutation, queryCache } from 'react-query'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

import * as Http from '../../http'
import { Row, Avatar, Col, Button, message } from 'antd'
import { ICrewMember, IBoat } from '../../types/data'
import { InfoRow } from '../../components/InfoRow'
import { formatDate } from '../../utilts'
import { Queries } from '../../queries'
import { useHistory } from 'react-router-dom'
import { AppRoutes } from '../../routes'

interface Props {
  boat: IBoat
}

export const CardCrewList: React.FC<Props> = ({ boat }) => {
  const history = useHistory()
  const [deleteCrewMember] = useMutation(Http.deleteCrewMember, {
    onSuccess: () => {
      message.warn('Deleted crew member!')
      queryCache.invalidateQueries([Queries.GET_BOAT, boat.id])
    },
  })

  const onNew = () => history.push(AppRoutes.CREATE_CREW_MEMBER.getRoute(boat.id))

  return (
    <div style={{ marginTop: 5 }}>
      <>
        <div className="bold" style={{ marginBottom: 5 }}>
          Crew:
        </div>
        <Button style={{ margin: '15px 0' }} onClick={onNew}>
          Add new
        </Button>
        {boat.crew.length ? (
          boat.crew.map(crewMember => {
            return (
              <div key={crewMember.id} style={{ marginBottom: 30 }}>
                <CrewMemberInfo boatId={boat.id} onDelete={deleteCrewMember} member={crewMember} />
              </div>
            )
          })
        ) : (
          <div>No crew members...</div>
        )}
      </>
    </div>
  )
}

interface CrewMemberInfoProps {
  member: ICrewMember
  boatId: number
  onDelete: any
}

const CrewMemberInfo: React.FC<CrewMemberInfoProps> = ({ member, onDelete, boatId }) => {
  const history = useHistory()
  const { id, email, picture, role, age, certifiedUntil, name } = member

  const onEdit = (e: any) => {
    history.push(AppRoutes.UPDATE_CREW_MEMBER.getRoute(boatId, id))
  }

  return (
    <Row align="middle">
      <Col span={2}>
        <Avatar src={picture} />
      </Col>
      <Col span={21} style={{ marginLeft: 5 }}>
        <Row align="middle">
          <Col xs={18} md={14} lg={10}>
            <div style={{ marginRight: 20 }}>
              <InfoRow title="Name" value={name} />
              <InfoRow title="Email" value={email} />
              <InfoRow title="Age" value={age} />
              <InfoRow title="Role" value={role} />
              <InfoRow title="Cerified until" value={formatDate(certifiedUntil)} />
            </div>
          </Col>
          <Col xs={6} md={10} lg={14}>
            <Row>
              <Button style={{ marginRight: 5 }} onClick={onEdit} shape="circle-outline" icon={<EditOutlined />} />
              <Button
                onClick={() => onDelete({ boatId, id })}
                shape="circle-outline"
                danger
                icon={<DeleteOutlined />}
              />
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
