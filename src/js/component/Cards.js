import React from "react";

// Imgs de la carpeta
import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpg";
import img4 from "../../img/img4.jpg";

export let CardDeck = () => {
	return (
		<div className="card-deck">
			{/* carta1 */}
			<div className="card text-center">
				<img
					src={img1}
					className="card-img-top img-fluid"
					alt="un gato escondido se asoma debajo de una cobija"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						{
							"Some quick example text to build on the card title and make up the bulk of the cards content."
						}
					</p>
				</div>
				<div className="card-footer">
					<a href="#" className="btn btn-primary">
						Find out more!
					</a>
				</div>
			</div>
			{/* //carta1 */}

			{/* carta2 */}
			<div className="card text-center">
				<img
					src={img2}
					className="card-img-top img-fluid"
					alt="un gato se asoma adentro de una caja"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						{
							"Some quick example text to build on the card title and make up the bulk of the cards content."
						}
					</p>
				</div>
				<div className="card-footer">
					<a href="#" className="btn btn-primary">
						Find out more!
					</a>
				</div>
			</div>
			{/* //carta2 */}

			{/* carta3 */}
			<div className="card text-center">
				<img src={img3} className="card-img-top img-fluid" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						{
							"Some quick example text to build on the card title and make up the bulk of the cards content."
						}
					</p>
				</div>
				<div className="card-footer">
					<a href="#" className="btn btn-primary">
						Find out more!
					</a>
				</div>
			</div>
			{/* //carta3 */}

			{/* carta4 */}
			<div className="card text-center">
				<img src={img4} className="card-img-top img-fluid" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						{
							"Some quick example text to build on the card title and make up the bulk of the cards content."
						}
					</p>
				</div>
				<div className="card-footer">
					<a href="#" className="btn btn-primary">
						Find out more!
					</a>
				</div>
			</div>
			{/* //carta4 */}
		</div>
	);
};
