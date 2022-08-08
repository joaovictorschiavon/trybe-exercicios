const uppercase = (str, callback) => {
	setTimeout(() => {
	  callback(str.toUpperCase());
	}, 500);
};

test('uppercase a word', (done) => {
	uppercase('palavra', (strUpperCase) => {
		try {
			expect(strUpperCase).toBe('PALAVRA');
			done();
		} catch (error) {
			done(error);
		}
	})
});
