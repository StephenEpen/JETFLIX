// menu akftif

const navbar_nav = document.querySelector('.navbar-nav');
document.querySelector('#menu').onclick =()=>{
    navbar_nav.classList.toggle('active');
}

// tutup sidebar

const menu = document.querySelector('#menu');

document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbar_nav.contains(e.target)){
        navbar_nav.classList.remove('active');
    }
})


// validation form

const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const date = document.getElementById('date');
const gender = document.getElementById('gender');
const agree = document.getElementById('tnc');

form.addEventListener('submit', e =>{
    e.preventDefault();
    validateinput();
});



const errorinput = (element, message) =>{
    const inputcontrol = element.parentElement;
    const errordisplay = inputcontrol.querySelector('.error');

    errordisplay.innerText = message;
    inputcontrol.classList.add('error');
    inputcontrol.classList.remove('success');
};

const successinput = (element, message) =>{
    const inputcontrol = element.parentElement;
    const errordisplay = inputcontrol.querySelector('.error');

    errordisplay.innerText = '';
    inputcontrol.classList.add('success');
    inputcontrol.classList.remove('error');
};

const validateinput = () =>{
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();
    const dateValue = date.value.trim();
    const genderValue = gender.value.trim();

    if(usernameValue === '')
    {
        errorinput(username, 'Masukkan nama');
    }
    else if(usernameValue.length < 3)
    {
        errorinput(username, "Nama harus lebih dari atau sama dengan 3")
    }
    else
    {
        successinput(username);
    }

    if(passwordValue === '')
    {
        errorinput(password, 'Masukkan password');
    }
    else if(passwordValue.length < 8)
    {
        errorinput(password, 'Password harus lebih dari 8 angka');
    }
    else
    {
        successinput(password);
    }

    if(cpasswordValue === '')
    {
        errorinput(cpassword, 'Silahkan konfirmasi password');
    }
    else if(cpasswordValue !== passwordValue)
    {
        errorinput(cpassword, 'Password salah');
    }
    else
    {
        successinput(cpassword);
    }

    if(dateValue === '')
    {
        errorinput(date, 'Silahkan masukkan tanggal lahir anda');
    }
    else
    {
        successinput(date);
    }

    if(genderValue === 'Pria' || genderValue === 'Wanita')
    {
        successinput(gender);
    }
    else
    {
        errorinput(gender, 'Silahkan masukkan "Pria" atau "Wanita"');
    }

    if(agree.checked)
    {
        successinput(agree);
    }
    else{
        errorinput(agree, 'Kamu harus menerima semua syarat dan ketentuan yang berlaku');
    }
};
