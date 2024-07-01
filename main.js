// let userList = [
//     {
//         id: 1,
//         userName: "Nguyen",
//         password: "123",
//         status: true
//     },
//     {
//         id: 2,
//         userName: "Tran",
//         password: "1234",
//         status: true
//     }
// ]
// localStorage.setItem("userList", JSON.stringify(userList))

let userLogin = JSON.parse(localStorage.getItem("userLogin"))
 //   Hàm đăng xuất 
 function logout() {
    // // Xoá thông tin đăng nhập
    localStorage.removeItem("userLogin")
    //  Chuyển hướng đến trang đăng nhập
    window.location.href = "authen/index.html"
  }
  //Xin Chào Người Dùng

 



  function renderHeader() {
    document.querySelector(".user_box").innerHTML = `
Hello , ${userLogin.userName}
`
  }
  renderHeader()