import React from "react";
import { useNavigate } from 'react-router-dom';
import { authService } from '../../service/firebase';
import styles from './login.module.css';

const Login = ({ auth }) => {
    const navigate = useNavigate();

    const handleLogin = async(e) => {
        let name = e.target.textContent;
        auth
            .login(name)
            .then(data => {
                goToMain(data.user.uid)
            })
            // .catch(err => {
            //     // 동일한 이메일을 사용하는 계정들로 연결할 때 에러 처리
            //     if (err.code === 'auth/account-exists-with-different-credential') {
            //         let pendingCred = err.credential;
            //         let email = err.email;

            //         authService.fetchSignInMethodsForEmail(email).then(methods => {
            //             let provider = getProviderForProviderId(methods[0]);
            //             auth.login(provider).then(result => {
            //                 result.user.linkWithCredential(pendingCred).then(usercred => {
            //                     console.log('usercred', usercred);
            //                     goToMain();
            //                 });
            //             });
            //         })
            //     }
            // })
        }

    const getProviderForProviderId = (method) => {
        return method.split(".")[0].replace(/^[a-z]/, char => char.toUpperCase());
    }
    
    const goToMain = (userId) => {
        navigate("/main", {
            state: {
                id: userId,
            }
        })
    }

    return (
        <div className={styles.container}>
            <img src="./images/logo.png" alt="logo" className={styles.logo}/>
            <h1 className={styles.title}>Business Card Maker</h1>
            <div className={styles.loginArea}>
                <h2>Login</h2>
                <button className={styles.loginBtn} onClick={handleLogin}>Google</button>
                <button className={styles.loginBtn} onClick={handleLogin}>Github</button>
            </div>
            <p className={styles.footer}>Code your dream</p>
        </div>
    )
};

export default Login;
