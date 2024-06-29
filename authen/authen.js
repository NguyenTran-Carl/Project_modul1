const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
    item.addEventListener('click', function () {
        switchers.forEach(item => item.parentElement.classList.remove('is-active'))
        this.parentElement.classList.add('is-active')
    })
})
function signUp(event) {
    event.preventDefault()
    let newUser = {
        id: Date.now(),
        userName: event.target.userName.value,
        password: event.target.password.value,
        status: true
    }
    console.log("da vao");

    if (newUser.password != event.target.password.value) {
        alert(" Mật khẩu không trùng khớp")
        return
    }
    // console.log("da vao", newUser);

    let userList = JSON.parse(localStorage.getItem("userList"))
    userList.push(newUser)
    localStorage.setItem("userList", JSON.stringify(userList))

    alert("Đăng Ký Thành Công")


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
    window.location.href = "file:///Applications/fukuoka/Project_modul1/index.html"

}

