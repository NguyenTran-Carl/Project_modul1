let userLogin = JSON.parse(localStorage.getItem("userLogin"))
//   Hàm đăng xuất 
function logout() {
    // // Xoá thông tin đăng nhập
    localStorage.removeItem("userLogin")
    //  Chuyển hướng đến trang đăng nhập
    window.location.href = `authen/index.html`
}
//Xin Chào Người Dùng
function renderHeader() {
    document.querySelector(".user_box").innerHTML = `
Hello , ${userLogin.userName}
`
}
renderHeader()




let courseList = JSON.parse(localStorage.getItem("courseList")) || [
    {
        ID: 1,
        Course: "e",
        Time: 2,
        status: true
    },
];

function saveToLocalStorage() {
    localStorage.setItem("courseList", JSON.stringify(courseList));
}

function renderCourseList() {
    const courseTableBody = document.getElementById('courseTable').getElementsByTagName('tbody')[0];
    courseTableBody.innerHTML = "";
    courseList.forEach((course, index) => {
        const row = courseTableBody.insertRow();
        row.innerHTML = `
            <td>${course.ID}</td>
            <td class="${course.status ? 'Đã Hoàn Thành' : 'Chưa Hoàn Thành'}">${course.Course}</td>
            <td>${course.Time}</td>
            <td>${course.status ? 'Đã Hoàn Thành' : 'Chưa Hoàn Thành'}</td>
            <td>
                <button class="btn btn-success" onclick="editCourse(${index})">Edit</button>
                <button class="btn btn-success" onclick="deleteCourse(${index})">Delete</button>
                <button class="btn btn-success" onclick="changeStatus(${index})">${course.status ? 'Đã Hoàn Thành' : 'Chưa Hoàn Thành'}</button>
            </td>
        `;
    });
}

function addCourse() {
    const courseID = document.getElementById('courseID').value;
    const courseName = document.getElementById('courseName').value;
    const courseTime = document.getElementById('courseTime').value;

    courseList.push({
        ID: courseID,
        Course: courseName,
        Time: courseTime,
        status: false
    });

    saveToLocalStorage();
    renderCourseList();
    document.getElementById('courseForm').reset();
}

function editCourse(index) {
    const course = courseList[index];
    document.getElementById('courseID').value = course.ID;
    document.getElementById('courseName').value = course.Course;
    document.getElementById('courseTime').value = course.Time;
    deleteCourse(index);
}

function deleteCourse(index) {
    courseList.splice(index, 1);
    saveToLocalStorage();
    renderCourseList();
}

function changeStatus(index) {
    courseList[index].status = !courseList[index].status;
    saveToLocalStorage();
    renderCourseList();
}




function searchCourses() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredCourses = courseList.filter(course => 
        course.ID.toString().toLowerCase().includes(query) ||
        course.Course.toLowerCase().includes(query) ||
        course.Time.toString().toLowerCase().includes(query) ||
        (course.status ? 'completed' : 'not completed').toLowerCase().includes(query)
    );
    renderCourseList(filteredCourses);
}


renderCourseList();






// // Hàm hiển thị bảng điều khiển -->
// function addCourse() {
//     document.getElementById('dashboard').style.display = 'block';
//     document.getElementById('showTable').style.display = 'none';
// }

// showCourse()

// function showCourse() {
//     document.getElementById('dashboard').style.display = 'none';
//     document.getElementById('showTable').style.display = 'block';
// }




//Cái cũ => Lỗi

// function renderAddCourse() {
//     let courseList = JSON.parse(localStorage.getItem("courseList"))
//     let newCourse = ``
//     for (let i = 0; i < courseList.length ; i++) {
//         newCourse += `
//      <tr>
//             <th scope="row">${arr[i].ID}</th>
//             <td>${arr[i].Course}</td>
//             <td>${arr[i].Time}</td>
//             <td>${arr[i].status}</td>
//             <td>
//               <button  onclick="deleteItem(${courseList[i].IDCourse})">Delete</button>
//                 <button  onclick="edit(${courseList[i].IDCourse})">Edit</button>
//         </td>
//           </tr>
//     `
//     }

//     document.querySelector("tbody").innerHTML = newCourse


// }

// renderAddCourse()


// function add() {
//     let newUser = {
//         IDCourse: document.querySelector(".IDCourse").value,
//         newCourse: document.querySelector(".newCourse").value,
//         Time: document.querySelector(".time").value,
//         status: true
//     }
//     console.log("da vao");


//     let courseList = JSON.parse(localStorage.getItem("courseList"))
//     courseList.push(newUser)
//     localStorage.setItem("courseList", JSON.stringify(courseList))
//     renderAddCourse()
//     alert("Đăng Ký Thành Công")


// }



