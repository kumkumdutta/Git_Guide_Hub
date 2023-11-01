require('dotenv').config()
 function verifySignature(signature, payload) {
    const secret = process.env.Secret 
    const hash = 'sha1=' + crypto.createHmac('sha1', secret).update(JSON.stringify(payload)).digest('hex');
    return crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(signature));
  }

  module.exports={
    verifySignature
  }
  