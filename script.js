window.addEventListener('load',()=>{
    const form = document.querySelector("#new-form");
    const input = document.querySelector("#input");
    const Li = document.querySelector("#tasks");
    const List_el = document.querySelector("#complete")

    form.addEventListener('submit',(e) =>{
        e.preventDefault();

        const task = input.value;

        if(!task){
            alert("Enter task");
            return;
        };

        const task_el= document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        task_content_el.innerText= task;

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("div");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly","readonly");

        task_content_el.appendChild(task_input_el);
        
        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_done_el = document.createElement("button");
        task_done_el.classList.add("done");
        task_done_el.innerHTML = "DONE";

        task_actions_el.appendChild(task_done_el);

        task_el.appendChild(task_actions_el);
        Li.appendChild(task_el);

        input.value= "";

        const task_complete_el = document.createElement("div");
        task_complete_el.classList.add("complete");

        task_done_el.addEventListener('click',() =>{
            // if(confirm("Are you sure?")){
            //     Li.removeChild(task_el);
            // }
            // Li.removeChild(task_el);
            task_complete_el.innerHTML = task;
            List_el.appendChild(task_complete_el);
            Li.removeChild(task_el);
        })
    });
})