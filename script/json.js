


/* ===== DATA STORE (IMPORTANT) ===== */
let users = [];
let editIndex = -1;

/* ===== DISPLAY TABLE ===== */
function display(data = users) {
  let rows = "";
  
  data.forEach((u, i) => {
    rows += `
      <tr>
        <td>${u.name}</td>
        <td>${u.amount}</td>
        <td>${u.city}</td>
        <td>${u.number}</td>
        <td><button onclick="editUser(${i})">Edit</button></td>
        <td><button onclick="deleteUser(${i})">Delete</button></td>
      </tr>
    `;
  });

  document.getElementById("tableBody").innerHTML = rows;
}

/* ===== ADD / UPDATE ===== */
function addUser() {
  let name = document.getElementById("name").value.trim();
  let amount = document.getElementById("amount").value.trim();
  let city = document.getElementById("city").value.trim();
  let number= document.getElementById("number").value.trim();

  let valid = true;

  // clear old errors
  document.getElementById("nameErr").innerHTML = "";
  document.getElementById("amountErr").innerHTML = "";
  document.getElementById("cityErr").innerHTML = "";
  document.getElementById("numberErr").innerHTML = "";
  

  //validation
  if (name === "") {
    document.getElementById("nameErr").innerHTML = "Enter your name";
    valid = false;
  } else if (!/^[A-Za-z]{3,20}$/.test(name)) {
    document.getElementById("nameErr").innerHTML = "Enter valid name";
    valid = false;
  }

  if (amount === "" || isNaN(amount)) {
    document.getElementById("amountErr").innerHTML = "Enter valid amount";
    valid = false;
  }

  if (city === "") {
    document.getElementById("cityErr").innerHTML = "Enter city";
    valid = false;
  }

  if (!/^[0-9]{10}$/.test(number)) {
    document.getElementById("numberErr").innerHTML = "Enter valid 10 digit number";
    valid = false;
  }

  if (!valid) return;

  let userObj = {
    name,
    amount: Number(amount),
    city,
    number
  };

  if (editIndex >= 0) {
    users[editIndex] = userObj;
    editIndex = -1;
  } else {
    users.push(userObj);
  }

  clearInputs();
  display();
}

/* ===== EDIT ===== */
function editUser(index) {
  document.getElementById("name").value = users[index].name;
  document.getElementById("amount").value = users[index].amount;
  document.getElementById("city").value = users[index].city;
  document.getElementById("number").value = users[index].number;
  editIndex = index;
}

/* ===== DELETE ===== */
function deleteUser(index) {
  users.splice(index, 1);
  display();
}

/* ===== SEARCH ===== */
function searchUser() {
  let value = document.getElementById("searchName").value.toLowerCase();

  let result = users.filter(u =>
    u.name.toLowerCase().includes(value)
  );

  display(result);
}

/* ===== FILTER ===== */
function filterUser() {
  let amt = Number(document.getElementById("filterAmount").value);

  let result = users.filter(u => u.amount > amt);
  display(result);
}

/* ===== SORT ===== */
function sortByAmount() {
  users.sort((a, b) => a.amount - b.amount);
  display();
}

/* ===== CLEAR INPUTS ===== */
function clearInputs() {
  document.getElementById("name").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("city").value ="";
  document.getElementById("number").value ="";
}