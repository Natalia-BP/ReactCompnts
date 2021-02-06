import React from "react";

//Components
import { NavBar } from "./Navbar";
import { JumboTron } from "./Jumbotron";
import { CardDeck } from "./Cards";
import { Footer } from "./Footer";

//create your first component
export function Home() {
	return (
		<div>
			<NavBar />
			<div className="container-md p-3">
				<JumboTron />
				<CardDeck />
			</div>
			<Footer />
		</div>
	);
}
