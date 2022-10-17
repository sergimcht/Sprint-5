var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var react = document.querySelector(".votes");
react.style.display = "none";
// APIs URLs
var DADJOKES = "https://icanhazdadjoke.com/";
var JOKEAPI = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
var WEATHER = "https://api.openweathermap.org/data/2.5/weather?lat=41.38879&lon=2.15899&units=metric&appid=37f2111fdeb0f75bcb28fbd30c3c518c&lang=EN";
// JS
var reportJokes = [];
function getJoke() {
    return __awaiter(this, void 0, void 0, function () {
        var request, data, random, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    random = Math.floor(Math.random() * 2) + 1;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 8, , 9]);
                    if (!(random === 1)) return [3 /*break*/, 4];
                    return [4 /*yield*/, fetch("".concat(DADJOKES), {
                            headers: {
                                Accept: "application/json"
                            }
                        })];
                case 2:
                    request = _a.sent();
                    return [4 /*yield*/, request.json()];
                case 3:
                    data = _a.sent();
                    document.querySelector("#joke").innerHTML = data.joke;
                    return [3 /*break*/, 7];
                case 4: return [4 /*yield*/, fetch("".concat(JOKEAPI))];
                case 5:
                    request = _a.sent();
                    return [4 /*yield*/, request.json()];
                case 6:
                    data = _a.sent();
                    document.querySelector("#joke").innerHTML = data.joke;
                    _a.label = 7;
                case 7:
                    react.style.display = "block";
                    return [3 /*break*/, 9];
                case 8:
                    error_1 = _a.sent();
                    console.log("Something went wrong:", error_1);
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    });
}
function voteJoke(score) {
    var joke = document.querySelector("#joke").innerHTML;
    var date = new Date();
    var dateISO = date.toISOString();
    reportJokes.push({
        joke: joke,
        score: score,
        date: dateISO
    });
    react.style.display = "none";
    console.table(reportJokes);
}
window.onload = function getWeather() {
    return __awaiter(this, void 0, void 0, function () {
        var weatherRequest, weatherData, weather, weatherIcon, temp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(WEATHER))];
                case 1:
                    weatherRequest = _a.sent();
                    return [4 /*yield*/, weatherRequest.json()];
                case 2:
                    weatherData = _a.sent();
                    weather = document.querySelector("#weather");
                    weatherIcon = weatherData.weather[0].icon;
                    temp = Math.trunc(weatherData.main.temp);
                    weather.src = "http://openweathermap.org/img/wn/".concat(weatherIcon, ".png");
                    document.querySelector("#temperature").innerHTML = temp;
                    document.querySelector("#weatherDesc").innerHTML = weatherData.weather[0].main;
                    return [2 /*return*/];
            }
        });
    });
};
