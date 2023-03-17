const express = require('express')
const bodyParser = require('body-parser')
// heroku not working without this line
const ejs = require('ejs')
const nodemailer = require('nodemailer')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// });

app.post('/', (req, res) => {
  console.log('post connected')
  const email = req.body.email
  const fName = req.body.fName
  const lName = req.body.lName
  const message = req.body.message

  // test nodemailer

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jondoeNoviSad@gmail.com',
      pass: 'jondoe12345',
    },
  })

  var mailOptions = {
    from: 'jondoeNoviSad@gmail.com',
    to: 'ilija009@gmail.com',
    subject: 'Personal site :: ilija r.',
    // text: firstName + lastName + email + phone + message,
    html: `
            <h1>You have got new message</h1>
            <p>Message from: ${fName} ${lName}</p>
            <p>email: ${email}</p>
            <p>Message: ${message}</p>
        `,
    // NOTE TO MYSELF: ako imas html u mailOptions, onda text ne shalje... COMMENT
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })

  // end test nodemailer
  // SETTINGS
  //google account > security > less secure app access

  // WHAT WILL HAPPEN WHEN USER SUBMIT FORM
  //   stay on same page without refreshing
  res.status(204).send()
})

app.listen(process.env.PORT || 4000, () =>
  console.log('PERSONAL SITE:: server running at PORT 4000...'),
)
