/** @format */

import apiUtil from './apiUtil.js'
export default {

    login(data) {
    apiUtil.query('http://news.baidu.com/widget', 'GET',    data,)
   }

}

