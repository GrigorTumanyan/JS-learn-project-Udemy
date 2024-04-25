const Title = ({ firstPart, secondPart }) => {
  return (
    <div className='section-title'>
      <h2>
        {firstPart} <span>{secondPart}</span>
      </h2>
    </div>
  )
}
export default Title
