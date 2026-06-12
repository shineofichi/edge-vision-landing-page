export const defaultLocale = "vi";
export const locales = ["vi", "en", "ja"];
export const secondaryLocales = ["en", "ja"];
export const pageKeys = ["home", "goodwork"];

export const siteConfig = {
  siteUrl: "https://edgevision.io.vn",
  siteName: "Edge Vision",
  goodworkUrl: "https://goodwork.io.vn/",
  linkedinUrl: "https://www.linkedin.com/company/edge-vision-vn/",
  supportEmail: "support@edgevision.io.vn",
  phoneNumber: "+84 383 341 242",
  addressLocality: "Ha Noi",
  addressCountry: "VN",
  logoPath: "/ev-logo.svg",
  defaultOgImage: "/imagery/hero-enterprise.jpg",
  goodworkOgImage: "/imagery/operations.jpg",
  defaultOgImageWidth: 1440,
  defaultOgImageHeight: 1080,
  goodworkOgImageWidth: 1200,
  goodworkOgImageHeight: 900,
};

export const languageOptions = [
  { code: "vi", label: "VI" },
  { code: "en", label: "EN" },
  { code: "ja", label: "JA" },
];

const localeHtmlMap = {
  vi: "vi",
  en: "en",
  ja: "ja",
};

const localeOgMap = {
  vi: "vi_VN",
  en: "en_US",
  ja: "ja_JP",
};

