function getData() {
  // console.log("hai");
  fetch("http://localhost:5000/get-all-task")
    .then((r) => r.json())
    .then((data) => {
      // console.log(data);
      if (data.sucess) {
        // console.log(data.allTask);
        const { allTask } = data;
        // allTask.forEach((task) => {
        //   console.log(task.task_name);
        // });
        let newArr = allTask
          .map((task) => {
            return `<div class="list list1">
            <p class="para name">${task.task_name}</p>
            <ul class="para description">
              <li>${
                task.completed
                  ? `<strike>${task.task_descrip}</strike>`
                  : task.task_descrip
              }</li>
              <li>orange</li>
              <li>banana</li>
            </ul>
            <div class="btns">
              <button class="btn delbtn"><i class="fa-solid fa-trash"></i></button>
              <button class="btn editbtn">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              ${
                task.completed
                  ? ""
                  : "<button class='btn checkbtn'><i class='fa-solid fa-check'></i></button>"
              }
            </div>
          </div>`;
          })
          .join("");
        console.log(newArr);
        document.querySelector("#main").innerHTML = newArr;
      } else {
        alert(data.message);
      }
    });
}
// getData();

async function fetchData() {
  let { data } = await axios.get("http://localhost:5000/get-all-task");
  // console.log(data);
  if (data.sucess) {
    // console.log(data.allTask);
    const { allTask } = data;
    // allTask.forEach((task) => {
    //   console.log(task.task_name);
    // });
    let newArr = allTask
      .map((task) => {
        return `<div class="list list1">
        <p class="para name">${task.task_name}</p>
        <ul class="para description">
          <li>${
            task.completed
              ? `<strike>${task.task_descrip}</strike>`
              : task.task_descrip
          }</li>
          <li>orange</li>
          <li>banana</li>
        </ul>
        <div class="btns">
          <button class="btn delbtn"><i class="fa-solid fa-trash" data-id=${
            task._id
          }></i></button>
          <button class="btn editbtn">
          <a href="http://localhost:5000/edittask.html?id=${
            task._id
          }"><i class="fa-solid fa-pen-to-square"></i></a>
          </button>
          ${
            task.completed
              ? ""
              : "<button class='btn checkbtn'><i class='fa-solid fa-check'></i></button>"
          }
        </div>
      </div>`;
      })
      .join("");
    console.log(newArr);
    document.querySelector("#main").innerHTML = newArr;
  } else {
    alert(data.message);
  }
}
fetchData();

let mainpage = document.querySelector("#main");
mainpage.addEventListener("click", async function (e) {
  console.log(e.target);
  // console.log(e.target.classList.contains("delbtn"));
  let delbtn = e.target.classList.contains("fa-solid");
  if (delbtn) {
    // alert("Delete Task");
    let id = e.target.getAttribute("data-id");
    console.log(id);
    let res = await axios.delete("http://localhost:5000/delete-task/" + id);
    console.log(res.data);
    if (res.data.sucess) {
      // alert("Deleted Task Successfully");
      window.location.href = "http://localhost:5000/index.html";
    }
  }
});
