describe('Array', function() {

// inject the HTML fixture for the tests
    beforeEach(function() {

    });

    // remove the html fixture from the DOM
    afterEach(function() {

    });

    it('Test Move', function() {
        var element = ['a','b','c','d'];
        element.Move(0,2);
        expect(element[2]).toBe("a");
    });
    it('Test InsertAt', function() {
        var element = ['a','b','c','d'];
        element.InsertAt(4,'e');
        expect(element[4]).toBe("e");
    });
    it('Test RemoveAt', function() {
        var element = ['a','b','c','d'];
        element.RemoveAt(0);
        expect(element[0]).toBe("b");
    });
    it('Test Reverse', function() {
        var element = ['a','b','c','d'];
        element = element.Reverse();
        expect(element[0]).toBe("d");
    });
    it('Test SortBy', function() {
        var element = [{id: 2, name: 'First'},{id: 1, name: 'Second'}];
        element = element.SortBy('id', true);

        expect(element[0].id).toBe(1);
    });
    it('Test Distinct', function() {
        var element = ['a','a','b','c','d'];
        element = element.Distinct();
        expect(element.length).toBe(4);
    });
});