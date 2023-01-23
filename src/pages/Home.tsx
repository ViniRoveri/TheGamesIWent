import { useEffect } from "react"
import { useSetPaginaAtual, useSetPesquisaHome } from "../common/hooks"
import CampoPesquisa from "../components/campoPesquisa"

const Home = ()=>{
    const setPaginaAtual = useSetPaginaAtual()
    const setPesquisaHome = useSetPesquisaHome()

    useEffect(()=>{
        setPaginaAtual('home')
        setPesquisaHome('')
    },[])

    return(
        <main className="mainHome">
            <h1 className="titulo">
                <div className="animaTitulo1">The </div>
                <div className="animaTitulo2">Games </div>
                <div className="animaTitulo3">I </div>
                <div className="animaTitulo4">Went </div>
            </h1>
            <h2 className="home-subtitulo animaSubtituloHome">About the project</h2>
            <section className="home-textos animaTextoHome1">
                <p>Welcome!
                </p>
                <p>This page was made to serve as a personal collection of all the football games I've been to and will go to in my life.!
                </p>
                <p>Here there is information about all the games, lineups, goals, championships and everything you may want to see!
                </p>
            </section>
            <section className="pesquisaHome">
                <h2 className='pesquisaHome-titulo animaTextoHome2'>Search something on the site:</h2>
                <p className='pesquisaHome-texto animaTextoHome3'>Search for Teams, Championships, Stadiums or Dates!</p>
                <div className="animaTextoHome4">
                    <CampoPesquisa type="search" placeholder="Pesquise Aqui!"/>
                </div>
            </section>
        </main>
    )
}

export default Home