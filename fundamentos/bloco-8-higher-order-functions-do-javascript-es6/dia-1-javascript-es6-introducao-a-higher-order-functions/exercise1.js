const emailGenerator = (name) => {
	const email = name.toLowerCase().split(' ').join('');
	return { 'nome': name, 'email': `${email}@trybe.com` };
}

const newEmployees = (cracha) => {
	const employees = {
		id1: cracha('Pedro Guerra'),
		id2: cracha('Luiza Drumond'),
		id3: cracha('Carla Paiva'),
	}
	return employees
};

console.log(newEmployees(emailGenerator));