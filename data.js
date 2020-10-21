var APP_DATA = {
  "scenes": [
    {
      "id": "0-start-of-tour",
      "name": "Start of Tour",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.754632200489528,
        "pitch": 0.1855030409856937,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 2.763078362410911,
          "pitch": 0.2976207220090945,
          "rotation": 0,
          "target": "1-front-door-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-front-door-outside",
      "name": "Front Door (outside)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.197646995331155,
        "pitch": 0.2592555196151469,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.971346137096992,
          "pitch": 0.21619027910358568,
          "rotation": 0,
          "target": "2-front-door-inside"
        },
        {
          "yaw": -1.1954214787520527,
          "pitch": 0.3055665336868003,
          "rotation": 0,
          "target": "0-start-of-tour"
        },
        {
          "yaw": 2.0919046282043974,
          "pitch": -0.05218172996133852,
          "rotation": 0,
          "target": "10-backyard-right-alley"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-front-door-inside",
      "name": "Front Door (inside)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.5080719021718192,
        "pitch": 0.25746320583362703,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -0.197800287992834,
          "pitch": 0.24362798831087495,
          "rotation": 0,
          "target": "3-den"
        },
        {
          "yaw": -1.9197042667325181,
          "pitch": 0.23706903031348148,
          "rotation": 0,
          "target": "1-front-door-outside"
        },
        {
          "yaw": 2.731829748469398,
          "pitch": 0.5791062718769133,
          "rotation": 0,
          "target": "13-downstairs-hallway"
        },
        {
          "yaw": 0.5542702833127606,
          "pitch": 0.13455674180060484,
          "rotation": 0,
          "target": "4-dining-table"
        },
        {
          "yaw": 0.3596706134241998,
          "pitch": 0.040393349795127875,
          "rotation": 0,
          "target": "8-backyard-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-den",
      "name": "Den",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.4345790320711442,
        "pitch": 0.28510706675515607,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -3.1366842337956804,
          "pitch": 0.3628732239103396,
          "rotation": 0,
          "target": "2-front-door-inside"
        },
        {
          "yaw": 2.543055610342087,
          "pitch": 0.24115184175608206,
          "rotation": 0,
          "target": "5-stairs"
        },
        {
          "yaw": 1.4992471675873436,
          "pitch": 0.19039529789769105,
          "rotation": 0,
          "target": "4-dining-table"
        },
        {
          "yaw": 1.8721197271748764,
          "pitch": 0.0948266321002258,
          "rotation": 0,
          "target": "7-counter-left-side"
        },
        {
          "yaw": 1.31792449052851,
          "pitch": 0.09077406798012433,
          "rotation": 0,
          "target": "6-counter-right-side"
        },
        {
          "yaw": 3.00088216871196,
          "pitch": 0.22906505285450685,
          "rotation": 0,
          "target": "13-downstairs-hallway"
        },
        {
          "yaw": -2.841670125052774,
          "pitch": 0.06907421790859658,
          "rotation": 0,
          "target": "1-front-door-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dining-table",
      "name": "Dining Table",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.4005602559761066,
        "pitch": 0.20604976892648352,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 1.9609132328430041,
          "pitch": 0.26080272868924226,
          "rotation": 0,
          "target": "5-stairs"
        },
        {
          "yaw": 2.249215573353645,
          "pitch": 0.28484652919342324,
          "rotation": 0,
          "target": "2-front-door-inside"
        },
        {
          "yaw": 2.344562237290127,
          "pitch": 0.04980650974170864,
          "rotation": 0,
          "target": "1-front-door-outside"
        },
        {
          "yaw": -0.5632238495404192,
          "pitch": 0.20148271067869672,
          "rotation": 0,
          "target": "6-counter-right-side"
        },
        {
          "yaw": 0.5252648256297938,
          "pitch": 0.19721179071927963,
          "rotation": 0,
          "target": "7-counter-left-side"
        },
        {
          "yaw": 3.13216398376487,
          "pitch": 0.24895267135494947,
          "rotation": 0,
          "target": "3-den"
        },
        {
          "yaw": -1.6918035439796952,
          "pitch": 0.16337920890764757,
          "rotation": 0,
          "target": "8-backyard-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-stairs",
      "name": "Stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.008486361245483,
        "pitch": 0.16659107496450076,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -3.0602104969858566,
          "pitch": 0.20529591711399675,
          "rotation": 0,
          "target": "4-dining-table"
        },
        {
          "yaw": 2.295722123562973,
          "pitch": 0.28004137850446575,
          "rotation": 0,
          "target": "3-den"
        },
        {
          "yaw": -1.7645295698219279,
          "pitch": -0.4464908815948583,
          "rotation": 0,
          "target": "16-top-of-stairs"
        },
        {
          "yaw": 3.1414397240826712,
          "pitch": 0.020881659344848202,
          "rotation": 0,
          "target": "8-backyard-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-counter-right-side",
      "name": "Counter (right-side)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.4972854423116004,
        "pitch": 0.3580718144111721,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 2.670999275694916,
          "pitch": 0.19792658068830882,
          "rotation": 0,
          "target": "4-dining-table"
        },
        {
          "yaw": 1.5244280402745751,
          "pitch": 0.3648905241652134,
          "rotation": 0,
          "target": "7-counter-left-side"
        },
        {
          "yaw": 2.900287599665991,
          "pitch": 0.09945200535342025,
          "rotation": 0,
          "target": "3-den"
        },
        {
          "yaw": 2.4476248667120863,
          "pitch": 0.10375573343938171,
          "rotation": 0,
          "target": "2-front-door-inside"
        },
        {
          "yaw": -3.0054618181300725,
          "pitch": 0.17284794342682197,
          "rotation": 0,
          "target": "8-backyard-entrance"
        },
        {
          "yaw": 2.344526180291224,
          "pitch": 0.0009930781426028545,
          "rotation": 0,
          "target": "5-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-counter-left-side",
      "name": "Counter (left-side)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.5236926993102706,
        "pitch": 0.3157447721459228,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -1.6440685697706314,
          "pitch": 0.44575711124123885,
          "rotation": 0,
          "target": "6-counter-right-side"
        },
        {
          "yaw": -2.7779306520073828,
          "pitch": 0.17963959892629688,
          "rotation": 0,
          "target": "4-dining-table"
        },
        {
          "yaw": -2.431425132635715,
          "pitch": 0.05922494762898012,
          "rotation": 0,
          "target": "8-backyard-entrance"
        },
        {
          "yaw": -3.029584106448894,
          "pitch": 0.08883007572325141,
          "rotation": 0,
          "target": "3-den"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-backyard-entrance",
      "name": "Backyard entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.6066317610636904,
        "pitch": 0.134975121282622,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 3.0604170888016835,
          "pitch": 0.1396577430145136,
          "rotation": 0,
          "target": "4-dining-table"
        },
        {
          "yaw": -1.5740108764025322,
          "pitch": 0.30055006878611934,
          "rotation": 0,
          "target": "9-backyard-right"
        },
        {
          "yaw": 1.5849415608316368,
          "pitch": 0.2127802115132802,
          "rotation": 0,
          "target": "11-backyard-left"
        },
        {
          "yaw": -1.829071832411394,
          "pitch": 0.11436582374785509,
          "rotation": 0,
          "target": "10-backyard-right-alley"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-backyard-right",
      "name": "Backyard (right)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.533297230270854,
        "pitch": 0.122166987637371,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -3.0679678598491034,
          "pitch": 0.07179442406385306,
          "rotation": 0,
          "target": "4-dining-table"
        },
        {
          "yaw": 2.897938176607666,
          "pitch": 0.2840279349500161,
          "rotation": 0,
          "target": "8-backyard-entrance"
        },
        {
          "yaw": -1.2606616643244237,
          "pitch": 0.4408358055965067,
          "rotation": 0,
          "target": "10-backyard-right-alley"
        },
        {
          "yaw": 2.9079579454418214,
          "pitch": 0.09798942352165874,
          "rotation": 0,
          "target": "11-backyard-left"
        },
        {
          "yaw": 3.037833910388205,
          "pitch": 0.02749929895226444,
          "rotation": 0,
          "target": "12-backyard-left-alley"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-backyard-right-alley",
      "name": "Backyard (right-alley)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.0204751186592436,
        "pitch": 0.17938521280247954,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.10118126463370203,
          "pitch": 0.3825009286413792,
          "rotation": 0,
          "target": "9-backyard-right"
        },
        {
          "yaw": 2.910027846967239,
          "pitch": -0.026233129040862835,
          "rotation": 0,
          "target": "1-front-door-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-backyard-left",
      "name": "Backyard (left)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.115590570571161,
        "pitch": 0.36134778842213855,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -1.3356767176432065,
          "pitch": 0.40495409060470067,
          "rotation": 0,
          "target": "8-backyard-entrance"
        },
        {
          "yaw": -1.7373185263251472,
          "pitch": 0.10372829543655726,
          "rotation": 0,
          "target": "4-dining-table"
        },
        {
          "yaw": 2.411774717489867,
          "pitch": 0.5012805730089678,
          "rotation": 0,
          "target": "12-backyard-left-alley"
        },
        {
          "yaw": -1.3130184929620068,
          "pitch": 0.17300813534119008,
          "rotation": 0,
          "target": "9-backyard-right"
        },
        {
          "yaw": -1.4770475025576424,
          "pitch": 0.038420724606604395,
          "rotation": 0,
          "target": "10-backyard-right-alley"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-backyard-left-alley",
      "name": "Backyard (left-alley)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.9992509436615773,
        "pitch": 0.3925392505043632,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.14508328958360117,
          "pitch": 0.23966903099747405,
          "rotation": 0,
          "target": "11-backyard-left"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-downstairs-hallway",
      "name": "Downstairs Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.6313089792509263,
        "pitch": 0.25025220889294886,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.3843545771648778,
          "pitch": 0.3778157101567565,
          "rotation": 0,
          "target": "2-front-door-inside"
        },
        {
          "yaw": -2.434766974913387,
          "pitch": 0.13478752935228933,
          "rotation": 0,
          "target": "3-den"
        },
        {
          "yaw": 2.3775973871702076,
          "pitch": 0.6507786735824386,
          "rotation": 0,
          "target": "14-downstairs-bathroom"
        },
        {
          "yaw": 0.9976534279272258,
          "pitch": 0.399802640050023,
          "rotation": 0,
          "target": "15-downstairs--bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-downstairs-bathroom",
      "name": "Downstairs Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.9465488393339214,
        "pitch": 0.37390604398843585,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.008915030877973962,
          "pitch": 0.6047813885114763,
          "rotation": 0,
          "target": "13-downstairs-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-downstairs--bedroom",
      "name": "Downstairs  Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.03715576041674673,
        "pitch": 0.25151183759234286,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.451856488423811,
          "pitch": 0.3147351409366621,
          "rotation": 0,
          "target": "13-downstairs-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-top-of-stairs",
      "name": "Top of stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.9881236040398349,
        "pitch": 0.35581854791966094,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 1.757553000851546,
          "pitch": 0.693882560817265,
          "rotation": 0,
          "target": "5-stairs"
        },
        {
          "yaw": 0.41943074354483123,
          "pitch": 0.4114723801321123,
          "rotation": 0,
          "target": "19-upstairs-den"
        },
        {
          "yaw": 1.6662197411447117,
          "pitch": 0.19661308696515079,
          "rotation": 0,
          "target": "20-upstairs-hallway-crossroads"
        },
        {
          "yaw": -3.011067766794893,
          "pitch": 0.4842731099292301,
          "rotation": 0,
          "target": "17-laundry-room-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-laundry-room-entrance",
      "name": "Laundry Room entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.8613009726022476,
        "pitch": 0.49701036314416136,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -1.829618829194997,
          "pitch": 0.8779883358452167,
          "rotation": 0,
          "target": "16-top-of-stairs"
        },
        {
          "yaw": 0.006282192229008388,
          "pitch": 0.38891256262916407,
          "rotation": 0,
          "target": "18-laundry-room-inner"
        },
        {
          "yaw": -1.4580518045202648,
          "pitch": 0.29051979325005206,
          "rotation": 0,
          "target": "19-upstairs-den"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-laundry-room-inner",
      "name": "Laundry Room (inner)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.840425439433261,
        "pitch": 0.12332039916383764,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 2.4520317065264186,
          "pitch": 0.46069906319804943,
          "rotation": 0,
          "target": "17-laundry-room-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-upstairs-den",
      "name": "Upstairs Den",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.728120648707794,
        "pitch": 0.3456905887732553,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.9232172638049647,
          "pitch": 0.40560365081813643,
          "rotation": 0,
          "target": "16-top-of-stairs"
        },
        {
          "yaw": -2.9901166008245674,
          "pitch": 0.2643808815122135,
          "rotation": 0,
          "target": "17-laundry-room-entrance"
        },
        {
          "yaw": 2.300769657453203,
          "pitch": 0.13330801641487255,
          "rotation": 0,
          "target": "20-upstairs-hallway-crossroads"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-upstairs-hallway-crossroads",
      "name": "Upstairs Hallway (crossroads)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.878198944061068,
        "pitch": 0.24024428191509628,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 2.5984321786732387,
          "pitch": 0.3147691983511933,
          "rotation": 0,
          "target": "19-upstairs-den"
        },
        {
          "yaw": 2.1166450581352727,
          "pitch": 0.26397049037632314,
          "rotation": 0,
          "target": "19-upstairs-den"
        },
        {
          "yaw": 2.0360073118570368,
          "pitch": 0.08366083233698873,
          "rotation": 0,
          "target": "17-laundry-room-entrance"
        },
        {
          "yaw": -2.4968937010094514,
          "pitch": 0.4365980867704664,
          "rotation": 0,
          "target": "21-upstairs-hallway-outside-bathroom"
        },
        {
          "yaw": 0.665017090502996,
          "pitch": 0.6548631807782339,
          "rotation": 0,
          "target": "29-hallway-master-bedroom"
        },
        {
          "yaw": 0.35891758162150467,
          "pitch": 0.3823862297881906,
          "rotation": 0,
          "target": "30-master-bedroom"
        },
        {
          "yaw": -2.477657078318993,
          "pitch": 0.27151624411459707,
          "rotation": 0,
          "target": "24-upstairs-bedroom-large-entrance"
        },
        {
          "yaw": -2.7148848749212675,
          "pitch": 0.13691218291997131,
          "rotation": 0,
          "target": "22-upstairs-bathroom"
        },
        {
          "yaw": -2.186091485545388,
          "pitch": 0.19752732276785423,
          "rotation": 0,
          "target": "27-upstairs-bedroom-small"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-upstairs-hallway-outside-bathroom",
      "name": "Upstairs Hallway (outside bathroom)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.038934267929105815,
        "pitch": 0.2205495553850234,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -0.1200361806302368,
          "pitch": 0.4093032270295591,
          "rotation": 0,
          "target": "20-upstairs-hallway-crossroads"
        },
        {
          "yaw": 0.5042981358532082,
          "pitch": 0.7604571541490444,
          "rotation": 0,
          "target": "22-upstairs-bathroom"
        },
        {
          "yaw": 2.984135434423859,
          "pitch": 0.7083584272555363,
          "rotation": 0,
          "target": "24-upstairs-bedroom-large-entrance"
        },
        {
          "yaw": -0.554537096358839,
          "pitch": 0.3695619751199466,
          "rotation": 0,
          "target": "27-upstairs-bedroom-small"
        },
        {
          "yaw": -0.1304033137320708,
          "pitch": 0.2537437493753707,
          "rotation": 0,
          "target": "29-hallway-master-bedroom"
        },
        {
          "yaw": -2.951824416307094,
          "pitch": 0.3465705951035485,
          "rotation": 0,
          "target": "25-upstairs-bedroom-large-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-upstairs-bathroom",
      "name": "Upstairs Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.0383704982045145,
        "pitch": 0.40002169577275026,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -1.2689888096856556,
          "pitch": 0.7761361742584647,
          "rotation": 0,
          "target": "21-upstairs-hallway-outside-bathroom"
        },
        {
          "yaw": 3.069763710159487,
          "pitch": 0.715999406984988,
          "rotation": 0,
          "target": "23-upstairs-bathroom-inner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-upstairs-bathroom-inner",
      "name": "Upstairs Bathroom (inner)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.5940761828973473,
        "pitch": 0.4186934745757398,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.03252966402622981,
          "pitch": 0.735001976790107,
          "rotation": 0,
          "target": "22-upstairs-bathroom"
        },
        {
          "yaw": -0.19593075262319104,
          "pitch": 0.27517023885559055,
          "rotation": 0,
          "target": "21-upstairs-hallway-outside-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-upstairs-bedroom-large-entrance",
      "name": "Upstairs Bedroom (large) entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.0292616702702162,
        "pitch": 0.4556592331388867,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.02454853222942255,
          "pitch": 0.6948307324275067,
          "rotation": 0,
          "target": "21-upstairs-hallway-outside-bathroom"
        },
        {
          "yaw": 0.24910883775663706,
          "pitch": 0.4637141840518595,
          "rotation": 0,
          "target": "22-upstairs-bathroom"
        },
        {
          "yaw": 0.011831345927001635,
          "pitch": 0.21895866651824392,
          "rotation": 0,
          "target": "20-upstairs-hallway-crossroads"
        },
        {
          "yaw": -2.2109292369666136,
          "pitch": 0.5688232619235691,
          "rotation": 0,
          "target": "25-upstairs-bedroom-large-"
        },
        {
          "yaw": -1.1853310744956573,
          "pitch": 0.25117913411452264,
          "rotation": 0,
          "target": "26-upstairs-bedroom-closet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-upstairs-bedroom-large-",
      "name": "Upstairs Bedroom (large) ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.804248777759847,
        "pitch": 0.10484098049121826,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.8274681769638796,
          "pitch": 0.4559399600362539,
          "rotation": 0,
          "target": "24-upstairs-bedroom-large-entrance"
        },
        {
          "yaw": 0.6912073797476577,
          "pitch": 0.2596211774478512,
          "rotation": 0,
          "target": "21-upstairs-hallway-outside-bathroom"
        },
        {
          "yaw": 0.25690842844223916,
          "pitch": 0.3807198206393778,
          "rotation": 0,
          "target": "26-upstairs-bedroom-closet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-upstairs-bedroom-closet",
      "name": "Upstairs Bedroom Closet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.813291591394453,
        "pitch": 0.4211786662554857,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.9926021691318159,
          "pitch": 0.3779351382462135,
          "rotation": 0,
          "target": "25-upstairs-bedroom-large-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-upstairs-bedroom-small",
      "name": "Upstairs Bedroom (small)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.24703121720535393,
        "pitch": 0.3454983018229818,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -0.46272315260389973,
          "pitch": 0.3218987838109868,
          "rotation": 0,
          "target": "22-upstairs-bathroom"
        },
        {
          "yaw": -0.30813023191820754,
          "pitch": 0.4540455161461274,
          "rotation": 0,
          "target": "21-upstairs-hallway-outside-bathroom"
        },
        {
          "yaw": 1.137335628611126,
          "pitch": 0.48619491377380797,
          "rotation": 0,
          "target": "28-upstairs-bedroom-small-closet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-upstairs-bedroom-small-closet",
      "name": "Upstairs Bedroom (small) closet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.800681113508091,
        "pitch": 0.3350618736663975,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.679375135824017,
          "pitch": 0.5834820266086833,
          "rotation": 0,
          "target": "27-upstairs-bedroom-small"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-hallway-master-bedroom",
      "name": "Hallway (master bedroom)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.3199453441893905,
        "pitch": 0.3287357528211814,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 1.5625318978862142,
          "pitch": 0.3447542502815235,
          "rotation": 0,
          "target": "21-upstairs-hallway-outside-bathroom"
        },
        {
          "yaw": 1.5451086038740982,
          "pitch": 0.20917636044410415,
          "rotation": 0,
          "target": "24-upstairs-bedroom-large-entrance"
        },
        {
          "yaw": 1.5968997045207693,
          "pitch": 0.601369902180398,
          "rotation": 0,
          "target": "20-upstairs-hallway-crossroads"
        },
        {
          "yaw": -2.8440764772070146,
          "pitch": 0.5413349979756106,
          "rotation": 0,
          "target": "30-master-bedroom"
        },
        {
          "yaw": 1.7050816825029358,
          "pitch": 0.12701255541592715,
          "rotation": 0,
          "target": "27-upstairs-bedroom-small"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-master-bedroom",
      "name": "Master Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.932647858397452,
        "pitch": 0.3711441037799261,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.9204494338309441,
          "pitch": 0.3669262094207948,
          "rotation": 0,
          "target": "20-upstairs-hallway-crossroads"
        },
        {
          "yaw": 0.8310365120165191,
          "pitch": 0.48859998122706827,
          "rotation": 0,
          "target": "29-hallway-master-bedroom"
        },
        {
          "yaw": -2.251749657707485,
          "pitch": 0.5944535749505953,
          "rotation": 0,
          "target": "31-master-bedroom-inner"
        },
        {
          "yaw": -0.5916104930244845,
          "pitch": 0.6044191487458157,
          "rotation": 0,
          "target": "32-master-bedroom-bathroom-entrance"
        },
        {
          "yaw": -0.8204758597457982,
          "pitch": 0.13964114512202386,
          "rotation": 0,
          "target": "35-master-bedroom-shower"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-master-bedroom-inner",
      "name": "Master Bedroom (inner)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.9811719618549635,
        "pitch": 0.3417883153858625,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -0.7805846296330916,
          "pitch": 0.48611279065357493,
          "rotation": 0,
          "target": "30-master-bedroom"
        },
        {
          "yaw": -0.7519844779514848,
          "pitch": 0.23430750676734569,
          "rotation": 0,
          "target": "29-hallway-master-bedroom"
        },
        {
          "yaw": -1.3526930382241105,
          "pitch": 0.3440250761753525,
          "rotation": 0,
          "target": "32-master-bedroom-bathroom-entrance"
        },
        {
          "yaw": -1.2108670123697483,
          "pitch": 0.055532750345077986,
          "rotation": 0,
          "target": "33-master-bedroom-toilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-master-bedroom-bathroom-entrance",
      "name": "Master Bedroom Bathroom entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.133912127337714,
        "pitch": 0.38593450324625067,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -1.5432209570150626,
          "pitch": 0.3451306858453478,
          "rotation": 0,
          "target": "31-master-bedroom-inner"
        },
        {
          "yaw": -2.090448892066309,
          "pitch": 0.522019722493507,
          "rotation": 0,
          "target": "30-master-bedroom"
        },
        {
          "yaw": 2.821705187638595,
          "pitch": 0.7817332560957482,
          "rotation": 0,
          "target": "33-master-bedroom-toilet"
        },
        {
          "yaw": 1.2561910830248628,
          "pitch": 0.7383167579752943,
          "rotation": 0,
          "target": "34-master-bedroom-bathroom-inner"
        },
        {
          "yaw": 1.1800370141860128,
          "pitch": 0.3482524052995011,
          "rotation": 0,
          "target": "36-master-bedroom-closet"
        },
        {
          "yaw": -0.7520511665899932,
          "pitch": 0.6921728550273532,
          "rotation": 0,
          "target": "35-master-bedroom-shower"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-master-bedroom-toilet",
      "name": "Master Bedroom toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.114933946925289,
        "pitch": 0.23696056274370036,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -1.4638967788248216,
          "pitch": 0.7534573177325061,
          "rotation": 0,
          "target": "32-master-bedroom-bathroom-entrance"
        },
        {
          "yaw": -1.6125471049635092,
          "pitch": 0.17499250100159358,
          "rotation": 0,
          "target": "35-master-bedroom-shower"
        },
        {
          "yaw": -0.7262809343955325,
          "pitch": 0.5874968354443872,
          "rotation": 0,
          "target": "34-master-bedroom-bathroom-inner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-master-bedroom-bathroom-inner",
      "name": "Master Bedroom Bathroom inner",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.2699257528250296,
        "pitch": 0.16877949800108638,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 2.671541045992586,
          "pitch": 0.18430257458490473,
          "rotation": 0,
          "target": "33-master-bedroom-toilet"
        },
        {
          "yaw": 3.01527247153913,
          "pitch": 0.6012490035246856,
          "rotation": 0,
          "target": "32-master-bedroom-bathroom-entrance"
        },
        {
          "yaw": -3.0783172791671642,
          "pitch": 0.24180991162332965,
          "rotation": 0,
          "target": "31-master-bedroom-inner"
        },
        {
          "yaw": 3.013933004522362,
          "pitch": 0.31484441096825755,
          "rotation": 0,
          "target": "30-master-bedroom"
        },
        {
          "yaw": -2.613171608081803,
          "pitch": 0.07533084592807526,
          "rotation": 0,
          "target": "35-master-bedroom-shower"
        },
        {
          "yaw": -0.2094720329092823,
          "pitch": 0.5834559765607672,
          "rotation": 0,
          "target": "36-master-bedroom-closet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-master-bedroom-shower",
      "name": "Master Bedroom shower",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.4566374694723567,
        "pitch": 0.5886354017857229,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.1804951950642995,
          "pitch": 0.24205614638173856,
          "rotation": 0,
          "target": "33-master-bedroom-toilet"
        },
        {
          "yaw": -2.1080791222817776,
          "pitch": 0.9278613585817439,
          "rotation": 0,
          "target": "32-master-bedroom-bathroom-entrance"
        },
        {
          "yaw": -2.9463401469165476,
          "pitch": 0.5155913276056996,
          "rotation": 0,
          "target": "34-master-bedroom-bathroom-inner"
        },
        {
          "yaw": -1.3581377517896378,
          "pitch": 0.43378473805103823,
          "rotation": 0,
          "target": "30-master-bedroom"
        },
        {
          "yaw": 3.0641069554062996,
          "pitch": 0.26058035107761945,
          "rotation": 0,
          "target": "36-master-bedroom-closet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-master-bedroom-closet",
      "name": "Master Bedroom Closet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.8072951499769854,
        "pitch": 0.36943386918483867,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -3.038182588531763,
          "pitch": 0.6564798409448933,
          "rotation": 0,
          "target": "34-master-bedroom-bathroom-inner"
        },
        {
          "yaw": -2.9160352448299864,
          "pitch": 0.36215281456313164,
          "rotation": 0,
          "target": "32-master-bedroom-bathroom-entrance"
        },
        {
          "yaw": -3.1318767518603448,
          "pitch": 0.14820154078044467,
          "rotation": 0,
          "target": "33-master-bedroom-toilet"
        },
        {
          "yaw": -2.961328205126671,
          "pitch": 0.24211903900235754,
          "rotation": 0,
          "target": "30-master-bedroom"
        },
        {
          "yaw": -2.8493613176071673,
          "pitch": 0.1770592562537736,
          "rotation": 0,
          "target": "31-master-bedroom-inner"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
