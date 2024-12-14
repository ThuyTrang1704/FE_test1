import React from "react";

const Unauthorized = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>403 - Không có quyền truy cập</h1>
      <p>Bạn không có quyền truy cập vào trang này.</p>
      <a href="/">Quay lại trang chủ</a>
    </div>
  );
};

export default Unauthorized;
