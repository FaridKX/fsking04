const loader = document.getElementById('loader');
const ctloader = document.getElementById('container-for-element');

document.getElementById('first-header-button').addEventListener('click', function() {
loader.style.display = 'block';
ctloader.style.display = 'flex';

document.getElementById('content-of-this-web-site').style.display = 'none';
        setTimeout(function() {
            localStorage.setItem('navigated', 'true');
            window.location.href = 'zayavka/register.html';
        }, 500);
    });
    
    if
    (localStorage.getItem('navigated')) {
        loader.style.display = 'none';
        localStorage.removeItem('navigated');
    }
