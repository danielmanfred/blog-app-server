export default {
  jwt: {
      secret: 'ebv5itkiwq7x60v4m034', // Code to verify signature
      session: { session: false }
  },
  mongodb: { // Database hosted on Mlab
      mlab: 'mongodb://manfred:blog123@ds149743.mlab.com:49743/usersblogms'
  },
  server: { // Setting port
      port: process.env.PORT || 4001
  }
}