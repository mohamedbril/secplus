//api/des
import * as Constants from '../../utils/constants'

export default function handler(req, res) {
    if(req.method == 'GET'){
        const CryptoJS = require('crypto-js')
        
        const query = req.query
        const {plaintext, key, mode, triple, ciphertext, iv} = query
        const cryptoObj = triple === 'true' ? CryptoJS.TripleDES : CryptoJS.DES
        
        if(!Constants.modesMap.has(mode)){
            res.status(400).send({
                message: `Specified mode '${mode}' not supported by DES`
            })
        }else{
            const keyHex = CryptoJS.enc.Utf8.parse(key)
            const ivHex = iv == null ? CryptoJS.enc.Hex.parse('') : CryptoJS.enc.Hex.parse(CryptoJS.enc.Utf8.parse(iv).toString(CryptoJS.enc.Hex));
            const modeObj = Constants.modesMap.get(mode)
            
            if(ciphertext == null){ //we have to encrypt
                try{
                    const encrypted = cryptoObj.encrypt(plaintext, keyHex, {
                        iv: ivHex,
                        mode: modeObj,
                        padding: CryptoJS.pad.Pkcs7
                    })
        
                    res.status(200).json({ 
                        'plaintext': plaintext, 
                        'key': key, 
                        'ciphertext': encrypted.toString(),
                        'mode': mode,
                        'padding': 'Pkcs7'
                    })
                }catch(error){
                    res.status(400).send({
                        message: error.toString()
                    })
                }
            }else{ //we have to decrypt
                try{
                    const decrypted = cryptoObj.decrypt({
                        ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
                    }, keyHex, {
                        iv: ivHex,
                        mode: modeObj,
                        padding: CryptoJS.pad.Pkcs7
                    })

                    res.status(200).json({
                        'plaintext': decrypted.toString(CryptoJS.enc.Utf8),
                        'key': key,
                        'ciphertext': ciphertext,
                        'mode': mode,
                        'padding': 'Pkcs7'
                    })
                }catch(error){
                    res.status(400).send({
                        message: error.toString()
                    })
                }
            }
        }
    }
}
