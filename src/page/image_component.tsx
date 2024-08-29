interface Props {
	imgSrc: string;
}

export default function App({ imgSrc }: Props): JSX.Element {
	return <img src={imgSrc} alt="preload" />;
}
