function createTask(task) {

    let template = '<div class="category"><span class="material-icons">#icon#</span></div><div class="title">'+
    '<h1>#title#</h1><p class="task-category">#category#</p></div><p class="description">#desc#</p>'+
    '<p class="members">#members# Team Members</p><div class="members-img">#images#</div>';

    template = template.replace('#icon#', task.icon).replace('#title#', task.title).replace('#category#', task.category).replace('#desc#', task.desc);;

    template = template.replace('#members#', task.members.length);

    let imgs ="";
    task.members.forEach(x => {
        imgs+= '<img src='+x+' alt="">';
    })

    template = template.replace('#images#', imgs);

    let div = document.createElement("div");
    div.setAttribute("class","task");
    div.innerHTML = template;

    let container = document.querySelector(".tasks");
    container.appendChild(div);
}

let tasks = [
    {"icon":"auto_stories", "bg-color":"#FF9AA2", "title":"Do my home work", "category":"Education","desc":"Do all the home work by noon","members":['img/avatar.jpg','img/avatar.jpg','img/avatar.jpg']},
    {"icon":"medication", "bg-color":"#FCFDFD", "title":"Run 3 miles", "category":"Physical","desc":"Run 3 miles every day","members":['img/avatar.jpg','img/avatar.jpg','img/avatar.jpg']},
]

tasks.forEach(createTask);




