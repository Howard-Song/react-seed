/*
 * @Author: yoo
 * @Date: 2020-03-25 18:12:37
 * @LastEditTime: 2020-04-30 12:14:32
 * @LastEditors: yoo
 */
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  addDecoratorsLegacy
} = require('customize-cra');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    localIdentName: "[local]--[hash:base64:5]",
    modifyVars: {
      '@primary-color': '#1890ff'
    },
  }),
  addWebpackAlias({
    '@': resolve('src/')
  }),
  addDecoratorsLegacy()
);