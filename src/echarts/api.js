import * as echarts from 'echarts'

let echartsData = {
  "nodes": [
    {
      "id": "0",
      "name": "Myriel",
      "symbolSize": 19.12381,
      "x": -266.82776,
      "y": 299.6904,
      "value": 28.685715,
      "category": 0
    },
    {
      "id": "1",
      "name": "Napoleon",
      "symbolSize": 2.6666666666666665,
      "x": -418.08344,
      "y": 446.8853,
      "value": 4,
      "category": 0
    },
    {
      "id": "2",
      "name": "MlleBaptistine",
      "symbolSize": 6.323809333333333,
      "x": -212.76357,
      "y": 245.29176,
      "value": 9.485714,
      "category": 1
    },
    {
      "id": "3",
      "name": "MmeMagloire",
      "symbolSize": 6.323809333333333,
      "x": -242.82404,
      "y": 235.26283,
      "value": 9.485714,
      "category": 1
    },
    {
      "id": "4",
      "name": "CountessDeLo",
      "symbolSize": 2.6666666666666665,
      "x": -379.30386,
      "y": 429.06424,
      "value": 4,
      "category": 0
    },
    {
      "id": "5",
      "name": "Geborand",
      "symbolSize": 2.6666666666666665,
      "x": -417.26337,
      "y": 406.03506,
      "value": 4,
      "category": 0
    },
    {
      "id": "6",
      "name": "Champtercier",
      "symbolSize": 2.6666666666666665,
      "x": -332.6012,
      "y": 485.16974,
      "value": 4,
      "category": 0
    },
    {
      "id": "7",
      "name": "Cravatte",
      "symbolSize": 2.6666666666666665,
      "x": -382.69568,
      "y": 475.09113,
      "value": 4,
      "category": 0
    },
    {
      "id": "8",
      "name": "Count",
      "symbolSize": 2.6666666666666665,
      "x": -320.384,
      "y": 387.17325,
      "value": 4,
      "category": 0
    },
    {
      "id": "9",
      "name": "OldMan",
      "symbolSize": 2.6666666666666665,
      "x": -344.39832,
      "y": 451.16772,
      "value": 4,
      "category": 0
    },
    {
      "id": "10",
      "name": "Labarre",
      "symbolSize": 2.6666666666666665,
      "x": -89.34107,
      "y": 234.56128,
      "value": 4,
      "category": 1
    },
    {
      "id": "11",
      "name": "Valjean",
      "symbolSize": 66.66666666666667,
      "x": -87.93029,
      "y": -6.8120565,
      "value": 100,
      "category": 1
    },
    {
      "id": "12",
      "name": "Marguerite",
      "symbolSize": 4.495239333333333,
      "x": -339.77908,
      "y": -184.69139,
      "value": 6.742859,
      "category": 1
    },
    {
      "id": "13",
      "name": "MmeDeR",
      "symbolSize": 2.6666666666666665,
      "x": -194.31313,
      "y": 178.55301,
      "value": 4,
      "category": 1
    },
    {
      "id": "14",
      "name": "Isabeau",
      "symbolSize": 2.6666666666666665,
      "x": -158.05168,
      "y": 201.99768,
      "value": 4,
      "category": 1
    },
    {
      "id": "15",
      "name": "Gervais",
      "symbolSize": 2.6666666666666665,
      "x": -127.701546,
      "y": 242.55057,
      "value": 4,
      "category": 1
    },
    {
      "id": "16",
      "name": "Tholomyes",
      "symbolSize": 17.295237333333333,
      "x": -385.2226,
      "y": -393.5572,
      "value": 25.942856,
      "category": 2
    },
    {
      "id": "17",
      "name": "Listolier",
      "symbolSize": 13.638097333333334,
      "x": -516.55884,
      "y": -393.98975,
      "value": 20.457146,
      "category": 2
    },
    {
      "id": "18",
      "name": "Fameuil",
      "symbolSize": 13.638097333333334,
      "x": -464.79382,
      "y": -493.57944,
      "value": 20.457146,
      "category": 2
    },
    {
      "id": "19",
      "name": "Blacheville",
      "symbolSize": 13.638097333333334,
      "x": -515.1624,
      "y": -456.9891,
      "value": 20.457146,
      "category": 2
    },
    {
      "id": "20",
      "name": "Favourite",
      "symbolSize": 13.638097333333334,
      "x": -408.12122,
      "y": -464.5048,
      "value": 20.457146,
      "category": 2
    },
    {
      "id": "21",
      "name": "Dahlia",
      "symbolSize": 13.638097333333334,
      "x": -456.44113,
      "y": -425.13303,
      "value": 20.457146,
      "category": 2
    },
    {
      "id": "22",
      "name": "Zephine",
      "symbolSize": 13.638097333333334,
      "x": -459.1107,
      "y": -362.5133,
      "value": 20.457146,
      "category": 2
    },
    {
      "id": "23",
      "name": "Fantine",
      "symbolSize": 28.266666666666666,
      "x": -313.42786,
      "y": -289.44803,
      "value": 42.4,
      "category": 2
    },
    {
      "id": "24",
      "name": "MmeThenardier",
      "symbolSize": 20.95238266666667,
      "x": 4.6313396,
      "y": -273.8517,
      "value": 31.428574,
      "category": 7
    },
    {
      "id": "25",
      "name": "Thenardier",
      "symbolSize": 30.095235333333335,
      "x": 82.80825,
      "y": -203.1144,
      "value": 45.142853,
      "category": 7
    },
    {
      "id": "26",
      "name": "Cosette",
      "symbolSize": 20.95238266666667,
      "x": 78.64646,
      "y": -31.512747,
      "value": 31.428574,
      "category": 6
    },
    {
      "id": "27",
      "name": "Javert",
      "symbolSize": 31.923806666666668,
      "x": -81.46074,
      "y": -204.20204,
      "value": 47.88571,
      "category": 7
    },
    {
      "id": "28",
      "name": "Fauchelevent",
      "symbolSize": 8.152382000000001,
      "x": -225.73984,
      "y": 82.41631,
      "value": 12.228573,
      "category": 4
    },
    {
      "id": "29",
      "name": "Bamatabois",
      "symbolSize": 15.466666666666667,
      "x": -385.6842,
      "y": -20.206686,
      "value": 23.2,
      "category": 3
    },
    {
      "id": "30",
      "name": "Perpetue",
      "symbolSize": 4.495239333333333,
      "x": -403.92447,
      "y": -197.69823,
      "value": 6.742859,
      "category": 2
    },
    {
      "id": "31",
      "name": "Simplice",
      "symbolSize": 8.152382000000001,
      "x": -281.4253,
      "y": -158.45137,
      "value": 12.228573,
      "category": 2
    },
    {
      "id": "32",
      "name": "Scaufflaire",
      "symbolSize": 2.6666666666666665,
      "x": -122.41348,
      "y": 210.37503,
      "value": 4,
      "category": 1
    },
    {
      "id": "33",
      "name": "Woman1",
      "symbolSize": 4.495239333333333,
      "x": -234.6001,
      "y": -113.15067,
      "value": 6.742859,
      "category": 1
    },
    {
      "id": "34",
      "name": "Judge",
      "symbolSize": 11.809524666666666,
      "x": -387.84915,
      "y": 58.7059,
      "value": 17.714287,
      "category": 3
    },
    {
      "id": "35",
      "name": "Champmathieu",
      "symbolSize": 11.809524666666666,
      "x": -338.2307,
      "y": 87.48405,
      "value": 17.714287,
      "category": 3
    },
    {
      "id": "36",
      "name": "Brevet",
      "symbolSize": 11.809524666666666,
      "x": -453.26874,
      "y": 58.94648,
      "value": 17.714287,
      "category": 3
    },
    {
      "id": "37",
      "name": "Chenildieu",
      "symbolSize": 11.809524666666666,
      "x": -386.44904,
      "y": 140.05937,
      "value": 17.714287,
      "category": 3
    },
    {
      "id": "38",
      "name": "Cochepaille",
      "symbolSize": 11.809524666666666,
      "x": -446.7876,
      "y": 123.38005,
      "value": 17.714287,
      "category": 3
    },
    {
      "id": "39",
      "name": "Pontmercy",
      "symbolSize": 6.323809333333333,
      "x": 336.49738,
      "y": -269.55914,
      "value": 9.485714,
      "category": 6
    },
    {
      "id": "40",
      "name": "Boulatruelle",
      "symbolSize": 2.6666666666666665,
      "x": 29.187843,
      "y": -460.13132,
      "value": 4,
      "category": 7
    },
    {
      "id": "41",
      "name": "Eponine",
      "symbolSize": 20.95238266666667,
      "x": 238.36697,
      "y": -210.00926,
      "value": 31.428574,
      "category": 7
    },
    {
      "id": "42",
      "name": "Anzelma",
      "symbolSize": 6.323809333333333,
      "x": 189.69513,
      "y": -346.50662,
      "value": 9.485714,
      "category": 7
    },
    {
      "id": "43",
      "name": "Woman2",
      "symbolSize": 6.323809333333333,
      "x": -187.00418,
      "y": -145.02663,
      "value": 9.485714,
      "category": 6
    },
    {
      "id": "44",
      "name": "MotherInnocent",
      "symbolSize": 4.495239333333333,
      "x": -252.99521,
      "y": 129.87549,
      "value": 6.742859,
      "category": 4
    },
    {
      "id": "45",
      "name": "Gribier",
      "symbolSize": 2.6666666666666665,
      "x": -296.07935,
      "y": 163.11964,
      "value": 4,
      "category": 4
    },
    {
      "id": "46",
      "name": "Jondrette",
      "symbolSize": 2.6666666666666665,
      "x": 550.3201,
      "y": 522.4031,
      "value": 4,
      "category": 5
    },
    {
      "id": "47",
      "name": "MmeBurgon",
      "symbolSize": 4.495239333333333,
      "x": 488.13535,
      "y": 356.8573,
      "value": 6.742859,
      "category": 5
    },
    {
      "id": "48",
      "name": "Gavroche",
      "symbolSize": 41.06667066666667,
      "x": 387.89572,
      "y": 110.462326,
      "value": 61.600006,
      "category": 8
    },
    {
      "id": "49",
      "name": "Gillenormand",
      "symbolSize": 13.638097333333334,
      "x": 126.4831,
      "y": 68.10622,
      "value": 20.457146,
      "category": 6
    },
    {
      "id": "50",
      "name": "Magnon",
      "symbolSize": 4.495239333333333,
      "x": 127.07365,
      "y": -113.05923,
      "value": 6.742859,
      "category": 6
    },
    {
      "id": "51",
      "name": "MlleGillenormand",
      "symbolSize": 13.638097333333334,
      "x": 162.63559,
      "y": 117.6565,
      "value": 20.457146,
      "category": 6
    },
    {
      "id": "52",
      "name": "MmePontmercy",
      "symbolSize": 4.495239333333333,
      "x": 353.66415,
      "y": -205.89165,
      "value": 6.742859,
      "category": 6
    },
    {
      "id": "53",
      "name": "MlleVaubois",
      "symbolSize": 2.6666666666666665,
      "x": 165.43939,
      "y": 339.7736,
      "value": 4,
      "category": 6
    },
    {
      "id": "54",
      "name": "LtGillenormand",
      "symbolSize": 8.152382000000001,
      "x": 137.69348,
      "y": 196.1069,
      "value": 12.228573,
      "category": 6
    },
    {
      "id": "55",
      "name": "Marius",
      "symbolSize": 35.58095333333333,
      "x": 206.44687,
      "y": -13.805411,
      "value": 53.37143,
      "category": 6
    },
    {
      "id": "56",
      "name": "BaronessT",
      "symbolSize": 4.495239333333333,
      "x": 194.82993,
      "y": 224.78036,
      "value": 6.742859,
      "category": 6
    },
    {
      "id": "57",
      "name": "Mabeuf",
      "symbolSize": 20.95238266666667,
      "x": 597.6618,
      "y": 135.18481,
      "value": 31.428574,
      "category": 8
    },
    {
      "id": "58",
      "name": "Enjolras",
      "symbolSize": 28.266666666666666,
      "x": 355.78366,
      "y": -74.882454,
      "value": 42.4,
      "category": 8
    },
    {
      "id": "59",
      "name": "Combeferre",
      "symbolSize": 20.95238266666667,
      "x": 515.2961,
      "y": -46.167564,
      "value": 31.428574,
      "category": 8
    },
    {
      "id": "60",
      "name": "Prouvaire",
      "symbolSize": 17.295237333333333,
      "x": 614.29285,
      "y": -69.3104,
      "value": 25.942856,
      "category": 8
    },
    {
      "id": "61",
      "name": "Feuilly",
      "symbolSize": 20.95238266666667,
      "x": 550.1917,
      "y": -128.17537,
      "value": 31.428574,
      "category": 8
    },
    {
      "id": "62",
      "name": "Courfeyrac",
      "symbolSize": 24.609526666666667,
      "x": 436.17184,
      "y": -12.7286825,
      "value": 36.91429,
      "category": 8
    },
    {
      "id": "63",
      "name": "Bahorel",
      "symbolSize": 22.780953333333333,
      "x": 602.55225,
      "y": 16.421427,
      "value": 34.17143,
      "category": 8
    },
    {
      "id": "64",
      "name": "Bossuet",
      "symbolSize": 24.609526666666667,
      "x": 455.81955,
      "y": -115.45826,
      "value": 36.91429,
      "category": 8
    },
    {
      "id": "65",
      "name": "Joly",
      "symbolSize": 22.780953333333333,
      "x": 516.40784,
      "y": 47.242233,
      "value": 34.17143,
      "category": 8
    },
    {
      "id": "66",
      "name": "Grantaire",
      "symbolSize": 19.12381,
      "x": 646.4313,
      "y": -151.06331,
      "value": 28.685715,
      "category": 8
    },
    {
      "id": "67",
      "name": "MotherPlutarch",
      "symbolSize": 2.6666666666666665,
      "x": 668.9568,
      "y": 204.65488,
      "value": 4,
      "category": 8
    },
    {
      "id": "68",
      "name": "Gueulemer",
      "symbolSize": 19.12381,
      "x": 78.4799,
      "y": -347.15146,
      "value": 28.685715,
      "category": 7
    },
    {
      "id": "69",
      "name": "Babet",
      "symbolSize": 19.12381,
      "x": 150.35959,
      "y": -298.50797,
      "value": 28.685715,
      "category": 7
    },
    {
      "id": "70",
      "name": "Claquesous",
      "symbolSize": 19.12381,
      "x": 137.3717,
      "y": -410.2809,
      "value": 28.685715,
      "category": 7
    },
    {
      "id": "71",
      "name": "Montparnasse",
      "symbolSize": 17.295237333333333,
      "x": 234.87747,
      "y": -400.85983,
      "value": 25.942856,
      "category": 7
    },
    {
      "id": "72",
      "name": "Toussaint",
      "symbolSize": 6.323809333333333,
      "x": 40.942253,
      "y": 113.78272,
      "value": 9.485714,
      "category": 1
    },
    {
      "id": "73",
      "name": "Child1",
      "symbolSize": 4.495239333333333,
      "x": 437.939,
      "y": 291.58234,
      "value": 6.742859,
      "category": 8
    },
    {
      "id": "74",
      "name": "Child2",
      "symbolSize": 4.495239333333333,
      "x": 466.04922,
      "y": 283.3606,
      "value": 6.742859,
      "category": 8
    },
    {
      "id": "75",
      "name": "Brujon",
      "symbolSize": 13.638097333333334,
      "x": 238.79364,
      "y": -314.06345,
      "value": 20.457146,
      "category": 7
    },
    {
      "id": "76",
      "name": "MmeHucheloup",
      "symbolSize": 13.638097333333334,
      "x": 712.18353,
      "y": 4.8131495,
      "value": 20.457146,
      "category": 8
    }
  ],
  "links": [
    {
      "source": "1",
      "target": "0"
    },
    {
      "source": "2",
      "target": "0"
    },
    {
      "source": "3",
      "target": "0"
    },
    {
      "source": "3",
      "target": "2"
    },
    {
      "source": "4",
      "target": "0"
    },
    {
      "source": "5",
      "target": "0"
    },
    {
      "source": "6",
      "target": "0"
    },
    {
      "source": "7",
      "target": "0"
    },
    {
      "source": "8",
      "target": "0"
    },
    {
      "source": "9",
      "target": "0"
    },
    {
      "source": "11",
      "target": "0"
    },
    {
      "source": "11",
      "target": "2"
    },
    {
      "source": "11",
      "target": "3"
    },
    {
      "source": "11",
      "target": "10"
    },
    {
      "source": "12",
      "target": "11"
    },
    {
      "source": "13",
      "target": "11"
    },
    {
      "source": "14",
      "target": "11"
    },
    {
      "source": "15",
      "target": "11"
    },
    {
      "source": "17",
      "target": "16"
    },
    {
      "source": "18",
      "target": "16"
    },
    {
      "source": "18",
      "target": "17"
    },
    {
      "source": "19",
      "target": "16"
    },
    {
      "source": "19",
      "target": "17"
    },
    {
      "source": "19",
      "target": "18"
    },
    {
      "source": "20",
      "target": "16"
    },
    {
      "source": "20",
      "target": "17"
    },
    {
      "source": "20",
      "target": "18"
    },
    {
      "source": "20",
      "target": "19"
    },
    {
      "source": "21",
      "target": "16"
    },
    {
      "source": "21",
      "target": "17"
    },
    {
      "source": "21",
      "target": "18"
    },
    {
      "source": "21",
      "target": "19"
    },
    {
      "source": "21",
      "target": "20"
    },
    {
      "source": "22",
      "target": "16"
    },
    {
      "source": "22",
      "target": "17"
    },
    {
      "source": "22",
      "target": "18"
    },
    {
      "source": "22",
      "target": "19"
    },
    {
      "source": "22",
      "target": "20"
    },
    {
      "source": "22",
      "target": "21"
    },
    {
      "source": "23",
      "target": "11"
    },
    {
      "source": "23",
      "target": "12"
    },
    {
      "source": "23",
      "target": "16"
    },
    {
      "source": "23",
      "target": "17"
    },
    {
      "source": "23",
      "target": "18"
    },
    {
      "source": "23",
      "target": "19"
    },
    {
      "source": "23",
      "target": "20"
    },
    {
      "source": "23",
      "target": "21"
    },
    {
      "source": "23",
      "target": "22"
    },
    {
      "source": "24",
      "target": "11"
    },
    {
      "source": "24",
      "target": "23"
    },
    {
      "source": "25",
      "target": "11"
    },
    {
      "source": "25",
      "target": "23"
    },
    {
      "source": "25",
      "target": "24"
    },
    {
      "source": "26",
      "target": "11"
    },
    {
      "source": "26",
      "target": "16"
    },
    {
      "source": "26",
      "target": "24"
    },
    {
      "source": "26",
      "target": "25"
    },
    {
      "source": "27",
      "target": "11"
    },
    {
      "source": "27",
      "target": "23"
    },
    {
      "source": "27",
      "target": "24"
    },
    {
      "source": "27",
      "target": "25"
    },
    {
      "source": "27",
      "target": "26"
    },
    {
      "source": "28",
      "target": "11"
    },
    {
      "source": "28",
      "target": "27"
    },
    {
      "source": "29",
      "target": "11"
    },
    {
      "source": "29",
      "target": "23"
    },
    {
      "source": "29",
      "target": "27"
    },
    {
      "source": "30",
      "target": "23"
    },
    {
      "source": "31",
      "target": "11"
    },
    {
      "source": "31",
      "target": "23"
    },
    {
      "source": "31",
      "target": "27"
    },
    {
      "source": "31",
      "target": "30"
    },
    {
      "source": "32",
      "target": "11"
    },
    {
      "source": "33",
      "target": "11"
    },
    {
      "source": "33",
      "target": "27"
    },
    {
      "source": "34",
      "target": "11"
    },
    {
      "source": "34",
      "target": "29"
    },
    {
      "source": "35",
      "target": "11"
    },
    {
      "source": "35",
      "target": "29"
    },
    {
      "source": "35",
      "target": "34"
    },
    {
      "source": "36",
      "target": "11"
    },
    {
      "source": "36",
      "target": "29"
    },
    {
      "source": "36",
      "target": "34"
    },
    {
      "source": "36",
      "target": "35"
    },
    {
      "source": "37",
      "target": "11"
    },
    {
      "source": "37",
      "target": "29"
    },
    {
      "source": "37",
      "target": "34"
    },
    {
      "source": "37",
      "target": "35"
    },
    {
      "source": "37",
      "target": "36"
    },
    {
      "source": "38",
      "target": "11"
    },
    {
      "source": "38",
      "target": "29"
    },
    {
      "source": "38",
      "target": "34"
    },
    {
      "source": "38",
      "target": "35"
    },
    {
      "source": "38",
      "target": "36"
    },
    {
      "source": "38",
      "target": "37"
    },
    {
      "source": "39",
      "target": "25"
    },
    {
      "source": "40",
      "target": "25"
    },
    {
      "source": "41",
      "target": "24"
    },
    {
      "source": "41",
      "target": "25"
    },
    {
      "source": "42",
      "target": "24"
    },
    {
      "source": "42",
      "target": "25"
    },
    {
      "source": "42",
      "target": "41"
    },
    {
      "source": "43",
      "target": "11"
    },
    {
      "source": "43",
      "target": "26"
    },
    {
      "source": "43",
      "target": "27"
    },
    {
      "source": "44",
      "target": "11"
    },
    {
      "source": "44",
      "target": "28"
    },
    {
      "source": "45",
      "target": "28"
    },
    {
      "source": "47",
      "target": "46"
    },
    {
      "source": "48",
      "target": "11"
    },
    {
      "source": "48",
      "target": "25"
    },
    {
      "source": "48",
      "target": "27"
    },
    {
      "source": "48",
      "target": "47"
    },
    {
      "source": "49",
      "target": "11"
    },
    {
      "source": "49",
      "target": "26"
    },
    {
      "source": "50",
      "target": "24"
    },
    {
      "source": "50",
      "target": "49"
    },
    {
      "source": "51",
      "target": "11"
    },
    {
      "source": "51",
      "target": "26"
    },
    {
      "source": "51",
      "target": "49"
    },
    {
      "source": "52",
      "target": "39"
    },
    {
      "source": "52",
      "target": "51"
    },
    {
      "source": "53",
      "target": "51"
    },
    {
      "source": "54",
      "target": "26"
    },
    {
      "source": "54",
      "target": "49"
    },
    {
      "source": "54",
      "target": "51"
    },
    {
      "source": "55",
      "target": "11"
    },
    {
      "source": "55",
      "target": "16"
    },
    {
      "source": "55",
      "target": "25"
    },
    {
      "source": "55",
      "target": "26"
    },
    {
      "source": "55",
      "target": "39"
    },
    {
      "source": "55",
      "target": "41"
    },
    {
      "source": "55",
      "target": "48"
    },
    {
      "source": "55",
      "target": "49"
    },
    {
      "source": "55",
      "target": "51"
    },
    {
      "source": "55",
      "target": "54"
    },
    {
      "source": "56",
      "target": "49"
    },
    {
      "source": "56",
      "target": "55"
    },
    {
      "source": "57",
      "target": "41"
    },
    {
      "source": "57",
      "target": "48"
    },
    {
      "source": "57",
      "target": "55"
    },
    {
      "source": "58",
      "target": "11"
    },
    {
      "source": "58",
      "target": "27"
    },
    {
      "source": "58",
      "target": "48"
    },
    {
      "source": "58",
      "target": "55"
    },
    {
      "source": "58",
      "target": "57"
    },
    {
      "source": "59",
      "target": "48"
    },
    {
      "source": "59",
      "target": "55"
    },
    {
      "source": "59",
      "target": "57"
    },
    {
      "source": "59",
      "target": "58"
    },
    {
      "source": "60",
      "target": "48"
    },
    {
      "source": "60",
      "target": "58"
    },
    {
      "source": "60",
      "target": "59"
    },
    {
      "source": "61",
      "target": "48"
    },
    {
      "source": "61",
      "target": "55"
    },
    {
      "source": "61",
      "target": "57"
    },
    {
      "source": "61",
      "target": "58"
    },
    {
      "source": "61",
      "target": "59"
    },
    {
      "source": "61",
      "target": "60"
    },
    {
      "source": "62",
      "target": "41"
    },
    {
      "source": "62",
      "target": "48"
    },
    {
      "source": "62",
      "target": "55"
    },
    {
      "source": "62",
      "target": "57"
    },
    {
      "source": "62",
      "target": "58"
    },
    {
      "source": "62",
      "target": "59"
    },
    {
      "source": "62",
      "target": "60"
    },
    {
      "source": "62",
      "target": "61"
    },
    {
      "source": "63",
      "target": "48"
    },
    {
      "source": "63",
      "target": "55"
    },
    {
      "source": "63",
      "target": "57"
    },
    {
      "source": "63",
      "target": "58"
    },
    {
      "source": "63",
      "target": "59"
    },
    {
      "source": "63",
      "target": "60"
    },
    {
      "source": "63",
      "target": "61"
    },
    {
      "source": "63",
      "target": "62"
    },
    {
      "source": "64",
      "target": "11"
    },
    {
      "source": "64",
      "target": "48"
    },
    {
      "source": "64",
      "target": "55"
    },
    {
      "source": "64",
      "target": "57"
    },
    {
      "source": "64",
      "target": "58"
    },
    {
      "source": "64",
      "target": "59"
    },
    {
      "source": "64",
      "target": "60"
    },
    {
      "source": "64",
      "target": "61"
    },
    {
      "source": "64",
      "target": "62"
    },
    {
      "source": "64",
      "target": "63"
    },
    {
      "source": "65",
      "target": "48"
    },
    {
      "source": "65",
      "target": "55"
    },
    {
      "source": "65",
      "target": "57"
    },
    {
      "source": "65",
      "target": "58"
    },
    {
      "source": "65",
      "target": "59"
    },
    {
      "source": "65",
      "target": "60"
    },
    {
      "source": "65",
      "target": "61"
    },
    {
      "source": "65",
      "target": "62"
    },
    {
      "source": "65",
      "target": "63"
    },
    {
      "source": "65",
      "target": "64"
    },
    {
      "source": "66",
      "target": "48"
    },
    {
      "source": "66",
      "target": "58"
    },
    {
      "source": "66",
      "target": "59"
    },
    {
      "source": "66",
      "target": "60"
    },
    {
      "source": "66",
      "target": "61"
    },
    {
      "source": "66",
      "target": "62"
    },
    {
      "source": "66",
      "target": "63"
    },
    {
      "source": "66",
      "target": "64"
    },
    {
      "source": "66",
      "target": "65"
    },
    {
      "source": "67",
      "target": "57"
    },
    {
      "source": "68",
      "target": "11"
    },
    {
      "source": "68",
      "target": "24"
    },
    {
      "source": "68",
      "target": "25"
    },
    {
      "source": "68",
      "target": "27"
    },
    {
      "source": "68",
      "target": "41"
    },
    {
      "source": "68",
      "target": "48"
    },
    {
      "source": "69",
      "target": "11"
    },
    {
      "source": "69",
      "target": "24"
    },
    {
      "source": "69",
      "target": "25"
    },
    {
      "source": "69",
      "target": "27"
    },
    {
      "source": "69",
      "target": "41"
    },
    {
      "source": "69",
      "target": "48"
    },
    {
      "source": "69",
      "target": "68"
    },
    {
      "source": "70",
      "target": "11"
    },
    {
      "source": "70",
      "target": "24"
    },
    {
      "source": "70",
      "target": "25"
    },
    {
      "source": "70",
      "target": "27"
    },
    {
      "source": "70",
      "target": "41"
    },
    {
      "source": "70",
      "target": "58"
    },
    {
      "source": "70",
      "target": "68"
    },
    {
      "source": "70",
      "target": "69"
    },
    {
      "source": "71",
      "target": "11"
    },
    {
      "source": "71",
      "target": "25"
    },
    {
      "source": "71",
      "target": "27"
    },
    {
      "source": "71",
      "target": "41"
    },
    {
      "source": "71",
      "target": "48"
    },
    {
      "source": "71",
      "target": "68"
    },
    {
      "source": "71",
      "target": "69"
    },
    {
      "source": "71",
      "target": "70"
    },
    {
      "source": "72",
      "target": "11"
    },
    {
      "source": "72",
      "target": "26"
    },
    {
      "source": "72",
      "target": "27"
    },
    {
      "source": "73",
      "target": "48"
    },
    {
      "source": "74",
      "target": "48"
    },
    {
      "source": "74",
      "target": "73"
    },
    {
      "source": "75",
      "target": "25"
    },
    {
      "source": "75",
      "target": "41"
    },
    {
      "source": "75",
      "target": "48"
    },
    {
      "source": "75",
      "target": "68"
    },
    {
      "source": "75",
      "target": "69"
    },
    {
      "source": "75",
      "target": "70"
    },
    {
      "source": "75",
      "target": "71"
    },
    {
      "source": "76",
      "target": "48"
    },
    {
      "source": "76",
      "target": "58"
    },
    {
      "source": "76",
      "target": "62"
    },
    {
      "source": "76",
      "target": "63"
    },
    {
      "source": "76",
      "target": "64"
    },
    {
      "source": "76",
      "target": "65"
    },
    {
      "source": "76",
      "target": "66"
    }
  ],
  "categories": [
    {
      "name": "A"
    },
    {
      "name": "B"
    },
    {
      "name": "C"
    },
    {
      "name": "D"
    },
    {
      "name": "E"
    },
    {
      "name": "F"
    },
    {
      "name": "G"
    },
    {
      "name": "H"
    },
    {
      "name": "I"
    }
  ]
}

