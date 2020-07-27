import * as $ from 'jquery'
import Post from '@models/Post'
import WebpackLogo from './assets/webpack-logo.png'
// import json from './assets/json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import './babel'
import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'

const post = new Post('Webpack Post Title', WebpackLogo)

$('pre').html(post.toString())

// console.log('post to string:', post.toString())

// console.log('JSON:', json)
// console.log('XML:', xml)
// console.log('CSV:', csv)
