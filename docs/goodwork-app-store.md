# Good Work: trang hỗ trợ và chính sách bảo mật

## URL sau khi deploy website

| Ngôn ngữ | Support URL | Privacy Policy URL |
| --- | --- | --- |
| Việt | https://www.edgevision.io.vn/goodwork/support | https://www.edgevision.io.vn/goodwork/privacy |
| Anh | https://www.edgevision.io.vn/en/goodwork/support | https://www.edgevision.io.vn/en/goodwork/privacy |
| Nhật | https://www.edgevision.io.vn/ja/goodwork/support | https://www.edgevision.io.vn/ja/goodwork/privacy |

Trang là HTML tĩnh, đọc được mà không cần đăng nhập hoặc bật JavaScript. Email và
số điện thoại dùng lại `siteConfig` hiện có. Nội dung mới có hiệu lực trên website
sau khi nhánh `dev` được deploy.

## Cơ sở nội dung (chủ sản phẩm xác nhận ngày 27/11/2026)

- Good Work dành cho các doanh nghiệp đăng ký sử dụng dịch vụ.
- Khuôn mặt và tọa độ GPS lưu trên hạ tầng của chính doanh nghiệp, không gửi bên thứ ba.
- Chatbot dùng hệ thống AI của chúng tôi chạy trên máy chủ doanh nghiệp. Nội dung
  hội thoại, ngữ cảnh và ảnh/tài liệu đính kèm được xử lý trên hạ tầng doanh nghiệp,
  không gửi tới dịch vụ AI bên thứ ba.
- Backend đã sử dụng AI nội bộ với cùng API; app không cần đổi địa chỉ kết nối.
- Thời hạn lưu và xóa dữ liệu do doanh nghiệp quyết định, không tự đặt số ngày.
- Thông báo đẩy vẫn dùng Expo và Apple/Google; không suy rộng việc AI nội bộ thành
  cam kết toàn bộ ứng dụng không có dịch vụ bên thứ ba.
- Email hỗ trợ: `support@edgevision.io.vn`.

Chính sách Việt/Anh/Nhật nêu cùng mô hình xử lý AI nội bộ. Việc xóa phiên chatbot
không tự chứng minh đã xóa mọi bản sao trên máy chủ và bản sao lưu.

## Trước khi gửi Apple

- Deploy chính sách mới và kiểm tra lại cả ba ngôn ngữ ở URL công khai.
- Build lại app để có liên kết chính sách ở màn hình đăng nhập, liên kết hỗ trợ
  và thông tin AI nội bộ trong Cài đặt. Màn hình đăng nhập có URL privacy mặc định;
  liên kết terms chỉ hiện khi có một trang điều khoản HTTPS thực tế.
- Chọn binary mới trong App Store Connect; build 10026 chưa có các cập nhật này.
- Kiểm tra tài khoản demo, ảnh iPhone/iPad và thông tin liên hệ xét duyệt.
- Đối chiếu App Privacy theo luồng dữ liệu thực tế, gồm thông tin liên hệ, nội dung
  người dùng, vị trí chính xác, khuôn mặt và token/định danh phù hợp. AI nội bộ không
  tự làm thay đổi các loại dữ liệu được app xử lý trên máy chủ doanh nghiệp.
- Kiểm tra quy trình tiếp nhận, xác minh và xóa dữ liệu trên máy chủ/bản sao lưu
  theo chính sách doanh nghiệp. Chưa cam kết SLA hoặc thời hạn chưa được xác nhận.

## Kiểm tra

Chạy `npm run build`. Kiểm tra sáu trang support/privacy Việt/Anh/Nhật, nội dung AI
nội bộ, mục lục, canonical/hreflang, liên kết hỗ trợ và điều hướng footer.
