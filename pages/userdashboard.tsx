import Head from 'next/head'
import Image from 'next/image'
import { global } from 'styled-jsx/css'
import CenterSquare from 'components/bars/layouts/CenterSquare'
import GoogleRegister from 'components/bars/buttons/GoogleRegister'
import DefaultBackground from 'components/bars/layouts/DefaultBackground'
import ImageButton from 'components/bars/buttons/ImageButton'
import LineWithText from 'components/bars/text/linewithtext'
import Label from 'components/bars/text/Label'
import Checkbox from 'components/bars/text/checkbox'
import RelowButton from 'components/bars/buttons/RelowButton'

export default function Register() {
  return (
    <>

      <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="shortcut icon" type="image/png" href="./public/logo.png" />
      </Head> 

  <DefaultBackground>
    <CenterSquare>
      <div className='mx-auto max-w-md'>
        
      <Image
        src="/logo.svg"
        alt="Relow"
        width={150}
        height={150}
        style={{ marginBottom: '2rem' }}
        priority
        />

      <div className='title'>
      Register
      </div>

      <div className='subtitle'>
      Daftar sekarang untuk mencoba fitur kami
      </div>

      <br></br>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ImageButton 
            imageSrc={"/google.svg"}
            text={"Daftar dengan Google"}
            onClick={GoogleRegister}
          />
        </div>

        <LineWithText text="or" />

        <Label label="Nama" inputId="username" inputType="username" />

        <Label label="Nomor Whatsapp" inputId="usernumber" inputType="number" />

        <Label label="Email" inputId="email" inputType="email" />

        <Label label="Password" inputId="passwprd" inputType="password" />

        <Label label="NRP" inputId="nrp" inputType="number" />

        <Checkbox label="Saya setuju dengan terms and servies" id="termandservice"/>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <RelowButton 
            imageSrc={"/google.svg"}
            text={"Daftar dengan Google"}
            onClick={GoogleRegister}
          />
        </div>

        <div className="divide-y divide-gray-300/50">
          <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
          </div>
          <div className="pt-8 text-base font-semibold leading-7">
            <p>
              <a href="https://my.its.ac.id/" className="text-sky-500 hover:text-sky-600">Sudah punya akun? &rarr;</a>
            </p>
          </div>
        </div>
      </div>
    </CenterSquare>
  </DefaultBackground>
    </>
  )
}