import { edit, addUser, delted } from "./fayz.js";

let box = document.querySelector(".box");
let addModal = document.querySelector(".addModal");
let addUSer = document.querySelector(".addUSer");
let closeAdd = document.querySelector(".closeAdd");
let addForm = document.querySelector(".addForm");
let ligth = document.querySelector(".ligth");
let dark = document.querySelector(".dark");
let body = document.querySelector(".body");
let Table = document.querySelector(".Table");
let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let p3 = document.querySelector(".p3");
let infoModal = document.querySelector(".infoModal");
let img1 = document.querySelector(".img1");
let infoClose = document.querySelector(".infoClose");
let searchForm = document.querySelector(".searchForm");
let editModal = document.querySelector(".editModal");
let editForm = document.querySelector(".editForm");
let editClose = document.querySelector(".editClose");
let th = document.querySelector(".th");
editClose.onclick = () => {
  editModal.close();
};

// edit

function editUser(e) {
  editModal.showModal();
  editForm["editImg"].value = e.img;
  editForm["editName"].value = e.name;
  editForm["editEmail"].value = e.email;
  editForm["editCity"].value = e.city;
  editForm.onsubmit = (event) => {
    event.preventDefault();
    let newObj = {
      img: editForm["editImg"].value,
      name: editForm["editName"].value,
      email: editForm["editEmail"].value,
      city: editForm["editCity"].value,
    };
    edit(e.id, newObj);
    editModal.close();
  };
}
// add
addUSer.onclick = () => {
  addModal.showModal();
};
closeAdd.onclick = () => {
  addModal.close();
};

addForm.onsubmit = (event) => {
  event.preventDefault();
  let newUser = {
    img: event.target["imgAdd"].value,
    name: event.target["name"].value,
    email: event.target["email"].value,
    city: event.target["city"].value,
    phone: event.target["phone"].value,
    status: false,
  };
  addUser(newUser);
  addModal.close();
};
// delete

// get

function getList(data) {
  box.innerHTML = "";
  data.forEach((e) => {
    let tr = document.createElement("tr");
    dark.onclick = () => {
      body.classList = "body2";
      tr.classList = "tr2";
      box.classList = "box2";
      th.classList = "box2";
      Table.classList = "Table2";
    };
    ligth.onclick = () => {
      body.classList = "body3";
      box.classList = "boxLight";
      tr.classList = "tr3";
      th.classList = "box3";
    };
    let td1 = document.createElement("td");

    td1.classList = "td1";
    let img = document.createElement("img");
    img.src = e.img;
    let div = document.createElement("div");
    div.classList = "div";
    let email = document.createElement("p");
    email.innerHTML = e.email;
    email.classList = "email";
    let name = document.createElement("h3");
    name.innerHTML = e.name;
    let city = document.createElement("td");
    city.innerHTML = e.city;
    let status = document.createElement("td");
    let statusP = document.createElement("p");
    statusP.innerHTML = e.status;
    status.classList = "status1";
    statusP.classList = "status";
    status.appendChild(statusP);
    let td2 = document.createElement("td");
    td2.classList = "td2";
    let divBtns = document.createElement("div");
    divBtns.classList = "divBtns";
    let phone = document.createElement("p");
    phone.innerHTML = e.phone;
    let editBtn = document.createElement("i");
    editBtn.classList = "gg-pen";
    editBtn.onclick = () => {
      editUser(e);
    };
    let delBtn = document.createElement("i");
    delBtn.classList = "gg-trash";
    delBtn.onclick = () => {
      delted(e.id);
    };
    let info = document.createElement("i");
    info.classList = "gg-info";
    info.onclick = () => {
      infoModal.showModal();
      img1.src = e.img;
      p1.innerHTML = e.name;
      p2.innerHTML = e.email;
      p3.innerHTML = e.city;
    };
    infoClose.onclick = () => {
      infoModal.close();
    };
    divBtns.append(editBtn, delBtn, info);
    div.append(name, email);
    td1.append(img, div);
    td2.append(phone, divBtns);
    tr.append(td1, city, status, td2);

    box.appendChild(tr);
  });
}

// themeSwitch.onclick = () => {
//   body.classList = "body2";
// };

export { getList, searchForm };
