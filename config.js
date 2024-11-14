const topBarCenterText = `K6BCW - CM87`;

// Grid layout
var layout_cols = 4;
var layout_rows = 3;

>>>>>>> upstream/main
// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  ["2196F3", "QRZ.com", "https://www.qrz.com/db/k6bcw", "1.7"],
  [
    "2196F3",
    "CONTEST",
    "https://www.contestcalendar.com/fivewkcal.html",
    "1",
  ],
  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/36.5/-89.41",
    "1",
    "R",
  ],
  [
    "2196F3",
    "RADAR",
    "https://weather.gc.ca/?layers=alert,radar&center=37.780079,-122.420174&zoom=6&alertTableFilterProv=ON",
    "1",
    "R"
  ],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=37.774929&lon=-122.419418&zoom=5",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-122.456,37.788,3000",
    "1",
    "R",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
const aIMG = [
  ["RADAR", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
  [
    "LOCAL RADAR",
    "https://radar.weather.gov/ridge/standard/KMUX_loop.gif",
  ],
  [
    "NOAA D-RAP",
    "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png",
  ],
  [
    "ISS & NOAA 18",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=default&width=600&height=300&mode=M&satid=28654",
  ],
  [
    "SATELLITE WUS",
    "https://cdn.star.nesdis.noaa.gov/GOES18/GLM/SECTOR/wus/EXTENT3/GOES18-WUS-EXTENT3-1000x1000.gif"
  ],
  [
    "SATELLITE CGL",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/cgl/EXTENT3/GOES16-CGL-EXTENT3-600x600.gif",
  ],
  [
    "LIGHTNING",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
  ],
  [
    "MUF",
    "https://prop.kc2g.com/renders/current/mufd-normal-now.svg",
  ],
  ["YOUTUBE EXAMPLE", "iframe|https://www.youtube.com/embed/fzPFaXAV_2Y?autoplay=1&mute=1"],
  [
    "WEATHER",
    "https://www.weather.gov/images/mtr/GraphiDSS/MaxTCWA_Day1.png",
    "https://www.weather.gov/images/mtr/GraphiDSS/MinTCWA_Day1.png",
    "https://www.weather.gov/images/mtr/PQPF_New/PQPFStormTotalQPFEventDrivenWeb1_1stevent.png"
  ],
  ["VIDEO EXAMPLE", "https://himawari8.nict.go.jp/movie/720/20240611_pifd.mp4"],
  ["HF PROPAGATION",
    "https://www.hamqsl.com/solar101vhf.php"],
  [
    "RS-44 POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=default&width=600&height=300&mode=M&satid=44909",
  ],
  ["Solar WX",
    "https://services.swpc.noaa.gov/images/animations/suvi/primary/map/latest.png"],
  ["HF PROPAGATION",
    "https://www.hamqsl.com/solar100sc.php"],
  ["HF PROPAGATION",
    "https://www.hamqsl.com/solarpich.php"],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
const tileDelay = [11200,10000,11000,10100,10200,10500,10300,10600,30400,60700,60900,10800,30400,60700,60900,10800];
