describe('Utility', function() {

// inject the HTML fixture for the tests
    beforeEach(function() {

    });

    // remove the html fixture from the DOM
    afterEach(function() {

    });

    it('Test Log', function() {
        var temp=true;

        Utility.Console.SetConsoleLevel(LogLevel.Info);

        Utility.Console.Error("Message test");

        expect(temp).toBe(true);
    });
    it('Test LocalStorage', function() {
        var temp={};
        temp.Name = "Davide";
        temp.Surname = "Pegoraro";

        Utility.LocalStorage.SetItemSync("test", temp);


        expect(Utility.LocalStorage.GetItemSync("test").Name).toBe("Davide");
    });
    it('Test Validator', function() {
        var result = Utility.Validators.Email("davide.pegoraro@outlook.com");

        expect(result).toBe(true);
    });
    it('Test File Ext', function() {
        var result = Utility.File.GetExtension("immagine.jpg");

        expect(result).toBe("jpg");
    });
    it('Test File NormalizeByte', function() {
        var result = Utility.File.NormalizeByte(12000)

        expect(result).toBe("11.72 KB");
    });

});