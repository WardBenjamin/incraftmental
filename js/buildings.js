var buildings = {
  objects : {
    house        : { width: 4, height: 4,   cost: {stone: 100,   cobble: 200,   plank: 400,   glass: 50 }},
    barn         : { width: 4, height: 8,   cost: {stone: 100,   cobble: 800,   plank: 1000,  wood:  500}},
    mill         : { width: 6, height: 6,   cost: {stone: 1000,  cobble: 500,   plank: 600,   wood:  300,  dirt: 5000}},
    church       : { width: 8, height: 4,   cost: {stone: 5000,  cobble: 1000,  plank:1000,   wood: 1000,  glass: 5000, gold: 100}},
    farm         : { width: 8, height: 8,   cost: {stone: 1000,  cobble: 900,   plank:10000,  wood: 5000,  dirt: 50000, sand: 50000}},
    barracks     : { width: 8, height: 8,   cost: {stone: 10000, cobble: 900,   plank:1000,   wood: 5000,  iron: 1000, gold: 1000}},
    mine         : { width: 8, height: 8,   cost: {stone: 10000, cobble: 10000, plank:10000,  wood: 10000, iron: 5000}},
    factory      : { width: 10, height: 6,  cost: {stone: 20000, cobble: 10000, plank:10000,  wood: 10000, iron: 10000, gold: 5000, redstone: 1000}},
    market       : { width: 10, height: 10, cost: {stone: 80000, cobble: 20000, plank:100000, wood: 10000, glass: 50000, iron: 20000, gold: 30000, redstone: 5000}},
    university   : { width: 12, height: 10, cost: {stone: 100000,cobble: 80000, plank:120000, wood: 40000, glass: 80000, iron: 40000, gold: 80000, redstone: 10000}},
  },

  canBuild : function(slug){
    for(var object in this.objects[slug].cost){
      if(inventory.getObject(object).quantity < this.objects[slug].cost[object]){
        return false;
      }
    }
    return true;
  },

  build : function(slug){
    switch(slug){
      case 'house':
        villagers.addVillager();
        break;
    }
  },

};