import React from 'react'
import PropTypes from 'prop-types'
import {ThemeProvider} from 'styled-components'

const theme = {
	background: '#F7F8FA',
	font: {
		family: 'Montserrat',
		colors: {
			dark: '#3E3E3E',
			light: '#3E3E3Ee6'
		},
		sizes: {
			lg: '25px',
			md: '18px',
			sm: '14px',
			xs: '12px'
		}
	},
}

const Theme = ({children}) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme

Theme.propTypes = {
	children: PropTypes.node.isRequired
}
