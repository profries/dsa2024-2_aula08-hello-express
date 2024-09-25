const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/produtos', (req, res)=> {
    res.send("Listando produtos!")
})

app.post('/produtos', (req, res)=> {
    res.send("Inserindo produtos!")
})

app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`)
})
