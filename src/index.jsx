import * as $ from 'jquery'
import Post from '@models/Post'
import WebpackLogo from './assets/webpack-logo.png'
// import json from './assets/json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import './babel'
import React from 'react'
import {render} from 'react-dom'

import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'

const post = new Post('Webpack Post Title', WebpackLogo)
$('pre').html(post.toString())


const App = () => (
    <div className="container">
        <h1>Webpack Course</h1>
        <hr />
        <div className="logo"></div>
        <hr />
        <pre />
        <hr />
        <div className="box">
            <h2>less</h2>
        </div>
        <hr />
        <div className="card">
            <h2>scss</h2>
        </div>
    </div>
)

render(<App/>, document.getElementById('app'))

// console.log('post to string:', post.toString())

// console.log('JSON:', json)
// console.log('XML:', xml)
// console.log('CSV:', csv)
