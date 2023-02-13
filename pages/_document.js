import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="tr">
      <Head>

        <meta charset="UTF-8" />
        <meta name="description" content="Mayco Textile has been founded in 1984 by Mr. Bulent Icgoren in Istanbul, Turkey. With over 35 years of experience in home textiles and wowen fabrics, Mayco is specialized in curtain, upholstery and terry cloths." />
        <meta name="keywords" content="Tekstil, Textile, Drapery, Curtain, Perde, Döşemelik, Kumaş" />

        <link rel="stylesheet" type="text/css" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}