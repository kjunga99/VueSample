const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false  // 한단어 이름으로 네이밍 할수 있도록 허용 
})
