import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, Headset, MessageSquareWarning, Sparkles, Map, 
  CheckCircle, Clock, Zap, Target, ArrowRight, Menu, X,
  MessageCircle, BarChart3, Settings, Gift, Share2, Lightbulb, BookOpen
} from 'lucide-react';

const sections = [
  { id: 'intro', title: 'Lời mở đầu', icon: FileText },
  { id: 'part1', title: 'Trải Nghiệm Hỗ Trợ', icon: Headset },
  { id: 'part2', title: 'Chất Lượng Chatbot', icon: MessageSquareWarning },
  { id: 'part3', title: 'Đề Xuất Tính Năng', icon: Sparkles },
  { id: 'part4', title: 'Tổng Kết & Lộ Trình', icon: Map },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll spy (simplified for prototype)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPos && (element.offsetTop + element.offsetHeight) > scrollPos) {
          setActiveSection(section.id);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 50, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex">
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isMobileMenuOpen ? 0 : (window.innerWidth < 1024 ? -300 : 0) }}
        className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-white border-r border-slate-200 shadow-sm z-50 flex flex-col transition-transform lg:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://ik.imagekit.io/39wvgoqre/WIN-HUB%20LOGO.jpg" 
              alt="WIN-HUB" 
              className="h-14 w-14 object-cover rounded-md" 
              referrerPolicy="no-referrer"
            />
            <span className="font-bold text-slate-800 tracking-[0.15em] text-lg">WIN-HUB</span>
          </div>
          <button className="lg:hidden text-slate-500" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={20} />
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${
                  isActive 
                    ? 'bg-indigo-50 text-indigo-700 shadow-sm' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-indigo-600' : 'text-slate-400'} />
                <span>{section.title}</span>
              </button>
            )
          })}
        </nav>
        
        <div className="p-4 border-t border-slate-100">
          <div className="bg-slate-50 p-4 rounded-xl">
            <p className="text-xs text-slate-500 mb-1">Ngày lập báo cáo</p>
            <p className="text-sm font-semibold text-slate-700">26 Tháng 4, 2026</p>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 pb-24">
        {/* Mobile Header */}
        <header className="lg:hidden sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-30 flex items-center justify-between p-3 relative">
          <div className="flex flex-col items-center z-10 w-14">
            <img 
              src="https://ik.imagekit.io/39wvgoqre/WIN-HUB%20LOGO.jpg" 
              alt="WIN-HUB" 
              className="h-7 w-7 object-cover rounded-md" 
              referrerPolicy="no-referrer"
            />
            <span className="text-[8px] font-bold uppercase tracking-widest text-slate-800 mt-1 leading-none text-center">WIN-HUB</span>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h1 className="font-bold text-slate-800 text-base">Báo cáo Preny AI</h1>
          </div>

          <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 z-10 text-slate-600 hover:bg-slate-100 rounded-lg">
            <Menu size={20} />
          </button>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-10 lg:py-16">
          
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center space-y-4"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold tracking-[0.2em] mb-2">
              <Sparkles size={14} />
              <span>BẢN ĐỀ XUẤT NỘI BỘ</span>
            </div>
            <div className="flex justify-center mt-2 mb-2">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Preny AI</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-medium text-slate-900 leading-tight">
              Nhận Xét & Đề Xuất <br className="hidden sm:block"/>
              <span className="text-rose-600 block mt-2">
                Chất Lượng Nền Tảng Preny AI
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4">
              Chia sẻ chân thành những trải nghiệm thực tế trong quá trình sử dụng và các đề xuất cải tiến để Preny AI ngày càng hoàn thiện hơn.
            </p>
          </motion.div>

          <div className="space-y-24">
            
            {/* Lời mở đầu */}
            <section id="intro" className="scroll-mt-24">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <FileText size={24} />
                  </div>
                  <h2 className="text-2xl font-serif font-medium italic text-slate-800">Lời mở đầu</h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Tài liệu này được lập nhằm chia sẻ chân thành những trải nghiệm thực tế trong quá trình sử dụng nền tảng <strong>Preny AI</strong> – một trong những công cụ chatbot đang được nhiều doanh nghiệp Việt Nam tin dùng. Chúng tôi đánh giá cao sự tâm huyết của đội ngũ phát triển và mong muốn đóng góp những phản hồi thiết thực để Preny AI ngày càng hoàn thiện hơn, phục vụ tốt hơn cho cộng đồng người dùng.
                </p>
              </div>
            </section>

            {/* Phần 1 */}
            <section id="part1" className="scroll-mt-24">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">1</div>
                <h2 className="text-3xl font-serif font-medium italic text-slate-800">Trải Nghiệm Hỗ Trợ Từ Đội Ngũ</h2>
              </div>
              
              <p className="text-slate-600 mb-8 text-lg">
                Một trong những yếu tố quyết định trải nghiệm người dùng không chỉ nằm ở sản phẩm, mà còn ở chất lượng đội ngũ chăm sóc đi kèm. Về mặt này, chúng tôi có những đánh giá tích cực và cũng có một vài góp ý để dịch vụ hỗ trợ trở nên tốt hơn nữa.
              </p>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                  <h3 className="text-lg font-serif font-medium text-emerald-800 mb-4 flex items-center">
                    <CheckCircle className="mr-2" size={20}/> Những gì Preny AI làm rất tốt
                  </h3>
                  <p className="text-emerald-700 text-sm mb-6 leading-relaxed">
                    Khi gặp vấn đề và gửi ticket, đội ngũ đã chủ động liên hệ và tổ chức call xử lý ngay trong ngày. Cách làm này rất chuyên nghiệp, giải quyết vấn đề tận gốc.
                  </p>
                  
                  <div className="space-y-3">
                    {[
                      { l: 'Thái độ hỗ trợ', v: 'Nhiệt tình, lắng nghe, không vội kết thúc' },
                      { l: 'Tổ chức call', v: 'Chủ động, có mặt đủ người cần thiết' },
                      { l: 'Theo dõi ticket', v: 'Xử lý đến khi có kết quả rõ ràng mới đóng' },
                      { l: 'Kiến thức kỹ thuật', v: 'Nắm rõ tính năng, giải thích dễ hiểu' },
                      { l: 'Hậu mãi', v: 'Có follow-up xác nhận vấn đề đã giải quyết' },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col bg-white/60 p-3 rounded-lg">
                        <span className="text-xs font-bold text-emerald-900 uppercase">{item.l}</span>
                        <span className="text-sm text-emerald-800 mt-1">{item.v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <h3 className="text-lg font-serif font-medium text-blue-800 mb-4 flex items-center">
                    <Sparkles className="mr-2" size={20}/> Điểm cộng trong dịch vụ
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Clock className="w-5 h-5 text-blue-500 mr-3 mt-0.5 shrink-0" />
                      <div>
                        <strong className="block text-blue-900 mb-1">Phản hồi nhanh chóng</strong>
                        <p className="text-sm text-blue-800">Tốc độ ghi nhận yêu cầu và hỗ trợ xử lý rất nhanh, giúp khách hàng luôn cảm thấy yên tâm.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FileText className="w-5 h-5 text-blue-500 mr-3 mt-0.5 shrink-0" />
                      <div>
                        <strong className="block text-blue-900 mb-1">Quy trình làm việc rõ ràng</strong>
                        <p className="text-sm text-blue-800">Luôn cung cấp thông tin cập nhật chi tiết và cụ thể về tình trạng xử lý các yêu cầu hỗ trợ.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-5 h-5 text-blue-500 mr-3 mt-0.5 shrink-0" />
                      <div>
                        <strong className="block text-blue-900 mb-1">Hỗ trợ đúng trọng tâm</strong>
                        <p className="text-sm text-blue-800">Đội ngũ kỹ thuật nắm bắt vấn đề tốt, xử lý triệt để không vòng vo gây mất thời gian.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <BookOpen className="w-5 h-5 text-blue-500 mr-3 mt-0.5 shrink-0" />
                      <div>
                        <strong className="block text-blue-900 mb-1">Tài nguyên hữu ích</strong>
                        <p className="text-sm text-blue-800">Kho tài liệu hướng dẫn và FAQ được biên soạn chi tiết giúp dễ dàng tra cứu thông tin.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Phần 2 */}
            <section id="part2" className="scroll-mt-24">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">2</div>
                <h2 className="text-3xl font-serif font-medium italic text-slate-800">Chất Lượng Chatbot & Cải Thiện</h2>
              </div>

              <div className="space-y-8">
                {/* 2.1 */}
                <div className="bg-white border text-slate-800 border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                  <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
                    <h3 className="font-serif font-medium text-lg flex items-center">
                      <MessageCircle className="mr-2 text-indigo-500" />
                      2.1 Vấn đề tin nhắn bot chưa xử lý được
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xs font-bold uppercase text-slate-400 mb-3 tracking-[0.2em]">Tình trạng</h4>
                        <ul className="space-y-3 relative before:absolute before:inset-y-0 before:left-2 before:w-[2px] before:bg-rose-100">
                          <li className="relative pl-6">
                            <span className="absolute left-0 top-1.5 w-4 h-4 bg-white border-2 border-rose-400 rounded-full"></span>
                            <span className="text-slate-600">Bot không nhận ra câu hỏi do cách diễn đạt lạ dù đã có trong Knowledge Base.</span>
                          </li>
                          <li className="relative pl-6">
                            <span className="absolute left-0 top-1.5 w-4 h-4 bg-white border-2 border-rose-400 rounded-full"></span>
                            <span className="text-slate-600">Thiếu báo cáo rõ ràng về số lượng và loại câu hỏi bot đã bỏ sót.</span>
                          </li>
                          <li className="relative pl-6">
                            <span className="absolute left-0 top-1.5 w-4 h-4 bg-white border-2 border-rose-400 rounded-full"></span>
                            <span className="text-slate-600">Khó phát hiện luồng tư vấn nào gây drop-off cho khách hàng.</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase text-slate-400 mb-3 tracking-[0.2em]">Giải pháp</h4>
                        <ul className="space-y-3 relative before:absolute before:inset-y-0 before:left-2 before:w-[2px] before:bg-indigo-100">
                          <li className="relative pl-6">
                            <span className="absolute left-0 top-1.5 w-4 h-4 bg-white border-2 border-indigo-500 rounded-full"></span>
                            <span className="text-slate-700 font-medium">Báo cáo 'Unanswered Messages' thống kê tự động.</span>
                          </li>
                          <li className="relative pl-6">
                            <span className="absolute left-0 top-1.5 w-4 h-4 bg-white border-2 border-indigo-500 rounded-full"></span>
                            <span className="text-slate-700 font-medium">Dashboard trực quan hiển thị độ dài và drop-off của flow.</span>
                          </li>
                          <li className="relative pl-6">
                            <span className="absolute left-0 top-1.5 w-4 h-4 bg-white border-2 border-indigo-500 rounded-full"></span>
                            <span className="text-slate-700 font-medium">AI tự động đề xuất cập nhật kịch bản dựa trên từ khóa trượt.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2.2 */}
                <div className="bg-slate-800 text-white rounded-2xl p-8 relative overflow-hidden shadow-lg border border-slate-700">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Share2 size={120} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-serif font-medium italic text-xl mb-4 flex items-center text-rose-200">
                      <Zap className="mr-2" /> 
                      2.2 Inbox TikTok – Mỏ vàng chuyển đổi
                    </h3>
                    <p className="text-slate-300 mb-6 text-lg max-w-2xl">
                      Khách hàng thường DM trực tiếp trên TikTok. Hiện tại thiếu luồng bot tự động, dẫn đến lỡ cơ hội. Cần tích hợp luồng tư vấn và CRM trên TikTok tương đương Facebook/Zalo.
                    </p>
                    <div className="grid grid-cols-2 gap-4 max-w-lg">
                      <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/5">
                        <CheckCircle size={16} className="text-green-400 mb-2"/>
                        <span className="text-sm font-medium">Phản hồi DM tự động</span>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/5">
                        <CheckCircle size={16} className="text-green-400 mb-2"/>
                        <span className="text-sm font-medium">Đồng bộ hội thoại Dashboard</span>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/5">
                        <CheckCircle size={16} className="text-green-400 mb-2"/>
                        <span className="text-sm font-medium">Gắn tag & phân loại KH</span>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/5">
                        <CheckCircle size={16} className="text-green-400 mb-2"/>
                        <span className="text-sm font-medium">Kịch bản chốt sale TikTok</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Phần 3 */}
            <section id="part3" className="scroll-mt-24">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 font-bold">3</div>
                <h2 className="text-3xl font-serif font-medium italic text-slate-800">Đề Xuất Tính Năng Trải Nghiệm Mới</h2>
              </div>
              <p className="text-slate-600 mb-10 text-lg">
                Dựa trên quan sát thị trường và hành vi người dùng, chúng tôi đề xuất 4 tính năng chiến lược giúp tạo ra sự khác biệt rõ rệt.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                
                {/* 3.1 Gamification */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col h-full hover:border-violet-300 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center mb-4">
                    <Gift size={24} />
                  </div>
                  <h3 className="font-serif font-medium text-xl text-slate-800 mb-3">Gamification & Rewards</h3>
                  <p className="text-slate-600 mb-6 flex-1">
                    Trò chơi hóa trải nghiệm (vòng quay may mắn, điểm thưởng) ngay trong chat giúp tăng tương tác, thu thập contact tự nhiên và giảm tỷ lệ bỏ giỏ hàng.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center"><ArrowRight size={14} className="text-pink-500 mr-2"/> Vòng quay may mắn sau tương tác</li>
                    <li className="flex items-center"><ArrowRight size={14} className="text-pink-500 mr-2"/> Tích điểm đổi voucher</li>
                    <li className="flex items-center"><ArrowRight size={14} className="text-pink-500 mr-2"/> Auto-voucher kích mua cuối phễu</li>
                  </ul>
                </div>

                {/* 3.2 API */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col h-full hover:border-violet-300 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-4">
                    <Settings size={24} />
                  </div>
                  <h3 className="font-serif font-medium text-xl text-slate-800 mb-3">API & Mở rộng hệ sinh thái</h3>
                  <p className="text-slate-600 mb-6 flex-1">
                    Biến bot từ việc chỉ "nói chuyện" thành "hành động" thông qua kết nối sâu với hệ thống ERP, CRM, Calendar của doanh nghiệp qua Webhooks/APIs.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center"><ArrowRight size={14} className="text-teal-500 mr-2"/> Cập nhật đơn hàng thời gian thực</li>
                    <li className="flex items-center"><ArrowRight size={14} className="text-teal-500 mr-2"/> Native integrations (HubSpot, KiotViet)</li>
                    <li className="flex items-center"><ArrowRight size={14} className="text-teal-500 mr-2"/> Hỗ trợ Webhook Inbound/Outbound</li>
                  </ul>
                </div>

                {/* 3.3 Báo cáo Missed */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col h-full hover:border-violet-300 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 size={24} />
                  </div>
                  <h3 className="font-serif font-medium text-xl text-slate-800 mb-3">Báo cáo rớt đoạn hội thoại</h3>
                  <p className="text-slate-600 mb-4 flex-1">
                    Thống kê chi tiết tin nhắn AI không trả lời được, tìm ra lỗ hổng kịch bản và xem lại ngữ cảnh rớt khách để tối ưu.
                  </p>
                  <div className="bg-slate-50 p-3 rounded-lg grid grid-cols-2 gap-2 text-xs">
                    <div className="border border-slate-200 bg-white p-2 rounded">
                      <span className="block text-slate-500 mb-1">Unanswered Rate</span>
                      <strong className="text-slate-800">Thống kê %</strong>
                    </div>
                    <div className="border border-slate-200 bg-white p-2 rounded">
                      <span className="block text-slate-500 mb-1">Trending Gaps</span>
                      <strong className="text-slate-800">Xu hướng hỏi mới</strong>
                    </div>
                  </div>
                </div>

                {/* 3.4 Bỏ form */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col h-full hover:border-violet-300 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Target size={24} />
                  </div>
                  <h3 className="font-serif font-medium text-xl text-slate-800 mb-3">Linh hoạt form SĐT Web</h3>
                  <p className="text-slate-600 mb-6 flex-1">
                    Cho phép tắt, bật form thu thập contact khi khách vào web. Tùy chỉnh thu thập thông tin giữa luồng chat mượt mà hơn thay vì hiển thị ngay.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center"><ArrowRight size={14} className="text-blue-500 mr-2"/> Option bỏ bắt buộc điền đầu phễu</li>
                    <li className="flex items-center"><ArrowRight size={14} className="text-blue-500 mr-2"/> Hỏi in-flow khi đạt độ tin tưởng</li>
                    <li className="flex items-center"><ArrowRight size={14} className="text-blue-500 mr-2"/> Tăng trưởng Conversion Rate (Cvr) mạnh</li>
                  </ul>
                </div>

              </div>
            </section>

            {/* Phần 4 */}
            <section id="part4" className="scroll-mt-24">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold">4</div>
                <h2 className="text-3xl font-serif font-medium italic text-slate-800">Tổng Kết & Lộ Trình Ưu Tiên</h2>
              </div>
              
              <div className="bg-white border text-slate-800 border-slate-200 rounded-2xl shadow-sm overflow-hidden mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="py-4 px-6 font-bold text-sm text-slate-500 uppercase">Tính năng đề xuất</th>
                      <th className="py-4 px-6 font-bold text-sm text-slate-500 uppercase">Lý do chiến lược</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50">
                      <td className="py-4 px-6 font-medium">Báo cáo tin nhắn AI bỏ sót</td>
                      <td className="py-4 px-6 text-slate-600">Ảnh hưởng trực tiếp đến doanh thu hàng ngày. Quản trị được chất lượng bot.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-4 px-6 font-medium">Tắt form điền thông tin web</td>
                      <td className="py-4 px-6 text-slate-600">Tháo gỡ rào cản chuyển đổi phổ biến nhất ngay đầu phễu người dùng.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-4 px-6 font-medium">Inbox TikTok</td>
                      <td className="py-4 px-6 text-slate-600">Nắm bắt kênh bùng nổ, không lỡ nhịp thị trường và hành vi chốt đơn.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-4 px-6 font-medium">API kết nối bên thứ 3</td>
                      <td className="py-4 px-6 text-slate-600">Thỏa mãn phân khúc khách hàng Doanh nghiệp, đưa bot vào luồng ERP.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-4 px-6 font-medium">Gamification (Voucher/Quay)</td>
                      <td className="py-4 px-6 text-slate-600">Nâng tầm Retention, kích thích chia sẻ Viral tạo điểm chạm "Wow".</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

