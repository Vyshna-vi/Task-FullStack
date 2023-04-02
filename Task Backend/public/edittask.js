const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
async function getOneTask() {
  let res = await axios.get("http://localhost:5000/get-one-task/" + id);
  console.log(res.data);
  if (res.data.sucess) {
    document.querySelector("#taskname").value = res.data.Task.task_name;
    document.querySelector("#taskdescrip").value = res.data.Task.task_descrip;
  }
}
getOneTask();

let taskName = document.querySelector("#taskname");
// console.log(taskName);
let taskDescrip = document.querySelector("#taskdescrip");
// console.log(taskDescrip);
let form = document.querySelector("#form");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let res = await axios.patch("http://localhost:5000/update-one-task/" + id, {
    task_name: taskName.value,
    task_descrip: taskDescrip.value,
  });
  console.log(res.data);
  if (res.data.sucess) {
    alert("Updated Task Successfully");
    window.location.href = "http://localhost:5000/index.html";
  }
});
