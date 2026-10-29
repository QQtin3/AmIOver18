import type { Metadata } from "next";
import "@/styles/theme.css";

export const metadata: Metadata = {
	title: "AmIOver18",
	description:
		"Prove you are over 18 without revealing any other personal data, using the EU Digital Identity Wallet.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en">
			<body>
				<div className={"top-banner"}>
					<h1 className={"banner-title"}>AmIOver18?</h1>
					<p className={"banner-subtitle"}>
						A demo of the{" "}
						<a href="https://ec.europa.eu/digital-building-blocks/sites/spaces/EUDIGITALIDENTITYWALLET/pages/915931811/The+European+Digital+Identity+Regulation" target="_blank">
							European Digital Identity
						</a>{" "}
						goal : proving you are over 18 to a service without revealing any other personal data. Built on the{" "}
						<a href="https://github.com/eu-digital-identity-wallet/av-doc-technical-specification" target="_blank">
							official EU age verification specification
						</a>
						.
					</p>
				</div>
				{children}
			<div className={"bottom-banner"}>
				<p>
					Made with interest by an European Citizen, this website source code is available on this GitHub repository
					{" "}
					<a href="https://github.com/QQtin3/AmIOver18" target="_blank">
						AmIOver18 - QQtin
					</a>
					.
				</p>
			</div>
			</body>
		</html>
	);
}
