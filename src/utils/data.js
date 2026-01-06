import {
    Award,
    BookOpen,
    Briefcase,
    Cloud,
    Code2,
    Coffee,
    Database,
    Dribbble,
    Gamepad2,
    GraduationCap,
    ClipboardList,
    Headphones,
    Heart,
    Mail,
    MapPin,
    Network,
    PencilRuler,
    Phone,
    Rocket,
    Server,
    Users,
    Zap,
} from 'lucide-react';


import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";

import webtoeic from "../assets/images/01.png";
import webcandy from "../assets/images/02.png";
import webroom from "../assets/images/03.png";
import webshoes from "../assets/images/04.png";
import websecondhand from "../assets/images/05.png";
import cli2per from "../assets/images/06.png";
import visionTech1 from "../assets/images/07.png";
import visionTech2 from "../assets/images/08.png";
import taxidienlonghai from "../assets/images/09.png";
import viettrekTravel from "../assets/images/10.png";
import longkhanh from "../assets/images/11.png";
import ngocduygrand from "../assets/images/12.png";

// Skills
export const skills_category = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Thành thạo các công nghệ giao diện người dùng hiện đại, tập trung vào trải nghiệm người dùng, responsive và hiệu suất.",
        skills: [
            { name: "HTML", level: 95, color: "bg-orange-600" },
            { name: "CSS / Tailwind", level: 85, color: "bg-sky-400" },
            { name: "ReactJS", level: 80, color: "bg-cyan-500" },
            { name: "VueJS", level: 55, color: "bg-emerald-500" },
        ],
    },
    {
        title: "Backend",
        icon: Server,
        description: "Có kinh nghiệm làm việc với các công nghệ backend phổ biến, xử lý logic nghiệp vụ, API và quản lý máy chủ.",
        skills: [
            { name: "ASP.NET", level: 90, color: "bg-purple-700" },
            { name: "Node.js", level: 75, color: "bg-lime-600" },
            { name: "Express.js", level: 70, color: "bg-zinc-600" },
            { name: "RESTful API", level: 80, color: "bg-yellow-500" },
        ],
    },
    {
        title: "Cloud",
        icon: Cloud,
        description: "Hiểu biết cơ bản về các nền tảng đám mây và công cụ triển khai ứng dụng, CI/CD và quản lý tài nguyên cloud.",
        skills: [
            { name: "Vercel", level: 80, color: "bg-neutral-900" },
            { name: "Netlify", level: 75, color: "bg-teal-500" },
            { name: "Github", level: 60, color: "bg-slate-700" },
            { name: "Docker", level: 40, color: "bg-blue-400" },
        ],
    },
    {
        title: "Database",
        icon: Database,
        description: "Làm việc với cơ sở dữ liệu quan hệ và phi quan hệ để lưu trữ, truy vấn và xử lý dữ liệu hiệu quả.",
        skills: [
            { name: "SQL Server", level: 90, color: "bg-red-700" },
            { name: "MySQL", level: 80, color: "bg-blue-600" },
            { name: "MongoDB", level: 85, color: "bg-green-700" },
        ],
    }
];

export const tech_stack = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "VueJS",
    "Wordpress",
    "Tailwind CSS",
    "Bootstrap",
    "ASP.NET",
    "C#",
    "Java",
    "Python",
    "Node.js",
    "MongoDB",
    "MySQL",
    "SQL Server",
    "Github",
];

export const stats = [
    { number: "29", icon: Code2, label: "Dự án đã xây dựng" },
    { number: "25+", icon: Users, label: "Khách hàng hài lòng" },
    { number: "18", icon: Network, label: "Trang web trực tiếp" },
    { number: "95%", icon: Zap, label: "Điểm hiệu suất" },
];

