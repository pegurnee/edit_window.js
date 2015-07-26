function egEdit(elem) {
  var editWindow,
      editConfirm,
      editText;

  elem.disabled = true;

  editWindow = document.createElement('div');

  editWindow.id = 'egEditWindow';
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
    elem.value = editText.value;
    elem.disabled = false;
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
  editText.style.fontSize = '18px';
  editText.value = elem.value;

  editWindow.appendChild(editText);

  document.body.appendChild(editWindow);
}
