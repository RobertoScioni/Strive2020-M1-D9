const pool = 76
const ticketSize = 24

const loader = () => {
	bingoBoard(pool)
}

const extracted = []

const extract = () => {
	if (extracted.length === pool) {
		return "pool exausted"
	}
	let candidate
	do {
		candidate = Math.ceil(Math.random() * 76)
	} while (extracted.includes(candidate))
	extracted.push(candidate)
	//	document.createElement("style").innerHTML =
	//		"." + candidate + "{background-color:red}"
	document.styleSheets[0].insertRule(
		".n" + candidate + " {background-color:green;}"
	)
	console.log(extracted)
}

addEventListener("load", loader)

const bingoBoard = (cells) => {
	board = document.createElement("section")
	board.classList.add("board", "main")
	let y = 0
	let cell
	for (let i = 1; i <= cells; i++) {
		cell = document.createElement("span")
		cell.innerText = i
		cell.classList.add("cell", "n" + i)
		board.appendChild(cell)
	}
	document.querySelector("#table").appendChild(board)
}

const userBoard = (cells) => {
	const board = []
	const ticket = document.createElement("div")
	ticket.classList.add("ticket")
	for (let i = 0; i < cells; i++) {
		let candidate = Math.ceil(Math.random() * 76)
		if (board.includes(candidate)) {
			i--
		} else {
			board.push(candidate)
			cell = document.createElement("span")
			cell.innerText = candidate
			cell.classList.add("cell", "n" + candidate)
			ticket.appendChild(cell)
		}
	}
	document.querySelector("#playerField").appendChild(ticket)
	return board
}
