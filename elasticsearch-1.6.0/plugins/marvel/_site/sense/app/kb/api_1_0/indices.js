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

define([],function(){return function(e){e.addEndpointDescription("_refresh",{methods:["POST"],patterns:["_refresh","{indices}/_refresh"]}),e.addEndpointDescription("_flush",{methods:["POST"],patterns:["_flush","{indices}/_flush"],url_params:{wait_if_ongoing:[!0,!1],force:[!0,!1]}}),e.addEndpointDescription("_stats",{patterns:["_stats","_stats/{metrics}","{indices}/_stats","{indices}/_stats/{metrics}"],url_components:{metrics:["docs","store","indexing","search","get","merge","refresh","flush","warmer","filter_cache","id_cache","percolate","segments","fielddata","completion","translog","query_cache","_all"]},url_params:{fields:[],types:[],completion_fields:[],fielddata_fields:[],level:["cluster","indices","shards"]}}),e.addEndpointDescription("_segments",{patterns:["{indices}/_segments","_segments"]}),e.addEndpointDescription("_recovery",{patterns:["{indices}/_recovery","_recovery"],url_params:{detailed:"__flag__",active_only:"__flag__"}}),e.addEndpointDescription("_analyze",{methods:["GET","POST"],patterns:["{indices}/_analyze","_analyze"],url_params:{analyzer:"",char_filters:[],field:"",filters:[],text:"",tokenizer:""}}),e.addEndpointDescription("_validate_query",{methods:["GET","POST"],patterns:["{indices}/_validate/query","_validate/query"],url_params:{explain:"__flag__"},data_autocomplete_rules:{query:{}}}),e.addEndpointDescription("__create_index__",{methods:["PUT"],patterns:["{index}"],data_autocomplete_rules:{mappings:{__scope_link:"_put_mapping"},settings:{__scope_link:"_put_settings.index"},aliases:{__template:{NAME:{}}}}}),e.addEndpointDescription("__delete_indices__",{methods:["DELETE"],patterns:["{indices}"]}),e.addEndpointDescription("_get_index",{methods:["GET"],patterns:["{indices}","{indices}/{feature}"],url_components:{feature:["_settings","_mappings","_warmers","_aliases"]}})}});