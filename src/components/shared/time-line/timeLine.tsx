import { FC, useState } from 'react'
import { TypeTimeLineItem } from '../../../@types/timeline'
import { TimelineContainer } from './timeLine.styles'
import { TimelineItem } from './timeLineItem'


export interface Props {
	items: TypeTimeLineItem[]
}

export const TimeLine: FC<Props> = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState<number>(0)
	return (
		<TimelineContainer>
			{items.map((item, index) => (
				<TimelineItem
					key={index}
					index={index}
					title={item.title}
					description={item.description}
					activeIndex={activeIndex}
					onSetActive={setActiveIndex}
				/>
			))}
		</TimelineContainer>
	)
}
