import React from 'react'
import { Svg } from './styles';
import PropTypes from 'prop-types'

const Star = ({color, size, onClick, selected}) => {
	return (
		<Svg
			onClick={onClick}
			color={color}
			size={size}
			selected={selected}
			xmlns="http://www.w3.org/2000/Styles"
			viewBox="0 0 24 24"
		>
			<path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
		</Svg>
	)
}

export default Star

Star.propTypes = {
	color: PropTypes.string,
	size: PropTypes.string,
	onClick: PropTypes.func
}
