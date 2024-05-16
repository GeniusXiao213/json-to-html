import { Box,Grid } from '@mui/material'
import React from 'react'

function Coverage() {
  return (
    <Box>
        <Grid container spacing={2}>
            <Grid item xs={7}>
                <Box>产品与服务</Box>
                <Box>欧洲：涵盖上市公司、初创公司、跨国公司、中小型企业等各种规模和类型的公司。</Box>
                <Box>信息类型：企业名称及地址、商业登记、经营范围、企业发展轴线图、法定代表人、行业内融资项目、并购信息、企业分支组织架构图、企业官方出版物、企业官方年度财务报告全文、资产负债表和损益表、以及绩效指标等高级信息。</Box>
            </Grid>
            <Grid item xs={5}>
                图表
            </Grid>
            
        </Grid>
    </Box>
  )
}

export default Coverage