import Vue from 'vue'
import fileDownload from 'js-file-download'

const stitchesHTML = (html) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.4.6/tailwind.min.css">
    <title>Stitches for tailblocks</title>
  </head>
  <body>${html}</body>
</html>`;


Vue.use({
  install(vueInstance, options){
    vueInstance.prototype.$download = function(list) {
      Promise.all(
        list.map((template) =>
          fetch(`templates/${template}.html`).then((response) => response.text())
        )
      ).then((templateString) => {
        const html = templateString.join("");
        fileDownload(stitchesHTML(html), "stitches.html");
      });
    }
  }
})
