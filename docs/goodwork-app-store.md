# Good Work: trang hỗ trợ và chính sách bảo mật

## URL sau khi deploy website

| Ngôn ngữ | Support URL | Privacy Policy URL |
| --- | --- | --- |
| Việt | https://edgevision.io.vn/goodwork/support | https://edgevision.io.vn/goodwork/privacy |
| Anh | https://edgevision.io.vn/en/goodwork/support | https://edgevision.io.vn/en/goodwork/privacy |
| Nhật | https://edgevision.io.vn/ja/goodwork/support | https://edgevision.io.vn/ja/goodwork/privacy |

Các URL chỉ sử dụng được khi nhánh chứa thay đổi đã được deploy lên tên miền trên.
Trang là HTML tĩnh, đọc được mà không cần đăng nhập hoặc bật JavaScript. Không có
biểu mẫu mới hoặc dịch vụ thu thập thông tin mới. Email và số điện thoại dùng lại
`siteConfig` hiện có của website.

## Cơ sở nội dung (chủ sản phẩm xác nhận ngày 27/11/2026)

- Good Work dành cho các doanh nghiệp đăng ký sử dụng dịch vụ.
- Khuôn mặt và tọa độ GPS lưu trên hạ tầng của chính doanh nghiệp.
- Một phần nội dung chatbot được gửi tới **OpenAI**; dữ liệu khuôn mặt và GPS
  của chức năng chấm công không gửi cho bên thứ ba.
- Thời hạn lưu và xóa dữ liệu do doanh nghiệp quyết định, không tự đặt số ngày.
- Email hỗ trợ: `support@edgevision.io.vn`.

Đã đối chiếu app mobile: cập nhật ảnh khuôn mặt; chấm công bằng ảnh và GPS;
chatbot với ảnh/tài liệu và lịch sử phiên; xóa phiên chatbot; Expo push notification;
hồ sơ, báo cáo, nhiệm vụ và tài sản. Không suy đoán rằng xóa phiên chatbot đồng
nghĩa xóa mọi bản sao tại backend/nhà cung cấp AI.

## Cần hoàn tất trước khi công bố và gửi Apple

- Đã nêu OpenAI trong cả ba ngôn ngữ và liên kết tài liệu dữ liệu doanh nghiệp/API
  chính thức. Cần đối chiếu tích hợp backend để xác nhận nội dung nào được gửi
  (câu hỏi, lịch sử, ảnh, tài liệu, dữ liệu truy xuất), sản phẩm/endpoint, vùng xử lý,
  cấu hình lưu trữ, thỏa thuận và lựa chọn chia sẻ dữ liệu đang bật. Chưa có bằng
  chứng về cấu hình tài khoản nên không khẳng định zero retention, thời hạn 30 ngày
  cố định hoặc không dùng dữ liệu huấn luyện cho triển khai Good Work.
- Xác nhận nhà cung cấp có biện pháp bảo vệ dữ liệu phù hợp, và app có thông báo/
  đồng ý cần thiết trước khi chuyển dữ liệu cá nhân cho AI bên thứ ba.
- Kiểm tra quy trình tiếp nhận/xác minh/xóa dữ liệu, thời hạn của từng doanh
  nghiệp, bản sao lưu và việc xóa tại nhà cung cấp AI. Chính sách mô tả yêu cầu
  qua quản trị viên/email; chưa cam kết một SLA hoặc thời hạn chưa được xác nhận.
- Xác nhận tên pháp lý của đơn vị vận hành và thông tin liên hệ cần công bố.
  Trang dùng thương hiệu Edge Vision hiện có, không tự đặt tên pháp nhân.
- Cấu hình đường dẫn chính sách trong app và kiểm tra trên binary phát hành.
  Mã mobile hiện chỉ hiện liên kết pháp lý ở màn đăng nhập khi cả
  `EXPO_PUBLIC_PRIVACY_URL` và `EXPO_PUBLIC_TERMS_URL` là HTTPS. Repo landing page
  này chưa có trang điều khoản sử dụng; không dùng privacy/support thay cho terms.
- Nếu app cho tạo tài khoản, đối chiếu yêu cầu của Apple về khởi tạo xóa tài
  khoản trong app; trang hỗ trợ/email không tự thay thế yêu cầu đó.
- Điền App Privacy dựa trên luồng dữ liệu thực tế, gồm thông tin liên hệ, nội dung
  người dùng, vị trí chính xác, dữ liệu khuôn mặt và token/định danh phù hợp.

Tham khảo: https://developer.apple.com/app-store/review/guidelines/#data-collection-and-storage

Tài liệu OpenAI:

- https://openai.com/business-data/
- https://developers.openai.com/api/docs/guides/your-data

Trang quyền riêng tư dành cho người dùng ChatGPT tại
`https://openai.com/policies/privacy-policy/` không phải chính sách điều chỉnh nội
dung xử lý thay khách hàng API. Nếu backend dùng OpenAI API, đối chiếu tài liệu API
và thỏa thuận doanh nghiệp thực tế. Không suy ra thiết lập tài khoản từ mặc định
được mô tả trong tài liệu của nhà cung cấp.

## Kiểm tra

Chạy `npm run build`. Sitemap dùng `pageKeys` và tự thêm sáu URL mới với
canonical/hreflang tương ứng. Kiểm tra hiển thị desktop/mobile, mục lục, chuyển
ngôn ngữ, liên kết email/điện thoại và điều hướng footer trước deploy.
