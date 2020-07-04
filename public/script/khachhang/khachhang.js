/* eslint-disable */
var urlAPI = 'http://localhost:3000/ajax';

document.addEventListener('DOMContentLoaded', (event) => {

  let valueSdt = document.getElementById("exampleInputEmail1").value;
  
  document.getElementById("submitSearchTenKhachHang").addEventListener("click", function(){
 let data = timKiemKhachHang(valueSdt)
 
 
    // document.getElementById("demo").innerHTML = "Hello World";
});


});

const timKiemKhachHang = async (valueSdt) => {
  const res = await axios({
    method: 'GET',
    url: `${urlAPI}/khachang/${valueSdt}`,
  });
  console.log(res.data);
  
  if (res.data.status == 'success') return res.data.exist;
  else return false;
};
