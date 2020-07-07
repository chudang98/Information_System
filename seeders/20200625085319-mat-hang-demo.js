'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => { 
    return queryInterface.bulkInsert('MatHangs', [
    { 	
      
      "ten"	: "Sơ mi kẻ tay cọc",
      "loai" : "Áo Sơ mi",
      "giaNhap" : 150000,
      "giaBan" : 250000,
      "soLuong" : 10,
      "mauSac" : "Be",
      "kichCo" : "S",
      "Anh" :"IMG0001.jpg"
    },
    {
      
      "ten"	: "Sơ mi cổ trụ xếp ly",
      "loai" : "Áo Sơ mi",
      "giaNhap" : 150000,
      "giaBan" : 250000,
      "soLuong" : 5,
      "mauSac" : "Trắng",
      "kichCo" : "S",
      "Anh" :"IMG0002.jpg"
    },
    {
      
      "ten"	: "Sơ mi phối cổ nơ kẻ",
      "loai" : "Áo Sơ mi",
      "giaNhap" : 150000,
      "giaBan" : 250000,
      "soLuong" : 10,
      "mauSac" : "Trắng",
      "kichCo" : "L",
      "Anh" :"IMG0003.jpg"
    },
    {
      
      "ten"	: "Sơ mi cổ đính đá tay lỡ",
      "loai" : "Áo Sơ mi",
      "giaNhap" : 170000,
      "giaBan" : 280000,
      "soLuong" : 5,
      "mauSac" : "Đỏ",
      "kichCo" : "M",
      "Anh" :"IMG0004.jpg"
    },
    {
      
      "ten"	: "Sơ mi cổ tròn đính hoa",
      "loai" : "Áo Sơ mi",
      "giaNhap" : 170000,
      "giaBan" : 290000,
      "soLuong" : 5,
      "mauSac" : "Vàng",
      "kichCo" : "S",
      "Anh" :"IMG0005.jpg"
    },
    {
      
      "ten"	: "Sơ mi hoa nhí",
      "loai" : "Áo Sơ mi",
      "giaNhap" : 170000,
      "giaBan" : 290000,
      "soLuong" : 5,
      "mauSac" : "Xanh",
      "kichCo" : "M",
      "Anh" :"IMG0006.jpg"
    },
    {
      
      "ten"	: "Sơ mi nữ tay lửng",
      "loai" : "Áo Sơ mi",
      "giaNhap" : 170000,
      "giaBan" : 290000,
      "soLuong" : 5,
      "mauSac" : "Vàng",
      "kichCo" : "S",
      "Anh" :"IMG0007.jpg"
    },
    {
      
      "ten"	: "Sơ mi nữ cổ đức",
      "loai" : "Áo Sơ mi",
      "giaNhap" : 170000,
      "giaBan" : 290000,
      "soLuong" : 5,
      "mauSac" : "Vàng",
      "kichCo" : "L",
      "Anh" :"IMG0008.jpg"
    },
    {
      
      "ten"	: "Sơ mi cổ chữ V",
      "loai" : "Áo Sơ mi",
      "giaNhap" : 170000,
      "giaBan" : 290000,
      "soLuong" : 5,
      "mauSac" : "Vàng",
      "kichCo" : "S",
      "Anh" :"IMG0009.jpg"
    },
    {
      
      "ten"	: "Sơ mi cổ đức phối nơ",
      "loai" : "Áo Sơ mi",
      "giaNhap" : 170000,
      "giaBan" : 290000,
      "soLuong" : 5,
      "mauSac" : "Vàng",
      "kichCo" : "S",
      "Anh" :"IMG0010.jpg"
    },
    {
      
      "ten"	: "Áo khoác kaki",
      "loai" : "Áo khoác",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Xanh tím",
      "kichCo" : "L",
      "Anh" :"IMG0011.jpg"
    },
    {
      
      "ten"	: "Áo khoác kẻ",
      "loai" : "Áo khoác",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Kem",
      "kichCo" : "M",
      "Anh" :"IMG0012.jpg"
    },
    {
      
      "ten"	: "Áo khoác măng tô kèm đai",
      "loai" : "Áo khoác",
      "giaNhap" : 300000,
      "giaBan" : 500000,
      "soLuong" : 5,
      "mauSac" : "Đỏ",
      "kichCo" : "L",
      "Anh" :"IMG0013.jpg"
    },
    {
      
      "ten"	: "Áo khoác măng tô khóa đồng",
      "loai" : "Áo khoác",
      "giaNhap" : 300000,
      "giaBan" : 500000,
      "soLuong" : 5,
      "mauSac" : "Đen",
      "kichCo" : "L",
      "Anh" :"IMG0014.jpg"
    },
    {
      
      "ten"	: "Áo khoác phong cách hàn",
      "loai" : "Áo khoác",
      "giaNhap" : 300000,
      "giaBan" : 500000,
      "soLuong" : 5,
      "mauSac" : "Be",
      "kichCo" : "L",
      "Anh" :"IMG0015.jpg"
    },
    {
      
      "ten"	: "Áo vest kẻ tay lỡ",
      "loai" : "Áo Vest",
      "giaNhap" : 300000,
      "giaBan" : 500000,
      "soLuong" : 5,
      "mauSac" : "Ghi",
      "kichCo" : "L",
      "Anh" :"IMG0016.jpg"
    },
    {
      
      "ten"	: "Áo vest phối tay kẻ",
      "loai" : "Áo Vest",
      "giaNhap" : 300000,
      "giaBan" : 500000,
      "soLuong" : 5,
      "mauSac" : "Ghi",
      "kichCo" : "M",
      "Anh" :"IMG0017.jpg"
    },
    {
      
      "ten"	: "Áo vest lẻ tay phối đen",
      "loai" : "Áo Vest",
      "giaNhap" : 300000,
      "giaBan" : 500000,
      "soLuong" : 5,
      "mauSac" : "Nâu",
      "kichCo" : "L",
      "Anh" :"IMG0018.jpg"
    },
    {
      
      "ten"	: "Áo vest classic",
      "loai" : "Áo Vest",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Tím than",
      "kichCo" : "M",
      "Anh" :"IMG0019.jpg"
    },
    {
      
      "ten"	: "Áo vest kẻ đen",
      "loai" : "Áo Vest",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Đen",
      "kichCo" : "L",
      "Anh" :"IMG0020.jpg"
    },
    {
      
      "ten"	: "Áo vest 2 nút bọc",
      "loai" : "Áo Vest",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Đen",
      "kichCo" : "L",
      "Anh" :"IMG0021.jpg"
    },
    {
      
      "ten"	: "Áo vest caro 4 nút",
      "loai" : "Áo Vest",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Đen",
      "kichCo" : "L",
      "Anh" :"IMG0022.jpg"
    },
    {
      
      "ten"	: "Áo vest ngắn chạy viền",
      "loai" : "Áo Vest",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Đen",
      "kichCo" : "M",
      "Anh" :"IMG0023.jpg"
    },
    {
      
      "ten"	: "Áo vest thêu chữ",
      "loai" : "Áo Vest",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Đen",
      "kichCo" : "S",
      "Anh" :"IMG0024.jpg"
    },
    {
      
      "ten"	: "Áo vest xếp ly eo",
      "loai" : "Áo Vest",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Đen",
      "kichCo" : "L",
      "Anh" :"IMG0025.jpg"
    },
    {
      
      "ten"	: "Áo phông cổ tròn",
      "loai" : "Áo phông",
      "giaNhap" : 100000,
      "giaBan" : 170000,
      "soLuong" : 5,
      "mauSac" : "Hồng",
      "kichCo" : "M",
      "Anh" :"IMG0026.jpg"
    },
    {
      
      "ten"	: "Áo phông cổ tim",
      "loai" : "Áo phông",
      "giaNhap" : 100000,
      "giaBan" : 170000,
      "soLuong" : 5,
      "mauSac" : "Tím",
      "kichCo" : "M",
      "Anh" :"IMG0027.jpg"
    },
    {
      
      "ten"	: "Áo phông cổ bẻ",
      "loai" : "Áo phông",
      "giaNhap" : 100000,
      "giaBan" : 170000,
      "soLuong" : 5,
      "mauSac" : "Trắng",
      "kichCo" : "S",
      "Anh" :"IMG0028.jpg"
    },
    {
      
      "ten"	: "Áo phông cổ tròn in hình",
      "loai" : "Áo phông",
      "giaNhap" : 100000,
      "giaBan" : 170000,
      "soLuong" : 5,
      "mauSac" : "Trắng",
      "kichCo" : "L",
      "Anh" :"IMG0029.jpg"
    },
    {
      
      "ten"	: "Áo phông kẻ",
      "loai" : "Áo phông",
      "giaNhap" : 100000,
      "giaBan" : 170000,
      "soLuong" : 5,
      "mauSac" : "Đen",
      "kichCo" : "M",
      "Anh" :"IMG0030.jpg"
    },
    {
      
      "ten"	: "Áo phông kẻ",
      "loai" : "Áo phông",
      "giaNhap" : 100000,
      "giaBan" : 170000,
      "soLuong" : 5,
      "mauSac" : "Đen",
      "kichCo" : "L",
      "Anh" :"IMG0031.jpg"
    },
    {
      
      "ten"	: "Quần côn đứng basic",
      "loai" : "Quần vải",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Đen",
      "kichCo" : "S",
      "Anh" : "QUAN0001.jpg"
    },
    {
      
      "ten"	: "Quần côn đứng basic",
      "loai" : "Quần vải",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Đen",
      "kichCo" : "M",
      "Anh" : "QUAN0001.jpg"
    },
    {
      
      "ten"	: "Quần côn đứng basic",
      "loai" : "Quần vải",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Đen",
      "kichCo" : "L",
      "Anh" : "QUAN0001.jpg"
    },
    {
      
      "ten"	: "Quần côn đứng kẻ ô nhí",
      "loai" : "Quần vải",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Ghi",
      "kichCo" : "S",
      "Anh" : "QUAN0002.jpg"
    },
    {
      
      "ten"	: "Quần côn đứng kẻ ô nhí",
      "loai" : "Quần vải",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Ghi",
      "kichCo" : "M",
      "Anh" : "QUAN0002.jpg"
    },
    {
      
      "ten"	: "Quần côn đứng kẻ ô nhí",
      "loai" : "Quần vải",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Ghi",
      "kichCo" : "L",
      "Anh" : "QUAN0002.jpg"
    },
    {
      
      "ten"	: "Quần côn đứng trơn",
      "loai" : "Quần vải",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Xám",
      "kichCo" : "L",
      "Anh" : "QUAN0003.jpg"
    },
    {
      
      "ten"	: "Quần côn đứng 2 ly",
      "loai" : "Quần vải",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Ghi",
      "kichCo" : "S",
      "Anh" : "QUAN0004.jpg"
    },
    {
      
      "ten"	: "Quần côn đứng cạp cao",
      "loai" : "Quần vải",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Ghi",
      "kichCo" : "S",
      "Anh" : "QUAN0005.jpg"
    },
    {
      
      "ten"	: "Quần côn đứng cạp 3 cúc",
      "loai" : "Quần vải",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Nâu",
      "kichCo" : "S",
      "Anh" : "QUAN0006.jpg"
    },
    {
      
      "ten"	: "Quần côn đứng đai kép",
      "loai" : "Quần vải",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Tím than",
      "kichCo" : "S",
      "Anh" : "QUAN0007.jpg"
    },
    {
      
      "ten"	: "Quần côn đứng giao cạp đai G",
      "loai" : "Quần vải",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Ghi",
      "kichCo" : "M",
      "Anh" : "QUAN0008.jpg"
    },
    {
      
      "ten"	: "Quần côn đứng gấu V",
      "loai" : "Quần vải",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Đen",
      "kichCo" : "S",
      "Anh" : "QUAN0009.jpg"
    },
    {
      
      "ten"	: "Quần côn ống rộng",
      "loai" : "Quần vải",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Ghi",
      "kichCo" : "L",
      "Anh" : "QUAN0010.jpg"
    },
    {
      
      "ten"	: "Quần côn đứng gấu đính cúc",
      "loai" : "Quần vải",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Đen",
      "kichCo" : "S",
      "Anh" : "QUAN0011.jpg"
    },
    {
      
      "ten"	: "Quần côn đứng kẻ sọc",
      "loai" : "Quần vải",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Đen",
      "kichCo" : "M",
      "Anh" : "QUAN0012.jpg"
    },
    {
      
      "ten"	: "Quần côn đứng kẻ ô vuông",
      "loai" : "Quần vải",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Nâu",
      "kichCo" : "L",
      "Anh" : "QUAN0013.jpg"
    },
    {
      
      "ten"	: "Quần côn đứng đai chéo 2 cúc",
      "loai" : "Quần vải",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Xanh",
      "kichCo" : "S",
      "Anh" : "QUAN0014.jpg"
    },
    {
      
      "ten"	: "Quần dáng côn cạp liền",
      "loai" : "Quần vải",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Đen",
      "kichCo" : "S",
      "Anh" : "QUAN0015.jpg"
    },
    {
      
      "ten"	: "Quần Kaki 2 sọc",
      "loai" : "Quần Kaki",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Xanh rêu",
      "kichCo" : "S",
      "Anh" : "QUAN0016.png"
    },
    {
      
      "ten"	: "Quần Kaki tua gấu",
      "loai" : "Quần Kaki",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Be",
      "kichCo" : "M",
      "Anh" : "QUAN0017.jpg"
    },
    {
      
      "ten"	: "Quần Kaki trơn",
      "loai" : "Quần Kaki",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Đen",
      "kichCo" : "L",
      "Anh" : "QUAN0018.jpg"
    },
    {
      
      "ten"	: "Quần Kaki rách",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Trắng",
      "kichCo" : "S",
      "Anh" : "QUAN0019.jpg"
    },
    {
      
      "ten"	: "Quần Kaki cạp cao",
      "loai" : "Quần Kaki",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Trắng",
      "kichCo" : "M",
      "Anh" : "QUAN0020.jpg"
    },
    {
      
      "ten"	: "Quần Kaki sọc caro",
      "loai" : "Quần Kaki",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Nâu",
      "kichCo" : "M",
      "Anh" : "QUAN0021.jpg"
    },
    {
      
      "ten"	: "Quần Kaki nữ thêu mèo",
      "loai" : "Quần Kaki",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Be",
      "kichCo" : "M",
      "Anh" : "QUAN0022.jpg"
    },
    {
      
      "ten"	: "Quần Kaki jogger nữ",
      "loai" : "Quần Kaki",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Đen",
      "kichCo" : "M",
      "Anh" : "QUAN0023.jpg"
    },
    {
      
      "ten"	: "Quần Kaki nữ lưng thun",
      "loai" : "Quần Kaki",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Hồng",
      "kichCo" : "M",
      "Anh" : "QUAN0024.jpg"
    },
    {
      
      "ten"	: "Quần Kaki túi hộp",
      "loai" : "Quần Kaki",
      "giaNhap" : 250000,
      "giaBan" : 400000,
      "soLuong" : 5,
      "mauSac" : "Trắng",
      "kichCo" : "M",
      "Anh" : "QUAN0025.jpg"
    },
    {
      
      "ten"	: "Quần jean ống rộng 2 sọc",
      "loai" : "Quần jean ống rộng",
      "giaNhap" : 300000,
      "giaBan" : 500000,
      "soLuong" : 5,
      "mauSac" : "Xám",
      "kichCo" : "S",
      "Anh" : "QUAN0026.jpg"
    },
    {
      
      "ten"	: "Quần jean ống rộng rách",
      "loai" : "Quần jean ống rộng",
      "giaNhap" : 300000,
      "giaBan" : 500000,
      "soLuong" : 5,
      "mauSac" : "Xanh",
      "kichCo" : "M",
      "Anh" : "QUAN0027.jpg"
    },
    {
      
      "ten"	: "Quần jean ống rộng tua gấu",
      "loai" : "Quần jean ống rộng",
      "giaNhap" : 300000,
      "giaBan" : 500000,
      "soLuong" : 5,
      "mauSac" : "Đen",
      "kichCo" : "L",
      "Anh" : "QUAN0028.jpg"
    },
    {
      
      "ten"	: "Quần jean ống rộng trơn",
      "loai" : "Quần jean ống rộng",
      "giaNhap" : 300000,
      "giaBan" : 500000,
      "soLuong" : 5,
      "mauSac" : "Xám",
      "kichCo" : "S",
      "Anh" : "QUAN0029.jpg"
    },
    {
      
      "ten"	: "Quần jean ống rộng cạp cao",
      "loai" : "Quần jean ống rộng",
      "giaNhap" : 300000,
      "giaBan" : 500000,
      "soLuong" : 5,
      "mauSac" : "Xám",
      "kichCo" : "M",
      "Anh" : "QUAN0030.jpg"
    },
    {
      
      "ten"	: "Quần jean ống đứng trơn",
      "loai" : "Quần jean ống đứng",
      "giaNhap" : 300000,
      "giaBan" : 500000,
      "soLuong" : 5,
      "mauSac" : "Xanh",
      "kichCo" : "L",
      "Anh" : "QUAN0031.jpg"
    },
    {
      
      "ten"	: "Quần jean ống đứng rách",
      "loai" : "Quần jean ống đứng",
      "giaNhap" : 300000,
      "giaBan" : 500000,
      "soLuong" : 5,
      "mauSac" : "Xanh",
      "kichCo" : "S",
      "Anh" : "QUAN0032.jpg"
    },
    {
      
      "ten"	: "Quần jean ống đứng tua gấu",
      "loai" : "Quần jean ống đứng",
      "giaNhap" : 300000,
      "giaBan" : 500000,
      "soLuong" : 5,
      "mauSac" : "Xanh",
      "kichCo" : "M",
      "Anh" : "QUAN0033.jpg"
    },
    {
      
      "ten"	: "Quần jean ống đứng cạp cao",
      "loai" : "Quần jean ống đứng",
      "giaNhap" : 300000,
      "giaBan" : 500000,
      "soLuong" : 5,
      "mauSac" : "Xanh",
      "kichCo" : "L",
      "Anh" : "QUAN0034.jpg"
    },
    {
      
      "ten"	: "Quần jean ống đứng 2 sọc",
      "loai" : "Quần jean ống đứng",
      "giaNhap" : 300000,
      "giaBan" : 500000,
      "soLuong" : 5,
      "mauSac" : "Đen",
      "kichCo" : "S",
      "Anh" : "QUAN0035.jpg"
    }
  ], {});
},

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
