const args = process.argv.slice(2);
const password = generatePassword();


function generatePassword(length = 8) {
    const charset = 'abcdefghijklmnopqrstuvwxyz';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

console.log(password);