import { useGetJsErrorAdapter } from '@/presentation/jsErr/hook/getJsErrorAdapter'
import StepBackwardOutlined from '@ant-design/icons/lib/icons/StepBackwardOutlined'
import StepForwardOutlined from '@ant-design/icons/lib/icons/StepForwardOutlined'
import { Button, Divider, Space } from 'antd'
import React from 'react'
import BrowserIcon from '../../../assets/webIcons/browse.png'
import IpIcon from '../../../assets/webIcons/ip.png'
import PcIcon from '../../../assets/webIcons/pc.png'
import WindowIcon from '../../../assets/webIcons/window.png'

const JsErrSurvey = React.memo(() => {
  const changeIssue = async (id: number) => {}

  const { jsError } = useGetJsErrorAdapter()

  const ErrorChangeButton = () => {
    return (
      <div id="errorAction">
        <Space>
          <Button
            style={{ fontSize: '10px' }}
            size="small"
            icon={<StepBackwardOutlined />}
            disabled={jsError.previousErrorId == 0}
            onClick={() => changeIssue(jsError.previousErrorId)}
          >
            上一个
          </Button>
          <Button
            style={{ fontSize: '10px' }}
            size="small"
            icon={<StepForwardOutlined />}
            disabled={jsError.nextErrorId == 0}
            onClick={() => changeIssue(jsError.nextErrorId)}
          >
            下一个
          </Button>
        </Space>
      </div>
    )
  }

  const SurveyIcon = () => {
    return (
      <Space size={60}>
        <Space>
          <img src={IpIcon} alt="" />
          <h3>{jsError.ip}</h3>
        </Space>
        <Space>
          <img src={BrowserIcon} alt="" />
          <div>
            <h3>{jsError.browser}</h3>
            <p>{jsError.browserVersion}</p>
          </div>
        </Space>
        <Space>
          <img src={WindowIcon} alt="" />
          <div>
            <h3>{jsError.os}</h3>
            <p>{jsError.osVersion}</p>
          </div>
        </Space>
        <Space>
          <img src={PcIcon} alt="" />
          <div>
            <h3>{jsError.device}</h3>
            <p>{jsError.deviceType}</p>
          </div>
        </Space>
      </Space>
    )
  }

  return (
    <>
      {jsError && (
        <>
          <div id="errorDesc">
            <Space>
              <h2>
                {jsError.errorName}: {jsError.message}
              </h2>
            </Space>
            <div style={{ marginBottom: '20px' }}>
              <p>{jsError.componentName}</p>
            </div>
          </div>
          <ErrorChangeButton />
          <Divider />
          <SurveyIcon />
        </>
      )}
    </>
  )
})

export default JsErrSurvey
