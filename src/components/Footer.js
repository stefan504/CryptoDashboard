import React from 'react';

function Footer() {
	return (
		<div className="footer-2 coin-container pt-6 md:pt-12">
			<div className="container px-4 mx-auto">
				<div className="justify-center md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">
					<div className="footer-info lg:w-1/3 md:px-4">
						<h4 className="text-white text-2xl mb-4">
							19K users are using FWR blocks and making their life easy.
						</h4>
						<p className="text-gray-400">
							We have carefully crafted the blocks to suit to everyone's need.
						</p>
						<div className="mt-4">
							<button className="bg-facebook py-2 px-4 text-white rounded mt-2 transition-colors duration-300">
								<span className="fab fa-facebook-f mr-2"></span>
							</button>
							<button className="bg-twitter py-2 px-4 text-white rounded ml-2 mt-2 transition-colors duration-300">
								<span className="fab fa-twitter mr-2"></span>
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="border-t border-solid border-gray-900 mt-4 py-4">
				<div className="container px-4 mx-auto">
					<div className="md:flex md:-mx-4 md:items-center">
						<div className="md:flex-1 md:px-4 text-center md:text-left">
							<p className="text-white">
								&copy; <strong>CPRO</strong>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
