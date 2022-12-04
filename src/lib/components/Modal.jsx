import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./Modal.css";

//border-color: rgb(147, 173, 24, 0.8);
//background-color: rgb(147, 173, 24, 0.8);

const Button = styled.button`
display: block;
width: 100%;
padding: 8px;
font-size: 1rem;
font-weight: bold;
margin-top: 1rem;
border-color: ${props => props.bgColour};
background-color: ${props => props.bgColour};
color: ${props => props.Colour};
cursor: pointer;
`;

const Overlay = styled.div`
position: absolute;
width: 100%;
height: 100%;
background: #333333d3;
`;

const ModalInfo = styled.div`
display: block;
width: 95%;
height: auto;
max-width: 500px;
min-width: 300px;
padding: 30px;
background: #fff;
border-radius: 5px;
position: absolute;
top: 40%;
left: 50%;
transform: translate(-50%, -50%);
`;

const Message = styled.p`
margin-bottom: 10px;
font-family: Montserrat, sans-serif;
font-size: 1.5rem;
font-weight: 500;
text-align: center;
background-color: #fbfbfb;
text-align: center;
`;

/**
 * Modal is a React Component that takes in four props, and returns a div popping up on the screen with a message,
 * and a button to close the popup and revert to a given link if any.
 *
 * @prop {Boolean} display to display or not the popup
 * @prop {function} setDisplay to toggle the display
 * @prop {String} message message to display
 * @prop {Object} params { bgColor, Color, link }
 * 
 * @returns A React component.
 */
function Modal ({ display, setDisplay, message, params }) {
	console.log("Modal: ", display, message, params);

	const navigate = useNavigate();

	const toggleModal = () => {
		console.log("toggleModal: ", display)
		setDisplay(!display);
		console.log("toggleModal: ", display)
		if (params.link) navigate(params.link);
	};

	return (
		<div className={display ? "modalContainer active" : "modalContainer"}>
			<Overlay></Overlay>
			<ModalInfo>
				<Message>{message}</Message>
				<Button bgColour={params.bgColor} Colour={params.Color} onClick={toggleModal}>OK</Button>
			</ModalInfo>
		</div>
	);
}

export default Modal;
