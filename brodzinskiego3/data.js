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
        "yaw": -0.46648032606073997,
        "pitch": -0.04572736131916422,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": -0.9192761675931997,
          "pitch": 0.4459581344511516,
          "rotation": 0,
          "target": "1-kuchnia"
        },
        {
          "yaw": -0.18766509653893415,
          "pitch": -0.0250925916782343,
          "rotation": 0,
          "target": "3-sypialnia"
        },
        {
          "yaw": 0.9823888846213524,
          "pitch": 0.0023164426932105187,
          "rotation": 0,
          "target": "2-azienka"
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
        "yaw": 2.347685882010718,
        "pitch": 0.27176844785454435,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": 0.5565815221087007,
          "pitch": 0.4364501817337132,
          "rotation": 0,
          "target": "0-salon"
        },
        {
          "yaw": 0.21656856939417501,
          "pitch": 0.06383058753532467,
          "rotation": 0,
          "target": "2-azienka"
        },
        {
          "yaw": -1.079797159803844,
          "pitch": 0.04384376751685437,
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
        "yaw": -2.359491009348403,
        "pitch": 0.2853044602762367,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": 2.796329151498198,
          "pitch": 0.11187667627719122,
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
        "yaw": 1.1195176819552373,
        "pitch": 0.3078869649214102,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": -2.9732327378761614,
          "pitch": 0.08826435589193693,
          "rotation": 0,
          "target": "1-kuchnia"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Brodzinskiego 32/m3",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
