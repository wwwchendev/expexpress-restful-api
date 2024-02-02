// 1.載入定義好的模型
const Post = require('../models/post')

// 2.新增文章(Post.create)的處理方法 
exports.create = async (req, res) => {
  try {
    // 1.接收到req.body內容，解析並宣告為變數
    // console.log(req.body); //>>{title:'第三篇貼文',content:'hello3'}    
    const { title, content, user } = req.body;
    // 這裡決定了slug的值
    const slug = title

    // 2.驗證validate
    // true 是 switch 語句的表達式，它總是評估為 true，因為它是常數值。
    // 因此，這個 switch 語句實際上等同於一連串 if 條件句。
    switch (true) {
      case !title: throw new Error('必須輸入標題');
      case !content: throw new Error('必須輸入內容');
    }

    // 3.建立資料
    // 使用自定義的mongoose.model物件"Post"當中的create方法
    // 這個方法接受一個包含要創建的文檔數據的物件作為第一個參數，並接受回調函數作為第二個參數，用於處理創建操作的結果。
    const post = await Post.create({ title, content, user, slug })

    // 4.設定回應內容
    res.json(post);

  } catch (err) {
    // 5.錯誤處理
    console.log(err)
    if (err.code == 11000) {
      res.status(400).json({
        message: `已存在相同標題:${err.keyValue.slug}`,
        error: err.message
      });
    } else {
      res.status(400).json({
        error: err.message
      });
    }
  }
};