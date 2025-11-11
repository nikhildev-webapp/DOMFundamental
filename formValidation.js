const ValidateForm = () => {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let errMsg = document.getElementById('errorMsg');
    
    if (username === "" && password === '') {
        alert('Fill the form'); 
    } else if (username !== 'nikhilkholiya') {
        alert('username is not matched')
    } else if(password!=='1234567890') {
        alert('paswword not matched')
    }
    else {
        alert('Login successfully')
    }
}

