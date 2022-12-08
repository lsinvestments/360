var APP_DATA = {
  "scenes": [
    {
      "id": "0-korytarz",
      "name": "Korytarz",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.013061897172701,
        "pitch": 0.06169587838306079,
        "fov": 1.5001956320885046
      },
      "linkHotspots": [
        {
          "yaw": -2.397379418166693,
          "pitch": 0.10909402095725085,
          "rotation": 0,
          "target": "4-sypialnia"
        },
        {
          "yaw": -1.3054053998477073,
          "pitch": 0.47689343678579377,
          "rotation": 0,
          "target": "1-salon"
        },
        {
          "yaw": 2.286951166627599,
          "pitch": 0.15424925888077645,
          "rotation": 0,
          "target": "2-azienka"
        },
        {
          "yaw": 0.8276251045095382,
          "pitch": 0.15908325220797792,
          "rotation": 0,
          "target": "3-kuchnia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-salon",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.214328571170123,
          "pitch": 0.5634310410951766,
          "rotation": 0,
          "target": "0-korytarz"
        },
        {
          "yaw": 1.5040340059015147,
          "pitch": 0.1407900304224654,
          "rotation": 0,
          "target": "3-kuchnia"
        },
        {
          "yaw": 2.750473751478795,
          "pitch": 0.06909825888679144,
          "rotation": 0,
          "target": "4-sypialnia"
        },
        {
          "yaw": 2.1825072984967946,
          "pitch": 0.07203591179650459,
          "rotation": 0,
          "target": "2-azienka"
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.008975297331694,
          "pitch": 0.03175140933299048,
          "rotation": 0,
          "target": "0-korytarz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kuchnia",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4890110131837613,
          "pitch": 0.13329956251479302,
          "rotation": 0,
          "target": "2-azienka"
        },
        {
          "yaw": 2.869251375535427,
          "pitch": 0.2181120327775563,
          "rotation": 0,
          "target": "1-salon"
        },
        {
          "yaw": 1.8035269118714874,
          "pitch": 0.5404969850693142,
          "rotation": 0,
          "target": "0-korytarz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-sypialnia",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1182038314785583,
          "pitch": 0.19781594081702814,
          "rotation": 0,
          "target": "0-korytarz"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Powstańców Warszawy 3/48",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
