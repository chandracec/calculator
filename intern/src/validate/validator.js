
validEmail = email => /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
validMobile = mob => /^[0-9]{10}$/.test(mob.replace(/\s/g, ''));
isValidName = name => /^[A-Za-z\s]+$/.test(name.trim());
module.exports = { validEmail, validMobile ,isValidName};
