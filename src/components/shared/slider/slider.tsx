import { FC } from 'react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './styles.css'

export const Slider: FC = () => {
	return (
		<div>
			<Swiper
				effect={'cards'}
				grabCursor={true}
				modules={[EffectCards]}
				className='mySwiper'
			>
				<SwiperSlide>
					<img src='/slider/slider1.jpg' alt='slide1' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/slider/slider2.jpg' alt='slide2' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/slider/slider3.jpg' alt='slide3' />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
