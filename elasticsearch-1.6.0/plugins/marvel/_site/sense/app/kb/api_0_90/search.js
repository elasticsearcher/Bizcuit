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

define([],function(){return function(e){e.addEndpointDescription("_search",{methods:["GET","POST"],priority:10,patterns:["{indices}/{types}/_search","{indices}/_search","_search"],url_params:{q:"",df:"",analyzer:"",default_operator:["AND","OR"],explain:"__flag__",fields:[],sort:"",track_scores:"__flag__",timeout:1,from:0,size:10,search_type:["dfs_query_then_fetch","dfs_query_and_fetch","query_then_fetch","query_and_fetch","count","scan"],lowercase_expanded_terms:["true","false"],analyze_wildcard:"__flag__",preference:["_primary","_primary_first","_local","_only_node:xyz","_prefer_node:xyz","_shards:2,3"],scroll:"5m",scroll_id:"",routing:""},data_autocomplete_rules:{query:{},facets:{__template:{NAME:{TYPE:{}}}},filter:{},size:{__template:20},from:0,sort:{__template:[{FIELD:{order:"desc"}}],__any_of:[{"{field}":{order:{__one_of:["desc","asc"]}}},"{field}","_score"]},fields:["{field}"],script_fields:{__template:{FIELD:{script:""}},"*":{__scope_link:"GLOBAL.SCRIPT_ENV"}},partial_fields:{__template:{NAME:{include:[]}},"*":{include:[],exclude:[]}},highlight:{},explain:{__one_of:[!0,!1]},stats:[""]}})}});