(this["webpackJsonpgenome-analyzer"]=this["webpackJsonpgenome-analyzer"]||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/mace.0a049e99.jpg"},104:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(33),r=a.n(c),s=(a(43),a(44),a(45),a(34)),i=a.n(s),o=a(11),A=a.n(o),m=a(19),p=a(13),u=a(14),g=a(16),E=a(15),d=a(18),C=a.n(d),h=a(35),f=a(37),v=function(e){Object(g.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).inputMethod=function(){var t=!e.state.input;e.setState({input:t})},e.getData=function(){var t=Object(m.a)(A.a.mark((function t(a){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({predicted:!1}),e.setState({loading:!0}),console.log("About to send POST"),t.next=5,C.a.post("https://genomeanalyzer.wl.r.appspot.com/predict_upload",a,{}).then((function(t){return e.setState({prediction:t.data})}));case 5:e.setState({loading:!1}),e.setState({predicted:!0}),console.log(e.state.prediction),console.log("Data POSTed");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.uploadHandler=function(){var t=Object(m.a)(A.a.mark((function t(a){var n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({loading:!0}),console.log(a.target.files[0]),(n=new FormData).append("file",a.target.files[0]),console.log(n),e.getData(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.infoToggle=function(){e.setState({info:!e.state.info})},e.state={prediction:0,predicted:!1,virusName:"",loading:!1,info:!1},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"hero"}),l.a.createElement("div",{className:"float"},l.a.createElement("h1",null,"Machine learning powered viral genome classification."),this.state.isPredicted?l.a.createElement("p",{class:"Alert"},this.state.stopSignPrediction):null,this.state.loading?null:l.a.createElement("div",{className:"inputSection"},l.a.createElement("div",{className:"inputButton"},l.a.createElement("label",{className:"custom-file-upload"},l.a.createElement("input",{className:"Input",type:"file",name:"file",onChange:this.uploadHandler}),"Upload file"),l.a.createElement("button",{className:"help",onClick:function(){return e.infoToggle()}},l.a.createElement(f.a,null))),this.state.info?l.a.createElement("p",null,"Upload a .txt file containing a viral genome segment in FASTA format."):null),this.state.loading?l.a.createElement("div",{className:"loadingSection"},l.a.createElement(h.Ripple,{className:"loading",color:"white"}),l.a.createElement("p",null,"This can take several minutes. Great time to make a coffee.")):null,this.state.predicted?l.a.createElement("div",{className:"predictionSection"},l.a.createElement("p",null,"This virus is genetically closest to ",this.state.prediction,".")):null))}}]),a}(n.Component),Q=(a(98),a(99),a(100),function(e){Object(g.a)(a,e);var t=Object(E.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"hero"}),l.a.createElement("div",{className:"people"},l.a.createElement("div",{className:"person"},l.a.createElement("div",{className:"team1"}),l.a.createElement("p",{className:"name"},"Grant Wiersum"),l.a.createElement("p",null,"https://www.linkedin.com/in/gbwiersum/")),l.a.createElement("div",{className:"person"},l.a.createElement("div",{className:"team2"}),l.a.createElement("p",{className:"name"},"Daniela DeLeon"),l.a.createElement("p",null,"https://www.linkedin.com/in/daniela-deleon-989563a8/")),l.a.createElement("div",{className:"person"},l.a.createElement("div",{className:"team3"}),l.a.createElement("p",{className:"name"},"Ayon Bhattacharya"),l.a.createElement("p",null,"ayontech.io"))))}}]),a}(n.Component)),N=a(12),w=a(1);var I=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(N.a,null,l.a.createElement("div",{className:"header"},l.a.createElement(N.b,{className:"logo",to:"/"},l.a.createElement("img",{src:i.a})),l.a.createElement("ul",{className:"Menu"},l.a.createElement("li",{className:"MenuItem"},l.a.createElement(N.b,{className:"Link",to:"/"},"Classify")),l.a.createElement("li",{className:"MenuItem"},l.a.createElement(N.b,{className:"Link",to:"/team"},"Team")))),l.a.createElement(w.c,null,l.a.createElement(w.a,{path:"/team"},l.a.createElement(Q,null)),l.a.createElement(w.a,{path:"/"},l.a.createElement(v,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},34:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAlqADAAQAAAABAAAAlgAAAAA0g2oaAAAD7UlEQVR4Ae3dQXKUQBQGYCaVKj1KcgrHK+kVXOp1XOqU5R2y9AIewIUVJHGTkGJ43TCE7v5mJcNroD/+gtB0OV3nQ4AAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECOxW4LDbI6vwwPq7Yz/VrcPtqapzcTXVUd8TWCIgWEv0tJ0UEKxJGiuWCAjWEj1tJwUEa5LGiiUCgrVET1sCBAgQIECAAAECGwpU9RphK7dzr2aeHkNtr2me9m3u354K54SszxIQrCw2jeYEBGtOyPosAcHKYtNoTkCw5oSszxIQrCw2jeYEBGtOyPosAcHKYtNoTkCw5oSsJ0CAAAECBAgQIECAQM0CzU+b6YdP5AQfhk+kTs1/AcMNknARAcG6CKuNXiOICQyzRj/HKhOqDvdfDzc/viW0KKZUsOKn6mO8NFjZX/0eKqsMllthMAPK0gRcscJe/fpXrKv7n+HdF1bY/CO04YbLJNat8DKuzW9VsJqPAAACBAgQIECAAIFSBKoabogMHexxlkLkuB8Ctcdjnwq6p8IpGd8vEhCsRXwaTwk090on+n9bTYH5PibgihVzUpUoIFiJYMpjAp4KY04XrfJUeFFeG69JwK2wprOpLwQIECBAgAABAgQIEEgV2N04Vo1jOqknZVxfoonhhvFZtLyKgGCtwmgjY4FiZzcMsxS+jztjeT8CxQZrIDzuh9GRjAXcCscillcRKPmK9X4VgTI2Utxt33BDAcEy3FDASXKI2wj4G2sbZ3shQIAAAQIECBAgsFhgd8MNkR6V+Pj90K9SjztyTsY1ngrHIpZXERCsVRhtZCxQ8iudcV9eLJsB8YJksy+qDtageNxM0o6eCbgVPuOwsJZA7Vesvc2AKG6WQm7QDDfkymW0M9yQgaYJAQIECBAgQIAAAQIECBQoUORww2s7tzRskGtt5D1XTruzAoJ1lsfKXIHaX+k8uvS/jm+7P92nXCTt0gWaCFZ3f/2m6/6u/yv06d7NtHArbOZUb9vRZp4K+7t3H1ajvTl9iWyrpN8XjPQnpaaZYKWgzNUabpgT6jq3wnkjFRkCgpWBpgkBAgQIECBAgACB1xBofrgh+uPjh9tT81YpAfVUmKKlNiwgWGEqhSkCgpWipTYsIFhhKoUpAoKVoqU2LCBYYSqFKQKClaKlNiwgWGEqhSkCgpWipZYAAQIECBAgQIAAAQK1CVQ5FeTcVBjTX7aJsOGGbZyb24tgNXfKt+mwYG3j3NxeBKu5U75NhwVrG2d7IUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECWQL/AHjrclmFgw2tAAAAAElFTkSuQmCC"},38:function(e,t,a){e.exports=a(104)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},98:function(e,t,a){e.exports=a.p+"static/media/luke.9d3de910.jpg"},99:function(e,t,a){e.exports=a.p+"static/media/leia.be09f54c.jpg"}},[[38,1,2]]]);
//# sourceMappingURL=main.88d92535.chunk.js.map