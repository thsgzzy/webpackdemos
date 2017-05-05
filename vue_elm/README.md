# vue_elm

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


要点：
1、使用vue-resource而没有使用axios，因为之前都是使用axios，这里刚好学习下vue-resource的使用，在实际开发中建议使用axios
  安装：不多说了
  用法：入口文字中 import VueResource from 'vue-resource';
  Vue.use(VueResource);
  
2、别名的用法：如下
  alias: {
    'vue$': 'vue/dist/vue.esm.js',
    '@': resolve('src'),
    'src': path.resolve(__dirname, '../src'),
    'common': path.resolve(__dirname, '../src/common'),
    'components': path.resolve(__dirname, '../src/components')
  }
  
  在.vue中就可以这么引用：import {urlParse} from 'common/js/util';

3、node相关：
  //zyzhang
  var appData = require('../data.json')
  var seller = appData.seller
  var goods = appData.goods
  var ratings = appData.ratings
  
  var apiRoutes = express.Router()
  
  apiRoutes.get('/seller', function (req, res) {
    res.json({
      errno: 0,
      data: seller
    });
  })
  
  apiRoutes.get('/goods', function (req, res) {
    res.json({
      errno: 0,
      data: goods
    })
  })
  
  apiRoutes.get('/ratings', function (req, res) {
    res.json({
      errno: 0,
      data: ratings
    });
  })
  
  app.use('/api', apiRoutes)
  //zyzhang
  
4、@media 
可以针对不同的屏幕尺寸设置不同的样式，特别是如果你需要设置设计响应式的页面
如：设备像素比devicePixelRatio

5、stylus

