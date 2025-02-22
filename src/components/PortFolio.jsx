import React from 'react'

import duan01 from '../assets/images/DuAn01.png'
import duan02 from '../assets/images/DuAn02.png'
import duan03 from '../assets/images/DuAn03.png'

const PortFolio = () => {

  return (
    <>
      <section name='Dự án' className='pt-8'>
        <h2 className='text-3xl font-bold'> Dự Án </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <div className="w-full px-5 py-10">
            {/* Dự án 1 */}
            <div className="pb-10 border-l border-gray-200 last:border-l-0 dark:border-neutral-700">
              <div className="relative flex flex-col justify-start pl-12">
                <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                  <img src={duan01} alt="" className="w-14 h-14 rounded-full" />
                </div>
                <p className="text-sm uppercase text-neutral-400 dark:text-neutral-500 tracking-widest">
                  23/11/2024 - 07/01/2025
                </p>
                <h2 className="my-1 text-lg font-bold dark:text-neutral-100 uppercase">
                  TOEIC TEST SUPPORT WEBSITE
                </h2>
                <p>
                  Dự án cá nhân
                </p>
                <div className="ml-4 space-y-2 text-justify">
                  <b className="font-bold">Mô tả:</b>
                  <p>
                    Website này được phát triển với mục tiêu hỗ trợ người dùng luyện thi qua các bài thi thử, giúp nâng cao kỹ năng và chuẩn bị tốt nhất cho các kỳ thi quan trọng. Ngoài ra, website còn tích hợp các tính năng đặc biệt như tích điểm và đổi quà, cũng như cung cấp không gian trao đổi kiến thức cho người dùng. Mục đích của website là tạo ra một nền tảng học tập trực tuyến dễ sử dụng, giúp người dùng cải thiện kiến thức và kỹ năng một cách hiệu quả và thú vị.
                  </p>
                  <b className="font-bold">Các chức năng chính của trang web:</b>
                  <div className="ml-6">
                    <p>
                      - <i className='underline'>Phân quyền người dùng</i>: {"  "} Hệ thống phân quyền rõ ràng giữa các nhóm người dùng (Admin, Giảng viên, Học viên), giúp quản lý và phân bổ quyền truy cập hợp lý cho từng chức năng của website. Điều này đảm bảo rằng mỗi nhóm người dùng chỉ có quyền truy cập vào những tính năng và thông tin phù hợp với vai trò của họ.
                    </p>
                    <p>
                      - <i className='underline'>Chatbot</i>: {"  "} Tích hợp Chatbot thông minh giúp người dùng giải đáp các câu hỏi thường gặp, cung cấp thông tin về các bài thi, tài liệu học tập, hoặc các hỗ trợ kỹ thuật. Chatbot là công cụ tiện lợi giúp người dùng tiết kiệm thời gian và giải quyết các vấn đề nhanh chóng.
                    </p>
                    <p>
                      - <i className='underline'>Đăng ký, đăng nhập, quên mật khẩu</i>: {"  "} Tính năng đăng ký và đăng nhập giúp người dùng dễ dàng tạo tài khoản và truy cập vào hệ thống. Nếu quên mật khẩu, người dùng có thể nhanh chóng khôi phục tài khoản qua email hoặc các phương thức bảo mật khác.
                    </p>
                    <p>
                      - <i className='underline'>Tính năng tìm kiếm và xem chi tiết bài thi</i>: {"  "} Người dùng có thể tìm kiếm bài thi theo chủ đề, độ khó và thời gian thi. Mỗi bài thi đều cung cấp thông tin chi tiết về nội dung, số câu hỏi và thời gian làm bài, giúp người dùng lên kế hoạch và chuẩn bị tốt nhất cho kỳ thi.
                    </p>
                    <p>
                      - <i className='underline'>Làm bài thi, tích điểm và đổi quà</i>: {"  "} Sau khi tham gia bài thi, người dùng có thể tích lũy điểm số và đạt được các phần quà hấp dẫn khi đạt được thành tích cao. Điều này không chỉ giúp tăng cường động lực học tập mà còn làm cho quá trình luyện thi trở nên thú vị và có phần thưởng xứng đáng.
                    </p>
                    <p>
                      - <i className='underline'>Diễn đàn trao đổi</i>: {"  "} Diễn đàn tạo điều kiện cho người dùng có thể giao lưu, thảo luận và chia sẻ kinh nghiệm về các bài thi, chiến lược học tập. Đây là không gian lý tưởng để người dùng học hỏi từ nhau và tìm kiếm giải pháp cho các vấn đề học tập.
                    </p>
                    <p>
                      - <i className='underline'>Quản lý đề thi</i>: {"  "} Chức năng quản lý đề thi cho phép Admin tạo mới, chỉnh sửa và xóa các bài thi. Điều này đảm bảo rằng các đề thi luôn được cập nhật và phù hợp với yêu cầu học tập của người dùng, đồng thời giúp theo dõi quá trình làm bài của học viên.
                    </p>
                    <p>
                      - <i className='underline'>Quản lý Quà tặng</i>: {"  "} Hệ thống quản lý quà tặng cho phép Admin theo dõi điểm số của học viên và phân phát các phần quà hấp dẫn khi học viên đạt được các thành tích nhất định. Các phần quà này không chỉ là động lực học tập mà còn là cách thức khuyến khích sự tham gia của người dùng.
                    </p>
                    <p>
                      - <i className='underline'>Quản lý hệ thống dành cho Admin</i>: {"  "} Admin có quyền quản lý toàn bộ hệ thống, bao gồm các chức năng như người dùng, bài thi, quà tặng và các tài nguyên khác. Chức năng này giúp Admin duy trì sự vận hành ổn định của website và đảm bảo rằng tất cả người dùng đều có trải nghiệm học tập tốt nhất.
                    </p>
                  </div>
                  <p>
                    <b className="font-bold">Công nghệ sử dụng:</b>
                    <span>
                      {"  "} ReactJS, NodeJS, Express, MySQL WorkBrench và GitHub.
                    </span>
                  </p>

                  <p>
                    <b className="font-bold">YouTube:</b>
                    <a href="" target='_blank' className="text-blue-600 dark:text-blue-400 hover:underline">
                      {"  "}
                    </a>
                  </p>
                  <p>
                    <b className="font-bold">GitHub:</b>
                    <a href="" target='_blank' className="text-blue-600 dark:text-blue-400 hover:underline">
                      {"  "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* Dự án 2 */}
            <div className="pb-10 border-l border-gray-200 last:border-l-0 dark:border-neutral-700">
              <div className="relative flex flex-col justify-start pl-12">
                <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                  <img src={duan02} alt="" className="w-14 h-14 rounded-full" />
                </div>
                <p className="text-sm uppercase text-neutral-400 dark:text-neutral-500 tracking-widest">
                  21/05/2024 - 30/07/2024
                </p>
                <h2 className="my-1 text-lg font-bold dark:text-neutral-100 uppercase">
                  Confectionery Store Website
                </h2>
                <p>
                  Dự án cá nhân
                </p>
                <div className="ml-4 space-y-2 text-justify">
                  <b className="font-bold">Mô tả:</b>
                  <p>
                    Website này được phát triển như một dự án cá nhân, nhằm cung cấp một nền tảng mua sắm trực tuyến tiện lợi và dễ dàng cho cả người quản trị (Admin) và người dùng (khách hàng). Dự án này mang lại sự linh hoạt trong việc quản lý và sử dụng, từ việc duy trì và phát triển hệ thống đến việc tạo ra trải nghiệm mượt mà cho người dùng.
                  </p>
                  <b className="font-bold">Các chức năng chính của trang web:</b>
                  <div className="ml-6">
                    <p>
                      - <i className='underline'>Phân quyền Admin và khách hàng</i>: {"  "} Hệ thống phân quyền rõ ràng và linh hoạt giúp phân biệt chức năng của Admin và khách hàng. Admin có quyền kiểm soát toàn bộ hệ thống, quản lý người dùng, sản phẩm, đơn hàng và các dữ liệu khác. Trong khi đó, khách hàng có thể duyệt sản phẩm, thực hiện các giao dịch mua bán, và theo dõi đơn hàng của mình, đảm bảo một trải nghiệm mượt mà và dễ sử dụng.
                    </p>
                    <p>
                      - <i className='underline'>Chatbot</i>: {"  "} Chatbot được tích hợp để hỗ trợ khách hàng trong việc giải đáp các thắc mắc và hướng dẫn người dùng trong quá trình mua sắm. Với khả năng trả lời tự động và nhanh chóng, chatbot giúp tiết kiệm thời gian và nâng cao hiệu quả chăm sóc khách hàng, tạo ra một trải nghiệm thú vị và tiện lợi.
                    </p>
                    <p>
                      - <i className='underline'>Tìm kiếm, xem chi tiết, đặt hàng, thanh toán,...</i>: {"  "} Website cung cấp tính năng tìm kiếm mạnh mẽ, cho phép khách hàng dễ dàng tìm ra các sản phẩm mong muốn thông qua bộ lọc thông minh. Sau khi chọn lựa sản phẩm, khách hàng có thể xem thông tin chi tiết, lựa chọn các tùy chọn và tiến hành đặt hàng. Các phương thức thanh toán an toàn và nhanh chóng giúp hoàn tất giao dịch một cách thuận tiện.
                    </p>
                    <p>
                      - <i className='underline'>Quản lý hệ thống dành cho Admin</i>: {"  "} Admin có thể quản lý toàn bộ hệ thống từ việc thêm, sửa, xóa sản phẩm đến theo dõi và duyệt các đơn hàng. Cùng với việc kiểm tra và quản lý thông tin người dùng, Admin còn có khả năng theo dõi các báo cáo thống kê, từ đó đưa ra các quyết định phát triển hệ thống phù hợp, tối ưu hóa trải nghiệm người dùng và đảm bảo tính ổn định của hệ thống.
                    </p>
                  </div>

                  <p>
                    <b className="font-bold">Công nghệ sử dụng:</b>
                    <span>
                      {"  "} ReactJS, NodeJS, Express, MongoDB và GitHub.
                    </span>
                  </p>

                  <p>
                    <b className="font-bold">YouTube:</b>
                    <a href="https://youtu.be/-7Z1vXxP9CQ" target='_blank' className="text-blue-600 dark:text-blue-400 hover:underline">
                      {"  "} https://youtu.be/-7Z1vXxP9CQ
                    </a>
                  </p>
                  <p>
                    <b className="font-bold">GitHub:</b>
                    <a href="https://github.com/hoangg1212/Confectionery_Store-.git" target='_blank' className="text-blue-600 dark:text-blue-400 hover:underline whitespace-normal break-words">
                      {"  "} https://github.com/hoangg1212/Confectionery_Store-.git
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* Dự án 3 */}
            <div className="border-l border-gray-200 last:border-l-0 dark:border-neutral-700">
              <div className="relative flex flex-col justify-start pl-12">
                <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                  <img src={duan03} alt="" className="w-14 h-14 rounded-full" />
                </div>
                <p className="text-sm uppercase text-neutral-400 dark:text-neutral-500 tracking-widest">
                  15/03/2024 - 12/05/2024
                </p>
                <h2 className="my-1 text-lg font-bold dark:text-neutral-100 uppercase">
                  Cake Shop Website
                </h2>
                <p>
                  Dự án cá nhân
                </p>
                <div className="ml-4 space-y-2 text-justify">
                  <b className="font-bold">Mô tả:</b>
                  <p>
                    Website này được phát triển như một dự án cá nhân, nhằm cung cấp một nền tảng mua sắm trực tuyến tiện lợi và dễ dàng cho cả người quản trị (Admin) và người dùng (khách hàng). Dự án này mang lại sự linh hoạt trong việc quản lý và sử dụng, từ việc duy trì và phát triển hệ thống đến việc tạo ra trải nghiệm mượt mà cho người dùng.
                  </p>
                  <b className="font-bold">Các chức năng chính của trang web:</b>
                  <div className="ml-6">
                    <p>
                      - <i className='underline'>Phân quyền người dùng</i>: {"  "} Hệ thống phân quyền rõ ràng giữa Admin và khách hàng. Admin có quyền kiểm soát toàn bộ hệ thống, bao gồm việc quản lý người dùng, sản phẩm, đơn hàng. Trong khi đó, khách hàng có thể truy cập, tìm kiếm và mua sản phẩm trực tuyến.
                    </p>
                    <p>
                      - <i className='underline'>Tính năng tìm kiếm và xem chi tiết sản phẩm</i>: {"  "} Website hỗ trợ tính năng tìm kiếm mạnh mẽ, cho phép khách hàng dễ dàng tìm kiếm các sản phẩm theo tên, danh mục, hoặc tính năng. Ngoài ra, người dùng có thể xem thông tin chi tiết về từng sản phẩm, bao gồm mô tả, giá cả, và các tùy chọn mua hàng.
                    </p>
                    <p>
                      - <i className='underline'>Quản lý đơn hàng và thanh toán</i>: {"  "} Khách hàng có thể thực hiện thanh toán nhanh chóng và an toàn qua nhiều phương thức khác nhau. Admin có quyền duyệt và quản lý các đơn hàng, đồng thời theo dõi tình trạng đơn hàng từ lúc đặt cho đến khi giao hàng thành công.
                    </p>
                    <p>
                      - <i className='underline'>Quản lý hệ thống dành cho Admin</i>: {"  "} Admin có toàn quyền quản lý hệ thống, bao gồm việc thêm, sửa, xóa sản phẩm, theo dõi và xử lý đơn hàng, cũng như quản lý người dùng. Bên cạnh đó, Admin có thể theo dõi thống kê và báo cáo để đưa ra các quyết định phù hợp trong việc phát triển hệ thống.
                    </p>
                  </div>
                  <p>
                    <b className="font-bold">Công nghệ sử dụng:</b>
                    <span>
                      {"  "} C#, ASP.NET, MVC, SQL Server và GitHub.
                    </span>
                  </p>

                  <p>
                    <b className="font-bold">YouTube:</b>
                    <a href="https://youtu.be/yNqN0FfautM" target='_blank' className="text-blue-600 dark:text-blue-400 hover:underline">
                      {"  "} https://youtu.be/yNqN0FfautM
                    </a>
                  </p>
                  <p>
                    <b className="font-bold">GitHub:</b>
                    <a href="https://github.com/hoangg1212/Cake_Shop.git" target='_blank' className="text-blue-600 dark:text-blue-400 hover:underline whitespace-normal break-words">
                      {"  "} https://github.com/hoangg1212/Cake_Shop.git
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PortFolio
