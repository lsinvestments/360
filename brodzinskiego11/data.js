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
        "yaw": 1.687966756799974,
        "pitch": 0.06755219573019744,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": 2.3618107177488383,
          "pitch": 0.3980691848253919,
          "rotation": 0,
          "target": "1-kuchania"
        },
        {
          "yaw": -2.8498066666986173,
          "pitch": -0.09918118129626663,
          "rotation": 0,
          "target": "2-azienka"
        },
        {
          "yaw": -0.05862136474873836,
          "pitch": 0.05464973974829057,
          "rotation": 0,
          "target": "3-sypialnia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kuchania",
      "name": "Kuchania",
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
        "yaw": -2.056137740015062,
        "pitch": 0.12633307391238446,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": -0.14635374559363967,
          "pitch": 0.3850114213132372,
          "rotation": 0,
          "target": "0-salon"
        },
        {
          "yaw": 0.04404380741813796,
          "pitch": 0.17354732352112734,
          "rotation": 0,
          "target": "3-sypialnia"
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
        "yaw": -1.1907726370862548,
        "pitch": 0.096645796965241,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": 1.2260120945615824,
          "pitch": -0.0639180659214702,
          "rotation": 0,
          "target": "0-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-sypialnia",
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
        "yaw": 0.38793088975921997,
        "pitch": 0.07617923392952264,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": -0.7979327971615788,
          "pitch": -0.12144060654149769,
          "rotation": 0,
          "target": "0-salon"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Brodzinskiego",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
