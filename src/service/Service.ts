import axios from "axios";

export const api = axios.create({
  baseURL: 'https://blogpessoal-6qar.onrender.com'
})

export const login = async(url: any, dados: any, setDados: any) => {
  const resposta = await api.post(url,dados)
  setDados(resposta.data.token)
}

export const cadastrarUsuario = async(url: any, dados: any, setDados: any) => {
  const resposta = await api.post(url,dados)
  setDados(resposta.data)
}
// a tipagem do headers seria Object
export const getAll = async(url: any, setDados: any, headers: any) => {
const resposta = await api.get(url, headers)
setDados(resposta)
} 