// Projects
export const projects = [
    {
        id: 1,
        title: "TOEIC Test Practice Website",
        description: "Website luyện thi TOEIC trực tuyến giúp người học ôn luyện hiệu quả với kho đề thi sát với đề thật. Hệ thống chấm điểm tự động, hiển thị đáp án và giải thích chi tiết từng câu hỏi. Người dùng có thể luyện tập theo từng kỹ năng, theo dõi tiến độ và đặt mục tiêu học tập cá nhân.",
        image: webtoeic,
        tags: ["React", "NodeJS", "MySQL", "JavaScript"],
        liveUser: "https://youtu.be/uTabA7DQzxQ?si=c86jrQ8THkSzsOgZ",
        githubUrl: "#",
        featured: false,
        category: "Website",
    },
    {
        id: 2,
        title: "Website Selling Candy",
        description: "Website bán bánh kẹo trực tuyến cung cấp đa dạng các loại bánh ngọt, kẹo ngoại nhập và đặc sản vùng miền. Giao diện thân thiện, dễ sử dụng, hỗ trợ đặt hàng nhanh chóng. Chất lượng sản phẩm được đảm bảo, giao hàng tận nơi, thanh toán linh hoạt. Mang đến trải nghiệm mua sắm tiện lợi và ngọt ngào cho mọi khách hàng.",
        image: webcandy,
        tags: ["React", "NodeJS", "MongoDB", "JavaScript"],
        liveUser: "https://youtu.be/-h7WUv1T3KM?si=IlfAhNA98QMdf0U2",
        githubUrl: "#",
        featured: false,
        category: "Website",
    },
    {
        id: 3,
        title: "Room Rental Website",
        description: "Website cho thuê phòng trọ, căn hộ, phòng ở ghép uy tín với thông tin rõ ràng, hình ảnh thực tế. Người dùng dễ dàng tìm kiếm phòng theo vị trí, giá, tiện nghi. Giao diện thân thiện, hỗ trợ đăng tin miễn phí và kết nối nhanh giữa người thuê và chủ phòng.",
        image: webroom,
        tags: ["React", "NodeJS", "MongoDB", "JavaScript"],
        liveUser: "#",
        githubUrl: "#",
        featured: false,
        category: "Website",
    },
    {
        id: 4,
        title: "Website Selling Shoes",
        description: "Website bán giày thời trang với nhiều mẫu mã đa dạng, từ giày thể thao, giày da đến giày sneaker cao cấp. Sản phẩm chính hãng, cập nhật xu hướng mới nhất, phù hợp mọi độ tuổi. Giao hàng nhanh chóng, đổi trả linh hoạt, mang đến trải nghiệm mua sắm tiện lợi và uy tín.",
        image: webshoes,
        tags: ["React", "NodeJS", "MongoDB", "JavaScript"],
        liveUser: "#",
        githubUrl: "#",
        featured: false,
        category: "Website",
    },
    {
        id: 5,
        title: "Second-hand Market Website",
        description: "Website chợ đồ cũ trực tuyến giúp kết nối người mua và bán các mặt hàng đã qua sử dụng như đồ điện tử, nội thất, quần áo, xe máy,... Giao diện dễ dùng, đăng tin nhanh chóng, hỗ trợ tìm kiếm theo khu vực. Giải pháp tiết kiệm chi phí và bảo vệ môi trường thông qua việc tái sử dụng đồ cũ.",
        image: websecondhand,
        tags: ["ASP.Net", "MVC", "C#", "SQLs"],
        liveUser: "#",
        githubUrl: "#",
        featured: false,
        category: "Web App",
    },
    {
        id: 6,
        title: "Website Công ty Sự Kiện Cli2per",
        description: "Website giới thiệu công ty sự kiện Cli2per với giao diện hiện đại, bố cục chuyên nghiệp, làm nổi bật dịch vụ tổ chức sự kiện, dự án đã triển khai và năng lực đội ngũ. Website được xây dựng trên nền tảng WordPress kết hợp PHP, dễ quản trị nội dung, tối ưu SEO và hiển thị tốt trên mọi thiết bị, giúp doanh nghiệp nâng cao hình ảnh thương hiệu và tiếp cận khách hàng hiệu quả.",
        image: cli2per,
        tags: ["Wordpress", "PHP"],
        liveUser: "https://cli2per.com/",
        githubUrl: "#",
        featured: false,
        category: "Website",
    },
    {
        id: 7,
        title: "Website Công ty Công Nghệ VisionTech",
        description: "Website doanh nghiệp công nghệ VisionTech được thiết kế theo phong cách hiện đại, tập trung giới thiệu giải pháp công nghệ, dịch vụ và thông tin công ty. Sử dụng WordPress & PHP, website đảm bảo tốc độ tải nhanh, dễ mở rộng, chuẩn SEO và thân thiện với người dùng, hỗ trợ VisionTech xây dựng uy tín và quảng bá thương hiệu trong lĩnh vực công nghệ.",
        image: visionTech1,
        tags: ["Wordpress", "PHP"],
        liveUser: "https://visionteco.com.vn/",
        githubUrl: "#",
        featured: false,
        category: "Website",
    },
    {
        id: 8,
        title: "Website Công ty Công Nghệ VisionTech",
        description: "Phiên bản website chính thức của VisionTech với giao diện chuyên nghiệp, nội dung rõ ràng, nhấn mạnh các sản phẩm – dịch vụ công nghệ và năng lực triển khai dự án. Website được phát triển bằng WordPress kết hợp PHP, tối ưu trải nghiệm người dùng, dễ dàng quản lý nội dung và phù hợp cho mục tiêu truyền thông, giới thiệu doanh nghiệp lâu dài.",
        image: visionTech2,
        tags: ["Wordpress", "PHP"],
        liveUser: "https://visionteco.com/",
        githubUrl: "#",
        featured: false,
        category: "Website",
    },
    {
        id: 9,
        title: "Website Taxi Điện Long Hải",
        description: "Website Taxi Điện Long Hải cung cấp thông tin dịch vụ taxi điện, đặt xe nhanh, giới thiệu đội xe và lợi ích di chuyển xanh. Giao diện thân thiện, dễ sử dụng, hiển thị tốt trên mobile. Website xây dựng bằng WordPress & PHP, tối ưu tốc độ, chuẩn SEO, hỗ trợ khách hàng tra cứu thông tin và liên hệ đặt xe thuận tiện 24/7.",
        image: taxidienlonghai,
        tags: ["Wordpress", "PHP"],
        liveUser: "https://taxidienlonghai.com/",
        githubUrl: "#",
        featured: false,
        category: "Website",
    },
    {
        id: 10,
        title: "Website Tour Du Lịch Viettrek Travel",
        description: "Website du lịch Viettrek Travel giới thiệu các tour du lịch trong và ngoài nước, lịch trình chi tiết, hình ảnh trực quan và thông tin đặt tour. Được xây dựng trên WordPress & PHP, website dễ quản trị, chuẩn SEO, tối ưu trải nghiệm người dùng, giúp doanh nghiệp quảng bá tour hiệu quả và tăng tỷ lệ chuyển đổi khách hàng.",
        image: viettrekTravel,
        tags: ["Wordpress", "PHP"],
        liveUser: "https://viettrektravel.com/",
        githubUrl: "#",
        featured: false,
        category: "Website",
    },
    {
        id: 11,
        title: "Website Địa Điểm Du Lịch Long Khánh",
        description: "Website tổng hợp và giới thiệu các địa điểm du lịch, ăn uống, vui chơi tại Long Khánh. Giao diện thân thiện, dễ tìm kiếm thông tin theo danh mục, phù hợp cho người dân và du khách. Phát triển bằng WordPress & PHP, website tối ưu SEO, hỗ trợ cập nhật nội dung nhanh chóng và mở rộng trong tương lai.",
        image: longkhanh,
        tags: ["Wordpress", "PHP"],
        liveUser: "https://diadiemlongkhanh.com/",
        githubUrl: "#",
        featured: false,
        category: "Website",
    },
     {
        id: 12,
        title: "Landing Page NGOC DUY GRAND",
        description: "Landing Page NGOC DUY GRAND được thiết kế nhằm giới thiệu dự án/địa điểm với giao diện sang trọng, bố cục tập trung vào chuyển đổi khách hàng. Xây dựng bằng Laravel & PHP, tối ưu tốc độ, bảo mật cao, chuẩn SEO và tương thích đa thiết bị, phù hợp cho chiến dịch quảng bá, thu thập khách hàng tiềm năng và nâng cao hình ảnh thương hiệu.",
        image: ngocduygrand,
        tags: ["Laravel", "PHP"],
        liveUser: "https://ngocduygrand.com/",
        githubUrl: "#",
        featured: false,
        category: "Website",
    },
];

