var settings = require('../etc/settings'),
    schemaSettings = require('../etc/es-schema-settings')(settings.locales),
    MAPPINGS = schemaSettings.settings.mappings,
    allFields = schemaSettings.fields,
    localizeName = require('../etc/utils').localizeName,
    _ = require('underscore'),
    util = require('util');

function addOptions(q, options) {
    if(!options) {
        return q;
    }
    
    if(options.sort) {
        q.sort = options.sort;
    }
    
    if(options.from && options.size) {
        q.from = options.from;
        q.size = options.size;
    }
    
    return q;
}


module.exports = {
    search: function(locale, query, fields, options) {
        var q = addOptions({}, options);
        
        // Use a match_all query if the query string is empty
        if(query.trim().length === 0) {
            q.query = {
                match_all: {}
            };
            return q;
        }
        
        // If no fields are provided, get all fields from mapping settings
        if(!fields) {
            fields = allFields[locale];
        }
        
        var fieldsWithOptions = [],
            highlightedFields = {};
        
        fields.forEach(function(field) {
            var obj = {};
            obj[field] = {};
            fieldsWithOptions.push(obj);
            
            highlightedFields[field] = {};
        });
        
        q.query = {
            multi_match: {
                query: query,
                fields: fieldsWithOptions,
                // Allow graceful failures when searching cross-type, e.g. matching a string
                // against a number or date field
                lenient: true,
                fuzziness: 'AUTO',
                prefix_length: 1,
                max_expansions: 5
            }
        };
        
        q.highlight = {
            number_of_fragments: 0,
            fields: highlightedFields
        };
        
        return q;
    }
};