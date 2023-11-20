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
        "yaw": -0.9424775489131747,
        "pitch": 0.1373244903537163,
        "fov": 1.4898447516704054
      },
      "linkHotspots": [
        {
          "yaw": 0.7356781740744456,
          "pitch": -0.03745231944288818,
          "rotation": 0,
          "target": "1-sypialnia"
        },
        {
          "yaw": 1.5516997676676212,
          "pitch": -0.024038103924031162,
          "rotation": 0,
          "target": "2-azienka"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sypialnia",
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
        "yaw": 2.7793325178276564,
        "pitch": -0.01868785649920035,
        "fov": 1.4898447516704054
      },
      "linkHotspots": [
        {
          "yaw": 1.3268084418098596,
          "pitch": -0.07877016088086108,
          "rotation": 0,
          "target": "0-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-azienka",
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
        "yaw": 1.7107752045514149,
        "pitch": 0.04145654961169676,
        "fov": 1.4898447516704054
      },
      "linkHotspots": [
        {
          "yaw": -3.0785822714247537,
          "pitch": -0.018017475571980412,
          "rotation": 0,
          "target": "0-salon"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Brodzinskiego M13",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
