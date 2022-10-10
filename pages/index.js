import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  return (
    <div className="index-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center text-center border-end border-secondary site-link site-link-textile">
            <div className="index-icon">
              <h2>
                <Link href="/textile">
                  <Image src="/logos/mayco-textile-1.svg" alt="..." width={250} height={250}/>
                </Link>
                <Link href="/textile"><a className="site-route d-block">MAYCO TEXTILE</a></Link>
              </h2>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center text-center site-link site-link-marine">
            <div className="index-icon">
              <h2>
                <Link href="/marine">
                  <Image src="/logos/mayco-marine-1.svg" alt="..." width={250} height={250}/>
                </Link>
                <Link href="/marine"><a className="site-route d-block">MAYCO MARINE</a></Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
