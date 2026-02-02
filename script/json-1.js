

let users=[
  {id:"01",name:"Arun",email:"arun@gmail.com",amount:3000,city:"Madurai",number:"9123456789",gender:"Male"},
  {id:"02",name:"Priya",email:"priya@gmail.com",amount:7000,city:"Chennai",number:"9988776655",gender:"Female"},
  {id:"03",name:"yathav",email:"yathav@gmail.com",amount:5000,city:"Chennai",number:"9988776655",gender:"Male"}
];

let editIndex=-1;

function display(data=users){
  let rows="";
  data.forEach(u=>{
    let i=users.findIndex(x=>x.id===u.id);
    rows+=`
      <tr>
        <td>${u.id}</td>
        <td>${u.name}</td>
        <td>${u.email}</td>
        <td>${u.amount}</td>
        <td>${u.city}</td>
        <td>${u.number}</td>
        <td>${u.gender}</td>
        <td><button class="btn btn-warning" onclick="editUser(${i})">Edit</button></td>
        <td><button class="btn btn-danger" onclick="deleteUser(${i})">Delete</button></td>
      </tr>`;
  });
  tableBody.innerHTML=rows;
}
display();

        //adduser
function addUser(){
  clearErr();
  let id=v("id"),name=v("name"),email=v("email"),amount=v("amount"),
      city=v("city"),number=v("number"),
      gender=document.querySelector('input[name="gender"]:checked');


          //user validation
  let ok=true;
  if(!id) e("idErr","Enter ID"),ok=false;
  if(!name) e("nameErr","Enter your Name"),ok=false;
  if(!email||!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/) e("emailErr","Enter your Email"),ok=false;
  if(!amount) e("amountErr","Enter your Amount"),ok=false;
  if(!city) e("cityErr","Enter your City"),ok=false;
  if(!number||!/^[0-9]{10}$/.test(number)) e("numberErr","Enter Invalid Number"),ok=false;
  if(!gender) e("genderErr","Select gender"),ok=false;
  if(!ok) return;

  let obj={id,name,email,amount:Number(amount),city,number,gender:gender.value};

  editIndex>=0?users[editIndex]=obj:users.push(obj);
  editIndex=-1;
  clear();
  display();
}

          // Edit
function editUser(i){
  let u=users[i];
  id.value=u.id;name.value=u.name;email.value=u.email;
  amount.value=u.amount;city.value=u.city;number.value=u.number;
  document.querySelector(`input[value="${u.gender}"]`).checked=true;
  editIndex=i;
}

function deleteUser(i){ users.splice(i,1); display(); }

        //search

function searchUser(){
  let vlu=searchName.value.toLowerCase();
  display(users.filter(u=>
    Object.values(u).join("").toLowerCase().includes(vlu)
  ));
}

function filterUser(){
  let a=Number(filterAmount.value);
  display(users.filter(u=>u.amount>a));
}

function sortByAmount(){
  display([...users].sort((a,b)=>a.amount-b.amount));
}

function v(id){return document.getElementById(id).value.trim();}
function e(id,msg){document.getElementById(id).innerHTML=msg;}
function clearErr(){document.querySelectorAll("span").forEach(s=>s.innerHTML="");}
function clear(){document.querySelectorAll("input").forEach(i=>i.type==="radio"?i.checked=false:i.value="");}
