// CHƯƠNG 1: TỔNG QUAN
const ch1_questions = [
    { id: 101, chapter: 1, question: "Khái niệm nhà hàng?", answer: "Là cơ sở kinh doanh chuyên chế biến và phục vụ các sản phẩm ăn uống nhằm đáp ứng nhu cầu cần thiết và các nhu cầu khác của khách hàng với mục đích chủ yếu là thu lợi nhuận." },
    { id: 102, chapter: 1, question: "Khái niệm bộ phận dịch vụ nhà hàng?", answer: "Là bộ phận kinh doanh phục vụ nhu cầu ăn uống tại khách sạn, phục vụ chủ yếu cho khách du lịch, hội nghị, vãng lai, tiệc cưới, sinh nhật, liên hoan." },
    { id: 103, chapter: 1, question: "Khái niệm Bar?", answer: "Là nơi kinh doanh phục vụ đồ uống, một số đồ ăn nhẹ và một số hoạt động khác nhằm đáp ứng nhu cầu ăn uống và giải trí của khách." },
    { id: 104, chapter: 1, question: "Khái niệm bộ phận Tiệc?", answer: "Là bộ phận phụ trách tổ chức tiệc, hội nghị trong khách sạn, trực thuộc khối FnB, đảm bảo sự kiện diễn ra thuận lợi, thành công." },
    { id: 105, chapter: 1, question: "Chức năng tổ chức phục vụ của nhà hàng?", answer: "Tạo điều kiện để khách tiêu thụ, nghỉ ngơi, thư giãn; phục vụ sản phẩm tự chế biến và sản phẩm chuyển bán; đòi hỏi cơ sở vật chất tiện nghi và nhân viên chuyên nghiệp." },
    { id: 106, chapter: 1, question: "Chức năng bán sản phẩm của nhà hàng?", answer: "Trao đổi và bán các thành phẩm (món ăn, đồ uống) từ nơi sản xuất đến nơi tiêu dùng, mang lại doanh thu cho nhà hàng." },
    { id: 107, chapter: 1, question: "Chức năng sản xuất của nhà hàng?", answer: "Chế biến thức ăn từ nguyên liệu thô thành món ăn chín, đồ uống, đảm bảo an toàn thực phẩm, hương vị và thẩm mỹ." },
    { id: 108, chapter: 1, question: "Chức năng của bộ phận Bar: Pha chế?", answer: "Pha chế và phục vụ đồ uống (cocktail, mocktail, rượu, bia...) đúng công thức, hương vị thơm ngon, hình thức hấp dẫn." },
    { id: 109, chapter: 1, question: "Chức năng của bộ phận Bar: Ăn nhẹ?", answer: "Cung cấp món ăn nhẹ (bánh ngọt, sandwich, trái cây) để tăng lựa chọn và kéo dài thời gian khách ở lại." },
    { id: 110, chapter: 1, question: "Chức năng của bộ phận Bar: Kiểm soát?", answer: "Kiểm soát chi phí, theo dõi nguyên liệu, hàng tồn kho, định mức pha chế để tránh lãng phí." },
    { id: 111, chapter: 1, question: "Chức năng bộ phận Tiệc: Cung cấp ăn uống?", answer: "Chuẩn bị và phục vụ món ăn, đồ uống cho các bữa tiệc (cưới, hội nghị, gala) đúng tiêu chuẩn và thời gian." },
    { id: 112, chapter: 1, question: "Chức năng bộ phận Tiệc: Phối hợp?", answer: "Phối hợp với lễ tân, marketing, kỹ thuật... để tổ chức sự kiện, bố trí không gian, âm thanh ánh sáng." },
    { id: 113, chapter: 1, question: "Nhiệm vụ bộ phận nhà hàng: Phục vụ?", answer: "Phục vụ khách ăn uống đúng giờ, kịp thời, chính xác, đúng nguyên tắc và thao tác kỹ thuật." },
    { id: 114, chapter: 1, question: "Nhiệm vụ bộ phận nhà hàng: Khách hàng?", answer: "Tìm hiểu nhu cầu khách, tạo môi trường hấp dẫn, xử lý tình huống phát sinh." },
    { id: 115, chapter: 1, question: "Nhiệm vụ bộ phận Bar: Pha chế?", answer: "Pha chế đúng công thức, chủng loại, định lượng; phục vụ đúng trình tự, tiêu chuẩn." },
    { id: 116, chapter: 1, question: "Nhiệm vụ bộ phận Bar: Quản lý?", answer: "Quản lý doanh thu, nguyên liệu, hàng hóa, lao động; xây dựng công thức tiêu chuẩn." },
    { id: 117, chapter: 1, question: "Nhiệm vụ bộ phận Tiệc: Kinh doanh?", answer: "Tìm hiểu nhu cầu, nhận đặt tiệc, xây dựng kế hoạch phục vụ." },
    { id: 118, chapter: 1, question: "Nhiệm vụ bộ phận Tiệc: Vận hành?", answer: "Phục vụ tiệc theo nhu cầu, quản lý cơ sở vật chất, phối hợp với các bộ phận khác." },
    { id: 119, chapter: 1, question: "Đặc điểm hoạt động phục vụ: Tính phức tạp?", answer: "Phục vụ nhiều đối tượng khách với nhu cầu khác nhau; nhân viên phải giao tiếp phù hợp và am hiểu đa dạng món ăn." },
    { id: 120, chapter: 1, question: "Đặc điểm hoạt động phục vụ: Kỹ thuật?", answer: "Đòi hỏi kỹ thuật cao trong quy trình phục vụ, sắp xếp bàn, bưng bê, vệ sinh an toàn thực phẩm." },
    { id: 121, chapter: 1, question: "Đặc điểm hoạt động phục vụ: Nghệ thuật?", answer: "Thái độ, tác phong làm việc ảnh hưởng lớn đến hiệu quả kinh doanh." },
    { id: 122, chapter: 1, question: "Đặc điểm hoạt động phục vụ: Công nghệ?", answer: "Ứng dụng phần mềm đặt bàn, gọi món, thanh toán để tăng hiệu quả và tính chuyên nghiệp." },
    { id: 123, chapter: 1, question: "Hình thức Ăn gọi món (A la carte)?", answer: "Khách chọn món từ thực đơn, thanh toán theo món đã chọn, nhân viên phục vụ trực tiếp." },
    { id: 124, chapter: 1, question: "Hình thức Ăn tự chọn (Buffet)?", answer: "Khách trả tiền cố định, tự chọn món bày sẵn, nhân viên hỗ trợ." },
    { id: 125, chapter: 1, question: "Hình thức Ăn theo thực đơn (Set menu)?", answer: "Khách ăn theo thực đơn cố định đặt trước, nhân viên phục vụ lần lượt các món." },
    { id: 126, chapter: 1, question: "Hình thức Ăn tại buồng (Room Service)?", answer: "Khách gọi món lên phòng, thanh toán món và phí dịch vụ." },
    { id: 127, chapter: 1, question: "Hình thức Outside Catering?", answer: "Cung cấp dịch vụ tiệc tại địa điểm theo yêu cầu của khách hàng bên ngoài khách sạn." },
    { id: 128, chapter: 1, question: "Quản lý bộ phận dịch vụ nhà hàng là ai?", answer: "Người chịu trách nhiệm trước TGĐ và GĐ F&B về mọi hoạt động F&B, duy trì chất lượng và tối đa hóa doanh thu." },
    { id: 129, chapter: 1, question: "Nhiệm vụ Quản lý nhà hàng (Restaurant Manager)?", answer: "Quản lý hoạt động kinh doanh khu vực nhà hàng, nhân lực, tài sản, giải quyết khiếu nại." },
    { id: 130, chapter: 1, question: "Nhiệm vụ Quản lý Bar (Bar Manager)?", answer: "Lập kế hoạch, điều hành nhân viên pha chế/phục vụ, quản lý hàng hóa, tài chính quầy bar." },
    { id: 131, chapter: 1, question: "Nhiệm vụ Quản lý Tiệc (Banquet Manager)?", answer: "Lập kế hoạch, tổ chức, giám sát phục vụ tiệc, báo cáo trực tiếp cho GĐ F&B." }
];

