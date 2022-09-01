import axios from 'axios';

export const api = axios.create({ //função
    baseURL: 'https://blogpessoalt56generation.herokuapp.com/'
})

export const cadastroUsuario = async(url: any,dados: any,setDados: any) => { //função de flecha
    const resposta = await api.post(url,dados)
    setDados(resposta.data)
}

export const login = async(url: any,dados: any,setDados: any) => { //função de flecha
    const resposta = await api.post(url,dados)
    setDados(resposta.data.token)
}

