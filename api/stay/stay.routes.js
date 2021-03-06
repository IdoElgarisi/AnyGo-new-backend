const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const { getStays, getStayById, addStay, removeStay, updateStay } = require('./stay.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', log, getStays)
router.get('/:id', getStayById)
router.post('/', addStay)
// router.post('/', requireAuth,  addStay)
router.put('/:id', updateStay)
// router.put('/:id', requireAuth, requireAdmin, updateStay)
router.delete('/:id', removeStay)
// router.delete('/:id', requireAuth, requireAdmin, removeStay)

module.exports = router