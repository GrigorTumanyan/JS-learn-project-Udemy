const Article = ({ iconClass, articleTitle, articleText }) => {
  return (
    <article className='service'>
      <span className='service-icon'>
        <i className={iconClass}></i>
      </span>
      <div className='service-info'>
        <h4 className='service-title'>{articleTitle}</h4>
        <p className='service-text'>{articleText}</p>
      </div>
    </article>
  )
}
export default Article
