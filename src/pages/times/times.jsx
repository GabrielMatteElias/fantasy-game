import styles from './times.module.css';

import { Link } from 'react-router-dom';

export default function Times() {

    const times = sessionStorage.getItem('times') ? JSON.parse(sessionStorage.getItem('times')) : [];

    return (
        <div className={styles.conatainerCards}>
            {times.map((time, index) => (
                <div key={index}
                    sx={{
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                            transform: 'scale(1.05)',
                        },
                    }}
                >
                    <Link to={`/times/${time.id.toLocaleLowerCase()}`}>
                        <img
                            src={time.brasao}
                            alt={time.nome}
                            width={245}
                            height='auto'
                            style={{ cursor: 'pointer' }}
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
}