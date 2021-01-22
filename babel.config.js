module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins:[
    [
      'import',{
        'libraryName':'ant-design-vue',
        'libraryDirectory':'es',
        'style':'css'
      }
    ],
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import'
  ]
}
