export default {
  mongodb: { // Database hosted on Mlab
      mlab: 'mongodb://manfred:blog456@ds039504.mlab.com:39504/postsblogms'
  },
  server: { // Setting port
      port: process.env.PORT || 4002
  }
}