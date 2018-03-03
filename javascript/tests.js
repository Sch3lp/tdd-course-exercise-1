
describe("rating a speculaas", function() {

	it("should be a high rating for Hasseltse speculaas with lots of ingredients", function() {
		var hasseltseSpecuclaas = {
			butter: 500,
			flower: 500,
			sugar: 1000,
			herbs: 10,
			salt: 10,
			honey: 20,
			milk: 100,
			eggs: 120
		};
		var rating = rateSpeculaas(hasseltseSpecuclaas);

		expect(rating).toBe(2260);
	});

	it("should be a low sum for speculaas with less ingredients", function() {
		var cheapSpeculaas = {
			butter: 500,
			flower: 500,
			sugar: 500,
			eggs: 60
		};
		var rating = rateSpeculaas(cheapSpeculaas);
		
		expect(rating).toBe(1560);
	});

	it("should be a minimum rating for a speculaas without any ingredients", function() {
		expect(rateSpeculaas({})).toBe(0);
	});

});

