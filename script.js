const nums = "1234567890";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialChar = "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/"
const rangeInput = document.getElementById("range");
const showPassLength = document.getElementById("length");
const copyBtn = document.getElementById('copy');
let length = rangeInput.value;

function createPassword() {
    copyBtn.innerHTML = `<i class='bx bxs-copy' ></i>`;
    copyBtn.style.backgroundColor = "";
    let passStr = '';
    
    passStr += nums.charAt(Math.floor(Math.random() * nums.length));
    passStr += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
    passStr += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
    passStr += specialChar.charAt(Math.floor(Math.random() * specialChar.length));

   
    while (length > passStr.length) {
        const randomCharSet = nums + lowerCase + upperCase + specialChar;
        passStr += randomCharSet.charAt(Math.floor(Math.random() * randomCharSet.length));
    }

    
    passStr = passStr.split('').sort(() => Math.random() - 0.5).join('');

   
    const pass = document.getElementById('password');
    pass.value = passStr;
}

function copyPassword() {
    const pass = document.getElementById('password');
    pass.select();
    document.execCommand("copy");
    copyBtn.innerHTML = `<i class='bx bxs-check-circle'></i>`;
    copyBtn.style.backgroundColor = "#FFB1B1";
}

rangeInput.addEventListener('input', () => {
    length = rangeInput.value;
    showPassLength.innerText = length;
    console.log(length);
});
