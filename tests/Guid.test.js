describe('Guid', function() {

// inject the HTML fixture for the tests
    beforeEach(function() {

    });

    // remove the html fixture from the DOM
    afterEach(function() {

    });

    it('Test IsValidGuid', function() {
        var guid = new Guid();

        expect(Guid.IsValidGuid(Guid.NewGuid())).toBe(true);
    });

    it('Test toString', function() {
        var guid = new Guid();

        expect(typeof guid.toString()).toBe("string");
    });
    it('Test Empty', function() {
        var guid = Guid.Empty();

        expect(guid.toString()).toBe("00000000-0000-0000-0000-000000000000");
    });
    it('Test NewGuid', function() {
        var guid = new Guid();

        expect(Guid.IsValidGuid(Guid.NewGuid())).toBe(true);
    });
});