<template>
  <div id="target" class="overflow-hidden font-sans">
    <section
      class="fixed left-0 top-0 bottom-0 overflow-y-auto bg-white p-8 w-2/3"
    >
      <h1 class="font-black mb-8 ml-2 pb-2">
        <a
          href="/"
          class="no-underline text-black no-underline text-black transition text-geen"
        >
          <img
            src="/images/logo.svg"
            class="inline-block mr-2 w-10 -mb-2"
          />Stitches for tailblocks</a
        >
      </h1>
      <div class="border-l-2 mx-2 mb-3 js-filter pl-3 border-black">
        <button
          v-for="{ title, filter } in buttons"
          :key="filter"
          class="text-black font-semibold hover:text-green-500 px-2 py-1 transition-normal menu-button"
          @click="itemFilter = filter"
        >
          {{ title }}
        </button>
      </div>
      <div
        v-dragula="items"
        :style="gHeight ? 'height: ' + gHeight : ''"
        class="flex flex-wrap flex-col items-start justify-start js-snippets"
        drake="first"
      >
        <figure
          v-for="item in items"
          v-show="itemFilter === 'js-snippet' || itemFilter === item.type"
          :key="item.image"
          class="js-snippet w-1/2 p-2"
        >
          <img
            :src="`/images/${item.image}.png`"
            alt=""
            class="border border-gray-300 cursor-move hover:shadow transition-normal hover:translate-y-1 hover:border-black"
          />
        </figure>
      </div>
    </section>
    <section
      class="bg-gray-300 p-8 pb-0 w-1/3 flex flex-col fixed top-0 bottom-0 right-0"
    >
      <header class="mb-4">
        <button
          class="shadow text-center py-3 px-4 bg-black w-full hover:text-green-500 text-white js-download transition-normal"
        >
          Generate HTML File with Functional CSS
        </button>
      </header>
      <div
        v-dragula="itemsDest"
        drake="first"
        class="flex flex-col flex-1 border js-droppable border-gray-300 overflow-y-auto"
      >
        <figure
          v-for="item in itemsDest"
          :key="item.id"
          class="js-snippet w-1/2 p-2 vue-element relative"
        >
          <div
            class='bg-white hidden absolute top-0 left-0 js-delete-btn px-4 py-2 shadow'
            @click="removeItem(item)"
          ><i class='far fa-trash-alt pointer-events-none'></i></div>
          <img
            :src="`/images/${item.image}.png`"
            alt=""
            class="border border-gray-300 cursor-move hover:shadow transition-normal hover:translate-y-1 hover:border-black"
          />
        </figure>
      </div>
      <div class="text-center text-black text-xs py-2">
        Stitches by
        <a
          class="textgreene hover:ugreend text-green-500"
          target="_blank"
          href="https://amie-chen.com"
          >Amie Chen</a
        >, tailblocks by
        <a
          class="textgreene hover:ugreend text-green-500"
          target="_blank"
          href="https://mertjf.github.io/tailblocks/"
          >Mert Cukuren</a
        >
        , Forked by<a
          class="textgreene hover:ugreend text-green-500"
          target="_blank"
          href="https://maienschein.tech"
          >Fabio Maienschein</a
        >
      </div>
      <div class="bg-white hidden fixed js-delete-btn px-4 py-2 shadow">
        Delete <i class="far fa-trash-alt pointer-events-none"></i>
      </div>
    </section>
  </div>
</template>

