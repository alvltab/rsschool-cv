const accordion = document.getElementById('accordion');
const panel = document.getElementById('code');
const expand = document.getElementById('expand');
const hide = document.getElementById('hide');

accordion.addEventListener('click', () => {
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        expand.style.display = 'inline';
        hide.style.display = 'none';
    } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        expand.style.display = 'none';
        hide.style.display = 'inline';
    }
})