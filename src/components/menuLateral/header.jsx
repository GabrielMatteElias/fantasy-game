// src/components/Header.jsx
import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <a href="/">LOGO</a>
                </div>

                <nav className={styles.nav}>
                    <Link href="/jogadores" className={styles.link}>
                        Jogadores
                    </Link>
                    <Link href="/times" className={styles.link}>
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