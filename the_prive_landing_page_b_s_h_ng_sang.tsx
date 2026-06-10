import React, { useState, useEffect } from 'react';
import { 
  MapPin, ShieldCheck, Droplets, Key, TrendingUp, Phone, ChevronRight, 
  Menu, X, Star, CheckCircle2, FileText, Download, PlayCircle, Clock, Info, 
  BookOpen, Building, LayoutGrid, DollarSign, Newspaper
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Mảng 12 tiêu đề điều hướng
  const menuItems = [
    { id: 'tong-quan', label: 'Tổng quan' },
    { id: 'vi-tri', label: 'Vị trí' },
    { id: 'dao-tao', label: 'Đào tạo' },
    { id: 'mat-bang', label: 'Mặt bằng' },
    { id: 'toa-nha', label: 'Tòa nhà' },
    { id: 'bang-hang', label: 'Bảng hàng' },
    { id: 'quy-can', label: 'Quỹ căn' },
    { id: 'anh-360', label: 'Ảnh 360o' },
    { id: 'chinh-sach', label: 'Chính sách bán hàng' },
    { id: 'tien-do', label: 'Tiến độ' },
    { id: 'tai-lieu', label: 'Tài liệu' },
    { id: 'tin-tuc', label: 'Tin tức' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-50 selection:bg-amber-600 selection:text-white scroll-smooth">
      {/* CSS 3D Tuỳ Chỉnh */}
      <style>
        {`
          html { scroll-behavior: smooth; }
          .nav-link-3d {
            transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), color 0.3s, text-shadow 0.3s;
            display: inline-block;
            transform-style: preserve-3d;
          }
          .nav-link-3d:hover {
            transform: perspective(600px) translateZ(30px) translateY(-2px) rotateX(15deg) rotateY(-10deg) scale(1.15);
            color: #f59e0b;
            text-shadow: 0px 10px 15px rgba(245, 158, 11, 0.5), 0px 4px 6px rgba(0,0,0,0.3);
          }
          .glass-panel {
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255,255,255,0.3);
          }
        `}
      </style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col xl:flex-row justify-between items-center gap-2">
            <div className="flex justify-between items-center w-full xl:w-auto">
              <div className="flex-shrink-0 flex items-center">
                <span className={`text-2xl font-bold tracking-widest uppercase ${scrolled ? 'text-gray-900' : 'text-white drop-shadow-md'}`}>
                  The Privé
                </span>
              </div>
              
              <div className="xl:hidden flex items-center">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={scrolled ? 'text-gray-900' : 'text-white'}>
                  {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden xl:flex flex-wrap justify-end gap-x-4 gap-y-2 items-center flex-1">
              {menuItems.map(item => (
                <a key={item.id} href={`#${item.id}`} className={`text-[12px] font-bold uppercase tracking-wider nav-link-3d ${scrolled ? 'text-gray-700' : 'text-gray-100 drop-shadow-md'}`}>
                  {item.label}
                </a>
              ))}
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-full text-xs font-bold transition-all shadow-lg hover:scale-105 ml-2">
                NHẬN BÁO GIÁ
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="xl:hidden bg-white shadow-xl absolute w-full left-0 top-full flex flex-col px-4 pt-2 pb-6 space-y-2 max-h-[75vh] overflow-y-auto">
            {menuItems.map(item => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm font-bold text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors">
                {item.label}
              </a>
            ))}
            <button className="w-full mt-4 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full text-sm font-bold shadow-md transition-colors">
              Nhận Báo Giá Ngay
            </button>
          </div>
        )}
      </nav>

      {/* 1. TỔNG QUAN */}
      <section id="tong-quan" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')" }}>
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">
          <span className="inline-block px-4 py-1 border border-amber-500 text-amber-500 rounded-full font-semibold tracking-widest uppercase mb-6 text-sm">
            Tập đoàn Đất Xanh Group
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-xl">
            THE PRIVÉ
          </h1>
          <p className="text-2xl text-amber-400 mb-6 font-light italic tracking-wide">
            "Defining Luxury Living"
          </p>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Dự án căn hộ hạng sang duy nhất sở hữu <strong className="text-white">3 mặt giáp sông</strong> biệt lập ngay tại tâm điểm Sài Gòn. Quy mô 16.7 ha với 12 tòa tháp biểu tượng, cung cấp 3.175 sản phẩm độc bản.
          </p>
          
          {/* Quick Stats Overlaid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8 glass-panel rounded-2xl p-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900">100<span className="text-amber-600">%</span></h3>
              <p className="text-xs text-gray-600 font-bold uppercase mt-1">Compound Khép Kín</p>
            </div>
            <div className="text-center border-l border-gray-200">
              <h3 className="text-3xl font-bold text-gray-900">03</h3>
              <p className="text-xs text-gray-600 font-bold uppercase mt-1">Mặt Giáp Sông</p>
            </div>
            <div className="text-center border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0">
              <h3 className="text-3xl font-bold text-gray-900">12</h3>
              <p className="text-xs text-gray-600 font-bold uppercase mt-1">Tòa Tháp (33-35 tầng)</p>
            </div>
            <div className="text-center border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0">
              <h3 className="text-3xl font-bold text-gray-900">09</h3>
              <p className="text-xs text-gray-600 font-bold uppercase mt-1">Căn hộ / Tầng</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VỊ TRÍ */}
      <section id="vi-tri" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 text-amber-600 font-bold uppercase tracking-widest text-sm mb-4">
                <MapPin size={18} /> Tọa độ hoàng kim
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Tâm Điểm Kết Nối <br/><span className="text-amber-600">Đường Song Hành, An Phú</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Nằm trọn trong khu Rạch Chiếc, Quận 2 (cũ). The Privé hưởng trọn lợi thế hạ tầng tỷ đô đang thành hình, đảm bảo tính thanh khoản và tiềm năng tăng giá đột biến.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full"><Clock size={24} /></div>
                  <div><p className="font-bold text-gray-900">3 Phút</p><p className="text-sm text-gray-500">Nút giao An Phú & Ga Thủ Thiêm</p></div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-4">
                  <div className="bg-emerald-100 text-emerald-600 p-3 rounded-full"><MapPin size={24} /></div>
                  <div><p className="font-bold text-gray-900">5 Phút</p><p className="text-sm text-gray-500">Khu liên hợp TDTT Rạch Chiếc</p></div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-4">
                  <div className="bg-amber-100 text-amber-600 p-3 rounded-full"><TrendingUp size={24} /></div>
                  <div><p className="font-bold text-gray-900">12 Phút</p><p className="text-sm text-gray-500">Vào trung tâm Quận 1 (qua Hầm TT)</p></div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-4">
                  <div className="bg-purple-100 text-purple-600 p-3 rounded-full"><PlayCircle size={24} /></div>
                  <div><p className="font-bold text-gray-900">30 Phút</p><p className="text-sm text-gray-500">Đến Sân bay QT Long Thành</p></div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <img src="https://images.unsplash.com/photo-1502899576159-f224dc2349fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Bản đồ The Privé" className="rounded-2xl shadow-2xl w-full h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. ĐÀO TẠO (Phân tích thị trường) */}
      <section id="dao-tao" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-amber-500 mb-4">Góc Nhìn Chuyên Sâu (Training Data)</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Số liệu thực tế khẳng định vị thế và biên độ lợi nhuận của bất động sản trung tâm mới.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <TrendingUp className="text-emerald-400 w-12 h-12 mb-4" />
              <h3 className="text-4xl font-black mb-2">+168%</h3>
              <p className="font-bold text-lg mb-2">Lượt quan tâm BĐS Hạng Sang</p>
              <p className="text-sm text-gray-400">Ghi nhận từ Q3/2024 đến Q3/2025 theo Batdongsan.com.vn. BĐS trung tâm đang là thỏi nam châm thu hút dòng vốn tinh hoa.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <DollarSign className="text-amber-400 w-12 h-12 mb-4" />
              <h3 className="text-4xl font-black mb-2">30 - 50%</h3>
              <p className="font-bold text-lg mb-2">Kỳ vọng tăng giá (2-3 năm)</p>
              <p className="text-sm text-gray-400">Mức giá trung bình phân khúc A đang là 165-220tr/m2. The Privé đang sở hữu vùng giá cực kỳ cạnh tranh để đầu tư.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <BookOpen className="text-blue-400 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4 mt-2">Dịch chuyển trung tâm (CBD)</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-amber-500 shrink-0"/> Giới siêu giàu chuyển dịch về An Phú & Thủ Thiêm.</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-amber-500 shrink-0"/> Nhu cầu nhà ở cho chuyên gia Sân bay Long Thành & IFC.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MẶT BẰNG */}
      <section id="mat-bang" className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 text-amber-600 font-bold uppercase tracking-widest text-sm mb-4">
                <LayoutGrid size={18} /> Thiết Kế Tối Ưu
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Giới Hạn Hạng Sang <br/><span className="text-amber-600">Với 9 Căn Hộ / Tầng</span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                The Privé được thiết kế với khối tháp vuông vức, hành lang ngắn, thiết kế mở đón gió và ánh sáng tự nhiên. 100% căn hộ không có góc chết.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <span className="bg-amber-100 text-amber-700 font-black px-3 py-1 rounded text-lg">04</span>
                  <span className="font-medium text-gray-800">Thang máy tốc độ cao (2.5m/s) cho mỗi tháp</span>
                </li>
                <li className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <span className="bg-amber-100 text-amber-700 font-black px-3 py-1 rounded text-lg">02</span>
                  <span className="font-medium text-gray-800">Tầng lánh nạn chuyên biệt (Tầng 20 & 21)</span>
                </li>
                <li className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <span className="bg-amber-100 text-amber-700 font-black px-3 py-1 rounded text-lg">01</span>
                  <span className="font-medium text-gray-800">Tầng hầm chung 4.2ha xuyên suốt 12 tháp</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Mặt bằng The Privé" className="rounded-2xl shadow-xl w-full border-4 border-white" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. TÒA NHÀ & BÀN GIAO (Gộp Tiện Ích & Bàn Giao vào Tòa Nhà để mượt mà) */}
      <section id="toa-nha" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-2 block">Building & Handover</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Hệ Sinh Thái Tiện Ích & Vật Liệu Bàn Giao</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Tiện Ích Nội Khu */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-amber-400 transition-all text-left">
              <Droplets className="text-amber-500 w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">Hồ Bơi Điện Phân</h3>
              <p className="text-sm text-gray-600">Chuỗi 3 hồ bơi resort điện phân muối &gt;3.000m2 tốt cho sức khỏe làn da.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-amber-400 transition-all text-left">
              <Star className="text-amber-500 w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">5 Fine Dining</h3>
              <p className="text-sm text-gray-600">Phòng tiệc ẩm thực đa quốc gia cao cấp, phục vụ cá nhân hóa cho cư dân.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-amber-400 transition-all text-left">
              <ShieldCheck className="text-amber-500 w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">An Ninh 5 Lớp</h3>
              <p className="text-sm text-gray-600">Hệ thống Access Control, Videophone Comelit, thẻ từ thang máy chống sao chép.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-amber-400 transition-all text-left">
              <Building className="text-amber-500 w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">Gym & Thể Thao</h3>
              <p className="text-sm text-gray-600">Sân Tennis, Pickleball, Golf 3D, phòng Gym cao cấp tại khối đế.</p>
            </div>
          </div>

          {/* Tiêu Chuẩn Bàn Giao */}
          <h3 className="text-2xl font-bold text-gray-900 mb-8 border-t border-gray-100 pt-12">Bàn Giao Hạng Sang Vượt Trội</h3>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold">1</div>
              <div>
                <h4 className="font-bold text-lg mb-1">Khu Vực Bếp (Brandt)</h4>
                <p className="text-sm text-gray-600">Trang bị Full bếp từ, máy hút mùi, lò nướng, lò vi sóng, kệ gia vị, thùng gạo tự động. Tủ bếp laminate sang trọng.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold">2</div>
              <div>
                <h4 className="font-bold text-lg mb-1">Phòng Tắm (Duravit)</h4>
                <p className="text-sm text-gray-600">Tủ lavabo, vách kính tắm đứng cường lực, chậu rửa âm bàn, gương soi tráng thủy cao cấp.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold">3</div>
              <div>
                <h4 className="font-bold text-lg mb-1">Vật Liệu Căn Hộ</h4>
                <p className="text-sm text-gray-600">Cửa sổ kính hộp Low-E 2 lớp chống ồn cách nhiệt. Tủ quần áo Bespoke may đo. Cửa gỗ Laminate "vảy rồng" 3D chống cháy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BẢNG HÀNG & 7. QUỸ CĂN */}
      <section id="bang-hang" className="py-20 bg-gray-900 text-white relative">
        <div id="quy-can" className="absolute -top-10"></div> {/* Anchor cho Quỹ căn */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-700 pb-6">
            <div>
              <h2 className="text-3xl font-bold text-amber-500 mb-2">Bảng Hàng & Quỹ Căn</h2>
              <p className="text-gray-400">Tham khảo các loại hình sản phẩm và đơn giá dự kiến.</p>
            </div>
            <button className="mt-4 md:mt-0 bg-white text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-amber-500 hover:text-white transition-colors">
              TẢI FULL BẢNG GIÁ
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="col-span-2">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700 text-gray-400 text-sm uppercase tracking-wider">
                      <th className="pb-4 font-medium">Loại sản phẩm</th>
                      <th className="pb-4 font-medium">Đặc điểm</th>
                      <th className="pb-4 font-medium">Tình trạng quỹ căn</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                      <td className="py-4 font-bold text-amber-400">Typical Unit (1-3PN)</td>
                      <td className="py-4 text-gray-300">Hoàn thiện nội thất hạng sang</td>
                      <td className="py-4"><span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold">Đang nhận Booking</span></td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                      <td className="py-4 font-bold text-amber-400">Garden Duplex (Tầng 1-2)</td>
                      <td className="py-4 text-gray-300">Bàn giao thô, sân vườn riêng</td>
                      <td className="py-4"><span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-xs font-bold">Số lượng giới hạn</span></td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                      <td className="py-4 font-bold text-amber-400">Sky Duplex / Penthouse</td>
                      <td className="py-4 text-gray-300">Bàn giao thô, tầng cao nhất (08 căn/sàn)</td>
                      <td className="py-4"><span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-bold">Sắp ra mắt</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Đơn giá tham khảo</h4>
              <p className="text-4xl font-black text-white mb-2">~111<span className="text-2xl text-amber-500 font-bold"> Tr/m²</span></p>
              <p className="text-sm text-gray-400 mb-6">(Tính theo diện tích thông thủy, tùy tháp và vị trí)</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Tháp 9, 10, 11:</span>
                  <span className="font-bold text-emerald-400">Mở bán Giai đoạn 1</span>
                </div>
                <div className="flex justify-between text-sm border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Tháp 5, 6, 7, 8:</span>
                  <span className="font-bold text-amber-400">Chuẩn bị ra mắt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ẢNH 360 */}
      <section id="anh-360" className="py-24 bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trải Nghiệm Không Gian 360°</h2>
          <p className="text-gray-600 mb-10">Khám phá nội thất thực tế căn hộ mẫu The Privé ngay trên thiết bị của bạn.</p>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer border-4 border-white bg-gray-200 aspect-video flex items-center justify-center">
             <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="VR 360 The Privé" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-gray-900/30 group-hover:bg-gray-900/50 transition-colors duration-300"></div>
             <PlayCircle className="text-white w-20 h-20 relative z-10 drop-shadow-xl group-hover:text-amber-500 transition-colors" />
             <div className="absolute bottom-6 left-6 text-white text-left z-10 font-bold drop-shadow-md">
                Nhấp để trải nghiệm Virtual Tour
             </div>
          </div>
        </div>
      </section>

      {/* 9. CHÍNH SÁCH BÁN HÀNG */}
      <section id="chinh-sach" className="py-24 bg-amber-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Đặc Quyền Thanh Toán <span className="text-amber-600">"Bom Tấn"</span>
            </h2>
            <p className="text-lg text-gray-700">Tổng chiết khấu cao nhất thị trường lên đến <strong className="text-2xl text-red-600">13.5%</strong></p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Phương Thức Thời Gian */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Thanh Toán Theo Thời Gian</h3>
              <ul className="space-y-4 text-sm text-gray-700">
                <li className="flex justify-between items-center border-b border-gray-100 pb-2"><span className="flex gap-2"><CheckCircle2 size={18} className="text-blue-500"/> Ký HĐMB:</span> <strong>10%</strong></li>
                <li className="flex justify-between items-center border-b border-gray-100 pb-2"><span className="flex gap-2"><CheckCircle2 size={18} className="text-blue-500"/> Các đợt tiếp theo:</span> <strong>1% - 3%/tháng</strong></li>
                <li className="flex justify-between items-center border-b border-gray-100 pb-2"><span className="flex gap-2"><CheckCircle2 size={18} className="text-blue-500"/> Nhận bàn giao:</span> <strong>25%</strong></li>
                <li className="flex justify-between items-center text-blue-700 font-bold bg-blue-50 p-2 rounded mt-4"><span className="flex gap-2">Chiết khấu trực tiếp:</span> <span>6.0%</span></li>
              </ul>
            </div>

            {/* Phương Thức Vay */}
            <div className="bg-gray-900 rounded-2xl shadow-xl p-8 border-t-4 border-amber-500 transform scale-105 z-10">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Best Choice</div>
              <h3 className="text-xl font-bold text-white mb-6 text-center">Đòn Bẩy Tài Chính (TPBank)</h3>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex justify-between items-center border-b border-gray-700 pb-2"><span className="flex gap-2"><CheckCircle2 size={18} className="text-amber-500"/> Vốn tự có ký HĐMB:</span> <strong className="text-white text-lg">10%</strong></li>
                <li className="flex justify-between items-center border-b border-gray-700 pb-2"><span className="flex gap-2"><CheckCircle2 size={18} className="text-amber-500"/> Ngân hàng hỗ trợ:</span> <strong className="text-white">60% - 75%</strong></li>
                <li className="flex justify-between items-center border-b border-gray-700 pb-2"><span className="flex gap-2"><CheckCircle2 size={18} className="text-amber-500"/> Lãi suất 0% trong:</span> <strong className="text-amber-400 text-lg">30 Tháng</strong></li>
                <li className="flex justify-between items-center border-b border-gray-700 pb-2"><span className="flex gap-2"><CheckCircle2 size={18} className="text-amber-500"/> Ân hạn nợ gốc:</span> <strong className="text-amber-400 text-lg">Lên đến 5 Năm</strong></li>
              </ul>
            </div>

            {/* Phương Thức Nhanh */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-emerald-500">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Thanh Toán Nhanh</h3>
              <ul className="space-y-4 text-sm text-gray-700">
                <li className="flex justify-between items-center border-b border-gray-100 pb-2"><span className="flex gap-2"><CheckCircle2 size={18} className="text-emerald-500"/> Ký HĐMB:</span> <strong>10%</strong></li>
                <li className="flex justify-between items-center border-b border-gray-100 pb-2"><span className="flex gap-2"><CheckCircle2 size={18} className="text-emerald-500"/> Thanh toán Đợt 2:</span> <strong>60%</strong></li>
                <li className="flex justify-between items-center border-b border-gray-100 pb-2"><span className="flex gap-2"><CheckCircle2 size={18} className="text-emerald-500"/> Nhận bàn giao:</span> <strong>25%</strong></li>
                <li className="flex justify-between items-center text-emerald-700 font-bold bg-emerald-50 p-2 rounded mt-4"><span className="flex gap-2">Chiết khấu trực tiếp:</span> <span className="text-lg text-emerald-600">12.0%</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-red-600 to-amber-600 rounded-2xl p-6 text-white flex flex-col md:flex-row items-center justify-between shadow-xl">
            <div>
              <h4 className="text-2xl font-black mb-2 uppercase tracking-wide">Quà Tặng Tri Ân Đầu Xuân</h4>
              <p className="text-red-100">Áp dụng cho KH giao dịch thành công theo điều kiện.</p>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <p className="font-bold text-lg">Tặng 1 Lượng Vàng <span className="text-3xl font-black text-amber-300 ml-2">150 Triệu</span></p>
              <p className="text-sm italic">+ Hái lộc may mắn 10 - 50 Triệu đồng</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. TIẾN ĐỘ & PHÁP LÝ */}
      <section id="tien-do" className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1541888086225-f64112e8dee2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Tiến độ thi công" className="rounded-2xl shadow-xl w-full" />
            </div>
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">
                <ShieldCheck size={18} /> Bảo chứng niềm tin
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tiến Độ Thần Tốc & <br/><span className="text-amber-600">Pháp Lý Minh Bạch</span>
              </h2>
              <p className="text-gray-600 mb-8">Uy tín 22 năm của Đất Xanh Group đảm bảo cho mọi khoản đầu tư. Dự án đang giữ đúng nhịp độ thi công cam kết.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-emerald-100 text-emerald-600 p-3 rounded-full shrink-0"><CheckCircle2 size={20} /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Pháp lý đầy đủ 100%</h4>
                    <p className="text-sm text-gray-600">Đã được phê duyệt QĐ 1/500, Chủ trương đầu tư và được cấp Giấy Phép Xây Dựng toàn khu.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full shrink-0"><TrendingUp size={20} /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Hoàn thành móng hầm</h4>
                    <p className="text-sm text-gray-600">Đã thi công xong toàn bộ phần hầm xuyên suốt 12 tháp, hiện đang lên phần thân. Đảm bảo đủ điều kiện ký HĐMB.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-amber-100 text-amber-600 p-3 rounded-full shrink-0"><Clock size={20} /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Kế hoạch Cất nóc & Bàn giao</h4>
                    <p className="text-sm text-gray-600">Dự kiến cất nóc dự án vào Quý 3/2026. Bàn giao sau 26 tháng kể từ ngày ký HĐMB.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. TÀI LIỆU */}
      <section id="tai-lieu" className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trung Tâm Tài Liệu</h2>
            <p className="text-gray-600">Tải về các tài liệu chính thức từ Chủ Đầu Tư.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <button className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-200 flex flex-col items-center justify-center gap-3 transition-all hover:border-amber-400 group">
              <FileText className="text-gray-400 group-hover:text-amber-500 w-10 h-10" />
              <span className="font-bold text-gray-800">Master Catalogue</span>
              <span className="text-xs text-gray-500 flex items-center gap-1"><Download size={12}/> Tải PDF (12MB)</span>
            </button>
            <button className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-200 flex flex-col items-center justify-center gap-3 transition-all hover:border-amber-400 group">
              <BookOpen className="text-gray-400 group-hover:text-amber-500 w-10 h-10" />
              <span className="font-bold text-gray-800">Brochure Tháp 9-10-11</span>
              <span className="text-xs text-gray-500 flex items-center gap-1"><Download size={12}/> Tải PDF (8MB)</span>
            </button>
            <button className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-200 flex flex-col items-center justify-center gap-3 transition-all hover:border-amber-400 group">
              <ShieldCheck className="text-gray-400 group-hover:text-emerald-500 w-10 h-10" />
              <span className="font-bold text-gray-800">Hồ Sơ Pháp Lý (GPXD)</span>
              <span className="text-xs text-gray-500 flex items-center gap-1"><Download size={12}/> Tải PDF (Dành cho KH)</span>
            </button>
          </div>
        </div>
      </section>

      {/* 12. TIN TỨC */}
      <section id="tin-tuc" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <Newspaper className="text-amber-500 w-8 h-8" />
            <h2 className="text-3xl font-bold text-gray-900">Điểm Tin Hạ Tầng 2026</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer">
              <img src="https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Nút giao An Phú" className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-xs font-bold text-amber-600 mb-2">DỰ KIẾN T1/2026</p>
                <h3 className="font-bold text-lg text-gray-900 mb-3">Hoàn thiện 100% Nút giao An Phú (3.400 tỷ)</h3>
                <p className="text-sm text-gray-600">Nút giao 3 tầng hiện đại bậc nhất giải quyết triệt để bài toán giao thông kết nối cao tốc và Đại lộ Mai Chí Thọ.</p>
              </div>
            </article>
            <article className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer">
              <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Sân vận động" className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-xs font-bold text-amber-600 mb-2">ĐÃ KHỞI CÔNG 15/01/2026</p>
                <h3 className="font-bold text-lg text-gray-900 mb-3">Khu Liên hợp TDTT Rạch Chiếc 180ha</h3>
                <p className="text-sm text-gray-600">Trọng điểm phục vụ các giải đấu Quốc tế, SEA Games. Nâng tầm diện mạo và tiện ích toàn bộ khu vực lân cận dự án.</p>
              </div>
            </article>
            <article className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer">
              <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Sân bay Long Thành" className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-xs font-bold text-amber-600 mb-2">DỰ KIẾN T12/2026</p>
                <h3 className="font-bold text-lg text-gray-900 mb-3">Khai thác Sân bay Quốc tế Long Thành</h3>
                <p className="text-sm text-gray-600">Đón 3 chuyến bay thương mại đầu tiên, mở ra nhu cầu nhà ở khổng lồ cho chuyên gia, phi công và giới doanh nhân.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-bold tracking-widest uppercase text-white mb-4 block">The Privé</span>
            <p className="text-sm mb-4">Khu căn hộ biệt lập hạng sang trung tâm Sài Gòn.<br/>Phát triển bởi Tập đoàn Đất Xanh (Đất Xanh Group).</p>
            <p className="text-sm font-semibold text-gray-300">"Defining Luxury Living"</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Thông Tin Dự Án</h4>
            <ul className="space-y-2 text-sm">
              <li>Vị trí: Đường Song Hành, P. An Phú, Tp. Thủ Đức</li>
              <li>Quy mô: 16.7 ha | 12 tháp | 33-35 tầng</li>
              <li>Pháp lý: Đã có GPXD, QĐ 1/500</li>
              <li>Tình trạng: Mở bán giai đoạn 1 (Tháp 9-10-11)</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Liên Hệ Cố Vấn Đầu Tư</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone size={16} className="text-amber-500" /> Hotline: 0909.xxx.xxx</li>
              <li>Tư vấn thực tế tại Sa bàn & Nhà mẫu</li>
              <li>Hỗ trợ phân tích bài toán đòn bẩy tài chính (TPBank)</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-900 text-sm text-center">
          <p>&copy; 2026 The Privé Landing Page. Nội dung được trích xuất từ tài liệu bán hàng chính thức (Cập nhật tháng 6/2026).</p>
        </div>
      </footer>
    </div>
  );
}