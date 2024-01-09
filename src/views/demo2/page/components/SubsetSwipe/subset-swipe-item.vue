<template>
    <div class="subset-swipe-item" :style="trackStyle">
        <slot></slot>
    </div>
</template>

<script>
import { sortChildren } from '../utils';
export default {
    name: 'subset-swipe-item',
    inject: {
        [parent]: {
            default: null,
        },
    },
    data() {
        return {
        }
    },
    mounted() {
        this.bindRelation()
    },
    beforeDestroy() {
        if (this.parent) {
            this.parent.childrenList = this.parent.childrenList.filter(
                (item) => item !== this
            );
        }
    },
    computed: {
        parent() {
            return this[parent];
        },
        trackStyle() {
            let style = {
                height: `${this.parent.height}px`
            }
            return style
        }
    },
    methods: {
        //初始化
        bindRelation() {
            const children = [...this.parent.childrenList, this];
            sortChildren(children, this.parent);
            this.parent.childrenList = children;
        },
    },
}
</script>

<style lang="less" scoped></style>