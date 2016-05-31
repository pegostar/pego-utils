describe('String', function() {

// inject the HTML fixture for the tests
  beforeEach(function() {
    
  });

  // remove the html fixture from the DOM
  afterEach(function() {
    
  });

  it('Test Contains', function() {
    var temp="Search the string";
    expect(temp.Contains("string")).toBe(true);
  });
  it('Test LeftTrim', function() {
    expect("  generic string  ".LeftTrim()).toBe("generic string  ");
  });
  it('Test RightTrim', function() {
    expect("  generic string  ".RightTrim()).toBe("  generic string");
  });
  it('Test Trim', function() {
    expect("  generic string  ".Trim()).toBe("generic string");
  });
  it('Test ClearAllSpaces', function() {
    expect("  generic string  ".ClearAllSpaces()).toBe("genericstring");
  });
  it('Test ToBoolean', function() {
    expect("true".ToBoolean()).toBe(true);
  });
  it('Test EscapeHtml', function() {
    expect("<sample>".EscapeHtml()).toBe("&lt;sample&gt;");
  });
  it('Test UnescapeHtml', function() {
    expect("&lt;sample&gt;".UnescapeHtml()).toBe("<sample>");
  });
  it('Test EscapeQuot', function() {
    expect("  generic string ' ".EscapeQuot()).toBe("  generic string \\' ");
  });
  it('Test RemoveHtmlTags', function() {
    expect("  generic string <sample> ".RemoveHtmlTags()).toBe("  generic string  ");
  });
  it('Test IsNullOrEmpty', function() {
    expect(String.IsNullOrEmpty("")).toBe(true);
  });
});