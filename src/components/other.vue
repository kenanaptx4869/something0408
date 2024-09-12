<script setup>
// import { nextTick, ref } from 'vue';
// const url = ref('http://192.168.8.94:5173/')
// const show = ref(true)
// // https://objectstorageapi.cloud.sealos.top/resources/launchpad.svg
// // https://objectstorageapi.cloud.sealos.top/resources/launchpad.svg
// // https://cronjob.cloud.sealos.io/logo.svg
// // https://dbprovider.cloud.sealos.io/logo.svg
// // https://objectstorageapi.cloud.sealos.top/resources/kubepanel.svg
// // https://objectstorageapi.cloud.sealos.top/resources/cost-center.svg

// const clickHome = () => {
//   url.value = 'http://192.168.8.94:5173/'
// }

// const goToQingbao = () => {
//   url.value = 'http://192.168.8.111:8001/'
// }

// const goAIbaogao = () => {
//   url.value = 'http://192.168.8.111:3000'
// }

// const goToNext = () => {
//   url.value = 'http://192.168.8.111:5173/#/about'
//   // url.value = '/d.jpg'
// }

// const goToReact = () => {
//   url.value = 'http://192.168.8.111:5173/'
//   // url.value = '/a.png'
//   // const iframe = document.querySelector('.iframeContainer')
//   // iframe.style.height = '100%'
//   // iframe.style.width = '100%'
//   // iframe.onload = () => {
//   //   const iframeDocument = iframe.contentDocument  || iframe.contentWindow.document;
//   //   const styleElement = iframeDocument.createElement('style');
//   //   // styleElement.textContent = 'img { object-fit: cover; }';
//   //   iframeDocument.head.appendChild(styleElement)
//   // }
// }

// const goToAI = () => {
//   url.value = 'http://192.168.8.82:7860/'
// }

// const showCard = () => {
//   show.value = !show.value
// }
import { nextTick, ref } from "vue";
const url = ref(import.meta.env.VITE_INFO_URL);
const show = ref(true);
// https://objectstorageapi.cloud.sealos.top/resources/launchpad.svg
// https://cronjob.cloud.sealos.io/logo.svg
// https://dbprovider.cloud.sealos.io/logo.svg
// https://objectstorageapi.cloud.sealos.top/resources/kubepanel.svg
// https://objectstorageapi.cloud.sealos.top/resources/cost-center.svg

const website = ref([
  {
    url: import.meta.env.VITE_INFO_URL,
    // url: "http://192.168.8.94:5173/",
    id: "crime-visualization",
    show: true,
  },
  {
    url: import.meta.env.VITE_QSYSTEM_URL,
    id: "information-analysis",
  },
  {
    url: import.meta.env.VITE_REPORT_URL,
    id: "ai-report",
  },
  {
    url: import.meta.env.VITE_MODEL_URL,
    id: "model",
  },
  {
    url: import.meta.env.VITE_WULIAO_URL,
    id: "material",
  },
  {
    url: import.meta.env.VITE_YANGHAO_URL,
    id: "detection",
  },
]);
const goToVisualization = () => {
  website.value.forEach((item, index) => {
    if (index === 0) {
      item.show = true;
    } else {
      item.show = false;
    }
  });
};

const goToQingbao = () => {
  website.value.forEach((item, index) => {
    if (index === 1) {
      item.show = true;
    } else {
      item.show = false;
    }
  });
};

const goAIbaogao = () => {
  website.value.forEach((item, index) => {
    if (index === 2) {
      item.show = true;
    } else {
      item.show = false;
    }
  });
};

const goToAI = () => {
  website.value.forEach((item, index) => {
    if (index === 3) {
      item.show = true;
    } else {
      item.show = false;
    }
  });
};

const goTojiance = () => {
  website.value.forEach((item, index) => {
    if (index === 4) {
      item.show = true;
    } else {
      item.show = false;
    }
  });
};

const goTowuliao = () => {
  website.value.forEach((item, index) => {
    if (index === 5) {
      item.show = true;
    } else {
      item.show = false;
    }
  });
};

const showCard = () => {
  show.value = !show.value;
};
</script>

