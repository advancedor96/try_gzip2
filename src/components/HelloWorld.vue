<template>
  <div class="hello" ref='dd'>
 我是vue
 <button class="button">Button</button>
  <div ref="canvas"></div>
  </div>
</template>

<script>
import P5 from 'p5'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      ps: null,
      x: 0
    }
  },
  mounted () {
    this.s = (p) => {
      p.setup = (_) => {
        this.canvas = p.createCanvas(600, 400)
        this.canvas.parent(this.$refs.canvas)
      }
      p.draw = _ => {
        if (this.x + 100 > p.width) {
          this.x = 0
        }
        p.background(0)
        p.fill(255)
        p.rect(this.x, 50, 100, 100)
        this.x++
      }
    }
    this.ps = new P5(this.s)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