// CHƯƠNG 2: CƠ CẤU TỔ CHỨC & QUY TRÌNH
const ch2_questions = [
    { id: 201, chapter: 2, question: "Khái niệm nhà hàng trong khách sạn?", answer: "Nơi phục vụ ăn uống cho khách (điểm tâm, trưa, tối, tiệc) và là đầu mối trung gian phân phối món ăn." },
    { id: 202, chapter: 2, question: "Tập quán ăn uống là gì?", answer: "Thói quen ăn uống đã thành nề nếp trong đời sống xã hội, được mọi người chấp nhận và làm theo." },
    { id: 203, chapter: 2, question: "Khẩu vị người Việt Nam?", answer: "Dùng đa dạng gia vị (nước mắm, mắm tôm...), khẩu vị phân biệt rõ 3 miền." },
    { id: 204, chapter: 2, question: "Khẩu vị người Trung Quốc?", answer: "Cân bằng âm dương, ngũ vị; thích rượu mạnh, uống trà; bữa ăn có phần chính và phần độn." },
    { id: 205, chapter: 2, question: "Khẩu vị người Nhật Bản?", answer: "Thích hải sản, món ăn 5 màu, gia vị hăng cay; uống trà đạo, rượu sake; ăn bằng mắt (nghệ thuật)." },
    { id: 206, chapter: 2, question: "Khẩu vị người Pháp?", answer: "Cầu kỳ, sành điệu; bữa tối có súp; dùng sốt và rượu trong chế biến; thích vang đỏ, cognac." },
    { id: 207, chapter: 2, question: "Khẩu vị người Nga?", answer: "Thích món quay, hầm, thịt muối, súp (có thịt); dùng nhiều bơ sữa, khoai tây; uống rượu mạnh đầu bữa." },
    { id: 208, chapter: 2, question: "Khẩu vị người Âu-Mỹ?", answer: "Ăn 3 bữa (sáng/tối chính); thích thịt cốt lết, gà, đồ hộp; uống rượu mạnh với đá; phong cách ăn nhanh, sạch sẽ." },
    { id: 209, chapter: 2, question: "Quy trình A la carte: Bước 1?", answer: "Chuẩn bị: Vệ sinh, setup bàn, kiểm tra dụng cụ, đồ uống, thực đơn." },
    { id: 210, chapter: 2, question: "Quy trình A la carte: Bước 2?", answer: "Chào đón và xếp chỗ: Chào khách, hỏi đặt bàn, dẫn vào bàn, mời nước." },
    { id: 211, chapter: 2, question: "Quy trình A la carte: Bước 3?", answer: "Tiếp nhận yêu cầu: Trình thực đơn, tư vấn, ghi order." },
    { id: 212, chapter: 2, question: "Quy trình A la carte: Bước 4?", answer: "Chuyển order: Chuyển cho bếp/bar và thu ngân." },
    { id: 213, chapter: 2, question: "Quy trình A la carte: Bước 5?", answer: "Điều chỉnh dụng cụ: Mang dụng cụ phù hợp món ăn, thu dụng cụ thừa." },
    { id: 214, chapter: 2, question: "Quy trình A la carte: Bước 6?", answer: "Phục vụ: Mang đồ uống/món ăn, kiểm tra đúng order, quan sát hỗ trợ khách." },
    { id: 215, chapter: 2, question: "Quy trình A la carte: Bước 7?", answer: "Thanh toán: Xác định cách thanh toán, kiểm tra hóa đơn, nhận tiền, xin ý kiến." },
    { id: 216, chapter: 2, question: "Quy trình A la carte: Bước 8?", answer: "Tiễn khách: Kéo ghế, lấy mũ áo, chào và hẹn gặp lại." },
    { id: 217, chapter: 2, question: "Quy trình A la carte: Bước 9?", answer: "Dọn dẹp: Thu dọn, setup lại bàn cho khách mới." },
    { id: 218, chapter: 2, question: "Quy trình Set menu: Bước 1?", answer: "Chuẩn bị: Vệ sinh, setup bàn theo thực đơn, nắm vững thực đơn." },
    { id: 219, chapter: 2, question: "Quy trình Set menu: Bước 2?", answer: "Chào đón: Xác định đoàn khách, dẫn vào bàn, mời nước." },
    { id: 220, chapter: 2, question: "Quy trình Set menu: Bước 3?", answer: "Phục vụ: Đồ uống khai vị, món ăn theo thứ tự (khai vị -> chính -> tráng miệng)." },
    { id: 221, chapter: 2, question: "Quy trình Set menu: Bước 4?", answer: "Thanh toán: Kiểm tra món, hóa đơn, thực hiện thanh toán." },
    { id: 222, chapter: 2, question: "Quy trình Buffet: Bước 1?", answer: "Chuẩn bị: Vệ sinh, dụng cụ buffet, kê bàn, bày món, setup bàn ăn." },
    { id: 223, chapter: 2, question: "Quy trình Buffet: Bước 2?", answer: "Chào đón: Hướng dẫn mua vé/nhận phiếu, dẫn vào phòng ăn." },
    { id: 224, chapter: 2, question: "Quy trình Buffet: Bước 3?", answer: "Phục vụ: Bao quát quầy line, bổ sung đồ ăn/dụng cụ, thu dọn đĩa bẩn." },
    { id: 225, chapter: 2, question: "Quy trình Buffet: Bước 4?", answer: "Thanh toán và tiễn khách: Thu phí phụ trội (nếu có), cảm ơn khách." },
    { id: 226, chapter: 2, question: "Quy trình Room Service: Bước 1?", answer: "Tiếp nhận: Nhận order (thẻ treo/điện thoại), tổng hợp nhu cầu." },
    { id: 227, chapter: 2, question: "Quy trình Room Service: Bước 2?", answer: "Chuẩn bị: Xe đẩy/khay, dụng cụ, đồ ăn (che đậy), hóa đơn." },
    { id: 228, chapter: 2, question: "Quy trình Room Service: Bước 3?", answer: "Phục vụ: Vận chuyển, xin vào phòng, bày đồ, xin chữ ký, cảm ơn." },
    { id: 229, chapter: 2, question: "Quy trình Room Service: Bước 4?", answer: "Thu dọn: Xin vào phòng, thu dụng cụ, chuyển về bộ phận." }
];

