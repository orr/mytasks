function createTask(task) {

    let template = '<div class="category #bgcolor#"><span class="material-icons">#icon#</span></div><div class="title">'+
    '<h1>#title#</h1><p class="#bgcolor#">#category#</p></div><p class="description">#desc#</p>'+
    '<p class="members">#members# Team Members</p><div class="members-img">#images#</div>'+
    '<div class="options" id="point-#id#"><div class="point"></div><div class="point"></div><div class="point"></div></div>'+
    '<div id="menu-parent-#id#" class="menu-parent closed">  </div>'+
    '<div id="options-menu-#id#" class="options-menu closed">'+
    '<p id="remove-#id#"><span class="material-symbols-outlined">delete</span>Remove</p>'+
    '<p><span class="material-symbols-outlined">edit</span>Edit</p>'+
    '</div>';

    template = template.replace('#icon#', task.icon).replace('#title#', task.title).replace('#category#', task.category).replace('#desc#', task.desc);;

    template = template.replace('#members#', task.members.length).replaceAll('#bgcolor#',task.bgcolor).replaceAll('#id#',task.id)

    let imgs ="";
    task.members.forEach(x => {
        imgs+= '<img src='+x+' alt="">';
    })

    template = template.replace('#images#', imgs);

    let div = document.createElement("div");
    div.setAttribute("class","task");
    div.setAttribute("id", 'task-'+task.id);
    div.innerHTML = template;


    let container = document.querySelector(".tasks");
    container.appendChild(div);

    let parent = document.querySelector('#menu-parent-'+task.id);


    const point = document.querySelector("#point-"+task.id);
    point.addEventListener('click', () => {
        document.querySelector('#options-menu-'+task.id).classList.toggle('closed');
        parent.classList.toggle('closed');
    });
    
    let menu = document.querySelector('#options-menu-'+task.id);
    menu.addEventListener('mouseout', () =>{
        menu.classList.toggle('closed');
        parent.classList.toggle('closed');
    })

    let remove = document.querySelector('#remove-'+task.id);
        remove.addEventListener('click', () =>{
        document.querySelector("#task-"+task.id).remove();
    })

    parent.addEventListener('click', () =>{
        parent.classList.add('closed');
        menu.classList.add("closed");
    })
}

let tasks = [
    {"id":1,"icon":"auto_stories", "bgcolor":"orange", "title":"Do my home work", "category":"Education","desc":"Do all the home work by noon","members":['https://source.unsplash.com/320x180/?profile','https://source.unsplash.com/320x180/?avagar','https://source.unsplash.com/320x180/?alice']},
    {"id":2,"icon":"medication", "bgcolor":"purple", "title":"Run 3 miles", "category":"Physical","desc":"Run 3 miles every day","members":['https://source.unsplash.com/320x180/?face','https://source.unsplash.com/320x180/?woman','https://source.unsplash.com/320x180/?mike']},
    {"id":3,"icon":"emoji_emotions", "bgcolor":"green", "title":"Run 3 miles", "category":"Emotional","desc":"Run 3 miles every day","members":['https://source.unsplash.com/320x180/?worker','https://source.unsplash.com/320x180/?heart']},
    {"id":4,"icon":"question_answer", "bgcolor":"yellow", "title":"Run 3 miles", "category":"Social","desc":"Run 3 miles every day","members":['https://source.unsplash.com/320x180/?cartoon','https://source.unsplash.com/320x180/?emily','https://source.unsplash.com/320x180/?will']},
]

tasks.forEach(createTask);

let parent = document.querySelector('.menu-parent');
const point = document.querySelector("#point-0");
point.addEventListener('click', () => {
    document.querySelector('#options-menu-0').classList.toggle('closed');
    parent.classList.toggle('closed');
});



let menu = document.querySelector('#options-menu-0');
menu.addEventListener('mouseout', () =>{
    menu.classList.toggle('closed');
    parent.classList.toggle('closed');
})

let remove = document.querySelector('#remove-0');
remove.addEventListener('click', () =>{
    document.querySelector("#task-0").remove();
})

parent.addEventListener('click', () =>{
    parent.classList.add('closed');
    menu.classList.add("closed");
})