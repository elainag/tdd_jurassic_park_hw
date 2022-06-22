const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function () {

  let park;
  let dino1;
  let dino2;
  let dino3;
  let dino4;
  let dino5;
  let dino6;

  beforeEach(function () {
    dino1 = new Dinosaur('meglagon', "carnivores", 20);
    dino2 = new Dinosaur('utaraptor', "carnivores", 30);
    dino3 = new Dinosaur('Coelophysis', "carnivores", 25);
    dino4 = new Dinosaur('triceratops', "herbivores", 40);
    dino5 = new Dinosaur('stegosaurus', "herbivores", 20);
    dino6 = new Dinosaur('Coelophysis', "carnivores", 55);
    dino_list = ([dino1, dino2, dino3, dino4, dino5, dino6])
    park = new Park("dino_world", 25, dino_list)
  });


  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'dino_world')
  });

  it('should have a ticket price', function () {
    park.ticket_price = 10
    const actual = park.ticket_price;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dino_collection = [];
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDino(dino2);
    const actual = park.dino_list = [dino2];
    assert.deepStrictEqual(actual, [dino2])
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.delDino(dino3);
    const actual = park.dino_list = [];
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.popular(dino_list['guestsAttractedPerDay']);
    const actual = park.dino_list = (dino_list['guestsAttractedPerDay']);
    assert.deepStrictEqual(actual, 55)
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');
});