// CHƯƠNG 3: KIẾN THỨC ĐỒ UỐNG
const ch3_questions = [
    { id: 301, chapter: 3, question: "Khái niệm đồ uống?", answer: "Chất lỏng chế biến hoặc tự nhiên, giúp giải nhiệt, giải khát, cung cấp năng lượng." },
    { id: 302, chapter: 3, question: "Rượu vang là gì?", answer: "Rượu lên men tự nhiên từ nước quả (chủ yếu là nho)." },
    { id: 303, chapter: 3, question: "Vang đỏ (Red Wine)?", answer: "Lên men từ nước và vỏ nho đỏ/đen. Vỏ tạo màu và tannin. Ủ lâu hơn vang trắng." },
    { id: 304, chapter: 3, question: "Phục vụ Vang đỏ?", answer: "Nhiệt độ 16-18°C. Ly chân cao, bầu to (190-240ml). Không cần xô đá. Rót 1/2 ly." },
    { id: 305, chapter: 3, question: "Vang trắng (White Wine)?", answer: "Lên men từ nước ép nho (bỏ vỏ). Màu vàng nhạt/trắng. Chua nhẹ." },
    { id: 306, chapter: 3, question: "Phục vụ Vang trắng?", answer: "Nhiệt độ 9-12°C. Ly chân cao, bầu nhỏ hơn (150ml). Cần xô đá. Rót 2/3 ly." },
    { id: 307, chapter: 3, question: "Vang hồng (Rose Wine)?", answer: "Lên men từ nho đỏ nhưng vỏ tiếp xúc ngắn. Màu hồng. Ít chát." },
    { id: 308, chapter: 3, question: "Vang sủi bọt (Sparkling Wine)?", answer: "Vang có khí CO2 (tự nhiên hoặc nạp vào). Phục vụ lạnh 6-9°C. Ly ống/bán cầu." },
    { id: 309, chapter: 3, question: "Vang cường hóa (Fortified Wine)?", answer: "Vang được thêm rượu mạnh (Brandy). Sweet (thêm trong khi lên men) hoặc Dry (thêm sau)." },
    { id: 310, chapter: 3, question: "Vang mùi (Aromatized Wine)?", answer: "Vang cường hóa thêm hương thảo mộc (VD: Vermouth). Dùng khai vị hoặc pha chế." },
    { id: 311, chapter: 3, question: "Nguyên tắc kết hợp Vang - Món ăn?", answer: "Vang đỏ + Thịt đỏ. Vang trắng + Thịt trắng/Hải sản. Vang hồng + Món trung tính. Vang ngọt + Tráng miệng." },
    { id: 312, chapter: 3, question: "Bảo quản rượu vang?", answer: "Nhiệt độ 13-15°C, ít ánh sáng, đặt nằm ngang (để nút bần ẩm), không rung lắc." },
    { id: 313, chapter: 3, question: "Rượu Brandy?", answer: "Chưng cất từ trái cây (nho, táo...). Ủ thùng sồi. 40% Vol. Mùi gỗ sồi. Ly Tulip/Snifter." },
    { id: 314, chapter: 3, question: "Rượu Whisky?", answer: "Chưng cất từ ngũ cốc (lúa mạch, ngô...). Ủ thùng sồi. Mùi khói. Ly Rock (cốc cối thấp)." },
    { id: 315, chapter: 3, question: "Các loại Whisky nổi tiếng?", answer: "Scotch (Scotland), American (Mỹ - Bourbon), Canadian, Irish." },
    { id: 316, chapter: 3, question: "Rượu Rum?", answer: "Chưng cất từ mía/rỉ đường. Light, Gold, Dark Rum. Dùng pha chế (Mojito...)." },
    { id: 317, chapter: 3, question: "Rượu Vodka?", answer: "Chưng cất từ ngũ cốc/khoai tây. Lọc than hoạt tính. Không màu, không mùi. Dùng pha chế." },
    { id: 318, chapter: 3, question: "Rượu Gin?", answer: "Chưng cất từ ngũ cốc + quả bách xù (Juniper) + thảo mộc. Mùi bách xù đặc trưng." },
    { id: 319, chapter: 3, question: "Rượu Tequila?", answer: "Chưng cất từ cây Blue Agave (Mexico). Blanco, Gold, Anejo. Uống shot hoặc pha chế." },
    { id: 320, chapter: 3, question: "Quy tắc phục vụ rượu vang trong bữa ăn?", answer: "Nhẹ trước nặng sau; Trắng trước Đỏ sau; Chua trước Ngọt sau; Thường trước Ngon sau." }
];