let echartsData2 = {
  "nodes": [
    {
      "name": "A-1",
      "value": 28.685715,
      "category": 0
    },
    {
      "name": "A-2",
      "value": 28.685715,
      "category": 0
    },
    {
      "name": "A-3",
      "value": 28.685715,
      "category": 0
    },
    {
      "name": "A-4",
      "value": 28.685715,
      "category": 0
    },
    {
      "name": "A-5",
      "value": 28.685715,
      "category": 0
    },
    {
      "name": "B-1",
      "value": 4,
      "category": 1
    },
    {
      "name": "B-2",
      "value": 4,
      "category": 1
    },
    {
      "name": "B-3",
      "value": 4,
      "category": 1
    },
    {
      "name": "C-1",
      "value": 4,
      "category": 2
    },
    {
      "name": "C-2",
      "value": 4,
      "category": 2
    },
    {
      "name": "C-3",
      "value": 4,
      "category": 2
    },
    {
      "name": "C-4",
      "value": 4,
      "category": 2
    },
    {
      "name": "C-5",
      "value": 4,
      "category": 2
    },
    {
      "name": "C-6",
      "value": 4,
      "category": 2
    },
    {
      "name": "C-7",
      "value": 4,
      "category": 2
    },
    {
      "name": "C-8",
      "value": 4,
      "category": 2
    },
    {
      "name": "C-9",
      "value": 4,
      "category": 2
    },
    {
      "name": "C-10",
      "value": 4,
      "category": 2
    },
    {
      "name": "D-1",
      "value": 4,
      "category": 3
    },
    {
      "name": "D-2",
      "value": 4,
      "category": 3
    },
    {
      "name": "D-3",
      "value": 4,
      "category": 3
    },
    {
      "name": "D-4",
      "value": 4,
      "category": 3
    },
    {
      "name": "D-5",
      "value": 4,
      "category": 3
    },
    {
      "name": "E-1",
      "value": 4,
      "category": 4
    },
    {
      "name": "E-2",
      "value": 4,
      "category": 4
    },
    {
      "name": "E-3",
      "value": 4,
      "category": 4
    },
    {
      "name": "E-4",
      "value": 4,
      "category": 4
    },
    {
      "name": "E-5",
      "value": 4,
      "category": 4
    },
    {
      "name": "E-6",
      "value": 4,
      "category": 4
    },
    {
      "name": "E-7",
      "value": 4,
      "category": 4
    },
    {
      "name": "E-8",
      "value": 4,
      "category": 4
    },
    {
      "name": "E-9",
      "value": 4,
      "category": 4
    },
    {
      "name": "F-1",
      "value": 4,
      "category": 5
    },
    {
      "name": "F-1",
      "value": 4,
      "category": 5
    },
    {
      "name": "F-1",
      "value": 4,
      "category": 5
    },
    {
      "name": "F-1",
      "value": 4,
      "category": 5
    },
    {
      "name": "F-1",
      "value": 4,
      "category": 5
    },
    {
      "name": "F-1",
      "value": 4,
      "category": 5
    },
    {
      "name": "F-1",
      "value": 4,
      "category": 5
    },
    {
      "name": "F-1",
      "value": 4,
      "category": 5
    },
    {
      "name": "F-1",
      "value": 4,
      "category": 5
    },
    {
      "name": "F-1",
      "value": 4,
      "category": 5
    },
    {
      "name": "F-1",
      "value": 4,
      "category": 5
    }
  ],
  // 节点之间关系
  "links": [
    {
      "name": "1 => 0",
      "source": "1",
      "target": "0",
    },
    {
      "source": "2",
      "target": "0",
    },
    {
      "source": "3",
      "target": "0",
    },
    {
      "source": "3",
      "target": "4",
    },
    {
      "source": "4",
      "target": "5",
    },
    {
      "source": "3",
      "target": "6",
    },
    {
      "source": "3",
      "target": "7",
    },
    {
      "source": "3",
      "target": "8",
    },
    {
      "source": "3",
      "target": "9",
    },
    {
      "source": "3",
      "target": "10",
    },
    {
      "source": "3",
      "target": "13",
    },
    {
      "source": "11",
      "target": "0",
    },
    {
      "source": "12",
      "target": "0",
    },
    {
      "source": "14",
      "target": "0",
    },
    {
      "source": "14",
      "target": "2",
    },
    {
      "source": "14",
      "target": "5",
    },
    {
      "source": "14",
      "target": "7",
    },
    {
      "source": "15",
      "target": "9",
    },
    {
      "source": "16",
      "target": "9",
    },
    {
      "source": "17",
      "target": "9",
    },
    {
      "source": "18",
      "target": "9",
    },
    {
      "source": "19",
      "target": "9",
    },
    {
      "source": "20",
      "target": "9",
    },
    {
      "source": "21",
      "target": "9",
    },
    {
      "source": "22",
      "target": "9",
    },
    {
      "source": "23",
      "target": "9",
    },
    {
      "source": "23",
      "target": "24",
    },
    {
      "source": "23",
      "target": "25",
    },
    {
      "source": "23",
      "target": "26",
    },
    {
      "source": "23",
      "target": "27",
    },
    {
      "source": "2",
      "target": "27",
    },
    {
      "source": "2",
      "target": "28",
    },
    {
      "source": "2",
      "target": "29",
    },
    {
      "source": "2",
      "target": "30",
    },
    {
      "source": "2",
      "target": "31",
    },
    {
      "source": "2",
      "target": "32",
    },
    {
      "source": "33",
      "target": "32",
    },
    {
      "source": "34",
      "target": "32",
    },
    {
      "source": "36",
      "target": "32",
    },
    {
      "source": "35",
      "target": "32",
    },
    {
      "source": "37",
      "target": "32",
    },
    {
      "source": "38",
      "target": "32",
    },
    {
      "source": "39",
      "target": "19",
    },
    {
      "source": "40",
      "target": "21",
    }
  ],
  "categories": [
    {
      "name": "A"
    },
    {
      "name": "B"
    },
    {
      "name": "C"
    },
    {
      "name": "D"
    },
    {
      "name": "E"
    },
    {
      "name": "E"
    }
  ]
}
let echartsData3 = {
  "nodes": [
    {
      "id": 0,
      "name": "上传集团",
      "value": 141,
      "timeOut": 1185,
      "category": 0
    },
    {
      "id": 1,
      "name": "订单保存",
      "value": 0,
      "timeOut": 0,
      "category": 0
    },
    {
      "id": 2,
      "name": "订单缴费（手机）",
      "value": 0,
      "timeOut": 16,
      "category": 0
    },
    {
      "id": 3,
      "name": "订单缴费（新）",
      "value": 0,
      "timeOut": 0,
      "category": 0
    },
    {
      "id": 4,
      "name": "订单拆分",
      "value": 29,
      "timeOut": 67,
      "category": 0
    },
    {
      "id": 5,
      "name": "送开通队列",
      "value": 0,
      "timeOut": 0,
      "category": 0
    },
    {
      "id": 6,
      "name": "订单开通",
      "value": 84,
      "timeOut": 181,
      "category": 0
    },
    {
      "id": 7,
      "name": "开通回单",
      "value": 0,
      "timeOut": 3,
      "category": 0
    },
    {
      "id": 8,
      "name": "订单竣工",
      "value": 0,
      "timeOut": 8632,
      "category": 0
    },
    {
      "id": 9,
      "name": "短信发送",
      "value": 0,
      "timeOut": 0,
      "category": 0
    },
    {
      "id": 10,
      "name": "APC推送_提速",
      "value": 0,
      "timeOut": 0,
      "category": 0
    },
    {
      "id": 11,
      "name": "APC推送_复开",
      "value": 0,
      "timeOut": 0,
      "category": 0
    },
    {
      "id": 12,
      "name": "PCF推送_新装",
      "value": 2,
      "timeOut": 14,
      "category": 0
    },
    {
      "id": 13,
      "name": "PCF推送_退订",
      "value": 0,
      "timeOut": 0,
      "category": 0
    }
  ],
  "links": [
    {
      "source": "1",
      "target": "0",
    },
    {
      "source": "1",
      "target": "2",
    },
    {
      "source": "0",
      "target": "2",
    },
    {
      "source": "2",
      "target": "3",
    },
    {
      "source": "2",
      "target": "4",
    },
    {
      "source": "1",
      "target": "3",
    },
    {
      "source": "3",
      "target": "4",
    },
    {
      "value": 16803,
      "error": 0,
      "source": "4",
      "target": "5",
    },
    {
      "value": 38237,
      "error": 84,
      "source": "5",
      "target": "6",
    },
    {
      "source": "5",
      "target": "7",
    },
    {
      "source": "4",
      "target": "8",
    },
    {
      "source": "7",
      "target": "8",
    },
    {
      "source": "8",
      "target": "9",
    },
    {
      "source": "8",
      "target": "10",
    },
    {
      "source": "10",
      "target": "11",
    },
    {
      "source": "8",
      "target": "12",
    },
    {
      "source": "8",
      "target": "13",
    }
  ],
  "categories":[
    {
      "name": "计费基础"
    }
  ]
}

