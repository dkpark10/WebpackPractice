import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header>
			<Link to="/">홈</Link>
			<Link to="/image">이미지</Link>
		</header>
	);
}
