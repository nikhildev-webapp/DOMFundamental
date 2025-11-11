const ValidateForm = () => {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let errMsg = document.getElementById('errorMsg');
    
    if (username === "" && password === '') {
        alert('Fill the form'); 
    } else if (username !== 'nikhilkholiya' && password !== 'helloworld') {
        let span = document.createElement('span');
        span.style.color = 'red';
        span.textContent = 'UserName and Password Not Matched try again'
        errMsg.appendChild(p);
    } else {
        alert('Login successfully')
    }
    
    
}