let echartsData4 = {
  "nodes": [
    {
      "id": 0,
      "name": "上传集团aaa",
      "value": 141,
      "timeOut": 1185,
      "category": 0
    },
    {
      "id": 1,
      "name": "订单保存aaa",
      "value": 0,
      "timeOut": 0,
      "category": 0
    },
    {
      "id": 2,
      "name": "订单缴费（手机）",
      "value": 0,
      "timeOut": 16,
      "category": 0
    },
    {
      "id": 3,
      "name": "订单缴费（新）",
      "value": 0,
      "timeOut": 0,
      "category": 0
    },
    {
      "id": 4,
      "name": "订单拆分",
      "value": 29,
      "timeOut": 67,
      "category": 0
    },
    {
      "id": 5,
      "name": "送开通队列",
      "value": 0,
      "timeOut": 0,
      "category": 0
    },
    {
      "id": 6,
      "name": "订单开通",
      "value": 84,
      "timeOut": 181,
      "category": 0
    },
    {
      "id": 7,
      "name": "开通回单",
      "value": 0,
      "timeOut": 3,
      "category": 0
    },
    {
      "id": 8,
      "name": "订单竣工",
      "value": 0,
      "timeOut": 8632,
      "category": 0
    },
    {
      "id": 9,
      "name": "短信发送",
      "value": 0,
      "timeOut": 0,
      "category": 0
    },
    {
      "id": 10,
      "name": "APC推送_提速",
      "value": 0,
      "timeOut": 0,
      "category": 1
    },
    {
      "id": 11,
      "name": "APC推送_复开",
      "value": 0,
      "timeOut": 0,
      "category": 1
    },
    {
      "id": 12,
      "name": "PCF推送_新装",
      "value": 2,
      "timeOut": 14,
      "category": 1
    },
    {
      "id": 13,
      "name": "PCF推送_退订",
      "value": 0,
      "timeOut": 0,
      "category": 1
    }
  ],
  "links": [
    {
      "source": "1",
      "target": "0",
    },
    {
      "source": "1",
      "target": "2",
    },
    {
      "source": "0",
      "target": "2",
    },
    {
      "source": "2",
      "target": "3",
    },
    {
      "source": "2",
      "target": "4",
    },
    {
      "source": "1",
      "target": "3",
    },
    {
      "source": "3",
      "target": "4",
    },
    {
      "value": 16803,
      "error": 0,
      "source": "4",
      "target": "5",
    },
    {
      "value": 38237,
      "error": 84,
      "source": "5",
      "target": "6",
    },
    {
      "source": "5",
      "target": "7",
    },
    {
      "source": "4",
      "target": "8",
    },
    {
      "source": "7",
      "target": "8",
    },
    {
      "source": "8",
      "target": "9",
    },
    {
      "source": "8",
      "target": "10",
    },
    {
      "source": "10",
      "target": "11",
    },
    {
      "source": "8",
      "target": "12",
    },
    {
      "source": "8",
      "target": "13",
    }
  ],
  "categories":[
    {
      "name": "计费基础"
    },
    {
      "name": "推送"
    }
  ]
}

