
function createFeed(el) {
  const feed = document.createElement('div');
  feed.setAttribute('id', 'feed');
  // feed.innerHTML = ('<p> Placeholder for Feed </p>');
  root.appendChild(feed);
  
  // [AFS] add fetch request to get tasks from Database
  fetch('http://localhost:3000/', {
      // headers:,
      method: 'GET',
      // mode: 'cors',
      // body:
    })
    .then((resp) => {
      console.log(resp)
      clearFunc();
    })

  // Then update the loop below to create tasks for all items returned from query
  // Create 10 task elements
  for (let i = 0; i < 10; i++) {
    content = {
      name: ("Test Name: " + (i+1)),
      date: "2023-11-17",
      status: "false"
    }
    createTask(feed, content);  
  }
}

function createTask(el, content) {
  // add Task as a child to passed in element
  const task = document.createElement('div');
  task.setAttribute('class', 'task');

    const taskName = document.createElement('p');
    taskName.setAttribute('class', 'taskName')
    taskName.innerText = content.name;
    
    const dueDate = document.createElement('p');
    dueDate.setAttribute('class', 'dueDate')
    dueDate.innerText = content.date;
    
    const status = document.createElement('p');
    status.setAttribute('class', 'status')
    status.innerText = content.status;

  task.appendChild(taskName);
  task.appendChild(dueDate);
  task.appendChild(status);

  el.appendChild(task);
}