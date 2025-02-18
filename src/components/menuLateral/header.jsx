// src/components/Header.jsx
import { useEffect, useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import letreiro from '../../assets/letreiro.png';

export function Header() {
    const [top, setTop] = useState(true);

    const scrollHandler = () => {
        window.scrollY > 10 ? setTop(false) : setTop(true);
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }
    }, [top]);
    return (
        <header className={`${styles.header} ${!top ? styles.fixed : styles.background}`}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <a href="/">
                    <img src={letreiro} width={150}/>
                    </a>
                </div>

                <nav className={styles.nav}>
                    <Link to="/jogadores" className={styles.link}>
                        Jogadores
                    </Link>
                    <Link to="/times" className={styles.link}>
                        Times
                    </Link>
                    <Link to="/estadios" className={styles.link}>
                        Estádios
                    </Link>
                </nav>

                {/* Menu do usuário */}
                <div className={styles.userMenu}>
                    <a href="/perfil" className={styles.link}>
                        <AccountCircleRoundedIcon sx={{ fontSize: '2.5rem' }} />
                    </a>
                </div>
            </div>
        </header>
    );
};