export default {
  echartsPaint(dom, graph) {
    echarts.dispose(dom)
    var myChart = echarts.init(dom)
    myChart.setOption(
      {
        // 提示组件
        tooltip: {},

        // 图例   --- 组
        legend: [
          {
            data: graph.categories.map(function (a) {
              return a.name;
            })
          }
        ],
        // // x轴
        // xAxis: {
        //   type: 'value',
        //   boundaryGap: false,
        //   show: false
        // },
        // // y轴
        // yAxis: {
        //   type: 'value',
        //   show: false
        // },
        series: [
          {
            name: 'Les Miserables',
            type: 'graph',
            // 图的布局 'none' 不采用任何布局，使用节点中提供的 x， y 作为节点的位置，'circular' 采用环形布局;'force' 采用力引导布局.
            layout: 'force',
            // 节点数据
            data: graph.nodes,
            // 节点关系
            links: graph.links,
            // 节点组
            categories: graph.categories,
            // // 节点大小    ---- 在数据中也可直接设置
            symbolSize: 30,
            // 节点形状  'circle' 圆形 , 'rect' 正方形, 'roundRect' 圆角方形
            symbol: "circle",
            // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
            roam: true,
            // 箭头属性 ‘circle’(圆形), ‘rect’（矩形）, ‘roundRect’（圆角矩形）, ‘triangle’（三角形）, ‘diamond’（菱形）, ‘pin’（大头针）, ‘arrow’（箭头）‘none’ （无）
            edgeSymbol: ['none', 'arrow'],
            // 箭头 宽  高
            edgeSymbolSize: [30, 15],
            // 节点焦点显示
            label: {
              // 是否显示标签
              show: true,
              // 标签位置
              position: 'inside',
              offset: [0, 30],
              color: "black",

              // 文本规范
              formatter: param => {
                // 超出省略
                let params = param.data.value;
                let maxlength = 3;
                if (params.length > maxlength) {
                  params = params.substring(0, maxlength - 1) + '...';
                }
                return 'Error: ' + params + '\n\n\n\n' + param.data.name + '\n' + 'TimeOut: ' + param.data.timeOut
              }
            },
            // 线条显示
            edgeLabel: {
              normal: {
                // isShow: function (param) {
                //   return param.data.value !== undefined
                // },
                show: true,
                // 居中 斜体
                position: 'middle',
                fontStyle: "italic",
                formatter: param => {
                  var newLinks = this.getData(3).links
                  var value = ''
                  var error = ''

                  newLinks.forEach(item => {
                    //links中筛选与当前的source和target相等的返回其name
                    if (param.data.value !== undefined && item.source === param.data.source && item.target === param.data.target) {
                      value = item.value
                      error = item.error
                    }
                  })
                  if (value !== '') {
                    return '总量：' + value + '\n' + '异常：'+ error
                  } else {
                    return ''
                  }

                },
                backgroundColor: "black",
                // lineHeight: 50,
                borderRadius: [10, 10, 10, 10],
                padding: [5, 5, 5, 5],
                textStyle: {
                  color: 'white'
                }
              }
            },
            itemStyle: {
              color: "white",
              borderColor: "black",
              borderWidth: 1,
            },
            scaleLimit: {
              min: 4,
              max: 10
            },
            lineStyle: {
              color: 'grey',
              width: 2,
              length: 200,
              // 连接线曲度
              curveness: 0,
              // 蚂蚁线 -- 流水线  echarts 5
              dashOffset: 5,
              type: [5, 10]
            },
            // 力引导图
            force: {
              // 初始化布局
              // initLayout: 'none',
              // 斥力
              repulsion: 150,
              // 引力
              // gravity: 1
            },
            // 节点高亮  echarts 5 版本，测试版本为4，不生效
            emphasis: {
              //在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：
              //
              // 'none' 不淡出其它图形，默认使用该配置。
              // 'self' 只聚焦（不淡出）当前高亮的数据的图形。
              // 'series' 聚焦当前高亮的数据所在的系列的所有图形。
              // 'adjacency' 聚焦关系图中的邻接点和边的图形
              focus: 'adjacency'
            }
          },
          // {//关系
          //   type: 'lines',
          //   // symbol: ['none', 'none'],
          //   // symbolSize: ['none', 22],
          //   coordinateSystem: 'cartesian2d',
          //   label: {
          //     show: true,
          //     position: 'middle'
          //   },
          //   lineStyle: {
          //     normal: {
          //       color: '#777777',
          //       width: 1,
          //       type: 'dashed',
          //       opacity: 1,
          //       curveness: 0
          //       //curveness: -0.1
          //     }
          //   },
          //   effect: {
          //     show: true,//是否 运动
          //     trailLength: .1,
          //     symbol: "image://https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585824156011&di=a8c5a0a2ab7d10f2b812f0443f881d1b&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F97%2F79%2F0456f32aca5d2d2.jpg",
          //     color: '#777777',
          //     symbolSize: 22
          //   },
          //   data: graph.links
          // }
        ]
      })
    // echarts图位置大小适应全局
    window.addEventListener('resize', function () {
      myChart.resize()
    })

    let doms = this
    // 节点点击事件
    myChart.on('click', function (params) {
      if (params.dataType === 'node') {
        let paramData = doms.getData(4)
        // 点击节点
        doms.echartsPaint(dom, paramData)
      } else if (params.dataType === 'edge') {   // 点击连接线

      }
    })
  },


  /**
   * 数据获取方式   在link显示的format中，也有需要获取的地方，点击事件还有获取数据进行切换，这两处需要注意替换
   * @param data
   * @returns {*}
   */
  getData(data) {
    if (data === 1) {
      return this.getEchartsData(echartsData)
    } else if (data === 2) {
      return this.getEchartsData(echartsData2)
    } else if (data === 3) {
      return echartsData3
    } else if (data === 4) {
      return echartsData4
    }
  },

  getEchartsData(data) {
    // 距离因子
    let factor = 50
    // ID
    let idNum = 0
    // 区域
    let categoryNum = 0
    // 起始位置
    let categoryX = factor
    let categoryY = factor
    let categoryYMax = 0
    let categoryXBase = factor
    let categoryYTime = 0
    let xMax = 0
    let yMax = 0
    data.nodes.forEach((ele, index) => {
      // ele.id = idNum++
      if (index < 1) {
        categoryNum = ele.category
        xMax = xMax + 1
      } else if (categoryNum === ele.category) {
        // 同一个区域
        if (xMax < 4) {
          categoryX = categoryX + factor
          xMax = xMax + 1
        } else {
          // 每行四个，换行
          categoryY = categoryY + factor
          categoryX = categoryX - (factor * 3)
          xMax = 1
          // 记录换行次数
          categoryYTime++
        }
      } else if (yMax < 2) {
        // 不同区域，画布一行三个区域
        categoryNum = ele.category

        // 记录最大Y轴
        if (categoryYMax < categoryY) {
          categoryYMax = categoryY
        }
        // 回归同行X,Y轴
        categoryY = categoryY - (factor * categoryYTime)
        categoryXBase = categoryXBase + (factor * 4)
        categoryX = categoryXBase

        xMax = 1
        yMax = yMax + 1
        categoryYTime = 0
      } else {
        // 一行超过三个区域，换行画区域
        categoryNum = ele.category
        categoryX = factor
        categoryY = categoryYMax + factor

        xMax = 1
        yMax = 0
        categoryXBase = categoryX
        categoryYTime = 0
      }
      ele.x = categoryX
      ele.y = categoryY
    })
    console.log('内容', data)
    return data
  }
}
