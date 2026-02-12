

const Button = (props) => {

	const {
		id,
		text,
		onClick,
		className,
	} = props

	return (
		<button 
			id={id} 
			onClick={onClick}
			className={className}
		>
			{text}
		</button>
	)
}

export default Button