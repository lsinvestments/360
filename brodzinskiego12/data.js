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
        "yaw": -2.6615390928304095,
        "pitch": 0.10481902908013652,
        "fov": 1.4898447516704054
      },
      "linkHotspots": [
        {
          "yaw": -2.8303260798349044,
          "pitch": 0.41856195799205054,
          "rotation": 0,
          "target": "1-kuchnia"
        },
        {
          "yaw": 2.9394427332607407,
          "pitch": 0.06784576823838151,
          "rotation": 0,
          "target": "2-sypialnia"
        },
        {
          "yaw": 2.6615455601980855,
          "pitch": 0.05475884394896546,
          "rotation": 0,
          "target": "3-azienka"
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
        "yaw": 0.2307711983716061,
        "pitch": 0.09586827097705353,
        "fov": 1.4898447516704054
      },
      "linkHotspots": [
        {
          "yaw": 0.3813085318074201,
          "pitch": 0.29159743292625784,
          "rotation": 0,
          "target": "0-salon"
        },
        {
          "yaw": 1.7494874683785495,
          "pitch": -0.051599703971426436,
          "rotation": 0,
          "target": "3-azienka"
        },
        {
          "yaw": 2.2748116840418318,
          "pitch": -0.04319437972665163,
          "rotation": 0,
          "target": "2-sypialnia"
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
        "yaw": 1.1713098535606363,
        "pitch": 0.11399266945601028,
        "fov": 1.4898447516704054
      },
      "linkHotspots": [
        {
          "yaw": -1.4834809636825845,
          "pitch": -0.051749042580205185,
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
        "yaw": 1.4578566913759294,
        "pitch": 0.4268918491417555,
        "fov": 1.4898447516704054
      },
      "linkHotspots": [
        {
          "yaw": -0.17436459132829896,
          "pitch": -0.03752005575523043,
          "rotation": 0,
          "target": "1-kuchnia"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Brodzinskiego M12",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
