
addBtn = document.querySelector('.addBtn');

addBtn.onclick = addTask;

function getPreviousTasks(){

    const checkBoxes = document.querySelectorAll('.tasks .task input');
    const checkBoxArray = Array.from(checkBoxes);
    const tasks = checkBoxArray.map(function (checkbox){
        let check = ''
        let strike= ''
        if(checkbox.checked){
            check = 'checked'
            strike = 'class="strikethrough"'
        }
        return `
        <div class="task">
        <input ${check} type="checkbox" name="checkbox" id="">
        <span ${strike} class="task-text">${checkbox.nextElementSibling.textContent}</span>
        </div>`
    }).join('');

    return tasks;

}

function addListenerToCheckBoxes(){

    const checkBoxes = document.querySelectorAll('.tasks .task input');

    checkBoxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        let textElement = this.nextElementSibling; 
        if (this.checked) {
          textElement.classList.add('strikethrough'); 
        } else {
          textElement.classList.remove('strikethrough');
        }
      });
    });
}

function addTask(){

    const taskText = document.querySelector('.add-task-field').value;

    let taskHtml ='';

    if(taskText !=''){
        taskHtml =`
        <div class="task">
        <input type="checkbox" name="checkbox" id="">
        <span class="task-text">${taskText}</span>
        </div>`;
    }

    document.querySelector('.tasks').innerHTML = getPreviousTasks() + taskHtml;
    document.querySelector('.add-task-field').value = '';
    addListenerToCheckBoxes();

}

