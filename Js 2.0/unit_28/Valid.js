class Valid {
  //task 8
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.isValid = false;
  }
  validate() {
    //task 9
    this.isValid = false;
    if (this.password.length > 6) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
    return this.isValid;
  }
}
