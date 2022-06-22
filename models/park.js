const Park = function (name, ticket_price) {
    this.name = name;
    this.ticket_price = ticket_price;
    this.dino_list = dino_list;
};

Park.prototype.addDino = function (dino) {
    this.dino_list.push(dino)
}

Park.prototype.delDino = function (dino) {
    this.dino_list.pop(dino)
}

// Park.prototype.popular = function (dino_list) {
//     this.dino_list = Math.max(dino_list['guestsAttractedPerDay'])
// }


Park.prototype.findSpecies = function (dino_list) {
    let = []
    for (dino in dino_list) {
        if dino.species === 'Coelophysis';

    }
}

module.exports = Park;

