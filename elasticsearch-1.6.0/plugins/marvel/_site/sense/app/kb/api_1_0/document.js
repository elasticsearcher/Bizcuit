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

define([],function(){return function(e){e.addEndpointDescription("_get_doc",{methods:["GET"],patterns:["{index}/{type}/{id}"],url_params:{version:1,routing:"",parent:"",_source:"",_source_exclude:"",_source_include:""}}),e.addEndpointDescription("_get_doc_source",{methods:["GET"],patterns:["{index}/{type}/{id}/_source"],url_params:{version:1,routing:"",parent:"",_source_exclude:"",_source_include:""}}),e.addEndpointDescription("_delete_doc",{methods:["DELETE"],patterns:["{index}/{type}/{id}"],url_params:{version:1,version_type:["external","internal"],routing:"",parent:""}}),e.addEndpointDescription("index_doc",{methods:["PUT","POST"],patterns:["{index}/{type}/{id}"],url_params:{version:1,version_type:["external","internal"],op_type:["create"],routing:"",parent:"",timestamp:"",ttl:"5m",consistency:["qurom","one","all"],replication:["sync","async"],refresh:"__flag__",timeout:"1m"}}),e.addEndpointDescription("create_doc",{methods:["PUT","POST"],patterns:["{index}/{type}/{id}/_create"],url_params:{version:1,version_type:["external","internal"],routing:"",parent:"",timestamp:"",ttl:"5m",consistency:["qurom","one","all"],replication:["sync","async"],refresh:"__flag__",timeout:"1m"}}),e.addEndpointDescription("index_doc_no_id",{methods:["POST"],patterns:["{index}/{type}"],url_params:{version:1,version_type:["external","internal"],routing:"",parent:"",timestamp:"",ttl:"5m",consistency:["qurom","one","all"],replication:["sync","async"],refresh:"__flag__",timeout:"1m"}}),e.addEndpointDescription("_update",{methods:["POST"],patterns:["{index}/{type}/{id}/_update"],url_params:{version:1,version_type:["force","internal"],routing:"",parent:"",timestamp:"",consistency:["qurom","one","all"],replication:["sync","async"],refresh:"__flag__",timeout:"1m",retry_on_conflict:3,fields:""},data_autocomplete_rules:{script:"",script_id:"",lang:"groovy",params:{},doc:{},upsert:{},scripted_upsert:{__one_of:[!0,!1]}}}),e.addEndpointDescription("_put_script",{methods:["POST","PUT"],patterns:["_scripts/{lang}/{id}","_scripts/{lang}/{id}/_create"],url_components:{lang:["groovy","expressions"]},data_autocomplete_rules:{script:""}})}});