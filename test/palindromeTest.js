var assert = require('assert');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
var server = "http://localhost:3000";

chai.use(chaiHttp);

describe('server', function() {
  describe('Palindrome', function() {
    it('should return 400 when the value is not a palindrome', function() {
      chai.request(server)
      .get('/jeff')
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
    });

    it('should return 200 when the value is a palindrome', function() {
      chai.request(server)
      .get('/ana')
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
    });

  });
});
