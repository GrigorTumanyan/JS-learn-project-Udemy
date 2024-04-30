const SocialLinks = ({ id, href, icon }) => {
  return (
    <li key={id}>
      <a href={href} target='_blank' rel='noreferrer' className='footer-icon'>
        <i className={icon}></i>
      </a>
    </li>
  )
}

export default SocialLinks
