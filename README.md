# Sager Weather Forecaster

A JavaScript implementation of the **Sager Weathercaster Algorithm** -- a classic barometric weather prediction method used in naval and aviation forecasting. Given current wind conditions, barometric pressure, pressure trend, and sky conditions, it produces a human-readable weather forecast.

## Usage

### In a browser

```html
<script src="sager_cast.js"></script>
<script>
  var forecast = sager_cast("NW", "STEADY", 7, 2, 2);
  console.log(forecast);
  // "Fair and cooler. Northwest or North winds, Gale (39-54 mph)"
</script>
```

### In Node.js

```js
eval(require('fs').readFileSync('./sager_cast.js', 'utf8'));

var forecast = sager_cast("N", "BACKING", 1, 1, 1);
console.log(forecast);
// "Fair and cooler. Northwest or North winds, No important change..."
```

## Parameters

| Parameter | Values | Description |
|-----------|--------|-------------|
| `z_wind` | `N`, `NE`, `E`, `SE`, `S`, `SW`, `W`, `NW`, `calm` | Current wind direction |
| `z_rumbo` | `BACKING`, `STEADY`, `VEERING` | Wind direction change over last 6 hours (~45 degrees or more) |
| `z_hpa` | `1` - `8` | Sea-level adjusted barometric pressure band (hPa/mB) |
| `z_trend` | `1` - `5` | Barometric pressure behavior over last 6 hours |
| `z_nubes` | `1` - `5` | Current cloud/sky condition |

## Output

Returns a string combining three parts:
1. **Weather forecast** -- e.g. "Fair.", "Rain and warmer.", "Showers and cooler."
2. **Expected wind direction** -- e.g. "Northwest or North winds,"
3. **Expected wind velocity** -- e.g. "Gale (39-54 mph)"

Some forecasts include a compound wind direction with an early/changing pattern.

## Translation

The forecast text is generated from three arrays at the top of `sager_cast.js`:
- `z_forecast` -- 21 weather condition descriptions
- `z_wind_velocities` -- 8 wind speed descriptions
- `z_wind_direction` -- 9 wind direction descriptions

These can be translated to any language without modifying the lookup table.

## How It Works

The algorithm encodes the original Sager Weathercaster paper lookup table as a data-driven hash map with 5,000 entries. Each entry maps a combination of `(letter_code, pressure, trend, clouds)` to forecast indices:

1. Wind direction + change (rumbo) determines a letter code (A-Z)
2. The letter code + pressure + trend + cloud cover looks up a forecast tuple
3. The tuple indices select text from the three output arrays

## License

GNU General Public License v3.0 -- see [LICENSE](LICENSE) for details.

Original algorithm: Copyright 2008 Naish666 (eltiempo.selfip.com)
