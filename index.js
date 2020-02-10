try {
  if (process.env.SODIUM_NATIVE === 'disable') throw new Error('Use sodium-javascript')
  module.exports = require('sodium-native-nodejs-mobile')
} catch (err) {
  module.exports = require('sodium-javascript')
}
