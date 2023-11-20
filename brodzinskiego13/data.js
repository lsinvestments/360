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
        "yaw": -0.971770507227621,
        "pitch": 0.1382336819164216,
        "fov": 1.4898447516704054
      },
      "linkHotspots": [
        {
          "yaw": 0.7380801463340791,
          "pitch": -0.03817414302183586,
          "rotation": 0,
          "target": "2-sypialnia"
        },
        {
          "yaw": 1.552679435642995,
          "pitch": -0.06760265835483281,
          "rotation": 0,
          "target": "1-azienka"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-azienka",
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
        "yaw": 1.708288592010244,
        "pitch": 0.06833651971726695,
        "fov": 1.4898447516704054
      },
      "linkHotspots": [
        {
          "yaw": -3.0879602493268035,
          "pitch": 0.04209427831222534,
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
        "yaw": 2.770269451569713,
        "pitch": 0.25774532806370587,
        "fov": 1.4898447516704054
      },
      "linkHotspots": [
        {
          "yaw": 1.2869741910900352,
          "pitch": -0.2933119191918685,
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
