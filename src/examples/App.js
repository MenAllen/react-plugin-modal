import React, { useState } from "react";
import Modal from "../lib/components/Modal";

export default function App() {
	const messageModal = "Hello World";
	const CustomGreen = "#93AD18";
	const paramsModal = { bgColor: CustomGreen, Color: "white", link: "" };
	const [openModal, setOpenModal] = useState(true);

	return (
		<div style={{ width: 640, margin: "15px auto" }}>
			<Modal
				display={openModal}
				setDisplay={setOpenModal}
				message={messageModal}
				params={paramsModal}
			/>
		</div>
	);
}