// Combine all questions for both modes
// CHƯƠNG 4: TỔ CHỨC TIỆC & HỘI NGHỊ
const ch4_questions = [
    { id: 401, chapter: 4, question: "Nêu khái niệm, phân loại tiệc?", answer: "Khái niệm: Tiệc là bữa ăn long trọng và thịnh soạn, nhiều người tham gia nhằm thực hiện những mục đích để tiếp khách, chiêu đãi bạn bè hoặc vì một mục đích nào đó.\n\nPhân loại tiệc:\n- Theo hình thức tổ chức: Tiệc ngồi, Tiệc đứng (Standing Buffet, Sitting Buffet, Handing Buffet, Coffee break)\n- Theo thiết kế: Đại tiệc, Yến tiệc, Vũ tiệc, Tiệc trà, Tiệc cà phê, Tiệc cocktail\n- Theo Ý nghĩa, nội dung tiệc: Tiệc ngoại giao, Tiệc chiêu đãi, Tiệc liên hoan, Tiệc hội thảo, Tiệc hội nghị, Tiệc họp mặt, Tiệc triển lãm\n- Theo Địa điểm: Tiệc trong nhà, tiệc ngoài trời, tiệc lưu động\n- Theo Thời gian: Tiệc sáng, Tiệc trưa, Tiệc tối, Tiệc đêm" },
    { id: 402, chapter: 4, question: "Nêu khái niệm, phân loại và đặc điểm của tiệc ngồi?", answer: "Khái niệm: Tiệc ngồi là loại tiệc trong đó khách ngồi tại bàn khi ăn tiệc mà không phải rời khỏi bàn để lấy thức ăn, có nhân viên phục vụ tại chỗ món ăn, đồ uống.\n\nĐặc điểm:\n- Thời gian: 1-2h (bữa chính)\n- Số lượng khách nhiều, xác định, ngồi theo ngôi thứ\n- Mục đích: Tiệc cưới, chiêu đãi, ngoại giao\n- Không khí thân mật, lịch sự, có diễn văn\n- Thực đơn nhiều món (Á/Âu >= 3 món nóng), có thực đơn tại bàn\n- Phục vụ trực tiếp tại bàn, chu đáo\n- Ăn theo trình tự thực đơn, có thể mời rượu khai vị" },
    { id: 403, chapter: 4, question: "Nêu khái niệm, phân loại và đặc điểm của tiệc đứng?", answer: "Khái niệm: Khách rời bàn để lấy thức ăn.\n\nPhân loại:\n- Standing Party: Ăn bằng dĩa, đứng ăn, không bàn tiệc.\n- Cocktail Party: Tiệc rượu đứng, đồ uống là chính (cocktail, bia...), đồ ăn nhẹ (fingerfood).\n- Buffet Party: Tiệc lớn, có quầy line và bàn ăn setup sẵn. Khách tự lấy đồ ăn, có thể được phục vụ đồ uống.\n- Coffee/Tea break: Tiệc trà/cà phê giữa giờ hội nghị, ăn nhẹ (bánh, hoa quả).\n- Outside Catering: Tiệc lưu động bên ngoài.\n\nĐặc điểm:\n- Thời gian linh hoạt, ngắn\n- Khách đông, không xác định chính xác\n- Mục đích đa dạng (khai trương, sinh nhật...)\n- Không khí cởi mở\n- Thực đơn phong phú, không đặt thực đơn tại bàn (có tên món)\n- Khách tự phục vụ là chính" },
    { id: 404, chapter: 4, question: "Phân tích các bước quy trình phục vụ tiệc?", answer: "Bước 1: Tìm hiểu thông tin (Tiếp nhận, xác định khả năng, lập kế hoạch, phân công).\nBước 2: Hội ý, phân công nhiệm vụ.\nBước 3: Chuẩn bị trước giờ phục vụ (Vệ sinh, phương tiện, dụng cụ, kê bàn ghế, đồ uống).\nBước 4: Trang trí phòng tiệc.\nBước 5: Kiểm tra, rà soát.\nBước 6: Đón tiếp, chào hỏi, hướng dẫn khách.\nBước 7: Phục vụ đồ uống (Kiểm tra, ướp lạnh, rót rượu).\nBước 8: Phục vụ món ăn (Kiểm tra, mời món, phục vụ đúng kỹ thuật).\nBước 9: Thanh toán và kết thúc (Thanh toán, xin ý kiến, tiễn khách).\nBước 10: Thu dọn sau phục vụ.\nBước 11: Đánh giá công tác phục vụ (Rút kinh nghiệm)." },
    { id: 405, chapter: 4, question: "Phân tích các bước quy trình phục vụ hội nghị hội thảo?", answer: "Bước 1: Tìm hiểu thông tin (Hợp đồng, kế hoạch, phân công, dự kiến).\nBước 2: Hội ý, phân công nhiệm vụ.\nBước 3: Chuẩn bị (Vệ sinh, thiết bị nghe nhìn, trang trí, nước uống, tài liệu).\nBước 4: Trang trí phòng hội nghị.\nBước 5: Kiểm tra, rà soát.\nBước 6: Đón tiếp (Chào hỏi, phát tài liệu, hướng dẫn chỗ ngồi).\nBước 7: Phục vụ hội nghị (Vận hành thiết bị, trực phục vụ nước, hỗ trợ).\nBước 8: Phục vụ ăn uống giải lao (Teabreak).\nBước 9: Phục vụ ăn uống theo hợp đồng (Ăn trưa/tối).\nBước 10: Thanh toán hợp đồng.\nBước 11: Thu dọn sau phục vụ." }
];

