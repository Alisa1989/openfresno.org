import '@/styles/components/footer.scss'
import Link from 'next/link'

/**
 * Default application footer.
 * @returns {JSX.Element}
 */
export default function AppFooter() {
  return (
    <footer>
      <div className="footerContainerTop">
        <div className="footerMessage">
          <h2 className="footerMessageHeader">Get Involved.</h2>
          <p className="footerMessageParagraph">Open Sacramento is a tax-deductible civic-tech community dedicated to
            using technology and open data for positive civic change in Sacramento.</p>
        </div>

        <div className="footerActionLinks">
          <p className="footerActionLinksItem">
            Join us for our weekly meetings on <Link href="/" className="footerActionLinksAnchor">meetup.</Link>
          </p>
          <p className="footerActionLinksItem">
            See our <Link href="/" className="footerActionLinksAnchor">projects.</Link>
          </p>
          <p className="footerActionLinksItem">
            For any questions, visit our <Link href="/" className="footerActionLinksAnchor">FAQs.</Link>
          </p>
        </div>

        <div className="footerSocialMedia">
          <Link href="/" className="footerSocialMediaLink">
            <img src="/img/socialmedia/facebook.svg" alt="Facebook" className="footerSocialMediaIcon" />
          </Link>
          <Link href="/" className="footerSocialMediaLink">
            <img src="/img/socialmedia/twitter.svg" alt="X" className="footerSocialMediaIcon" />
          </Link>
          <Link href="/" className="footerSocialMediaLink">
            <img src="/img/socialmedia/youtube.svg" alt="Youtube" className="footerSocialMediaIcon" />
          </Link>
        </div>
      </div>

      <div className="footerBottomContainer">
        <div className="footerBottomTitle">Open Sacramento</div>
        <div className="footerBottomLinksContainer">
          <Link href="/get-started" className="footerBottomLink">get started</Link>
          <Link href="/" className="footerBottomLink">our team</Link>
          <Link href="/" className="footerBottomLink">code of conduct</Link>
        </div>
      </div>
    </footer>
  )
}