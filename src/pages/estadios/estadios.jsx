import styles from './estadios.module.css';
import { Card, CardContent, CardActions, Button, Typography, Dialog, DialogActions, DialogContent, DialogTitle, Box } from '@mui/material';

import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import name from '../../ApI/API';


export default function Estadios() {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedTime, setSelectedTime] = useState(null);

    const times = sessionStorage.getItem('times') ? JSON.parse(sessionStorage.getItem('times')) : [];

    async function getTimes() {
        const response = await name();
        console.log(response);
    }
    
    getTimes();

    const handleVerMais = (time) => {
        setSelectedTime(time);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedTime(null);
    };
    console.log(selectedTime);

    return (
        <div className={styles.conatainerCards}>
            {times.map((time, index) => (
                <Card key={index}
                    sx={{
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
                        },
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',

                    }}
                >
                    <img
                        src={time.estadio.img}
                        alt={time.estadio.nome}
                        width={345}
                        height='auto'
                        className={styles.imagemEstadio}

                    />
                    <CardContent className={styles.cardContent} >
                        <Typography variant="h5">
                            {time.estadio.nome}
                        </Typography>
                        <Typography variant="body2">
                            Time: {time.time}
                        </Typography>
                        <Typography variant="body2" >
                            Capacidade: {time.estadio.capacidade}
                        </Typography>
                        <Typography variant="body2" >
                            Cidade: {time.cidade}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button size="medium" onClick={() => handleVerMais(time)}>ver mais</Button>
                    </CardActions>
                </Card>
            ))}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                {selectedTime && (
                    <>
                        <DialogTitle sx={{ textAlign: 'center' }}>{selectedTime.estadio.nome}</DialogTitle>
                        <DialogContent>
                            <Carousel
                                thumbWidth={90}
                                className={styles.carousel} // Opcional: adiciona uma classe personalizada ao carrossel principal
                                width={550}
                            >
                                <div key="video">
                                    
                                            <video
                                                src={selectedTime.estadio.video}
                                                type='video/mp4'
                                                alt={selectedTime.estadio}
                                                width="100%"
                                                height="auto"
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                            />
                                </div>
                                <div>
                                <img
                                                src={selectedTime.estadio.img}
                                                alt={selectedTime.estadio}
                                                width="100%"
                                                height="auto"
                                            />
                                </div>
                                <div>
                                    <img
                                        src={selectedTime.estadio.internoImg}
                                        alt={selectedTime.estadio}
                                        className={styles.imagemEstadio}
                                        width="100%"
                                        height="auto"
                                    />
                                </div>
                                <div>
                                    <img
                                        src={selectedTime.estadio.vestiarioImg}
                                        alt={selectedTime.estadio}
                                        className={styles.imagemEstadio}
                                        width="100%"
                                        height="auto"
                                    />
                                </div>
                                <div>
                                    <img
                                        src={selectedTime.estadio.tunelImg}
                                        alt={selectedTime.estadio}
                                        className={styles.imagemEstadio}
                                        width="100%"
                                        height="auto"
                                    />
                                </div>
                            </Carousel>
                            <Box sx={{ display: 'flex', gap: '10px', marginTop: '10px', marginBottom: '10px' }}>
                                <Typography variant="body2">Time: {selectedTime.time}</Typography>
                                <span
                                    style={{
                                        width: '5px',
                                        height: '5px',
                                        backgroundColor: '#000',
                                        borderRadius: '50%',
                                        marginTop: '6px'
                                    }}
                                />
                                <Typography variant="body2">Capacidade: {selectedTime.estadio.capacidade}</Typography>
                                <span
                                    style={{
                                        width: '5px',
                                        height: '5px',
                                        backgroundColor: '#000',
                                        borderRadius: '50%',
                                        marginTop: '6px'
                                    }}
                                />
                                <Typography variant="body2">Cidade: {selectedTime.cidade}</Typography>
                            </Box>
                            <Typography variant="body2">Descrição: {selectedTime.estadio.descricao}</Typography>
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