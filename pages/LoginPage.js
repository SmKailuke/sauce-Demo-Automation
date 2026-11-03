class LoginPage{
    constructor(page){
        this.page = page;
        this.BASE_URL = process.env.BASE_URL;

        //locators for the login page elements
        this.UsernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });

    }

    async navigate(){
        await this.page.goto(this.BASE_URL);
    }

    async login(username,password){
        await this.UsernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}

module.exports = { LoginPage };