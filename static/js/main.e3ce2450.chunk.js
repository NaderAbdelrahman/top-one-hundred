(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{33:function(e,a,t){e.exports=t(63)},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(28),s=t.n(l),i=t(30),p=t(6),c=t(9),m=t(10),o=t(13),u=t(12),b=t(11),h=t(14),g=t(29),_=t.n(g),d=(t(55),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).state={popup:!1},console.log(new Date(t.props.releaseDate)),t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"getDateString",value:function(e){var a=new Date(e),t=a.getDate();return a.getMonth()+1+"/"+t+"/"+a.getFullYear()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"album__wrapper"},r.a.createElement("p",{className:"album__ranking"},this.props.ranking,"."),r.a.createElement("img",{className:"album__image",src:this.props.imgSrc,alt:"album_image",onClick:function(){return e.setState({popup:!e.state.popup})}}),r.a.createElement("p",{className:"album__name"},this.props.name),r.a.createElement("p",{className:"album__artist"},this.props.artist),this.state.popup?r.a.createElement("div",{className:"album--popup__wrapper"},r.a.createElement("div",{className:"album--popup__card"},r.a.createElement("img",{className:"album--popup__image",src:this.props.imgSrc,alt:"album_image"}),r.a.createElement("div",{className:"album--popup__text-wrapper"},r.a.createElement("p",{className:"album--popup__name"},this.props.name),r.a.createElement("p",{className:"album--popup__artist"},this.props.artist),r.a.createElement("p",{className:"album--popup__price"},"Price: ",this.props.price),r.a.createElement("p",{className:"album--popup__itemCount"},"Number of Songs: ",this.props.itemCount),r.a.createElement("p",{className:"album--popup__genre"},"Genre: ",this.props.genre),r.a.createElement("p",{className:"album--popup__releaseDate"},"Release Date: ",this.getDateString(this.props.releaseDate))),r.a.createElement("div",{className:"album--popup__close",onClick:function(){return e.setState({popup:!1})}},"X"))):null)}}]),a}(r.a.Component)),f=(t(56),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).state={rawAlbumArray:[],inputValue:""},t.changeHandler=t.changeHandler.bind(Object(b.a)(t)),t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"changeHandler",value:function(e){this.setState({inputValue:e.target.value})}},{key:"componentDidMount",value:function(){var e=this;_.a.get("https://itunes.apple.com/us/rss/topalbums/limit=100/json").then((function(a){e.setState({rawAlbumArray:a.data.feed.entry})}))}},{key:"render",value:function(){var e=this,a=this.state.rawAlbumArray.filter((function(a){return-1!==a["im:name"].label.toLowerCase().indexOf(e.state.inputValue)}));return r.a.createElement("div",null,r.a.createElement("input",{className:"album-list__input",type:"text",value:this.state.inputValue,onChange:this.changeHandler,placeholder:"Begin entering name of album to search"}),r.a.createElement("div",{className:"album-list__wrapper"},a.map((function(e,a){return r.a.createElement(d,{ranking:a+1,imgSrc:e["im:image"][2].label,name:e["im:name"].label,artist:e["im:artist"].label,price:e["im:price"].label,itemCount:e["im:itemCount"].label,genre:e.category.attributes.label,releaseDate:e["im:releaseDate"].label})}))))}}]),a}(r.a.Component));t(57);var v=function(){return r.a.createElement(i.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:f}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.e3ce2450.chunk.js.map