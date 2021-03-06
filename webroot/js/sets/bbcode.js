// ----------------------------------------------------------------------------
// markItUp!
// ----------------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// ----------------------------------------------------------------------------
// BBCode tags example
// http://en.wikipedia.org/wiki/Bbcode
// ----------------------------------------------------------------------------
// Feel free to add more tags
// ----------------------------------------------------------------------------
var bbcodeSettings = {
	nameSpace: 'bbcode',
	previewParserPath: '', // path to your BBCode parser
	markupSet: [
		{name:'Bold', key:'B', openWith:'[b]', closeWith:'[/b]'},
		{name:'Italic', key:'I', openWith:'[i]', closeWith:'[/i]'},
		{name:'Underline', key:'U', openWith:'[u]', closeWith:'[/u]'},
		{name:'Strike-Through', key:'S', openWith:'[s]', closeWith:'[/s]'},
		{separator:'---------------' },
		{name:'Image', key:'I', replaceWith:'[img][![Url]!][/img]'},
		{name:'Link', key:'L', openWith:'[url="[![Url]!]"]', closeWith:'[/url]', placeHolder:'Your text to link here...'},
		{name:'Email', key:'E', openWith:'[email="[![Email]!]"]', closeWith:'[/email]', placeHolder:'Email address here...'},
		{separator:'---------------' },
		{name:'Colors', openWith:'[color="[![Color]!]"]', closeWith:'[/color]', dropMenu: [
			{name:'Yellow', openWith:'[color="yellow"]', closeWith:'[/color]', className:"col1-1" },
			{name:'Orange', openWith:'[color="orange"]', closeWith:'[/color]', className:"col1-2" },
			{name:'Red', openWith:'[color="red"]', closeWith:'[/color]', className:"col1-3" },
			{name:'Blue', openWith:'[color="blue"]', closeWith:'[/color]', className:"col2-1" },
			{name:'Purple', openWith:'[color="purple"]', closeWith:'[/color]', className:"col2-2" },
			{name:'Green', openWith:'[color="green"]', closeWith:'[/color]', className:"col2-3" },
			{name:'White', openWith:'[color="white"]', closeWith:'[/color]', className:"col3-1" },
			{name:'Gray', openWith:'[color="gray"]', closeWith:'[/color]', className:"col3-2" },
			{name:'Black', openWith:'[color="black"]', closeWith:'[/color]', className:"col3-3" }
		]},
		{name:'Size', openWith:'[size="[![Text size]!]"]', closeWith:'[/size]', dropMenu :[
			{name:'Big', openWith:'[size="29"]', closeWith:'[/size]' },
			{name:'Large', openWith:'[size="20"]', closeWith:'[/size]' },
			{name:'Normal', openWith:'[size="13"]', closeWith:'[/size]' },
			{name:'Small', openWith:'[size="10"]', closeWith:'[/size]' }
		]},
		{name:'Alignments', dropMenu:[
			{name:'Left', className:'left', openWith:'[left]', closeWith:'[/left]' },
			{name:'Center', className:'center', openWith:'[center]', closeWith:'[/center]' },
			{name:'Right', className:'right', openWith:'[right]', closeWith:'[/right]' },
			{name:'Justify', className:'right', openWith:'[justify]', closeWith:'[/justify]' }
		]},
		{separator:'---------------' },
		{name:'Bulleted list', openWith:'[list]\n', closeWith:'\n[/list]'},
		{name:'Numbered list', openWith:'[olist]\n', closeWith:'\n[/olist]'},
		{name:'List item', openWith:'[li]', closeWith:'[/li]'},
		{separator:'---------------' },
		{name:'Quotes', key:'Q', openWith:'[quote]', closeWith:'[/quote]'},
		{name:'Code', openWith:'[code]', closeWith:'[/code]'},
		{separator:'---------------' },
		{name:'Clean', className:"clean", replaceWith: function(markitup) {
			return markitup.selection.replace(/\[(.*?)\]/g, "");
		} }
	]
};