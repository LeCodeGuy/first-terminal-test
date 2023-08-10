import assert from "assert";
import greet from "../greet.js";

describe('The greet function', function(){

    it('should greet Andrew correctly', function(){
        assert.equal('Hello, Andre', greet('Andre'));
    });
    it('should greet Karen correctly', function(){
        assert.equal('Hello, Karen', greet('Karen'));
    });
    it('should greet Devan correctly', function(){
        assert.equal('Hello, Devan', greet('Devan'));
    });
});

