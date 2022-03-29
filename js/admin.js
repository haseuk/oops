let filterBtn = document.querySelector('.filter-btn');
let filterWrap = document.querySelector('.filter-wrap');
if(filterBtn)filterBtn.addEventListener('click', function() {
  if(filterWrap.classList.contains('on')) {
    filterWrap.classList.remove('on');
  } else {
    filterWrap.classList.add('on');
  }
});

let dels = document.querySelectorAll('.table .del');
let popup = document.querySelector('.popup');

let delList;
Array.prototype.forEach.call(dels, function(e) {
  e.addEventListener('click', function() {
    popupOpen();
    delList = e.parentNode.parentNode;
  })
});
let popClose = document.querySelectorAll('.popup .btns a');
Array.prototype.forEach.call(popClose, function(e) {
  e.addEventListener('click', function() {
    popupClose();
  })
});
function popupOpen() {
  popup.classList.add('on');
}
function popupClose() {
  popup.classList.remove('on');
}

function listDel() {
  delList.remove();
}

let admin2 = document.querySelector('.admin2');
let viewBtn = document.querySelectorAll('.view');
let additionBtn = document.querySelector('.addition-btn');
Array.prototype.forEach.call(viewBtn, function(e) {
  e.addEventListener('click', function() {
    admin10Detail();
  })
});
if(additionBtn)additionBtn.addEventListener('click', function() {
  admin10Detail();
})
function admin10Detail() {
  if(admin2.classList.contains('detail')) {
    admin2.classList.remove('detail');
  } else {
    admin2.classList.add('detail');
  }
}

let topDel = document.querySelector('.top-cell .del');
if(topDel)topDel.addEventListener('click',function() {
  prjClose();
  popupOpen();
});
let edit = document.querySelector('.top-cell .edit');
if(edit)edit.addEventListener('click', function() {
  admin2.classList.add('edit-sec');
});
let answerBtn = document.querySelector('.answer-btn');
let answerTxt = document.querySelector('.answer-txt');
let textareaTxt = document.querySelector('textarea');
if(answerBtn)answerBtn.addEventListener('click', function() {
  let txt = textareaTxt.value;
  answerTxt.innerHTML = '';
  answerTxt.innerHTML = txt;
  admin2.classList.remove('edit-sec');
})

$(function() {
  $("#file1").on('change', function(){
    readURL1(this);
  });
});
function readURL1(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#view-img1').attr('src', e.target.result);
      $('#view-img1').css('display','inline-block');
    }
    reader.readAsDataURL(input.files[0]);
  }
}
$(function() {
  $("#file2").on('change', function(){
    readURL2(this);
  });
});
function readURL2(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#view-img2').attr('src', e.target.result);
      $('#view-img2').css('display','inline-block');
    }
    reader.readAsDataURL(input.files[0]);
  }
}
//
// let fileInput = document.querySelectorAll('.file-input');
// Array.prototype.forEach.call(fileInput, function(e,idx) {
//   $(function() {
//     $(".file-input"+idx).on('change', function(){
//       readURL(this,idx);
//     });
//   });
// });
// function readURL(input,idx) {
//   if (input.files && input.files[0]) {
//     var reader = new FileReader();
//     reader.onload = function (e) {
//       $('.insert-img'+idx).attr('src', e.target.result);
//       $('.insert-img'+idx).css('display','inline-block');
//     }
//     reader.readAsDataURL(input.files[0]);
//   }
// }

let imgDelBtn = document.querySelectorAll('.l-del');
Array.prototype.forEach.call(imgDelBtn, function(e) {
  e.addEventListener('click', function() {
    let img = e.parentNode.parentNode.firstElementChild;
    img.style.display = 'none';
  })
});

