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
        "yaw": -1.7794576913242803,
        "pitch": 0.2354868374248973,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": -0.603557836216785,
          "pitch": 0.311627601527551,
          "rotation": 0,
          "target": "1-kuchnia"
        },
        {
          "yaw": 0.19595363845767366,
          "pitch": 0.01260382770923485,
          "rotation": 0,
          "target": "5-wc"
        },
        {
          "yaw": 0.5454119861358073,
          "pitch": -0.0027490147329150005,
          "rotation": 0,
          "target": "4-azienka"
        },
        {
          "yaw": 0.6643242234597118,
          "pitch": 0.3666513454174236,
          "rotation": 0,
          "target": "3-pokj"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kuchnia",
      "name": "Kuchnia",
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
        "yaw": 0.6193197754514017,
        "pitch": 0.08713884288845541,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": 0.4716406173427181,
          "pitch": 0.3733018406364721,
          "rotation": 0,
          "target": "0-salon"
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
        "yaw": 0.40715955959410266,
        "pitch": 0.25915299068419273,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": 2.8813164814826155,
          "pitch": 0.09735101747443053,
          "rotation": 0,
          "target": "3-pokj"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-pokj",
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
        "yaw": -2.2003506794082845,
        "pitch": 0.20635824275605685,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": 0.9469281869100321,
          "pitch": 0.03847885634575654,
          "rotation": 0,
          "target": "0-salon"
        },
        {
          "yaw": 2.242274885791865,
          "pitch": 0.10819838781318936,
          "rotation": 0,
          "target": "2-sypialnia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-azienka",
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
        "yaw": -1.8862985331925195,
        "pitch": 0.57314244882728,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": 0.7823697393900044,
          "pitch": 0.04070869256001863,
          "rotation": 0,
          "target": "0-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-wc",
      "name": "Wc",
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
        "yaw": 2.561916671917908,
        "pitch": 0.5868163189724598,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": -0.5622226894002029,
          "pitch": 0.16554183775793163,
          "rotation": 0,
          "target": "0-salon"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Rogoyskiego",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
