function Header({level, title}) {
	if (level === 1) {
		return (
			<h1>{title}</h1>
		);
	}

	if (level === 2) {
		return (
			<h2>{title}</h2>
		);
	}
}

export default Header;
