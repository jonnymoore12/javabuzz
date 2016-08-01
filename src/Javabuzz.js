var Javabuzz = function(){};

Javabuzz.prototype._isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
};

Javabuzz.prototype._isDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5);
};

Javabuzz.prototype._isDivisibleByFifteen = function(number){
  return this._isDivisibleBy(number, 15);
};

Javabuzz.prototype._isDivisibleBy = function(number, divisor){
  return (number % divisor === 0);
};

Javabuzz.prototype.says = function(number){
  if (this._isDivisibleByFifteen(number)){
    return "Javabuzz";
  }
  if (this._isDivisibleByFive(number)){
    return "Buzz";
  }
  if (this._isDivisibleByThree(number)){
    return "Java";
  }
    return (number);
};
