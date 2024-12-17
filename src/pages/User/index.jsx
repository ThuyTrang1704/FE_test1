import React, { useState, useEffect } from "react";
import { Button, Input, Pagination, Skeleton, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import ComonTable from "../../components/ComonTable";
import userService from "../../service/user.service";
import "./style.scss";

const Users = () => {
  const [keyword, setKeyword] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(2);

  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  // Cột của bảng
  const columns = [
    {
      title: "#",
      render: (text, record, index) => (pageNumber - 1) * pageSize + index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "PhoneNumber",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="default" danger onClick={() => handleDelete(record)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    const userData = async () => {
      try {
        setLoading(true);
        const data = await userService.fetchUser({
          keyword,
          pageNumber,
          pageSize,
        });
        setDataSource(data.contents);
        setTotalPage(data.totalPages);
      } catch (error) {
        throw new Error("Fetch User failed");
      } finally {
        setLoading(false);
      }
    };
    userData();
  }, [keyword, pageNumber, pageSize]);

  const handleSearch = (value) => {
    console.log("Searching for:", value);
    // Logic tìm kiếm user
  };

  const handleDelete = (record) => {
    console.log("Deleting record:", record);
  };

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <Button>Previous</Button>;
    }
    if (type === "next") {
      return <Button>Next</Button>;
    }
    return originalElement;
  };
  const handlePageClick = (pagination) => {
    setPageNumber(pagination);
  };

  return (
    <div className="user-content">
      <h1>User List</h1>
      <Space className="search-box">
        <Input
          placeholder="Search user..."
          prefix={<SearchOutlined />}
          allowClear
          onPressEnter={(e) => handleSearch(e.target.value)}
        />
      </Space>
      <ComonTable
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey="id"
        pagination={false}
      />
      {totalPage > 0 && (
        <Pagination
          total={totalPage}
          current={pageNumber}
          defaultPageSize={pageSize}
          itemRender={itemRender}
          onChange={handlePageClick}
          className="table-pagi"
        />
      )}
    </div>
  );
};

export default Users;