export const translations = {
  vi: {
    seo: {
      home: {
        title: "Edge Vision - Giải pháp AI cho doanh nghiệp",
        description:
          "Edge Vision cung cấp giải pháp AI cho doanh nghiệp Việt với chiến lược, triển khai và vận hành trên hạ tầng chủ động.",
      },
      goodwork: {
        title: "Good Work - Giải pháp AI toàn diện cho doanh nghiệp",
        description:
          "Good Work là nền tảng quản trị từ Edge Vision, giúp doanh nghiệp vận hành nhân sự, báo cáo và chăm sóc khách hàng trong một nhịp thống nhất.",
      },
    },
    navbar: {
      brandTagline: "AI thực dụng cho doanh nghiệp Việt",
      links: [
        { name: "Trang chủ", href: "/" },
        { name: "Giải pháp", href: "/#products" },
        { name: "Đội ngũ", href: "/#team" },
        { name: "Liên hệ", href: "/#contact" },
      ],
      cta: "Đặt lịch tư vấn",
      openMenu: "Mở menu",
      closeMenu: "Đóng menu",
      languageLabel: "Ngôn ngữ",
    },
    hero: {
      kicker: "AI thực dụng cho doanh nghiệp Việt",
      title:
        "Đưa AI vào vận hành mà vẫn giữ quyền chủ động với dữ liệu và quy trình.",
      description:
        "Thiết kế và vận hành hệ thống AI giúp SME tự chủ dữ liệu, giảm việc lặp và ra quyết định nhanh hơn.",
      primaryCta: "Xem giải pháp",
      secondaryCta: "Đặt lịch tư vấn",
      heroAlt:
        "Không gian công nghệ hiện đại gợi cảm giác điều phối và kiểm soát hạ tầng.",
      signals: [
        {
          title: "Triển khai trên hạ tầng chủ động",
          body: "Giữ dữ liệu quan trọng bên trong hệ thống doanh nghiệp thay vì đẩy toàn bộ ra bên ngoài.",
        },
        {
          title: "Tư vấn từ chiến lược đến vận hành",
          body: "Đội ngũ đi cùng từ lúc xác định bài toán cho tới khi nhân sự nội bộ vận hành ổn định.",
        },
        {
          title: "Tích hợp vào quy trình đang chạy",
          body: "CRM, báo cáo, chăm sóc khách hàng và tác vụ nội bộ được kết nối theo từng nhu cầu thực tế.",
        },
      ],
      operatingModes: [
        "Khảo sát hiện trạng và chọn đúng bài toán AI để làm trước",
        "Thiết kế luồng triển khai phù hợp với quy mô SME",
        "Bàn giao để đội nội bộ dùng được ngay sau giai đoạn thử nghiệm",
      ],
    },
    products: {
      kicker: "Năng lực triển khai",
      title:
        "Chúng tôi thiết kế sản phẩm, quy trình và hạ tầng để AI thật sự đi vào công việc hằng ngày.",
      description:
        "Mỗi giải pháp được xây quanh một nhiệm vụ cụ thể. Từ sản phẩm cho đội vận hành đến lớp hạ tầng riêng cho dữ liệu nội bộ.",
      featuredLabel: "Sản phẩm nổi bật",
      featuredTitle: "Good Work",
      featuredDescription:
        "Nền tảng quản trị cho doanh nghiệp đang cần gom nhân sự, chấm công, báo cáo và chăm sóc khách hàng vào một nhịp làm việc thống nhất.",
      featuredPoints: [
        {
          title: "Quy trình nội bộ",
          body: "Tự động hóa chấm công, báo cáo, nhắc việc và theo dõi tiến độ.",
        },
        {
          title: "Tăng tốc quyết định",
          body: "Thông tin được gom lại thành báo cáo rõ ràng cho quản lý và chủ doanh nghiệp.",
        },
      ],
      featuredPrimaryCta: "Xem Good Work",
      featuredSecondaryCta: "Trang sản phẩm",
      featureAlt: "Không gian làm việc với cảm giác tập trung và cộng tác.",
      sideCards: [
        {
          title: "AI Consultant",
          description:
            "Đồng hành cùng ban vận hành để chốt use case, ưu tiên lộ trình và kiểm soát chi phí triển khai.",
          points: [
            "Workshop theo từng phòng ban",
            "Đánh giá dữ liệu sẵn có",
            "Roadmap triển khai rõ bước tiếp theo",
          ],
          cta: "Đặt lịch tư vấn",
        },
        {
          title: "Private Infrastructure",
          description:
            "Dựng môi trường đủ an toàn để mô hình, dữ liệu và quy trình nội bộ không bị lệ thuộc vào một nhà cung cấp duy nhất.",
          points: [
            "Mô hình private hoặc hybrid",
            "Phân quyền theo đội nhóm",
            "Theo dõi chi phí và hiệu năng",
          ],
          cta: "Trao đổi hạ tầng",
        },
      ],
      bottomCards: [
        {
          title: "Mô hình phù hợp",
          body: "Chọn đúng loại mô hình cho bài toán thay vì lắp ghép theo xu hướng.",
        },
        {
          title: "Tích hợp có kiểm soát",
          body: "Kết nối vào ERP, CRM hoặc quy trình nội bộ mà không làm gãy nhịp vận hành hiện có.",
        },
        {
          title: "Bàn giao minh bạch",
          body: "Doanh nghiệp nắm được cách vận hành, chi phí và điều kiện mở rộng sau giai đoạn đầu.",
        },
      ],
    },
    team: {
      title:
        "Một đội ngũ nhỏ, nhưng đủ gần với sản phẩm để đi cùng doanh nghiệp từ lúc thử nghiệm đến khi vận hành.",
      description:
        "Edge Vision kết hợp kỹ năng AI, mobile và fullstack để biến yêu cầu vận hành thành sản phẩm dùng được ngay trong thực tế.",
      principles: [
        "Ưu tiên bài toán có thể đo hiệu quả sau khi triển khai",
        "Làm cùng đội vận hành thay vì chỉ bàn giao tài liệu",
        "Chọn công nghệ dựa trên mức phù hợp với doanh nghiệp",
      ],
      featuredRoleLabel: "Lãnh đạo sản phẩm",
      featuredDescription:
        "Giữ vai trò kết nối giữa nhu cầu thực tế của doanh nghiệp với hướng triển khai sản phẩm, dữ liệu và hạ tầng.",
      members: [
        {
          name: "Hoàng Tiến Đức",
          role: "CEO",
          img: "/members/hoang-tien-duc.png",
        },
        {
          name: "Nguyễn Duy Thăng",
          role: "Lập trình viên Fullstack",
          img: "/members/nguyen-duy-thang.png",
        },
        {
          name: "Trương Tuấn Anh",
          role: "Lập trình viên Mobile",
          img: "/members/truong-tuan-anh.png",
        },
        {
          name: "Đỗ Danh Phương",
          role: "Nghiên cứu AI",
          img: "/members/do-danh-phuong.png",
        },
        {
          name: "Hoàng Mạnh Đoàn",
          role: "Nghiên cứu AI",
          img: "/members/hoang-manh-doan.png",
        },
        {
          name: "Peter X",
          role: "Nghiên cứu AI",
          img: "/members/ngo-xuan-loc.png",
        },
      ],
    },
    contact: {
      title:
        "Bắt đầu bằng một buổi tư vấn ngắn và đi thẳng vào bài toán đang cần giải.",
      description:
        "Nếu doanh nghiệp đang cân nhắc AI nhưng chưa rõ nên bắt đầu từ đâu, chúng tôi sẽ cùng rà lại quy trình và mức ưu tiên trước khi đề xuất giải pháp.",
      details: [
        { title: "Email", content: siteConfig.supportEmail },
        { title: "Hotline", content: siteConfig.phoneNumber },
        { title: "Làm việc", content: "Hà Nội, Việt Nam" },
      ],
      supportFlow: [
        {
          title: "Phản hồi rõ ràng",
          description:
            "Chúng tôi phản hồi với hướng xử lý cụ thể, không gửi một câu trả lời chung chung.",
        },
        {
          title: "Bắt đầu từ dữ liệu hiện có",
          description:
            "Buổi làm việc đầu tiên tập trung vào quy trình, dữ liệu và giới hạn vận hành hiện tại.",
        },
      ],
      formTitle:
        "Để lại thông tin để chúng tôi chuẩn bị buổi làm việc phù hợp.",
      formDescription:
        "Mô tả ngắn về đội ngũ, quy trình hoặc bài toán bạn muốn tự động hóa. Điều đó giúp cuộc trao đổi đầu tiên đi đúng trọng tâm hơn.",
      subject: "Liên hệ mới từ Edge Vision",
      nameLabel: "Họ và tên",
      emailLabel: "Email",
      messageLabel: "Doanh nghiệp đang cần gì",
      namePlaceholder: "Nguyễn Văn A",
      emailPlaceholder: "email@doanhnghiep.vn",
      messagePlaceholder:
        "Ví dụ: cần tự động hóa báo cáo, hỗ trợ chăm sóc khách hàng, hoặc muốn triển khai mô hình trên hạ tầng nội bộ.",
      submitIdle: "Gửi yêu cầu",
      submitSending: "Đang gửi yêu cầu",
      successTitle: "Đã gửi yêu cầu thành công",
      successBody:
        "Cảm ơn bạn đã để lại thông tin. Đội ngũ Edge Vision sẽ phản hồi trong thời gian sớm nhất.",
      successButton: "Gửi thêm thông tin",
      errorMessage:
        "Có lỗi xảy ra trong lúc gửi biểu mẫu. Vui lòng thử lại sau hoặc liên hệ qua email.",
    },
    footer: {
      brandLine: "Thiết kế, triển khai và vận hành AI cho doanh nghiệp.",
      description:
        "Chúng tôi ưu tiên những hệ thống có thể đi vào công việc hằng ngày, dễ bàn giao và giữ được quyền chủ động với dữ liệu.",
      navTitle: "Điều hướng",
      connectTitle: "Kết nối",
      cta: "Đặt lịch tư vấn",
      links: [
        { name: "Good Work", href: "/goodwork" },
        { name: "Giải pháp", href: "/#products" },
        { name: "Đội ngũ", href: "/#team" },
        { name: "Liên hệ", href: "/#contact" },
      ],
      copyright: "All rights reserved.",
    },
    goodworkHero: {
      kicker: "Nền tảng vận hành từ Edge Vision",
      title:
        "Good Work gom vận hành, nhân sự và báo cáo vào một nhịp làm việc gọn hơn.",
      description:
        "Một ứng dụng quản trị dành cho doanh nghiệp cần theo dõi con người, công việc và tăng trưởng mà không phải ghép nhiều công cụ rời.",
      primaryCta: "Tải trên Google Play",
      secondaryCta: "Đặt lịch tư vấn",
      highlights: [
        "Quản trị nhân sự, công việc và dữ liệu vận hành trên cùng một nền tảng",
        "Tự động hóa các báo cáo và nhịp chăm sóc khách hàng cho đội ngũ đang tăng trưởng",
        "Phù hợp với doanh nghiệp cần triển khai nhanh nhưng vẫn kiểm soát quy trình nội bộ",
      ],
      productSite: "Xem trang sản phẩm",
      imageAlt:
        "Khung cảnh làm việc cộng tác gợi tinh thần vận hành tập trung.",
    },
    goodworkFeatures: {
      kicker: "Khả năng cốt lõi",
      title:
        "Good Work được thiết kế cho các đội đang lớn lên nhanh hơn năng lực quản trị hiện tại.",
      description:
        "Thay vì thêm nhiều công cụ rời, nền tảng gom lại những phần việc quan trọng nhất để doanh nghiệp nhìn rõ vận hành mỗi ngày.",
      items: [
        {
          title: "Quản lý nhân sự",
          description:
            "Tập trung hồ sơ, nhiệm vụ và đánh giá năng lực để chủ doanh nghiệp không phải theo dõi qua nhiều bảng tính.",
        },
        {
          title: "Chấm công AI FaceID",
          description:
            "Nhận diện khuôn mặt để chấm công nhanh, giảm gian lận và hạn chế thao tác thủ công tại điểm danh.",
        },
        {
          title: "Báo cáo tự động",
          description:
            "Tạo báo cáo doanh thu, chi phí và năng suất từ dữ liệu thực tế để người quản lý xem ngay khi cần.",
        },
        {
          title: "Chăm sóc khách hàng",
          description:
            "Theo dõi hành trình bán hàng, nhắc việc và chuẩn hóa quy trình phản hồi trong cùng một ứng dụng.",
        },
      ],
    },
    goodworkCta: {
      title:
        "Muốn xem Good Work có phù hợp với nhịp vận hành hiện tại của doanh nghiệp hay không?",
      description:
        "Bạn có thể tải ứng dụng để xem luồng sử dụng cơ bản hoặc đặt lịch với đội ngũ Edge Vision để trao đổi về quy trình cần triển khai trước.",
      primaryCta: "Tải trên Google Play",
      secondaryCta: "Đặt lịch tư vấn",
    },
  },
  en: {
    seo: {
      home: {
        title: "Edge Vision - AI solutions for business",
        description:
          "Edge Vision delivers practical AI systems for Vietnamese businesses, from strategy and deployment to operation on controlled infrastructure.",
      },
      goodwork: {
        title: "Good Work - An integrated AI operations platform",
        description:
          "Good Work is Edge Vision’s management platform for companies that want HR, reporting, and customer follow-up in one operational rhythm.",
      },
    },
    navbar: {
      brandTagline: "Practical AI for Vietnamese businesses",
      links: [
        { name: "Home", href: "/" },
        { name: "Solutions", href: "/#products" },
        { name: "Team", href: "/#team" },
        { name: "Contact", href: "/#contact" },
      ],
      cta: "Book a consultation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      languageLabel: "Language",
    },
    hero: {
      kicker: "Practical AI for Vietnamese businesses",
      title:
        "Bring AI into daily operations without losing control of data and workflow.",
      description:
        "We design and run AI systems that help SMEs keep data ownership, reduce repetitive work, and decide faster.",
      primaryCta: "Explore solutions",
      secondaryCta: "Book a consultation",
      heroAlt:
        "A modern technology space that suggests coordination and infrastructure control.",
      signals: [
        {
          title: "Deployment on controlled infrastructure",
          body: "Keep sensitive data inside your own environment instead of pushing everything to an external platform.",
        },
        {
          title: "Support from strategy to operations",
          body: "Our team stays involved from problem framing to stable day-to-day use by your internal staff.",
        },
        {
          title: "Integration into real workflows",
          body: "CRM, reporting, customer support, and internal tasks are connected around what the business actually needs.",
        },
      ],
      operatingModes: [
        "Assess the current process and choose the right AI problem to solve first",
        "Design a rollout that fits the scale and pace of an SME",
        "Hand over a system your internal team can use right after the pilot stage",
      ],
    },
    products: {
      kicker: "Delivery capability",
      title:
        "We shape products, workflows, and infrastructure so AI becomes part of daily work.",
      description:
        "Each solution is built around a concrete operational task, from team-facing products to private data infrastructure.",
      featuredLabel: "Featured product",
      featuredTitle: "Good Work",
      featuredDescription:
        "An operations platform for companies that need HR, attendance, reporting, and customer follow-up to run in one clear rhythm.",
      featuredPoints: [
        {
          title: "Internal workflow",
          body: "Automate attendance, reporting, reminders, and progress tracking across the team.",
        },
        {
          title: "Faster decisions",
          body: "Turn fragmented information into reports that managers and founders can act on quickly.",
        },
      ],
      featuredPrimaryCta: "View Good Work",
      featuredSecondaryCta: "Product site",
      featureAlt: "A workspace scene with a focused and collaborative mood.",
      sideCards: [
        {
          title: "AI Consultant",
          description:
            "Work with operations leaders to define the right use case, set priorities, and control rollout cost.",
          points: [
            "Workshops by department",
            "Review existing data sources",
            "A roadmap with the next step clearly defined",
          ],
          cta: "Book a consultation",
        },
        {
          title: "Private Infrastructure",
          description:
            "Build an environment where models, data, and internal workflows are not locked into a single outside vendor.",
          points: [
            "Private or hybrid deployment",
            "Role-based access by team",
            "Visibility into cost and performance",
          ],
          cta: "Discuss infrastructure",
        },
      ],
      bottomCards: [
        {
          title: "Fit-for-purpose models",
          body: "Choose the model that matches the job instead of assembling tools around a trend.",
        },
        {
          title: "Controlled integration",
          body: "Connect AI into ERP, CRM, or internal workflows without breaking the existing operating rhythm.",
        },
        {
          title: "Transparent handoff",
          body: "Your team understands how to run, scale, and budget the system after the initial phase.",
        },
      ],
    },
    team: {
      title:
        "A compact team that stays close enough to the product to support businesses from pilot to live operation.",
      description:
        "Edge Vision combines AI, mobile, and fullstack capability to turn operating needs into products people can use right away.",
      principles: [
        "Start with problems that can be measured after launch",
        "Work alongside operators instead of only handing over documents",
        "Choose technology based on business fit, not trend value",
      ],
      featuredRoleLabel: "Product leadership",
      featuredDescription:
        "Connects real business needs with the product, data, and infrastructure decisions behind the rollout.",
      members: [
        {
          name: "Hoàng Tiến Đức",
          role: "CEO",
          img: "/members/hoang-tien-duc.png",
        },
        {
          name: "Nguyễn Duy Thăng",
          role: "Fullstack Developer",
          img: "/members/nguyen-duy-thang.png",
        },
        {
          name: "Trương Tuấn Anh",
          role: "Mobile Developer",
          img: "/members/truong-tuan-anh.png",
        },
        {
          name: "Đỗ Danh Phương",
          role: "AI Researcher",
          img: "/members/do-danh-phuong.png",
        },
        {
          name: "Hoàng Mạnh Đoàn",
          role: "AI Researcher",
          img: "/members/hoang-manh-doan.png",
        },
        {
          name: "Peter X",
          role: "AI Researcher",
          img: "/members/ngo-xuan-loc.png",
        },
      ],
    },
    contact: {
      title:
        "Start with a short consultation focused on the operational problem that matters right now.",
      description:
        "If your company is considering AI but does not know where to begin, we can review the workflow and priorities before recommending a solution.",
      details: [
        { title: "Email", content: siteConfig.supportEmail },
        { title: "Hotline", content: siteConfig.phoneNumber },
        { title: "Based in", content: "Ha Noi, Vietnam" },
      ],
      supportFlow: [
        {
          title: "Clear response",
          description:
            "We reply with a concrete direction, not a generic follow-up message.",
        },
        {
          title: "Start from existing data",
          description:
            "The first session focuses on your workflow, available data, and current operating limits.",
        },
      ],
      formTitle:
        "Leave a short brief so we can prepare a conversation that fits your team.",
      formDescription:
        "Share a few lines about your workflow, team, or automation target. That helps the first conversation go straight to the point.",
      subject: "New inquiry from Edge Vision website",
      nameLabel: "Full name",
      emailLabel: "Email",
      messageLabel: "What does your business need",
      namePlaceholder: "Nguyen Van A",
      emailPlaceholder: "email@company.vn",
      messagePlaceholder:
        "Example: automate reporting, improve customer support, or deploy a model on internal infrastructure.",
      submitIdle: "Send request",
      submitSending: "Sending request",
      successTitle: "Your request has been sent",
      successBody:
        "Thank you for reaching out. The Edge Vision team will get back to you as soon as possible.",
      successButton: "Send another request",
      errorMessage:
        "Something went wrong while sending the form. Please try again later or contact us by email.",
    },
    footer: {
      brandLine:
        "Designing, deploying, and operating AI systems for business teams.",
      description:
        "We focus on systems that can be used every day, handed over cleanly, and still keep the company in control of its data.",
      navTitle: "Navigation",
      connectTitle: "Connect",
      cta: "Book a consultation",
      links: [
        { name: "Good Work", href: "/en/goodwork" },
        { name: "Solutions", href: "/en/#products" },
        { name: "Team", href: "/en/#team" },
        { name: "Contact", href: "/en/#contact" },
      ],
      copyright: "All rights reserved.",
    },
    goodworkHero: {
      kicker: "An operations platform from Edge Vision",
      title:
        "Good Work brings operations, people, and reporting into one cleaner working rhythm.",
      description:
        "A management app for companies that need to track people, work, and growth without stitching together too many separate tools.",
      primaryCta: "Get it on Google Play",
      secondaryCta: "Book a consultation",
      highlights: [
        "Manage people, work, and operational data in one connected platform",
        "Automate reporting and customer follow-up for teams that are growing fast",
        "Built for companies that need quick deployment without losing control of internal process",
      ],
      productSite: "Visit the product site",
      imageAlt:
        "A collaborative work setting that reflects a focused operational rhythm.",
    },
    goodworkFeatures: {
      kicker: "Core capabilities",
      title:
        "Good Work is designed for teams growing faster than their current operating system.",
      description:
        "Instead of adding more disconnected tools, the platform pulls key workflows together so the business can see what is happening each day.",
      items: [
        {
          title: "Workforce management",
          description:
            "Keep profiles, assignments, and performance evaluation in one place instead of across scattered spreadsheets.",
        },
        {
          title: "AI FaceID attendance",
          description:
            "Use face recognition for faster attendance tracking while reducing fraud and manual check-in work.",
        },
        {
          title: "Automated reporting",
          description:
            "Generate revenue, cost, and productivity reports from live data so managers can review them on demand.",
        },
        {
          title: "Customer follow-up",
          description:
            "Track the sales journey, reminders, and response flow inside the same application.",
        },
      ],
    },
    goodworkCta: {
      title:
        "Want to see whether Good Work fits the way your business operates today?",
      description:
        "You can install the app to explore the basic workflow or schedule a session with Edge Vision to discuss where rollout should start.",
      primaryCta: "Get it on Google Play",
      secondaryCta: "Book a consultation",
    },
  },
  ja: {
    seo: {
      home: {
        title: "Edge Vision - 企業向けAIソリューション",
        description:
          "Edge Visionは、戦略から導入・運用まで、主導権を保てるインフラ上で実用的なAIを提供します。",
      },
      goodwork: {
        title: "Good Work - 統合型AI業務プラットフォーム",
        description:
          "Good Workは、人事、レポート、顧客フォローを一つの業務リズムにまとめるEdge Visionの管理プラットフォームです。",
      },
    },
    navbar: {
      brandTagline: "ベトナム企業のための実用的なAI",
      links: [
        { name: "ホーム", href: "/" },
        { name: "ソリューション", href: "/#products" },
        { name: "チーム", href: "/#team" },
        { name: "お問い合わせ", href: "/#contact" },
      ],
      cta: "相談を予約",
      openMenu: "メニューを開く",
      closeMenu: "メニューを閉じる",
      languageLabel: "言語",
    },
    hero: {
      kicker: "ベトナム企業のための実用的なAI",
      title:
        "データと業務フローの主導権を保ったまま、AIを日常業務に組み込みます。",
      description:
        "SMEがデータ所有権を保ち、反復作業を減らし、より速く意思決定できるAI基盤を設計・運用します。",
      primaryCta: "ソリューションを見る",
      secondaryCta: "相談を予約",
      heroAlt: "統制されたインフラ運用を連想させるモダンなテクノロジー空間。",
      signals: [
        {
          title: "主導権を持てるインフラ構成",
          body: "重要なデータを外部サービスへ全面的に預けず、自社の環境内で扱えるようにします。",
        },
        {
          title: "戦略から運用まで伴走",
          body: "課題整理から社内チームによる安定運用まで、私たちが継続して支援します。",
        },
        {
          title: "実際の業務フローへ統合",
          body: "CRM、レポート、顧客対応、社内タスクを実務に合わせて一つの流れにつなげます。",
        },
      ],
      operatingModes: [
        "現状を確認し、最初に解くべきAI課題を見極める",
        "SMEの規模に合った導入フローを設計する",
        "検証後すぐに社内チームが使える形で引き渡す",
      ],
    },
    products: {
      kicker: "導入力",
      title:
        "AIが日々の仕事に入るように、プロダクト・業務・インフラを一体で設計します。",
      description:
        "各ソリューションは具体的な業務課題を起点に設計され、現場向けプロダクトから専用インフラまで対応します。",
      featuredLabel: "注目プロダクト",
      featuredTitle: "Good Work",
      featuredDescription:
        "人事、勤怠、レポート、顧客フォローを一つのリズムで回したい企業向けの業務管理プラットフォームです。",
      featuredPoints: [
        {
          title: "社内ワークフロー",
          body: "勤怠、レポート、リマインダー、進捗管理を自動化し、運用負荷を下げます。",
        },
        {
          title: "意思決定を高速化",
          body: "分散した情報を、経営層がすぐ使えるレポートへまとめます。",
        },
      ],
      featuredPrimaryCta: "Good Workを見る",
      featuredSecondaryCta: "製品サイト",
      featureAlt: "集中と協働の空気が伝わるワークスペースの風景。",
      sideCards: [
        {
          title: "AI Consultant",
          description:
            "運用責任者と一緒にユースケースを定め、優先順位と導入コストを整理します。",
          points: [
            "部門ごとのワークショップ",
            "既存データの確認",
            "次の一手が明確なロードマップ",
          ],
          cta: "相談を予約",
        },
        {
          title: "Private Infrastructure",
          description:
            "モデル、データ、業務フローを単一の外部ベンダーに縛られない形で運用できる環境を構築します。",
          points: [
            "プライベートまたはハイブリッド構成",
            "チーム単位の権限制御",
            "コストと性能の可視化",
          ],
          cta: "インフラを相談",
        },
      ],
      bottomCards: [
        {
          title: "目的に合うモデル選定",
          body: "流行に合わせるのではなく、業務に合うモデルを選びます。",
        },
        {
          title: "制御しやすい統合",
          body: "ERP、CRM、社内フローへ無理なくつなぎ、既存の運用リズムを壊しません。",
        },
        {
          title: "透明な引き継ぎ",
          body: "初期導入後も、自社チームが運用・拡張・予算管理を理解できる状態にします。",
        },
      ],
    },
    team: {
      title:
        "小さなチームですが、検証から本番運用までプロダクトの近くで伴走できる距離感があります。",
      description:
        "Edge VisionはAI、モバイル、フルスタックの力を組み合わせ、運用課題をすぐ使えるプロダクトに変えます。",
      principles: [
        "導入後に効果測定できる課題から始める",
        "資料だけ渡すのではなく現場と一緒に進める",
        "流行ではなく事業適合性で技術を選ぶ",
      ],
      featuredRoleLabel: "プロダクトリード",
      featuredDescription:
        "現場の課題と、プロダクト・データ・インフラの設計判断をつなぐ役割を担います。",
      members: [
        {
          name: "Hoàng Tiến Đức",
          role: "CEO",
          img: "/members/hoang-tien-duc.png",
        },
        {
          name: "Nguyễn Duy Thăng",
          role: "フルスタック開発",
          img: "/members/nguyen-duy-thang.png",
        },
        {
          name: "Trương Tuấn Anh",
          role: "モバイル開発",
          img: "/members/truong-tuan-anh.png",
        },
        {
          name: "Đỗ Danh Phương",
          role: "AIリサーチ",
          img: "/members/do-danh-phuong.png",
        },
        {
          name: "Hoàng Mạnh Đoàn",
          role: "AIリサーチ",
          img: "/members/hoang-manh-doan.png",
        },
        {
          name: "Peter X",
          role: "AIリサーチ",
          img: "/members/ngo-xuan-loc.png",
        },
      ],
    },
    contact: {
      title:
        "まずは短い相談から始めて、今いちばん重要な業務課題に絞って話します。",
      description:
        "AI導入を検討していても、どこから始めるべきか分からない場合は、業務フローと優先順位を一緒に整理します。",
      details: [
        { title: "メール", content: siteConfig.supportEmail },
        { title: "ホットライン", content: siteConfig.phoneNumber },
        { title: "拠点", content: "ハノイ、ベトナム" },
      ],
      supportFlow: [
        {
          title: "明確な返信",
          description:
            "一般的な返答ではなく、次に何をするかが分かる形でお返しします。",
        },
        {
          title: "既存データから開始",
          description:
            "最初の打ち合わせでは、現在の業務、使えるデータ、運用上の制約を確認します。",
        },
      ],
      formTitle:
        "チームに合った打ち合わせを準備できるよう、短く状況を教えてください。",
      formDescription:
        "業務フロー、チーム構成、自動化したい内容を数行で共有いただければ、最初の会話をより具体的に進められます。",
      subject: "Edge Vision ウェブサイトからの新規お問い合わせ",
      nameLabel: "お名前",
      emailLabel: "メール",
      messageLabel: "企業が必要としていること",
      namePlaceholder: "Nguyen Van A",
      emailPlaceholder: "email@company.vn",
      messagePlaceholder:
        "例: レポートの自動化、顧客対応の改善、社内インフラ上でのモデル運用など。",
      submitIdle: "送信する",
      submitSending: "送信中",
      successTitle: "お問い合わせを受け付けました",
      successBody:
        "ご連絡ありがとうございます。Edge Visionチームよりできるだけ早くご返信します。",
      successButton: "もう一度送信",
      errorMessage:
        "フォーム送信中に問題が発生しました。時間をおいて再度お試しいただくか、メールでご連絡ください。",
    },
    footer: {
      brandLine: "企業向けAIの設計、導入、運用を一気通貫で支援します。",
      description:
        "私たちは、日常業務で使え、引き継ぎしやすく、データの主導権を企業側に残せる仕組みを重視しています。",
      navTitle: "ナビゲーション",
      connectTitle: "つながる",
      cta: "相談を予約",
      links: [
        { name: "Good Work", href: "/ja/goodwork" },
        { name: "ソリューション", href: "/ja/#products" },
        { name: "チーム", href: "/ja/#team" },
        { name: "お問い合わせ", href: "/ja/#contact" },
      ],
      copyright: "All rights reserved.",
    },
    goodworkHero: {
      kicker: "Edge Visionの業務プラットフォーム",
      title:
        "Good Workは、運用・人材・レポートを一つの分かりやすい業務リズムにまとめます。",
      description:
        "人、仕事、成長を追いかけたい企業向けに、複数のツールを無理に組み合わせずに使える管理アプリです。",
      primaryCta: "Google Playで入手",
      secondaryCta: "相談を予約",
      highlights: [
        "人材管理、業務、運用データを一つのプラットフォームでつなぐ",
        "成長中のチーム向けにレポートと顧客フォローを自動化する",
        "社内プロセスの主導権を保ったまま素早く導入できる",
      ],
      productSite: "製品サイトを見る",
      imageAlt: "集中した運用の空気を感じさせる協働のワークシーン。",
    },
    goodworkFeatures: {
      kicker: "主要機能",
      title:
        "Good Workは、現在の運用体制より速く成長しているチームのために設計されています。",
      description:
        "バラバラなツールを増やす代わりに、重要な業務を一つにまとめ、毎日の状況を見える化します。",
      items: [
        {
          title: "人材管理",
          description:
            "プロフィール、タスク、評価を一元管理し、散らばった表計算の負担を減らします。",
        },
        {
          title: "AI FaceID勤怠",
          description:
            "顔認識で打刻を素早く行い、不正や手作業による運用負荷を抑えます。",
        },
        {
          title: "自動レポート",
          description:
            "売上、コスト、生産性レポートを実データから生成し、必要な時にすぐ確認できます。",
        },
        {
          title: "顧客フォロー",
          description:
            "商談の流れ、リマインダー、対応プロセスを同じアプリ内で管理します。",
        },
      ],
    },
    goodworkCta: {
      title: "Good Workが今の業務の進め方に合うか、試してみませんか。",
      description:
        "アプリを導入して基本フローを確認することも、Edge Visionと打ち合わせして導入開始点を整理することもできます。",
      primaryCta: "Google Playで入手",
      secondaryCta: "相談を予約",
    },
  },
};

