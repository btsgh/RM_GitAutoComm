export default {
	getHtml: () => `
		<!DOCTYPE html>
		<html>
			<head>
				<title>Parcel Sandbox</title>
				<meta charset="UTF-8" />
			</head>
			<style>
				.tabulator{position:relative;border:1px solid #999;background-color:#888;font-size:14px;text-align:left;overflow:hidden;-webkit-transform:translateZ(0);-moz-transform:translateZ(0);-ms-transform:translateZ(0);-o-transform:translateZ(0);transform:translateZ(0)}.tabulator[tabulator-layout=fitDataFill] .tabulator-tableholder .tabulator-table{min-width:100%}.tabulator[tabulator-layout=fitDataTable]{display:inline-block}.tabulator.tabulator-block-select{user-select:none}.tabulator .tabulator-header{position:relative;box-sizing:border-box;width:100%;border-bottom:1px solid #999;background-color:#e6e6e6;color:#555;font-weight:700;white-space:nowrap;overflow:hidden;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none}.tabulator .tabulator-header.tabulator-header-hidden{display:none}.tabulator .tabulator-header .tabulator-header-contents{position:relative;overflow:hidden}.tabulator .tabulator-header .tabulator-header-contents .tabulator-headers{display:inline-block}.tabulator .tabulator-header .tabulator-col{display:inline-flex;position:relative;box-sizing:border-box;flex-direction:column;justify-content:flex-start;border-right:1px solid #aaa;background:#e6e6e6;text-align:left;vertical-align:bottom;overflow:hidden}.tabulator .tabulator-header .tabulator-col.tabulator-moving{position:absolute;border:1px solid #999;background:#cdcdcd;pointer-events:none}.tabulator .tabulator-header .tabulator-col .tabulator-col-content{box-sizing:border-box;position:relative;padding:4px}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-header-popup-button{padding:0 8px}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-header-popup-button:hover{cursor:pointer;opacity:.6}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title-holder{position:relative}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title{box-sizing:border-box;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;vertical-align:bottom}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title.tabulator-col-title-wrap{white-space:normal;text-overflow:clip}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title .tabulator-title-editor{box-sizing:border-box;width:100%;border:1px solid #999;padding:1px;background:#fff}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title .tabulator-header-popup-button+.tabulator-title-editor{width:calc(100% - 22px)}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-sorter{display:flex;align-items:center;position:absolute;top:0;bottom:0;right:4px}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-sorter .tabulator-arrow{width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #bbb}.tabulator .tabulator-header .tabulator-col.tabulator-col-group .tabulator-col-group-cols{position:relative;display:flex;border-top:1px solid #aaa;overflow:hidden;margin-right:-1px}.tabulator .tabulator-header .tabulator-col .tabulator-header-filter{position:relative;box-sizing:border-box;margin-top:2px;width:100%;text-align:center}.tabulator .tabulator-header .tabulator-col .tabulator-header-filter textarea{height:auto!important}.tabulator .tabulator-header .tabulator-col .tabulator-header-filter svg{margin-top:3px}.tabulator .tabulator-header .tabulator-col .tabulator-header-filter input::-ms-clear{width:0;height:0}.tabulator .tabulator-header .tabulator-col.tabulator-sortable .tabulator-col-title{padding-right:25px}.tabulator .tabulator-header .tabulator-col.tabulator-sortable.tabulator-col-sorter-element:hover{cursor:pointer;background-color:#cdcdcd}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=none] .tabulator-col-content .tabulator-col-sorter{color:#bbb}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=none] .tabulator-col-content .tabulator-col-sorter.tabulator-col-sorter-element .tabulator-arrow:hover{cursor:pointer;border-bottom:6px solid #555}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=none] .tabulator-col-content .tabulator-col-sorter .tabulator-arrow{border-top:none;border-bottom:6px solid #bbb}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=ascending] .tabulator-col-content .tabulator-col-sorter{color:#666}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=ascending] .tabulator-col-content .tabulator-col-sorter.tabulator-col-sorter-element .tabulator-arrow:hover{cursor:pointer;border-bottom:6px solid #555}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=ascending] .tabulator-col-content .tabulator-col-sorter .tabulator-arrow{border-top:none;border-bottom:6px solid #666}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=descending] .tabulator-col-content .tabulator-col-sorter{color:#666}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=descending] .tabulator-col-content .tabulator-col-sorter.tabulator-col-sorter-element .tabulator-arrow:hover{cursor:pointer;border-top:6px solid #555}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=descending] .tabulator-col-content .tabulator-col-sorter .tabulator-arrow{border-bottom:none;border-top:6px solid #666;color:#666}.tabulator .tabulator-header .tabulator-col.tabulator-col-vertical .tabulator-col-content .tabulator-col-title{writing-mode:vertical-rl;text-orientation:mixed;display:flex;align-items:center;justify-content:center}.tabulator .tabulator-header .tabulator-col.tabulator-col-vertical.tabulator-col-vertical-flip .tabulator-col-title{transform:rotate(180deg)}.tabulator .tabulator-header .tabulator-col.tabulator-col-vertical.tabulator-sortable .tabulator-col-title{padding-right:0;padding-top:20px}.tabulator .tabulator-header .tabulator-col.tabulator-col-vertical.tabulator-sortable.tabulator-col-vertical-flip .tabulator-col-title{padding-right:0;padding-bottom:20px}.tabulator .tabulator-header .tabulator-col.tabulator-col-vertical.tabulator-sortable .tabulator-col-sorter{justify-content:center;left:0;right:0;top:4px;bottom:auto}.tabulator .tabulator-header .tabulator-frozen{position:sticky;left:0;z-index:10}.tabulator .tabulator-header .tabulator-frozen.tabulator-frozen-left{border-right:2px solid #aaa}.tabulator .tabulator-header .tabulator-frozen.tabulator-frozen-right{border-left:2px solid #aaa}.tabulator .tabulator-header .tabulator-calcs-holder{box-sizing:border-box;min-width:600%;background:#f3f3f3!important;border-top:1px solid #aaa;border-bottom:1px solid #aaa}.tabulator .tabulator-header .tabulator-calcs-holder .tabulator-row{background:#f3f3f3!important}.tabulator .tabulator-header .tabulator-calcs-holder .tabulator-row .tabulator-col-resize-handle{display:none}.tabulator .tabulator-header .tabulator-frozen-rows-holder{min-width:600%}.tabulator .tabulator-header .tabulator-frozen-rows-holder:empty{display:none}.tabulator .tabulator-tableholder{position:relative;width:100%;white-space:nowrap;overflow:auto;-webkit-overflow-scrolling:touch}.tabulator .tabulator-tableholder:focus{outline:none}.tabulator .tabulator-tableholder .tabulator-placeholder{box-sizing:border-box;display:flex;align-items:center;justify-content:center;width:100%}.tabulator .tabulator-tableholder .tabulator-placeholder[tabulator-render-mode=virtual]{min-height:100%;min-width:100%}.tabulator .tabulator-tableholder .tabulator-placeholder .tabulator-placeholder-contents{display:inline-block;text-align:center;padding:10px;color:#ccc;font-weight:700;font-size:20px;white-space:normal}.tabulator .tabulator-tableholder .tabulator-table{position:relative;display:inline-block;background-color:#fff;white-space:nowrap;overflow:visible;color:#333}.tabulator .tabulator-tableholder .tabulator-table .tabulator-row.tabulator-calcs{font-weight:700;background:#e2e2e2!important}.tabulator .tabulator-tableholder .tabulator-table .tabulator-row.tabulator-calcs.tabulator-calcs-top{border-bottom:2px solid #aaa}.tabulator .tabulator-tableholder .tabulator-table .tabulator-row.tabulator-calcs.tabulator-calcs-bottom{border-top:2px solid #aaa}.tabulator .tabulator-footer{border-top:1px solid #999;background-color:#e6e6e6;color:#555;font-weight:700;white-space:nowrap;user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none}.tabulator .tabulator-footer .tabulator-footer-contents{display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:5px 10px}.tabulator .tabulator-footer .tabulator-footer-contents:empty{display:none}.tabulator .tabulator-footer .tabulator-calcs-holder{box-sizing:border-box;width:100%;text-align:left;background:#f3f3f3!important;border-bottom:1px solid #aaa;border-top:1px solid #aaa;overflow:hidden}.tabulator .tabulator-footer .tabulator-calcs-holder .tabulator-row{display:inline-block;background:#f3f3f3!important}.tabulator .tabulator-footer .tabulator-calcs-holder .tabulator-row .tabulator-col-resize-handle{display:none}.tabulator .tabulator-footer .tabulator-calcs-holder:only-child{margin-bottom:-5px;border-bottom:none}.tabulator .tabulator-footer>*+.tabulator-page-counter{margin-left:10px}.tabulator .tabulator-footer .tabulator-page-counter{font-weight:400}.tabulator .tabulator-footer .tabulator-paginator{flex:1;text-align:right;color:#555;font-family:inherit;font-weight:inherit;font-size:inherit}.tabulator .tabulator-footer .tabulator-page-size{display:inline-block;margin:0 5px;padding:2px 5px;border:1px solid #aaa;border-radius:3px}.tabulator .tabulator-footer .tabulator-pages{margin:0 7px}.tabulator .tabulator-footer .tabulator-page{display:inline-block;margin:0 2px;padding:2px 5px;border:1px solid #aaa;border-radius:3px;background:hsla(0,0%,100%,.2)}.tabulator .tabulator-footer .tabulator-page.active{color:#d00}.tabulator .tabulator-footer .tabulator-page:disabled{opacity:.5}.tabulator .tabulator-footer .tabulator-page:not(.disabled):hover{cursor:pointer;background:rgba(0,0,0,.2);color:#fff}.tabulator .tabulator-col-resize-handle{position:relative;display:inline-block;width:6px;margin-left:-3px;margin-right:-3px;z-index:10;vertical-align:middle}.tabulator .tabulator-col-resize-handle:hover{cursor:ew-resize}.tabulator .tabulator-col-resize-handle:last-of-type{width:3px;margin-right:0}.tabulator .tabulator-alert{position:absolute;display:flex;align-items:center;top:0;left:0;z-index:100;height:100%;width:100%;background:rgba(0,0,0,.4);text-align:center}.tabulator .tabulator-alert .tabulator-alert-msg{display:inline-block;margin:0 auto;padding:10px 20px;border-radius:10px;background:#fff;font-weight:700;font-size:16px}.tabulator .tabulator-alert .tabulator-alert-msg.tabulator-alert-state-msg{border:4px solid #333;color:#000}.tabulator .tabulator-alert .tabulator-alert-msg.tabulator-alert-state-error{border:4px solid #d00;color:#590000}.tabulator-row{position:relative;box-sizing:border-box;min-height:22px;background-color:#fff}.tabulator-row.tabulator-row-even{background-color:#efefef}.tabulator-row.tabulator-selectable:hover{background-color:#bbb;cursor:pointer}.tabulator-row.tabulator-selected{background-color:#9abcea}.tabulator-row.tabulator-selected:hover{background-color:#769bcc;cursor:pointer}.tabulator-row.tabulator-row-moving{border:1px solid #000;background:#fff}.tabulator-row.tabulator-moving{position:absolute;border-top:1px solid #aaa;border-bottom:1px solid #aaa;pointer-events:none;z-index:15}.tabulator-row .tabulator-row-resize-handle{position:absolute;right:0;bottom:0;left:0;height:5px}.tabulator-row .tabulator-row-resize-handle.prev{top:0;bottom:auto}.tabulator-row .tabulator-row-resize-handle:hover{cursor:ns-resize}.tabulator-row .tabulator-responsive-collapse{box-sizing:border-box;padding:5px;border-top:1px solid #aaa;border-bottom:1px solid #aaa}.tabulator-row .tabulator-responsive-collapse:empty{display:none}.tabulator-row .tabulator-responsive-collapse table{font-size:14px}.tabulator-row .tabulator-responsive-collapse table tr td{position:relative}.tabulator-row .tabulator-responsive-collapse table tr td:first-of-type{padding-right:10px}.tabulator-row .tabulator-cell{display:inline-block;position:relative;box-sizing:border-box;padding:4px;border-right:1px solid #aaa;vertical-align:middle;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tabulator-row .tabulator-cell.tabulator-frozen{display:inline-block;position:sticky;left:0;background-color:inherit;z-index:10}.tabulator-row .tabulator-cell.tabulator-frozen.tabulator-frozen-left{border-right:2px solid #aaa}.tabulator-row .tabulator-cell.tabulator-frozen.tabulator-frozen-right{border-left:2px solid #aaa}.tabulator-row .tabulator-cell.tabulator-editing{border:1px solid #1d68cd;outline:none;padding:0}.tabulator-row .tabulator-cell.tabulator-editing input,.tabulator-row .tabulator-cell.tabulator-editing select{border:1px;background:transparent;outline:none}.tabulator-row .tabulator-cell.tabulator-validation-fail{border:1px solid #d00}.tabulator-row .tabulator-cell.tabulator-validation-fail input,.tabulator-row .tabulator-cell.tabulator-validation-fail select{border:1px;background:transparent;color:#d00}.tabulator-row .tabulator-cell.tabulator-row-handle{display:inline-flex;align-items:center;justify-content:center;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none}.tabulator-row .tabulator-cell.tabulator-row-handle .tabulator-row-handle-box{width:80%}.tabulator-row .tabulator-cell.tabulator-row-handle .tabulator-row-handle-box .tabulator-row-handle-bar{width:100%;height:3px;margin-top:2px;background:#666}.tabulator-row .tabulator-cell .tabulator-data-tree-branch{display:inline-block;vertical-align:middle;height:9px;width:7px;margin-top:-9px;margin-right:5px;border-bottom-left-radius:1px;border-left:2px solid #aaa;border-bottom:2px solid #aaa}.tabulator-row .tabulator-cell .tabulator-data-tree-control{display:inline-flex;justify-content:center;align-items:center;vertical-align:middle;height:11px;width:11px;margin-right:5px;border:1px solid #333;border-radius:2px;background:rgba(0,0,0,.1);overflow:hidden}.tabulator-row .tabulator-cell .tabulator-data-tree-control:hover{cursor:pointer;background:rgba(0,0,0,.2)}.tabulator-row .tabulator-cell .tabulator-data-tree-control .tabulator-data-tree-control-collapse{display:inline-block;position:relative;height:7px;width:1px;background:transparent}.tabulator-row .tabulator-cell .tabulator-data-tree-control .tabulator-data-tree-control-collapse:after{position:absolute;content:"";left:-3px;top:3px;height:1px;width:7px;background:#333}.tabulator-row .tabulator-cell .tabulator-data-tree-control .tabulator-data-tree-control-expand{display:inline-block;position:relative;height:7px;width:1px;background:#333}.tabulator-row .tabulator-cell .tabulator-data-tree-control .tabulator-data-tree-control-expand:after{position:absolute;content:"";left:-3px;top:3px;height:1px;width:7px;background:#333}.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle{display:inline-flex;align-items:center;justify-content:center;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none;height:15px;width:15px;border-radius:20px;background:#666;color:#fff;font-weight:700;font-size:1.1em}.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle:hover{opacity:.7;cursor:pointer}.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle.open .tabulator-responsive-collapse-toggle-close{display:initial}.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle.open .tabulator-responsive-collapse-toggle-open{display:none}.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle svg{stroke:#fff}.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle .tabulator-responsive-collapse-toggle-close{display:none}.tabulator-row .tabulator-cell .tabulator-traffic-light{display:inline-block;height:14px;width:14px;border-radius:14px}.tabulator-row.tabulator-group{box-sizing:border-box;border-bottom:1px solid #999;border-right:1px solid #aaa;border-top:1px solid #999;padding:5px 5px 5px 10px;background:#ccc;font-weight:700;min-width:100%}.tabulator-row.tabulator-group:hover{cursor:pointer;background-color:rgba(0,0,0,.1)}.tabulator-row.tabulator-group.tabulator-group-visible .tabulator-arrow{margin-right:10px;border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid #666;border-bottom:0}.tabulator-row.tabulator-group.tabulator-group-level-1{padding-left:30px}.tabulator-row.tabulator-group.tabulator-group-level-2{padding-left:50px}.tabulator-row.tabulator-group.tabulator-group-level-3{padding-left:70px}.tabulator-row.tabulator-group.tabulator-group-level-4{padding-left:90px}.tabulator-row.tabulator-group.tabulator-group-level-5{padding-left:110px}.tabulator-row.tabulator-group .tabulator-group-toggle{display:inline-block}.tabulator-row.tabulator-group .tabulator-arrow{display:inline-block;width:0;height:0;margin-right:16px;border-top:6px solid transparent;border-bottom:6px solid transparent;border-right:0;border-left:6px solid #666;vertical-align:middle}.tabulator-row.tabulator-group span{margin-left:10px;color:#d00}.tabulator-popup-container{position:absolute;display:inline-block;box-sizing:border-box;background:#fff;border:1px solid #aaa;box-shadow:0 0 5px 0 rgba(0,0,0,.2);font-size:14px;overflow-y:auto;-webkit-overflow-scrolling:touch;z-index:10000}.tabulator-popup{padding:5px;border-radius:3px}.tabulator-tooltip{max-width:Min(500px,100%);padding:3px 5px;border-radius:2px;box-shadow:none;font-size:12px;pointer-events:none}.tabulator-menu .tabulator-menu-item{position:relative;box-sizing:border-box;padding:5px 10px;user-select:none}.tabulator-menu .tabulator-menu-item.tabulator-menu-item-disabled{opacity:.5}.tabulator-menu .tabulator-menu-item:not(.tabulator-menu-item-disabled):hover{cursor:pointer;background:#efefef}.tabulator-menu .tabulator-menu-item.tabulator-menu-item-submenu{padding-right:25px}.tabulator-menu .tabulator-menu-item.tabulator-menu-item-submenu:after{display:inline-block;position:absolute;top:calc(5px + .4em);right:10px;height:7px;width:7px;content:"";border-color:#aaa;border-style:solid;border-width:1px 1px 0 0;vertical-align:top;transform:rotate(45deg)}.tabulator-menu .tabulator-menu-separator{border-top:1px solid #aaa}.tabulator-edit-list{max-height:200px;font-size:14px;overflow-y:auto;-webkit-overflow-scrolling:touch}.tabulator-edit-list .tabulator-edit-list-item{padding:4px;color:#333;outline:none}.tabulator-edit-list .tabulator-edit-list-item.active{color:#fff;background:#1d68cd}.tabulator-edit-list .tabulator-edit-list-item.active.focused{outline:1px solid hsla(0,0%,100%,.5)}.tabulator-edit-list .tabulator-edit-list-item.focused{outline:1px solid #1d68cd}.tabulator-edit-list .tabulator-edit-list-item:hover{cursor:pointer;color:#fff;background:#1d68cd}.tabulator-edit-list .tabulator-edit-list-placeholder{padding:4px;color:#333;text-align:center}.tabulator-edit-list .tabulator-edit-list-group{border-bottom:1px solid #aaa;padding:6px 4px 4px;color:#333;font-weight:700}.tabulator-edit-list .tabulator-edit-list-group.tabulator-edit-list-group-level-2,.tabulator-edit-list .tabulator-edit-list-item.tabulator-edit-list-group-level-2{padding-left:12px}.tabulator-edit-list .tabulator-edit-list-group.tabulator-edit-list-group-level-3,.tabulator-edit-list .tabulator-edit-list-item.tabulator-edit-list-group-level-3{padding-left:20px}.tabulator-edit-list .tabulator-edit-list-group.tabulator-edit-list-group-level-4,.tabulator-edit-list .tabulator-edit-list-item.tabulator-edit-list-group-level-4{padding-left:28px}.tabulator-edit-list .tabulator-edit-list-group.tabulator-edit-list-group-level-5,.tabulator-edit-list .tabulator-edit-list-item.tabulator-edit-list-group-level-5{padding-left:36px}.tabulator.tabulator-ltr{direction:ltr}.tabulator.tabulator-rtl{text-align:initial;direction:rtl}.tabulator.tabulator-rtl .tabulator-header .tabulator-col{text-align:initial;border-left:1px solid #aaa;border-right:initial}.tabulator.tabulator-rtl .tabulator-header .tabulator-col.tabulator-col-group .tabulator-col-group-cols{margin-right:0;margin-left:-1px}.tabulator.tabulator-rtl .tabulator-header .tabulator-col.tabulator-sortable .tabulator-col-title{padding-right:0;padding-left:25px}.tabulator.tabulator-rtl .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-sorter{left:8px;right:auto}.tabulator.tabulator-rtl .tabulator-row .tabulator-cell{border-right:initial;border-left:1px solid #aaa}.tabulator.tabulator-rtl .tabulator-row .tabulator-cell .tabulator-data-tree-branch{margin-right:0;margin-left:5px;border-bottom-left-radius:0;border-bottom-right-radius:1px;border-left:initial;border-right:2px solid #aaa}.tabulator.tabulator-rtl .tabulator-row .tabulator-cell .tabulator-data-tree-control{margin-right:0;margin-left:5px}.tabulator.tabulator-rtl .tabulator-row .tabulator-cell.tabulator-frozen.tabulator-frozen-left{border-left:2px solid #aaa}.tabulator.tabulator-rtl .tabulator-row .tabulator-cell.tabulator-frozen.tabulator-frozen-right{border-right:2px solid #aaa}.tabulator.tabulator-rtl .tabulator-row .tabulator-col-resize-handle:last-of-type{width:3px;margin-left:0;margin-right:-3px}.tabulator.tabulator-rtl .tabulator-footer .tabulator-calcs-holder{text-align:initial}.tabulator-print-fullscreen{position:absolute;top:0;bottom:0;left:0;right:0;z-index:10000}body.tabulator-print-fullscreen-hide>:not(.tabulator-print-fullscreen){display:none!important}.tabulator-print-table{border-collapse:collapse}.tabulator-print-table .tabulator-data-tree-branch{display:inline-block;vertical-align:middle;height:9px;width:7px;margin-top:-9px;margin-right:5px;border-bottom-left-radius:1px;border-left:2px solid #aaa;border-bottom:2px solid #aaa}.tabulator-print-table .tabulator-print-table-group{box-sizing:border-box;border-bottom:1px solid #999;border-right:1px solid #aaa;border-top:1px solid #999;padding:5px 5px 5px 10px;background:#ccc;font-weight:700;min-width:100%}.tabulator-print-table .tabulator-print-table-group:hover{cursor:pointer;background-color:rgba(0,0,0,.1)}.tabulator-print-table .tabulator-print-table-group.tabulator-group-visible .tabulator-arrow{margin-right:10px;border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid #666;border-bottom:0}.tabulator-print-table .tabulator-print-table-group.tabulator-group-level-1 td{padding-left:30px!important}.tabulator-print-table .tabulator-print-table-group.tabulator-group-level-2 td{padding-left:50px!important}.tabulator-print-table .tabulator-print-table-group.tabulator-group-level-3 td{padding-left:70px!important}.tabulator-print-table .tabulator-print-table-group.tabulator-group-level-4 td{padding-left:90px!important}.tabulator-print-table .tabulator-print-table-group.tabulator-group-level-5 td{padding-left:110px!important}.tabulator-print-table .tabulator-print-table-group .tabulator-group-toggle{display:inline-block}.tabulator-print-table .tabulator-print-table-group .tabulator-arrow{display:inline-block;width:0;height:0;margin-right:16px;border-top:6px solid transparent;border-bottom:6px solid transparent;border-right:0;border-left:6px solid #666;vertical-align:middle}.tabulator-print-table .tabulator-print-table-group span{margin-left:10px;color:#d00}.tabulator-print-table .tabulator-data-tree-control{display:inline-flex;justify-content:center;align-items:center;vertical-align:middle;height:11px;width:11px;margin-right:5px;border:1px solid #333;border-radius:2px;background:rgba(0,0,0,.1);overflow:hidden}.tabulator-print-table .tabulator-data-tree-control:hover{cursor:pointer;background:rgba(0,0,0,.2)}.tabulator-print-table .tabulator-data-tree-control .tabulator-data-tree-control-collapse{display:inline-block;position:relative;height:7px;width:1px;background:transparent}.tabulator-print-table .tabulator-data-tree-control .tabulator-data-tree-control-collapse:after{position:absolute;content:"";left:-3px;top:3px;height:1px;width:7px;background:#333}.tabulator-print-table .tabulator-data-tree-control .tabulator-data-tree-control-expand{display:inline-block;position:relative;height:7px;width:1px;background:#333}.tabulator-print-table .tabulator-data-tree-control .tabulator-data-tree-control-expand:after{position:absolute;content:"";left:-3px;top:3px;height:1px;width:7px;background:#333}
/*# sourceMappingURL=tabulator.min.css.map */
</style>
<body>
  <div>
    <input type="checkbox" id="expandCollapse" name="expand" onclick="expandCollapse()"/>
    <label id="expandCollapseId" for="expandCollapse">Expand/Collapse</label>
   </div>
	<div id="ProductionRecipe-table"></div>
	<link href="https://unpkg.com/tabulator-tables/dist/css/tabulator.min.css" rel="stylesheet"/>
	<script type="text/javascript" src="https://unpkg.com/tabulator-tables/dist/js/tabulator.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/luxon/3.2.1/luxon.min.js" integrity="sha512-				pyR2hpC7bLig9Ub4eUIOC/BAO4anpdt7jhpF4dfrPv+qIg+KWztdVjFPCRCsRaWVfUylUCvrrxqMFNrJBdQIjQ==" 
	crossorigin="anonymous" referrerpolicy="no-referrer">
	</script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/luxon/3.2.1/luxon.js" integrity="sha512-zcg2bh53hsoYCfk7T1KjoZpdzydddZYsXDOieoI3lbWjKo/0YaX8uW/7oen2Th7i+EmEsO1Q5sD7FvieWsapVA==" 
	crossorigin="anonymous" referrerpolicy="no-referrer">
	</script>
	<script src="https://cdn.jsdelivr.net/npm/i18next@X.X.X/dist/umd/i18next.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js" integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	<script>
		var table; var tableData = []; let message = {}; var defaulttableData = [];
		let apiURL; let apiBody;
				
		function getColumnsConfig() {
			var cellContextMenu = [
    	{
      	label: i18next.t("VIEW RECIPE"),
        action:function(e, cell){
						message.messageEmitterName = 'VIEW';
						message.Message = {"rowData" : cell.getRow().getData()};
						window.parent.postMessage(message, '*');
            
        },
				disabled: function(cell) {
        	var rowData = cell.getRow().getData();
					//if(rowData.gender === 'male') return true;
					//else return false;
    		}
    	},
			{
      	label: i18next.t("EDIT"),
        action:function(e, cell){
						message.messageEmitterName = 'EDIT';
						message.Message = {"rowData" : cell.getRow().getData()};
						window.parent.postMessage(message, '*');
            //alert("cell clicked - 2");
        }
    	},
		];
			var columnsConfig =  {
				columns: [
					{ title: i18next.t("RECIPE CODE(PRODUCT CODE)"), field: "RECIPE_CODE" },
					{ title: i18next.t("RECIPE NAME(PRODUCT NAME)"), field: "PRODUCT_NAME" },
					{ title: i18next.t("CLASS"), field: "RECIPE_CLASS" },
					{ title: i18next.t("REV.NO"), field: "RECIPE_REVISION_NO" },
					{ title: i18next.t("ACTIVE FROM"), field: "DATE_START", 
						formatter: function(cell, formatterParams, onRendered) {
            	//const dateTime = new Date(moment(cell.getValue(), "DD/MM/YYYY HH:mm:ss").format("YYYY/MM/DD HH:mm:ss"));
							let dateTime = new Date(moment(cell.getValue()).format("YYYY/MM/DD HH:mm:ss"));
        			if (isNaN(dateTime.getTime())) {
          			dateTime = new Date(moment(cell.getValue(), "DD/MM/YYYY HH:mm:ss").format("YYYY/MM/DD HH:mm:ss"));
        			}
							let options = Intl.DateTimeFormatOptions | undefined;
        			if (dateTime.toLocaleTimeString().includes("12:00:00 AM")) {
								options = {
									year: "numeric",
									month: "numeric",
									day: "numeric",
								};
							} else {
								options = {
									year: "numeric",
									month: "numeric",
									day: "numeric",
									hour: "numeric",
									minute: "numeric",
									second: "numeric",
								};
							}							
							// const options = { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric", };
							return new Intl.DateTimeFormat(navigator.language, options).format(dateTime);
            }
					},
					{ title: i18next.t("MACHINE GROUP"), field: "MACHINE_GROUP" },
					{ title: i18next.t("RECIPE TYPE"), field: "RECIPE_TYPE_NAME",},
					{ title: i18next.t("STATUS"), field: "RECIPE_STATUS"},
					{ title: i18next.t("CLASSIFICATION"), field: "CLASSIFICATION"},
					{ title: i18next.t("MODIF_NUMBER"), field: "MODIF_NUMBER" ,visible:false},
					{ title: i18next.t("USER"), field: "RECIPE_UPUSER" ,visible:true},
					{ title: i18next.t("RECIPE_CLASS_CODE"), field: "RECIPE_CLASS_CODE" ,visible:false},
					{ title: i18next.t("IS_VALID"), field: "IS_VALID" ,visible:false },
					{ title: i18next.t("RECIPE_TYPE_NUMBER"), field: "RECIPE_TYPE_NUMBER" ,visible:false},
					{ title: i18next.t("RECIPE_NUMBER"), field: "RECIPE_NUMBER",visible:false},
					{ title: i18next.t("ACTION"), field: "menu", formatter: menuButton, clickMenu: cellContextMenu }
				],
				placeholder: i18next.t("No Data Available")
			}
			return columnsConfig;
		};
		
		function getCookie(name) {
    	const value = "; "+document.cookie+"";
      const parts = value.split("; "+name+"=");
      if (parts.length === 2) return parts.pop().split(';').shift();
    }

		function setupTable() {
			let tableConfig = getColumnsConfig();
			if(apiURL != "") {
			table = new Tabulator("#ProductionRecipe-table", {
								ajaxURL: apiURL,
								ajaxContentType:{
									body: function(url, config, params){
										return JSON.stringify(apiBody);
									},
								},
								ajaxConfig:{
									method:"POST",
									headers: {
										"Accept": "application/json",
										"Content-type": 'application/json; charset=utf-8',
										"Authorization": getCookie("tokensso"),
									},
								},
								ajaxResponse: !tableConfig?.isEmpty && function (url, params, response) {
									let last_page = 1;
									defaulttableData = response;
									return {
										data: response,
										last_page
									};
								},
								dataLoaderLoading: i18next.t('Loading'),
								pagination: true,
								movableRows:true,
								groupBy:["MACHINE_GROUP","RECIPE_CLASS", "RECIPE_TYPE_NAME"],
								layout: "fitColumns",
								paginationMode: "remote",
								groupStartOpen:[function(value, count, data, group){
										//value - the value all members of this group share
										//count - the number of rows in this group
										//data - an array of all the row data objects in this group
										//group - the group component for the group
										const expColl = document.querySelector("#expandCollapse");
										if(expColl.checked) {
											return true;
										} else {
											return false;
										}
										//return false; //all groups with more than three rows start open, any with three or less start closed
								},function(value, count, data, group){
								 const expColl = document.querySelector("#expandCollapse");
									if(expColl.checked) {
									return true;
									} else {
									return false;
									}
								}],
								maxHeight:620,
								locale: true,
								langs: {        
									"de": { //German language definition
										"pagination":{
											"first":"Erste",
											"last":"Letzte",
											"prev":"Vorige",
											"next":"Nächste"									
										},
									},
								},
								...tableConfig
							});
			} else {
			    table = new Tabulator("#ProductionRecipe-table", {
								data: [],
								pagination: true,
								paginationSize: 1,
								paginationMode: "remote",
								placeholder: i18next.t("No Data Available"),
								locale: true,
								langs: {        
									"de": { //German language definition
										"pagination":{
											"first":"Erste",
											"last":"Letzte",
											"prev":"Vorige",
											"next":"Nächste"									
										},
									},
								},
								...tableConfig
							});
			}			
	}
	
	var menuButton = function(cell, formatterParams, onRendered){
			return '<button class="menuButtonClass" type="button">...</button>';
		};
		function expandCollapse() {
			setupTableOnCheckBox();
		};
		// var cellContextMenu = [
    	// {
      	// label: "VIEW",
        // action:function(e, cell){
						// message.messageEmitterName = 'VIEW';
						// message.Message = {"rowData" : cell.getRow().getData()};
						// window.parent.postMessage(message, '*');
            // 
        // },
				// disabled: function(cell) {
        	// var rowData = cell.getRow().getData();
					// //if(rowData.gender === 'male') return true;
					// //else return false;
    		// }
    	// },
			// {
      	// label: "EDIT",
        // action:function(e, cell){
						// message.messageEmitterName = 'EDIT';
						// message.Message = {"rowData" : cell.getRow().getData()};
						// window.parent.postMessage(message, '*');
            // //alert("cell clicked - 2");
        // }
    	// },
		// ];
	
	function setupTableOnCheckBox() {
			let tableConfig = getColumnsConfig();
			    table = new Tabulator("#ProductionRecipe-table", {
								data: defaulttableData,
								pagination: true,
								layout: "fitColumns",
								paginationMode: "remote",
								groupBy:["MACHINE_GROUP","RECIPE_CLASS", "RECIPE_TYPE_NAME"],
								paginationMode: "remote",
								groupStartOpen:[function(value, count, data, group){
										const expColl = document.querySelector("#expandCollapse");
										if(expColl.checked) {
											return true;
										} else {
											return false;
										}
										//return false; //all groups with more than three rows start open, any with three or less start closed
								},function(value, count, data, group){
								 const expColl = document.querySelector("#expandCollapse");
									if(expColl.checked) {
									return true;
									} else {
									return false;
									}
								}],
								maxHeight:620,
								placeholder: i18next.t("No Data Available"),
								locale: true,
								langs: {        
									"de": { //German language definition
										"pagination":{
											"first":"Erste",
											"last":"Letzte",
											"prev":"Vorige",
											"next":"Nächste"									
										},
									},
								},
								...tableConfig
							});
	  }
		
		async function initTranslation(callback) {
						var host =  window.parent.location.host
						var browserLang = navigator.language						
						let langResponse; let langData;
						try {
							langResponse = await fetch("https://" + host + "/locales/" + browserLang + ".json");
						} catch (error) {							
							console.log('There was an error', error);							
						}						
						if (langResponse?.ok) {
  						langData = await langResponse.json();
						} else {
							langResponse = await fetch("https://" + host + "/locales/en.json");
							langData = await langResponse.json();
						}	
						var resObj = {}
						resObj[browserLang] = {
							translation:langData
						}
						i18next.init({
							fallbackLng: "en",
							lng: navigator.language,
							debug: true,
							resources: resObj
					 });
						updatei18nextText();
						callback();
					};
					function updatei18nextText() {
						document.getElementById('expandCollapseId').innerText = i18next.t("Expand/Collapse");
					};
					
		window.addEventListener("message", (event) => {
			console.log('message', event.data);
			if (event.data?.message === "View") {
				let message = event.data.data;
				
				apiURL = message.BASE_URL+"/recipe/search/production-recipe";
				apiBody = {"MACHINE_GROUP": message.MACHINE_GROUP,"RECIPE_CLASS": message.RECIPE_CLASS,"RECIPE_TYPE_NUMBER":  message.RECIPE_TYPE_NUMBER,"PRODUCT_CODE": message.PRODUCT_CODE,"INTER_MAT_CODE": message.INTER_MAT_CODE,"START_DATE":message.START_DATE
};				
				//setupTable();
				initTranslation(setupTable);
				console.log('message', apiBody);
			} else if(event.data?.message === "Reset") {
				apiURL = ""	;
				defaulttableData = [];
				//setupTable();
				initTranslation(setupTable);
			}
		});
		
		//setupTable();
		initTranslation(setupTable);
		</script>
	</body>
		</html>
	`
}