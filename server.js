const express = require("express")
const { OAuth2Client } = require("google-auth-library")
const clientid = "165480600397-7ok712iq2lhqb827lv68v96jpmojnpb5.apps.googleusercontent.com"





const client = new OAuth2Client(clientid)

const app = express()

app.use(express.json())


const users = []

app.post("/api/google/login", async (req, res) => {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: clientid,
    })
    const {name, email, picture} = ticket.getPayload()
})