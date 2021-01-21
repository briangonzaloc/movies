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
	header: {
		colors: {
			background: '#FFFFFF',
			border: '#EFF0F2'
		}
	},
	searchBox: {
		font: {
			sizes: {
				lg: '20px',
				sm: '16px',
				xs: '14px'
			},
			color: '#505050',
			family: 'Roboto'
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
