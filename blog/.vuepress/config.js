module.exports = {
  // title: "My Blog",
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
      { label: "Home", path: "/about", icon: "person" },
      { label: "Categorias", path: "/tag", icon: "category" },
      { label: "Sobre", path: "/tag", icon: "category" },
    ],
    footer: {
      // text: "Text in footer",
    },
    social: {
      twitter: "https://twitter.com/gabrielwilleman",
      linkedin: "https://www.linkedin.com/in/gabrielwillemann",
      github: "https://github.com/",
    },
    tags: {
      'frontmatter': "Front Matter",
      'vuepress': "VuePress",
      'nodejs': "Node.js",
    },
    locales: {
      default: "en", // or 'pt-BR'
    },
    configPluginBlog: {
      // ...
    },
  },
};
