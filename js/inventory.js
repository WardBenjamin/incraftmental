var inventory = {

  selected : null,

  objects: {

    blocks : {
      stone:          {display:'Stone'              , symbol: 's',                         },
      grass:          {display:'Grass'              , symbol: '-',                         },
      dirt:           {display:'Dirt'               , symbol: '%',                         },
      cobble:         {display:'Cobblestone'        , symbol: 'C',                         },
      planks:         {display:'Planks'             , symbol: 'P', recipe:'='              },
      sand:           {display:'Sand'               , symbol: 'S',                         },
      gravel:         {display:'Gravel'             , symbol: '$',                         },
      gold_ore:       {display:'Gold Ore'           , symbol: 'G',                         },
      iron_ore:       {display:'Iron Ore'           , symbol: 'I',                         },
      wood:           {display:'Wood'               , symbol: '=',                         },
      glass:          {display:'Glass'              , symbol: '~',                         },
      bed:            {display:'Bed'                , symbol: 'B', recipe:'WWPPP',         },
      wool:           {display:'Wool'               , symbol: 'W',                         },
      tnt:            {display:'TNT'                , symbol: 'X', recipe:'xSxSxSxSx'      },
      obsidian:       {display:'Obsidian'           , symbol: 'O',                         },
      torch:          {display:'Torch'              , symbol: 'L', recipe:'c  |', yield:4  },
      chest:          {display:'Chest'              , symbol: '&', recipe:'PPPP PPPP'      },
      crafting_table: {display:'Crafting Table'     , symbol: 'T', recipe:'PP PP'          },
      furnace:        {display:'Furnace'            , symbol: 'F', recipe:'CCCC CCCC'      },
      cactus:         {display:'Cactus'             , symbol: '!',                         },
      clay:           {display:'Clay'               , symbol: '.',                         },
      cake:           {display:'Cake'               , symbol: '*', recipe: 'MMM,o,;;;'     }
    },

    items: {
      apple :           {display:'Apple',           symbol: 'a',                           },
      arrow :           {display:'Arrow',           symbol: '^', recipe: 'Y   |   f'       },
      coal :            {display:'Coal',            symbol: 'c',                           },
      diamond :         {display:'Diamond',         symbol: 'd',                           },
      iron_ingot :      {display:'Iron Ingot',      symbol: 'i',                           },
      gold_ingot :      {display:'Gold Ingot',      symbol: 'g',                           },
      stick :           {display:'Stick',           symbol: '|', recipe: 'P  P', yield:4   },
      bowl :            {display:'Bowl',            symbol: 'U', recipe: 'P P P'           },
      mushrooom :       {display:'Mushroom',        symbol: 'm',                           },
      stew :            {display:'Mushroom Stew',   symbol: 'V', recipe: 'm  m  b'         },
      string :          {display:'String',          symbol: '@',                           },
      feather :         {display:'Feather',         symbol: 'f',                           },
      gunpowder :       {display:'Gunpowder',       symbol: 'x',                           },
      seeds :           {display:'Seeds',           symbol: ':',                           },
      wheat :           {display:'Wheat',           symbol: ';', recipe: ':::'             },
      bread :           {display:'Bread',           symbol: 'b',                           },
      flint :           {display:'Flint',           symbol: 'Y',                           },
      porkchop :        {display:'Raw Porkchop',    symbol: 'q',                           },
      cooked_porkchop : {display:'Cooked Porkchop', symbol: 'Q',                           },
      redstone :        {display:'Redstone',        symbol: 'r',                           },
      boat :            {display:'Boat',            symbol: '+', recipe: 'P PPPP'          },
      leather :         {display:'Leather',         symbol: 'l',                           },
      milk :            {display:'Milk',            symbol: 'M',                           },
      brick :           {display:'Brick',           symbol: '[',                           },
      cane :            {display:'Sugar Cane',      symbol: '/',                           },
      paper :           {display:'Paper',           symbol: '_', recipe: '///', yield:3    },
      book :            {display:'Book',            symbol: 'p', recipe: '___l'            },
      egg :             {display:'Egg',             symbol: 'o',                           },
      compass :         {display:'Compass',         symbol: '>',                           },
      fish :            {display:'Raw Fish',        symbol: 'z',                           },
      cooked_fish :     {display:'Cooked Fish',     symbol: 'Z',                           },
      sugar :           {display:'Sugar',           symbol: ',', recipe: '/'               },
      sapling:          {display:'Sapling',         symbol: 's',                           }
    },

    tools : {
      wooden_sword :    {display:'Wooden Sword',    recipe: 'P  P  |' , bonus:1, gives: {'porkchop':0.05}                                                                              },
      wooden_shovel :   {display:'Wooden Shovel',   recipe: 'P  |  |' , bonus:1, gives: {'dirt':0.5}                                                                                   },
      wooden_pickaxe :  {display:'Wooden Pickaxe',  recipe: 'PPP |  |', bonus:1, gives: {'cobble':0.5, 'coal':0.05}                                                                    },
      wooden_axe :      {display:'Wooden Axe',      recipe: 'PP P|  |', bonus:1, gives: {'wood':0.5}                                                                                   },
      stone_sword :     {display:'Stone Sword',     recipe: 'C  C  |' , bonus:2, gives: {'porkchop':0.1, 'egg':0.1}                                                                    },
      stone_shovel :    {display:'Stone Shovel',    recipe: 'C  |  |' , bonus:2, gives: {'dirt':0.8,'flint':0.01,'gravel':0.1, 'sand':0.2}                                             },
      stone_pickaxe :   {display:'Stone Pickaxe',   recipe: 'CCC |  |', bonus:2, gives: {'cobble':0.8, 'coal':0.1, 'iron_ore':0.05}                                                    },
      stone_axe :       {display:'Stone Axe',       recipe: 'CC C|  |', bonus:2, gives: {'wood':0.7, 'sapling':0.1}                                                                    },
      iron_sword :      {display:'Iron Sword',      recipe: 'i  i  |' , bonus:3, gives: {'leather':0.1, 'porkchop':0.1, 'egg':0.1, 'feather':0.1}                                      },
      iron_shovel :     {display:'Iron Shovel',     recipe: 'i  |  |' , bonus:3, gives: {'dirt':0.8,'flint':0.01,'gravel':0.1, 'sand':0.2}                                             },
      iron_picaxe :     {display:'Iron Pickaxe',    recipe: 'iii |  |', bonus:3, gives: {'cobble':0.8, 'coal':0.1, 'iron_ore':0.1, 'gold_ore':0.01}                                    },
      iron_axe :        {display:'Iron Axe',        recipe: 'ii i|  |', bonus:3, gives: {'wood':0.8, 'sapling':0.1, 'apple':0.05}                                                      },
      gold_sword :      {display:'Golden Sword',    recipe: 'g  g  |' , bonus:4, gives: {'leather':0.1, 'porkchop':0.1, 'egg':0.1, 'feather':0.1, 'wool':0.1}                          },
      gold_shovel :     {display:'Golden Shovel',   recipe: 'g  |  |' , bonus:4, gives: {'dirt':0.8,'flint':0.01,'gravel':0.1, 'sand':0.2, 'clay':0.1}                                 },
      gold_pickaxe :    {display:'Golden Pickaxe',  recipe: 'ggg |  |', bonus:4, gives: {'cobble':0.8, 'coal':0.1, 'iron_ore':0.1, 'gold_ore':0.02, 'diamond': 0.01}                   },
      gold_axe :        {display:'Golden Axe',      recipe: 'gg g|  |', bonus:4, gives: {'wood':0.8, 'sapling':0.1, 'apple':0.2}                                                       },
      diamond_sword :   {display:'Diamond Sword',   recipe: 'd  d  |' , bonus:5, gives: {'leather':0.1, 'porkchop':0.1, 'egg':0.1, 'feather':0.1, 'wool':0.1}                          },
      diamond_shovel :  {display:'Diamond Shovel',  recipe: 'd  |  |' , bonus:5, gives: {'dirt':0.8,'flint':0.05,'gravel':0.1, 'sand':0.2, 'clay':0.1}                                 },
      diamond_pickaxe : {display:'Diamond Pickaxe', recipe: 'ddd |  |', bonus:5, gives: {'cobble':0.8, 'coal':0.1, 'iron_ore':0.2, 'gold_ore':0.05, 'diamond': 0.02, 'redstone': 0.05} },
      diamond_axe :     {display:'Diamond Axe',     recipe: 'dd d|  |', bonus:5, gives: {'wood':0.8, 'sapling':0.1, 'apple':0.05}                                                      },
      wooden_hoe :      {display:'Wooden Hoe',      recipe: 'PP  |  |', bonus:1, gives: {'seeds': 0.1}                                                                                 },
      stone_hoe :       {display:'Stone Hoe',       recipe: 'CC  |  |', bonus:2, gives: {'seeds': 0.2, 'cactus':0.05}                                                                  },
      iron_hoe :        {display:'Iron Hoe',        recipe: 'ii  |  |', bonus:3, gives: {'seeds': 0.2, 'cactus':0.1, 'mushroom':0.1}                                                   },
      gold_hoe :        {display:'Gold Hoe',        recipe: 'gg  |  |', bonus:4, gives: {'seeds': 0.2, 'cactus':0.1, 'mushroom':0.1, 'cane':0.1}                                       },
      diamond_hoe :     {display:'Diamond Hoe',     recipe: 'dd  |  |', bonus:5, gives: {'seeds': 0.2, 'cactus':0.1, 'mushroom':0.1, 'cane':0.1}                                       },
      fishing_rod :     {display:'Fishing Rod',     recipe: '| |@| @' , bonus:1, gives: {'fish':0.1}                                                                                   },
      bow :             {display:'Bow',             recipe: '|@| @ |@', bonus:1, gives: {'gunpowder':0.1}                                                                              }
    },

    armour : {
      leather_helmet :   {display:'Leather Cap',        recipe:'llll l'   },
      leather_chest :    {display:'Leather Tunic',      recipe:'l lllllll'},
      leather_pants :    {display:'Leather Pants',      recipe:'llll ll l'},
      leather_boots :    {display:'Leather Boots',      recipe:'l ll l'   },
      iron_helmet :      {display:'Iron Helmet',        recipe:'iiii i'   },
      iron_chest :       {display:'Iron Chestplate',    recipe:'i iiiiiii'},
      iron_leggings :    {display:'Iron Leggings',      recipe:'iiii ii i'},
      iron_boots :       {display:'Iron Boots',         recipe:'i ii i'   },
      diamond_helmet :   {display:'Diamond Helmet',     recipe:'dddd d'   },
      diamond_chest :    {display:'Diamond Chestplate', recipe:'d ddddddd'},
      diamond_leggings : {display:'Diamond Leggings',   recipe:'dddd dd d'},
      diamond_boots :    {display:'Diamond Boots',      recipe:'d dd d'   },
      gold_helmet :      {display:'Golden Helmet',      recipe:'gggg g'   },
      gold_chest :       {display:'Golden Chestplate',  recipe:'g ggggggg'},
      gold_leggings :    {display:'Golden Leggings',    recipe:'gggg gg g'},
      gold_boots :       {display:'Golden Boots',       recipe:'g gg g'   }
    }
  },

  init : function(){
    for(var group in this.objects){
      for(var object in this.objects[group]){
        this.objects[group][object].quantity = 0;
        this.objects[group][object].hasOwned = false;
      }
    }
  },

  addObject : function(slug,quantity){
    if(typeof(quantity)==='undefined') quantity = 1;
    for(var group in this.objects){
      if(slug in this.objects[group]){
        this.objects[group][slug].quantity += quantity;
        this.objects[group][slug].hasOwned = true;
      }
    }
  },

  getObject : function(slug){
    for(var group in this.objects){
      if(slug in this.objects[group]){
        return this.objects[group][slug];
      }
    }
  },

  doTools : function(){
    for(var tool in this.objects.tools){
      if(this.objects.tools[tool].quantity < 1) continue;
      for(var slug in this.objects.tools[tool].gives){
        if(Math.random() < this.objects.tools[tool].gives[slug]){
          this.addObject(slug,this.objects.tools[tool].bonus * this.objects.tools[tool].quantity);
        }
      }
    }
  },

  updateDisplay : function(){
    var inventoryText = "";
    for(var group in this.objects){
      var showGroup = false;
      var groupText = "<h3>" + group.capitalize() + "</h3>";
      for(var object in this.objects[group]){
        if(this.objects[group][object].hasOwned){
          showGroup = true;
          groupText += '<div class="inventory-item';
          groupText += (this.selected == object) ? " selected" : "";
          groupText += '" data-object="' + object + '">' + this.objects[group][object].display + " - " + this.objects[group][object].quantity + '</div>';
        }
      }
      if(showGroup){
        inventoryText += groupText;
      }
    }
    $('#inventory').html(inventoryText);
    buttons.hook_inventory();
  },

};