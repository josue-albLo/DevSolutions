import {getConnection} from './conection'
import {query} from './querys'

export default {
    connection: getConnection(),
    query: query
}