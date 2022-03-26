import AppstoreOutlined from '@ant-design/icons/lib/icons/AppstoreOutlined'
import { EditOutlined } from '@ant-design/icons'
import PlusCircleOutlined from '@ant-design/icons/lib/icons/PlusCircleOutlined'
import { Progress, Space, Tooltip } from 'antd'
import React, { FC } from 'react'
import ProCard from '@ant-design/pro-card'
import { setMonitorId } from '../../../stores/app.store'
import { ProjectStatusModel } from '../../../domain/project/model/project.model'
import { useHookTools } from '../../../utils/toolhook'

interface HealthStatusItemProps {
  detail: ProjectStatusModel
}

const HealthStatusItem: FC<HealthStatusItemProps> = ({ detail }) => {
  const { navigate, storeDispatch } = useHookTools()
  const projectToUrl = (url: string, monitorId: string) => {
    storeDispatch(setMonitorId(monitorId))
    navigate(url)
  }

  return (
    <div className="project-item">
      <div className="item-title">
        <div className="project-title-name flex-1">{detail.projectName}</div>
        <div className="project-title-operation flex-1">
          <Space size={20}>
            <p onClick={() => projectToUrl('/system/project', detail.monitorId)}>
              <Tooltip placement="topLeft" title="修改配置">
                <EditOutlined style={{ color: '#a3a5b0' }} />
              </Tooltip>
            </p>
            <p onClick={() => projectToUrl('/user', detail.monitorId)}>
              <Tooltip placement="topLeft" title="查看用户">
                <AppstoreOutlined style={{ color: '#a3a5b0' }} />
              </Tooltip>
            </p>
          </Space>
        </div>
      </div>
      <div className="item-content">
        <div className="project-quota">
          <div className="quota-item">
            <p style={{ color: '#ff6a00' }}>{detail?.pv}</p>
            <span className="quota-item-title">今日访问</span>
          </div>
          <div className="quota-item">
            <p>{detail?.uv}</p>
            <span className="quota-item-title">今日用户</span>
          </div>
        </div>
        <p>健康总分</p>
        <div className="flex health">
          <div className="flex-grow-0">
            <Progress
              strokeWidth={8}
              type="circle"
              style={{ marginLeft: '20px', marginTop: '10px' }}
              width={80}
              percent={detail.rate}
              format={percent => `${percent}`}
            />
          </div>
          <div className="flex-grow-1 health-rate">
            <span>
              <label></label> JS报错率：{detail?.jsError}%
            </span>
            <span>接口报错率：{detail?.httpError}%</span>
            <span>资源报错率：{detail?.resourcesError}%</span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

interface HealthStatusProps {
  list: Array<ProjectStatusModel>
  openModal: () => void
}

export const HealthStatus: FC<HealthStatusProps> = ({ list, openModal }) => {
  return (
    <div className="project-list">
      <ProCard gutter={8} ghost wrap>
        {list.map((item, index) => {
          return (
            <ProCard key={index} colSpan={8} style={{ marginBottom: 8 }}>
              <HealthStatusItem detail={item} />
            </ProCard>
          )
        })}
        <ProCard colSpan={8} style={{ marginBottom: 8 }}>
          <div className="project-item">
            <div className="add-project">
              <PlusCircleOutlined className="add-icon" onClick={openModal} />
            </div>
          </div>
        </ProCard>
      </ProCard>
    </div>
  )
}
