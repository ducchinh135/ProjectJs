import { BaseComponent } from "../BaseComponent.js";

class Login extends BaseComponent {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ["id"];
    }

    render() {
        const template = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link rel="stylesheet" href="../css/styles_home.css">
        <link rel="stylesheet" href="../css/auth.css">
        
        <div class="main__wrap">
        <main>
            <div class="container">
                <div class="block block__auth">
                    <div class="row">
                        <div class="col-lg-6 mx-auto">
                            <div class="auth">
                                <div class="auth__title text-center">
                                    Creat a new account
                                </div>
                                <div class="auth__form">
                                    <form id="form-sign-up" novalidate>
                                        <div class="mb-3">
                                            <label for="email" class="form-label">Email</label>
                                            <input type="email" class="form-control" id="email"
                                                placeholder="Your email">
                                            <div class="invalid-feedback"></div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="username" class="form-label">User name</label>
                                            <input type="text" class="form-control" id="username"
                                                placeholder="Your user name">
                                            <div class="invalid-feedback"></div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="password" class="form-label">Password</label>
                                            <input type="password" class="form-control" id="password"
                                                placeholder="Enter your password">
                                            <div class="invalid-feedback"></div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="repassword" class="form-label">Re password</label>
                                            <input type="password" class="form-control"
                                                placeholder="Re enter your password" id="repassword">
                                            <div class="invalid-feedback"></div>
                                        </div>

                                        <div class="mb-3">
                                            <button class="btn auth__btn auth__login">Sign Up</button>
                                        </div>
                                        <p class="auth__text">Have an account yet? <a href="./login.html">Login</a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        `;
        this._shadowRoot.innerHTML = template;
    }

    get id() {
        return this.getAttribute("id");
    }
}

window.customElements.define('custom-signup', Login);