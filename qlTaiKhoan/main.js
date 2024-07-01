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
function goHome() {
    window.location.href = "/"; // Change this to your homepage URL if different
  }
function renderData() {
    let userList = JSON.parse(localStorage.getItem("userList"))
    let htmlStr = ` `
    for (let i = 0; i < userList.length; i++) {
        htmlStr += `
        <tr>
                <th scope="row">${i + 1}</th>
                <td>${userList[i].userName}</td>
                <td>${userList[i].status ? "Hoạt Động" : "Bị Khoá"}</td>
               <td>
                    <button onclick="changeStatusUser(${userList[i].id})" class="btn btn-info">Bình Thường / Tạm Khóa</button>
                </td>
                <td>
                    <button onclick="deleteUser(${userList[i].id})" class="btn btn-danger">Xóa Người Dùng</button>
                </td>
        </tr>
        `
    }


    document.querySelector("#user_box").innerHTML = htmlStr
    console.log("da vao");
}
renderData()


function changeStatusUser(userId) {
    let userList = JSON.parse(localStorage.getItem("userList"));
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].id == userId) {
            userList[i].status = !userList[i].status;
            break
        }
    }
    localStorage.setItem("userList", JSON.stringify(userList))
    renderData()
}

function addUser() {
    let newUser = {
        id: Date.now(),
        userName: window.prompt("Nhập user name"),
        password: window.prompt("Nhập password"),
        status: true,
    }
    if (newUser.userName.includes(" ")) {
        alert("vui lòng nhập không khoảng cách")
        return
    }

    let userList = JSON.parse(localStorage.getItem("userList"));
    userList.push(newUser)
    localStorage.setItem("userList", JSON.stringify(userList))
    renderData()
}

function deleteUser(userId) {
    console.log("userId", userId);
    let userList = JSON.parse(localStorage.getItem("userList"));
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].id == userId) {
            userList.splice(i, 1)
            break
        }
    }
    renderData(userList);
    localStorage.setItem("userList", JSON.stringify(userList))
}