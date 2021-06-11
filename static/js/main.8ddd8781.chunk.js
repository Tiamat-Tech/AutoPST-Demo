(this["webpackJsonpvoice-conversion"]=this["webpackJsonpvoice-conversion"]||[]).push([[0],[,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(2),l=a.n(o);a(8),a(9);var u=function(e){e.root,e.reverse;var t=e.title,a=e.u1,r=e.u2,o=e.u3,l=e.u4,u=e.u5;return n.a.createElement("div",{className:"wrapper"},n.a.createElement("p",{className:"block-label"},t),n.a.createElement("div",{className:"rowv"},n.a.createElement("div",{className:"element"},n.a.createElement("p",null,"Source speech:"),n.a.createElement("audio",{controls:!0},n.a.createElement("source",{src:a,type:"audio/wav"}),"Your browser does not support the audio element.")),n.a.createElement("div",{className:"element"},n.a.createElement("p",null,"Target speaker's example utterance:"),n.a.createElement("audio",{controls:!0},n.a.createElement("source",{src:r,type:"audio/wav"}),"Your browser does not support the audio element."))),n.a.createElement("div",{className:"rowv"},n.a.createElement("div",{className:"element"},n.a.createElement("p",null,"AutoVC"),n.a.createElement("audio",{controls:!0},n.a.createElement("source",{src:o,type:"audio/wav"}),"Your browser does not support the audio element.")),n.a.createElement("div",{className:"element"},n.a.createElement("p",null,"RR"),n.a.createElement("audio",{controls:!0},n.a.createElement("source",{src:l,type:"audio/wav"}),"Your browser does not support the audio element.")),n.a.createElement("div",{className:"element"},n.a.createElement("p",null,"AutoPST(Proposed)"),n.a.createElement("audio",{controls:!0},n.a.createElement("source",{src:u,type:"audio/wav"}),"Your browser does not support the audio element."))))};a(10);var c=function(e){return n.a.createElement("div",{id:"main"},n.a.createElement("div",{className:"main-inner"},n.a.createElement("h1",{className:"main-title"},"Global Prosody Style Transfer Without Text Transcriptions:",n.a.createElement("font",{className:"red"}," Audio Demo")),n.a.createElement("div",{className:"to-reviewer"},n.a.createElement("font",{className:"red"},"To reviewers: "),"The reference list was accidentally not included in the main paper, but it is included in the supplementary material. You can also find the reference list",n.a.createElement("a",{className:"red",href:"/files/reference_list.pdf",target:"_blank"}," here"),". We apologize for the inconvenience!"),n.a.createElement("div",{className:"introduction"},n.a.createElement("p",null,"This demo webpage contains example audios generated by ",n.a.createElement("font",{className:"red"},"AutoPST"),", which is a voice style transfer algorithm that not only converts timbre, but also",n.a.createElement("font",{className:"red"}," converts the prosody")," to match the target speaker."),n.a.createElement("p",{style:{marginTop:"1.5em"}},"In this demo, you will hear voice conversion results between a ",n.a.createElement("font",{className:"red"},"slow speaker")," and a ",n.a.createElement("font",{className:"red"},"fast speaker"),". The generated utterances are from the following algorithms:"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("font",{className:"red"},"AutoVC")," \u2013 A voice conversion algorithm that does not convert prosody"),n.a.createElement("li",null,n.a.createElement("font",{className:"red"},"RR")," (Random Resampling) \u2013 A voice conversion algorithm that does rhythm disentanglement using a random resampling scheme proposed in",n.a.createElement("sup",null,"[1]"),"."),n.a.createElement("li",null,n.a.createElement("font",{className:"red"},"AutoPST")," \u2013 The proposed algorithm, which disentangles rhythm with a similarity-based resampling algorithm and a two-stage training scheme.")),n.a.createElement("p",{style:{fontSize:"70%"}},'[1] Qian, Kaizhi, et al. "Unsupervised speech decomposition via triple information bottleneck." International Conference on Machine Learning. PMLR, 2020')),n.a.createElement("p",{style:{marginTop:"1.5em"}},n.a.createElement("font",{style:{fontSize:"120%",fontWeight:"bold"}},"1. Slow-to-Fast Conversion")," (converting from a slow speaker to a fast speaker)"),n.a.createElement(u,{title:"Utterance 1",u1:"./ground_truth/p245/p245_001.wav",u2:"./ground_truth/p239_007.wav",u3:"./autovc/700000_1.0/p245_p239_001.wav",u4:"/naive_rr/500000_1.0/p245_p239_001.wav",u5:"./31_01/580000_1.0/p245_p239_001.wav"}),n.a.createElement(u,{title:"Utterance 2",u1:"./ground_truth/p270/p270_024001.wav",u2:"./ground_truth/p239_007.wav",u3:"./autovc/700000_1.0/p270_p239_024001.wav",u4:"/naive_rr/500000_1.0/p270_p239_024001.wav ",u5:"./31_01/580000_1.0/p270_p239_024001.wav"}),n.a.createElement(u,{title:"Utterance 3",u1:"./ground_truth/p270/p270_024002.wav",u2:"./ground_truth/p239_007.wav",u3:"./autovc/700000_1.0/p270_p239_024002.wav",u4:"/naive_rr/500000_1.0/p270_p239_024002.wav",u5:"./31_01/580000_1.0/p270_p239_024002.wav"}),n.a.createElement(u,{title:"Utterance 4",u1:"./ground_truth/p245/p245_003001.wav",u2:"./ground_truth/p231_007.wav",u3:"./autovc/700000_1.0/p245_p231_003001.wav",u4:"/naive_rr/500000_1.0/p245_p231_003001.wav",u5:"./31_01/580000_1.0/p245_p231_003001.wav"}),n.a.createElement(u,{title:"Utterance 5",u1:"./ground_truth/p270/p270_003002.wav",u2:"./ground_truth/p231_007.wav",u3:"./autovc/700000_1.0/p270_p231_003002.wav",u4:"/naive_rr/500000_1.0/p270_p231_003002.wav",u5:"./31_01/580000_1.0/p270_p231_003002.wav"}),n.a.createElement("p",{style:{marginTop:"1.5em"}},n.a.createElement("font",{style:{fontSize:"120%",fontWeight:"bold"}},"2. Fast-to-Slow Conversion")," (converting from a fast speaker to a slow speaker)"),n.a.createElement(u,{title:"Utterance 1",u1:"./ground_truth/p231/p231_001.wav",u2:"./ground_truth/p270_007.wav",u3:"./autovc/700000_1.0/p231_p270_001.wav",u4:"/naive_rr/500000_1.0/p231_p270_001.wav",u5:"./31_01/580000_1.0/p231_p270_001.wav"}),n.a.createElement(u,{title:"Utterance 2",u1:"./ground_truth/p231/p231_024001.wav ",u2:"./ground_truth/p270_007.wav   autovc/700000_1.0/p231_p270_024001.wav",u3:"./autovc/700000_1.0/p231_p270_024001.wav",u4:"/naive_rr/500000_1.0/p239_p270_006001.wav",u5:"./31_01/580000_1.0/p231_p270_024001.wav"}),n.a.createElement(u,{title:"Utterance 3",u1:"./ground_truth/p239/p239_006001.wav",u2:"./ground_truth/p270_007.wav",u3:"./autovc/700000_1.0/p239_p270_006001.wav",u4:"/naive_rr/500000_1.0/p270_p239_024002.wav",u5:"./31_01/580000_1.0/p239_p270_006001.wav"}),n.a.createElement(u,{title:"Utterance 4",u1:"./ground_truth/p231/p231_003001.wav",u2:"./ground_truth/p245_007.wav",u3:"./autovc/700000_1.0/p231_p245_003001.wav",u4:"/naive_rr/500000_1.0/p231_p245_003001.wav",u5:"./31_01/580000_1.0/p231_p245_003001.wav"}),n.a.createElement(u,{title:"Utterance 5",u1:"./ground_truth/p239/p239_003002.wav",u2:"./ground_truth/p245_007.wav",u3:"./autovc/700000_1.0/p239_p245_003002.wav",u4:"/naive_rr/500000_1.0/p239_p245_003002.wav",u5:"./31_01/580000_1.0/p239_p245_003002.wav"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(c,null),document.getElementById("wrapper")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[3,1,2]]]);
//# sourceMappingURL=main.8ddd8781.chunk.js.map