let userLogin = JSON.parse(localStorage.getItem("userLogin"))
//   Hàm đăng xuất 
function logout() {
    // // Xoá thông tin đăng nhập
    localStorage.removeItem("userList")
    //  Chuyển hướng đến trang đăng nhập
    window.location.href = "NewUser/index.html"
}
//Xin Chào Người Dùng
function renderHeader() {
    document.querySelector(".user_box").innerHTML = `
Hello , ${userLogin.userName}
`
}
renderHeader()

function renderData() {
    let userList = JSON.parse(localStorage.getItem("userList"))
    let htmlStr = ` `
    for (let i = 0; i < userList.length ; i++) {
        htmlStr += `
        <tr>
                <th scope="row">${i + 1}</th>
                <td>${userList[i].userName}</td>
                <td>${userList[i].status ? "Hoạt Động" : "Bị Khoá"}</td>
                <td>
            <button> Block/Unlock </button>
                </td>
        </tr>
        `
    }


    document.querySelector("#user_box").innerHTML = htmlStr
    console.log("da vao");
}
renderData()