 const loginKey = 

loginKey(username, password){
    userName,
     passWord,
 };


const project = document.getElementById("project")
const category = document.getElementById("category")
const collaborators = document.getElementById("collaborators")
const startDate = document.getElementById("start-date")
const endDate = document.getElementById("end-date")
const priority = document.getElementById("priority")
const description = document.getElementById("description")

class Project {
    constructor(project, category, collaborators, startDate, endDate, priority, description){
        this.project = project
        this.category = category
        this.collaborators = collaborators
        this.startDate = startDate
        this.endDate = endDate
        this.category = category
        this.priority = priority
        this.description = description
    }
}

const projectMaker = () => {
    return new Project(`${project.value}, ${category.value}, ${startDate.value}, ${EndDate.value} ${category.value}, ${priority.value} ${priority.value} ${description.value}`)
}

addProject.addEventListener("click", projectMaker())

function windowAlert(){
    alert("Project has been saved.");
}
windowAlert();

{/* <button onclick="alert('Hello')">Click me.</button> */}






  <script>
    function display(form){ 
      let project = document.getElementById("project").value; 
      let category = document.getElementById("category").value; 
      let collaborators = getElementById ("collaborators").value; 
      let startDate = getElementById("startDate").value; 
      let endDate = getElementById("endDate").value; 
      let priority = getElementById("priority").value; 
      let description = getElementById("description").value; 
    
      let card = document.createElement("div")
      card.classList.add("card")
      card.inner.HTML = `
   <h1>${project}</h1>
   <h1>${category}</h1>
   <h1>${collaborators}</h1>
   <h1>${startDate}</h1>
   <h1>${endDate}</h1>
   <h1>${priority}</h1>
   <h1>${description}</h1>
<input id="submit" type="submit" value="Submit" class="btn" name="add" onclick="alert('Project created')"></input>
<button id="delete" onclick="alert('Project deleted')">Delete</button>`
form.appenchild(card)
let submit=document.createElement("submit");
let delete=document.createElemnt("delete");
submit.addEventListener("click", )
delete.addEventListener("click",()=>{
  
})

    }

  </script>










// const loginKey =

// loginKey(username, password){
//     userName,
//     passWord,
// };

let projectForm = document.getElementById("projectForm");
let projectDetails = document.getElementById("projectDetails");

projectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submit();
});

function submit() {
  let project = document.getElementById("project").value;
  console.log(project);
  let category = document.getElementById("category").value;
  console.log(category);
  let collaborators = document.getElementById("collaborators").value;
  console.log(collaborators);
  let startDate = document.getElementById("startDate").value;
  console.log(startDate);
  let endDate = document.getElementById("endDate").value;
  console.log(endDate);
  let priority1 = document.getElementById("priority1").value;
  console.log(priority1);
  let priority2 = document.getElementById("priority2").value;
  console.log(priority2);
  let description = document.getElementById("description").value;
  console.log(description);
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
   <h1>${project}</h1>
   <h1>${category}</h1>
   <h1>${collaborators}</h1>
   <h1>${startDate}</h1>
   <h1>${endDate}</h1>
   <h1>${priority1}</h1>
   <h1>${priority2}</h1>
   <h1>${description}</h1>
<button id="delete" onclick="alert('Project deleted')">Delete</button>`;

projectDetails.appendChild(card);
  let Delete = document.getElementById("delete");

  Delete.addEventListener("click", () => {
    card.remove();
  });
}



 class Project {
     constructor(project, category, collaborators, startDate, endDate, priority, description){
                 this.project = project
         this.category = category
        this.collaborators = collaborators
        this.startDate = startDate
       this.endDate = endDate
         this.category = category
         this.priority = priority
         this.description = description
     }
 }

 const projectMaker = () => {
     return new Project(`${project.value}, ${category.value}, ${startDate.value}, ${EndDate.value} ${category.value}, ${priority.value} ${priority.value} ${description.value}`)
 }

 addProject.addEventListener("click", projectMaker())

 function windowAlert(){
     alert("Project has been saved.");
 }
 windowAlert();