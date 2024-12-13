import React from 'react';
import { Table } from 'antd';

const ComonTable = ({ columns, dataSource, loading, pagination, onChange }) => {
  return (
    <Table
      columns={columns}        // Các cột của bảng
      dataSource={dataSource}  // Dữ liệu của bảng
      loading={loading}        // Hiển thị loading khi đang tải dữ liệu
      pagination={pagination}  // Cấu hình phân trang
      onChange={onChange}      // Hàm xử lý sự thay đổi (sắp xếp, phân trang, v.v.)
      rowKey="id"              // Chỉ định key cho các hàng (có thể là id hoặc giá trị duy nhất khác)
    />
  );
};

export default ComonTable;
