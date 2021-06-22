import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
function App() {


  const [transData, setData] = useState([
    { name: '1', id: 'data1', purchase: 200 },
    { name: '2', id: 'data2', purchase: 100 }
  ]);
  useEffect(() => {
    transData.forEach((ele) => {
      ele['point'] = getpoint(ele.purchase)
    })
    setData(transData)
  }, [transData]);


  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Purchase',
      dataIndex: 'purchase',
      key: 'purchase',
    },
    {
      title: 'Point',
      dataIndex: 'point',
      key: 'point',
    },
  ];

  const getpoint = (value) => {
    let point = 0;
    if (value > 100) point = point + (value - 100) * 2
    if (value > 50) point = point + (value - 50) * 1
    return point
  }

  return (
    <Table dataSource={transData} columns={columns} />
  );
}

export default App;
