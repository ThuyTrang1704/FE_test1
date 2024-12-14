import React from "react";
import './style.scss'; // Tạo file SCSS để tùy chỉnh kiểu dáng nếu cần

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>Study Toeic - Nâng tầm trải nghiệm học tập của bạn</h1>
      
      <section className="section">
        <h2>1. Định hướng phát triển của chúng tôi</h2>
        <p>
          Mục tiêu của Study Toeic là giúp người học dễ dàng tiếp thu kiến thức thông qua việc luyện tập hàng ngày. Như vậy, bạn có thể đạt được mục tiêu của mình và thành công trong lĩnh vực của bạn. Cùng khám phá kho luyện tập khổng lồ ngay thôi!
        </p>
      </section>

      <section className="section">
        <h2>2. Giá trị cốt lõi của chúng tôi</h2>
        <p>
          Nền tảng ứng dụng tích hợp luyện tập giúp bạn hiện thực hóa ước mơ của mình. Bạn đã dành ra rất nhiều thời gian để học thi lấy chứng chỉ ngoại ngữ nhưng kết quả thu được chưa tốt? Đừng lo, chúng tôi ở đây để hỗ trợ bạn. Bạn hoàn toàn có thể học hiệu quả hơn mà không cần phải đăng ký các lớp học đông đúc hoặc thuê gia sư đắt đỏ. Đội ngũ tân tâm của Estudyme đã tổng hợp tất cả tài liệu kiến thức bạn cần!
        </p>
      </section>

      <section className="section">
        <h2>3. Lan tỏa động lực học tập</h2>
        <p>
          Rất nhiều học sinh, giáo viên và gia sư, đang truy cập và sử dụng các bài luyện tập của chúng tôi. Hãy tham gia cùng chúng tôi để truy cập nền tảng giáo dục tốt nhất với mức giá phải chăng nhất!
        </p>
      </section>
    </div>
  );
};

export default AboutUs;

