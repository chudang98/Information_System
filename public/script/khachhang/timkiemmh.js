/* eslint-disable */
var urlAPI = 'http://localhost:3000/ajax';

document.addEventListener('DOMContentLoaded', (event) => {

    let valueSdt = document.getElementById("exampleInputEmail1").value;

    document.getElementById("submitSearchTenKhachHang").addEventListener("click", function () {
        let data = timKiemKhachHang(valueSdt)


        // document.getElementById("demo").innerHTML = "Hello World";
    });

 
});

function themGioHang(product) {
    console.log(product)
    var cart1 = JSON.parse(localStorage.getItem('adGioHang'))
    cart1.push(product)
    localStorage.setItem("adGioHang",JSON.stringify(cart1));
}


// const getMatHang = async (idMh) => {
//     const res = await axios({
//         method: 'GET',
//         url: `${urlAPI}/mathang/${idMh}`,
//     });
//     console.log(res.data);

//     if (res.data.status == 'success') return res.data.exist;
//     else return false;
// };