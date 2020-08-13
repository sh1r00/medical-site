import Request from '~/common/requests.js'
export const state = () => ({
  globals: {
    header: {
      site_title: null,
      motto: null,
      favicon: {
        path: '',
      },
      logo: {
        path: '',
      },
    },
    contact_info: {
      phone: null,
      email: null,
      address: {
        street: null,
        city: null,
      },
    },
    social: {
      facebook: null,
      twitter: null,
      google_plus: null,
    },
    footer: {
      year: null,
      company_title: null,
    },
  },
  nav: {
    single: [],
    dropdown: [],
    permanent: [],
  },
  home: {
    headline: null,
    subheadline: null,
    blurb: {
      title: null,
      content: null,
      image: {
        path: '',
      },
    },
    blurbs: [],
    carousel: [],
    cta: {
      text: null,
      subText: null,
      buttonLink: null,
      buttonText: null,
    },
  },
  page: {
    title: null,
    content: null,
    seo_description: null,
  },
  pages: [],
  blog: {
    title: null,
    author: {
      title: null,
      image: {
        path: '',
      },
    },
    timestamp: null,
    hero: {
      path: '',
    },
    content: null,
    teaser: null,
  },
  blogs: [],
  faqs: {
    title: null,
    questions: [],
  },
  about: {
    title: null,
    content: null,
    seo_description: null,
  },
  contact: {
    title: null,
    content: null,
    contact_form: {
      success_message: null,
      error_message: null,
    },
    seo_description: null,
  },
  search: {
    title: null,
    content: null,
    search_result: {
      link: null,
      title: null,
      teaser: null,
    },
    search_results: [],
  },
})

export const getters = {
  globals(state) {
    return state.globals
  },
  nav(state) {
    return state.nav
  },
  home(state) {
    return state.home
  },
  about(state) {
    return state.about
  },
  blog(state) {
    return state.blog
  },
  blogs(state) {
    return state.blogs
  },
  page(state) {
    return state.page
  },
  faqs(state) {
    return state.faqs
  },
  contact(state) {
    return state.contact
  },
  search(state) {
    return state.search
  },
}

export const mutations = {
  SET_GLOBALS(state, payload) {
    state.globals = payload
  },
  SET_NAV(state, payload) {
    const nav = {
      single: [],
      dropdown: [],
      permanent: [],
    }

    for (let x = 0; x < payload.length; x++) {
      const navType = payload[x].value.type

      if (navType === 'single') {
        nav.single.push(payload[x])
      } else if (navType === 'dropdown') {
        nav.dropdown.push(payload[x])
      } else if (navType === 'permanent') {
        nav.permanent.push(payload[x])
      }
    }
    state.nav = nav
  },
  SET_GLOBAL_HEADER(state, payload) {
    state.globals.header = payload
  },
  SET_PAGES(state, payload) {
    state.home = payload.home
    state.about = payload.about
    state.contact = payload.contact
    state.pages = payload.page
    state.faqs = payload.faqs
  },
  SET_PAGE(state, payload) {
    state.page.title = payload.title
    state.page.content = payload.content
  },
  SET_BLOGS(state, payload) {
    state.blogs = payload
  },
  SET_BLOG(state, payload) {
    state.blog.title = payload.value.title
    state.blog.author.title = payload.value.author.title
    state.blog.author.image.path = payload.value.author.image.path
    state.blog.timestamp = payload.value.timestamp
    state.blog.hero.path = payload.value.hero.path
    state.blog.content = payload.value.content
    state.blog.teaser = payload.value.teaser
  },
}

export const actions = {
  getGlobals(context, params) {
    Request.getObjectsBy(params).then((res) => {
      context.commit('SET_GLOBALS', res)
      // Helper.arrayCleaner.apply(null, res.nav)
    })
  },
  getNav(context, params) {
    Request.getObjectsBy(params).then((res) => {
      context.commit('SET_NAV', res)
    })
  },
  getPages(context, params) {
    Request.getObjectsBy(params)
      .then((res) => {
        context.commit('SET_PAGES', res)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  },
  getBlogs(context, params) {
    Request.getObjectsBy(params).then((res) => {
      context.commit('SET_BLOGS', res)
    })
  },
  filterBlogs(context, params) {
    const blogs = context.state.blogs
    for (let x = 0; x < blogs.length; x++) {
      if (blogs[x].value.title === params) {
        const filteredBlog = blogs[x]
        context.commit('SET_BLOG', filteredBlog)
      }
    }
  },
  filterDynamicPages(context, params) {
    const currentTitle = params.split('-').join(' ').toLowerCase()
    const title = currentTitle + ' medical' + ' services'
    const dynamicPages = context.state.pages
    for (let x = 0; x < dynamicPages.length; x++) {
      const dynamicPageTitle = dynamicPages[x].value.title.toLowerCase()
      if (dynamicPageTitle === title) {
        const filteredPage = dynamicPages[x]
        context.commit('SET_PAGE', filteredPage.value)
      }
    }
  },
}
