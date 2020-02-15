# Grid Title GeoJson Collection Generator
# Archit Khode
# Based on https://github.com/wing-aviation/InterUSS-Platform

import math
import json


def convertTileToPolygon(zoom, xtile, ytile):

    n = 2.0 ** zoom
    wlon = xtile / n * 360.0 - 180.0
    nlat = math.degrees(math.atan(math.sinh(math.pi * (1 - 2 * ytile / n))))
    elon = (xtile + 1) / n * 360.0 - 180.0
    slat = math.degrees(
        math.atan(math.sinh(math.pi * (1 - 2 * (ytile + 1) / n))))

    return [[[wlon, nlat], [elon, nlat], [elon, slat], [wlon, slat], [wlon, nlat]]]


def makeGeoJsonFeature(zoom, xtitle, ytile):

    titleArray = convertTileToPolygon(zoom, xtitle, ytile)

    geometry = {}
    geometry["type"] = "Polygon"
    geometry["coordinates"] = titleArray

    geoJsonFeature = {}
    geoJsonFeature["type"] = "Feature"
    geoJsonFeature["properties"] = {}
    geoJsonFeature["geometry"] = geometry

    return geoJsonFeature


def makeGeoJsonCollection():

    #  -129.7265625,49.61070993807422
    #  -69.60937499999999,19.973348786110602

    zoom = 10
    xStart = 143
    xEnd = 314
    yStart = 349
    yEnd = 454

    # zoom = 9
    # xStart = 71
    # xEnd = 157
    # yStart = 174
    # yEnd = 227

    # zoom = 8
    # xStart = 143
    # xEnd = 78
    # yStart = 349
    # yEnd = 113

    # zoom = 11
    # xStart = 286
    # xEnd = 628
    # yStart = 698
    # yEnd = 908

    # zoom = 12
    # xStart = 572
    # xEnd = 1256
    # yStart = 1396
    # yEnd = 1816

    geoJsonFeatureCollection = {}
    geoJsonFeatureCollection["type"] = "FeatureCollection"
    geoJsonFeatureCollection["features"] = []

    for x in range(xStart, xEnd):
        for y in range(yStart, yEnd):
            geoJsonFeature = makeGeoJsonFeature(zoom, x, y)
            geoJsonFeatureCollection["features"].append(geoJsonFeature)
    
    return geoJsonFeatureCollection

def writeToFile(jsonToWrite):
    f = open("10.json", "w")
    f.write(json.dumps(jsonToWrite))
    print("Wrote to file...")

geoJsonFeatureCollection = makeGeoJsonCollection()
writeToFile(geoJsonFeatureCollection)
print("Done!")
