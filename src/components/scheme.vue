<script setup>
import { nextTick } from "vue";
import { ref, onMounted } from "vue";
import homePng from '../assets/home.png'
import InfoQPng from '../assets/InfoQ.png'
import ReporterPng from '../assets/Reporter.png'
import TrainingPng from '../assets/Training.png'
import DataPng from '../assets/Data.png'
import DetectionPng from '../assets/detection.png'
import ArchonPng from '../assets/Archon.png'
const show = ref(true);
const remarkCaruselUp = ref()
const active = ref(0)
const iframeRef = ref({})
const activeName = ref('crime-visualization')
const eleList = ref([])
let timer = null
const website = ref([
  {
    url: import.meta.env.VITE_INFO_URL,
    label: 'Home',
    id: "crime-visualization",
    show: true,
    // right: true,
    select: true,
    icon: homePng
  },
  {
    url: import.meta.env.VITE_QSYSTEM_URL,
    id: "information-analysis",
    label: 'InfoQ',
    icon: InfoQPng
  },
  {
    url: import.meta.env.VITE_REPORT_URL,
    id: "ai-report",
    label: 'Insight',
    icon: ReporterPng
  },
]);
website.value.forEach(e => iframeRef.value[e.id] = null)
const goToVisualization = () => {
  remarkCaruselUp.value.setActiveItem('crime-visualization')
  active.value = 0
};

const goToQingbao = () => {
  remarkCaruselUp.value.setActiveItem('information-analysis')
  active.value = 1
};

const goAIbaogao = () => {
  remarkCaruselUp.value.setActiveItem('ai-report')
  active.value = 2
};

const goToAI = () => {
  remarkCaruselUp.value.setActiveItem('model')
  active.value = 3
};

const goTojiance = () => {
  remarkCaruselUp.value.setActiveItem('material')
  active.value = 4
};

const goTowuliao = () => {
  remarkCaruselUp.value.setActiveItem('detection')
  active.value = 5
};

const goToCaiji = () => {
  remarkCaruselUp.value.setActiveItem('collect')
  active.value = 5
}

const showCard = () => {
  show.value = !show.value;
};

const change = (next, prev) => {
  console.log(next, prev);
  // active.value = next
  const info = website.value[next]
  const prevIndex = website.value.findIndex(item => item.id === activeName.value)
  const status = Number(next) < prevIndex
  activeName.value = info.id
  website.value.forEach((item, t) => {
    if (t === Number(next)) {
      item.right = status
      setTimeout(() => {
        item.select = true
      }, 300)
    } else {
      item.right = false
      item.select = false
    }
  })
}
const getRiskSpreadRef = (el, id) => {
  if (el) {
    iframeRef.value[id] = el; 
  }
}

const handleClick = val => {
  const { index } = val
  const info = website.value[Number(index)]
  // const prevIndex = website.value.findIndex(item => item.id === activeName.value)
  // const status = Number(index) < prevIndex
  remarkCaruselUp.value.setActiveItem(info.id)
  // website.value.forEach((item, t) => {
  //   if (t === Number(index)) {
  //     item.right = status
  //     setTimeout(() => {
  //       item.select = true
  //     }, 500)
  //   } else {
  //     item.right = false
  //     item.select = false
  //   }
  // })
}
onMounted(() => {
  nextTick(() => {
    const themeMedia = window.matchMedia("(prefers-color-scheme: light)");
    if (themeMedia.matches) {
        console.log('light')
    } else {
        console.log('dark')
    }
    themeMedia.addListener(e => {
        if (e.matches) {
            console.log('light')
        } else {
            console.log('dark')
        }
    });
    console.log(iframeRef.value['ai-report'], 'iframeRef')
    iframeRef.value['information-analysis'].onload = () => {
      console.log('loaded')
      iframeRef.value['information-analysis'].contentWindow.postMessage('adsd', '*')
    }
    iframeRef.value['ai-report'].onload = () => {
      console.log('loaded')
      setTimeout(() => {
        iframeRef.value['ai-report'].contentWindow.postMessage('adsd', '*')
      }, 1000)
    }
  })
});
</script>

