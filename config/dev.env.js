'use strict'
const { merge } = require('webpack-merge')
const prodEnv = require('./prod.env')
const path = require('path')

// Load .env file from project root
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_CESIUM_TOKEN: JSON.stringify(process.env.VUE_APP_CESIUM_TOKEN || '')
})
