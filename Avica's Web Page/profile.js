let _delete = document.querySelector('.before-about');
let message_box = document.querySelector('.delete')
let delete_btn = document.getElementById('delete')
let cancel_btn = document.getElementById('cancel')

let buttons = [_delete, delete_btn, cancel_btn];
const gray = document.getElementById('gray')
buttons.forEach(function (button) {
    button.addEventListener('click', ()=> {
        if (button == _delete) {
            message_box.style.display = "block";
        }
        else if (button == delete_btn) {
            alert('Are you sure to delete your account. You will lose all of your data.');
        }
        else if (button == cancel_btn) {
            message_box.style.display = 'none';
        }
    })
})