<template>
  <div class="scheme container">
    <div class="iframe">
      <el-carousel ref="remarkCaruselUp" trigger="click" :autoplay="false" height="100%" @change="change">
        <el-carousel-item v-for="item in website" :name="item.id" :key="item.id">
          <iframe
            class="iframeContainer"
            :class="{show: item.show}"
            :src="item.url"
            :ref="el => getRiskSpreadRef(el, item.id)"
            allow="camera;microphone;clipboard-write;clipboard-read;"
            title=""
          />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="btns">
      <div class="bar">
        <div class="button" @click="showCard">
          <img src="../assets/arrow.svg" alt="" />
        </div>
      </div>
      <div class="cards" :class="{ hide: !show }">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
          <!-- <el-tab-pane label="User" name="first">User</el-tab-pane>
          <el-tab-pane label="Config" name="second">Config</el-tab-pane>
          <el-tab-pane label="Role" name="third">Role</el-tab-pane> -->
          <el-tab-pane v-for="item in website" :key="item.id" :name="item.id">
            <template #label>
              <div class="modal" :class="{'selected': item.select, 'right':item.right}"></div>
              <span class="custom-tabs-label" :class="{'selected': item.select}">
                <img :src="item.icon" alt="">
                <span class="el-label">{{ item.label }}</span>
              </span>
            </template>
          </el-tab-pane>
        </el-tabs>
        <!-- <div class="card" @click="goToVisualization">
          <div class="icon">
            <img src="../assets/home.svg" alt="" />
          </div>
          <div v-show="active === 0" class="dot"></div>
        </div>
        <div class="card" @click="goToQingbao">
          <div class="icon">
            <img
              src="../assets/info.svg"
              class="logo"
              alt=""
            />
          </div>
          <div v-show="active === 1" class="dot"></div>
        </div>
        <div class="card" @click="goAIbaogao">
          <div class="icon">
            <img
              src="../assets/report.svg"
              class="logo vue"
              alt=""
            />
          </div>
          <div v-show="active === 2" class="dot"></div>
        </div>
        <div class="card" @click="goToAI">
          <div class="icon">
            <img src="../assets/model.svg" class="logo" alt=""/>
          </div>
          <div v-show="active === 3" class="dot"></div>
        </div> -->
        <!-- <div class="card"  @click="goTojiance">
          <div class="icon">
            <img src="../assets//organization.svg" class="logo" alt=""/>
          </div>
          <div v-show="active === 4" class="dot"></div>
        </div> -->
        <!-- <div class="card"  @click="goTowuliao">
          <div class="icon">
            <img
              src="../assets/yanghao.svg"
              alt=""
            />
          </div>
          <div v-show="active === 5" class="dot"></div>
        </div> -->
        <!-- <div class="card"  @click="goToCaiji">
          <div class="icon">
            <img
              src="../assets/caiji.svg"
              alt=""
            />
          </div>
          <div v-show="active === 5" class="dot"></div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.scheme {
  &.container {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;

    .cards {
      // display: flex;
      // border-radius: 12px;
      // border: 1px solid rgba(255, 255, 255, 0.07);
      // background: rgba(220, 220, 224, 0.3);
      // backdrop-filter: blur(80px) saturate(150%);
      // box-shadow: rgba(12, 26, 67, 0.25) 0px 0px 20px -4px,
      //   rgba(24, 43, 100, 0.25) 0px 0px 1px 0px;
      width: auto;
      // gap: 12px;
      // user-select: none;
      // padding-inline: 12px;
      // transition: all 200ms ease-in-out 0s, opacity 200ms ease-in-out 0s;
      // opacity: 1;
      margin-bottom: 10px;
      overflow: hidden;
      &.hide {
        display: none;
        height: 0;
      }
    }

    .el-carousel {
      height: 100%;
      width: 100%;
    }

    .el-carousel__container {
      height: 100%;
      width: 100%;
    }
    .el-carousel__item {
      height: 100%;
      width: 100%;
    }

    .el-carousel__indicators--horizontal {
      display: none;
    }

    .btns {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: fixed;
      bottom: 6px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 99999;
    }

    .img {
      width: 24px;
    }
    .card {
      display: flex;
      flex-direction: column;
      -webkit-box-align: center;
      align-items: center;
      cursor: pointer;
      padding-top: 6px;
      padding-bottom: 2px;
    }
    .icon {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      flex-direction: column;
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(25px);
      box-shadow: rgba(0, 0, 0, 0.2) 0px 1.167px 2.333px 0px;
    }
    .dot {
      width: 4px;
      height: 4px;
      background-color: #000;
      border-radius: 4px;
      margin-top: 4px;
    }
    .iframe {
      flex: 1;
      height: 100%;
      width: 100%;
      position: relative;
    }
    .iframeContainer {
      width: 100%;
      height: 100%;
      border: none;
      opacity: 1;
      transition: opacity 0.2s ease-in-out 0s;
      position: absolute;
      left: 0;
      top: 0;
      body {
        height: 200px;
      }
      &::--webkit-scrollbar {
        display: none;
      }
    }

    .el-carousel__arrow {
      z-index: 1000;
    }
    .button {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      width: 48px;
      height: 16px;
      color: var(--chakra-colors-white);
      transition: transform 200ms ease-in-out 0s, opacity 200ms ease-in-out 0s;
      cursor: pointer;
      background: rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(80px) saturate(150%);
      // box-shadow: rgba(12, 26, 67, 0.25) 0px 0px 20px -4px,
      //   rgba(24, 43, 100, 0.25) 0px 0px 1px 0px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      img {
        width: 12px;
        height: 12px;
        display: inline-block;
        line-height: 1em;
        flex-shrink: 0;
        color: currentcolor;
        vertical-align: middle;
        fill: none;
        transform: rotate(0deg);
        transition: transform 0.3s ease-in-out 0s;
      }
    }
    .title {
      width: 80%;
      background-color: #fff;
      display: flex;
    }
    .title-text {
      margin-left: 10px;
    }

    .el-tabs__nav-wrap:after {
      height: 0;
    }

    .el-tabs__item.is-active, .el-tabs__item:hover {
      color: #fff;
    }

    .el-tabs__item {
      color: #fff;
      position: relative;
      flex: 1;
      padding: 0;
    }

    .el-tabs {
	// width: 850px;
      height: 60px;
      background-color: rgba($color: #000000, $alpha: 0.8);
      border-radius: 14px;
      border: solid 1px rgba(255, 255, 255, 0.2);
      display: flex;
      align-items: center;
      padding: 0 16px;
    }

    .el-tabs__active-bar {
      display: none;
      // background-color: #fff;
      // height: 42px;
      // bottom: 10px;
      // background-color: #4259e8;
	    // border-radius: 10px;
      // padding: 0 20px;
      // box-sizing: content-box;
    }
    
    .el-tabs__header {
      margin: 0;
      height: 100%;
    }

    .el-tabs__nav-wrap {
      height: 100%;
      width: 400px;
    }

    .el-tabs__nav-scroll {
      height: 100%;
    }

    .el-tabs__nav {
      height: 100%;
      width: 400px;
      align-items: center;
    }

    .custom-tabs-label {
      display: flex;
      align-items: center;
      z-index: 9999;
      opacity: 0.6;

      &:hover {
        opacity: 1;
      }

      &.selected {
        opacity: 1;
      }
    }

    .modal {
      width: 0;
      height: 42px;
      background-color: #4259e8;
      position: absolute;
      border-radius: 10px;
      left: -100%;
      opacity: 0;
      transition: all 0.2s ease;
      // transform: translateX(0);
      &.right {
        left: 100%;
      }

      &.selected {
        left: 0;
        width: 100%;
        opacity: 1;
      }
    }

    .el-label {
      margin-left: 9px;
    }

    .el-tabs__content {
      display: none;
    }
  }
}
</style>
