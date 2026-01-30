


/* ===== DATA STORE (IMPORTANT) ===== */
let users = [
  { id:"02", name: "yathav", email: "yathav12@gmail.com", amount: 5000, city: "Chennai", number: "9876543210", gender:"Male" },
  { id:"01", name: "Arun", email: "arun12@gmail.com", amount: 3000, city: "Madurai", number: "9123456789", gender:"Male" },
  { id:"03", name: "Priya", email: "priya12@gmail.com" ,amount: 7000, city: "Coimbatore", number: "9988776655", gender:"Female" }
];
let editIndex = -1;

/* ===== DISPLAY TABLE ===== */
function display(data = users) {
  let rows = "";
  
  data.forEach((u, i) => {
    rows += `
      <tr>
        <td>${u.id}</td>
        <td>${u.name}</td>
        <td>${u.email}</td>
        <td>${u.amount}</td>
        <td>${u.city}</td>
        <td>${u.number}</td>
        <td>${u.gender}</td>
        <td><button onclick="editUser(${i})">Edit</button></td>
        <td><button onclick="deleteUser(${i})">Delete</button></td>
      </tr>
    `;
  });

  document.getElementById("tableBody").innerHTML = rows;
}

/* ===== ADD / UPDATE ===== */
function addUser() {
  let id = document.getElementById("id").value.trim();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let amount = document.getElementById("amount").value.trim();
  let city = document.getElementById("city").value.trim();
  let number= document.getElementById("number").value.trim();

  let gender =document.querySelector('input[name="gender"]:checked');

  let valid = true;

  // clear old errors
  document.getElementById("idErr").innerHTML = "";
  document.getElementById("nameErr").innerHTML = "";
  document.getElementById("emailErr").innerHTML = "";
  document.getElementById("amountErr").innerHTML = "";
  document.getElementById("cityErr").innerHTML = "";
  document.getElementById("numberErr").innerHTML = "";
  document.getElementById("genderErr").innerHTML = "";
  

       /* ==== validation ==== */
  
  //id validation
  if (id === ""){
    document.getElementById("idErr").innerHTML = "Enter your ID";
    valid = false;
  }
  
  //name validation
  if (name === "") {
    document.getElementById("nameErr").innerHTML = "Enter your name";
    valid = false;
  } else if (!/^[A-Za-z]{3,20}$/.test(name)) {
    document.getElementById("nameErr").innerHTML = "Enter valid name";
    valid = false;
  }

  //email validation 
  if (email === "") {
    document.getElementById("emailErr").innerHTML ="Enter your Email";
    valid = false;
  }else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
    document.getElementById("emailErr").innerHTML = "Enter valid Email";
    valid = false;
  }


  //amount validation
  if (amount === "" || isNaN(amount)) {
    document.getElementById("amountErr").innerHTML = "Enter valid amount";
    valid = false;
  }

  //gender validation
  if(!gender) {
    document.getElementById("genderErr").innerHTML = "Select gender";
    valid = false;
  }

  //city validation
  if (city === "") {
    document.getElementById("cityErr").innerHTML = "Enter your city";
    valid = false;
  }

  //phone number validation
  if (number === ""){
    document.getElementById("numberErr").innerHTML= "Enter your phone number";
    valid = false;
  }
  else if(!/^[0-9]{10}$/.test(number)) {
    document.getElementById("numberErr").innerHTML = "Enter valid 10 digit number";
    valid = false;
  }

  if (!valid) return;

  let userObj = {
    id,
    name,
    email,
    amount: Number(amount),
    city,
    number,
    gender:gender.value
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
  document.getElementById("id").value = users[index].id;
  document.getElementById("name").value = users[index].name;
  document.getElementById("email").value = users[index].email;
  document.getElementById("amount").value = users[index].amount;
  document.getElementById("city").value = users[index].city;
  document.getElementById("number").value = users[index].number;
  document.getElementById("gender").value = users[index].gender;

  document.querySelector(
    `input[name="gender"][value="${users[index].gender}"]`
  ).checked = true;


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
  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("city").value = "";
  document.getElementById("number").value = "";
  
  document.querySelectorAll('input[name="gender"]').forEach(r =>r.checked = false);
}