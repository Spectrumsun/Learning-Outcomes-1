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

	it("count for empty string", () => {
    let Count =  'hello';
    assert.equal((words(), Count));
  });


	
	





});