// About
export const passions = [
    {
        icon: Dribbble,
        title: "Đá bóng",
        description: "Rèn luyện thể chất, nâng cao tinh thần đồng đội và giải tỏa căng thẳng sau những giờ học và làm việc căng thẳng.",
    },
    {
        icon: Headphones,
        title: "Nghe nhạc",
        description: "Thưởng thức âm nhạc để thư giãn tinh thần, tìm cảm hứng sáng tạo trong công việc và cuộc sống.",
    },
    {
        icon: BookOpen,
        title: "Đọc sách",
        description: "Mở rộng kiến thức, nâng cao tư duy và trau dồi kỹ năng thông qua những trang sách giá trị.",
    },
    {
        icon: Gamepad2,
        title: "Chơi game",
        description: "Giải trí, rèn luyện phản xạ và tư duy chiến thuật thông qua các trò chơi điện tử yêu thích.",
    },
];

export const journey_steps = [
    {
        year: "09/2021",
        title: "Bắt đầu học đại học ngành Kỹ thuật phần mềm",
        company: "Đại Học Nguyễn Tất Thành",
        description: "Chính thức trở thành sinh viên ngành Kỹ thuật phần mềm. Bắt đầu hành trình học tập các kiến thức nền tảng về lập trình, phát triển phần mềm, cơ sở dữ liệu và kỹ năng làm việc nhóm trong môi trường công nghệ.",
        icon: GraduationCap,
        color: "bg-blue-500",
    },
    {
        year: "05/2024",
        title: "Giải khuyến khích cuộc thi KTPM",
        company: "Đại Học Nguyên Tất Thành",
        description: "Tham gia cuộc thi chuyên ngành Kỹ thuật phần mềm với đề tài xây dựng ứng dụng web. Áp dụng các kiến thức về phân tích yêu cầu, thiết kế hệ thống, và phát triển frontend bằng ReactJS.",
        icon: Award,
        color: "bg-purple-500",
    },
    {
        year: "07/2024",
        title: "Giải khuyến khích cuộc thi Triển khai hệ thống Mạng",
        company: "Đại Học Nguyên Tất Thành",
        description: "Tham gia triển khai mô hình mạng nội bộ và cấu hình các thiết bị mạng cơ bản. Thể hiện kỹ năng phối hợp nhóm, xử lý tình huống thực tế và vận dụng kiến thức hạ tầng mạng trong thực hành.",
        icon: Network,
        color: "bg-green-500",
    },
    {
        year: "09/09/2024",
        title: "Thực tập sinh Frontend",
        company: "Công ty Cổ phần Tập đoàn Đầu tư Công nghệ Nam Long ",
        description: "Tham gia phát triển giao diện người dùng bằng VueJS, đảm bảo tính responsive trên nhiều thiết bị. Làm việc với API và tối ưu hiệu suất trang web. Học hỏi quy trình phát triển phần mềm theo mô hình chuẩn SEO, phối hợp với backend và thiết kế UI/UX",
        icon: Briefcase,
        color: "bg-pink-500",
    },
    {
        year: "31/05/2025",
        title: "Tốt nghiệp Đại học",
        company: "Đại Học Nguyễn Tất Thành",
        description: "Hoàn thành chương trình kỹ sư ngành Kỹ thuật phần mềm với xếp loại Giỏi. Trang bị vững chắc kiến thức nền tảng về lập trình, phát triển phần mềm và các kỹ năng làm việc nhóm, giải quyết vấn đề.",
        icon: GraduationCap,
        color: "bg-indigo-500",
    },
    {
        year: "Hiện tại",
        title: "Quản lý dự án",
        company: "TinTech Group",
        description: "Phụ trách quản lý và điều phối các dự án Website, App và phần mềm tại TinTech Group. Lập kế hoạch triển khai, theo dõi tiến độ, phối hợp đội ngũ kỹ thuật và làm việc trực tiếp với khách hàng nhằm đảm bảo dự án hoàn thành đúng yêu cầu, đúng thời hạn và đạt chất lượng cam kết.",
        icon: ClipboardList,
        color: "bg-indigo-500",
    }
];

// Contact
export const contact_info = [
    {
        icon: MapPin,
        label: "Địa chỉ",
        value: "Q.Bình Tân, Tp, Hồ Chí Minh",
    },
    {
        icon: Mail,
        label: "Email",
        value: "huyhoang1212.cke@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "0987 784 205",
    },
];

export const social_link = [
    {
        name: "Github",
        icon: FiGithub,
        url: "https://github.com/hoangg1212",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    {
        name: "Linkedin",
        icon: FiLinkedin,
        url: "#",
        color: "hover:text-blue-400",
        bgColor: "hover:bg-blue-500/10",
    },
    {
        name: "Twitter",
        icon: FiTwitter,
        url: "#",
        color: "hover:text-sky-400",
        bgColor: "hover:bg-sky-500/10",
    },
    {
        name: "Mail",
        icon: Mail,
        url: "#",
        color: "hover:text-green-400",
        bgColor: "hover:bg-green-500/10",
    },
    {
        name: "Youtube",
        icon: FaYoutube,
        url: "https://www.youtube.com/@huyhoang3499",
        color: "hover:text-red-500",
        bgColor: "hover:bg-red-500/10",
    },
];