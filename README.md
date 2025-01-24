QAP1 - SD12 - Winter 2025
- Name :  Wayne Norman
- GitHub : https://github.com/WayneJN


# Password Generator

## Purpose
This Password Generator is a CLI application built with Node.js. It helps users create secure passwords based on specific criteria like length, uppercase letters, numbers, and symbols. It's a handy tool for generating strong passwords to enhance security for various accounts and applications.

## Installation
1. Clone the repository:

   git clone https://github.com/WayneJN/Password-Generator-using-CLI-Node.JS.git

2. Navigate to the project directory:

   cd Password-Generator-using-CLI-Node.JS

3. Install the necessary dependencies (if any):

   npm install


## Usage
To use the Password Generator, run the following command in your terminal:

node index.js [options]


### Options
- `--help`: Show the help message explaining how to use the application and its flags.
- `--length <num>`: Specify the length of the password (e.g., `--length 12`).
- `--uppercase`: Include uppercase letters in the password.
- `--numbers`: Include numbers in the password.
- `--symbols`: Include symbols in the password.

### Examples
1. Generate a password with the default settings (length of 8, all lowercase):

   node index.js


2. Generate a password with a length of 12 characters:

   node index.js --length 12


3. Generate a password with uppercase letters and numbers:

   node index.js --uppercase --numbers


4. Generate a password with all options enabled (uppercase letters, numbers, and symbols):

   node index.js --length 16 --uppercase --numbers --symbols


## Notes
- If no options are selected, the password generator defaults to a length of 8 characters with all lowercase letters.
- Multiple options can be used at once to customize the generated password according to your needs.

