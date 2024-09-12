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
const url = ref("http://192.168.8.94:5173/");
const show = ref(true);
// https://objectstorageapi.cloud.sealos.top/resources/launchpad.svg
// https://objectstorageapi.cloud.sealos.top/resources/launchpad.svg
// https://cronjob.cloud.sealos.io/logo.svg
// https://dbprovider.cloud.sealos.io/logo.svg
// https://objectstorageapi.cloud.sealos.top/resources/kubepanel.svg
// https://objectstorageapi.cloud.sealos.top/resources/cost-center.svg

const website = ref([
  {
    url: "http://192.168.8.111:5175/",
    // url: "http://192.168.8.94:5173/",
    id: "crime-visualization",
    show: true,
  },
  {
    url: "http://192.168.8.111:8001/",
    id: "information-analysis",
  },
  {
    url: "http://192.168.8.111:3000",
    id: "ai-report",
  },
  {
    url: "http://192.168.8.114:7860/",
    id: "model",
  },
  {
    url: "http://192.168.8.111:5174/",
    id: "material",
  },
  {
    url: "http://192.168.8.111:5174/#/about",
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
  <router-view></router-view>
</template>

<style lang="scss">
</style>
