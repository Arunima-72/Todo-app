
function login(event){
    event.preventDefault();
    const user=document.getElementById("username").value;
    const pass=document.getElementById("password").value;
validateLogin(user,pass,()=>{
    window.location.href="main.html";
});
}
function validateLogin(username,password,callback){
    
    if(username==="admin"&&password==="12345"){
        callback();
    }
    else{
        alert("Invalid login credentials.");
    }
}
function logout(){
    window.location.href="index.html";
}
window.onload=function(){
    loadTodos()
}

function loadTodos(){
   fetch('jsonf/sample-todo.json')
    .then(res=>res.json())
    .then(todos=>addTodo(todos.slice(0,10)))
    .catch(err=>console.error(err))
};
function addTodo(todos){
    const list=document.getElementById('todo-list');
    list.innerHTML='';
    let count=0;
    todos.forEach(todo=>{
        const li=document.createElement('li');
        li.className='list-group-item';
        const checkbox=document.createElement('input');
        checkbox.type='checkbox';
        checkbox.disabled=todo.completed;
        checkbox.onchange= () =>{
            if(checkbox.checked){
                count++;
                checkCompleted(count).then(msg=>alert(msg));
            }else{
                count--;
            }
        };
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(''+todo.title));
        list.appendChild(li);
    });
}
 function checkCompleted(count){
    return new Promise((resolve,reject) =>{
        if (count===5){
            resolve("Congrats!5 Tasks have been successfully completed");
        }
    });
 }