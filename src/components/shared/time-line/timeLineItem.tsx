import { FC } from 'react'
import { SubtitleOrange } from '../../ui/subtitle-orange'
import { Text } from '../../ui/text'
import {
	ItemContainer,
	TimelineContent,
	TimelineItemContainer,
} from './timeLine.styles'

interface Props {
	title: string
	description: string
	index: number
	activeIndex: number
	onSetActive: (index: number) => void
}

export const TimelineItem: FC<Props> = ({
	title,
	description,
	index,
	activeIndex,
	onSetActive,
}) => {
	const isOpen = index === activeIndex

	return (
		<TimelineItemContainer isActive={isOpen} onClick={() => onSetActive(index)}>
			<ItemContainer style={{ marginLeft: '30px' }}>
				<SubtitleOrange mb='5px'>{title}</SubtitleOrange>
				<TimelineContent isOpen={isOpen}>
					<Text>{description}</Text>
				</TimelineContent>
			</ItemContainer>
		</TimelineItemContainer>
	)
}
