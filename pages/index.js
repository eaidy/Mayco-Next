import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

  return (
    <div className="index-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-12 text-center site-link site-link-textile">
            <div className="index-icon">
              <h2>
                <Link href="/textile"><a className="site-route">MAYCO TEXTILE</a></Link>
              </h2>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 text-center site-link site-link-marine">
            <div className="index-icon">
              <h2>
                <Link href="/marine"><a className="site-route">MAYCO MARINE</a></Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
