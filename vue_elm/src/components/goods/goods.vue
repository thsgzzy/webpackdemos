<template>
  <div>
    <div class="goods">
      <!--left-->
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item,index) in goods" class="menu-item" @click="selectMenu(index,$event)">
            <span class="text">{{item.name}}</span>
          </li>
        </ul>
      </div>
      <!--右-->
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li v-for="item in goods" class="food-list" ref="foodList">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li v-for="food in item.foods" class="food-item">
                <div class="icon">
                  <img width="57" height="57" :src="food.icon">
                </div>
                <div class="content">
                  <h1 class="name">{{food.name}}</h1>
                  <p class="desc">{{food.description}}</p>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  import BScroll from 'better-scroll'

  const ERR_OK = 0;

  export default{
    data(){
      return {
        goods: [],
        listHeight: [],
        scrollY: 0,
      }
    },
    created(){
      this.$http.get('/api/goods').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.goods = response.data;
          //在这个函数中调用以防内容还未加载完就执行，获取不到元素的高度导致无法滑动
          this.$nextTick(() => {
            this._initScroll();
//            this._calculateHeight();
          });
        }
      })
    },
    methods: {

      selectMenu(index, event){
        //判断是否为pc端的话就返回，不做click:true的设置，以免触发两次点击事件
        if (!event._constructed) {
          return
        }
//        let foodList = this.$refs.footWrapper.getElementsByClassName('')
        let foodList = this.$refs.foodList;
        let el = foodList[index];
        this.foodsScroll.scrollToElement(el, 300);
      },
      _initScroll(){
        //首先要使点击有效，因为 better-scroll将默认事件都阻止了
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {click: true});
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {click: true,});
        //实现左边联动，则必须要监控 “scroll”事件，获取其高度
//        this.foodsScroll.on('scroll', (pos) => {
//          this.scrollY = Math.abs(Math.round(pos.y));
//        });
      },
      _calculateHeight() {
        let foodList = this.$refs.foodList;
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
      }
    },
    components: {}
  }
</script>

<style>

  .goods {
    display: flex;
    position: absolute;
    top: 174px;
    bottom: 46px;
    width: 100%;
    overflow: hidden;
  }

  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7
  }

  .menu-item {
    display: table;
    height: 54px;
    width: 56px;
    padding: 0 12px;
    line-height: 14px;
  }

  .menu-item .text {
    position: relative;
    display: table-cell;
    width: 56px;
    vertical-align: middle;
    font-size: 12px;
  }

  .menu-item .text:after {
    content: ' ';
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }

  .foods-wrapper {
    flex: 1;
  }

  .foods-wrapper .title {
    padding-left: 14px;
    height: 26px;
    line-height: 26px;
    border-left: 2px solid #d9dde1;
    font-size: 12px;
    color: rgb(147, 153, 159);
    background: #f3f5f7;
  }

  .foods-wrapper .food-item {
    position: relative;
    display: flex;
    margin: 18px;
    padding-bottom: 18px;
  }

  .foods-wrapper .food-item:after {
    content: ' ';
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }

  .foods-wrapper .food-item:last-child {
    margin-bottom: 0;
  }

  .foods-wrapper .food-item:last-child:after {
    display: none;
  }

  .foods-wrapper .food-item .icon {
    flex: 0 0 57px;
    margin-right: 10px;
  }
</style>
