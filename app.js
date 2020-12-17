var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const read = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
read.question("Enter a string: ", text => {
	read.question("Enter a offset: ", off => {
		for (c = 0; text.charAt(c); c++) {
			for (l = 0; letters[l]; l++) {
				if (text.charAt(c) == letters[l]) {
					process.stdout.write(letters[(l + (+off)) % 26]);
				} else if (text.charAt(c) == " ") {
					process.stdout.write(text.charAt(c));
					c++;
				}
			}
		}
		read.close();
	});
});