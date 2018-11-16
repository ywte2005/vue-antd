module.exports = {
  "presets": [
    '@vue/app',
  ],
  "plugins": [
    "transform-vue-jsx",
    "@babel/plugin-transform-runtime",
    ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": "css" }]
  ]
}