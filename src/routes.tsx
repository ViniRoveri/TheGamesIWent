import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Footer from './components/footer'
import Header from './components/header'
import Estatisticas from './pages/Estatisticas'
import Home from './pages/Home'
import InfoJogo from './pages/InfoJogo'
import Jogos from './pages/Jogos'
import NotFound from './pages/NotFound'

const AppRouter = ()=>{
    return(
    <Router>
        <RecoilRoot>
            <Header/>
            <Routes>
                <Route path='/'>
                    <Route index element={<Home/>}/>
                    <Route path='games' element={<Jogos/>}/>
                    <Route path='stats' element={<Estatisticas/>}/>
                    <Route path='gameInfo/:code' element={<InfoJogo/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Route>
            </Routes>
            <Footer/>
        </RecoilRoot>
    </Router>
)}

export default AppRouter