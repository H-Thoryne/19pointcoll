# Replace splitChunks!
### Disables output file splitting. Very important.
#### Location: "/node_modules/react-scripts/config/webpack.config.js"

```javascript
// Automatically split vendor and commons
// https://twitter.com/wSokra/status/969633336732905474
// https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
splitChunks: {
  cacheGroups: {
    default: false
  },
},
// Keep the runtime chunk separated to enable long term caching
// https://twitter.com/wSokra/status/969679223278505985
runtimeChunk: false,
```




- TODO: Add overlays (Elfogyott, utolsó darabok, stb...) to Productcard
- FIXME: if brosi IP kötőjel resulting in Error: NaN (make it 0)
