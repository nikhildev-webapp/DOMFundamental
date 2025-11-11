const { createElement } = require("react");

const ValidateForm = () => {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let errMsg = document.getElementById('errorMsg');
    
    if (username === "" && password === '') {
        alert('Fill the form'); 
    } else if (username !== 'nikhilkholiya' && password === 'helloworld') {
        let alert = createElement(p);
        alert.textContent = 'userName and password not matched';
        alert.style.color = 'red';
        errMsg.appendChild(alert);
    } else {
        alert('Login successfully')
    }
    
    
}