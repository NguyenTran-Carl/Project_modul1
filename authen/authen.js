const switchers = [...document.querySelectorAll('.switcher')]
let userList = [
    {
        id: 1,
        userName: "Nguyen",
        password: "123",
        status: true
    },
    {
        id: 2,
        userName: "Tran",
        password: "1234",
        status: true
    }
]
localStorage.setItem("userList", JSON.stringify(userList))
switchers.forEach(item => {
    item.addEventListener('click', function () {
        switchers.forEach(item => item.parentElement.classList.remove('is-active'))
        this.parentElement.classList.add('is-active')
    })
})

function signUp(event) {
    event.preventDefault();
    let newUser = {
        id: Date.now(),
        userName: event.target.userName.value,
        password: event.target.password.value,
        status: true
    };

    if (newUser.password != event.target["password-confirm"].value) {
        alert("Mật khẩu không trùng khớp");
        return;
    }

    let userList = JSON.parse(localStorage.getItem("userList")) || [];
    userList.push(newUser);
    localStorage.setItem("userList", JSON.stringify(userList));

    alert("Đăng Ký Thành Công");
}

function signIn(event) {
    event.preventDefault()
    let userInfor = {
        userName: event.target.userName.value,
        password: event.target.password.value,
    }
    let userList = JSON.parse(localStorage.getItem("userList"))
    // So Sanh Xem Tài Khoản đã Tạo chưa

    let userCheck = null

    for (i = 0; i < userList.length; i++) {
        if (userList[i].userName == userInfor.userName) {
            userCheck = userList[i]
            break
        }
    }

    if (!userCheck) {
        alert("Chưa Đăng Ký")
        return
    }
    if (userCheck.password != userInfor.password) {
        alert("Mật Khẩu Không Chính Xác")
        return
    }

    if (!userCheck.status) {
        alert("Tài Khoản Đã Bị Khoá")
        return
    }

    localStorage.setItem("userLogin", JSON.stringify(userCheck))
    window.location.href = "index.html"

}

// let userList = [
//     {
//         id: 1,
//         userName: "admin",
//         password: "123",
//         status: true
//     },
//     {
//         id: 2,
//         userName: "member",
//         password: "1234",
//         status: true
//     }
// ]

// localStorage.setItem("userList", JSON.stringify(userList))

function signIn(event) {
    event.preventDefault();
    let userInfor = {
        userName: event.target.userName.value,
        password: event.target.password.value
    }

    let userList = JSON.parse(localStorage.getItem("userList"));

    let userResult = null;
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].userName == userInfor.userName) {
            userResult = userList[i];
            break;
        }
    }

    if (!userResult) {
        alert("Người dùng không tồn tại!")
        return;
    }

    if (userResult.password != userInfor.password) {
        alert("Mật khẩu không chính xác!")
        return;
    }

    if (!userResult.status) {
        alert("Tài khoản đã bị khóa")
        return;
    }

    localStorage.setItem("userLogin", JSON.stringify(userResult))
    window.location.href = "/"
}