// CHƯƠNG 5: LẬP KẾ HOẠCH & GIÁM SÁT
const ch5_questions = [
    { id: 501, chapter: 5, question: "Nêu khái niệm và phân tích các bước lập kế hoạch và giám sát khu vực nhà hàng?", answer: "LẬP KẾ HOẠCH:\nA. Dự báo nhu cầu (Căn cứ vào buồng, khách, dữ liệu cũ... Xác định số khách, doanh thu, thực đơn).\nB. Lập kế hoạch thực đơn (Lựa chọn món ăn, xác định giá bán, thiết kế menu).\nC. Lập lịch trình phục vụ (Các bước từ chuẩn bị đến thu dọn).\nD. Lập kế hoạch nguồn lực (Cơ sở vật chất, Lao động).\n\nGIÁM SÁT:\nA. Giám sát chuẩn bị (Ngoại hình, phòng ăn, thực đơn, đặt bàn).\nB. Giám sát phục vụ (Quy trình, thanh toán, giao tiếp).\nC. Giám sát kết thúc ca (Vệ sinh, báo cáo, bàn giao).\nD. Giám sát thu chi (Tiền mặt, hóa đơn, báo cáo)." },
    { id: 502, chapter: 5, question: "Phân tích các bước lập kế hoạch và giám sát của bộ phận Bar?", answer: "LẬP KẾ HOẠCH:\nA. Dự báo nhu cầu.\nB. Kế hoạch sản phẩm/dịch vụ (Thực đơn đồ uống: thiết kế, lựa chọn, định giá; Sự kiện/Giải trí).\nC. Lập lịch trình phục vụ.\nD. Kế hoạch cơ sở vật chất.\nE. Kế hoạch lao động.\n\nGIÁM SÁT:\nA. Giám sát pha chế (Quầy bar, thiết bị, nguyên liệu, chất lượng đồ uống).\nB. Giám sát quy trình phục vụ (Đón khách, phục vụ, thanh toán, dọn dẹp)." },
    { id: 503, chapter: 5, question: "Phân tích các bước lập kế hoạch và giám sát của bộ phận Tiệc?", answer: "LẬP KẾ HOẠCH:\nA. Dự báo nhu cầu.\nB. Nhận đặt tiệc.\nC. Giới thiệu, tư vấn, thống nhất.\nD. Hợp đồng tiệc.\nE. Lập kế hoạch phục vụ (Chương trình, tập dượt, trang trí, dụng cụ).\nF. Kế hoạch nguyên vật liệu.\nG. Kế hoạch lao động.\n\nGIÁM SÁT:\nA. Giám sát chuẩn bị (Trang trí, setup bàn, âm thanh ánh sáng).\nB. Giám sát phục vụ (Quy trình, điều phối bếp-tiệc, giải quyết sự cố).\nC. Giám sát sau tiệc (Dọn dẹp, kiểm kê, thanh toán, đánh giá)." }
];

