const exprees = require('express')
const app = exprees()
const { SearchEmpresas } = require('./RouteEmpresas.js')

app.get('/', (req, res) => {
    nomes = SearchEmpresas('Google')
    const json = JSON.stringify(nomes);

    res.send(json)
})

port = 3000
app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`)
})