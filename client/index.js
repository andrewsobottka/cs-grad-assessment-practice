document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');
  
  // render Header element from another file
  createHeader(root);

  // create div for feed
  createFeed(root);

})