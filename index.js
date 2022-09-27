// Variable setup:
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]; 

const generate_passwords_btn = document.getElementById("generate-passwords-btn");
const user_input = document.getElementById("user-input");
const password_btn_one = document.getElementById("password-btn-one");
const password_btn_two = document.getElementById("password-btn-two");
const message_el = document.getElementById("message-el");
const copy_btns = document.getElementsByClassName("copy-btns");

// Setting base value & desactivating copy buttons:
user_input.value = 13; 
toggle_copy_btns();

// Generate passwords button:
generate_passwords_btn.addEventListener("click", function() { 
    if (user_input.value > 7 && user_input.value < 19) {

        // Resetting both passwords:
        password_btn_one.textContent = undefined; 
        password_btn_two.textContent = undefined;

        // Editing message & activating copy buttons:
        message_el.innerHTML = "Click a password to copy it to your clipboard!";
        toggle_copy_btns();

        // Generating 2 random passwords & editing html through .textContent:
        for (let i = 0; i < user_input.value; i++) {
            password_btn_one.textContent += characters[Math.floor(Math.random() * characters.length)];
            password_btn_two.textContent += characters[Math.floor(Math.random() * characters.length)];
        }; 

    } else { // if user_input.value isn't within 8-18 => resetting to base value & message:
        message_el.innerHTML = `
            Type the number of characters you want<br />
            your password to have (8 to 18)<br />
            <span class="bold text-green">Baseline : 13</span>
        `;
        user_input.value = 13;
    };
});

// Copy btns on/off toggler:
function toggle_copy_btns() { 
    if (password_btn_one.disabled === true || message_el.innerHTML === "Click a password to copy it to your clipboard!") {
        password_btn_one.disabled = false;
        password_btn_two.disabled = false;
    } else { // Called on page load only:
        password_btn_one.disabled = true;
        password_btn_two.disabled = true;
    }
};

// Adding an onclick event for each button clicked:
for (let i = 0; i < copy_btns.length; i++) {
    copy_btns[i].addEventListener("click", function () {
        // Sending the clicked button id to copy_to_clipboard function:
        copy_to_clipboard(this.id);
    });
};

function copy_to_clipboard(copy_btn_id) {
    // Getting the correct button id
    let copy_btn = document.getElementById(copy_btn_id);
    // Copying it to clipboard
    navigator.clipboard.writeText(copy_btn.textContent);
    alert("Copied the password: " + copy_btn.textContent);
};
