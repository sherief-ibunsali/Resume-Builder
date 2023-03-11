function addNewWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let weOb = document.getElementById("we");
  let weButtonOb = document.getElementById("weAddButton");
  weOb.insertBefore(newNode, weButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("aq");
  let aqButtonOb = document.getElementById("aqAddButton");
  aqOb.insertBefore(newNode, aqButtonOb);
}

//generating cv

function generateCV() {
  let nameField = document.getElementById("nameField").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameField;

  //direct
  document.getElementById("nameT2").innerHTML = nameField;
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;

  //address
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;

  document.getElementById("fbT").innerHTML =
    document.getElementById("fbField").value;

  document.getElementById("instaT").innerHTML =
    document.getElementById("instaField").value;

  document.getElementById("linkedT").innerHTML =
    document.getElementById("linkedField").value;

  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectiveField").value;

  let wes = document.getElementsByClassName("weField");

  let str = "";

  for (let e of wes) {
    str = str + `<li>${e.value}</li>`;
  }
  document.getElementById("weT").innerHTML = str;

  //academic qualification
  let aqs = document.getElementsByClassName("aqField");

  let str2 = "";

  for (let e of aqs) {
    str2 += `<li>${e.value}</li>`;
  }
  document.getElementById("aqT").innerHTML = str2;

  //for image
  // let file = document.getElementById("imgField").files[0];
  // console.log(file);

  // let reader = new FileReader();
  // reader.readAsDataURL(file);
  // console.log(reader.result);
  //set image to template
  // reader.onloadend = function () {
  //   document.getElementById("imgTemplate").src = reader.result;
  // };
  document.getElementById("cv-form").style.display = "none";

  document.getElementById("cv-template").style.display = "block";
}

function printCV() {
  document.getElementById("btn").style.display = "none";
  window.print();
}
