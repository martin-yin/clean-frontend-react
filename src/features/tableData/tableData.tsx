import { Table } from 'antd'
import { TableProps as AntTableProps } from 'antd/lib/table'
import React from 'react'
type TableDataProps<T = any> = Required<Pick<AntTableProps<T>, 'dataSource' | 'columns'>>

// eslint-disable-next-line @typescript-eslint/ban-types
function TableData<RecordType extends object = any>(props: TableDataProps<RecordType>): React.ReactElement {
  const { dataSource, columns } = props
  return <Table dataSource={dataSource} columns={columns} rowKey="id" />
}

export default TableData
