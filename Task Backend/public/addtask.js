let form = document.querySelector("#form");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let taskName = document.querySelector("#taskname").value;
  // console.log(taskName);
  let taskDescrip = document.querySelector("#taskdescrip").value;
  // console.log(taskDescrip);
  let res = await axios.post("http://localhost:5000/add-task", {
    task_name: taskName,
    task_descrip: taskDescrip,
  });
  console.log(res.data);
  if (res.data.sucess) {
    alert("Added Task");
    window.location.href = "http://localhost:5000/index.html";
  }
});
