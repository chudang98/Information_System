/* eslint-disable */
var urlAPI = 'http://localhost:3000/ajax';

document.addEventListener('DOMContentLoaded', (event) => {
    goiData();
    // document.getElementById("myBtn").addEventListener("click", function(){
    //     xoaSanPham(id)
    //   });

});

function xoaSanPham(id){
    console.log("aaaaaaaaaa");
    
    var cart1 = JSON.parse(localStorage.getItem('adGioHang'))
    cart1.splice(id, 1)
    localStorage.setItem("adGioHang",JSON.stringify(cart1));

}

function goiData() {
    var sensorData = JSON.parse(localStorage.getItem('adGioHang'))
    console.log(sensorData);

    var postUrl = 'http://localhost:3000/ajax/danhsachmathang';

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.status === 200) {
            console.log('Request finished. Do processing here');
            var data = JSON.parse(xhttp.responseText);
            var htmlString = ""
            var dem = 1
            var dataProduct = data.data
            dataProduct.forEach((element, index) => {
                htmlString = htmlString + "<tr> <td>" +  dem++ + "</td><td>" + element._id + "</td><td>" +  element.ten + "</td><td>"  + element.soLuong + "</td><td>" + element.giaBan + " </td><td>" + element.giaBan * element.soLuong + "</td><td><a id=" + dem + " class='btn btn-info' href='http://localhost:3000/seller/hoadon/1' onclick=xoaSanPham("+index +")  > Xóa </a> </td> </tr>"
            }
            );
            document.getElementById("bodybanhangseller").innerHTML = htmlString

        }
    }
    xhttp.open('POST', postUrl, true)
    xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xhttp.send(JSON.stringify({ data: sensorData }));
}
