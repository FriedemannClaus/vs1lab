// File origin: VS1LAB A3

const GeoTagExamples = require("./geotag-examples");

/**
 * This script is a template for exercise VS1lab/Aufgabe3
 * Complete all TODOs in the code documentation.
 */

/**
 * A class for in-memory-storage of geotags
 * 
 * Use an array to store a multiset of geotags.
 * - The array must not be accessible from outside the store.
 * 
 * Provide a method 'addGeoTag' to add a geotag to the store.
 * 
 * Provide a method 'removeGeoTag' to delete geo-tags from the store by name.
 * 
 * Provide a method 'getNearbyGeoTags' that returns all geotags in the proximity of a location.
 * - The location is given as a parameter.
 * - The proximity is computed by means of a radius around the location.
 * 
 * Provide a method 'searchNearbyGeoTags' that returns all geotags in the proximity of a location that match a keyword.
 * - The proximity constrained is the same as for 'getNearbyGeoTags'.
 * - Keyword matching should include partial matches from name or hashtag fields. 
 */
class InMemoryGeoTagStore{

    #geoTags = [];

    constructor() {
        this.geoTags = GeoTagExamples.tagList();
    }

    addGeoTag(geoTag) {
        geoTags.push(geoTag);
    }

    removeGeoTag(geoTagName) {
        for(i = 0; i < geoTags.length; i++) {
            if(this.geoTags[i].name() == geoTagName) {
                this.geoTags.splice(i,1);
            }
        }
    }

    getNearbyGeoTags(latitude, longitude) {
        radius = 10; //some radius
        result = [];

        for(i = 0; i < geoTags.length; i++) {
            if(distance(this.geoTags[i].latitude(), latitude, this.geoTags[i].longitude, longitude) <= radius) {
                result.push(this.geoTags[i]);
            }
        }
    }

    //er scheint die Funktion distance nicht zu erkennen

    #distance(latitude1, longitude1, latitude2, longitude2) {
        return sqrt((latitude1 - latitude2) ^ 2 + (longitude1 - longitude2) ^ 2)
    }

    searchNearbyGeoTags(location) {
        nearbyGeoTags = getNearbyGeoTags(location);
        result = [];

        for(int i = 0; i < nearbyGeoTags.length; i++) {

        }

    }

    // TODO: ... your code here ...

}

module.exports = InMemoryGeoTagStore
