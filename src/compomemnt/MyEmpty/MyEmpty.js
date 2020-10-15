//空数据组件
import React, { Component } from 'react';
import style from './MyEmpty.module.css'
import { Empty } from 'antd';

export default function MyEmpty() {
  return (
    <div className={style.container}>
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={
          <span>
            暂无数据
          </span>
        }
      />
    </div>
  )
}