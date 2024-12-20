import styles from './estadios.module.css';
import { Card, CardContent, CardActions, Button, Typography, Dialog, DialogActions, DialogContent, DialogTitle, Box } from '@mui/material';

import atlantiks from '../../../assets/atlantiks.jpg';
import gama from '../../../assets/gama.jpg';
import outBird from '../../../assets/outBird.jpg';
import polo from '../../../assets/polo.jpg';
import redBulls from '../../../assets/redBulls.jpg';
import redDragons from '../../../assets/redDragons.jpg';
import ulbra from '../../../assets/ulbra.jpg';
import { useState } from 'react';

const estadios = [
    {
        time: "Atlantiks",
        imagem: atlantiks,
        cidade: "Hiroshima",
        estadio: "Oceano Arena",
        capacidade: 70000
    },
    {
        time: "Gama",
        imagem: gama,
        cidade: "Nagasaki",
        estadio: "Estádio Gama",
        capacidade: 20000
    },
    {
        time: "Out Bird",
        imagem: outBird,
        cidade: "Kyoto",
        estadio: "Estádio Pássaro Veloz",
        capacidade: 66000
    },
    {
        time: "Polo",
        imagem: polo,
        cidade: "Fukuoka",
        estadio: "Polo Ground",
        capacidade: 35000
    },
    {
        time: "Red Bulls",
        imagem: redBulls,
        cidade: "Sapporo",
        estadio: "Arena Touro Vermelho",
        capacidade: 25000
    },
    {
        time: "Red Dragons",
        imagem: redDragons,
        cidade: "Osaka",
        estadio: "Ninho do Dragão",
        capacidade: 45000
    },
    {
        time: "Ulbra",
        imagem: ulbra,
        cidade: "Sendai",
        estadio: "Ulbra Field",
        capacidade: 15000
    },
    {
        time: "Black Dragon",
        imagem: redDragons,
        cidade: "Tóquio",
        estadio: "Dragão Negro Arena",
        capacidade: 50000
    }
];

export default function Estadios() {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedEstadio, setSelectedEstadio] = useState(null);

    const handleVerMais = (estadio) => {
        setSelectedEstadio(estadio); // Define o estádio que será mostrado no dialog
        setOpenDialog(true); // Abre o dialog
    };

    // Função para fechar o dialog
    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedEstadio(null); // Limpa os dados do estádio
    };
    return (
        <div className={styles.conatainerCards}>

            {estadios.map((estadio, index) => (
                <Card key={index}
                    sx={{
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)', // Aumenta a sombra ao hover

                        },
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Box shadow aplicado

                    }}
                >
                    <img
                        src={estadio.imagem} // Usando a imagem do estádio, que será dinamicamente atribuída
                        alt={estadio.nome}
                        width={345}
                        height='auto'
                        className={styles.imagemEstadio}

                    />
                    <CardContent className={styles.cardContent} >
                        <Typography variant="h5">
                            {estadio.estadio}
                        </Typography>
                        <Typography variant="body2">
                            Time: {estadio.time}
                        </Typography>
                        <Typography variant="body2" >
                            Capacidade: {estadio.capacidade}
                        </Typography>
                        <Typography variant="body2" >
                            Cidade: {estadio.cidade}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button size="medium" onClick={() => handleVerMais(estadio)}>ver mais</Button>
                    </CardActions>
                </Card>
            ))}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                {selectedEstadio && (
                    <>
                        <DialogTitle sx={{ textAlign: 'center' }}>{selectedEstadio.estadio}</DialogTitle>
                        <DialogContent>
                            <img
                                src={selectedEstadio.imagem}
                                alt={selectedEstadio.estadio}
                                className={styles.imagemEstadio}
                                width="100%"
                                height="auto"
                            />
                            <Box sx={{ display: 'flex', gap: '10px', marginTop: '10px', marginBottom: '10px' }}>
                                <Typography variant="body2">Time: {selectedEstadio.time}</Typography>
                                <span
                                    style={{
                                        width: '5px',
                                        height: '5px',
                                        backgroundColor: '#000',  // Cor da bola
                                        borderRadius: '50%',
                                        marginTop: '6px'
                                    }}
                                />
                                <Typography variant="body2">Capacidade: {selectedEstadio.capacidade}</Typography>
                                <span
                                    style={{
                                        width: '5px',
                                        height: '5px',
                                        backgroundColor: '#000',  // Cor da bola
                                        borderRadius: '50%',
                                        marginTop: '6px'
                                    }}
                                />
                                <Typography variant="body2">Cidade: {selectedEstadio.cidade}</Typography>
                            </Box>
                            <Typography variant="body2">Descrição: {selectedEstadio.descricao}</Typography>
                            <Typography variant="body2">Descrição: O estádio Gama é uma obra-prima inspirada
                                pela natureza, com um design que remete à agilidade e precisão do louva-a-deus.
                                Suas cores predominantes, o verde claro e suas formas fluídas, criam uma atmosfera
                                orgânica e vibrante. A fachada do estádio é adornada com o imponente logo do louva-a-deus,
                                com suas garras elegantemente posicionadas, simbolizando a destreza e o foco do time.
                                O exterior combina elementos naturais com tecnologia moderna, enquanto o interior é
                                iluminado por suaves luzes verdes, proporcionando um ambiente dinâmico e focado.
                                O estádio não é apenas um local de jogos, mas uma verdadeira homenagem à força e à
                                agilidade da natureza.</Typography>
                        </DialogContent>
                    </>
                )}
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Fechar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}