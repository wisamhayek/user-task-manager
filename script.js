//If no users -> create empty -> set to local storage
if(localStorage.userList === undefined){
    let userList = []
    localStorage.setItem('userList', JSON.stringify(userList));
}

function addTask(){
    let userList = localStorage.getItem('userList');
    userList = JSON.parse(userList);
    let activeUser = localStorage.getItem('activeUser');
    activeUser = JSON.parse(activeUser);

    let taskTitle = document.getElementById("taskTitle").value;
    let taskDesc = document.getElementById("taskDesc").value;

    if(taskTitle === "" && taskDesc === ""){
        alert("Can't add empty task")
    }else {

        let newTask = {
            title: taskTitle,
            description: taskDesc, 
        }
        for(i=0;i<userList.length;i++){
            if(activeUser.userID === userList[i].userID){
                userList[i].taskList.push(newTask)
                activeUser.taskList.push(newTask)
            }
        }
        localStorage.setItem('userList', JSON.stringify(userList));
        localStorage.setItem('activeUser', JSON.stringify(activeUser));
        location.reload();
    }
}