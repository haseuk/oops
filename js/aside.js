window.onload = function() {
  let listItems = document.querySelectorAll('.menu-list a');
  let itemIndex = [];
  Array.prototype.forEach.call(listItems, function(e,idx) {
    itemIndex.push(e);
    e.addEventListener('click', function() {
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove('active');
      }
      e.classList.add('active');
    })
  });
  let link = location.pathname;
  let pageNum = link.replace(/[^0-9]/g, "");
  itemIndex[pageNum - 2].parentNode.classList.add('active')
}