export const isValidLocale = (locale) => locales.includes(locale);

export const getLocale = (locale) =>
  isValidLocale(locale) ? locale : defaultLocale;

export const getLocaleHtml = (locale) => localeHtmlMap[getLocale(locale)];

export const getOgLocale = (locale) => localeOgMap[getLocale(locale)];

export const getMessages = (locale) => translations[getLocale(locale)];

export const getLocalizedPath = (locale, pageKey) => {
  const safeLocale = getLocale(locale);
  const safePageKey = pageKeys.includes(pageKey) ? pageKey : "home";

  if (safeLocale === "vi") {
    return safePageKey === "goodwork" ? "/goodwork" : "/";
  }

  return safePageKey === "goodwork"
    ? `/${safeLocale}/goodwork`
    : `/${safeLocale}`;
};

export const toAbsoluteUrl = (path) =>
  new URL(path, siteConfig.siteUrl).toString();

export const getCanonicalUrl = (locale, pageKey) =>
  toAbsoluteUrl(getLocalizedPath(locale, pageKey));

export const getAlternateLinks = (pageKey) => [
  ...locales.map((locale) => ({
    hreflang: locale,
    href: getCanonicalUrl(locale, pageKey),
  })),
  {
    hreflang: "x-default",
    href: getCanonicalUrl(defaultLocale, pageKey),
  },
];

