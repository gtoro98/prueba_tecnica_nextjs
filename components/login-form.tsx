import styles from '../styles/login_form.module.css'
import img from '../public/image.jpg'
import simbolo from '../public/simbolo.png'

export default function LoginForm({body, globalcss}) {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.formContainer}>
                <form  className={styles.loginForm}>
                    <div className={styles.formContents}>
                        <div>
                            <span className={styles.title}>Entrar a tu cuenta</span>
                        </div>
                        <div>
                            <label className={styles.labels} htmlFor="phoneNumber">Numero Telefonico</label>
                            <br></br>
                            <span>
                                <i class="fa fa-phone icon"></i>
                                <input
                                className={styles.inputs}
                                type="tel"
                                placeholder="+52 4242730926"
                                name="phoneNumber"
                                required
                                //onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </span>
                            
                        </div>
                        
                        <br></br>
                        <div>
                            <label className={styles.labels} htmlFor="password">Contrasena</label>
                            <br></br>
                            <i class="fa fa-lock icon"></i>
                            <input
                            className={styles.inputs}
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                            //onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        
                        <br></br>
                        <span className={styles.message1} >¿Olvidaste tu contraseña?
                            <a>Haz click aqui</a>
                        </span>
                        <br></br>
                        <button className={styles.button} type="submit">Entrar</button>
                        <span className={styles.message2} >¿No tienes cuenta?
                            <a>Registrate aqui</a>
                        </span>
                    </div>
                    
                </form>
            </div>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={img.src} alt="Image" />
                <img className={styles.simbolo} src={simbolo.src} alt="Image" />
            </div>

        </div>
    )
}