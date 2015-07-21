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

define([],function(){return function(e){e.addEndpointDescription("_put_percolator",{priority:10,methods:["PUT","POST"],patterns:["{index}/.percolator/{id}"],url_params:{version:1,version_type:["external","internal"],op_type:["create"],routing:"",parent:"",timestamp:"",ttl:"5m",consistency:["qurom","one","all"],replication:["sync","async"],refresh:"__flag__",timeout:"1m"},data_autocomplete_rules:{query:{}}}),e.addEndpointDescription("_percolate",{methods:["GET","POST"],priority:10,patterns:["{indices}/{type}/_percolate"],url_params:{preference:["_primary","_primary_first","_local","_only_node:xyz","_prefer_node:xyz","_shards:2,3"],routing:"",ignore_unavailable:["true","false"],percolate_format:["ids"]},data_autocomplete_rules:{doc:{},query:{},filter:{},size:10,track_scores:{__one_of:[!0,!1]},sort:"_score",aggs:{},highlight:{}}}),e.addEndpointDescription("_percolate_id",{methods:["GET","POST"],patterns:["{indices}/{type}/{id}/_percolate"],url_params:{routing:"",ignore_unavailable:["true","false"],percolate_format:["ids"],percolate_index:"{index}",percolate_type:"{type}",percolate_routing:"",percolate_preference:["_primary","_primary_first","_local","_only_node:xyz","_prefer_node:xyz","_shards:2,3"],version:1,version_type:["external","internal"]},data_autocomplete_rules:{query:{},filter:{},size:10,track_scores:{__one_of:[!0,!1]},sort:"_score",aggs:{},highlight:{}}}),e.addEndpointDescription("_percolate_count",{methods:["GET","POST"],patterns:["{indices}/{type}/_percolate/count"],url_params:{preference:["_primary","_primary_first","_local","_only_node:xyz","_prefer_node:xyz","_shards:2,3"],routing:"",ignore_unavailable:["true","false"],percolate_format:["ids"]},data_autocomplete_rules:{doc:{},query:{},filter:{}}})}});