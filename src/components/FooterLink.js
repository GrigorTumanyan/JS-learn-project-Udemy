const FooterLink = ({ id, href, text }) => {
  return (
    <li key={id}>
      <a href={href} className='footer-link'>
        {text}
      </a>
    </li>
  )
}

export default FooterLink