// CHƯƠNG 7: QUẢN TRỊ DOANH THU & CHI PHÍ
const ch7_questions = [
    { id: 701, chapter: 7, question: "Nêu khái niệm và điều kiện áp dụng quản trị doanh thu nhà hàng?", answer: "Khái niệm: Hoạch định chiến lược nhằm bán đúng chỗ ngồi, đúng khách, đúng giá, đúng thời gian, đúng kênh để tối ưu lợi nhuận.\n\nMục tiêu: Tối đa hóa lợi nhuận, cân bằng cung cầu.\n\nĐiều kiện áp dụng:\n- Cung cố định, cầu biến động.\n- Sản phẩm đặt trước được.\n- Không lưu kho được.\n- Chi phí cố định cao, biến đổi thấp.\n- Nhu cầu thay đổi theo thời gian.\n- Hệ thống giá linh hoạt." },
    { id: 702, chapter: 7, question: "Phân tích nội dung quản trị doanh thu nhà hàng?", answer: "A. Quản trị năng lực (Tối đa sức chứa, sắp xếp bàn, quản lý đặt bàn).\nB. Quản trị thời gian trả bàn (Tăng vòng quay bàn: nhạc/ánh sáng, menu nhanh, thao tác nhanh).\nC. Tối ưu hóa thực đơn (Menu engineering: món lợi nhuận cao, vị trí vàng).\nD. Quản trị giá (Giá linh hoạt theo giờ/ngày/đối tượng).\nE. Đa dạng kênh phân phối (Tại chỗ, mang về, online).\nF. Kỹ thuật bán tăng doanh thu (Upselling, Cross-selling)." },
    { id: 703, chapter: 7, question: "Nêu khái niệm và nội dung của kiểm soát chi phí?", answer: "Khái niệm: So sánh chi phí thực tế với dự toán/định mức.\n\nNội dung:\nA. Kiểm soát mua hàng (Quy trình mua, nhận hàng, lưu kho).\nB. Kiểm soát chi phí nhân công (Năng suất, định biên, sắp xếp ca).\nC. Kiểm soát điện nước (Tiết kiệm, giám sát).\nD. Kiểm soát chi phí món ăn/đồ uống (Định mức tiêu hao, công thức tiêu chuẩn, giá vốn).\nE. Nhận diện yếu tố ảnh hưởng (Sai sót, lãng phí, mất mát, quản lý kém)." }
];

// Combine all questions for both modes
const fillQuestions = [...ch1_questions, ...ch2_questions, ...ch3_questions, ...ch4_questions, ...ch5_questions, ...ch7_questions];
const essayQuestions = [...ch1_questions, ...ch2_questions, ...ch3_questions, ...ch4_questions, ...ch5_questions, ...ch7_questions];
