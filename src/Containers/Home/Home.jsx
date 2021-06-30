import React from 'react'
import Slider from '../../Components/Slider/Slider.jsx'


import CarroselContainer from '../CarrouselContainer/CarrouselContainer.jsx'

const Home = () => {
  const slideItems = [
    'https://media.vanityfair.com/photos/5626b4a16015429a1debd21e/5:3/w_1440,h_864,c_limit/furious-7-walker-scenes-digitally-recreated.jpg',
    'https://i0.wp.com/prensaarizona.com/wp-content/uploads/2021/01/91-Columna-Cinexperto2.jpg?fit=1920%2C1080&ssl=1',
    'https://www.bandassonoras.co/wp-content/uploads/2021/03/The-War-With-Grandpa-1920x1080-71b83ec7-ac51-41a2-900f-ca13bedd2f4b.jpg',
    'https://i1.wp.com/hipertextual.com/wp-content/uploads/2021/04/mortal_kombat_simon_mcquoid.jpg?fit=1200%2C800&ssl=1',
    'https://hbomax-images.warnermediacdn.com/images/GXdu2ZAglVJuAuwEAADbA/tileburnedin?size=1280x720&partner=hbomaxcom&host=artist.api.cdn.hbo.com&w=1280',
  ]



  return (
    <>
      <Slider slideItems={slideItems} />
      <CarroselContainer/>
      <CarroselContainer/>
      <CarroselContainer/>
    </>
  )
}

export default Home
