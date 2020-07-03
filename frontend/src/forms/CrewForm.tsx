import React, { useState, useEffect } from 'react'
import { UploadOutlined } from '@ant-design/icons'
import moment from 'moment'
import { Form, Input, InputNumber, Select, DatePicker, Button, Upload } from 'antd'

import { ICrewMember } from '../types/data'
import { FormInstance } from 'antd/lib/form'
import { CrewRole } from '../types/enums'
import { ICrewForm } from '../types/forms'

interface Props {
  initialValues?: ICrewMember
  form: FormInstance
  boatId: number
  onSubmit: (values: ICrewForm) => void
}

export const CrewForm: React.FC<Props> = ({ form, initialValues, onSubmit, boatId }) => {
  const [picture, setPicture] = useState(initialValues?.picture ?? '')
  const getPictureUrl = (e: any) => {
    if (e.file.response) {
      setPicture(e.file.response)

      return e.file.response
    }
  }

  return (
    <Form
      //@ts-ignore
      onFinish={onSubmit}
      style={{ width: '50%' }}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      form={form}
      initialValues={initialValues && { ...initialValues, certifiedUntil: moment(initialValues.certifiedUntil) }}
    >
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="age" label="Age" rules={[{ required: true }]}>
        <InputNumber min={18} max={100} />
      </Form.Item>

      <Form.Item name="email" label="Email" rules={[{ required: true }]}>
        <Input type="email" />
      </Form.Item>

      <Form.Item name="role" label="Role" rules={[{ required: true }]}>
        <Select placeholder="Select role">
          <Select.Option value={CrewRole.Captain}>Captain</Select.Option>
          <Select.Option value={CrewRole.ChiefEngineer}>Chief Engineer</Select.Option>
          <Select.Option value={CrewRole.DeckCader}>Deck Cader</Select.Option>
          <Select.Option value={CrewRole.Motorman}>Motorman</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item name="certifiedUntil" label="Certified" rules={[{ required: true }]}>
        <DatePicker />
      </Form.Item>

      <Form.Item name="picture" label="Picture" valuePropName="file" getValueFromEvent={getPictureUrl}>
        <Upload
          name="file"
          action={`${process.env.REACT_APP_API_URL}boats/${boatId}/crew/upload-picture`}
          listType="picture-card"
          showUploadList={false}
        >
          {picture ? (
            <img src={picture} alt="avatar" width={250} height={250} />
          ) : (
            <>
              <UploadOutlined /> Click to upload
            </>
          )}
        </Upload>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
        <Button type="primary" htmlType="submit">
          {initialValues ? 'Update' : 'Create'}
        </Button>
      </Form.Item>
    </Form>
  )
}
