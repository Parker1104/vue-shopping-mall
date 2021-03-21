<template>
  <div id="hy-swiper">
    <!--
      touchstart事件：当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发。
      touchmove事件：当手指在屏幕上滑动的时候连续地触发。在这个事件发生期间，调用preventDefault()事件可以阻止滚动。
      touchend事件：当手指从屏幕上离开的时候触发。-->
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
  </div>
</template>

<script>
	export default {
		name: "Swiper",
    props: {
      interval: {
		    type: Number,
        default: 3000
      },
      duration: {
		    type: Number,
        default: 300
      },
      moveRatio: {
        type: Number,
        default: 0.25
      },
      showIndicator: {
        type: Boolean,
        default: true
      }
    },
    data: function () {
		  return {
        slideCount: 0, // 元素个数
        totalWidth: 0, // swiper的宽度
        swiperStyle: {}, // swiper样式
        currentIndex: 1, // 当前的index
        isScrolling: false, // 是否正在滚动
      }
    },
    mounted: function () {
      setTimeout(() => {
        this.initDom()
        this.startInterval()
      },100)
    },
    methods: {

      // 初始化Dom操作
      initDom () {
        // 获取要操作的元素
        let swiperEl = document.querySelector('.swiper')
        let slidesEls = swiperEl.getElementsByClassName('slide')

        // 保存元素的数量
        this.slideCount = slidesEls.length;
        if ( this.slideCount > 1 ) {
          // 克隆获取的元素
          let cloneFirst = slidesEls[0].cloneNode(true)
          let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true)
          // 分别在首位插入克隆的元素
          swiperEl.insertBefore(cloneLast, slidesEls[0]); // 在第一个元素前插入最后一个元素
          swiperEl.appendChild(cloneFirst)                // 在最后一个元素后插入第一个元素
          console.log("swiperEl:", swiperEl)
          this.totalWidth = swiperEl.offsetWidth          // 获取一个元素的宽度
          this.swiperStyle = swiperEl.style               // 将整个swiper的style赋值
          console.log(this.totalWidth)
        }
        this.setTransform(-this.totalWidth)
      },

      // 操作DOM X轴平移操作
      setTransform (position) {
        this.swiperStyle.transform = `translateX(${position}px)`
        this.swiperStyle['-webkit-transform'] = `translateX(${position}px)`
        this.swiperStyle['-ms-transform'] = `translateX(${position}px)`
      },

      // 开启定时器
      startInterval () {
        this.timer = window.setInterval(() => {
        this.currentIndex++
        this.scrollContent(-this.currentIndex * this.totalWidth)
        },this.interval)
      },

      scrollContent (position) {
        // 开始滚动
        this.isScrolling = true;
        // 设置滚动速度
        this.swiperStyle.transition ='transform '+ this.duration + 'ms'
        // 操作DOM
        this.setTransform(position);
        // 校验滚动位置，当图片处在第一张或最后一张是改变currentIndex的值
        this.checkPosition();
        // 停止滚动
        this.isScrolling = false
      },

      // 定时校验滚动位置
      checkPosition () {
        // 设置同样时间间隔的定时改变数组索引
        window.setTimeout(() => {
          this.swiperStyle.transition = '0ms'
          if (this.currentIndex >= this.slideCount + 1) {
            this.currentIndex = 1
            this.setTransform(-this.currentIndex * this.totalWidth)
          } else if (this.currentIndex < 0) {
            this.currentIndex = this.slideCount
            this.setTransform(-this.currentIndex * this.totalWidth)
          }
        },this.duration)

      },

      stopInterva () {
        window.clearInterval(this.timer)
      },

      /**
       * 拖动事件处理
       */

      // 开始
      touchStart(e){
        // console.log(e);
        // 正在滚动直接返回
        if (this.isScrolling) return
        // 停止计时器
        this.stopInterva()
        // 保存出发touchStart事件时的X轴的起始坐标
        this.moveStartX = e.touches[0].pageX
      },
      // 移动中
      touchMove(e){
        // 实时计算用户拖动div的距离
        this.currentX = e.touches[0].pageX;
        this.distance = this.currentX - this.moveStartX;
        // 获取当前swpierItem的初始坐标
        let currentPosition = this.currentIndex * this.totalWidth
        // 计算实际坐标，并操作Dom
        let movePosition = -currentPosition + this.distance
        this.setTransform(movePosition)
      },
      // 结束
      touchEnd(e){
        // Math.abs()函数返回一个值的绝对值 absolute value
        // 判断用户的拖动距离是否符合moveRatio的标准，并计算currentIndex下标
        let absDistance = Math.abs(this.distance)
        if(this.distance === 0) return
        else if (this.distance > 0 && absDistance > this.totalWidth * this.moveRatio) {
          this.currentIndex--
        } else if (this.distance < 0 && absDistance > this.totalWidth * this.moveRatio) {
          this.currentIndex++
        }
        // 移动到指定下标距离
        this.scrollContent(-this.currentIndex * this.totalWidth);
        // 重启定时器
        this.startInterval()
      },
    }
	}
</script>

<style scoped>
  #hy-swiper {
    overflow: hidden;
    position: relative;
  }
  .swiper {
    display: flex;
  }
  .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
  }
  .indi-item {
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin: 0 5px;
  }
  .indi-item.active {
    background-color: rgba(212,62,46,1.0);
  }
</style>
