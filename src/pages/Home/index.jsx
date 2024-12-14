import React from "react";
import CourseCard from "../../components/CourseCard";
import './style.scss';

const Home = () => {
  return (
    <div className="home-page">
      <h4>Chào mừng bạn đến với nền tảng Estudyme, một trong những trang web học tập trực tuyến hàng đầu nơi bạn có thể tìm thấy tất cả các giải pháp luyện thi miễn phí và hiệu quả. Các bài kiểm tra thực hành của chúng tôi bao quát hầu hết các kỳ thi quốc tế quan trọng và sẽ luôn đồng hành cùng bạn đạt được thành công.</h4>
      <CourseCard />
    </div>
  );
};

export default Home;
