const express = require('express')

const app = express()

const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({ extended: false }))

const BillRouter = require("./router/bill")
app.use(BillRouter)

app.listen(3007, () => {
    console.log('express server running at http://127.0.0.1:3007');
})