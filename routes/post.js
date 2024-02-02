// 1.載入express
const express = require('express')
// 2.在express中新增一組路由
const router = express.Router()
// 3.載入控制器
const postController = require('../controllers/postController')

// 4.設計路由
// 指定 'http://localhost:8000/**/*/post'的請求由 create方法負責處理
router.post('/post', postController.create)

// 5.匯出路由模組
module.exports = router