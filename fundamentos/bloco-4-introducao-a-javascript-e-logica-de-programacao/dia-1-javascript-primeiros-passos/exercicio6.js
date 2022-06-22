let peca = "Cavalo";
peca = peca.toLowerCase();



switch (peca){
	case "peao":
		console.log("1 frente");
		break;
	case "torre" :
		console.log("frente e lateral");
		break;
	case "cavalo":
		console.log("em L");
		break;
	case "bispo" :
		console.log("diagonal");
		break;
	case "rainha":
		console.log("frente, lateral e diagonal");
		break;
	case "rei":
		console.log("1 casa para frente, lateral e diagonal");
		break;
	default:
		console.log("entre um valor de peca");
}