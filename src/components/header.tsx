import { Link } from 'react-router-dom'
import Logo from '../img/Logos/Logo-Vini-Roveri-100.png'
import {ReactComponent as ArrowDown} from '../img/Arrows/Arrow-Down.svg'
import {ReactComponent as ArrowUp} from '../img/Arrows/Arrow-Up.svg'
import { useState } from 'react'
import { usePaginaAtual } from '../common/hooks'

const Header = ()=>{
    const paginaAtual = usePaginaAtual()

    const [aberturaHeader,setAberturaHeader] = useState('fechado')

    return(
        <header className="header" style={aberturaHeader==='aberto'?{height:'218px'}:{}}>
            <div className="header-topo">
                <img src={Logo} alt="Logo Vini Roveri" className='header-logo'/>
            </div>
            <nav className={`nav nav-${aberturaHeader}`}>
                <Link to='/' className={`nav-item ${paginaAtual==='home'?'nav-item-ativo':''}`} onClick={()=>{
                    setAberturaHeader('fechado')
                }}>Home</Link>
                <Link to='/games' className={`nav-item ${paginaAtual==='games'?'nav-item-ativo':''}`} onClick={()=>{
                    setAberturaHeader('fechado')
                }}>Games</Link>
                <Link to='/stats' className={`nav-item ${paginaAtual==='stats'?'nav-item-ativo':''}`} onClick={()=>{
                    setAberturaHeader('fechado')
                }}>Stats</Link>
                <div className="nav-seta" onClick={()=>setAberturaHeader(aberturaHeader==='fechado'?'aberto':'fechado')}>
                    <ArrowDown className={aberturaHeader==='aberto'?'invisivel':''}/>
                    <ArrowUp className={aberturaHeader==='aberto'?'':'invisivel'}/>
                </div>
            </nav>
        </header>
    )
}

export default Header