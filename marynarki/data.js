var APP_DATA = {
  "scenes": [
    {
      "id": "0-salon",
      "name": "Salon",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -0.4226929504007124,
        "pitch": 0.22807820093083997,
        "fov": 1.5001956320885046
      },
      "linkHotspots": [
        {
          "yaw": -2.2501176218347396,
          "pitch": 0.39705097086757135,
          "rotation": 0,
          "target": "1-hol"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hol",
      "name": "Hol",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 0.5837163174681965,
        "pitch": 0.02582092309963535,
        "fov": 1.5001956320885046
      },
      "linkHotspots": [
        {
          "yaw": 0.8286686783581505,
          "pitch": 0.1366497729234144,
          "rotation": 0,
          "target": "0-salon"
        },
        {
          "yaw": 1.238436052472423,
          "pitch": 0.19569633894955984,
          "rotation": 0,
          "target": "4-wc"
        },
        {
          "yaw": 2.170755455434098,
          "pitch": 0.3598438448053667,
          "rotation": 0,
          "target": "5-pokj"
        },
        {
          "yaw": -2.889172092505669,
          "pitch": 0.21246122966146075,
          "rotation": 0,
          "target": "2-sypialnia"
        },
        {
          "yaw": -2.392116558501618,
          "pitch": 0.15515990215587294,
          "rotation": 0,
          "target": "3-azienka"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sypialnia",
      "name": "Sypialnia",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -0.3005844822878885,
        "pitch": 0.14717896270032504,
        "fov": 1.5001956320885046
      },
      "linkHotspots": [
        {
          "yaw": 1.7920787470128072,
          "pitch": 0.08247612169319218,
          "rotation": 0,
          "target": "1-hol"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-azienka",
      "name": "Łazienka",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 2.7733592876317967,
        "pitch": 0.35865981345617826,
        "fov": 1.5001956320885046
      },
      "linkHotspots": [
        {
          "yaw": 1.7725133091772642,
          "pitch": 0.31108781284704534,
          "rotation": 0,
          "target": "1-hol"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-wc",
      "name": "WC",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -2.084042415472915,
        "pitch": 1.0011474804133549,
        "fov": 1.5001956320885046
      },
      "linkHotspots": [
        {
          "yaw": 0.44137029697744623,
          "pitch": 0.4413104277908353,
          "rotation": 0,
          "target": "1-hol"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-pokj",
      "name": "Pokój",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 0.529270299524903,
        "pitch": 0.29602689344029365,
        "fov": 1.5001956320885046
      },
      "linkHotspots": [
        {
          "yaw": -1.998450319256035,
          "pitch": 0.06638219374129051,
          "rotation": 0,
          "target": "1-hol"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Marynarki Wojennej",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
