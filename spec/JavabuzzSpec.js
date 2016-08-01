describe('Javabuzz', function() {

  var javabuzz;

  beforeEach(function(){
    javabuzz = new Javabuzz
  });

  describe('know when a number is', function(){
    it('divisible by 3', function() {
      expect(javabuzz._isDivisibleByThree(3)).toBe(true);
    });
    it('divisible by 5', function() {
      expect(javabuzz._isDivisibleByFive(5)).toBe(true);
    });
    it('divisible by 15', function() {
      expect(javabuzz._isDivisibleByFifteen(15)).toBe(true);
    });
    it('divisible by 3', function() {
      expect(javabuzz._isDivisibleBy(3, 3)).toBe(true);
    });
    it('divisible by 5', function() {
      expect(javabuzz._isDivisibleBy(5, 5)).toBe(true);
    });
    it('divisible by 15', function() {
      expect(javabuzz._isDivisibleBy(15, 15)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function(){
    it('divisible by 3',function(){
      expect(javabuzz._isDivisibleByThree(1)).toBe(false);
    });
    it('divisible by 5', function() {
      expect(javabuzz._isDivisibleByFive(1)).toBe(false);
    });
    it('divisible by 15', function() {
      expect(javabuzz._isDivisibleByFifteen(1)).toBe(false);
    });
    it('divisible by 3',function(){
      expect(javabuzz._isDivisibleBy(1, 3)).toBe(false);
    });
    it('divisible by 5', function() {
      expect(javabuzz._isDivisibleBy(1, 5)).toBe(false);
    });
    it('divisible by 15', function() {
      expect(javabuzz._isDivisibleBy(1, 15)).toBe(false);
    });
  });

  describe('when playing, says', function(){
    it('"Javabuzz" when number is divisible by 15', function(){
      expect(javabuzz.says(15)).toBe("Javabuzz");
    });
    it('"Buzz" when number is divisible by 5', function(){
      expect(javabuzz.says(5)).toBe("Buzz");
    });
    it('"Java" when number is divisible by 3', function(){
      expect(javabuzz.says(3)).toBe("Java");
    });
    it('the number passed in when not divisible by 3, 5 or 15', function(){
      expect(javabuzz.says(2)).toBe(2);
    });
  });



});
