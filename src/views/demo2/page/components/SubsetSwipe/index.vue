<template>
    <div class="subset-swipe" :style="{ height: height + 'px' }">
        <div class="content" ref="children_list" :style="trackStyle">
            <slot></slot>
        </div>
    </div>
</template>

<script>
// swipe子集-不可单独使用
export default {
    name: 'subset-swipe',
    provide() {
        return {
            [parent]: this,
        };
    },
    props: {
        height: {
            type: Number,
            default: 200
        },
        duration: {
            type: Number,
            default: 500
        }
    },
    data() {
        return {
            active: 0,//当前item值
            direction: "",// up down [手势]
            distance: 0,//位移距离
            childrenList: [],//子元素数组
        }
    },
    watch: {
        childrenList(newValue, oldValue) { },
        direction: {
            immediate: true,
            deep: true,
            handler(newValue, oldValue) {
                if (newValue) {
                    this.onDistanceFun()
                }
            }
        }
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
                height: `${this.count * this.height}px`
            }
            return style
        }
    },
    methods: {
        //位移距离
        onDistanceFun() {
            if (this.direction == 'up' && this.active < this.count - 1) {
                //上滑
                this.distance = this.distance - this.height;
                this.active += 1
            } else if (this.direction == 'down' && this.active > 0) {
                //下滑
                this.distance = this.distance + this.height;
                this.active -= 1
            }
            this.direction = ''
        }

    }
}
</script>

<style lang="less" scoped>
.subset-swipe {
    flex-shrink: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
</style>