<template>
  <div class="other container">
    <div class="iframe">
      <transition-group name="iframe">
        <template v-for="item in website" :key="item.id">
          <iframe
            class="iframeContainer"
            :class="{show: item.show}"
            :src="item.url"
            allow="camera;microphone;clipboard-write;clipboard-read;"
          />
        </template>
      </transition-group>
    </div>
    <div class="bar">
      <div class="button" @click="showCard">
        <img src="../assets/arrow.svg" alt="" />
      </div>
    </div>
    <div class="cards" :class="{ hide: !show }">
      <div class="card" @click="goToVisualization">
        <div class="icon">
          <img src="../assets/home.svg" alt="" />
        </div>
      </div>
      <div class="card" @click="goToQingbao">
        <div class="icon">
          <img
            src="https://objectstorageapi.cloud.sealos.top/resources/launchpad.svg"
            class="logo"
          />
        </div>
      </div>
      <div class="card" @click="goAIbaogao">
        <div class="icon">
          <img
            src="https://objectstorageapi.cloud.sealos.top/resources/cost-center.svg"
            class="logo vue"
          />
        </div>
      </div>
      <div class="card" @click="goToAI">
        <div class="icon">
          <img src="https://cronjob.cloud.sealos.io/logo.svg" class="logo" />
        </div>
      </div>
      <div class="card" @click="goTowuliao">
        <div class="icon">
          <img src="https://dbprovider.cloud.sealos.io/logo.svg" class="logo" />
        </div>
      </div>
      <div class="card" @click="goTojiance">
        <div class="icon">
          <img
            src="https://objectstorageapi.cloud.sealos.top/resources/kubepanel.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="container">
    <iframe
      class='iframeContainer'
      :src='url'
      allow="camera;microphone;clipboard-write;clipboard-read;"
    />
    <div class="bar"> 
      <div class="button" @click="showCard">
        <img src="./assets/arrow.svg" alt="">
      </div>
    </div>
    <div class="cards" :class="{hide: !show}">
      <div class="card" @click="clickHome">
        <div class="icon">
        <img src="./assets/home.svg" alt="">
        </div>
      </div>
      <div class="card" @click="goToQingbao">
        <div class="icon">
        <img src="https://objectstorageapi.cloud.sealos.top/resources/launchpad.svg" class="logo" alt="Vue logo" />
        </div>
      </div>
      <div class="card" @click="goAIbaogao">
        <div class="icon">
        <img src="https://objectstorageapi.cloud.sealos.top/resources/cost-center.svg" class="logo vue" alt="Vue logo" />
        </div>
      </div>
      <div class="card" @click="goToAI">
        <div class="icon">
        <img src="https://cronjob.cloud.sealos.io/logo.svg" class="logo"/>
        </div>
      </div>
      <div class="card" @click="goToReact">
        <div class="icon">
        <img src="https://dbprovider.cloud.sealos.io/logo.svg" class="logo"/>
        </div>
      </div>
      <div class="card" @click="goToNext">
        <div class="icon">
          <img src="https://objectstorageapi.cloud.sealos.top/resources/kubepanel.svg" alt="">
        </div>
      </div>
    </div>
  </div> -->
</template>

<style lang="scss">
.other {
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
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(25px);
      box-shadow: rgba(0, 0, 0, 0.2) 0px 1.167px 2.333px 0px;
    }
    .iframe {
      flex: 1;
      width: 80%;
      min-width: 1000px;
      position: relative;
    }
    .iframeContainer {
      width: 100%;
      // height: 86%;
      border: none;
      opacity: 0;
      transition: opacity 0.2s ease-in-out 0s;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      body {
        height: 200px;
      }
      &::--webkit-scrollbar {
        display: none;
      }

      &.show {
        z-index: 9999;
        opacity: 1;
      }
    }
    .button {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      width: 48px;
      height: 16px;
      // position: absolute;
      color: var(--chakra-colors-white);
      transition: transform 200ms ease-in-out 0s, opacity 200ms ease-in-out 0s;
      cursor: pointer;
      background: rgba(220, 220, 224, 0.3);
      backdrop-filter: blur(80px) saturate(150%);
      box-shadow: rgba(12, 26, 67, 0.25) 0px 0px 20px -4px,
        rgba(24, 43, 100, 0.25) 0px 0px 1px 0px;
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
      // top: -80px;
      // transform: translate(-50%, 0px);
    }
    .title {
      width: 80%;
      background-color: #fff;
      display: flex;
    }
    .title-text {
      margin-left: 10px;
    }
  }
}

.list-enter-active,
.list-leave-active {
  transition: opacity  1s ease;
}
.list-enter-from,
.list-leave-to {
  // transform: scale(0);
  opacity: 0;
}
</style>
