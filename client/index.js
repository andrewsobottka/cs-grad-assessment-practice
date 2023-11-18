document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');

  // render Header element from another file
  createHeader(root);

  // create div for feed
  createFeed(root);

})

function createHeader(el) {
  // add Header as a child to passed in element
  const header = document.createElement('div');
  header.setAttribute('id', 'header');

  const title = document.createElement('h1');
  title.innerHTML = 'Do Not Do List'
  header.appendChild(title)

  el.appendChild(header);
}

function createFeed(el) {
  const feed = document.createElement('div');
  feed.setAttribute('id', 'feed');
  // feed.innerHTML = ('<p> Placeholder for Feed </p>');
  root.appendChild(feed);
  
  let itemsArray;
  fetch('/allItems')
  .then(response => response.json())
  .then(data => {
    itemsArray = data;
    // loop to create tasks for all items returned from query
    for (let i in itemsArray) {
      createTask(feed, itemsArray[i]);
    }
  })
}

function createTask(el, content) {
  // add Task as a child to passed in element
  const task = document.createElement('div');
  task.setAttribute('class', 'task');

    const taskName = document.createElement('p');
    taskName.setAttribute('class', 'taskName')
    taskName.innerText = content.taskName;
    
    const date = new Date(Date.parse(content.date)).toLocaleDateString()
    const dueDate = document.createElement('p');
    dueDate.setAttribute('class', 'dueDate')
    dueDate.innerText = 'Due Date: ' + date;
    
    const status = document.createElement('p');
    status.setAttribute('class', 'status')
    status.innerText = 'Complete: ' + content.status;

  task.appendChild(taskName);
  task.appendChild(dueDate);
  task.appendChild(status);

  el.appendChild(task);
}