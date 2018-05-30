// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/pp-macbookpro/WebAppProjects/Others/Portfolio/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/pp-macbookpro/WebAppProjects/Others/Portfolio/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/pp-macbookpro/WebAppProjects/Others/Portfolio/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/pp-macbookpro/WebAppProjects/Others/Portfolio/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/pp-macbookpro/WebAppProjects/Others/Portfolio/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/pp-macbookpro/WebAppProjects/Others/Portfolio/src/pages/index.js")),
  "component---src-pages-skills-js": preferDefault(require("/Users/pp-macbookpro/WebAppProjects/Others/Portfolio/src/pages/skills.js")),
  "component---src-pages-thankyou-js": preferDefault(require("/Users/pp-macbookpro/WebAppProjects/Others/Portfolio/src/pages/thankyou.js"))
}

exports.json = {
  "layout-index.json": require("/Users/pp-macbookpro/WebAppProjects/Others/Portfolio/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/pp-macbookpro/WebAppProjects/Others/Portfolio/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/pp-macbookpro/WebAppProjects/Others/Portfolio/.cache/json/404.json"),
  "about.json": require("/Users/pp-macbookpro/WebAppProjects/Others/Portfolio/.cache/json/about.json"),
  "contact.json": require("/Users/pp-macbookpro/WebAppProjects/Others/Portfolio/.cache/json/contact.json"),
  "index.json": require("/Users/pp-macbookpro/WebAppProjects/Others/Portfolio/.cache/json/index.json"),
  "skills.json": require("/Users/pp-macbookpro/WebAppProjects/Others/Portfolio/.cache/json/skills.json"),
  "thankyou.json": require("/Users/pp-macbookpro/WebAppProjects/Others/Portfolio/.cache/json/thankyou.json"),
  "404-html.json": require("/Users/pp-macbookpro/WebAppProjects/Others/Portfolio/.cache/json/404-html.json")
}