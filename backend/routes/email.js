const express = require('express');
const { sendThatMail } = require('../controllers/sendMail');

const router = express.Router();

router.post('/', async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    const emailResult = await sendThatMail(to, subject, text);
    
    // Check the result and send an appropriate response
    if (emailResult.success) {
      res.status(200).json({ message: "Email sent successfully", messageId: emailResult.messageId });
    } else {
      res.status(500).json({ error: "Error sending email", errorMessage: emailResult.error });
    }
  } catch (error) {
    console.error("Error sending email:", error.message);
    res.status(500).json({ error: "Internal Server Error", errorMessage: error.message });
  }
});

module.exports = router;
