import { atom } from "recoil";

export const pesquisaHomeState = atom<string>({
    key: 'pesquisaHome',
    default: ''
})

export const paginaAtualState = atom<'home' | 'games' | 'stats' | ''>({
    key: 'paginaAtual',
    default: ''
})