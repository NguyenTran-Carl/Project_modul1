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

// Hàm hiển thị bảng điều khiển -->
function addCourse() {
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('showTable').style.display = 'none';
}

showCourse()

function showCourse() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('showTable').style.display = 'block';
}

// let courseList = [
//     {
//         IDCourse: 1,
//         Course: "e",
//         Time: 2,
//         status: true
//     },
// ]
localStorage.setItem("courseList", JSON.stringify(courseList))


function renderAddCourse() {
    let courseList = JSON.parse(localStorage.getItem("courseList"))
    let newCourse = ``
    for (let i = 0; i < courseList.length; i++) {
        newCourse += `
     <tr>
            <th scope="row">${arr[i].IDCourse}</th>
            <td>${arr[i].newCourse}</td>
            <td>${arr[i].time}</td>
            <td>${arr[i].status}</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
        </td>
          </tr>
    `
    }

    newCourse = document.querySelector(".addTable").innerHTML


}

renderAddCourse()

function add() {
    let newUser = {
        IDCourse: document.querySelector(".IDCourse").value,
        newCourse: document.querySelector(".newCourse").value,
        Time: document.querySelector(".time").value,
        status: true
    }
    console.log("da vao");


    let courseList = JSON.parse(localStorage.getItem("courseList"))
    courseList.push(newUser)
    localStorage.setItem("courseList", JSON.stringify(courseList))

    alert("Đăng Ký Thành Công")


}


