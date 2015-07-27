/**
 * ELASTICSEARCH CONFIDENTIAL
 * _____________________________
 *
 *  [2014] Elasticsearch Incorporated All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Elasticsearch Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Elasticsearch Incorporated
 * and its suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Elasticsearch Incorporated.
 */

define([],function(){var e={};return e.and={__template:{filters:[{}]},filters:[{__scope_link:"."}],_cache:{__one_of:[!1,!0]}},e.bool={must:[{__scope_link:"."}],must_not:[{__scope_link:"."}],should:[{__scope_link:"."}],_cache:{__one_of:[!1,!0]}},e.exists={__template:{field:"FIELD_NAME"},field:"{field}"},e.ids={__template:{values:["ID"]},type:"{type}",values:[""]},e.limit={__template:{value:100},value:100},e.type={__template:{value:"TYPE"},value:"{type}"},e.geo_bounding_box={__template:{FIELD:{top_left:{lat:40.73,lon:-74.1},bottom_right:{lat:40.717,lon:-73.99}}},"{field}":{top_left:{lat:40.73,lon:-74.1},bottom_right:{lat:40.73,lon:-74.1}},type:{__one_of:["memory","indexed"]},_cache:{__one_of:[!1,!0]}},e.geo_distance={__template:{distance:100,distance_unit:"km",FIELD:{lat:40.73,lon:-74.1}},distance:100,distance_unit:{__one_of:["km","miles"]},distance_type:{__one_of:["arc","plane"]},optimize_bbox:{__one_of:["memory","indexed","none"]},"{field}":{lat:40.73,lon:-74.1},_cache:{__one_of:[!1,!0]}},e.geo_distance_range={__template:{from:100,to:200,distance_unit:"km",FIELD:{lat:40.73,lon:-74.1}},from:100,to:200,distance_unit:{__one_of:["km","miles"]},distance_type:{__one_of:["arc","plane"]},include_lower:{__one_of:[!0,!1]},include_upper:{__one_of:[!0,!1]},"{field}":{lat:40.73,lon:-74.1},_cache:{__one_of:[!1,!0]}},e.geo_polygon={__template:{FIELD:{points:[{lat:40.73,lon:-74.1},{lat:40.83,lon:-75.1}]}},"{field}":{points:[{lat:40.73,lon:-74.1}]},_cache:{__one_of:[!1,!0]}},e.geo_shape={__template:{FIELD:{shape:{type:"envelope",coordinates:[[-45,45],[45,-45]]},relation:"within"}},"{field}":{shape:{type:"",coordinates:[]},indexed_shape:{id:"",index:"{index}",type:"{type}",shape_field_name:"shape"},relation:{__one_of:["within","intersects","disjoint"]}}},e.has_child={__template:{type:"TYPE",filter:{}},type:"{type}",query:{},filter:{},_scope:"",min_children:1,max_children:10},e.has_parent={__template:{parent_type:"TYPE",filter:{}},parent_type:"{type}",query:{},filter:{},_scope:""},e.m=e.missing={__template:{field:"FIELD"},existence:{__one_of:[!0,!1]},null_value:{__one_of:[!0,!1]},field:"{field}"},e.not={__template:{filter:{}},filter:{},_cache:{__one_of:[!0,!1]}},e.range={__template:{FIELD:{gte:10,lte:20}},"{field}":{gte:1,gt:1,lte:20,lt:20,time_zone:"+1:00",execution:{__one_of:["index","fielddata"]}},_cache:{__one_of:[!1,!0]},_cache_key:""},e.or={__template:{filters:[{}]},filters:[{__scope_link:"."}],_cache:{__one_of:[!1,!0]}},e.prefix={__template:{FIELD:"VALUE"},"{field}":"",_cache:{__one_of:[!0,!1]}},e.query={},e.fquery={__template:{query:{},_cache:!0},query:{},_cache:{__one_of:[!0,!1]}},e.script={__template:{script:"SCRIPT",params:{}},script:"",params:{},_cache:{__one_of:[!0,!1]}},e.term={__template:{FIELD:"VALUE"},"{field}":"",_cache:{__one_of:[!1,!0]}},e.terms={__template:{FIELD:["VALUE1","VALUE2"]},field:["{field}"],execution:{__one_of:["plain","bool","and","or","bool_nocache","and_nocache","or_nocache"]},_cache:{__one_of:[!1,!0]}},e.nested={__template:{path:"path_to_nested_doc",query:{}},query:{},path:"",_cache:{__one_of:[!0,!1]},_name:""},function(_){_.addGlobalAutocompleteRules("filter",e)}});