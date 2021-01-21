const size = {
	xs: '575px',
	sm: '576px',
	md: '768px',
	lg: '992px',
	xl: '1200px'
}

const device = {
	xs: `(max-width: ${size.xs})`,
	sm: `(min-width: ${size.sm})`,
	md: `(min-width: ${size.md})`,
	lg: `(min-width: ${size.lg})`,
	xl: `(min-width: ${size.xl})`
}

export default device;