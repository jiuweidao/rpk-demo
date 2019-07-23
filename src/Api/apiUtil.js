/** @format */

import fetch from '@system.fetch'
import prompt from '@system.prompt'

export const API_TYPE = {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
}
export default {
        query(url, type, data, header = {}) {
        if (header) {
            header = Object.assign({}, {})
        }
        fetch.fetch({
            url: url,
            data: data,
            responseType: 'json',
            method: type
        }).then(res => {

            console.log(`res.data: `, res.data)
            console.log(`json res.data: `, JSON.stringify(res.data))
            console.log(`the status code of the response: `, JSON.stringify(res.data.data))

        }).catch(error => {
            console.log(`handling fail, errMsg = ${error.data}`)
            console.log(`handling fail, errCode = ${error.code}`)
        })
    },


}

