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
        "yaw": -1.8152784349048439,
        "pitch": 0.24653475023718485,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": -0.6775391021373878,
          "pitch": 0.2949348928814626,
          "rotation": 0,
          "target": "1-kuchnia"
        },
        {
          "yaw": 0.21675607047305867,
          "pitch": 0.04703826002670297,
          "rotation": 0,
          "target": "5-wc"
        },
        {
          "yaw": 0.5530722054380082,
          "pitch": 0.042677200283398165,
          "rotation": 0,
          "target": "4-azienka"
        },
        {
          "yaw": 0.6702883277108658,
          "pitch": 0.3566171939598455,
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
        "yaw": 0.7497680525685624,
        "pitch": 0.15402807361093096,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": 0.5103863930551444,
          "pitch": 0.3756205207328964,
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
        "yaw": 0.31028075591008175,
        "pitch": 0.2710205364975664,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": 2.884275592165965,
          "pitch": 0.06106218990026058,
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
        "yaw": -2.3232387198854276,
        "pitch": 0.06563926398363762,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": 2.1961015181591934,
          "pitch": 0.07027242840127634,
          "rotation": 0,
          "target": "2-sypialnia"
        },
        {
          "yaw": 0.9155075089020883,
          "pitch": 0.04106238825456643,
          "rotation": 0,
          "target": "0-salon"
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
        "yaw": -1.9270168241365333,
        "pitch": 0.48018913322400536,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": 0.796350025189092,
          "pitch": 0.030579998980243772,
          "rotation": 0,
          "target": "0-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-wc",
      "name": "wc",
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
        "yaw": 2.507628554630724,
        "pitch": 0.520393486302364,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": -0.5685843868028932,
          "pitch": 0.22187138383075222,
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
