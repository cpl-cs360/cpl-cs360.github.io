// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const debug = process.env.NODE_ENV !== 'production'

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withMDX({
   // Append the default value with md extensions
   pageExtensions: ['js', 'jsx', 'mdx'],
   assetPrefix: !debug ? '/' : '',
   images: {
    loader: 'akamai',
    path: '/',
  },
})

