describe("Assignment 1 Test", function () {
  describe("md5Encrypt Test to pass 1", function () {
    it("The function should return a 32 character hexadecimal string", function () {
      expect(md5Encrypt("aa125")).toMatch(/^[a-zA-f0-9]{32}$/);
    });
  });

  describe("md5Encrypt Test to pass 2", function () {
    it("The function should return a 32 character hexadecimal string", function () {
      expect(md5Encrypt("0125")).toMatch(/^[a-zA-f0-9]{32}$/);
    });
  });

  describe("checkLogin Test to fail 1", function () {
    it("The function should return 'No username entered' for input=('','a')", function () {
      expect(checkLogin("", "a")).toEqual("<p>No username entered.</p>");
    });
  });

  describe("checkLogin Test to fail 2", function () {
    it("The function should return 'No password entered' for input=('a','')", function () {
      expect(checkLogin("a", "")).toEqual("<p>No password entered.<p>");
    });
  });

  describe("checkLogin Test to fail 3", function () {
    it("The function should return 'Invalid Username or Password. for input=('a','123')", function () {
      expect(checkLogin("a", "123")).toEqual(
        "<p>Invalid Username or Password."
      );
    });
  });

  describe("checkLogin Test to pass 1", function () {
    it("The function should return 'Welcome Back!  for input=('Alanmin1996','N01570363')", function () {
      expect(checkLogin("Alanmin1996", "N01570363")).toEqual(
        "<p>Welcome Back!</p>"
      );
    });
  });
});
