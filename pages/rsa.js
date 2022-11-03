import Head from 'next/head'
import React from 'react'
import Layout from '../components/layout/Layout'
import AlgorithmHeader from '../components/ui/AlgorithmHeader'

export default function RSA() {
  return (
    <Layout>
        <Head>
            <title>RSA | encryptia</title>
        </Head>

        <AlgorithmHeader name="Rivest-Shamir-Adleman">
           RSA is a public-key cryptosystem that is widely used for secure data transmission. It is also one of the oldest. 
           The acronym "RSA" comes from the surnames of Ron Rivest, Adi Shamir and Leonard Adleman, who publicly described the algorithm in 1977.<br />
           In a public-key cryptosystem, the encryption key is public and distinct from the decryption key, which is kept secret (private). An RSA user creates and publishes a public key based on two large prime numbers, along with an auxiliary value. 
           ùThe prime numbers are kept secret. Messages can be encrypted by anyone, via the public key, but can only be decoded by someone who knows the prime numbers. <br /> <br />

           The security of RSA relies on the practical difficulty of factoring the product of two large prime numbers, the "factoring problem". Breaking RSA encryption is known as the RSA problem. Whether it is as difficult as the factoring problem is an open question. There are no published methods to defeat the system if a large enough key is used.
           RSA is a relatively slow algorithm. Because of this, it is not commonly used to directly encrypt user data. More often, RSA is used to transmit shared keys for symmetric-key cryptography, which are then used for bulk encryption–decryption.
        </AlgorithmHeader>

        <div className='max-w-5xl m-auto'>
            <div className='grid grid-cols-0 sm:grid-cols-2 gap-6 mb-5'>
                <div className='item'>
                    <label className='block mb-3 text-slate-300'>Public Key</label>
                    <textarea className='bg-transparent border border-solid rounded-lg border-slate-500 w-[100%] p-2 h-28 max-h-52'>

                    </textarea>
                </div>
                <div className='item'>
                    <label className='block mb-3 text-slate-300'>Private Key</label>
                    <textarea className='bg-transparent border border-solid rounded-lg border-slate-500 w-[100%] p-2 h-28 max-h-52'>

                    </textarea>
                </div>
            </div>

            <div className='text-center'>
                <select className='inline text-slate-200 px-1 py-2 border border-solid border-slate-500 rounded-lg bg-slate-900 mr-3 mb-5 md:mb-0'>
                    <option>512 bit</option>
                    <option>1024 bit</option>
                    <option>2048 bit</option>
                    <option>3072 bit</option>
                    <option>4096 bit</option>
                </select>

                <button className='inline border border-solid border-gray-600 rounded-lg bg-gray-800 hover:text-white hover:bg-gray-700 px-3 sm:px-10 py-2 font-medium m-auto'>
                    Generate Keys
                </button>
            </div>

            <div className='mt-7'>
                <label className='block mb-3 text-slate-300'>Plaintext</label>
                <textarea className='bg-transparent border border-solid rounded-lg border-slate-500 w-[100%] p-2 h-28 max-h-52 mb-5'>

                </textarea>

                <div className='text-center mb-5 grid grid-cols-1 md:grid-cols-3 w-2/3 lg:w-1/2 m-auto gap-y-5'>
                    <select className='inline text-slate-200 px-1 py-2 border border-solid border-slate-500 mx-3 rounded-lg bg-slate-900'>
                        <option>Public Key</option>
                        <option>Private Key</option>
                    </select>

                    <button className='inline border border-solid border-gray-600 rounded-lg bg-gray-800 hover:text-white hover:bg-gray-700 px-10 py-2 font-medium m-auto'>
                        Encrytpt
                    </button>

                    <button className='inline border border-solid border-gray-600 rounded-lg bg-gray-800 hover:text-white hover:bg-gray-700 px-10 py-2 font-medium m-auto'>
                        Decrypt
                    </button>
                </div>

                <label className='block mb-3 text-slate-300'>Ciphertext</label>
                <textarea className='bg-transparent border border-solid rounded-lg border-slate-500 w-[100%] p-2 h-28 max-h-52 mb-5'>

                </textarea>
            </div>
        </div>
    </Layout>
  )
}