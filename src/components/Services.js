import Article from './Article'
import Title from './Title'

const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title firstPart='our' secondPart='services' />
      <div className='section-center services-center'>
        <Article
          iconClass='fas fa-wallet fa-fw'
          articleTitle='saving money'
          articleText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            officia.
          '
        />
        <Article
          iconClass='fas fa-tree fa-fw'
          articleTitle='endless hiking'
          articleText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            officia.
          '
        />
        <Article
          iconClass='fas fa-socks fa-fw'
          articleTitle='amazing comfort'
          articleText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            officia.
          '
        />
      </div>
    </section>
  )
}
export default Services