let saveBtn = document.querySelector('.table-edit .save');
let tableEdit = document.querySelector('.table-edit');
if(saveBtn)saveBtn.addEventListener('click', function() {
  // inputValueGet();
  prjClose();
  admin2View();
});
// let inputValues = [];
// function inputValueGet() {
//   let inputAll = tableEdit.querySelectorAll('input[type=text]');
//   for (let i = 0; i < inputAll.length; i++) {
//     inputValues.push(inputAll[i].value);
//   }
//   valueInsert();
// }
// let mail = document.querySelector('td.mail');
// let nm = document.querySelector('td.nm');
// let tel = document.querySelector('td.tel');
// let corpNum = document.querySelector('td.corp-num');
// let mail2 = document.querySelector('.mail2');
// let tel2 = document.querySelector('.tel2');
// let kakao = document.querySelector('.kakao-id');
// function valueInsert() {
//   mail.innerHTML = inputValues[0];
//   nm.innerHTML = inputValues[1];
//   tel.innerHTML = inputValues[2];
//   corpNum.innerHTML = inputValues[3];
//   mail2.innerHTML = inputValues[4];
//   tel2.innerHTML = inputValues[5];
//   kakao.innerHTML = inputValues[6];
//   admin2.classList.remove('edit-sec');
// }

let itemDelBtn = document.querySelector('.popup .del');
if(itemDelBtn)itemDelBtn.addEventListener('click', function() {
  popupClose();
  admin2View();
  listDel();
});

let prjBtn = document.querySelector('.top-cell .prj');
let prjTable = document.querySelector('.prj-table');
let resultTable = document.querySelector('.table-result');
let editTable = document.querySelector('.table-edit');
if(prjBtn)prjBtn.addEventListener('click', function() {
  admin2.classList.add('prj-open');
  prjOpen();
});

function prjOpen() {
  resultTable.classList.add('open');
  editTable.classList.add('open');
}

function prjClose() {
  resultTable.classList.remove('open');
  editTable.classList.remove('open');
}

let backBtn = document.querySelector('.back-btn');
if(backBtn)backBtn.addEventListener('click', function() {
  admin2View();
});

function admin2View() {
  admin2.classList.remove('detail','edit-sec');
}

let viewSwitchBtn = document.querySelectorAll('.view-switch');
Array.prototype.forEach.call(viewSwitchBtn, function(e) {
  e.addEventListener('click', function() {
    if(e.parentNode.parentNode.classList.contains('open')) {
      e.parentNode.parentNode.classList.remove('open')
    } else {
      e.parentNode.parentNode.classList.add('open')
    }
  })
});
function selectAll(v) {
  let chkboxs = document.querySelectorAll('.all-table input');
  chkboxs.forEach(function(chkd) {
    chkd.checked = v.checked;
  })
}
let deleteBtn = document.querySelector('.del-btn');
if(deleteBtn)deleteBtn.addEventListener('click', function() {
  popupOpen();
});


// 3.28 추가 -->
let viewSwitchBtn1 = document.querySelectorAll('.view-switch1');
Array.prototype.forEach.call(viewSwitchBtn1, function(e) {
  e.addEventListener('click', function() {
    if(e.parentNode.parentNode.classList.contains('cell-on')) {
      e.parentNode.parentNode.classList.remove('cell-on')
      e.parentNode.parentNode.classList.remove('table-on')
    } else {
      e.parentNode.parentNode.classList.add('cell-on')
    }
  })
});
let editBtn = document.querySelectorAll('.f-edit .edit-btn');
Array.prototype.forEach.call(editBtn, function(e) {
  e.addEventListener('click', function() {
    if(e.parentNode.parentNode.parentNode.classList.contains('table-on')) {
      e.parentNode.parentNode.parentNode.classList.remove('table-on')
    } else {
      e.parentNode.parentNode.parentNode.classList.add('table-on')
    }
  });
});
let fSaveBtn = document.querySelectorAll('.f-edit .save');
Array.prototype.forEach.call(fSaveBtn, function(e) {
  e.addEventListener('click', function() {
    if(e.parentNode.parentNode.classList.contains('save-on')) {
      e.parentNode.parentNode.classList.remove('save-on')
    } else {
      e.parentNode.parentNode.classList.add('save-on')
    }
  })
})
// 3.28 추가 끝-->