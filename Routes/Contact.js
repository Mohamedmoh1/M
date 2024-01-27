const express = require('express')
const Contact = require('../Models/Contact')

const contactRouter = express.Router()

contactRouter.post('/addContact',async(req,res)=>{
      try {

          
          const found = await Contact.findOne({email : req.body.email})

         if(found){
           return res.status(400).send('Email already used')
         }        
          const newContact = new contact(req.body)

          await newContact.save()

          res.status(200).send({Msg : "Contact added",newContact})
      } catch (error) {
          res.status(500).send('Could not add Contact')
      }
    }
)


contactRouter.get('/getContacts',async(req,res)=>{
    try {
        const Contacts = await Contact.find()

        res.status(200).send({Msg : "Contact List",Contacts})
    } catch (error) {
        res.status(500).send('could not get Contacts')
    }
})

contactRouter.delete('/deleteContact/:id',async(req,res)=>{
    try {
        const {id} = req.params

        await Contact.findByIdAndDelete(id)

        res.status(200).send('Contact deleted')
    } catch (error) {
        res.status(500).send('could not get Contacts')
    }
})

contactRouter.put('/updateContact/:id',async(req,res)=>{
    try {
        const {id} = req.params

       await Contact.findByIdAndUpdate(id,{$set : req.body})

       res.status(200).send('Contact updated')
    } catch (error) {
        res.status(500).send('Could not update Contacts')
    }
})

contactRouter.get('getOneContact/:id',async(req,res)=>{
    try {
        const {id} = req.params

        const contactf = await Contact.findById(id)

        res.status(200).send({Msg : "Countact found", contactF})
    } catch (error) {
        res.status(500).send('Could not get Contact')
    }
})


module.exports = contactRouter