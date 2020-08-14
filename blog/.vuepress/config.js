module.exports = {
  title: "My Blog",
  // theme: 'vuepress-theme-material-free',
  themeConfig: {
    logo: "/assets/img/my-logo.png",
    authors: {
      "Gabriel Willemann": {
        image: "/assets/img/gabrielwillemann.jpeg",
        jobTitle: "Software Full Stack Developer",
      },
    },
    nav: [
      { label: "About the author", path: "/about", icon: "person" },
      { label: "Tags", path: "/tag", icon: "category" },
    ],
    footer: {
      text: "Text in footer",
    },
    social: {
      twitter: "https://twitter.com/gabrielwilleman",
      linkedin: "https://www.linkedin.com/in/gabrielwillemann",
      github: "https://github.com/gabrielwillemann/",
    },
    tags: {
      vuejs: "Vue.js",
      "ruby-on-rails": "Ruby on Rails",
      nodejs: "Node.js",
    },
    locales: {
      default: "en", // or 'pt-BR'
    },
    configPluginBlog: {
      // ...
    },
  },
};
