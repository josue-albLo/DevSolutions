import {getConnection} from './conection.js'
import {query} from './querys.js'

export default {
    connection: getConnection(),
    query: query
}