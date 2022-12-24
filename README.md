### Definition
Modal is a React Component that takes in four props, and returns a div popping up on the screen with a message,
and a button to close the popup and revert to a given link if any.

@prop {Boolean} display to display or not the popup
@prop {function} setDisplay to toggle the display
@prop {String} message message to display
@prop {Object} params { bgColor, Color, link }
 
@returns A Modal with a message displayed and OK Button.

### Install
Install from terminal `npm i @menallen/plugin-modal`

### How to Use
import React, { useState } from "react";
import { Modal } from "@menallen/plugin-modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../style/style.css";

function Error() {
	const errorColor = '#f08d3a';
	const errorMessage = "Hello WOrld !";
	const paramsModal = {bgColor: errorColor, Color: 'white', link: "/"};

	const [openModal, setOpenModal] = useState(true);

	return (
		<Container fluid className="bg-color-custom">
			<Row className="main-row justify-content-center align-items-center" bg="primary">
				<Modal display={openModal} setDisplay={setOpenModal} message={errorMessage} params={paramsModal}/>
			</Row>
		</Container>
	)
}

### Ho to Build and Publish
 - Perform modification then build using following command in Git Bash to update dist directory:
 - "rm -rf dist && NODE_ENV=production ./node_modules/.bin/babel src/lib --out-dir dist --copy-files"
 - Commit changes and push to github
 - Update version : npm version patch
 - Publish npm package : npm publish --access public

