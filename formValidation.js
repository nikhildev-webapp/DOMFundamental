const ValidateForm = () => {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let errMsg = document.getElementById('errorMsg');
    
    if (username === "" && password === '') {
        alert('Fill the form'); 
    } else if (username !== 'nikhilkholiya') {
        let span = document.createElement('span');
        span.textContent = 'UserName and Password Not Matched try again'
        span.style.color='red'
        errMsg.appendChild(span);
    } else if(password!=='1234567890') {
        let span = document.createElement('span');
        span.textContent = 'password not matched';
        span.style.color = 'red';
        errMsg.appendChild(span)
    } else {
        alert('Login successfully')
    }
    
    
}