# CLAUDE.md

## Project Overview

This repository contains a JavaScript implementation of the **Sager Weathercaster Algorithm**, a classic barometric weather prediction system. The entire forecasting logic lives in a single file: `sager_cast.js`.

## Architecture

`sager_cast.js` exports one function:

```js
sager_cast(z_wind, z_rumbo, z_hpa, z_trend, z_nubes) → string
```

The function uses a data-driven lookup approach:
1. **WIND_LETTER** object maps `(wind_direction, rumbo)` to a letter code A-Z
2. **SAGER_TABLE** object maps `(letter, hpa, trend, nubes)` to `[forecastIdx, windDirIdx, velocityIdx]` tuples (5,000 entries)
3. The function assembles a forecast string from three translatable arrays: `z_forecast`, `z_wind_direction`, `z_wind_velocities`

Some entries (1,034 of 5,000) use a compound format with two wind directions separated by `"early, changing to  "`. These are encoded as 4-element arrays `[forecastIdx, dirIdx1, dirIdx2, velIdx]`.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `z_wind` | string | Cardinal wind direction: `N`, `NE`, `E`, `SE`, `S`, `SW`, `W`, `NW`, or `calm` |
| `z_rumbo` | string | Wind direction change over last 6 hours: `BACKING`, `STEADY`, or `VEERING` |
| `z_hpa` | number | Pressure band (1-8) |
| `z_trend` | number | Pressure tendency over last 6 hours (1-5) |
| `z_nubes` | number | Cloud/sky condition (1-5) |

## Translation

The three arrays at the top of `sager_cast.js` (`z_forecast`, `z_wind_velocities`, `z_wind_direction`) contain English text and can be translated to other languages. The lookup table indices remain the same regardless of language.

## Verification

To verify the lookup table against the original paper Sager Weathercaster table, call the function with any valid combination and check the output. Entry codes follow the format `LETTER + HPA + TREND + NUBES` (e.g., X722 = letter X, pressure 7, trend 2, clouds 2).

## No Build System

This is a standalone JS file with no dependencies, no build step, and no module system. It can be included via `<script>` tag or loaded with `eval()` / `require()` in Node.js.
