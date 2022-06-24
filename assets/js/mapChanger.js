var mapEmbedSrc = {
  en: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F6PCYyp6I4ZlIjHlibLLq1Y%2FTransition%3Fnode-id%3D4%253A60',
  ko: 'https://naver.com',
  jp: 'https://yahoo.jp'
}

var iframeObject = document.getElementById('transportation__map')

function changeIframeEmbedSrc (lang) {
  iframeObject.src = mapEmbedSrc[lang]
}