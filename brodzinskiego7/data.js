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
        "yaw": 0.026442177043829673,
        "pitch": 0.025522993046831033,
        "fov": 1.4898447516704054
      },
      "linkHotspots": [
        {
          "yaw": 0.18371798958094132,
          "pitch": 0.44421934584501876,
          "rotation": 0,
          "target": "1-kuchnia"
        },
        {
          "yaw": -2.8215514755824334,
          "pitch": 0.01842102285650249,
          "rotation": 0,
          "target": "2-sypialnia"
        },
        {
          "yaw": 2.62730322257681,
          "pitch": 0.0051807007978261765,
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
        "yaw": 2.629981998106201,
        "pitch": 0.1865367355204519,
        "fov": 1.4898447516704054
      },
      "linkHotspots": [
        {
          "yaw": 2.380746267358875,
          "pitch": 0.4181578567218569,
          "rotation": 0,
          "target": "0-salon"
        },
        {
          "yaw": 2.746675084288774,
          "pitch": 0.11632715290805429,
          "rotation": 0,
          "target": "2-sypialnia"
        },
        {
          "yaw": 2.421347959883777,
          "pitch": 0.09176405957126299,
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
        "yaw": 2.125914232956508,
        "pitch": 0.1916115359596553,
        "fov": 1.4898447516704054
      },
      "linkHotspots": [
        {
          "yaw": -1.7082725777124992,
          "pitch": 0.003140869086385223,
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
        "yaw": -0.3120439227637526,
        "pitch": 0.1321441149295861,
        "fov": 1.4898447516704054
      },
      "linkHotspots": [
        {
          "yaw": -1.6303839576036552,
          "pitch": 0.04129405091393146,
          "rotation": 0,
          "target": "0-salon"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Brodzinskiego M7",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
