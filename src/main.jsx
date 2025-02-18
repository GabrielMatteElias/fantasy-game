import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//import Login from './pages/login/login.tsx'
import Layout from './layout.jsx'
import Home from './pages/home/home.jsx'
import Estadios from './pages/estadios/estadios.jsx'
import Times from './pages/times/times.jsx'
import TimesDetalhes from './pages/times/timesDetalhe/timesDetalhe.jsx'

import brasaoAtlantiks from './assets/brasaoAtlantiks.png';
import brasaoGama from './assets/brasaoGama.png';
import brasaoOutBird from './assets/brasaoOutBird.png';
import brasaoPolo from './assets/brasaoPolo.png';
import brasaoRedBuffalo from './assets/brasaoRedBuffalo.png';
import brasaoRedDragons from './assets/brasaoRedDragons.png';
import brasaoBlackDragons from './assets/brasaoBlackDragons.png';
import brasaoUlbra from './assets/brasaoUlbra.png';

import estadioAtlantiks from './assets/estadioAtlantiks.jpg'
import estadioAtlantiksVideo from './assets/videoEstadioAtlantiks.mp4'
import estadioGama from './assets/estadioGama.jpg';
import estadioGamaVideo from './assets/videoEstadioGama.mp4';
import estadioOutBird from './assets/estadioOutBird.jpg';
import estadioOutBirdVideo from './assets/videoEstadioOutBird.mp4';
import estadioPolo from './assets/estadioPolo.jpg';
import estadioPoloVideo from './assets/videoEstadioPolo.mp4';
import estadioRedBuffalo from './assets/estadioRedBuffalo.jpg';
import estadioRedBuffaloVideo from './assets/videoEstadioBuffalo.mp4'
import estadioRedDragons from './assets/estadioRedDragons.jpg';
import estadioRedDragonsVideo from './assets/videoEstadioRedDragons.mp4';
import estadioBlackDragons from './assets/estadioBlackDragons.jpg';
import estadioBlackDragonsVideo from './assets/videoEstadioBlackDragons.mp4';
import estadioUlbra from './assets/estadioUlbra.jpg';
import estadioUlbraVideo from './assets/videoEstadioUlbra.mp4';

import jogadorBlackDragons from './assets/jogador.jpg';
import jogador2BlackDragons from './assets/jogador2.jpg';
import jogador3BlackDragons from './assets/jogador3.jpg';
import jogador4BlackDragons from './assets/jogador4.jpg';
import jogador5BlackDragons from './assets/jogador5.jpg';

import vestiarioAtlantiks from './assets/vestiarioAtlantiks.jpg';
import vestiarioGama from './assets/vestiarioGama.jpg';
import vestiarioOutBird from './assets/vestiarioOutBird.jpg';
import vestiarioPolo from './assets/vestiarioPolo.jpg';
import vestiarioRedBuffalo from './assets/vestiarioRedBuffalo.jpg';
import vestiarioRedDragons from './assets/vestiarioRedDragons.jpg';
import vestiarioBlackDragons from './assets/vestiarioBlackDragons.jpg';
import vestiarioUlbra from './assets/vestiarioUlbra.jpg';

import tunelAtlantiks from './assets/tunelAtlantiks.jpg';
import tunelGama from './assets/tunelGama.jpg';
import tunelOutBird from './assets/tunelOutBird.jpg';
import tunelPolo from './assets/tunelPolo.jpg';
import tunelRedBuffalo from './assets/tunelRedBuffalo.jpg';
import tunelRedDragons from './assets/tunelRedDragons.jpg';
import tunelBlackDragons from './assets/tunelBlackDragons.jpg';
import tunelUlbra from './assets/tunelUlbra.jpg';

import estadioInternoAtlantiks from './assets/estadioInternoAtlantiks.jpg';
import estadioInternoGama from './assets/estadioInternoGama.jpg';
import estadioInternoOutBird from './assets/estadioInternoOutBird.jpg';
import estadioInternoPolo from './assets/estadioInternoPolo.jpg';
import estadioInternoRedBuffalo from './assets/estadioInternoRedBuffalo.jpg';
import estadioInternoRedDragons from './assets/estadioInternoRedDragons.jpg';
import estadioInternoBlackDragons from './assets/estadioInternoBlackDragons.jpg';
import estadioInternoUlbra from './assets/estadioInternoUlbra.jpg';

