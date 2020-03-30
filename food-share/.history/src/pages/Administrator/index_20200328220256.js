import React, { Component } from "react";
import {Card,Table} from 'antd'
import style from './index.module.less'
import Adminsapi from '../../api/'
  
  const columns = [
    {
        title: 'id',
        dataIndex: '_id',
        key: '_id',
      },
    {
      title: '账号',
      dataIndex: 'userName',
      key: 'userName',
    },
  ];
class Admins extends Component{
     state={
        dataSource:[]
     }

  render(){
      let {dataSource} = this.state
 return(
     <div className={style.admins}>
        <Card  title="管理员列表">
        <Table dataSource={dataSource} columns={columns} />;
        </Card>
    </div>
   )
  }

}


export default Admins;