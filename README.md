# Nuxt Stitches for tailblocks

Special thanks to [LPX55](https://github.com/LPX55) for funding this project.

A simple, fast web app to generate html based on a collection of commonly used user interface patterns.

Drag & Drop elements to visually create a template for your landing page!

Based on [Stitches](https://stitches.hyperyolo.com) and [tailblocks](https://mertjf.github.io/tailblocks/)
and [https://stitches-for-tailblocks.netlify.app/](https://stitches-for-tailblocks.netlify.app/) .

## 🎏 Live Site: [https://nekdolan.github.io/nuxt-stitches-for-tailblocks/](https://nekdolan.github.io/nuxt-stitches-for-tailblocks/)

[![Stitches-for-tailblocks.png](https://i.postimg.cc/zG500VVZ/Stitches-for-tailblocks.png)](https://postimg.cc/HVZwLWwB)

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Make your own templates

Feel free to take this project and re-factor to your need! Not everyone wants these templates for their projects. Here are the steps:

1. Run the project locally (see the section above)
2. Add your own HTML template (with tailwind.css classes) into the `templates` folder
3  Add a filter for it in the `index.vue`.
4. Done! refresh to check out your own templates.

## License

MIT © [Amie Chen](https://amie-chen.com) - Stiches Template Generator

MIT © [Mert Cukuren](https://mertjf.github.io/tailblocks/) - tailblocks Ready-to-use Tailwind Blocks

MIT © [Fabio Maienschein](https://maienschein.tech/) - putting those two together for simplicity

MIT © [nekdolan](https://github.com/nekdolan) - convert it all to nuxt
