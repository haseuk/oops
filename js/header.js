window.onload = function() {
  setTimeout(function() {
    let header = document.querySelector('header');
    let menuBtn = document.querySelector('.ham');
    menuBtn.addEventListener('click', function() {
      if(header.classList.contains('open')) {
        header.classList.remove('open');
      } else {
        header.classList.add('open');
      }
    })

    let depth = document.querySelectorAll('.depth');
    Array.prototype.forEach.call(depth, function(e) {
      e.addEventListener('click', function() {
        if(e.parentNode.classList.contains('open')) {
          e.parentNode.classList.remove('open');
        } else {
          e.parentNode.classList.add('open');
        }
      })
    });

    let close = document.querySelector('.close');
    close.addEventListener('click', function() {
      header.classList.remove('open');
    });

    let userThumb = document.querySelector('.logout');
    let myPageClose = document.querySelector('.logout-btn');
    userThumb.addEventListener('click', function() {
      header.classList.add('open-my');
    });
    myPageClose.addEventListener('click', function() {
      header.classList.remove('open-my');
    });
    let logged = document.querySelector('.logged');
    let logPop = document.querySelector('.log-popup');
    let loginBtn = document.querySelector('.login-btn');
    let logPopClose = document.querySelector('.log-close');
    logged.addEventListener('click', function() {
      logPop.classList.add('on');
    });
    loginBtn.addEventListener('click', function() {
      logPop.classList.remove('on');
    });
    logPopClose.addEventListener('click', function() {
      logPop.classList.remove('on');
    });
  },100)

  let link = document.location.pathname;
  let linkNum = link.replace(/[^0-9]/g, '');
  let menuList = document.querySelectorAll('.menu-list .list')
  console.log(menuList[1], linkNum)
  if(linkNum === '1' || linkNum === '2' || linkNum === '3') {
    menuList[0].classList.add('active');
  } else if(linkNum === '4' || linkNum === '5') {
    menuList[1].classList.add('active');
  } else if(linkNum === '6' || linkNum === '7') {
    menuList[2].classList.add('active');
  } else {
    menuList[3].classList.add('active');
  }
}
