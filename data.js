var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "Living Room",
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
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0.06945700820091893,
        "pitch": 0.0076155242934792255,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": 0.06945700820091893,
          "pitch": 0.0076155242934792255,
          "rotation": 0,
          "target": "1-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining-area",
      "name": "Dining Area",
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
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0.02493327502849141,
        "pitch": 0.01776955668478486,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": 0.02493327502849141,
          "pitch": 0.01776955668478486,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": 3.0652570914851776,
          "pitch": 0.11709602331055535,
          "rotation": 0,
          "target": "0-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "Kitchen",
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
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0.5271606720309308,
        "pitch": 0,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": 0.06762440409530335,
          "pitch": 0.10521301261954008,
          "rotation": 0,
          "target": "3-entrance"
        },
        {
          "yaw": 3.100505865985732,
          "pitch": 0.08198344650618239,
          "rotation": 0,
          "target": "1-dining-area"
        },
        {
          "yaw": -0.7007194925628575,
          "pitch": 0.13067825256755228,
          "rotation": 5.497787143782138,
          "target": "5-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-entrance",
      "name": "Entrance",
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
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -3.029058193618276,
        "pitch": 0.061401297146893796,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": 3.0970051289186653,
          "pitch": 0.05485021005228319,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": -1.1412139268573505,
          "pitch": 0.14657448926443806,
          "rotation": 0.7853981633974483,
          "target": "4-common-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-common-bathroom",
      "name": "Common Bathroom",
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
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
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
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -1.373111074783278,
        "pitch": -0.07366155736064961,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": -1.373111074783278,
          "pitch": -0.07366155736064961,
          "rotation": 0,
          "target": "6-upstairs"
        },
        {
          "yaw": -0.0234025965483049,
          "pitch": 0.4311485368016932,
          "rotation": 0.7853981633974483,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-upstairs",
      "name": "Upstairs",
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
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -0.5645605845736732,
        "pitch": 1.7763568394002505e-15,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": -0.743697620524074,
          "pitch": -0.005068888457490317,
          "rotation": 0,
          "target": "9-2nd-living-room"
        },
        {
          "yaw": -1.0727603191554316,
          "pitch": -0.013486634523339092,
          "rotation": 0,
          "target": "8-3rd-bedroom"
        },
        {
          "yaw": 1.0677277301191381,
          "pitch": 0.28337103028276545,
          "rotation": 5.497787143782138,
          "target": "5-stairs"
        },
        {
          "yaw": -1.4037403365403183,
          "pitch": -0.08792532101191952,
          "rotation": 11.780972450961727,
          "target": "7-upstairs-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-upstairs-bathroom",
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
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": -2.1815529960146414,
          "pitch": 0.18346756295262523,
          "rotation": 0,
          "target": "6-upstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-3rd-bedroom",
      "name": "3rd Bedroom",
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
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0.739093509773113,
        "pitch": -0.022846572880439453,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": -1.482982460584104,
          "pitch": 0.1588436587350408,
          "rotation": 0,
          "target": "6-upstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-2nd-living-room",
      "name": "2nd Living Room",
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
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0.0595170386072752,
        "pitch": 0.007577975372033308,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": 0.7834562027213074,
          "pitch": 0.043184278026274114,
          "rotation": 0.7853981633974483,
          "target": "10-2nd-bedroom"
        },
        {
          "yaw": -1.5114704060412691,
          "pitch": 0.09025698740297372,
          "rotation": 0,
          "target": "7-upstairs-bathroom"
        },
        {
          "yaw": -1.1878907428922787,
          "pitch": 0.07933974187731252,
          "rotation": 0.7853981633974483,
          "target": "8-3rd-bedroom"
        },
        {
          "yaw": -2.0043314141972015,
          "pitch": 0.16505300273347068,
          "rotation": 5.497787143782138,
          "target": "6-upstairs"
        },
        {
          "yaw": 1.6120607897378356,
          "pitch": 0.11975834296700683,
          "rotation": 0,
          "target": "11-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-2nd-bedroom",
      "name": "2nd Bedroom",
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
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": 1.601531896090349,
          "pitch": 0.10706196306370153,
          "rotation": 0.7853981633974483,
          "target": "9-2nd-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-master-bedroom",
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
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": 2.247655415224882,
          "pitch": 0.041589484577112756,
          "rotation": 0,
          "target": "9-2nd-living-room"
        },
        {
          "yaw": 1.0746940866256427,
          "pitch": 0.0023212841017681285,
          "rotation": 0.7853981633974483,
          "target": "12-master-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-master-bathroom",
      "name": "Master Bathroom",
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
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": -2.651872276448133,
          "pitch": 0.09738805416778362,
          "rotation": 5.497787143782138,
          "target": "11-master-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Ayat_360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
