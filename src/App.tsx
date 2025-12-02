import {Navbar} from './widgets/navbar';
import {VideoSection} from './widgets/video';
import {Separator} from './widgets/separator';
import {Courses} from './widgets/courses';
import Accordions from './widgets/accordion';
import {Contacts} from './widgets/contacts';
import {WhatsAppWidget} from './widgets/whatsApp';
import {Carousel, imagesCarousel} from './widgets/carousel';
import {CarouselReviews, reviewsCarousel} from './widgets/carousel/reviews.tsx';

function App() {
  return <div style={{position:'relative', backgroundColor:  'var(--bg-color)', zIndex: 2}}>
    <Navbar/>
    <VideoSection/>
    <div className={'brush__container'} >
      <img className={'brush'} src={'images/4.svg'}/>
    </div>
    <Separator title={'Оффлайн обучение'}>
      <p style={{color: 'var(--text-additional-color)', fontFamily: 'serif', letterSpacing: '0.2rem', whiteSpace: 'nowrap'}}>{'в FRISS SCHOOL'}</p>
    </Separator>
    <Courses/>
    <Separator title={'Галерея'}/>
    <Carousel items={imagesCarousel}/>
    <Separator title={'Отзывы'}/>
    <CarouselReviews items={reviewsCarousel}/>
    <Separator title={'Вопросы и ответы'}/>
    <Accordions/>
    <Separator title={'Контакты'}/>
    <Contacts id={'contacts-view'}/>
    <WhatsAppWidget/>
    {/*<InfoSection/>*/}
  </div>
}

export default App
