let items = document.querySelectorAll('.side-bar-item');
let previousItem = null;
items.forEach(item => {
    item.addEventListener('mouseover', function() {
        if (previousItem !== null) {
            previousItem.classList.remove('before');
        }

        this.classList.add('before');

        previousItem = this;
    });
});