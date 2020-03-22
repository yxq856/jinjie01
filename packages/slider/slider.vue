<template>
    <div class="slider" @click="handleClick()" @mouseenter="clearTimer" @mouseleave="addTimer">
        <div class="slider-content"  >
            <!-- 鼠标进入取消定时器 -->
            <transition-group name="fade">
                <div
                    class="slider-item"
                    v-for="(item,index) in list"
                    :key="item.url"
                    v-show="index===curIdx"
                >
                    <img :src="item.url" alt />
                </div>
            </transition-group>
        </div>
        <span class="btn btn_left" @click.stop="prev"></span>
        <span class="btn btn_right" @click.stop="next"></span>

        <div class="txt">{{list[curIdx].alt}}</div>
        <ol class="indirector">
            <li
                v-for="index in list.length"
                :key="index"
                :class="{current:index===curIdx+1}"
                @mouseenter="orderEnter(index)"
            >
            </li>
            <!-- <li class="current"></li> -->
        </ol>
  </div>
</template>

<script>
export default {
  name: 'MySlider',
  props: {
    // 图片数组
    list: {
      type: Array,
      default: () => [],
      require: true
    },
    // 当前下标
    currentIndex: {
      type: Number,
      default: 0
    },
    // 自动播放时间
    auto: {
      type: Number,
      default: 800
    }
  },
  data () {
    return {
      curIdx: this.currentIndex,
      timer: null
    }
  },
  created () {
    if (this.auto) {
      this.timer = setInterval(() => {
        this.next()
      }, this.auto)
    }
  },
  methods: {
    // 抛出一个点击事件
    handleClick () {
      this.$emit('click', this.curIdx)
    },
    // 点击左侧按钮
    prev () {
      if (this.curIdx === 0) {
        this.curIdx = this.list.length - 1
      } else {
        this.curIdx--
      }
    },
    // 点击右侧按钮
    next () {
      if (this.curIdx === this.list.length - 1) {
        this.curIdx = 0
      } else {
        this.curIdx++
      }
    },
    // 进入取消定时器
    clearTimer () {
      if (this.auto) {
        clearInterval(this.timer)
      }
    },
    // 离开，添加定时器
    addTimer () {
      if (this.auto) {
        this.timer = setInterval(() => {
          this.next()
        }, this.auto)
      }
    },
    // 鼠标进入小圆点，切换到对应的图片
    orderEnter (id) {
      this.curIdx = id - 1
    }
  }
}
</script>

<style scoped lang="less">
.fade-enter-active,.fade-leave-active {
    transition: all 0.3s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}

.slider .slider-content,
.slider img {
  width: 100%;
  height: 100%;
}
.slider {
  margin: 0 auto;
  border: 1px solid #ccc;
  position: relative;
}
.slider .slider-content {
  overflow: hidden;
  position: relative;
}
.slider .slider-content .slider-item {
  position: absolute;
  top: 0;
  left: 0;
}
.slider img {
  width: 100%;
}
.slider .btn,
.slider .txt,
.slider .indirector {
  position: absolute;
}
.slider .btn {
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0);
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.2s;
}
.slider .btn:hover {
  background-color: rgba(255, 255, 255, 1);
}

.slider .btn:before,
.slider .btn:after {
  content: "";
  height: 3px;
  width: 25px;
  background-color: #fff;
  position: absolute;
  left: 15px;
  top: 23px;
  transform: rotateZ(60deg);
  transform-origin: 0px center;
  transition: all 0.2s;
}
.slider .btn:after {
  transform: rotateZ(-60deg);
}
.slider .btn:hover:before {
  transform: rotateZ(45deg);
  background-color: red;
}
.slider .btn:hover:after {
  transform: rotateZ(-45deg);
  background-color: red;
}

.slider .btn.btn_right:before,
.slider .btn.btn_right:after {
  transform-origin: right center;
}

.slider .btn.btn_left {
  left: 20px;
}
.slider .btn.btn_right {
  right: 20px;
}

.slider .txt {
  text-indent: 1em;
  line-height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: left;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #fff;
}
.slider .indirector {
  bottom: 10px;
  right: 1em;
}
.slider .indirector li {
  display: inline-block;
  margin: 0 5px;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #fff;
}
.slider .indirector li {
  transition: transform 0.2s;
}
.slider .indirector .current {
  background-color: #369;
  transform: scale(1.2);
}
</style>