export const getPageSeo = (locale, pageKey) => {
  const messages = getMessages(locale);
  const safePageKey = pageKeys.includes(pageKey) ? pageKey : "home";
  const pageSeo = messages.seo[safePageKey];

  return {
    ...pageSeo,
    lang: getLocaleHtml(locale),
    canonical: getCanonicalUrl(locale, safePageKey),
    alternates: getAlternateLinks(safePageKey),
    ogLocale: getOgLocale(locale),
    ogImage: toAbsoluteUrl(
      safePageKey === "goodwork"
        ? siteConfig.goodworkOgImage
        : siteConfig.defaultOgImage,
    ),
    ogImageWidth:
      safePageKey === "goodwork"
        ? siteConfig.goodworkOgImageWidth
        : siteConfig.defaultOgImageWidth,
    ogImageHeight:
      safePageKey === "goodwork"
        ? siteConfig.goodworkOgImageHeight
        : siteConfig.defaultOgImageHeight,
    ogImageAlt:
      safePageKey === "goodwork"
        ? messages.goodworkHero.imageAlt
        : messages.hero.heroAlt,
  };
};

export const buildOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.siteName,
  url: siteConfig.siteUrl,
  logo: toAbsoluteUrl(siteConfig.logoPath),
  sameAs: [siteConfig.linkedinUrl],
  email: siteConfig.supportEmail,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.supportEmail,
      telephone: siteConfig.phoneNumber,
      areaServed: "VN",
      availableLanguage: ["vi", "en", "ja"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.addressLocality,
    addressCountry: siteConfig.addressCountry,
  },
});

export const buildWebsiteSchema = (locale) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.siteName,
  url: getCanonicalUrl(locale, "home"),
  inLanguage: getLocaleHtml(locale),
});

export const buildBreadcrumbSchema = (locale, pageKey) => {
  const messages = getMessages(locale);
  const homeUrl = getCanonicalUrl(locale, "home");
  const homeName = messages.navbar.links[0].name;

  if (pageKey === "home") {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: homeName,
          item: homeUrl,
        },
      ],
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: homeName,
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: messages.products.featuredTitle,
        item: getCanonicalUrl(locale, "goodwork"),
      },
    ],
  };
};

export const buildSoftwareApplicationSchema = (locale) => {
  const messages = getMessages(locale);

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: messages.products.featuredTitle,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Android",
    url: getCanonicalUrl(locale, "goodwork"),
    downloadUrl:
      "https://play.google.com/store/apps/details?id=com.evgoodwork&hl=vi",
    image: toAbsoluteUrl(siteConfig.goodworkOgImage),
    description: messages.goodworkHero.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
    },
  };
};
