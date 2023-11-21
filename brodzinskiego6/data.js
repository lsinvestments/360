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
        "yaw": -2.46345195003569,
        "pitch": 0.0919106034280972,
        "fov": 1.4898447516704054
      },
      "linkHotspots": [
        {
          "yaw": -1.279285500330463,
          "pitch": 0.41509906421099885,
          "rotation": 0,
          "target": "1-kuchnia"
        },
        {
          "yaw": 0.2639096525262268,
          "pitch": 0.3402607087865732,
          "rotation": 0,
          "target": "4-hol"
        },
        {
          "yaw": 0.8101896825319024,
          "pitch": -0.07052745712455888,
          "rotation": 0,
          "target": "2-sypialnia"
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
        "yaw": -0.007758090869984358,
        "pitch": 0.018135808195173908,
        "fov": 1.4898447516704054
      },
      "linkHotspots": [
        {
          "yaw": 1.288765280572031,
          "pitch": 0.38191986293571745,
          "rotation": 0,
          "target": "0-salon"
        },
        {
          "yaw": 1.140850069539944,
          "pitch": -0.008780757426148256,
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
        "yaw": 2.4642213079337862,
        "pitch": 0.14258540548267007,
        "fov": 1.4898447516704054
      },
      "linkHotspots": [
        {
          "yaw": -0.9437462813291937,
          "pitch": 0.01984672858702652,
          "rotation": 0,
          "target": "0-salon"
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
        "yaw": -1.7793000525670344,
        "pitch": 0.13041262553302602,
        "fov": 1.4898447516704054
      },
      "linkHotspots": [
        {
          "yaw": -0.3976989094362562,
          "pitch": -0.05717611778297638,
          "rotation": 0,
          "target": "4-hol"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hol",
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
        "yaw": -1.1074237492262498,
        "pitch": 0.023319309156574874,
        "fov": 1.4898447516704054
      },
      "linkHotspots": [
        {
          "yaw": 0.31517961396951577,
          "pitch": 0.3619713608730031,
          "rotation": 0,
          "target": "0-salon"
        },
        {
          "yaw": 0.9834530858772332,
          "pitch": -0.06804637003428837,
          "rotation": 0,
          "target": "3-azienka"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Brodzinskiego M6",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
