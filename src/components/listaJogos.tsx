import { memo, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { axiosGames } from "../common/axiosInstances"
import { intJogo } from "../common/interfaces"

const ListaJogos = () => {
    const [dataApi,setDataApi] = useState([])
    axiosGames.get('').then(res=>setDataApi(res.data))

    const [avisoInvisivel,setAvisoInvisivel] = useState('invisivel')
    useEffect(()=>{
        if(document.querySelectorAll('.jogos-card.invisivel').length === dataApi.length){
            setAvisoInvisivel('')            
        }else{
            setAvisoInvisivel('invisivel')
        }
    })
    
    return (
        <>
        {[...dataApi].reverse().map((jogo:intJogo)=>(
        <Link to={`/gameInfo/${jogo.codigo}`} key={jogo.codigo} className="jogos-card" onClick={()=>{
            window.scrollTo(0,0)
        }}>
            <img src={`img/Thumbs/Thumb-${jogo.codigo.slice(0,-2)}.png`} alt="" className="card-imagem"/>
            <div className="card-conteudo">
                <h2 className="card-titulo">{`${jogo.timeCasa} ${jogo.golsCasa} x ${jogo.golsFora} ${jogo.timeFora}`}</h2>
                <p className="card-texto">{jogo.data}</p>
                <p className="card-texto">{jogo.campeonato}</p>
                <p className="card-texto">{jogo.estadio}</p>
            </div>
        </Link>
        ))}
        <p className={`jogos-aviso ${avisoInvisivel}`}>No games found.</p>
        </>
    )
}

export default memo(ListaJogos)