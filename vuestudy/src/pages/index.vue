<template>
  <div>
    <div class="index-wrap">
      <div class="index-left">
        <div class="index-left-block">
          <h2>全部产品</h2>
          <template v-for="product in productList">
            <h3>{{product.title}}</h3>
            <ul>
              <li v-for="item in product.list">
                <a :href="item.url">{{item.title}}</a>
                <span v-if="item.hot" class="hot-tag">HOT</span>
              </li>
            </ul>
            <div class="hr" v-if="!product.last"></div>
          </template>
        </div>

        <div class="index-left-block lastest-news">
          <h2>最新消息</h2>
          <ul></ul>
        </div>
      </div>
      <div class="index-right">
        <slide-show :slides="slides" :inv="invTime"></slide-show>
        <div class="index-board-list">
          <div class="index-board-item" v-for="(item , index) in boardList"
               :class="[{'line-last':index % 2 !==0 } ,'index-board-'+item.id] ">
            <div class="index-board-item-inner">
              <h2>{{item.title}}</h2>
              <p>{{item.description}}</p>
              <div class="index-board-button"><a href="" class="button">立即购买</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import slideShow from '../components/slideShow.vue'

  export default{
    data(){
      return {
        invTime: 2000,
        slides: [
          {
            src: require('../assets/slideShow/pic1.jpg'),
            title: 'xxx1',
            href: 'detail/a'
          },
          {
            src: require('../assets/slideShow/pic2.jpg'),
            title: 'xxx2',
            href: 'detail/a'
          },
          {
            src: require('../assets/slideShow/pic3.jpg'),
            title: 'xxx3',
            href: 'http://www.baidu.com'
          },
          {
            src: require('../assets/slideShow/pic4.jpg'),
            title: 'xxx4',
            href: 'detail/a'
          }
        ],
        boardList: [
          {
            title: '开放产品',
            description: '开放产品是一款开放产品',
            id: 'car',
            toKey: 'analysis',
            saleout: false
          },
          {
            title: '品牌营销',
            description: '品牌营销帮助你的产品更好地找到定位',
            id: 'earth',
            toKey: 'count',
            saleout: false
          },
          {
            title: '使命必达',
            description: '使命必达快速迭代永远保持最前端的速度',
            id: 'loud',
            toKey: 'forecast',
            saleout: true
          },
          {
            title: '勇攀高峰',
            description: '帮你勇闯高峰，到达事业的顶峰',
            id: 'hill',
            toKey: 'publish',
            saleout: false
          }
        ],
        productList: {
          pc: {
            title: "pc产品",
            list: [
              {
                title: '数据统计',
                url: 'http://www.baidu.com'
              },
              {
                title: '数据预测',
                url: 'http://www.baidu.com'
              },
              {
                title: '流量分析',
                hot: true,
                url: 'http://www.baidu.com'
              },
              {
                title: '广告发布',
                url: 'http://www.baidu.com'
              }]
          },
          app: {
            title: '手机应用类',
            last: true,
            list: [
              {
                title: '91助手',
                url: "http://www.baidu.com"
              },
              {
                title: '产品助手',
                url: "http://www.baidu.com"
              },
              {
                title: '智能地图',
                url: "http://www.baidu.com"
              },
              {
                title: '团队语音',
                url: "http://www.baidu.com"
              }]
          }
        }
      }
    },
    components: {
      slideShow
    },
    created: function () {
    }
  }
</script>

<style scoped>

  .index-wrap {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
  }

  .index-left {
    float: left;
    width: 20%;
    text-align: left;
  }

  .index-right {
    float: left;
    width: 80%;
  }

  .index-left-block {
    margin: 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
  }

  .index-left-block .hr {
    margin-bottom: 20px;
  }

  .index-left-block h2 {
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }

  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }

  .index-left-block ul {
    padding: 10px 15px;
  }

  .index-left-block li {
    padding: 5px;
  }

  .hot-tag {
    background: red;
    color: #fff;
  }

  .index-board-list {
    overflow: hidden;
  }

  .index-board-item {
    float: left;
    width: 30%;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }

  .index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
  }

  .index-board-car .index-board-item-inner {
    background: url(../assets/images/1.png) no-repeat;
  }

  .index-board-loud .index-board-item-inner {
    background: url(../assets/images/2.png) no-repeat;
  }

  .index-board-earth .index-board-item-inner {
    background: url(../assets/images/3.png) no-repeat;
  }

  .index-board-hill .index-board-item-inner {
    background: url(../assets/images/4.png) no-repeat;
  }

  .index-board-button {
    margin-top: 20px;
  }

  .line-last {
    margin-right: 0;
  }

</style>
