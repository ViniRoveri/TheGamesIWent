import { useEffect } from "react"
import { useSetPaginaAtual } from "../common/hooks"
import CampoPesquisa from "../components/campoPesquisa"
import ListaJogos from "../components/listaJogos"

const Jogos = ()=>{
    const setPaginaAtual = useSetPaginaAtual()
    useEffect(()=>{
        setPaginaAtual('games')
    },[])

    return(
        <main className="mainJogos">
            <h1 className="jogos-titulo animaSubtitulo">Games</h1>
            <div className="jogos-textos animaTexto1">
                <p>Here you will find all the games and their details!
                </p>
                <p>To learn more about each game just click on it.                    
                </p>
                <p>You can also search for Teams, Championships, Stadiums and Dates here:
                </p>
            </div>
            <div className="jogos-pesquisa animaTexto2">
            <CampoPesquisa type="text" placeholder="Search Here!"/>
            </div>
            <section className="jogos-cards animaTexto3">
                <ListaJogos/>
            </section>
        </main>
    )
}

export default Jogos