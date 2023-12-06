import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function index() {
  return (
    <>
    <Head>
  <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
  <link rel='shortcut icon' href='/logo.png' />
  <title>Landing Page</title>
    </Head> 

    <body id='iau9'>
      <div id='i6po' className='gjs-grid-row'>
        <div className='gjs-grid-column.feature-item'>
        <Image
        src='/logo.png'
        alt='Relow'
        width={150}
        height={150}
        style={{ width: 'auto' }}
        />
          </div>
          <div id='id7x' className='gjs-grid-column'>
            <div id='i6zal' className='gjs-link'>Perangkat</div>
            <div id='id4i9' className='gjs-link'>Tentang Kami</div>
            <div id='iurui' className='gjs-link'>Jasa</div>
            <Link href='/login' id='iurui'>
            Masuk
            </Link>
            <Link href='/register' id='iiawf'>
                  Daftar Sekarang
            </Link>
                </div>
                </div>
  <div id='irz7b' className='gjs-grid-row'>
  <div id='iycz3' className='gjs-grid-column'>
    <div id='iip4n' className='gjs-image-box'>
      </div>
      <div id='irjua' className='gjs-heading'>
        Ease your day,<br/>Comfort your life
        </div><div id='itndw' className='text-main-content'>
          Clean your shoe because you deserve it. -Tsun Zu</div>
          </div>
          </div>
          <div id='ioyxg' className='gjs-grid-row'>
            <div id='i8w4i' className='gjs-grid-column'>
              <div id='iiacm' className='gjs-heading'>
    Karena Kami<br/>Menjadi #LebihMudah</div>
    <div id='izhbz'>Gunakan fitur mudah dengan langkah yang sederhana dari aplikasi Relow<br/>Sekarang kamu tidak bingung kapan dan dimana sepatu anda dicuci</div>
    </div></div>
    <div id='iz29ek' className='gjs-grid-row'>
      <div className='gjs-grid-column'>
      <Image
        src='/house_solid.svg'
        alt='Relow'
        width={150}
        height={150}
        style={{ marginBottom: '2rem' }}
        priority
        />
        <div id='i7nidf' className='text-main-content'>Buka aplikasi Relow</div>
        </div><div className='gjs-grid-column'>
        <Image
        src='/cart_shopping_solid.svg'
        alt='Relow'
        width={150}
        height={150}
        style={{ marginBottom: '2rem' }}
        priority
        />
    <div id='is8k9o' className='text-main-content'>Pesan order baru</div>
    </div><div className='gjs-grid-column'>
    <Image
        src='/list_solid.svg'
        alt='Relow'
        width={150}
        height={150}
        style={{ marginBottom: '2rem' }}
        priority
        />
      <div id='i2madm' className='text-main-content'>Cek status sepatu</div>
      </div></div><div id='iwaw4c' className='gjs-grid-row'>
        <div id='iauvhi' className='gjs-grid-column'><div id='ibx04w' className='gjs-heading'>
       Pengalaman mereka<br/>bersama kami</div>
        <div id='i6tlq1' className='text-main-content'>Yuk kita lihat pengalaman dari pengguna jasa kita yang sudah merasakan seberapa mudah<br/>
        mencuci sepatu mereka dengan jasa Relow. Simak nih beberapa testimoni dari rekan kita!<br/></div>
        <div className='gjs-grid-row'><div className='gjs-grid-column'>
        <Image
        src='/yodyod.png'
        alt='Relow'
        width={150}
        height={150}
        style={{ marginBottom: '2rem', width: '150', height: '150'}}
        priority
        /><div id='ilsw14' className='text-main-content'>
            Yodi</div><div id='i9u6o4' className='text-main-content'>Ini sangat trendy apalagi<br/>
            buat anak muda yang selalu mantap fashionnya</div></div><div className='gjs-grid-column'>
            <Image
        src='/zada.jpg'
        alt='Relow'
        width={150}
        height={150}
        style={{ marginBottom: '2rem' }}
        priority
        /><div id='igfcaj' className='text-main-content'>
        Zada</div>
        <div id='iycjvv' className='text-main-content'>
          Aku sempet bingung kalau<br/>mau cuci sepatu dimana<br/>untung ada aplikasi Relow</div></div>
          <div className='gjs-grid-column'> 
          <Image
        src='/lao.jpg'
        alt='Relow'
        width={150}
        height={150}
        style={{ marginBottom: '2rem' }}
        priority
        />
          <div id='i3a3yz' className='text-main-content'>Laode</div>
          <div id='ijmg5d' className='text-main-content'>Alhamdulillah setelah Relow saya merasa sangat percaya diri</div></div></div></div></div>
          <div id='iv3be5' className='gjs-grid-row'><div id='ilriti' className='gjs-grid-column'>
            <div id='id7ol' className='gjs-text-blue'>Terms and Conditions</div>
            <div id='ipjdtn' className='gjs-link'>2023 Relow - All your right are belong to us</div></div></div>
            </body>
    </>
  )
}