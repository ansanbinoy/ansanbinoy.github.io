window.onload = () => {
	const myInput = document.getElementById("dummyKeyboard");
	myInput.onpaste = (e) => e.preventDefault();
};
const COMMANDS = {
	ls: 'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>',
	about: "Hello 👋<br>I'm Ansan Binoy. I'm a Information Security enthusiast, currently living in India.",
	skills: '<span class="code">Skill:</span> Information security, Pen-Testing, Bug Hunting, Programming,..<br>',
	experience: "None",
	education: "Unknown",
	contact:
		"You can contact me on any of following links:<br><a href='https://t.me/ansanbinoy' class='success link'>Telegram</a>, <a href='https://www.instagram.com/ansan_binoy/' class='success link'>Instagram</a>, <a href='https://www.linkedin.com/in/ansanbinoy/' class='success link'>Linkedin</a>, <a href='https://www.twitter.com/ansanbinoy/' class='success link'>Twitter</a>, <a href='mailto:ansanbinoy@gmail.com' class='success link'>Email</a>",
};

const userInput = document.getElementById("userInput");
const terminalOutput = document.getElementById("terminalOutput");
const inputfield = document.getElementById("dummyKeyboard");

inputfield.addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		let input = e.target.value.trim();
		input = input.toLowerCase();
		if (input.length === 0) {
			return;
		}
		let output;
		output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
		if (!COMMANDS.hasOwnProperty(input)) {
			output += `<div class="terminal-line">no such command: ${input}</div>`;
			console.log("Oops! no such command");
		} else {
			output += COMMANDS[input];
		}
		terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
		terminalOutput.scrollTop = terminalOutput.scrollHeight;
		e.target.value = "";
	}
});
