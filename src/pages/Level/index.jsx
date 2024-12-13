import React, { useState, useEffect } from "react";
import { Button, Input, Pagination, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import ComonTable from "../../components/ComonTable";
import levelService from "../../service/level.service";
import MyModal from "../../components/MyModal";
import ModalAddLevel from "../../components/Level/ModalAddLevel";
import "./style.scss";

const Level = () => {
  const [keyword, setKeyword] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(3);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionModal, setActionModal] = useState({});

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
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEditLevel()}>
            Edit
          </Button>
          <Button type="default" danger onClick={() => handleDelete()}>
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
        const data = await levelService.fetchLevel({
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

  const handleAddLevel = () => {
    setActionModal("CREATE");
    setIsModalOpen(true);
  };

  const handleEditLevel = () => {
    setActionModal("UPDATE");
    setIsModalOpen(true);
  };

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
    <div className="level-content">
      <h1>Level List</h1>
      <Space className="search-box">
        <Input
          placeholder="Search level..."
          prefix={<SearchOutlined />}
          allowClear
          onPressEnter={(e) => handleSearch(e.target.value)}
        />
        <Button type="primary" onClick={() => handleAddLevel()}>
          Thêm Level
        </Button>
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
      <MyModal
        title={
          actionModal === "CREATE"
            ? "ADD NEW LEVEL"
            : actionModal === "UPDATE"
            ? "UPDATE LEVEL"
            : "DELETE LEVEL"
        }
        open={isModalOpen}
        onCancel={handleCancel}
        // isModalOpen={isModalOpen}
        centered
      >
        {actionModal === "CREATE" ? (
          <ModalAddLevel
            keyword={keyword}
            pageNumber={pageNumber}
            pageSize={pageSize}
            handleCancel={handleCancel}
            isModalOpen={isModalOpen}
          />
        ) : actionModal === "UPDATE" ? (
          <div>sua</div>
        ) : (
          <div>XOA</div>
        )}
      </MyModal>
    </div>
  );
};

export default Level;
