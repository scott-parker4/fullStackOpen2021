const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const url = `mongodb+srv://FullstackAdmin:LkM3t4fns7DR7zu@cluster0.t45jn.mongodb.net/phonebook-app?retryWrites=true&w=majority`

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    unique: true
  },
  number: {
    type: String,
    minLength: 8,
  }
})

personSchema.plugin(uniqueValidator)

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)