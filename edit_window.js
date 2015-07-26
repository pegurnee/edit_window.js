function egEdit(elem) {
  var editWindow,
      editConfirm,
      editText;

  editWindow = document.createElement('div');

  editWindow.style.position = 'fixed';
  editWindow.style.width = '600px';
  editWindow.style.height = '400px';
  editWindow.style.top = '100px';
  editWindow.style.left = 'calc(50% - 300px)';
  editWindow.style.backgroundColor = 'blue';

  editConfirm = document.createElement('input');
  editConfirm.style.position = 'absolute';
  editConfirm.style.bottom = '5px';
  editConfirm.style.right = '10px';
  editConfirm.type = 'button';
  editConfirm.value = 'Finish Editing';
  editConfirm.onclick = function() {
    alert(editText.value);
    document.body.removeChild(editWindow);
  }

  editWindow.appendChild(editConfirm);

  editText = document.createElement('textarea');
  editText.style.marginLeft = '10px';
  editText.style.marginTop = '10px';
  editText.style.width = 'calc(100% - 25px)';
  editText.style.height = 'calc(100% - 45px)';
  editText.style.backgroundColor = 'green';

  editText.contentEditable = true;

  editWindow.appendChild(editText);

  document.body.appendChild(editWindow);
}