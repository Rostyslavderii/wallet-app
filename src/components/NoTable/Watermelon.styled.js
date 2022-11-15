import styled from 'styled-components';

export const Button = styled.button`

p {
  position: absolute;
  top: 125%;
  left:30%;
  color: #24cca7;

  @media screen and (min-width: 768px) {
    left:43%;

  }
}

`


export const Watermelon = styled.div`
  display: block;
	position: absolute;
	width: 100px;
	height: 100px;
    top: 60%;
    left:35%;
    text-align: center;

@media screen and (min-width: 768px) {
    left:45%;

  }




  div, i {
  position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 100%;
  }


	div:first-of-type {
		border: 5.9em solid #00AD84;
		border-top: 5.9em solid transparent;
	}

	div:nth-of-type(2) {
		border: 5.7em solid #24CCA7; //00AD84
		border-top: 5.7em solid transparent;
	}

	div:nth-of-type(3){
		border: 5.2em solid #FDFAF7;
		border-top: 5.2em solid transparent;
	}

	div:last-of-type {
		border: 5em solid #ff6596;
		border-top: 5em solid transparent;


		i:first-of-type {
			top: 30px;
			left: 15px;
			transform: rotate(-12deg);
		}

		i:nth-of-type(2) {
			top: 35px;
			left: -20px;
			transform: rotate(20deg);
		}

		i:nth-of-type(3) {
			top: 10px;
			left: 30px;
			transform: rotate(100deg);
		}

		i:nth-of-type(4) {
			left: 20px;
			top: -5px;
			transform: rotate(80deg);
		}

		i:nth-of-type(5) {
			left: -45px;
			transform: rotate(90deg);
		}

		i:nth-of-type(6), i:nth-of-type(7) {left: -30px;}

		i:nth-of-type(6) {
			top: 15px;
			transform: rotate(65deg);
		}

		i:nth-of-type(7) {
			top: -15px;
			transform: rotate(102deg);
		}

		i:nth-of-type(8) {
			left: 35px;
			top: -20px;
			transform: rotate(75deg);
		}

		i:nth-of-type(9) {
			left: -45px;
			top: -30px;
			transform: rotate(115deg);
		}

		i:last-of-type {
			top: 15px;
			left: -5px;
    }

    i {
	border-top: 0.3em solid #626262;
	border-bottom: 0.3em solid #626262;
	border-left: 0.15em solid #626262;
	border-right: 0.15em solid #626262;
	border-radius: 0.15em / 0.3em;
}
  }

  @keyframes gimme {
	0% 	 {transform: translateY(-25px)}
	10%  {transform: translateY(-25px)}
	90%  {transform: translateY(0)}
	100% {transform: translateY(0)}
}


  `

export const Slice = styled.div`
	position: absolute;
	width: 100px;
	height: 100px;
    top: 60%;
    left: 35%;

@media screen and (min-width: 768px) {
    left:45%;

  }

	transform: translateY(-25px);
	animation: gimme 2s ease-in-out infinite alternate;

  div, i {
    position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 100%;
  }

  i {
	border-top: 0.3em solid #626262;
	border-bottom: 0.3em solid #626262;
	border-left: 0.15em solid #626262;
	border-right: 0.15em solid #626262;
	border-radius: 0.15em / 0.3em;
}

	div {top: 50%}

	div:first-of-type {
		border: 5.9em solid transparent;
		border-top: 5.9em solid #00AD84;
	}

	div:nth-of-type(2) {
		border: 5.7em solid transparent;
		border-top: 5.7em solid #24CCA7;
	}

	div:nth-of-type(3) {
		border: 5.2em solid transparent;
		border-top: 5.2em solid #FDFAF7;
	}

	div:last-of-type {
		border: 5em solid transparent;
		border-top: 5em solid #ff6596;

		i:first-of-type {
			top: -40px;
			left: 15px;
			transform: rotate(12deg);
		}
		i:nth-of-type(2) {
			top: -45px;
			left: -20px;
			transform: rotate(-12deg);
		}
		i:nth-of-type(3) {
			top: -50px;
			left: 1px;
			transform: rotate(6deg);
		}

		i:last-of-type {top: -20px}
	}

  @keyframes gimme {
	0% 	 {transform: translateY(-25px)}
	10%  {transform: translateY(-25px)}
	90%  {transform: translateY(0)}
	100% {transform: translateY(0)}
}

`;


