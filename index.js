const bcrypt = require('bcrypt');

// const hashPassword = async (pw) => {
//     const salt = await bcrypt.genSalt(12);
//     console.log(salt);
//     const hash = await bcrypt.hash(pw, salt);
//     console.log(hash);
// };



const hashPassword = async (pw) => {
    // const salt = await bcrypt.genSalt(12);
    // console.log(salt);
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
};


const login = async (pw, hashedPw) => {
    const res = await bcrypt.compare(pw, hashedPw);
    if (res) {
        console.log("Login Successful");
    }
    else {
        console.log("Try again");
    }
};

hashPassword('nurbek');
login("nurbekk", 'bcrypted code from hashPwassword');
