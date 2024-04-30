import { footerLinks, socialLinks } from '../data'
import FooterLink from './FooterLink'
import SocialLink from './SocialLink'

const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {footerLinks.map((link) => (
          <FooterLink id={link.id} href={link.href} text={link.text} />
        ))}
      </ul>
      <ul className='footer-icons'>
        {socialLinks.map((link) => (
          <SocialLink id={link.id} href={link.href} icon={link.icon} />
        ))}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'></span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer
