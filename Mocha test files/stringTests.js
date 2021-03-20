"use strict";
/* eslint-disable quotes */  
/* global require */
const strings = require("./strings.js");
const assert = require("assert");


describe("ucFirst", function() {
    it('Uppercases the first symbol', function() {
      assert.strictEqual(strings.ucFirst("john"), "John");
    });
  
    it("Doesn't die on an empty string", function() {
      assert.strictEqual(strings.ucFirst(""), "");
    });
  });

  describe("checkSpam", function() {
    it('finds spam in "buy ViAgRA now"', function() {
      assert.isTrue(strings.checkSpam('buy ViAgRA now'));
    });
  
    it('finds spam in "free xxxxx"', function() {
      assert.isTrue(strings.checkSpam('free xxxxx'));
    });
  
    it('no spam in "innocent rabbit"', function() {
      assert.isFalse(strings.checkSpam('innocent rabbit'));
    });
  });

  describe("truncate", function() {
    it("truncate the long string to the given length (including the ellipsis)", function() {
      assert.equal(
        strings.truncate("What I'd like to tell on this topic is:", 20),
        "What I'd like to te…"
      );
    });
  
    it("doesn't change short strings", function() {
      assert.equal(
        strings.truncate("Hi everyone!", 20),
        "Hi everyone!"
      );
    });
  
  });

  describe("extractCurrencyValue", function() {

    it("for the string $120 returns the number 120", function() {
      assert.strictEqual(strings.extractCurrencyValue('$120'), 120);
    });
  
  
  });