<template>
  <div class="as-chesi function_flex">
    <SupersetSwipe class="function_flex">
      <SupersetSwipeItem class="function_flex" item="1">
        <div class="item one function_flex">
          <div>000</div>
          <SubsetSwipe :height="200">
            <SubsetSwipeItem>
              <div class="element">
                <div>主动交流也是一种生活态度</div>
                <div>大胆开麦，这里是专属于肾友的朋友圈！</div>
                <div>主动交流也是一种生活态度</div>
                <div>大胆开麦，这里是专属于肾友的朋友圈！</div>
                <div>主动交流也是一种生活态度</div>
                <div>大胆开麦，这里是专属于肾友的朋友圈！</div>
                <div>主动交流也是一种生活态度</div>
              </div>
            </SubsetSwipeItem>
            <SubsetSwipeItem>
              <div class="element">
                <div>大胆开麦，这里是专属于肾友的朋友圈！2</div>
                <div>主动交流也是一种生活态度</div>
                <div>大胆开麦，这里是专属于肾友的朋友圈！2</div>
                <div>主动交流也是一种生活态度</div>
                <div>大胆开麦，这里是专属于肾友的朋友圈！2</div>
                <div>主动交流也是一种生活态度</div>
              </div>
            </SubsetSwipeItem>
          </SubsetSwipe>

          <div>000000000000</div>
        </div>
        <div>00000000000000000000000000000</div>
      </SupersetSwipeItem>
      <SupersetSwipeItem class="function_flex" item="2">
        <div class="item two function_flex">
          <SubsetSwipe :height="200">
            <SubsetSwipeItem>
              <div class="element">
                <div>主动交流也是一种生活态度</div>
                <div>大胆开麦，这里是专属于肾友的朋友圈！</div>
                <div>主动交流也是一种生活态度</div>
                <div>大胆开麦，这里是专属于肾友的朋友圈！</div>
                <div>主动交流也是一种生活态度</div>
                <div>大胆开麦，这里是专属于肾友的朋友圈！</div>
                <div>主动交流也是一种生活态度</div>
              </div>
            </SubsetSwipeItem>
            <SubsetSwipeItem>
              <div class="element">
                <div>大胆开麦，这里是专属于肾友的朋友圈！2</div>
                <div>主动交流也是一种生活态度</div>
                <div>大胆开麦，这里是专属于肾友的朋友圈！2</div>
                <div>主动交流也是一种生活态度</div>
                <div>大胆开麦，这里是专属于肾友的朋友圈！2</div>
                <div>主动交流也是一种生活态度</div>
              </div>
            </SubsetSwipeItem>
            <SubsetSwipeItem>
              <div class="element">
                <div>大胆开麦，这里是专属于肾友的朋友圈！3</div>
                <div>主动交流也是一种生活态度</div>
                <div>大胆开麦，这里是专属于肾友的朋友圈！3</div>
                <div>主动交流也是一种生活态度</div>
                <div>大胆开麦，这里是专属于肾友的朋友圈！3</div>
                <div>主动交流也是一种生活态度</div>
              </div>
            </SubsetSwipeItem>
            <SubsetSwipeItem>
              <div class="element">
                <div>大胆开麦，这里是专属于肾友的朋友圈！3</div>
                <div>主动交流也是一种生活态度</div>
                <div>大胆开麦，这里是专属于肾友的朋友圈！3</div>
                <div>主动交流也是一种生活态度</div>
                <div>大胆开麦，这里是专属于肾友的朋友圈！3</div>
                <div>主动交流也是一种生活态度</div>
              </div>
            </SubsetSwipeItem>
          </SubsetSwipe>
        </div>
      </SupersetSwipeItem>
      <SupersetSwipeItem class="function_flex" item="3">
        <div class="item tree function_flex">222</div>
      </SupersetSwipeItem>
      <SupersetSwipeItem class="function_flex" item="4">
        <div class="item tree function_flex">33333333333</div>
      </SupersetSwipeItem>
    </SupersetSwipe>

  </div>
</template>

<script>
import SupersetSwipe from './components/SupersetSwipe/index.vue'
import SupersetSwipeItem from './components/SupersetSwipe/superset-swipe-item.vue'
import SubsetSwipe from './components/SubsetSwipe/index.vue'
import SubsetSwipeItem from './components/SubsetSwipe/subset-swipe-item.vue'
export default {
  components: {
    SupersetSwipe,
    SupersetSwipeItem,
    SubsetSwipe,
    SubsetSwipeItem
  },
  data: function () {
    return {
      current_page: 0,//当前页码
      direction: "",// up down [手势]
      children: [],
      distance: 0,
      offset: 0,
      width: 0,
      height: 0,
      num: 0
    };
  },
}
</script>

<style lang="less" scoped>
.as-chesi {
  position: relative;

  .content {}

  .item {}

  .one {
    background-image: url('https://static.ishenzang.com/static/ko/h5/mp/ssxpat/annual-summary-2023/images/three-bg.webp');
    background-size: 100% auto;
    background-repeat: no-repeat;
    align-items: center;
    justify-content: center;

    .action-image {
      margin-top: 30px;
      flex-shrink: 0;
      width: 200px;
      height: 100px;
    }

    .wepiace {
      height: 200px;
      overflow: hidden;

      .details {
        .element {
          height: 200px;
        }
      }
    }
  }

  .two {
    background-image: url('https://static.ishenzang.com/static/ko/h5/mp/ssxpat/annual-summary-2023/images/four-bg.webp');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .tree {
    background-image: url('https://static.ishenzang.com/static/ko/h5/mp/ssxpat/annual-summary-2023/images/five-bg.webp');
    background-size: cover;
    background-repeat: no-repeat;
  }
}

.function_flex {
  flex-shrink: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
