import "./globals.css";
import Header from "@/components/Header";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
	subsets: ["latin"],
	weight: ["400"],
});

export const metadata = {
	title: "Rem Aydin Psychotherapy ",
	description: "psychotherapist rem aydin",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={quicksand.className}>
			<body className="h-screen">
				<Header />
				{children}
			</body>
		</html>
	);
}
