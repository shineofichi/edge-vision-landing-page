import { getLocale } from './i18n';

// Operational details reflect the product owner's release preparation on 2026-11-27.
// Keep the three translations in sync when data handling changes.
const section = (id, title, paragraphs = [], items = [], links = []) => ({ id, title, paragraphs, items, links });

export const goodworkDocs = {
  vi: {
    product: 'Ứng dụng Good Work',
    back: 'Khám phá Good Work',
    contents: 'Trong trang này',
    navigation: 'Thông tin Good Work',
    contact: 'Liên hệ hỗ trợ',
    privacyLabel: 'Chính sách bảo mật',
    supportLabel: 'Hỗ trợ Good Work',
    updated: 'Cập nhật ngày 27 tháng 11 năm 2026',
    emailAction: 'Gửi email hỗ trợ',
    phoneAction: 'Gọi đội ngũ Edge Vision',
    privacy: {
      title: 'Chính sách bảo mật Good Work',
      description: 'Cách Good Work xử lý thông tin tài khoản, dữ liệu chấm công, khuôn mặt, vị trí và nội dung chatbot trong môi trường doanh nghiệp.',
      intro: 'Good Work là ứng dụng quản lý công việc dành cho các doanh nghiệp đăng ký sử dụng dịch vụ. Chính sách này giải thích dữ liệu nào được xử lý, ai có thể tiếp cận và cách bạn yêu cầu hỗ trợ về quyền riêng tư.',
      sections: [
        section('responsibility', '1. Phạm vi và trách nhiệm', [
          'Edge Vision cung cấp ứng dụng Good Work. Doanh nghiệp đăng ký dịch vụ quản lý tài khoản, phân quyền và dữ liệu nghiệp vụ của người dùng thuộc doanh nghiệp đó.',
          'Dữ liệu khuôn mặt và tọa độ GPS được lưu trên hạ tầng của chính doanh nghiệp sử dụng. Doanh nghiệp quyết định thời hạn lưu và xóa dữ liệu theo nhu cầu vận hành, thỏa thuận dịch vụ và nghĩa vụ pháp luật áp dụng.',
          'Bạn có thể liên hệ quản trị viên doanh nghiệp hoặc Edge Vision qua thông tin ở cuối trang để hỏi về cách xử lý dữ liệu trong môi trường của mình.',
        ]),
        section('data', '2. Dữ liệu được xử lý', [], [
          'Tài khoản và hồ sơ: thông tin đăng nhập, mã người dùng, doanh nghiệp, vai trò, họ tên, email, số điện thoại, địa chỉ và ảnh hồ sơ khi được cung cấp.',
          'Công việc: nhiệm vụ, báo cáo, ảnh, tệp đính kèm, thông tin mượn/trả tài sản và nội dung khác bạn gửi trong quá trình làm việc.',
          'Chấm công: thời điểm vào/ra, ảnh khuôn mặt hoặc ảnh mẫu nhận diện, kết quả xác thực và tọa độ GPS gắn với lần chấm công.',
          'Chatbot: câu hỏi, nội dung hội thoại, lịch sử phiên và ảnh hoặc tài liệu bạn chủ động đính kèm.',
          'Thông báo và phiên làm việc: mã nhận thông báo đẩy, trạng thái đăng nhập và thông tin cần thiết để duy trì phiên sử dụng.',
          'Hỗ trợ: địa chỉ email, thông tin liên hệ và nội dung bạn cung cấp khi yêu cầu trợ giúp.',
        ]),
        section('purposes', '3. Mục đích sử dụng', [], [
          'Xác thực người dùng và giới hạn quyền truy cập theo doanh nghiệp, vai trò và chức năng.',
          'Thực hiện chấm công, xác minh khuôn mặt/vị trí và hiển thị lịch sử chấm công.',
          'Quản lý nhiệm vụ, báo cáo, tài sản và các hoạt động mà doanh nghiệp đã cấu hình.',
          'Xử lý yêu cầu chatbot, lưu lịch sử trao đổi và trả lời theo chức năng bạn sử dụng.',
          'Gửi thông báo công việc, duy trì phiên đăng nhập và tiếp nhận yêu cầu hỗ trợ.',
        ]),
        section('face-location', '4. Dữ liệu khuôn mặt và vị trí', [
          'Khi bạn sử dụng tính năng cập nhật mẫu khuôn mặt hoặc chấm công bằng ảnh, ứng dụng lấy ảnh từ camera hoặc ảnh bạn chọn và gửi tới hệ thống của doanh nghiệp để xử lý. Đây là dữ liệu khuôn mặt do bạn cung cấp cho Good Work.',
          'Khi thực hiện thao tác chấm công, ứng dụng yêu cầu quyền vị trí trong lúc sử dụng và lấy tọa độ để gửi kèm bản ghi chấm công. Việc sử dụng GPS trong luồng này gắn với thao tác chấm công.',
          'Dữ liệu khuôn mặt và tọa độ GPS được lưu trên hạ tầng doanh nghiệp và không được gửi cho bên thứ ba. Chúng được dùng cho chức năng chấm công và xác thực liên quan trong hệ thống doanh nghiệp.',
          'Nếu không muốn sử dụng khuôn mặt hoặc vị trí, bạn có thể từ chối/thu hồi quyền trong cài đặt thiết bị và trao đổi với quản trị viên về phương án chấm công phù hợp. Một số tính năng có thể không hoạt động khi thiếu quyền tương ứng.',
        ]),
        section('sharing', '5. Xử lý AI nội bộ và chia sẻ dữ liệu', [
          'Người có quyền trong doanh nghiệp có thể xem và xử lý dữ liệu phù hợp với phân quyền của họ. Doanh nghiệp chịu trách nhiệm thiết lập phạm vi truy cập trong môi trường của mình.',
          'Good Work sử dụng hệ thống AI do chúng tôi cung cấp, chạy trên máy chủ của doanh nghiệp. Câu hỏi, nội dung hội thoại, ngữ cảnh liên quan và ảnh/tài liệu đính kèm được xử lý trên hạ tầng doanh nghiệp; không gửi đến dịch vụ AI bên thứ ba.',
          'Nội dung chatbot và lịch sử phiên được quản lý trong hệ thống doanh nghiệp theo phân quyền. Bạn chỉ nên đưa thông tin cần thiết cho công việc vào hội thoại hoặc tệp đính kèm.',
          'Thông báo đẩy sử dụng dịch vụ Expo và nền tảng Apple/Google. Mã nhận thông báo và dữ liệu thông báo cần thiết được xử lý để chuyển thông báo tới thiết bị.',
          'Thông tin có thể được cung cấp cho cơ quan có thẩm quyền khi cần thực hiện nghĩa vụ pháp luật áp dụng.',
        ]),
        section('retention', '6. Lưu trữ và xóa dữ liệu', [
          'Thời hạn lưu và quy trình xóa dữ liệu do từng doanh nghiệp quyết định; Good Work không áp dụng một thời hạn chung cho tất cả doanh nghiệp. Điều này bao gồm hồ sơ tài khoản, dữ liệu chấm công, khuôn mặt, GPS, báo cáo, tệp và lịch sử hội thoại trong hệ thống doanh nghiệp.',
          'Để biết thời hạn cụ thể, cách xử lý bản sao lưu hoặc dữ liệu phải giữ lại theo nghĩa vụ pháp luật, hãy hỏi quản trị viên doanh nghiệp. Việc kết thúc sử dụng ứng dụng không tự động đồng nghĩa với việc xóa các hồ sơ nghiệp vụ do doanh nghiệp quản lý.',
          'Bạn có thể gửi yêu cầu xóa tài khoản, dữ liệu cá nhân hoặc mẫu khuôn mặt qua quản trị viên hoặc email hỗ trợ. Yêu cầu sẽ được xem xét với doanh nghiệp quản lý dữ liệu, gồm cả phạm vi có thể xóa và các nghĩa vụ lưu giữ liên quan.',
          'Xóa ứng dụng hoặc thu hồi quyền trên điện thoại không tự xóa dữ liệu đã được gửi lên máy chủ. Việc xóa phiên chatbot trong ứng dụng không tự chứng minh đã xóa mọi bản sao trên máy chủ AI nội bộ hoặc bản sao lưu. Liên hệ quản trị viên doanh nghiệp để biết phạm vi và quy trình xóa dữ liệu.',
        ]),
        section('choices', '7. Quyền và lựa chọn của bạn', [], [
          'Yêu cầu được thông tin về dữ liệu đang được xử lý, truy cập hoặc chỉnh sửa thông tin không chính xác, theo phạm vi pháp luật áp dụng.',
          'Yêu cầu xóa dữ liệu, hạn chế xử lý hoặc rút lại sự đồng ý trong những trường hợp áp dụng bằng cách liên hệ quản trị viên hoặc Edge Vision.',
          'Bật/tắt quyền camera, ảnh, vị trí và thông báo trong cài đặt iOS hoặc Android. Quyền bị từ chối có thể giới hạn tính năng tương ứng.',
          'Dùng chức năng xóa phiên chatbot nếu có trong phiên bản đang sử dụng. Liên hệ quản trị viên để làm rõ phạm vi xóa trên máy chủ AI nội bộ và bản sao lưu.',
        ]),
        section('security', '8. Truy cập và bảo vệ dữ liệu', [
          'Ứng dụng kết nối tới các dịch vụ backend qua HTTPS và sử dụng phiên xác thực cho các chức năng cần đăng nhập. Việc cấp quyền tài khoản và quản lý hạ tầng lưu trữ thuộc môi trường triển khai của doanh nghiệp.',
          'Bạn nên giữ kín thông tin đăng nhập, sử dụng thiết bị được bảo vệ và thông báo ngay cho quản trị viên khi nghi ngờ tài khoản bị truy cập trái phép. Không có phương thức truyền hoặc lưu trữ dữ liệu nào bảo đảm an toàn tuyệt đối.',
        ]),
        section('children', '9. Đối tượng sử dụng', [
          'Good Work phục vụ hoạt động công việc của các doanh nghiệp đăng ký sử dụng và không được thiết kế dành cho trẻ em. Doanh nghiệp quản lý điều kiện cấp tài khoản cho người dùng của mình.',
        ]),
        section('changes', '10. Thay đổi và liên hệ', [
          'Chính sách có thể được cập nhật khi tính năng hoặc cách xử lý dữ liệu thay đổi. Ngày cập nhật được hiển thị ở đầu trang. Với yêu cầu liên quan tới dữ liệu của doanh nghiệp, hãy ưu tiên liên hệ quản trị viên và có thể đồng thời liên hệ Edge Vision.',
          'Email: support@edgevision.io.vn. Khi gửi yêu cầu, nêu tên doanh nghiệp và loại yêu cầu; không gửi mật khẩu, mã OTP, ảnh khuôn mặt hoặc dữ liệu chấm công chi tiết trong email đầu tiên.',
        ]),
      ],
    },
    support: {
      title: 'Hỗ trợ Good Work',
      description: 'Liên hệ Edge Vision để được hỗ trợ đăng nhập, chấm công, công việc, chatbot và yêu cầu về dữ liệu trong ứng dụng Good Work.',
      intro: 'Tìm hướng xử lý cho các tình huống thường gặp hoặc liên hệ đội ngũ Edge Vision. Good Work dành cho các doanh nghiệp đăng ký sử dụng; quyền truy cập và tính năng phụ thuộc vào cấu hình của doanh nghiệp.',
      sections: [
        section('contact', 'Liên hệ đúng đầu mối', [
          'Với yêu cầu cấp tài khoản, quên mật khẩu, phân quyền hoặc điều chỉnh bản ghi chấm công, hãy liên hệ quản trị viên Good Work tại doanh nghiệp của bạn trước.',
          'Với lỗi ứng dụng hoặc câu hỏi về dịch vụ, gửi email tới support@edgevision.io.vn hoặc gọi số hỗ trợ bên dưới. Doanh nghiệp muốn đăng ký Good Work cũng có thể dùng các kênh này để được tư vấn.',
        ]),
        section('request', 'Thông tin giúp chúng tôi hỗ trợ bạn', [], [
          'Tên doanh nghiệp, tính năng gặp vấn đề và các bước dẫn tới lỗi.',
          'Phiên bản Good Work, loại thiết bị, phiên bản iOS/Android và thời điểm xảy ra lỗi.',
          'Mô tả kết quả mong đợi và kết quả thực tế; ảnh màn hình đã che thông tin cá nhân nếu cần.',
          'Không gửi mật khẩu, mã OTP, khóa truy cập, ảnh khuôn mặt hoặc dữ liệu vị trí chi tiết. Nếu cần dữ liệu bổ sung, đội hỗ trợ sẽ hướng dẫn kênh và phạm vi phù hợp.',
        ]),
        section('troubleshooting', 'Các tình huống thường gặp', [], [
          'Không đăng nhập được: kiểm tra kết nối, tên đăng nhập và liên hệ quản trị viên để kiểm tra tài khoản hoặc đặt lại mật khẩu.',
          'Không chấm công được: kiểm tra quyền camera và vị trí, bật vị trí chính xác, kiểm tra GPS/mạng rồi thực hiện lại. Nhờ quản trị viên kiểm tra địa điểm và quy tắc chấm công của doanh nghiệp.',
          'Không cập nhật được ảnh khuôn mặt: kiểm tra quyền camera/ảnh, chọn ảnh rõ khuôn mặt và thực hiện lại trong điều kiện đủ sáng.',
          'Không nhận thông báo: kiểm tra quyền thông báo của Good Work trong cài đặt thiết bị và cấu hình thông báo trong ứng dụng.',
          'Chatbot hoặc tệp đính kèm không phản hồi: kiểm tra mạng, thử lại yêu cầu và gửi mô tả lỗi cho hỗ trợ nếu tình trạng tiếp tục.',
        ]),
        section('data-requests', 'Yêu cầu về tài khoản và dữ liệu', [
          'Bạn có thể yêu cầu xem, chỉnh sửa hoặc xóa dữ liệu cá nhân, xóa tài khoản hoặc mẫu khuôn mặt qua quản trị viên doanh nghiệp hoặc email hỗ trợ. Nêu tên doanh nghiệp và loại yêu cầu để chúng tôi chuyển tới đúng đầu mối.',
          'Doanh nghiệp quản lý thời hạn lưu và xóa dữ liệu. Việc gỡ ứng dụng không tự xóa dữ liệu trên máy chủ; yêu cầu có thể cần xác minh danh tính và đối chiếu nghĩa vụ lưu giữ hồ sơ của doanh nghiệp.',
        ]),
        section('privacy', 'Hiểu cách dữ liệu được xử lý', [
          'Chính sách bảo mật giải thích việc sử dụng dữ liệu khuôn mặt, GPS, xử lý chatbot bằng AI nội bộ và các dịch vụ thông báo đẩy. Bạn có thể mở chính sách qua liên kết ở bên cạnh hoặc cuối trang.',
        ]),
      ],
    },
  },
  en: {
    product: 'Good Work app', back: 'Explore Good Work', contents: 'On this page',
    navigation: 'Good Work information', contact: 'Contact support',
    privacyLabel: 'Privacy policy', supportLabel: 'Good Work support',
    updated: 'Updated November 27, 2026', emailAction: 'Email support', phoneAction: 'Call Edge Vision',
    privacy: {
      title: 'Good Work privacy policy',
      description: 'How Good Work handles account information, attendance, face data, location and chatbot content in an enterprise environment.',
      intro: 'Good Work is a work management app for businesses that subscribe to the service. This policy explains the data processed, who can access it and how to request help with privacy.',
      sections: [
        section('responsibility', '1. Scope and responsibilities', [
          'Edge Vision provides Good Work. Each subscribing business manages its users, permissions and business records.',
          'Face data and GPS coordinates are stored on the subscribing business’s own infrastructure. The business determines retention and deletion according to its operations, service agreement and applicable legal obligations.',
          'Contact your business administrator or Edge Vision using the details below to ask about data handling in your deployment.',
        ]),
        section('data', '2. Data processed', [], [
          'Accounts and profiles: login information, user and business identifiers, roles, name, email, phone number, address and profile photo when provided.',
          'Work records: tasks, reports, photos, attachments, asset checkout/return information and other content you submit for work.',
          'Attendance: check-in/out times, face photos or reference images, verification results and GPS coordinates associated with attendance events.',
          'Chatbot: questions, conversation content, session history and images or documents you choose to attach.',
          'Notifications and sessions: push notification tokens, sign-in state and information needed to maintain your session.',
          'Support: your email address, contact information and the content you provide when asking for help.',
        ]),
        section('purposes', '3. How data is used', [], [
          'Authenticate users and control access by business, role and feature.',
          'Record attendance, verify faces/locations and show attendance history.',
          'Manage tasks, reports, assets and activities configured by the business.',
          'Process chatbot requests, retain conversation history and provide responses.',
          'Deliver work notifications, maintain sign-in sessions and respond to support requests.',
        ]),
        section('face-location', '4. Face data and location', [
          'When you update a face reference image or use photo attendance, the app captures a camera image or uses a photo you select and sends it to your business’s system for processing. This is face data you provide to Good Work.',
          'During attendance actions, the app requests location permission while in use and sends your coordinates with the attendance record. GPS use in this flow is tied to your attendance action.',
          'Face data and GPS coordinates stay on the business’s infrastructure and are not sent to third parties. They support attendance and related verification within the business’s system.',
          'You may decline or revoke permissions in your device settings and ask your administrator about a suitable attendance alternative. Features that need those permissions may become unavailable.',
        ]),
        section('sharing', '5. Internal AI processing and data sharing', [
          'Authorized people in your business can access records according to their permissions. The business controls access within its deployment.',
          'Good Work uses our own AI system running on the business’s servers. Questions, conversation content, relevant context and attached images/documents are processed on the business’s infrastructure and are not sent to third-party AI services.',
          'Chatbot content and session history are managed within the business’s system according to access permissions. Only include information needed for your work in conversations or attachments.',
          'Push notifications use Expo and Apple/Google platform services. Notification tokens and necessary notification data are processed to deliver messages to your device.',
          'Information may be disclosed to competent authorities when required by applicable legal obligations.',
        ]),
        section('retention', '6. Retention and deletion', [
          'Each business determines retention periods and deletion procedures. Good Work does not impose one period for every business. This covers account profiles, attendance, face data, GPS, reports, files and conversation history in the business’s system.',
          'Ask your administrator for specific periods, backup handling and records subject to legal retention. Stopping app use does not automatically erase business records managed by your business.',
          'You may request account, personal data or face reference deletion through your administrator or support email. Requests are reviewed with the business managing the data, including what can be erased and relevant retention obligations.',
          'Uninstalling the app or revoking device permissions does not delete data already sent to a server. Deleting a chatbot session in the app does not establish that all copies on internal AI servers or in backups have been erased. Ask your business administrator about the scope and procedure for deletion.',
        ]),
        section('choices', '7. Your rights and choices', [], [
          'Request information about processing, access to your data or correction of inaccurate information, as applicable under law.',
          'Request deletion, restricted processing or withdrawal of consent where applicable by contacting your administrator or Edge Vision.',
          'Control camera, photo, location and notification permissions in iOS/Android settings. Denying a permission may limit its related feature.',
          'Use chatbot session deletion where available in your app version. Ask your administrator about the scope of deletion on internal AI servers and backups.',
        ]),
        section('security', '8. Access and data protection', [
          'The app connects to backend services over HTTPS and uses authenticated sessions for features that require sign-in. Account permissions and storage infrastructure are managed within the business’s deployment.',
          'Keep login details private, protect your device and notify your administrator if you suspect unauthorized access. No transmission or storage method is completely secure.',
        ]),
        section('children', '9. Intended users', [
          'Good Work supports work activities at subscribing businesses and is not designed for children. Each business manages eligibility for its user accounts.',
        ]),
        section('changes', '10. Changes and contact', [
          'This policy may change as features or processing practices change. The update date appears at the top. Contact your business administrator about business-managed data; you may also contact Edge Vision.',
          'Email: support@edgevision.io.vn. Include your business name and request type. Do not include passwords, one-time codes, face photos or detailed attendance data in your initial email.',
        ]),
      ],
    },
    support: {
      title: 'Good Work support',
      description: 'Contact Edge Vision for help with Good Work sign-in, attendance, work records, chatbot and data requests.',
      intro: 'Find help for common issues or contact Edge Vision. Good Work serves subscribing businesses; access and features depend on your business’s configuration.',
      sections: [
        section('contact', 'Who to contact', [
          'For account setup, forgotten passwords, permissions or attendance corrections, contact your business’s Good Work administrator first.',
          'For app errors or service questions, email support@edgevision.io.vn or call the number below. Businesses interested in subscribing may also contact us through these channels.',
        ]),
        section('request', 'What to include in a support request', [], [
          'Your business name, the affected feature and steps that lead to the issue.',
          'Good Work version, device model, iOS/Android version and when the issue occurred.',
          'Expected and actual results; if useful, a screenshot with personal information hidden.',
          'Do not send passwords, one-time codes, access keys, face photos or detailed location data. Support will explain a suitable channel and scope if more information is needed.',
        ]),
        section('troubleshooting', 'Common issues', [], [
          'Cannot sign in: check connectivity and username, then ask your administrator to check the account or reset the password.',
          'Cannot record attendance: check camera and location permissions, enable precise location, check GPS/connectivity and try again. Ask your administrator to check workplace and attendance rules.',
          'Cannot update a face image: check camera/photo permissions and try a clear face image in good lighting.',
          'Missing notifications: check Good Work notification permissions in device settings and notification settings in the app.',
          'Chatbot or attachments do not respond: check connectivity, retry and contact support if the issue continues.',
        ]),
        section('data-requests', 'Account and data requests', [
          'Ask your business administrator or email support to access, correct or delete personal data, delete an account or remove a face reference. Include your business name and request type so we can direct it appropriately.',
          'Your business manages retention and deletion. Uninstalling does not erase server data; requests may require identity verification and review of business record-retention obligations.',
        ]),
        section('privacy', 'Understand data handling', [
          'Our privacy policy explains face data, GPS, internal AI processing of chatbot content and push notification services. Open it using the navigation or footer link.',
        ]),
      ],
    },
  },
  ja: {
    product: 'Good Workアプリ', back: 'Good Workを見る', contents: '目次',
    navigation: 'Good Workのご案内', contact: 'お問い合わせ',
    privacyLabel: 'プライバシーポリシー', supportLabel: 'Good Workサポート',
    updated: '更新日：2026年11月27日', emailAction: 'メールで問い合わせる', phoneAction: 'Edge Visionに電話する',
    privacy: {
      title: 'Good Workプライバシーポリシー',
      description: 'Good Workにおけるアカウント、勤怠、顔情報、位置情報、チャットボットのデータの取り扱いについて。',
      intro: 'Good Workはサービスを契約する企業向けの業務管理アプリです。本ポリシーでは、処理するデータ、アクセスできる者、およびプライバシーに関するお問い合わせ方法を説明します。',
      sections: [
        section('responsibility', '1. 適用範囲と役割', [
          'Edge VisionはGood Workを提供します。契約企業は所属ユーザーのアカウント、権限、業務データを管理します。',
          '顔情報とGPS座標は契約企業自身のインフラに保存されます。保存期間と削除は、企業の運用、サービス契約、適用法令上の義務に応じて企業が決定します。',
          'ご利用環境のデータの取り扱いについては、企業の管理者または本ページの連絡先までお問い合わせください。',
        ]),
        section('data', '2. 処理するデータ', [], [
          'アカウントとプロフィール：ログイン情報、ユーザー・企業ID、役割、および提供された氏名、メール、電話番号、住所、プロフィール画像。',
          '業務情報：タスク、報告、写真、添付ファイル、備品の貸出・返却、その他ユーザーが送信する業務コンテンツ。',
          '勤怠情報：出退勤時刻、顔写真・参照画像、認証結果、打刻に関連するGPS座標。',
          'チャットボット：質問、会話内容、セッション履歴、およびユーザーが添付する画像や文書。',
          '通知とセッション：プッシュ通知トークン、ログイン状態、セッション維持に必要な情報。',
          'サポート：お問い合わせ時に提供するメールアドレス、連絡先、内容。',
        ]),
        section('purposes', '3. 利用目的', [], [
          'ユーザー認証と、企業・役割・機能に基づくアクセス制御。',
          '勤怠記録、顔・位置の確認、勤怠履歴の表示。',
          '企業が設定するタスク、報告、備品、業務の管理。',
          'チャットボットへの要求の処理、会話履歴の保存、回答の提供。',
          '業務通知、ログインセッションの維持、サポート対応。',
        ]),
        section('face-location', '4. 顔情報と位置情報', [
          '顔の参照画像の更新や写真による打刻では、カメラ画像またはユーザーが選んだ写真を企業のシステムに送信して処理します。これはユーザーがGood Workに提供する顔情報です。',
          '打刻時にアプリ使用中の位置情報へのアクセスを求め、座標を勤怠記録とともに送信します。この処理でのGPS利用は打刻操作に伴うものです。',
          '顔情報とGPS座標は企業のインフラに保存し、第三者には送信しません。企業システム内の勤怠と関連する認証に使用します。',
          '端末設定で権限を拒否・取り消すことができます。代替の打刻方法は管理者にご相談ください。権限に依存する機能が利用できなくなる場合があります。',
        ]),
        section('sharing', '5. 社内AI処理とデータ共有', [
          '企業内の権限を持つ担当者は、権限の範囲で記録にアクセスできます。アクセス範囲は企業が管理します。',
          'Good Workは当社が提供するAIシステムを企業のサーバー上で実行します。質問、会話内容、関連するコンテキスト、添付画像・文書は企業のインフラ内で処理し、第三者のAIサービスには送信しません。',
          'チャットの内容とセッション履歴は、企業システム内でアクセス権に従って管理します。会話や添付には業務に必要な情報のみを含めてください。',
          'プッシュ通知はExpoとApple/Googleのサービスを利用し、通知トークンと配信に必要なデータを処理します。',
          '適用法令に基づく義務の履行に必要な場合、権限を持つ機関に情報を提供することがあります。',
        ]),
        section('retention', '6. 保存と削除', [
          '保存期間と削除手順は各企業が決め、Good Work共通の期間は設けていません。対象にはアカウント、勤怠、顔情報、GPS、報告、ファイル、企業システム内の会話履歴が含まれます。',
          '具体的な期間、バックアップ、法令上保存が必要な記録は管理者に確認してください。アプリの利用終了は、企業が管理する業務記録の自動削除を意味しません。',
          '管理者またはサポートメールを通じて、アカウント、個人データ、顔の参照画像の削除を申請できます。管理企業とともに削除可能な範囲と保存義務を確認します。',
          'アプリのアンインストールや権限の取り消しでは、送信済みのサーバーデータは削除されません。アプリ内のチャットセッション削除だけで、社内AIサーバーやバックアップ上のすべてのコピーが削除されたとは限りません。削除の範囲と手順は企業の管理者に確認してください。',
        ]),
        section('choices', '7. 権利と選択肢', [], [
          '適用法令に従い、処理の説明、データへのアクセス、不正確な情報の訂正を求めることができます。',
          '適用される場合、削除、処理の制限、同意の撤回を管理者またはEdge Visionに申請できます。',
          'iOS/Android設定でカメラ、写真、位置、通知の権限を管理できます。拒否すると関連機能が制限される場合があります。',
          '利用バージョンにあるチャットセッション削除機能を利用できます。社内AIサーバーとバックアップにおける削除範囲は管理者にご確認ください。',
        ]),
        section('security', '8. アクセスとデータ保護', [
          'アプリはHTTPSでバックエンドに接続し、ログインが必要な機能には認証済みセッションを使用します。アカウント権限と保存用インフラは企業の導入環境で管理されます。',
          'ログイン情報を秘密に保ち、端末を保護し、不正アクセスの疑いは管理者に報告してください。完全に安全な通信・保存方法はありません。',
        ]),
        section('children', '9. 対象ユーザー', [
          'Good Workは契約企業の業務向けで、子ども向けに設計されていません。アカウントの利用条件は各企業が管理します。',
        ]),
        section('changes', '10. 変更とお問い合わせ', [
          '機能やデータ処理の変更に応じて本ポリシーを更新することがあります。更新日はページ上部に表示します。企業が管理するデータは管理者に確認し、Edge Visionにもお問い合わせいただけます。',
          'メール：support@edgevision.io.vn。企業名と依頼の種類を記載してください。最初のメールにパスワード、ワンタイムコード、顔写真、詳細な勤怠情報を含めないでください。',
        ]),
      ],
    },
    support: {
      title: 'Good Workサポート',
      description: 'Good Workのログイン、勤怠、業務、チャットボット、データに関するお問い合わせ。',
      intro: 'よくある問題の対処方法をご確認いただくか、Edge Visionまでお問い合わせください。機能とアクセス権は契約企業の設定によって異なります。',
      sections: [
        section('contact', 'お問い合わせ先', [
          'アカウント発行、パスワード忘れ、権限、勤怠修正は、まず企業のGood Work管理者にご相談ください。',
          'アプリの不具合やサービスの質問はsupport@edgevision.io.vnまたは下記の電話番号へ。導入を希望する企業もこちらからご相談いただけます。',
        ]),
        section('request', 'お問い合わせに必要な情報', [], [
          '企業名、問題の機能、発生する操作手順。',
          'アプリのバージョン、端末機種、iOS/Androidのバージョン、発生時刻。',
          '期待した結果と実際の結果。必要に応じて個人情報を隠した画面画像。',
          'パスワード、ワンタイムコード、アクセスキー、顔写真、詳細な位置情報は送らないでください。追加情報が必要な場合は、担当者が適切な範囲と送信方法をご案内します。',
        ]),
        section('troubleshooting', 'よくある問題', [], [
          'ログインできない：接続とユーザー名を確認し、管理者にアカウント確認やパスワード再設定を依頼してください。',
          '打刻できない：カメラと位置の権限、正確な位置情報、GPSと通信を確認して再試行し、企業の打刻場所とルールを管理者に確認してください。',
          '顔画像を更新できない：カメラ・写真の権限を確認し、明るい場所で鮮明な画像を使用してください。',
          '通知が届かない：端末設定のGood Work通知権限とアプリ内設定を確認してください。',
          'チャットボットや添付が応答しない：通信を確認して再試行し、改善しなければサポートにご連絡ください。',
        ]),
        section('data-requests', 'アカウントとデータの申請', [
          '個人データの確認・訂正・削除、アカウント削除、顔の参照画像の削除は、管理者またはサポートメールにご依頼ください。企業名と依頼内容を記載してください。',
          '保存と削除は企業が管理します。アンインストールではサーバーデータは消去されません。本人確認と業務記録の保存義務の確認が必要な場合があります。',
        ]),
        section('privacy', 'データの取り扱いについて', [
          '顔情報、GPS、社内AIによるチャットボット処理、プッシュ通知サービスについては、ナビゲーションまたはフッターからプライバシーポリシーをご確認ください。',
        ]),
      ],
    },
  },
};

export const getGoodworkDocs = (locale) => goodworkDocs[getLocale(locale)];