const dadosTimes = [
  {
    id: "black-dragon",
    time: "Black Dragons",
    cidade: "Tóquio",
    brasao: brasaoBlackDragons,
    estadio: {
      nome: "Dragão Negro Arena",
      capacidade: 50000,
      img: estadioBlackDragons,
      video: estadioBlackDragonsVideo,
      vestiarioImg: vestiarioBlackDragons,
      tunelImg: tunelBlackDragons,
      internoImg: estadioInternoBlackDragons,
      descricao: "Um estádio imponente com detalhes em preto brilhante e iluminação dourada, destacando a força e elegância, com um design marcante inspirado em dragões."
    },
    jogadores: [
      {
        nome: "Ryota Yoshida",
        imagem: jogadorBlackDragons,
        idade: 28,
        nacionalidade: "Japão",
        posicao: "Atacante"
      },
      {
        nome: "Haruto Tanaka",
        imagem: jogador2BlackDragons,
        idade: 24,
        nacionalidade: "Japão",
        posicao: "Meio-campista"
      },
      {
        nome: "Kaori Nakamura",
        imagem: jogador3BlackDragons,
        idade: 22,
        nacionalidade: "Japão",
        posicao: "Zagueiro"
      },
      {
        nome: "Lucas Almeida",
        imagem: jogador4BlackDragons,
        idade: 25,
        nacionalidade: "Brasil",
        posicao: "Lateral Direito"
      },
      {
        nome: "Diego Fernández",
        imagem: jogador5BlackDragons,
        idade: 27,
        nacionalidade: "Argentina",
        posicao: "Goleiro"
      }
    ]
  },
  {
    id: "red-dragons",
    time: "Red Dragons",
    cidade: "Osaka",
    brasao: brasaoRedDragons,
    estadio: {
      nome: "Ninho do Dragão",
      capacidade: 45000,
      img: estadioRedDragons,
      video: estadioRedDragonsVideo,
      vestiarioImg: vestiarioRedDragons,
      tunelImg: tunelRedDragons,
      internoImg: estadioInternoRedDragons,
      descricao: "Um estádio imponente em tons vibrantes de vermelho, com detalhes que remetem a dragões flamejantes, simbolizando poder e paixão."
    }
  },
  {
    id: "ulbra",
    time: "Ulbra",
    brasao: brasaoUlbra,
    cidade: "Sendai",
    estadio: {
      nome: "Ulbra Field",
      capacidade: 15000,
      img: estadioUlbra,
      video: estadioUlbraVideo,
      vestiarioImg: vestiarioUlbra,
      tunelImg: tunelUlbra,
      internoImg: estadioInternoUlbra,
      descricao: "Um estádio iluminado por tons de roxo, transmitindo sofisticação e modernidade, com design que realça sua estrutura imponente."
    }
  },
  {
    id: "gama",
    time: "Gama",
    brasao: brasaoGama,
    cidade: "Nagasaki",
    estadio: {
      nome: "Estádio Gama",
      capacidade: 20000,
      img: estadioGama,
      video: estadioGamaVideo,
      vestiarioImg: vestiarioGama,
      tunelImg: tunelGama,
      internoImg: estadioInternoGama,
      descricao: "Um estádio vibrante com tonalidades verdes que irradiam energia, complementado por um design moderno e iluminação que destaca sua grandiosidade."
    }
  },
  {
    id: "atlantiks",
    time: "Atlantiks",
    brasao: brasaoAtlantiks,
    cidade: "Hiroshima",
    estadio: {
      nome: "Oceano Arena",
      capacidade: 70000,
      img: estadioAtlantiks,
      video: estadioAtlantiksVideo, 
      vestiarioImg: vestiarioAtlantiks,
      tunelImg: tunelAtlantiks,
      internoImg: estadioInternoAtlantiks,
      descricao: "Um estádio deslumbrante com tons prateados e azuis brilhantes, refletindo uma arquitetura moderna e iluminado por luzes que destacam sua grandiosidade à noite."
    }
  },
  {
    id: "out-bird",
    time: "Out Bird",
    brasao: brasaoOutBird,
    cidade: "Kyoto",
    estadio: {
      nome: "Estádio Pássaro Veloz",
      capacidade: 66000,
      img: estadioOutBird,
      video: estadioOutBirdVideo,
      vestiarioImg: vestiarioOutBird,
      tunelImg: tunelOutBird,
      internoImg: estadioInternoOutBird,
      descricao: "Um estádio elegante com tons de verde brilhante, irradiando energia e frescor, com arquitetura que remete a asas estilizadas."
    }
  },
  {
    id: "polo",
    time: "Polo",
    brasao: brasaoPolo,
    cidade: "Fukuoka",
    estadio: {
      nome: "Polo Ground",
      capacidade: 35000,
      img: estadioPolo,
      video: estadioPoloVideo,
      vestiarioImg: vestiarioPolo,
      tunelImg: tunelPolo,
      internoImg: estadioInternoPolo,
      descricao: "Um estádio sofisticado com tons de azul brilhante, criando um ambiente elegante e moderno, ideal para grandes eventos."
    }
  },
  {
    id: "red-buffalo",
    time: "Red Buffalo",
    brasao: brasaoRedBuffalo,
    cidade: "Sapporo",
    estadio: {
      nome: "Arena Buffalo Vermelho",
      capacidade: 25000,
      img: estadioRedBuffalo,
      video: estadioRedBuffaloVideo,
      vestiarioImg: vestiarioRedBuffalo,
      tunelImg: tunelRedBuffalo,
      internoImg: estadioInternoRedBuffalo,
      descricao: "Um estádio imponente com detalhes em vermelho e preto, destacando a força e elegância, com um design marcante inspirado em búfalos."
    }
  }
];

sessionStorage.setItem('times', JSON.stringify(dadosTimes));

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: '/',
    children: [
      // {
      //   element: <PrivateRoute element={<Whatsapp />} />,
      //   path: '/whatsapp'
      // },
      {
        element: <Home />,
        path: '/'
      },
      {
        element: <Estadios />,
        path: '/estadios'
      },
      {
        element: <Times />,
        path: '/times'
      },
      {
        element: <TimesDetalhes />,
        path: '/times/:time',
      }
    ]
  },
  // {
  //   element: <Login />,
  //   path: '/login'
  // },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)