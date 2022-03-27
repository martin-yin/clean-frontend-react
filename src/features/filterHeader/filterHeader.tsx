import { Card, Space } from 'antd'
import React, { FC } from 'react'
import FilterHeaderItem from './components/filterHeaderItem'
import TimeRangPicker from './components/timeRangPicker'
import './index.less'

const FilterHeader: FC<any> = () => {
  return (
    <Card className="filter-header">
      <Space>
        <TimeRangPicker />
        <FilterHeaderItem title="UserId" />
        <FilterHeaderItem title="SessionId" />
      </Space>
    </Card>
  )
}

export default FilterHeader
