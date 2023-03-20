import "./globals.css";

export const metadata = {
	title: "Rem Aydin Psychotherapy ",
	description: "psychotherapist rem aydin",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
