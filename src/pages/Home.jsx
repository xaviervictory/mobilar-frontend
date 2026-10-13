import { Container, Row, Col } from 'react-bootstrap'
import HeroCarousel from '../components/HeroCarousel'
import BenefitsBar from '../components/BenefitsBar'
import FeaturedProducts from '../components/FeaturedProducts'
import BannerCard from '../components/BannerCard'
import CategoryGrid from '../components/CategoryGrid'
import usePageTitle from '../hooks/usePageTitle'
import { productos, categorias, banners } from '../data/products'

function Home() {
  usePageTitle('Streetwear & Urban Fashion')
  const destacados = productos.filter((p) => p.destacado)

  return (
    <>
      <HeroCarousel />
      <BenefitsBar />
      <Container className="py-5">
        <Row className="g-4">
          <Col lg={9}>
            <FeaturedProducts productos={destacados} />
          </Col>
          <Col lg={3}>
            <BannerCard {...banners.nuevaColeccion} />
          </Col>
        </Row>
        <Row className="g-3 mt-4">
          <Col lg={4}><BannerCard {...banners.otonio} /></Col>
          <Col lg={5}><CategoryGrid categorias={categorias} /></Col>
          <Col lg={3}><BannerCard {...banners.zapatillas} /></Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
