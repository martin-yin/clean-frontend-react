import { Card, Button } from 'antd'
import React, { FC } from 'react'
import { Descriptions } from 'antd'
import Field from '@ant-design/pro-field'
import { useGetProjectAdapter } from '@/domain/project/adapter/getProjectAdpater'

const ProjectPage: FC = () => {
  const { project, handleDeleteProject } = useGetProjectAdapter()

  const code = `<script>
    !(function(sdk, monitorId) {
      var head = document.getElementsByTagName('head')[0]; 
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = sdk
      script.onload = function() {
        window['elvin-js'] && window['elvin-js'].init({
          monitorId: monitorId,
        })
      };
      head.appendChild(script); 
    })("./index.js", "");
  </script>`

  return (
    <Card>
      {project ? (
        <Descriptions column={1}>
          <Descriptions.Item label="应用名称">
            <Field text={project.projectName} mode="read" />
          </Descriptions.Item>
          <Descriptions.Item label="应用标识">
            <Field text={project.monitorId} mode="read" />
          </Descriptions.Item>
          <Descriptions.Item label="打点代码">
            <Field text={code} mode="read" valueType="jsonCode" />
          </Descriptions.Item>
          <Descriptions.Item label="创建时间">
            <Field text={''} mode="read" />
          </Descriptions.Item>
          <Descriptions.Item label="创建时间">
            <Button
              onClick={() => {
                handleDeleteProject(project.id)
              }}
              size="small"
            >
              删除
            </Button>
          </Descriptions.Item>
        </Descriptions>
      ) : (
        <></>
      )}
    </Card>
  )
}
export default ProjectPage
