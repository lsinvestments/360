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
        "yaw": -1.8776160743954815,
        "pitch": 0.1476889579916687,
        "fov": 1.4898447516704054
      },
      "linkHotspots": [
        {
          "yaw": 2.7637048350846882,
          "pitch": 0.3077423834632782,
          "rotation": 0,
          "target": "1-kuchnia"
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
        "yaw": -0.2656778972480254,
        "pitch": 0.028501377858036747,
        "fov": 1.4898447516704054
      },
      "linkHotspots": [
        {
          "yaw": -1.413423496746507,
          "pitch": 0.303133411958461,
          "rotation": 0,
          "target": "0-salon"
        },
        {
          "yaw": 2.108004451308692,
          "pitch": 0.018396861364387007,
          "rotation": 0,
          "target": "2-sypialnia"
        },
        {
          "yaw": 1.258209310449331,
          "pitch": 0.010926106252490797,
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
        "yaw": -2.1475234865039177,
        "pitch": 0.22705990707422075,
        "fov": 1.4898447516704054
      },
      "linkHotspots": [
        {
          "yaw": 0.0002814127777792663,
          "pitch": -0.22811183361898202,
          "rotation": 0,
          "target": "1-kuchnia"
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
        "yaw": 0.48287442638510214,
        "pitch": 0.0025910343507309364,
        "fov": 1.4898447516704054
      },
      "linkHotspots": [
        {
          "yaw": -1.2369615583329434,
          "pitch": 0.019896812758101845,
          "rotation": 0,
          "target": "1-kuchnia"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Brodzinskiego M10",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
