import * as regs from './module/regs'
import { version } from './package.json'

const tools = {
    ...regs
}
console.log('tools: ', tools)
console.log('version ' + version)

export default tools