<script>
import imagesLoaded from "imagesloaded";
export default {
  data() {
    return {
      itemFilter: 'js-snippet',
      drag: false,
      gHeight: '',
      itemsDest: [],
      items: [
        { image: 'blog-1', width: '1/2', type: 'st-blog' },
        { image: 'blog-2', width: '1/2', type: 'st-blog' },
        { image: 'blog-3', width: '1/2', type: 'st-blog' },
        { image: 'blog-4', width: '1/2', type: 'st-blog' },
        { image: 'blog-5', width: '1/2', type: 'st-blog' },
        { image: 'contact-1', width: '1/2', type: 'st-contact' },
        { image: 'contact-2', width: '1/2', type: 'st-contact' },
        { image: 'contact-3', width: '1/2', type: 'st-contact' },
        { image: 'content-1', width: '1/2', type: 'st-content' },
        { image: 'content-2', width: '1/2', type: 'st-content' },
        { image: 'content-3', width: '1/2', type: 'st-content' },
        { image: 'content-4', width: '1/2', type: 'st-content' },
        { image: 'content-5', width: '1/2', type: 'st-content' },
        { image: 'content-6', width: '1/2', type: 'st-content' },
        { image: 'content-7', width: '1/2', type: 'st-content' },
        { image: 'content-8', width: '1/2', type: 'st-content' },
        { image: 'cta-1', width: '1/2', type: 'st-cta' },
        { image: 'cta-2', width: '1/2', type: 'st-cta' },
        { image: 'cta-3', width: '1/2', type: 'st-cta' },
        { image: 'cta-4', width: '1/2', type: 'st-cta' },
        { image: 'ecommerce-1', width: '1/2', type: 'st-ecommerce' },
        { image: 'ecommerce-2', width: '1/2', type: 'st-ecommerce' },
        { image: 'ecommerce-3', width: '1/2', type: 'st-ecommerce' },
        { image: 'feature-1', width: '1/2', type: 'st-feature' },
        { image: 'feature-2', width: '1/2', type: 'st-feature' },
        { image: 'feature-3', width: '1/2', type: 'st-feature' },
        { image: 'feature-4', width: '1/2', type: 'st-feature' },
        { image: 'feature-5', width: '1/2', type: 'st-feature' },
        { image: 'feature-6', width: '1/2', type: 'st-feature' },
        { image: 'feature-7', width: '1/2', type: 'st-feature' },
        { image: 'feature-8', width: '1/2', type: 'st-feature' },
        { image: 'footer-1', width: '1/2', type: 'st-footer' },
        { image: 'footer-2', width: '1/2', type: 'st-footer' },
        { image: 'footer-3', width: '1/2', type: 'st-footer' },
        { image: 'footer-4', width: '1/2', type: 'st-footer' },
        { image: 'footer-5', width: '1/2', type: 'st-footer' },
        { image: 'gallery-1', width: '1/2', type: 'st-gallery' },
        { image: 'gallery-2', width: '1/2', type: 'st-gallery' },
        { image: 'gallery-3', width: '1/2', type: 'st-gallery' },
        { image: 'header-1', width: '1/2', type: 'st-header' },
        { image: 'header-2', width: '1/2', type: 'st-header' },
        { image: 'header-3', width: '1/2', type: 'st-header' },
        { image: 'header-4', width: '1/2', type: 'st-header' },
        { image: 'hero-1', width: '1/2', type: 'st-hero' },
        { image: 'hero-2', width: '1/2', type: 'st-hero' },
        { image: 'hero-3', width: '1/2', type: 'st-hero' },
        { image: 'hero-4', width: '1/2', type: 'st-hero' },
        { image: 'hero-5', width: '1/2', type: 'st-hero' },
        { image: 'pricing-1', width: '1/2', type: 'st-pricing' },
        { image: 'pricing-2', width: '1/2', type: 'st-pricing' },
        { image: 'pricing-3', width: '1/2', type: 'st-pricing' },
        { image: 'statistic-1', width: '1/2', type: 'st-statistic' },
        { image: 'statistic-2', width: '1/2', type: 'st-statistic' },
        { image: 'statistic-3', width: '1/2', type: 'st-statistic' },
        { image: 'step-1', width: '1/2', type: 'st-step' },
        { image: 'step-2', width: '1/2', type: 'st-step' },
        { image: 'step-3', width: '1/2', type: 'st-step' },
        { image: 'team-1', width: '1/2', type: 'st-team' },
        { image: 'team-2', width: '1/2', type: 'st-team' },
        { image: 'team-3', width: '1/2', type: 'st-team' },
        { image: 'testimonial-1', width: '1/2', type: 'st-testimonial' },
        { image: 'testimonial-2', width: '1/2', type: 'st-testimonial' },
        { image: 'testimonial-3', width: '1/2', type: 'st-testimonial' },
      ],
    }
  },
  computed: {
    buttons() {
      return [
        { title: 'All', filter: 'js-snippet' },
        { title: 'Blog', filter: 'st-blog' },
        { title: 'Contact', filter: 'st-contact' },
        { title: 'Content', filter: 'st-content' },
        { title: 'CTA', filter: 'st-cta' },
        { title: 'E-Commerce', filter: 'st-ecommerce' },
        { title: 'Feature', filter: 'st-feature' },
        { title: 'Footer', filter: 'st-footer' },
        { title: 'Gallery', filter: 'st-gallery' },
        { title: 'Header', filter: 'st-header' },
        { title: 'Hero', filter: 'st-hero' },
        { title: 'Pricing', filter: 'st-pricing' },
        { title: 'Statistic', filter: 'st-statistic' },
        { title: 'Step', filter: 'st-step' },
        { title: 'Team', filter: 'st-team' },
        { title: 'Testimonial', filter: 'st-testimonial' },
      ]
    },
  },
  watch: {
    itemsDest(items, oldItems) {
      this.itemsDest.forEach((item) => {
        if (!item.id) {
          item.id = Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, '')
            .substr(0, 5)
          const badElement = document.querySelector(
            '.js-droppable > .js-snippet:not(.vue-element)'
          )
          badElement.remove()
        }
      })
    },
  },
  created() {
    if (this.$dragula) {
      const service = this.$dragula.$service
      service.options('first', {
        revertOnSpill: true,
        copySortSource: false,
        copy(el, source) {
          return source.classList.contains('js-snippets')
        },
        accepts(el, target, source, sibling) {
          return !target.classList.contains('js-snippets')
        },
      })
    }
  },
  mounted() {
    if (typeof window !== 'undefined') {
      const snippets = document.querySelector(".js-snippets");
      ['resize', 'load'].forEach((event) => {
        window.addEventListener(event, () => {
          imagesLoaded(snippets, () => {
            this.masonry('.js-snippets', '.js-snippet', 0, 2, 2, 1)
          })
        })
      })
    }
  },
  methods: {
    removeItem(item) {
      this.itemsDest = this.itemsDest.filter(dest => dest !== item)
    },
    masonry(grid, gridCell, gridGutter, dGridCol, tGridCol, mGridCol) {
      const gc = document.querySelectorAll(gridCell)
      const gcLength = gc.length
      let gHeight = 0
      for (let i = 0; i < gcLength; ++i) {
        gHeight += gc[i].offsetHeight + parseInt(gridGutter)
      }
      if (window.screen.width >= 1024) {
        this.gHeight =
          gHeight / dGridCol + gHeight / (gcLength + 1) + 100 + 'px'
      } else if (window.screen.width < 1024 && window.screen.width >= 768) {
        this.gHeight = gHeight / tGridCol + gHeight / (gcLength + 1) + 'px'
      } else {
        this.gHeight = gHeight / mGridCol + gHeight / (gcLength + 1) + 'px'
      }
    },
  },
}
</script>

<style lang="scss">
.drag-image {
}
.js-droppable > .js-snippet {
  width: 100%;
  padding: 0;
}

.js-droppable > .js-snippet:hover > .js-delete-btn {
  display: block;
}

.js-droppable > .js-snippet > img:hover {
  transform: none;
  border-color: #dae1e7;
}
.menu-button::after {
  content: " ";
  display: inline-block;
}
</style>
