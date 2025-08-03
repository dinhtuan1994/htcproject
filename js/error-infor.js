const errorInforDatabase = {
    huawei: {
        E001: {
            name: "Lỗi cách ly DC",
            description: "Điện trở cách ly giữa DC+ hoặc DC- với đất quá thấp",
            causes: ["Tấm pin bị hư hỏng hoặc rò rỉ", "Cáp DC bị hỏng cách điện", "Connector DC bị ẩm ướt", "Biến tần bị ẩm ướt"],
            solutions: ["Kiểm tra tất cả tấm pin bằng đồng hồ vạn năng", "Kiểm tra cáp DC và connector có bị hỏng không", "Làm khô và vệ sinh connector", "Thay thế tấm pin hoặc cáp bị hỏng", "Liên hệ kỹ thuật viên nếu vẫn lỗi"],
            severity: "Cao",
            color: "red"
        },
        E002: {
            name: "Lỗi điện trở cách ly",
            description: "Điện trở cách ly không đạt yêu cầu tối thiểu",
            causes: ["Độ ẩm cao trong hệ thống", "Tấm pin bị lão hóa", "Cáp DC bị hỏng"],
            solutions: ["Kiểm tra độ ẩm trong hệ thống", "Vệ sinh và làm khô các connector", "Thay thế cáp DC nếu cần", "Kiểm tra tấm pin"],
            severity: "Trung bình",
            color: "orange"
        },
        E005: {
            name: "Lỗi điện áp DC cao",
            description: "Điện áp DC vượt quá giới hạn cho phép của biến tần",
            causes: ["Kết nối quá nhiều tấm pin nối tiếp", "Nhiệt độ thấp làm tăng điện áp", "Cấu hình hệ thống không phù hợp"],
            solutions: ["Kiểm tra số lượng tấm pin trong chuỗi", "Giảm số tấm pin nếu cần thiết", "Kiểm tra thông số kỹ thuật biến tần", "Cấu hình lại hệ thống"],
            severity: "Cao",
            color: "red"
        },
        E003: {
            name: "Lỗi điện áp DC thấp",
            description: "Điện áp DC thấp hơn điện áp khởi động",
            causes: ["Ánh sáng mặt trời yếu", "Tấm pin bị che phủ", "Kết nối tấm pin lỏng", "Tấm pin bị hỏng"],
            solutions: ["Kiểm tra ánh sáng mặt trời", "Loại bỏ vật che phủ tấm pin", "Kiểm tra và siết chặt kết nối", "Đo điện áp từng tấm pin"],
            severity: "Thấp",
            color: "yellow"
        },
        E004: {
            name: "Lỗi tần số lưới",
            description: "Tần số lưới AC ngoài phạm vi 50Hz ±2Hz",
            causes: ["Tần số lưới không ổn định", "Cài đặt tham số sai", "Lưới điện có vấn đề"],
            solutions: ["Kiểm tra tần số lưới bằng đồng hồ", "Cài đặt lại tham số tần số", "Liên hệ điện lực kiểm tra lưới", "Chờ lưới ổn định rồi reset"],
            severity: "Trung bình",
            color: "orange"
        },
        E006: {
            name: "Lỗi điện áp lưới cao",
            description: "Điện áp AC vượt quá 253V (1 pha) hoặc 440V (3 pha)",
            causes: ["Điện áp lưới quá cao", "Cài đặt ngưỡng điện áp sai", "Lưới điện không ổn định"],
            solutions: ["Đo điện áp lưới thực tế", "Cài đặt lại ngưỡng bảo vệ", "Sử dụng ổn áp nếu cần", "Liên hệ điện lực"],
            severity: "Cao",
            color: "red"
        },
        E007: {
            name: "Lỗi điện áp lưới thấp",
            description: "Điện áp AC thấp hơn 180V (1 pha) hoặc 320V (3 pha)",
            causes: ["Điện áp lưới quá thấp", "Tải tiêu thụ quá lớn", "Dây dẫn quá nhỏ"],
            solutions: ["Kiểm tra điện áp tại điểm đấu nối", "Giảm tải tiêu thụ", "Nâng cấp dây dẫn", "Liên hệ điện lực"],
            severity: "Trung bình",
            color: "orange"
        },
        E011: {
            name: "Lỗi nhiệt độ cao",
            description: "Nhiệt độ bên trong biến tần vượt quá 85°C",
            causes: ["Thông gió không đủ", "Nhiệt độ môi trường cao", "Quạt tản nhiệt hỏng", "Tải quá mức"],
            solutions: ["Cải thiện thông gió", "Vệ sinh tản nhiệt", "Thay quạt tản nhiệt", "Giảm công suất hoạt động"],
            severity: "Cao",
            color: "red"
        },
        E008: {
            name: "Lỗi relay",
            description: "Relay chính không hoạt động",
            causes: ["Relay bị hỏng", "Mạch điều khiển lỗi", "Điện áp cấp nguồn không ổn định"],
            solutions: ["Kiểm tra relay chính", "Thay relay nếu hỏng", "Kiểm tra mạch điều khiển", "Ổn định nguồn cấp"],
            severity: "Cao",
            color: "red"
        },
        E009: {
            name: "Lỗi PV reverse",
            description: "Cực tính DC bị đảo ngược",
            causes: ["Đấu ngược cực DC+ và DC-", "Kết nối sai cực tính tấm pin"],
            solutions: ["Tắt biến tần ngay lập tức", "Kiểm tra cực tính DC", "Đấu lại đúng cực tính", "Kiểm tra tấm pin"],
            severity: "Cao",
            color: "red"
        },
        E010: {
            name: "Lỗi EEPROM",
            description: "Lỗi bộ nhớ EEPROM",
            causes: ["EEPROM bị hỏng", "Dữ liệu bị corrupt", "Lỗi firmware"],
            solutions: ["Reset về cài đặt gốc", "Cập nhật firmware", "Thay thế EEPROM", "Liên hệ hỗ trợ kỹ thuật"],
            severity: "Cao",
            color: "red"
        },
        E012: {
            name: "Lỗi DSP",
            description: "Lỗi bộ xử lý tín hiệu số",
            causes: ["DSP bị hỏng", "Firmware lỗi", "Nhiễu điện từ"],
            solutions: ["Reset biến tần", "Cập nhật firmware", "Kiểm tra chống nhiễu", "Thay thế bo mạch chính"],
            severity: "Cao",
            color: "red"
        },
        E013: {
            name: "Lỗi DCI",
            description: "Dòng DC injection quá cao",
            causes: ["Mạch lọc DC bị lỗi", "Transformer không cân bằng", "Mạch điều khiển lỗi"],
            solutions: ["Kiểm tra mạch lọc DC", "Kiểm tra transformer", "Cân chỉnh mạch điều khiển", "Thay thế linh kiện lỗi"],
            severity: "Trung bình",
            color: "orange"
        },
        E014: {
            name: "Lỗi GFDI",
            description: "Lỗi phát hiện lỗi nối đất",
            causes: ["Hệ thống nối đất kém", "Cảm biến GFDI lỗi", "Dòng rò đất quá lớn"],
            solutions: ["Kiểm tra hệ thống nối đất", "Thay cảm biến GFDI", "Kiểm tra cách điện", "Cải thiện nối đất"],
            severity: "Cao",
            color: "red"
        },
        E015: {
            name: "Lỗi PID",
            description: "Lỗi bộ điều khiển PID",
            causes: ["Tham số PID sai", "Cảm biến phản hồi lỗi", "Mạch điều khiển bị nhiễu"],
            solutions: ["Cài đặt lại tham số PID", "Kiểm tra cảm biến", "Chống nhiễu mạch điều khiển", "Hiệu chỉnh bộ điều khiển"],
            severity: "Trung bình",
            color: "orange"
        }
    },
    growatt: {
        E001: {
            name: "Lỗi điện áp DC",
            description: "Điện áp DC không nằm trong phạm vi hoạt động",
            causes: ["Điện áp DC quá thấp hoặc quá cao", "Kết nối tấm pin không đúng", "Tấm pin bị che phủ"],
            solutions: ["Kiểm tra điện áp DC bằng đồng hồ", "Kiểm tra kết nối tấm pin", "Loại bỏ vật che phủ tấm pin", "Kiểm tra cáp DC"],
            severity: "Trung bình",
            color: "orange"
        },
        E006: {
            name: "Lỗi điện áp AC",
            description: "Điện áp lưới AC ngoài phạm vi cho phép",
            causes: ["Điện áp lưới không ổn định", "Kết nối AC không đúng", "Lưới điện có vấn đề"],
            solutions: ["Kiểm tra điện áp lưới bằng đồng hồ", "Kiểm tra kết nối AC", "Liên hệ điện lực nếu lưới có vấn đề", "Chờ lưới ổn định rồi reset biến tần"],
            severity: "Trung bình",
            color: "orange"
        },
        E007: {
            name: "Lỗi tần số AC",
            description: "Tần số lưới AC ngoài phạm vi cho phép (50Hz ±2Hz)",
            causes: ["Tần số lưới không ổn định", "Cài đặt tham số không đúng", "Lưới điện có vấn đề"],
            solutions: ["Kiểm tra tần số lưới", "Kiểm tra cài đặt tham số biến tần", "Chờ lưới ổn định", "Liên hệ điện lực nếu cần"],
            severity: "Thấp",
            color: "yellow"
        },
        E002: {
            name: "Lỗi cách ly DC",
            description: "Điện trở cách ly DC không đạt yêu cầu",
            causes: ["Tấm pin bị rò rỉ", "Cáp DC hỏng cách điện", "Connector ẩm ướt"],
            solutions: ["Kiểm tra tấm pin", "Thay cáp DC", "Vệ sinh connector", "Kiểm tra hệ thống chống thấm"],
            severity: "Cao",
            color: "red"
        },
        E003: {
            name: "Lỗi điện áp DC cao",
            description: "Điện áp DC vượt quá giới hạn cho phép",
            causes: ["Quá nhiều tấm pin nối tiếp", "Nhiệt độ thấp tăng điện áp", "Cấu hình sai"],
            solutions: ["Giảm số tấm pin trong chuỗi", "Kiểm tra thông số biến tần", "Cấu hình lại hệ thống"],
            severity: "Cao",
            color: "red"
        },
        E004: {
            name: "Lỗi điện áp DC thấp",
            description: "Điện áp DC thấp hơn điện áp khởi động",
            causes: ["Ánh sáng yếu", "Tấm pin che phủ", "Kết nối lỏng"],
            solutions: ["Kiểm tra ánh sáng", "Loại bỏ vật che", "Siết chặt kết nối"],
            severity: "Thấp",
            color: "yellow"
        },
        E005: {
            name: "Lỗi nhiệt độ",
            description: "Nhiệt độ biến tần quá cao",
            causes: ["Thông gió kém", "Quạt hỏng", "Tải quá mức"],
            solutions: ["Cải thiện thông gió", "Thay quạt", "Giảm tải"],
            severity: "Trung bình",
            color: "orange"
        },
        E008: {
            name: "Lỗi GFCI",
            description: "Lỗi bảo vệ dòng rò đất",
            causes: ["Dòng rò đất quá lớn", "GFCI bị hỏng", "Cách điện kém"],
            solutions: ["Kiểm tra cách điện hệ thống", "Thay GFCI", "Kiểm tra nối đất"],
            severity: "Cao",
            color: "red"
        },
        E009: {
            name: "Lỗi DCI",
            description: "Dòng DC injection quá cao",
            causes: ["Mạch lọc DC lỗi", "Transformer không cân bằng", "Điều khiển PWM sai"],
            solutions: ["Kiểm tra mạch lọc DC", "Cân chỉnh transformer", "Hiệu chỉnh PWM", "Thay linh kiện lỗi"],
            severity: "Trung bình",
            color: "orange"
        },
        E010: {
            name: "Lỗi relay",
            description: "Relay AC không hoạt động",
            causes: ["Relay bị hỏng", "Mạch điều khiển relay lỗi", "Điện áp điều khiển thấp"],
            solutions: ["Thay relay AC", "Kiểm tra mạch điều khiển", "Kiểm tra nguồn điều khiển", "Vệ sinh tiếp điểm relay"],
            severity: "Cao",
            color: "red"
        },
        E011: {
            name: "Lỗi PV reverse",
            description: "Cực tính PV bị đảo ngược",
            causes: ["Đấu ngược DC+ và DC-", "Sai cực tính tấm pin"],
            solutions: ["Tắt biến tần ngay", "Kiểm tra cực tính DC", "Đấu lại đúng cực", "Kiểm tra dây dẫn"],
            severity: "Cao",
            color: "red"
        },
        E012: {
            name: "Lỗi PV configuration",
            description: "Cấu hình PV không phù hợp",
            causes: ["Số tấm pin không phù hợp", "Điện áp chuỗi quá cao/thấp", "Công suất vượt quá giới hạn"],
            solutions: ["Kiểm tra số lượng tấm pin", "Tính toán lại điện áp chuỗi", "Điều chỉnh cấu hình", "Chia nhỏ chuỗi nếu cần"],
            severity: "Trung bình",
            color: "orange"
        },
        E013: {
            name: "Lỗi EEPROM",
            description: "Lỗi bộ nhớ EEPROM",
            causes: ["EEPROM bị hỏng", "Dữ liệu bị mất", "Lỗi ghi/đọc dữ liệu"],
            solutions: ["Reset cài đặt gốc", "Cập nhật firmware", "Thay EEPROM", "Sao lưu cài đặt"],
            severity: "Cao",
            color: "red"
        },
        E014: {
            name: "Lỗi DSP",
            description: "Lỗi bộ xử lý DSP",
            causes: ["DSP bị hỏng", "Firmware corrupt", "Nhiễu điện từ mạnh"],
            solutions: ["Reset DSP", "Cập nhật firmware", "Chống nhiễu", "Thay bo mạch chính"],
            severity: "Cao",
            color: "red"
        },
        E015: {
            name: "Lỗi RCD",
            description: "Lỗi thiết bị chống rò điện",
            causes: ["RCD bị hỏng", "Dòng rò quá lớn", "Cài đặt RCD sai"],
            solutions: ["Kiểm tra RCD", "Thay RCD mới", "Kiểm tra dòng rò", "Cài đặt lại tham số"],
            severity: "Cao",
            color: "red"
        }
    },
    sungrow: {
        F001: {
            name: "Lỗi cách ly",
            description: "Lỗi điện trở cách ly DC",
            causes: ["Tấm pin bị rò rỉ", "Cáp DC hỏng cách điện", "Độ ẩm cao"],
            solutions: ["Kiểm tra tấm pin", "Kiểm tra cáp DC", "Vệ sinh hệ thống", "Làm khô connector"],
            severity: "Cao",
            color: "red"
        },
        F002: {
            name: "Lỗi điện áp lưới",
            description: "Điện áp lưới ngoài phạm vi",
            causes: ["Điện áp lưới không ổn định", "Kết nối AC lỏng"],
            solutions: ["Kiểm tra điện áp lưới", "Kiểm tra kết nối AC", "Chờ lưới ổn định"],
            severity: "Trung bình",
            color: "orange"
        },
        F003: {
            name: "Lỗi tần số lưới",
            description: "Tần số lưới ngoài phạm vi 50Hz ±2Hz",
            causes: ["Tần số lưới không ổn định", "Cài đặt tham số sai"],
            solutions: ["Kiểm tra tần số lưới", "Cài đặt lại tham số", "Liên hệ điện lực"],
            severity: "Trung bình",
            color: "orange"
        },
        F004: {
            name: "Lỗi điện áp DC",
            description: "Điện áp DC ngoài phạm vi hoạt động",
            causes: ["Cấu hình chuỗi sai", "Tấm pin bị hỏng", "Kết nối DC lỏng"],
            solutions: ["Kiểm tra cấu hình chuỗi", "Đo điện áp từng tấm pin", "Siết chặt kết nối DC"],
            severity: "Trung bình",
            color: "orange"
        },
        F005: {
            name: "Lỗi nhiệt độ",
            description: "Nhiệt độ biến tần quá cao",
            causes: ["Thông gió không đủ", "Quạt tản nhiệt hỏng", "Môi trường quá nóng"],
            solutions: ["Cải thiện thông gió", "Thay quạt tản nhiệt", "Giảm tải hoạt động"],
            severity: "Cao",
            color: "red"
        },
        F006: {
            name: "Lỗi relay",
            description: "Relay chính không hoạt động",
            causes: ["Relay bị hỏng", "Mạch điều khiển lỗi", "Tiếp điểm bị cháy"],
            solutions: ["Thay relay mới", "Kiểm tra mạch điều khiển", "Vệ sinh tiếp điểm", "Kiểm tra tải relay"],
            severity: "Cao",
            color: "red"
        },
        F007: {
            name: "Lỗi GFDI",
            description: "Lỗi phát hiện lỗi nối đất",
            causes: ["Dòng rò đất quá lớn", "Cảm biến GFDI lỗi", "Hệ thống nối đất kém"],
            solutions: ["Kiểm tra nối đất", "Thay cảm biến GFDI", "Kiểm tra cách điện", "Cải thiện hệ thống đất"],
            severity: "Cao",
            color: "red"
        },
        F008: {
            name: "Lỗi DCI",
            description: "Dòng DC injection quá cao",
            causes: ["Mạch lọc DC lỗi", "Transformer không cân bằng", "Điều khiển PWM sai"],
            solutions: ["Kiểm tra mạch lọc", "Cân chỉnh transformer", "Hiệu chỉnh PWM", "Thay linh kiện lỗi"],
            severity: "Trung bình",
            color: "orange"
        },
        F009: {
            name: "Lỗi PV reverse",
            description: "Cực tính PV bị đảo ngược",
            causes: ["Đấu ngược DC+ và DC-", "Sai cực tính dây dẫn"],
            solutions: ["Tắt biến tần ngay", "Kiểm tra cực tính", "Đấu lại đúng cực", "Đánh dấu dây dẫn"],
            severity: "Cao",
            color: "red"
        },
        F010: {
            name: "Lỗi EEPROM",
            description: "Lỗi bộ nhớ EEPROM",
            causes: ["EEPROM bị hỏng", "Dữ liệu corrupt", "Lỗi ghi/đọc"],
            solutions: ["Reset cài đặt", "Cập nhật firmware", "Thay EEPROM", "Backup dữ liệu"],
            severity: "Cao",
            color: "red"
        },
        F011: {
            name: "Lỗi communication",
            description: "Lỗi giao tiếp RS485/WiFi",
            causes: ["Cáp RS485 bị đứt", "Module WiFi lỗi", "Cài đặt giao tiếp sai"],
            solutions: ["Kiểm tra cáp RS485", "Reset module WiFi", "Cài đặt lại giao tiếp", "Kiểm tra địa chỉ Modbus"],
            severity: "Thấp",
            color: "yellow"
        }
    },
    goodwe: {
        E001: {
            name: "Lỗi điện áp DC",
            description: "Điện áp DC ngoài phạm vi hoạt động",
            causes: ["Điện áp DC quá cao/thấp", "Kết nối tấm pin sai", "Tấm pin bị che"],
            solutions: ["Đo điện áp DC", "Kiểm tra kết nối", "Loại bỏ vật che", "Cấu hình lại chuỗi"],
            severity: "Trung bình",
            color: "orange"
        },
        E002: {
            name: "Lỗi cách ly",
            description: "Điện trở cách ly thấp",
            causes: ["Tấm pin rò rỉ", "Cáp bị hỏng", "Ẩm ướt"],
            solutions: ["Kiểm tra tấm pin", "Thay cáp DC", "Vệ sinh làm khô"],
            severity: "Cao",
            color: "red"
        },
        E003: {
            name: "Lỗi điện áp lưới cao",
            description: "Điện áp AC quá cao",
            causes: ["Điện áp lưới vượt 253V", "Cài đặt ngưỡng sai"],
            solutions: ["Kiểm tra điện áp lưới", "Cài đặt lại ngưỡng", "Sử dụng ổn áp"],
            severity: "Trung bình",
            color: "orange"
        },
        E004: {
            name: "Lỗi điện áp lưới thấp",
            description: "Điện áp AC quá thấp",
            causes: ["Điện áp lưới dưới 180V", "Tải quá lớn"],
            solutions: ["Kiểm tra điện áp lưới", "Giảm tải tiêu thụ", "Liên hệ điện lực"],
            severity: "Trung bình",
            color: "orange"
        },
        E005: {
            name: "Lỗi tần số lưới",
            description: "Tần số lưới ngoài 50Hz ±2Hz",
            causes: ["Tần số lưới không ổn định", "Cài đặt sai"],
            solutions: ["Kiểm tra tần số lưới", "Cài đặt lại tham số", "Chờ lưới ổn định"],
            severity: "Trung bình",
            color: "orange"
        },
        E006: {
            name: "Lỗi nhiệt độ",
            description: "Nhiệt độ biến tần quá cao",
            causes: ["Thông gió kém", "Quạt hỏng"],
            solutions: ["Cải thiện thông gió", "Thay quạt tản nhiệt"],
            severity: "Cao",
            color: "red"
        }
    },
    tbea: {
        E01: {
            name: "Lỗi cách ly DC",
            description: "Điện trở cách ly DC thấp",
            causes: ["Tấm pin bị rò rỉ", "Cáp DC hỏng", "Connector ẩm ướt"],
            solutions: ["Kiểm tra tấm pin", "Thay cáp DC", "Làm khô connector", "Vệ sinh hệ thống"],
            severity: "Cao",
            color: "red"
        },
        E02: {
            name: "Lỗi điện áp lưới",
            description: "Điện áp AC ngoài phạm vi",
            causes: ["Lưới điện không ổn định", "Kết nối AC sai"],
            solutions: ["Kiểm tra điện áp lưới", "Kiểm tra kết nối", "Chờ lưới ổn định"],
            severity: "Trung bình",
            color: "orange"
        },
        E03: {
            name: "Lỗi tần số lưới",
            description: "Tần số lưới ngoài phạm vi cho phép",
            causes: ["Tần số lưới không ổn định", "Cài đặt sai tham số"],
            solutions: ["Kiểm tra tần số lưới", "Cài đặt lại tham số", "Liên hệ điện lực"],
            severity: "Trung bình",
            color: "orange"
        },
        E04: {
            name: "Lỗi nhiệt độ",
            description: "Nhiệt độ biến tần quá cao",
            causes: ["Thông gió kém", "Quạt hỏng", "Tải quá mức"],
            solutions: ["Cải thiện thông gió", "Thay quạt", "Giảm tải"],
            severity: "Cao",
            color: "red"
        },
        E05: {
            name: "Lỗi điện áp DC",
            description: "Điện áp DC ngoài phạm vi hoạt động",
            causes: ["Cấu hình chuỗi sai", "Tấm pin hỏng", "Kết nối lỏng"],
            solutions: ["Kiểm tra cấu hình", "Đo điện áp tấm pin", "Siết chặt kết nối"],
            severity: "Trung bình",
            color: "orange"
        }
    },
    deye: {
        E001: {
            name: "Lỗi cách ly",
            description: "Lỗi điện trở cách ly DC",
            causes: ["Tấm pin rò rỉ", "Cáp DC hỏng cách điện", "Độ ẩm cao"],
            solutions: ["Kiểm tra tấm pin", "Thay cáp DC", "Vệ sinh hệ thống"],
            severity: "Cao",
            color: "red"
        },
        E002: {
            name: "Lỗi điện áp DC",
            description: "Điện áp DC ngoài phạm vi",
            causes: ["Cấu hình chuỗi sai", "Tấm pin bị che", "Kết nối lỏng"],
            solutions: ["Kiểm tra cấu hình", "Loại bỏ vật che", "Siết chặt kết nối"],
            severity: "Trung bình",
            color: "orange"
        }
    },
    ginlong: {
        E001: {
            name: "Lỗi cách ly DC",
            description: "Điện trở cách ly thấp",
            causes: ["Tấm pin bị rò rỉ", "Cáp DC hỏng", "Connector ẩm ướt"],
            solutions: ["Kiểm tra tấm pin", "Thay cáp DC", "Làm khô connector"],
            severity: "Cao",
            color: "red"
        },
        E002: {
            name: "Lỗi điện áp lưới",
            description: "Điện áp AC ngoài phạm vi",
            causes: ["Lưới không ổn định", "Kết nối AC sai"],
            solutions: ["Kiểm tra lưới", "Kiểm tra kết nối AC"],
            severity: "Trung bình",
            color: "orange"
        }
    },
    lumentree: {
        L101: {
            name: "Máy chủ điện 1 pha",
            description: "Lỗi máy chủ điện 1 pha - Máy có mã máy hoặc đồng hồ, lúc ban đầu có vấn đề về hoạt động",
            causes: ["Máy chủ điện 1 pha bị lỗi", "Kết nối điện không ổn định", "Cài đặt tham số sai"],
            solutions: ["Kiểm tra kết nối máy chủ điện", "Kiểm tra nguồn cấp điện", "Cài đặt lại tham số máy", "Liên hệ kỹ thuật viên"],
            severity: "Trung bình",
            color: "orange"
        },
        L102: {
            name: "Máy chủ điện 1 pha",
            description: "Lỗi máy chủ điện 1 pha - Tương tự L101",
            causes: ["Máy chủ điện 1 pha bị lỗi", "Kết nối điện không ổn định"],
            solutions: ["Kiểm tra kết nối máy chủ điện", "Kiểm tra nguồn cấp điện", "Cài đặt lại tham số máy"],
            severity: "Trung bình",
            color: "orange"
        },
        L103: {
            name: "Máy chủ điện 1 pha",
            description: "Lỗi máy chủ điện 1 pha - Tương tự L101, L102",
            causes: ["Máy chủ điện 1 pha bị lỗi", "Kết nối điện không ổn định"],
            solutions: ["Kiểm tra kết nối máy chủ điện", "Kiểm tra nguồn cấp điện", "Cài đặt lại tham số máy"],
            severity: "Trung bình",
            color: "orange"
        },
        E07: {
            name: "DC-DC lỗng điện áp bus",
            description: "Lỗi điện áp bus DC-DC",
            causes: ["Điện áp bus DC không ổn định", "Mạch DC-DC bị lỗi", "Tải quá mức"],
            solutions: ["Kiểm tra điện áp bus DC", "Kiểm tra mạch DC-DC", "Giảm tải nếu cần", "Thay thế linh kiện lỗi"],
            severity: "Cao",
            color: "red"
        },
        E10: {
            name: "Lỗi modun nguồn",
            description: "Lỗi modun nguồn bên trong biến tần",
            causes: ["Modun nguồn bị hỏng", "Quá tải modun nguồn", "Nhiệt độ modun quá cao", "Điện áp đầu vào không ổn định"],
            solutions: ["Tắt biến tần và để nguội", "Kiểm tra điện áp đầu vào", "Kiểm tra tải có quá mức không", "Cải thiện thông gió tản nhiệt", "Liên hệ kỹ thuật viên thay modun nguồn"],
            severity: "Cao",
            color: "red"
        },
        E13: {
            name: "Lỗi quá dòng đầu ra AC",
            description: "Dòng điện đầu ra AC vượt quá giới hạn cho phép",
            causes: ["Tải quá mức", "Ngắn mạch đầu ra", "Thiết bị tải bị hỏng"],
            solutions: ["Giảm tải đầu ra", "Kiểm tra ngắn mạch", "Kiểm tra thiết bị tải", "Thay thiết bị tải bị hỏng"],
            severity: "Cao",
            color: "red"
        },
        E14: {
            name: "Lỗi quá dòng pin sạc lưu trữ",
            description: "Dòng sạc pin vượt quá giới hạn an toàn",
            causes: ["Dòng sạc pin quá lớn", "Pin lưu trữ bị lỗi", "Mạch sạc bị hỏng"],
            solutions: ["Giảm dòng sạc pin", "Kiểm tra pin lưu trữ", "Kiểm tra mạch sạc", "Cài đặt lại tham số sạc"],
            severity: "Cao",
            color: "red"
        },
        E15: {
            name: "Lỗi quá dòng xả pin",
            description: "Dòng xả pin vượt quá giới hạn cho phép",
            causes: ["Dòng xả pin quá lớn", "Tải tiêu thụ quá mức", "Pin bị hỏng"],
            solutions: ["Giảm tải tiêu thụ", "Kiểm tra pin lưu trữ", "Kiểm tra mạch xả pin", "Cài đặt lại giới hạn xả"],
            severity: "Cao",
            color: "red"
        },
        E16: {
            name: "Dòng điện quá dòng phần cứng",
            description: "Dòng điện vượt quá giới hạn bảo vệ phần cứng",
            causes: ["Quá tải nghiêm trọng", "Ngắn mạch", "Linh kiện bị hỏng"],
            solutions: ["Tắt biến tần ngay", "Kiểm tra ngắn mạch", "Kiểm tra tải", "Thay linh kiện bị hỏng"],
            severity: "Cao",
            color: "red"
        },
        E20: {
            name: "Quá dòng phần cứng DC",
            description: "Dòng DC vượt quá giới hạn bảo vệ phần cứng",
            causes: ["Quá dòng DC nghiêm trọng", "Ngắn mạch phía DC", "Tấm pin có vấn đề"],
            solutions: ["Tắt biến tần ngay", "Kiểm tra ngắn mạch DC", "Kiểm tra tấm pin", "Kiểm tra cáp DC"],
            severity: "Cao",
            color: "red"
        },
        E21: {
            name: "Quá dòng phần cứng PV hoặc DC-DC",
            description: "Dòng PV hoặc DC-DC vượt quá giới hạn",
            causes: ["Dòng PV quá lớn", "Mạch DC-DC bị lỗi", "Cấu hình PV sai"],
            solutions: ["Kiểm tra cấu hình PV", "Kiểm tra mạch DC-DC", "Giảm công suất PV", "Kiểm tra kết nối PV"],
            severity: "Cao",
            color: "red"
        },
        E23: {
            name: "Điện áp bus thấp trong quá trình hoạt động",
            description: "Điện áp bus DC thấp hơn mức cho phép",
            causes: ["Nguồn DC không đủ", "Tải quá mức", "Pin yếu"],
            solutions: ["Kiểm tra nguồn DC", "Giảm tải", "Kiểm tra pin", "Kiểm tra kết nối"],
            severity: "Trung bình",
            color: "orange"
        },
        E29: {
            name: "Lỗi giao tiếp CAN",
            description: "Lỗi giao tiếp CAN bus với pin hoặc thiết bị khác",
            causes: ["Cáp CAN bị đứt", "Địa chỉ CAN trùng", "Thiết bị CAN lỗi"],
            solutions: ["Kiểm tra cáp CAN", "Cài đặt địa chỉ CAN", "Kiểm tra thiết bị CAN", "Reset giao tiếp"],
            severity: "Trung bình",
            color: "orange"
        },
        E31: {
            name: "Điện áp bus thấp ở chế độ không tải",
            description: "Điện áp bus thấp khi không có tải",
            causes: ["Nguồn DC yếu", "Pin hết điện", "Mạch sạc lỗi"],
            solutions: ["Kiểm tra nguồn DC", "Sạc pin", "Kiểm tra mạch sạc", "Kiểm tra kết nối"],
            severity: "Trung bình",
            color: "orange"
        },
        E35: {
            name: "Báo về quá DC",
            description: "Điện áp DC quá cao",
            causes: ["Điện áp PV quá cao", "Cấu hình sai", "Nhiệt độ thấp"],
            solutions: ["Kiểm tra điện áp PV", "Giảm số tấm pin", "Kiểm tra cấu hình", "Chờ nhiệt độ ổn định"],
            severity: "Cao",
            color: "red"
        },
        E39: {
            name: "Quá nhiệt độ lưu trữ pin",
            description: "Nhiệt độ pin lưu trữ quá cao",
            causes: ["Pin quá nóng", "Thông gió kém", "Sạc quá mức"],
            solutions: ["Cải thiện thông gió pin", "Giảm dòng sạc", "Kiểm tra quạt làm mát", "Tạm dừng sạc"],
            severity: "Cao",
            color: "red"
        },
        E40: {
            name: "Lỗi nhiệt độ thấp trong cùng pin",
            description: "Nhiệt độ pin quá thấp",
            causes: ["Môi trường quá lạnh", "Cảm biến nhiệt độ lỗi", "Pin không hoạt động"],
            solutions: ["Tăng nhiệt độ môi trường", "Kiểm tra cảm biến", "Sử dụng hệ thống sưởi", "Kiểm tra pin"],
            severity: "Trung bình",
            color: "orange"
        },
        E41: {
            name: "Quá áp lưu trữ pin",
            description: "Điện áp pin lưu trữ quá cao",
            causes: ["Sạc quá áp", "BMS lỗi", "Pin bị hỏng"],
            solutions: ["Dừng sạc ngay", "Kiểm tra BMS", "Kiểm tra pin", "Cài đặt lại điện áp sạc"],
            severity: "Cao",
            color: "red"
        },
        E45: {
            name: "Thấp áp lưu trữ pin",
            description: "Điện áp pin lưu trữ quá thấp",
            causes: ["Pin hết điện", "Xả quá mức", "Pin bị hỏng"],
            solutions: ["Sạc pin ngay", "Kiểm tra mức xả", "Kiểm tra pin", "Cài đặt bảo vệ xả sâu"],
            severity: "Cao",
            color: "red"
        },
        E47: {
            name: "Lỗi quá dòng lưu trữ pin",
            description: "Dòng pin vượt quá giới hạn",
            causes: ["Dòng pin quá lớn", "Tải quá mức", "BMS lỗi"],
            solutions: ["Giảm tải", "Kiểm tra BMS", "Kiểm tra dòng pin", "Cài đặt giới hạn dòng"],
            severity: "Cao",
            color: "red"
        },
        E48: {
            name: "Lỗi kết nối lưu trữ pin",
            description: "Mất kết nối với pin lưu trữ",
            causes: ["Cáp pin bị đứt", "Connector lỏng", "Pin bị ngắt"],
            solutions: ["Kiểm tra cáp pin", "Siết chặt connector", "Kiểm tra kết nối pin", "Thay cáp nếu cần"],
            severity: "Cao",
            color: "red"
        },
        E54: {
            name: "Mất thông tin pin",
            description: "Mất thông tin từ BMS pin",
            causes: ["BMS không phản hồi", "Lỗi giao tiếp", "BMS bị hỏng"],
            solutions: ["Reset BMS", "Kiểm tra giao tiếp", "Kiểm tra BMS", "Cập nhật firmware BMS"],
            severity: "Trung bình",
            color: "orange"
        },
        E60: {
            name: "Báo về chính đó",
            description: "Lỗi tự báo cáo hệ thống",
            causes: ["Lỗi hệ thống nội bộ", "Firmware lỗi", "Hardware lỗi"],
            solutions: ["Reset hệ thống", "Cập nhật firmware", "Kiểm tra hardware", "Liên hệ hỗ trợ kỹ thuật"],
            severity: "Trung bình",
            color: "orange"
        },
        E61: {
            name: "Báo về điện áp cao",
            description: "Cảnh báo điện áp cao",
            causes: ["Điện áp vượt ngưỡng", "Cài đặt sai", "Lưới không ổn định"],
            solutions: ["Kiểm tra điện áp", "Cài đặt ngưỡng", "Sử dụng ổn áp", "Kiểm tra lưới điện"],
            severity: "Trung bình",
            color: "orange"
        },
        E62: {
            name: "Báo về điện áp thấp",
            description: "Cảnh báo điện áp thấp",
            causes: ["Điện áp dưới ngưỡng", "Tải quá mức", "Nguồn yếu"],
            solutions: ["Kiểm tra nguồn điện", "Giảm tải", "Kiểm tra kết nối", "Sử dụng ổn áp"],
            severity: "Trung bình",
            color: "orange"
        }
    },
    luxpower: {
        E000: {
            name: "Lỗi giao tiếp nội bộ 1",
            description: "Internal communication fault1",
            causes: ["Lỗi giao tiếp giữa các bo mạch bên trong", "Nhiễu điện từ", "Firmware bị lỗi"],
            solutions: ["Khởi động lại biến tần", "Kiểm tra kết nối nội bộ", "Liên hệ nhà cung cấp nếu lỗi vẫn tồn tại"],
            severity: "Cao",
            color: "red"
        },
        E002: {
            name: "Lỗi kích hoạt MOSFET",
            description: "Bat On Mos Fail - MOSFET không kích hoạt được",
            causes: ["MOSFET bị hỏng", "Mạch điều khiển MOSFET lỗi", "Nguồn cấp cho MOSFET không ổn định"],
            solutions: ["Khởi động lại biến tần", "Kiểm tra MOSFET", "Liên hệ nhà cung cấp nếu vẫn còn lỗi"],
            severity: "Cao",
            color: "red"
        },
        E003: {
            name: "Lỗi CT - thiết bị đo dòng điện",
            description: "CT Fail - Current Transformer không hoạt động",
            causes: ["CT bị hỏng", "Kết nối CT lỏng", "CT không được lắp đúng vị trí"],
            solutions: ["Kiểm tra kết nối CT", "Kiểm tra vị trí lắp CT", "Thay CT nếu bị hỏng", "Khởi động lại biến tần"],
            severity: "Cao",
            color: "red"
        },
        E008: {
            name: "Lỗi giao tiếp CAN trong hệ thống song song",
            description: "CAN communication error in Parallel System",
            causes: ["Dây cáp tín hiệu kết nối không đúng", "Địa chỉ giao tiếp bị trùng", "Cáp CAN bị hỏng"],
            solutions: ["Kiểm tra lại dây cáp tín hiệu", "Cài đặt lại địa chỉ giao tiếp của Inverter", "Thay cáp CAN nếu cần", "Kiểm tra topology hệ thống"],
            severity: "Trung bình",
            color: "orange"
        },
        E009: {
            name: "Không có Inverter chủ",
            description: "No master in parallel system",
            causes: ["Chưa cài đặt Inverter chủ", "Inverter chủ bị mất kết nối", "Cài đặt hệ thống song song sai"],
            solutions: ["Cài đặt một Inverter làm chủ", "Kiểm tra kết nối Inverter chủ", "Cấu hình lại hệ thống song song"],
            severity: "Cao",
            color: "red"
        },
        E010: {
            name: "Nhiều Inverter chủ",
            description: "Multi master in parallel system",
            causes: ["Cài đặt nhiều hơn 1 Inverter chủ", "Lỗi cấu hình hệ thống"],
            solutions: ["Cài đặt lại chỉ một Inverter chủ duy nhất", "Kiểm tra cấu hình từng Inverter", "Reset hệ thống song song"],
            severity: "Cao",
            color: "red"
        },
        E011: {
            name: "AC không nhất quán trong hệ thống song song",
            description: "AC inconsistent in parallel system",
            causes: ["Kết nối AC không giống nhau", "Pha AC bị sai lệch", "Điện áp AC không đồng bộ"],
            solutions: ["Kiểm tra kết nối AC trên tất cả biến tần", "Đảm bảo cùng pha AC", "Kiểm tra đồng bộ điện áp"],
            severity: "Cao",
            color: "red"
        },
        E012: {
            name: "Ngắn mạch đầu ra ngoài lưới",
            description: "Off grid output short circuit",
            causes: ["Tải bị ngắn mạch", "Dây AC đầu ra bị chập", "Thiết bị tải bị hỏng"],
            solutions: ["Tắt tải và kiểm tra", "Kiểm tra dây AC đầu ra", "Khởi động lại biến tần sau khi sửa lỗi", "Thay thiết bị tải bị hỏng"],
            severity: "Cao",
            color: "red"
        },
        E013: {
            name: "Dự trữ dòng điện UPS",
            description: "UPS reserve current",
            causes: ["Dòng điện UPS vượt quá giới hạn", "Cài đặt UPS không phù hợp"],
            solutions: ["Khởi động lại biến tần", "Kiểm tra cài đặt UPS", "Liên hệ nhà cung cấp nếu vẫn lỗi"],
            severity: "Trung bình",
            color: "orange"
        },
        E015: {
            name: "Lỗi pha trong hệ thống ba pha",
            description: "Phase Error in three phase parallel system",
            causes: ["Kết nối AC không phù hợp với hệ thống ba pha", "Thiếu biến tần trong một pha", "Sai thứ tự pha"],
            solutions: ["Kiểm tra kết nối AC ba pha", "Đảm bảo có ít nhất một biến tần trong mỗi pha", "Kiểm tra thứ tự pha L1, L2, L3"],
            severity: "Cao",
            color: "red"
        },
        E016: {
            name: "Lỗi rơle",
            description: "Relay fault",
            causes: ["Rơle bị hỏng", "Tiếp điểm rơle bị cháy", "Mạch điều khiển rơle lỗi"],
            solutions: ["Khởi động lại biến tần", "Kiểm tra rơle", "Thay rơle nếu cần", "Liên hệ nhà cung cấp"],
            severity: "Cao",
            color: "red"
        },
        E017: {
            name: "Lỗi giao tiếp nội bộ 2",
            description: "Internal communication fault2",
            causes: ["Lỗi giao tiếp giữa các module", "Nhiễu điện từ", "Bo mạch bị lỗi"],
            solutions: ["Khởi động lại biến tần", "Kiểm tra chống nhiễu", "Liên hệ nhà cung cấp nếu lỗi vẫn tồn tại"],
            severity: "Cao",
            color: "red"
        },
        E018: {
            name: "Lỗi giao tiếp nội bộ 3",
            description: "Internal communication fault3",
            causes: ["Lỗi giao tiếp module điều khiển", "Firmware bị corrupt", "Hardware bị lỗi"],
            solutions: ["Khởi động lại biến tần", "Cập nhật firmware", "Liên hệ nhà cung cấp nếu lỗi vẫn tồn tại"],
            severity: "Cao",
            color: "red"
        },
        E019: {
            name: "Điện áp thanh cái cao",
            description: "Bus voltage high",
            causes: ["Điện áp đầu vào PV cao hơn 480V", "Cấu hình PV không phù hợp", "Nhiệt độ thấp làm tăng điện áp PV"],
            solutions: ["Kiểm tra điện áp đầu vào hệ thống PV", "Giảm số tấm pin trong chuỗi nếu cần", "Kiểm tra thông số kỹ thuật biến tần"],
            severity: "Cao",
            color: "red"
        },
        E020: {
            name: "Lỗi kết nối EPS",
            description: "EPS connection fault",
            causes: ["Kết nối EPS và AC sai thiết bị đầu cuối", "Dây EPS bị đứt", "Cài đặt EPS không đúng"],
            solutions: ["Kiểm tra kết nối EPS và AC", "Kiểm tra dây EPS", "Cài đặt lại tham số EPS"],
            severity: "Trung bình",
            color: "orange"
        },
        E021: {
            name: "Điện áp PV cao",
            description: "PV voltage high",
            causes: ["Điện áp đầu vào PV cao hơn 480V", "Quá nhiều tấm pin nối tiếp", "Nhiệt độ thấp"],
            solutions: ["Kiểm tra lại kết nối đầu vào PV", "Giảm số tấm pin trong chuỗi", "Kiểm tra điều kiện nhiệt độ"],
            severity: "Cao",
            color: "red"
        },
        E022: {
            name: "Quá dòng bên trong",
            description: "Over current internal",
            causes: ["Dòng điện nội bộ vượt quá giới hạn", "Linh kiện bên trong bị hỏng", "Tải quá mức"],
            solutions: ["Khởi động lại biến tần", "Giảm tải nếu có thể", "Liên hệ nhà cung cấp nếu vẫn chưa khắc phục"],
            severity: "Cao",
            color: "red"
        },
        E024: {
            name: "Ngắn mạch PV",
            description: "PV short circuit",
            causes: ["Tấm pin bị ngắn mạch", "Cáp DC bị chập", "Connector DC bị hỏng"],
            solutions: ["Kiểm tra kết nối PV", "Kiểm tra từng tấm pin", "Kiểm tra cáp và connector DC"],
            severity: "Cao",
            color: "red"
        },
        E025: {
            name: "Vượt quá dải nhiệt độ",
            description: "Temperature over range",
            causes: ["Nhiệt độ bên trong biến tần quá cao", "Thông gió không đủ", "Quạt tản nhiệt hỏng"],
            solutions: ["Tắt biến tần trong 10 phút", "Cải thiện thông gió", "Kiểm tra quạt tản nhiệt", "Khởi động lại biến tần"],
            severity: "Cao",
            color: "red"
        },
        E026: {
            name: "Lỗi bên trong",
            description: "Internal Fault",
            causes: ["Lỗi phần cứng bên trong", "Bo mạch chính bị hỏng", "Linh kiện điện tử bị lỗi"],
            solutions: ["Khởi động lại biến tần", "Liên hệ ngay nhà cung cấp biến tần", "Có thể cần thay thế thiết bị"],
            severity: "Cao",
            color: "red"
        },
        E031: {
            name: "Lỗi giao tiếp nội bộ 4",
            description: "Internal communication fault4",
            causes: ["Lỗi giao tiếp module cuối cùng", "Kết nối nội bộ bị lỏng", "Nhiễu điện từ mạnh"],
            solutions: ["Khởi động lại biến tần", "Kiểm tra kết nối nội bộ", "Liên hệ nhà cung cấp nếu lỗi vẫn tồn tại"],
            severity: "Cao",
            color: "red"
        },
        W000: {
            name: "Lỗi kết nối với pin",
            description: "Communication failure with battery",
            causes: ["Chưa chọn đúng hãng pin", "Cáp kết nối pin bị lỗi", "BMS pin không tương thích", "Cài đặt giao tiếp pin sai"],
            solutions: ["Kiểm tra đã chọn đúng hãng pin chưa", "Kiểm tra cáp kết nối pin", "Kiểm tra tương thích BMS", "Cài đặt lại giao tiếp pin", "Liên hệ nhà cung cấp nếu vẫn lỗi"],
            severity: "Trung bình",
            color: "orange"
        },
        W001: {
            name: "Nhiệt độ pin cao",
            description: "Battery temperature high",
            causes: ["Nhiệt độ pin quá cao", "Cảm biến nhiệt độ pin kết nối sai", "Thông gió pin không đủ"],
            solutions: ["Kiểm tra cảm biến nhiệt độ pin", "Cải thiện thông gió cho pin", "Đảm bảo nhiệt độ pin không quá cao", "Kiểm tra hệ thống làm mát pin"],
            severity: "Trung bình",
            color: "orange"
        },
        W002: {
            name: "Nhiệt độ pin thấp",
            description: "Battery temperature low",
            causes: ["Nhiệt độ pin quá thấp", "Cảm biến nhiệt độ pin lỗi", "Môi trường quá lạnh"],
            solutions: ["Kiểm tra cảm biến nhiệt độ pin", "Đảm bảo nhiệt độ pin không quá thấp", "Cải thiện điều kiện môi trường", "Sử dụng hệ thống sưởi ấm nếu cần"],
            severity: "Thấp",
            color: "yellow"
        },
        W004: {
            name: "Lỗi pin lưu trữ",
            description: "Battery failure - BMS báo lỗi pin",
            causes: ["Pin lưu trữ bị hỏng", "BMS báo lỗi", "Cell pin không cân bằng", "Quá sạc hoặc quá xả"],
            solutions: ["Khởi động lại pin", "Kiểm tra trạng thái BMS", "Cân bằng cell pin", "Kiểm tra chu kỳ sạc/xả", "Liên hệ nhà cung cấp pin nếu cần"],
            severity: "Cao",
            color: "red"
        },
        W008: {
            name: "Phần mềm không tương thích",
            description: "Software mismatch",
            causes: ["Firmware cũ", "Phần mềm không tương thích", "Cần cập nhật phần mềm"],
            solutions: ["Liên hệ Luxpower để cập nhật firmware", "Cập nhật lên phần mềm mới nhất", "Kiểm tra tương thích phần mềm"],
            severity: "Trung bình",
            color: "orange"
        },
        W009: {
            name: "Quạt bị kẹt",
            description: "Fan Stuck - Quạt tản nhiệt không hoạt động",
            causes: ["Quạt bị kẹt", "Quạt bị hỏng", "Bụi bẩn cản trở quạt"],
            solutions: ["Kiểm tra quạt có hoạt động không", "Vệ sinh bụi bẩn quanh quạt", "Thay quạt nếu bị hỏng", "Kiểm tra nguồn cấp cho quạt"],
            severity: "Trung bình",
            color: "orange"
        },
        W012: {
            name: "Lỗi MOS liên quan pin",
            description: "Bat On Mos - Lỗi MOSFET kết nối pin",
            causes: ["MOSFET kết nối pin bị lỗi", "Mạch điều khiển pin lỗi", "Kết nối pin không ổn định"],
            solutions: ["Khởi động lại biến tần", "Kiểm tra kết nối pin", "Liên hệ Luxpower nếu vẫn gặp lỗi"],
            severity: "Cao",
            color: "red"
        },
        W013: {
            name: "Quá nhiệt",
            description: "Over temperature - Nhiệt độ cảnh báo",
            causes: ["Nhiệt độ bên trong biến tần cao", "Thông gió không đủ", "Tải quá mức"],
            solutions: ["Cải thiện thông gió", "Giảm tải nếu có thể", "Kiểm tra quạt tản nhiệt", "Tạm dừng hoạt động để làm mát"],
            severity: "Trung bình",
            color: "orange"
        },
        W018: {
            name: "Tần số AC ngoài phạm vi",
            description: "AC Frequency out of range",
            causes: ["Tần số lưới không ổn định", "Tần số ngoài 50Hz ±2Hz", "Cài đặt tham số sai"],
            solutions: ["Kiểm tra tần số AC trong phạm vi", "Cài đặt lại tham số tần số", "Chờ lưới ổn định", "Liên hệ điện lực nếu cần"],
            severity: "Trung bình",
            color: "orange"
        },
        W025: {
            name: "Điện áp pin cao",
            description: "Battery voltage high",
            causes: ["Điện áp pin vượt quá giới hạn", "Sạc quá mức", "BMS không hoạt động đúng"],
            solutions: ["Kiểm tra điện áp pin ở mức bình thường", "Kiểm tra chu kỳ sạc", "Kiểm tra hoạt động BMS", "Dừng sạc nếu cần"],
            severity: "Trung bình",
            color: "orange"
        },
        W026: {
            name: "Điện áp pin thấp",
            description: "Battery voltage low",
            causes: ["Điện áp pin quá thấp", "Pin cần sạc", "Pin bị hỏng"],
            solutions: ["Kiểm tra điện áp pin ở mức bình thường", "Sạc pin nếu điện áp thấp", "Kiểm tra trạng thái pin", "Thay pin nếu bị hỏng"],
            severity: "Trung bình",
            color: "orange"
        },
        W027: {
            name: "Pin bị rò",
            description: "Battery open - Mất kết nối pin",
            causes: ["Không có đầu ra từ pin", "Kết nối pin bị lỏng", "Cầu chì pin bị cháy", "Pin bị ngắt kết nối"],
            solutions: ["Kiểm tra có đầu ra từ pin không", "Kiểm tra kết nối giữa pin và biến tần", "Kiểm tra cầu chì pin", "Siết chặt kết nối pin"],
            severity: "Cao",
            color: "red"
        },
        W028: {
            name: "EPS quá tải",
            description: "EPS Over load",
            causes: ["Tải EPS quá cao", "Quá nhiều thiết bị kết nối EPS", "Thiết bị tiêu thụ điện lớn"],
            solutions: ["Kiểm tra tải EPS có quá cao không", "Giảm số lượng thiết bị kết nối", "Sử dụng thiết bị tiêu thụ ít điện hơn", "Phân bổ tải hợp lý"],
            severity: "Trung bình",
            color: "orange"
        },
        W029: {
            name: "Điện áp EPS cao",
            description: "EPS voltage high",
            causes: ["Điện áp EPS vượt quá giới hạn", "Cài đặt EPS không đúng", "Lỗi mạch điều áp EPS"],
            solutions: ["Khởi động lại biến tần", "Kiểm tra cài đặt EPS", "Liên hệ nhà cung cấp nếu lỗi vẫn tồn tại"],
            severity: "Trung bình",
            color: "orange"
        },
        W031: {
            name: "EPS DCV cao",
            description: "EPS DCV high",
            causes: ["Điện áp DC của EPS quá cao", "Mạch DC EPS bị lỗi", "Cài đặt không phù hợp"],
            solutions: ["Khởi động lại biến tần", "Kiểm tra mạch DC EPS", "Liên hệ nhà cung cấp nếu lỗi vẫn tồn tại"],
            severity: "Trung bình",
            color: "orange"
        }
    },
    sma: {
        6801: {
            name: "Lỗi cách ly",
            description: "Lỗi điện trở cách ly giữa DC và AC",
            causes: ["Tấm pin bị rò rỉ", "Cáp bị hỏng cách điện", "Độ ẩm cao"],
            solutions: ["Kiểm tra tấm pin", "Kiểm tra cáp DC và AC", "Vệ sinh và làm khô hệ thống", "Thay thế thiết bị bị hỏng"],
            severity: "Cao",
            color: "red"
        },
        1401: {
            name: "Lỗi nhiệt độ",
            description: "Nhiệt độ biến tần quá cao",
            causes: ["Thông gió không đủ", "Nhiệt độ môi trường quá cao", "Quạt làm mát bị hỏng"],
            solutions: ["Kiểm tra thông gió xung quanh biến tần", "Làm sạch bụi bẩn", "Kiểm tra quạt làm mát", "Cải thiện thông gió"],
            severity: "Trung bình",
            color: "orange"
        },
        3501: {
            name: "Lỗi điện áp lưới",
            description: "Điện áp lưới ngoài phạm vi cho phép",
            causes: ["Điện áp lưới không ổn định", "Kết nối lưới không đúng"],
            solutions: ["Kiểm tra điện áp lưới", "Kiểm tra kết nối", "Chờ lưới ổn định", "Liên hệ điện lực"],
            severity: "Trung bình",
            color: "orange"
        },
        2101: {
            name: "Lỗi tần số lưới",
            description: "Tần số lưới ngoài phạm vi 50Hz ±2Hz",
            causes: ["Tần số lưới không ổn định", "Cài đặt tham số sai", "Lưới điện có vấn đề"],
            solutions: ["Kiểm tra tần số lưới", "Cài đặt lại tham số tần số", "Liên hệ điện lực", "Chờ lưới ổn định"],
            severity: "Trung bình",
            color: "orange"
        },
        7001: {
            name: "Lỗi điện áp DC",
            description: "Điện áp DC ngoài phạm vi hoạt động",
            causes: ["Cấu hình chuỗi tấm pin sai", "Tấm pin bị hỏng", "Kết nối DC lỏng"],
            solutions: ["Kiểm tra cấu hình chuỗi", "Đo điện áp từng tấm pin", "Siết chặt kết nối DC", "Thay tấm pin hỏng"],
            severity: "Trung bình",
            color: "orange"
        },
        5001: {
            name: "Lỗi AFCI",
            description: "Lỗi bảo vệ chống cháy hồ quang",
            causes: ["Kết nối DC lỏng", "Connector bị oxy hóa", "Cáp DC bị hỏng"],
            solutions: ["Kiểm tra tất cả kết nối DC", "Vệ sinh connector", "Thay connector bị oxy hóa", "Thay cáp DC nếu cần"],
            severity: "Cao",
            color: "red"
        }
    },
    fronius: {
        101: {
            name: "Lỗi cách ly DC",
            description: "Điện trở cách ly DC thấp",
            causes: ["Tấm pin bị rò rỉ", "Cáp DC hỏng cách điện", "Độ ẩm cao"],
            solutions: ["Kiểm tra tấm pin", "Thay cáp DC", "Vệ sinh hệ thống", "Kiểm tra chống thấm"],
            severity: "Cao",
            color: "red"
        },
        102: {
            name: "Lỗi điện áp lưới",
            description: "Điện áp AC ngoài phạm vi",
            causes: ["Điện áp lưới không ổn định", "Kết nối AC sai"],
            solutions: ["Kiểm tra điện áp lưới", "Kiểm tra kết nối AC", "Cài đặt lại tham số"],
            severity: "Trung bình",
            color: "orange"
        },
        103: {
            name: "Lỗi tần số lưới",
            description: "Tần số lưới ngoài phạm vi",
            causes: ["Tần số lưới không ổn định", "Cài đặt sai"],
            solutions: ["Kiểm tra tần số lưới", "Cài đặt lại tham số", "Liên hệ điện lực"],
            severity: "Trung bình",
            color: "orange"
        }
    },
    sofar: {
        E001: {
            name: "Lỗi cách ly DC",
            description: "Điện trở cách ly thấp",
            causes: ["Tấm pin rò rỉ", "Cáp DC hỏng", "Connector ẩm ướt"],
            solutions: ["Kiểm tra tấm pin", "Thay cáp DC", "Vệ sinh connector"],
            severity: "Cao",
            color: "red"
        },
        E002: {
            name: "Lỗi điện áp lưới",
            description: "Điện áp AC ngoài phạm vi",
            causes: ["Lưới không ổn định", "Kết nối AC lỏng"],
            solutions: ["Kiểm tra lưới", "Siết chặt kết nối AC"],
            severity: "Trung bình",
            color: "orange"
        }
    },
    saj: {
        E01: {
            name: "Lỗi cách ly DC",
            description: "Điện trở cách ly DC thấp",
            causes: ["Tấm pin bị rò rỉ", "Cáp DC hỏng"],
            solutions: ["Kiểm tra tấm pin", "Thay cáp DC"],
            severity: "Cao",
            color: "red"
        },
        E02: {
            name: "Lỗi điện áp lưới",
            description: "Điện áp AC ngoài phạm vi",
            causes: ["Lưới không ổn định"],
            solutions: ["Kiểm tra lưới", "Chờ lưới ổn định"],
            severity: "Trung bình",
            color: "orange"
        }
    },
    kstar: {
        E001: {
            name: "Lỗi cách ly DC",
            description: "Điện trở cách ly DC thấp",
            causes: ["Tấm pin rò rỉ điện", "Cáp DC hỏng cách điện", "Connector bị ẩm ướt"],
            solutions: ["Kiểm tra tấm pin", "Thay cáp DC", "Vệ sinh connector", "Kiểm tra hệ thống chống thấm"],
            severity: "Cao",
            color: "red"
        },
        E002: {
            name: "Lỗi điện áp lưới",
            description: "Điện áp AC ngoài phạm vi",
            causes: ["Điện áp lưới không ổn định", "Kết nối AC lỏng"],
            solutions: ["Kiểm tra điện áp lưới", "Siết chặt kết nối AC", "Sử dụng ổn áp"],
            severity: "Trung bình",
            color: "orange"
        }
    },
    invt: {
        E001: {
            name: "Lỗi cách ly",
            description: "Lỗi điện trở cách ly DC",
            causes: ["Tấm pin bị rò rỉ", "Cáp DC hỏng"],
            solutions: ["Kiểm tra tấm pin", "Thay cáp DC"],
            severity: "Cao",
            color: "red"
        },
        E002: {
            name: "Lỗi điện áp DC",
            description: "Điện áp DC ngoài phạm vi",
            causes: ["Cấu hình chuỗi sai", "Tấm pin hỏng"],
            solutions: ["Kiểm tra cấu hình", "Đo điện áp tấm pin"],
            severity: "Trung bình",
            color: "orange"
        }
    },
    chint: {
        E001: {
            name: "Lỗi cách ly DC",
            description: "Điện trở cách ly thấp",
            causes: ["Tấm pin rò rỉ", "Cáp DC hỏng", "Độ ẩm cao"],
            solutions: ["Kiểm tra tấm pin", "Thay cáp DC", "Vệ sinh hệ thống"],
            severity: "Cao",
            color: "red"
        },
        E002: {
            name: "Lỗi điện áp lưới",
            description: "Điện áp AC ngoài phạm vi",
            causes: ["Lưới không ổn định", "Kết nối AC sai"],
            solutions: ["Kiểm tra lưới", "Kiểm tra kết nối AC"],
            severity: "Trung bình",
            color: "orange"
        }
    },
    abb: {
        27001: {
            name: "Lỗi cách ly DC",
            description: "Điện trở cách ly DC không đạt yêu cầu",
            causes: ["Tấm pin bị rò rỉ điện", "Cáp DC hỏng cách điện", "Độ ẩm trong hệ thống cao"],
            solutions: ["Kiểm tra từng tấm pin", "Thay thế cáp DC bị hỏng", "Vệ sinh và làm khô hệ thống", "Kiểm tra hệ thống chống thấm"],
            severity: "Cao",
            color: "red"
        },
        27002: {
            name: "Lỗi điện áp lưới",
            description: "Điện áp AC ngoài phạm vi cho phép",
            causes: ["Điện áp lưới không ổn định", "Kết nối AC không chính xác"],
            solutions: ["Kiểm tra điện áp lưới", "Kiểm tra kết nối AC", "Cài đặt lại tham số bảo vệ"],
            severity: "Trung bình",
            color: "orange"
        }
    },
    solaredge: {
        E001: {
            name: "Lỗi DC Arc Fault",
            description: "Phát hiện hồ quang DC",
            causes: ["Kết nối DC lỏng", "Connector bị oxy hóa", "Cáp DC bị hỏng"],
            solutions: ["Kiểm tra tất cả kết nối DC", "Vệ sinh và thay connector", "Thay cáp DC nếu cần", "Siết chặt tất cả kết nối"],
            severity: "Cao",
            color: "red"
        },
        E002: {
            name: "Lỗi Power Optimizer",
            description: "Power optimizer không hoạt động",
            causes: ["Power optimizer bị hỏng", "Kết nối với optimizer lỏng", "Tấm pin kết nối với optimizer hỏng"],
            solutions: ["Kiểm tra LED trên optimizer", "Kiểm tra kết nối optimizer", "Thay optimizer bị hỏng", "Kiểm tra tấm pin"],
            severity: "Trung bình",
            color: "orange"
        }
    },
    enphase: {
        E001: {
            name: "Lỗi AC disconnect",
            description: "Mất kết nối AC",
            causes: ["Kết nối AC lỏng", "Fuse AC bị cháy", "Dây AC bị đứt"],
            solutions: ["Kiểm tra kết nối AC", "Thay fuse AC", "Kiểm tra dây AC", "Siết chặt kết nối"],
            severity: "Cao",
            color: "red"
        },
        E002: {
            name: "Lỗi DC input",
            description: "Không có tín hiệu DC từ tấm pin",
            causes: ["Tấm pin bị hỏng", "Kết nối DC lỏng", "Micro inverter bị hỏng"],
            solutions: ["Kiểm tra tấm pin", "Kiểm tra kết nối DC", "Thay micro inverter", "Đo điện áp tấm pin"],
            severity: "Trung bình",
            color: "orange"
        }
    }
}