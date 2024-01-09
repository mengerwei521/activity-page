<template>
    <div class="superset-swipe" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
        <div class="content" ref="children_list" :style="trackStyle">
            <slot></slot>
        </div>
    </div>
</template>

<script>
// swipe父集-可单独使用
import { findComponentsDownward } from '../utils';
export default {
    name: 'superser-swipe',
    provide() {
        return {
            [parent]: this,
        };
    },
    data() {
        return {
            active: 0,//当前item值
            direction: "",// up down [手势]
            distance: 0,//位移距离
            childrenList: [],//子元素数组
            offsetHeight: 0,//整体高度
        }
    },
    props: {
        initialValue: {
            type: Number,
            default: 0
        },//初始位置索引值
        duration: {
            type: Number,
            default: 500
        }//动画时长，单位为 ms
    },
    mounted() {
        this.initaillFun()
    },
    watch: {
        childrenList(newValue, oldValue) { },
    },
    computed: {
        count() {
            // 总页码
            return this.childrenList.length;
        },
        trackStyle() {
            let style = {
                transitionDuration: `${this.duration}ms`,
                transform: `translateY(${this.distance}px)`,
                height: `${this.count * this.offsetHeight}px`
            }
            return style
        }
    },
    methods: {
        //当按下手指时
        onTouchStart(event) {
            this.startY = event.touches[0].clientY;
        },
        //当移动手指时
        onTouchMove(event) {
            event.preventDefault();
            this.deltaY = event.touches[0].clientY - this.startY;
            if (this.deltaY > 0) {
                //下滑
                console.log('下滑')
                this.direction = 'down'
            } else {
                //上滑
                console.log('上滑')
                this.direction = 'up'
            }
        },
        //当移走手指时
        onTouchEnd() {
            if (this.childrenList[this.active]?.$children) {
                //判断是否使用了SubsetSwipe组件
                let components = findComponentsDownward(this.childrenList[this.active], 'subset-swipe')
                if (components.length == 1 && components[0]?.childrenList?.length > 1) {
                    //判断SubsetSwipeItem组件是否大于1，如果大于1，则先位移SubsetSwipe组件，否则，位移SupersetSwipe组件
                    if ((this.direction == 'down' && components[0].active > 0) || (this.direction == 'up' && components[0].active < components[0].count - 1)) {
                        components[0].direction = this.direction
                        this.direction = ''
                        return
                    }
                } else {
                    console.log('一个SupersetSwipeItem组件中只能有一个SubsetSwipe组件')
                }
            }
            if (this.direction == 'up' && this.active < this.count - 1) {
                //上滑
                this.distance = this.distance - this.offsetHeight;
                this.active += 1
            } else if (this.direction == 'down' && this.active > 0) {
                //下滑
                this.distance = this.distance + this.offsetHeight;
                this.active -= 1
            }
            this.direction = ''
        },
        //初始化
        initaillFun() {
            this.offsetHeight = this.$el.offsetHeight;
            if (this.initialValue > 0) {
                this.active = this.initialValue;
                this.distance = - (this.offsetHeight * this.active);
            }
        }
    },
}
</script>

<style lang="less" scoped>
.superset-swipe {
    flex-shrink: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
</style>