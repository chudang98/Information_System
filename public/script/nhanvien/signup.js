/* eslint-disable */
var urlAPI = 'http://localhost:3000/api/user';

document.addEventListener('DOMContentLoaded', (event) => {
  let submit = document.querySelector('#submit');
  submit.addEventListener('click', () => {
    var isEmpty = 0;
    var inputs = document.querySelectorAll('.not-null');
    inputs.forEach((input) => {
      if (input.value == '') isEmpty = 1;
    });
    if (isEmpty == 1) {
      showError('Không được để trống thông tin nào');
      return;
    }
    var pass = document.querySelector('#password').value;
    var confirm_pass = document.querySelector('#confirm-password').value;
    if (pass != confirm_pass) {
      showError('Mật khẩu không giống nhau !');
      return;
    }
    var username = document.querySelector('#username').value;
    var checkExist = checkExistAccout(username);
    if (checkExist == true) {
      showError('Tên tài khoản đã tồn tại, vui lòng nhập lại !');
      return;
    }
    submit.type = 'submit';
  });

  function showError(err) {
    var e = document.querySelector('#error');
    e.innerHTML = err;
  }
});

const checkExistAccout = async (userName) => {
  const res = await axios({
    method: 'POST',
    url: `${urlAPI}/checkExistAcount`,
    data: {
      userName: userName,
    },
  });
  console.log(res.data);
  if (res.data.status == 'success') return res.data.exist;
  else return false;
};
