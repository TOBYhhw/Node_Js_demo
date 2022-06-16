const express = require('express')

const router = express.Router()

const bill_handler = require('../router_handler/bill')

router.get("/getHistory", bill_handler.getHistory)
router.get("/add", bill_handler.add)
router.get("/delete/:Id", bill_handler.delete)
router.get("/update", bill_handler.update)
router.get("/getHistoryByName", bill_handler.getHistoryByName)
module.exports = router