const bcrypt = require('bcrypt')

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$U7eqt/fCz0OkePrZJ4HRN.aEOYK1rpLwcqMPzRNL0zd/w4gNG4xAi';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
