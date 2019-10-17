export default {
    data() {
        return {
            // heightdata:
            posLeft: 0,
            posTop: 0,
        }
    },
    methods: {
        layout(val) {
            // console.log(val)
            //这个val就是lineNum
            // console.log(val,this.index,"111111")
            if (this.index < val) {
                //可以获取到计算属性的值
                // console.log(this.index,this.boxheight,this.posLeft)
                this.$store.dispatch("pushHeight", this.boxheight)
                //178乘数组中最小值的那个值的下标
                this.posLeft = 178 * this.index
                this.posTop = 0
            } else {
                let minHeight = Math.min.apply(false, this.$store.state.heightArr)
                // this.posLeft 返回的是最小值首次出现的位置
                let minIndex = this.$store.state.heightArr.indexOf(minHeight)
                // console.log(minHeight,minIndex,this.$store.state.heightArr)
                this.posLeft = 178 * minIndex
                //他距离顶部的位置
                this.posTop = minHeight + 10
                //更改高度
                this.$store.commit("updateHeight", { heightData: this.posTop + this.boxheight, index: minIndex })
            }
        }
    }
}