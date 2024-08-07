// Definisikan class UsernameContainSpaceError
class UsernameContainSpaceError extends Error {
    constructor(message) {
      super(message);
      this.name = 'UsernameContainSpaceError';
    }
  }
  
  // Definisikan class UsernameTooLongError
  class UsernameTooLongError extends Error {
    constructor(message) {
      super(message);
      this.name = 'UsernameTooLongError';
    }
  }
  
  // Definisikan class InvalidEmailError
  class InvalidEmailError extends Error {
    constructor(message) {
      super(message);
      this.name = 'InvalidEmailError';
    }
  }
  
  function createUser(username, email) {
    if (username.indexOf(' ') >= 0) {
      throw new UsernameContainSpaceError('username should not contain spaces');
    }
  
    if (username.length > 20) {
      throw new UsernameTooLongError('username should be 20 characters or less');
    }
  
    if (!email.match(/[a-z0-9]+@[a-z0-9]+\.[a-z]+/i)) { // Modified regex for better validation
      throw new InvalidEmailError(`${email} is not a valid email`);
    }
  
    return { username, email };
  }
  
  const user = createUser('dicoding', 'academy@dicoding.com');
  console.log(user);
  