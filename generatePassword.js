function generatePassword(passwordlength){
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let result = '';
        for (let i=0; i<passwordlength; i++) {
           let char = Math.floor(Math.random()* chars.length + 1);
                result += chars.charAt(char)
            }
              
            return result;
        }
