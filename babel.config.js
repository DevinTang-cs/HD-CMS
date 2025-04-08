module.exports = {
  presets: [
    [
      '@babel/preset-env',
      '@babel/preset-typescript',
      {
        targets: {
          browsers: ['last 2 versions', '> 1%']
        }
      }
    ]
  ]
}
