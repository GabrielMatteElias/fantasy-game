import styles from './timesDetalhe.module.css';
import { Card, CardContent, CardActions, Button, Box } from '@mui/material';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link, useParams } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importação do estilo base


export default function TimesDetalhes() {

    const { time } = useParams();

    const timeSelecionado = sessionStorage.getItem('times') ?
        JSON.parse(sessionStorage.getItem('times')).find(t => t.id === time)
        : null;
    console.log(timeSelecionado);

    return (
        <div className={styles.container}>
            <section className={styles.teamInfo}>
                <div className={styles.teamPhoto}>
                    <img src={timeSelecionado.brasao} alt="Foto do Time" />
                </div>
                <div className={styles.teamDetails}>
                    <h2>{timeSelecionado.nome}</h2>
                    <p><strong>Fundado em:</strong> 1990</p>
                    <p>
                        <strong>Descrição:</strong> Um time focado em estratégia e habilidade, conhecido por suas conquistas históricas.
                    </p>
                    <p><strong>Localização:</strong> Tóquio, Japão</p>
                    <h3>Títulos</h3>
                    <ul>
                        <li>Campeonato Nacional - 2020</li>
                        <li>Copa Internacional - 2018</li>
                    </ul>
                </div>
            </section>
            <section className={styles.stadiumSection}>
                <h2>Estádio</h2>
                <p><strong>Nome: </strong>{timeSelecionado.estadio.nome}</p>
                <p><strong>Capacidade: </strong>{timeSelecionado.estadio.capacidade}</p>
                <p><strong>Descrição: </strong>{timeSelecionado.estadio.descricaoEstadio}</p>
                <div className={styles.stadiumPhoto}>
                    <Carousel
                        thumbWidth={150}
                        className={styles.carousel} // Opcional: adiciona uma classe personalizada ao carrossel principal
                        width={900}
                    >
                        <div>
                            <img
                                src={timeSelecionado.estadio.img}
                                alt={timeSelecionado.estadio}
                                width="100%"
                                height="auto"
                            />
                        </div>
                        <div>
                            <img
                                src={timeSelecionado.estadio.internoImg}
                                alt={timeSelecionado.estadio}
                                className={styles.imagemEstadio}
                                width="100%"
                                height="auto"
                            />
                        </div>
                        <div>
                            <img
                                src={timeSelecionado.estadio.vestiarioImg}
                                alt={timeSelecionado.estadio}
                                className={styles.imagemEstadio}
                                width="100%"
                                height="auto"
                            />
                        </div>
                        <div>
                            <img
                                src={timeSelecionado.estadio.tunelImg}
                                alt={timeSelecionado.estadio}
                                className={styles.imagemEstadio}
                                width="100%"
                                height="auto"
                            />
                        </div>
                    </Carousel>
                </div>
            </section>
            {timeSelecionado.jogadores && (
                <section className={styles.playersSection}>
                    <h2>Jogadores</h2>
                    <div className={styles.playersGrid}>
                        <div className={styles.playerCard}>
                            {timeSelecionado.jogadores.map((jogador, index) => (
                                <div key={index}>
                                    <img src={jogador.imagem} alt='Atkura Sakami' />
                                    <h3>{jogador.nome}</h3>
                                    <p><strong>Posição:</strong>{jogador.posicao}</p>
                                    <p><strong>Idade:</strong>{jogador.idade}</p>
                                    <p><strong>Nacionalidade:</strong>{jogador.nacionalidade}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}