import words from '../words'
import chai  from 'chai'

const assert = chai.assert;





describe("words()", () => {
	it("counting a single word", () => {
    let Count = { word: 1 };
    assert.equal(JSON.stringify(words("word")), JSON.stringify(Count));
  });

	it("count double words", () => {
    let Count = { olly: 1, olly: 1 };
    assert.equal(JSON.stringify(words("olly")), JSON.stringify(Count));
  });

	it("counts multiple occurrences of words", () => {
	  let Count =  { my: 5, is: 2, a: 1, house: 3, }
	 assert.equal(JSON.stringify(words("my my my is a my my house is house house")), JSON.stringify(Count));
   });

	it("check for empty space", () => {
	  let Count =  { olly: 1,    };
	 assert.equal(JSON.stringify(words("olly")), JSON.stringify(Count));
   });

	it("it counts both capital and small letters has same word", () => {
	  let Count =  "empty string not allowed"
	 assert.equal(JSON.stringify(words("")), JSON.stringify(Count));
   });


});

words("")

