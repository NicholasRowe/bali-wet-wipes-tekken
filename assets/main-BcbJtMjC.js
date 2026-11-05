(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Do="170",Wh=0,_c=1,Xh=2,Il=1,Dl=2,zn=3,oi=0,Fe=1,Ye=2,ri=0,ss=1,Ur=2,xc=3,Mc=4,qh=5,Mi=100,Yh=101,jh=102,$h=103,Kh=104,Jh=200,Zh=201,Qh=202,tu=203,Ba=204,za=205,eu=206,nu=207,iu=208,su=209,ru=210,au=211,ou=212,cu=213,lu=214,Ha=0,Ga=1,Va=2,os=3,Wa=4,Xa=5,qa=6,Ya=7,Uo=0,hu=1,uu=2,ai=0,fu=1,du=2,pu=3,No=4,mu=5,gu=6,vu=7,Ul=300,cs=301,ls=302,ja=303,$a=304,Vr=306,Nr=1e3,Si=1001,Ka=1002,He=1003,_u=1004,Js=1005,En=1006,Zr=1007,bi=1008,Yn=1009,Nl=1010,kl=1011,Ws=1012,ko=1013,Ci=1014,wn=1015,qs=1016,Fo=1017,Oo=1018,hs=1020,Fl=35902,Ol=1021,Bl=1022,_n=1023,zl=1024,Hl=1025,rs=1026,us=1027,Bo=1028,zo=1029,Gl=1030,Ho=1031,Go=1033,wr=33776,Tr=33777,Ar=33778,Rr=33779,Ja=35840,Za=35841,Qa=35842,to=35843,eo=36196,no=37492,io=37496,so=37808,ro=37809,ao=37810,oo=37811,co=37812,lo=37813,ho=37814,uo=37815,fo=37816,po=37817,mo=37818,go=37819,vo=37820,_o=37821,Cr=36492,xo=36494,Mo=36495,Vl=36283,yo=36284,So=36285,bo=36286,xu=3200,Mu=3201,Vo=0,yu=1,ii="",Ce="srgb",ps="srgb-linear",Wr="linear",oe="srgb",Ni=7680,yc=519,Su=512,bu=513,Eu=514,Wl=515,wu=516,Tu=517,Au=518,Ru=519,Sc=35044,bc="300 es",Gn=2e3,kr=2001;class ms{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qr=Math.PI/180,Eo=180/Math.PI;function Ys(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Pe(i,t,e){return Math.max(t,Math.min(e,i))}function Cu(i,t){return(i%t+t)%t}function ta(i,t,e){return(1-e)*i+e*t}function Ss(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function We(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,s,r,a,o,c,l){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],f=n[5],g=n[8],v=s[0],m=s[3],d=s[6],y=s[1],E=s[4],x=s[7],A=s[2],T=s[5],C=s[8];return r[0]=a*v+o*y+c*A,r[3]=a*m+o*E+c*T,r[6]=a*d+o*x+c*C,r[1]=l*v+h*y+u*A,r[4]=l*m+h*E+u*T,r[7]=l*d+h*x+u*C,r[2]=p*v+f*y+g*A,r[5]=p*m+f*E+g*T,r[8]=p*d+f*x+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,p=o*c-h*r,f=l*r-a*c,g=e*u+n*p+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=p*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ea.makeScale(t,e)),this}rotate(t){return this.premultiply(ea.makeRotation(-t)),this}translate(t,e){return this.premultiply(ea.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ea=new Bt;function Xl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pu(){const i=Fr("canvas");return i.style.display="block",i}const Ec={};function Us(i){i in Ec||(Ec[i]=!0,console.warn(i))}function Lu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Iu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Du(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Jt={enabled:!0,workingColorSpace:ps,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===oe&&(i.r=Xn(i.r),i.g=Xn(i.g),i.b=Xn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===oe&&(i.r=as(i.r),i.g=as(i.g),i.b=as(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ii?Wr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function as(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const wc=[.64,.33,.3,.6,.15,.06],Tc=[.2126,.7152,.0722],Ac=[.3127,.329],Rc=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cc=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Jt.define({[ps]:{primaries:wc,whitePoint:Ac,transfer:Wr,toXYZ:Rc,fromXYZ:Cc,luminanceCoefficients:Tc,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:wc,whitePoint:Ac,transfer:oe,toXYZ:Rc,fromXYZ:Cc,luminanceCoefficients:Tc,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}});let ki;class Uu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ki===void 0&&(ki=Fr("canvas")),ki.width=t.width,ki.height=t.height;const n=ki.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Xn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xn(e[n]/255)*255):e[n]=Xn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Nu=0;class ql{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=Ys(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(na(s[a].image)):r.push(na(s[a]))}else r=na(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function na(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ku=0;class Oe extends ms{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=Si,s=Si,r=En,a=bi,o=_n,c=Yn,l=Oe.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=Ys(),this.name="",this.source=new ql(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ul)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nr:t.x=t.x-Math.floor(t.x);break;case Si:t.x=t.x<0?0:1;break;case Ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nr:t.y=t.y-Math.floor(t.y);break;case Si:t.y=t.y<0?0:1;break;case Ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Ul;Oe.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,s=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],p=c[1],f=c[5],g=c[9],v=c[2],m=c[6],d=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,x=(f+1)/2,A=(d+1)/2,T=(h+p)/4,C=(u+v)/4,I=(g+m)/4;return E>x&&E>A?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=C/n):x>A?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=I/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=C/r,s=I/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(p-h)*(p-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-v)/y,this.z=(p-h)/y,this.w=Math.acos((l+f+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fu extends ms{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Oe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ql(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends Fu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Yl extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ou extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const p=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=p,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==p||l!==f||h!==g){let m=1-o;const d=c*p+l*f+h*g+u*v,y=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const A=Math.sqrt(E),T=Math.atan2(A,d*y);m=Math.sin(m*T)/A,o=Math.sin(o*T)/A}const x=o*y;if(c=c*m+p*x,l=l*m+f*x,h=h*m+g*x,u=u*m+v*x,m===1-o){const A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],p=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*f-l*p,t[e+1]=c*g+h*p+l*u-o*f,t[e+2]=l*g+h*f+o*p-c*u,t[e+3]=h*g-o*u-c*p-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),p=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=p*h*u+l*f*g,this._y=l*f*u-p*h*g,this._z=l*h*g+p*f*u,this._w=l*h*u-p*f*g;break;case"YXZ":this._x=p*h*u+l*f*g,this._y=l*f*u-p*h*g,this._z=l*h*g-p*f*u,this._w=l*h*u+p*f*g;break;case"ZXY":this._x=p*h*u-l*f*g,this._y=l*f*u+p*h*g,this._z=l*h*g+p*f*u,this._w=l*h*u-p*f*g;break;case"ZYX":this._x=p*h*u-l*f*g,this._y=l*f*u+p*h*g,this._z=l*h*g-p*f*u,this._w=l*h*u+p*f*g;break;case"YZX":this._x=p*h*u+l*f*g,this._y=l*f*u+p*h*g,this._z=l*h*g-p*f*u,this._w=l*h*u-p*f*g;break;case"XZY":this._x=p*h*u-l*f*g,this._y=l*f*u-p*h*g,this._z=l*h*g+p*f*u,this._w=l*h*u+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],p=n+o+u;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=a*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ia.copy(this).projectOnVector(t),this.sub(ia)}reflect(t){return this.sub(ia.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ia=new P,Pc=new Ii;class Di{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zs.copy(n.boundingBox)),Zs.applyMatrix4(t.matrixWorld),this.union(Zs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bs),Qs.subVectors(this.max,bs),Fi.subVectors(t.a,bs),Oi.subVectors(t.b,bs),Bi.subVectors(t.c,bs),Jn.subVectors(Oi,Fi),Zn.subVectors(Bi,Oi),hi.subVectors(Fi,Bi);let e=[0,-Jn.z,Jn.y,0,-Zn.z,Zn.y,0,-hi.z,hi.y,Jn.z,0,-Jn.x,Zn.z,0,-Zn.x,hi.z,0,-hi.x,-Jn.y,Jn.x,0,-Zn.y,Zn.x,0,-hi.y,hi.x,0];return!sa(e,Fi,Oi,Bi,Qs)||(e=[1,0,0,0,1,0,0,0,1],!sa(e,Fi,Oi,Bi,Qs))?!1:(tr.crossVectors(Jn,Zn),e=[tr.x,tr.y,tr.z],sa(e,Fi,Oi,Bi,Qs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Un=[new P,new P,new P,new P,new P,new P,new P,new P],dn=new P,Zs=new Di,Fi=new P,Oi=new P,Bi=new P,Jn=new P,Zn=new P,hi=new P,bs=new P,Qs=new P,tr=new P,ui=new P;function sa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ui.fromArray(i,r);const o=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),c=t.dot(ui),l=e.dot(ui),h=n.dot(ui);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Bu=new Di,Es=new P,ra=new P;class js{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Bu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Es.subVectors(t,this.center);const e=Es.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Es,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ra.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Es.copy(t.center).add(ra)),this.expandByPoint(Es.copy(t.center).sub(ra))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new P,aa=new P,er=new P,Qn=new P,oa=new P,nr=new P,ca=new P;class zu{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){aa.copy(t).add(e).multiplyScalar(.5),er.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(aa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(er),o=Qn.dot(this.direction),c=-Qn.dot(er),l=Qn.lengthSq(),h=Math.abs(1-a*a);let u,p,f,g;if(h>0)if(u=a*c-o,p=a*o-c,g=r*h,u>=0)if(p>=-g)if(p<=g){const v=1/h;u*=v,p*=v,f=u*(u+a*p+2*o)+p*(a*u+p+2*c)+l}else p=r,u=Math.max(0,-(a*p+o)),f=-u*u+p*(p+2*c)+l;else p=-r,u=Math.max(0,-(a*p+o)),f=-u*u+p*(p+2*c)+l;else p<=-g?(u=Math.max(0,-(-a*r+o)),p=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+p*(p+2*c)+l):p<=g?(u=0,p=Math.min(Math.max(-r,-c),r),f=p*(p+2*c)+l):(u=Math.max(0,-(a*r+o)),p=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+p*(p+2*c)+l);else p=a>0?-r:r,u=Math.max(0,-(a*p+o)),f=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(aa).addScaledVector(er,p),f}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),h>=0?(r=(t.min.y-p.y)*h,a=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,a=(t.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-p.z)*u,c=(t.max.z-p.z)*u):(o=(t.max.z-p.z)*u,c=(t.min.z-p.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){oa.subVectors(e,t),nr.subVectors(n,t),ca.crossVectors(oa,nr);let a=this.direction.dot(ca),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qn.subVectors(this.origin,t);const c=o*this.direction.dot(nr.crossVectors(Qn,nr));if(c<0)return null;const l=o*this.direction.dot(oa.cross(Qn));if(l<0||c+l>a)return null;const h=-o*Qn.dot(ca);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,s,r,a,o,c,l,h,u,p,f,g,v,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,p,f,g,v,m)}set(t,e,n,s,r,a,o,c,l,h,u,p,f,g,v,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=p,d[3]=f,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),a=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const p=a*h,f=a*u,g=o*h,v=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=p-v*l,e[9]=-o*c,e[2]=v-p*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const p=c*h,f=c*u,g=l*h,v=l*u;e[0]=p+v*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+p*o,e[10]=a*c}else if(t.order==="ZXY"){const p=c*h,f=c*u,g=l*h,v=l*u;e[0]=p-v*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-p*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const p=a*h,f=a*u,g=o*h,v=o*u;e[0]=c*h,e[4]=g*l-f,e[8]=p*l+v,e[1]=c*u,e[5]=v*l+p,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const p=a*c,f=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-p*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+g,e[10]=p-v*u}else if(t.order==="XZY"){const p=a*c,f=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=p*u+v,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=v*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hu,t,Gu)}lookAt(t,e,n){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),ti.crossVectors(n,Ke),ti.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),ti.crossVectors(n,Ke)),ti.normalize(),ir.crossVectors(Ke,ti),s[0]=ti.x,s[4]=ir.x,s[8]=Ke.x,s[1]=ti.y,s[5]=ir.y,s[9]=Ke.y,s[2]=ti.z,s[6]=ir.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],f=n[13],g=n[2],v=n[6],m=n[10],d=n[14],y=n[3],E=n[7],x=n[11],A=n[15],T=s[0],C=s[4],I=s[8],b=s[12],_=s[1],R=s[5],D=s[9],L=s[13],O=s[2],X=s[6],H=s[10],j=s[14],z=s[3],tt=s[7],it=s[11],dt=s[15];return r[0]=a*T+o*_+c*O+l*z,r[4]=a*C+o*R+c*X+l*tt,r[8]=a*I+o*D+c*H+l*it,r[12]=a*b+o*L+c*j+l*dt,r[1]=h*T+u*_+p*O+f*z,r[5]=h*C+u*R+p*X+f*tt,r[9]=h*I+u*D+p*H+f*it,r[13]=h*b+u*L+p*j+f*dt,r[2]=g*T+v*_+m*O+d*z,r[6]=g*C+v*R+m*X+d*tt,r[10]=g*I+v*D+m*H+d*it,r[14]=g*b+v*L+m*j+d*dt,r[3]=y*T+E*_+x*O+A*z,r[7]=y*C+E*R+x*X+A*tt,r[11]=y*I+E*D+x*H+A*it,r[15]=y*b+E*L+x*j+A*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],p=t[10],f=t[14],g=t[3],v=t[7],m=t[11],d=t[15];return g*(+r*c*u-s*l*u-r*o*p+n*l*p+s*o*f-n*c*f)+v*(+e*c*f-e*l*p+r*a*p-s*a*f+s*l*h-r*c*h)+m*(+e*l*u-e*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+d*(-s*o*h-e*c*u+e*o*p+s*a*u-n*a*p+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],p=t[10],f=t[11],g=t[12],v=t[13],m=t[14],d=t[15],y=u*m*l-v*p*l+v*c*f-o*m*f-u*c*d+o*p*d,E=g*p*l-h*m*l-g*c*f+a*m*f+h*c*d-a*p*d,x=h*v*l-g*u*l+g*o*f-a*v*f-h*o*d+a*u*d,A=g*u*c-h*v*c-g*o*p+a*v*p+h*o*m-a*u*m,T=e*y+n*E+s*x+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=y*C,t[1]=(v*p*r-u*m*r-v*s*f+n*m*f+u*s*d-n*p*d)*C,t[2]=(o*m*r-v*c*r+v*s*l-n*m*l-o*s*d+n*c*d)*C,t[3]=(u*c*r-o*p*r-u*s*l+n*p*l+o*s*f-n*c*f)*C,t[4]=E*C,t[5]=(h*m*r-g*p*r+g*s*f-e*m*f-h*s*d+e*p*d)*C,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*d-e*c*d)*C,t[7]=(a*p*r-h*c*r+h*s*l-e*p*l-a*s*f+e*c*f)*C,t[8]=x*C,t[9]=(g*u*r-h*v*r-g*n*f+e*v*f+h*n*d-e*u*d)*C,t[10]=(a*v*r-g*o*r+g*n*l-e*v*l-a*n*d+e*o*d)*C,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*f-e*o*f)*C,t[12]=A*C,t[13]=(h*v*s-g*u*s+g*n*p-e*v*p-h*n*m+e*u*m)*C,t[14]=(g*o*s-a*v*s-g*n*c+e*v*c+a*n*m-e*o*m)*C,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*p+e*o*p)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,p=r*l,f=r*h,g=r*u,v=a*h,m=a*u,d=o*u,y=c*l,E=c*h,x=c*u,A=n.x,T=n.y,C=n.z;return s[0]=(1-(v+d))*A,s[1]=(f+x)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(p+d))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+E)*C,s[9]=(m-y)*C,s[10]=(1-(p+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=zi.set(s[0],s[1],s[2]).length();const a=zi.set(s[4],s[5],s[6]).length(),o=zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],pn.copy(this);const l=1/r,h=1/a,u=1/o;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,e.setFromRotationMatrix(pn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Gn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s);let f,g;if(o===Gn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===kr)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Gn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),p=(e+t)*l,f=(n+s)*h;let g,v;if(o===Gn)g=(a+r)*u,v=-2*u;else if(o===kr)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const zi=new P,pn=new ie,Hu=new P(0,0,0),Gu=new P(1,1,1),ti=new P,ir=new P,Ke=new P,Lc=new ie,Ic=new Ii;class hn{constructor(t=0,e=0,n=0,s=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],p=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Pe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Lc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ic.setFromEuler(this),this.setFromQuaternion(Ic,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class jl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vu=0;const Dc=new P,Hi=new Ii,kn=new ie,sr=new P,ws=new P,Wu=new P,Xu=new Ii,Uc=new P(1,0,0),Nc=new P(0,1,0),kc=new P(0,0,1),Fc={type:"added"},qu={type:"removed"},Gi={type:"childadded",child:null},la={type:"childremoved",child:null};class Le extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=Ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new P,e=new hn,n=new Ii,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Bt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(Uc,t)}rotateY(t){return this.rotateOnAxis(Nc,t)}rotateZ(t){return this.rotateOnAxis(kc,t)}translateOnAxis(t,e){return Dc.copy(t).applyQuaternion(this.quaternion),this.position.add(Dc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uc,t)}translateY(t){return this.translateOnAxis(Nc,t)}translateZ(t){return this.translateOnAxis(kc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?sr.copy(t):sr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(ws,sr,this.up):kn.lookAt(sr,ws,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),Hi.setFromRotationMatrix(kn),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qu),la.child=t,this.dispatchEvent(la),la.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,t,Wu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,Xu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),p=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Le.DEFAULT_UP=new P(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new P,Fn=new P,ha=new P,On=new P,Vi=new P,Wi=new P,Oc=new P,ua=new P,fa=new P,da=new P,pa=new le,ma=new le,ga=new le;class vn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mn.subVectors(t,e),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){mn.subVectors(s,e),Fn.subVectors(n,e),ha.subVectors(t,e);const a=mn.dot(mn),o=mn.dot(Fn),c=mn.dot(ha),l=Fn.dot(Fn),h=Fn.dot(ha),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const p=1/u,f=(l*c-o*h)*p,g=(a*h-o*c)*p;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,On)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,On.x),c.addScaledVector(a,On.y),c.addScaledVector(o,On.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return pa.setScalar(0),ma.setScalar(0),ga.setScalar(0),pa.fromBufferAttribute(t,e),ma.fromBufferAttribute(t,n),ga.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(pa,r.x),a.addScaledVector(ma,r.y),a.addScaledVector(ga,r.z),a}static isFrontFacing(t,e,n,s){return mn.subVectors(n,e),Fn.subVectors(t,e),mn.cross(Fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),mn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return vn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Vi.subVectors(s,n),Wi.subVectors(r,n),ua.subVectors(t,n);const c=Vi.dot(ua),l=Wi.dot(ua);if(c<=0&&l<=0)return e.copy(n);fa.subVectors(t,s);const h=Vi.dot(fa),u=Wi.dot(fa);if(h>=0&&u<=h)return e.copy(s);const p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Vi,a);da.subVectors(t,r);const f=Vi.dot(da),g=Wi.dot(da);if(g>=0&&f<=g)return e.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Wi,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Oc.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Oc,o);const d=1/(m+v+p);return a=v*d,o=p*d,e.copy(n).addScaledVector(Vi,a).addScaledVector(Wi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},rr={h:0,s:0,l:0};function va(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=Cu(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=va(a,r,t+1/3),this.g=va(a,r,t),this.b=va(a,r,t-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){const n=$l[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return Jt.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Pe(Ue.r*255,0,255))*65536+Math.round(Pe(Ue.g*255,0,255))*256+Math.round(Pe(Ue.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Ue.copy(this),e);const n=Ue.r,s=Ue.g,r=Ue.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=Ce){Jt.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,s=Ue.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(rr);const n=ta(ei.h,rr.h,e),s=ta(ei.s,rr.s,e),r=ta(ei.l,rr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new It;It.NAMES=$l;let Yu=0;class gs extends ms{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=Ys(),this.name="",this.blending=ss,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ba,this.blendDst=za,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ba&&(n.blendSrc=this.blendSrc),this.blendDst!==za&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ke extends gs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new P,ar=new ft;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sc,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ar.fromBufferAttribute(this,e),ar.applyMatrix3(t),this.setXY(e,ar.x,ar.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ss(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sc&&(t.usage=this.usage),t}}class Kl extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Jl extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Zt extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ju=0;const rn=new ie,_a=new Le,Xi=new P,Je=new Di,Ts=new Di,Ae=new P;class Ge extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=Ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xl(t)?Jl:Kl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return _a.lookAt(t),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Zt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ts.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(Je.min,Ts.min),Je.expandByPoint(Ae),Ae.addVectors(Je.max,Ts.max),Je.expandByPoint(Ae)):(Je.expandByPoint(Ts.min),Je.expandByPoint(Ts.max))}Je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ae.fromBufferAttribute(o,l),c&&(Xi.fromBufferAttribute(t,l),Ae.add(Xi)),s=Math.max(s,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new P,c[I]=new P;const l=new P,h=new P,u=new P,p=new ft,f=new ft,g=new ft,v=new P,m=new P;function d(I,b,_){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,_),p.fromBufferAttribute(r,I),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,_),h.sub(l),u.sub(l),f.sub(p),g.sub(p);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),o[I].add(v),o[b].add(v),o[_].add(v),c[I].add(m),c[b].add(m),c[_].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,b=y.length;I<b;++I){const _=y[I],R=_.start,D=_.count;for(let L=R,O=R+D;L<O;L+=3)d(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const E=new P,x=new P,A=new P,T=new P;function C(I){A.fromBufferAttribute(s,I),T.copy(A);const b=o[I];E.copy(b),E.sub(A.multiplyScalar(A.dot(b))).normalize(),x.crossVectors(T,b);const R=x.dot(c[I])<0?-1:1;a.setXYZW(I,E.x,E.y,E.z,R)}for(let I=0,b=y.length;I<b;++I){const _=y[I],R=_.start,D=_.count;for(let L=R,O=R+D;L<O;L+=3)C(t.getX(L+0)),C(t.getX(L+1)),C(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let p=0,f=t.count;p<f;p+=3){const g=t.getX(p+0),v=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,f=e.count;p<f;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,p=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let d=0;d<h;d++)p[g++]=l[f++]}return new cn(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ge,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const p=l[h],f=t(p,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let p=0,f=u.length;p<f;p++)h.push(u[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bc=new ie,fi=new zu,or=new js,zc=new P,cr=new P,lr=new P,hr=new P,xa=new P,ur=new P,Hc=new P,fr=new P;class Pt extends Le{constructor(t=new Ge,e=new ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ur.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(xa.fromBufferAttribute(u,t),a?ur.addScaledVector(xa,h):ur.addScaledVector(xa.sub(e),h))}e.add(ur)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(r),fi.copy(t.ray).recast(t.near),!(or.containsPoint(fi.origin)===!1&&(fi.intersectSphere(or,zc)===null||fi.origin.distanceToSquared(zc)>(t.far-t.near)**2))&&(Bc.copy(r).invert(),fi.copy(t.ray).applyMatrix4(Bc),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=p.length;g<v;g++){const m=p[g],d=a[m.materialIndex],y=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,A=E;x<A;x+=3){const T=o.getX(x),C=o.getX(x+1),I=o.getX(x+2);s=dr(this,d,t,n,l,h,u,T,C,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,d=v;m<d;m+=3){const y=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);s=dr(this,a,t,n,l,h,u,y,E,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=p.length;g<v;g++){const m=p[g],d=a[m.materialIndex],y=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,A=E;x<A;x+=3){const T=x,C=x+1,I=x+2;s=dr(this,d,t,n,l,h,u,T,C,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,d=v;m<d;m+=3){const y=m,E=m+1,x=m+2;s=dr(this,a,t,n,l,h,u,y,E,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function $u(i,t,e,n,s,r,a,o){let c;if(t.side===Fe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===oi,o),c===null)return null;fr.copy(o),fr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(fr);return l<e.near||l>e.far?null:{distance:l,point:fr.clone(),object:i}}function dr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,cr),i.getVertexPosition(c,lr),i.getVertexPosition(l,hr);const h=$u(i,t,e,n,cr,lr,hr,Hc);if(h){const u=new P;vn.getBarycoord(Hc,cr,lr,hr,u),s&&(h.uv=vn.getInterpolatedAttribute(s,o,c,l,u,new ft)),r&&(h.uv1=vn.getInterpolatedAttribute(r,o,c,l,u,new ft)),a&&(h.normal=vn.getInterpolatedAttribute(a,o,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:c,c:l,normal:new P,materialIndex:0};vn.getNormal(cr,lr,hr,p.normal),h.face=p,h.barycoord=u}return h}class Wt extends Ge{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let p=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function g(v,m,d,y,E,x,A,T,C,I,b){const _=x/C,R=A/I,D=x/2,L=A/2,O=T/2,X=C+1,H=I+1;let j=0,z=0;const tt=new P;for(let it=0;it<H;it++){const dt=it*R-L;for(let Q=0;Q<X;Q++){const bt=Q*_-D;tt[v]=bt*y,tt[m]=dt*E,tt[d]=O,l.push(tt.x,tt.y,tt.z),tt[v]=0,tt[m]=0,tt[d]=T>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(Q/C),u.push(1-it/I),j+=1}}for(let it=0;it<I;it++)for(let dt=0;dt<C;dt++){const Q=p+dt+X*it,bt=p+dt+X*(it+1),W=p+(dt+1)+X*(it+1),J=p+(dt+1)+X*it;c.push(Q,bt,J),c.push(bt,W,J),z+=6}o.addGroup(f,z,b),f+=z,p+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ze(i){const t={};for(let e=0;e<i.length;e++){const n=fs(i[e]);for(const s in n)t[s]=n[s]}return t}function Ku(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const Ju={clone:fs,merge:ze};var Zu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends gs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zu,this.fragmentShader=Qu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fs(t.uniforms),this.uniformsGroups=Ku(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ql extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new P,Gc=new ft,Vc=new ft;class Xe extends Ql{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Eo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,Gc,Vc),e.subVectors(Vc,Gc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qi=-90,Yi=1;class tf extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xe(qi,Yi,t,e);s.layers=this.layers,this.add(s);const r=new Xe(qi,Yi,t,e);r.layers=this.layers,this.add(r);const a=new Xe(qi,Yi,t,e);a.layers=this.layers,this.add(a);const o=new Xe(qi,Yi,t,e);o.layers=this.layers,this.add(o);const c=new Xe(qi,Yi,t,e);c.layers=this.layers,this.add(c);const l=new Xe(qi,Yi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,p,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class th extends Oe{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:cs,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ef extends Pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new th(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:En}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Wt(5,5,5),r=new ci({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:ri});r.uniforms.tEquirect.value=e;const a=new Pt(s,r),o=e.minFilter;return e.minFilter===bi&&(e.minFilter=En),new tf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Ma=new P,nf=new P,sf=new Bt;class _i{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ma.subVectors(n,e).cross(nf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ma),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||sf.getNormalMatrix(t),s=this.coplanarPoint(Ma).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new js,pr=new P;class Wo{constructor(t=new _i,e=new _i,n=new _i,s=new _i,r=new _i,a=new _i){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],p=s[7],f=s[8],g=s[9],v=s[10],m=s[11],d=s[12],y=s[13],E=s[14],x=s[15];if(n[0].setComponents(c-r,p-l,m-f,x-d).normalize(),n[1].setComponents(c+r,p+l,m+f,x+d).normalize(),n[2].setComponents(c+a,p+h,m+g,x+y).normalize(),n[3].setComponents(c-a,p-h,m-g,x-y).normalize(),n[4].setComponents(c-o,p-u,m-v,x-E).normalize(),e===Gn)n[5].setComponents(c+o,p+u,m+v,x+E).normalize();else if(e===kr)n[5].setComponents(o,u,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(pr.x=s.normal.x>0?t.max.x:t.min.x,pr.y=s.normal.y>0?t.max.y:t.min.y,pr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function rf(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<u.length;f++){const g=u[p],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,u[p]=v)}u.length=p+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class xn extends Ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,p=e/c,f=[],g=[],v=[],m=[];for(let d=0;d<h;d++){const y=d*p-a;for(let E=0;E<l;E++){const x=E*u-r;g.push(x,-y,0),v.push(0,0,1),m.push(E/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<o;y++){const E=y+l*d,x=y+l*(d+1),A=y+1+l*(d+1),T=y+1+l*d;f.push(E,x,T),f.push(x,A,T)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.width,t.height,t.widthSegments,t.heightSegments)}}var af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,of=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ff=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_f=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ff=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Of=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,td=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ed=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,id=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ad=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,od=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ld=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ud=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,md=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_d=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Md=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ed=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ad=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ld=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Id=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ud=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Nd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Od=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Gd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$d=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ap=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_p=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ep=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ap=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ip=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Up=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Np=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:af,alphahash_pars_fragment:of,alphamap_fragment:cf,alphamap_pars_fragment:lf,alphatest_fragment:hf,alphatest_pars_fragment:uf,aomap_fragment:ff,aomap_pars_fragment:df,batching_pars_vertex:pf,batching_vertex:mf,begin_vertex:gf,beginnormal_vertex:vf,bsdfs:_f,iridescence_fragment:xf,bumpmap_pars_fragment:Mf,clipping_planes_fragment:yf,clipping_planes_pars_fragment:Sf,clipping_planes_pars_vertex:bf,clipping_planes_vertex:Ef,color_fragment:wf,color_pars_fragment:Tf,color_pars_vertex:Af,color_vertex:Rf,common:Cf,cube_uv_reflection_fragment:Pf,defaultnormal_vertex:Lf,displacementmap_pars_vertex:If,displacementmap_vertex:Df,emissivemap_fragment:Uf,emissivemap_pars_fragment:Nf,colorspace_fragment:kf,colorspace_pars_fragment:Ff,envmap_fragment:Of,envmap_common_pars_fragment:Bf,envmap_pars_fragment:zf,envmap_pars_vertex:Hf,envmap_physical_pars_fragment:Zf,envmap_vertex:Gf,fog_vertex:Vf,fog_pars_vertex:Wf,fog_fragment:Xf,fog_pars_fragment:qf,gradientmap_pars_fragment:Yf,lightmap_pars_fragment:jf,lights_lambert_fragment:$f,lights_lambert_pars_fragment:Kf,lights_pars_begin:Jf,lights_toon_fragment:Qf,lights_toon_pars_fragment:td,lights_phong_fragment:ed,lights_phong_pars_fragment:nd,lights_physical_fragment:id,lights_physical_pars_fragment:sd,lights_fragment_begin:rd,lights_fragment_maps:ad,lights_fragment_end:od,logdepthbuf_fragment:cd,logdepthbuf_pars_fragment:ld,logdepthbuf_pars_vertex:hd,logdepthbuf_vertex:ud,map_fragment:fd,map_pars_fragment:dd,map_particle_fragment:pd,map_particle_pars_fragment:md,metalnessmap_fragment:gd,metalnessmap_pars_fragment:vd,morphinstance_vertex:_d,morphcolor_vertex:xd,morphnormal_vertex:Md,morphtarget_pars_vertex:yd,morphtarget_vertex:Sd,normal_fragment_begin:bd,normal_fragment_maps:Ed,normal_pars_fragment:wd,normal_pars_vertex:Td,normal_vertex:Ad,normalmap_pars_fragment:Rd,clearcoat_normal_fragment_begin:Cd,clearcoat_normal_fragment_maps:Pd,clearcoat_pars_fragment:Ld,iridescence_pars_fragment:Id,opaque_fragment:Dd,packing:Ud,premultiplied_alpha_fragment:Nd,project_vertex:kd,dithering_fragment:Fd,dithering_pars_fragment:Od,roughnessmap_fragment:Bd,roughnessmap_pars_fragment:zd,shadowmap_pars_fragment:Hd,shadowmap_pars_vertex:Gd,shadowmap_vertex:Vd,shadowmask_pars_fragment:Wd,skinbase_vertex:Xd,skinning_pars_vertex:qd,skinning_vertex:Yd,skinnormal_vertex:jd,specularmap_fragment:$d,specularmap_pars_fragment:Kd,tonemapping_fragment:Jd,tonemapping_pars_fragment:Zd,transmission_fragment:Qd,transmission_pars_fragment:tp,uv_pars_fragment:ep,uv_pars_vertex:np,uv_vertex:ip,worldpos_vertex:sp,background_vert:rp,background_frag:ap,backgroundCube_vert:op,backgroundCube_frag:cp,cube_vert:lp,cube_frag:hp,depth_vert:up,depth_frag:fp,distanceRGBA_vert:dp,distanceRGBA_frag:pp,equirect_vert:mp,equirect_frag:gp,linedashed_vert:vp,linedashed_frag:_p,meshbasic_vert:xp,meshbasic_frag:Mp,meshlambert_vert:yp,meshlambert_frag:Sp,meshmatcap_vert:bp,meshmatcap_frag:Ep,meshnormal_vert:wp,meshnormal_frag:Tp,meshphong_vert:Ap,meshphong_frag:Rp,meshphysical_vert:Cp,meshphysical_frag:Pp,meshtoon_vert:Lp,meshtoon_frag:Ip,points_vert:Dp,points_frag:Up,shadow_vert:Np,shadow_frag:kp,sprite_vert:Fp,sprite_frag:Op},rt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},bn={basic:{uniforms:ze([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:ze([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new It(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:ze([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:ze([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:ze([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new It(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:ze([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:ze([rt.points,rt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:ze([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:ze([rt.common,rt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:ze([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:ze([rt.sprite,rt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:ze([rt.common,rt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:ze([rt.lights,rt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};bn.physical={uniforms:ze([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const mr={r:0,b:0,g:0},pi=new hn,Bp=new ie;function zp(i,t,e,n,s,r,a){const o=new It(0);let c=r===!0?0:1,l,h,u=null,p=0,f=null;function g(y){let E=y.isScene===!0?y.background:null;return E&&E.isTexture&&(E=(y.backgroundBlurriness>0?e:t).get(E)),E}function v(y){let E=!1;const x=g(y);x===null?d(o,c):x&&x.isColor&&(d(x,1),E=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,E){const x=g(E);x&&(x.isCubeTexture||x.mapping===Vr)?(h===void 0&&(h=new Pt(new Wt(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:fs(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),pi.copy(E.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Bp.makeRotationFromEuler(pi)),h.material.toneMapped=Jt.getTransfer(x.colorSpace)!==oe,(u!==x||p!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,p=x.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Pt(new xn(2,2),new ci({name:"BackgroundMaterial",uniforms:fs(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(x.colorSpace)!==oe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||p!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,p=x.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function d(y,E){y.getRGB(mr,Zl(i)),n.buffers.color.setClear(mr.r,mr.g,mr.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),c=E,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,d(o,c)},render:v,addToRenderList:m}}function Hp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,a=!1;function o(_,R,D,L,O){let X=!1;const H=u(L,D,R);r!==H&&(r=H,l(r.object)),X=f(_,L,D,O),X&&g(_,L,D,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,x(_,R,D,L),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,R,D){const L=D.wireframe===!0;let O=n[_.id];O===void 0&&(O={},n[_.id]=O);let X=O[R.id];X===void 0&&(X={},O[R.id]=X);let H=X[L];return H===void 0&&(H=p(c()),X[L]=H),H}function p(_){const R=[],D=[],L=[];for(let O=0;O<e;O++)R[O]=0,D[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:L,object:_,attributes:{},index:null}}function f(_,R,D,L){const O=r.attributes,X=R.attributes;let H=0;const j=D.getAttributes();for(const z in j)if(j[z].location>=0){const it=O[z];let dt=X[z];if(dt===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(dt=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(dt=_.instanceColor)),it===void 0||it.attribute!==dt||dt&&it.data!==dt.data)return!0;H++}return r.attributesNum!==H||r.index!==L}function g(_,R,D,L){const O={},X=R.attributes;let H=0;const j=D.getAttributes();for(const z in j)if(j[z].location>=0){let it=X[z];it===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(it=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(it=_.instanceColor));const dt={};dt.attribute=it,it&&it.data&&(dt.data=it.data),O[z]=dt,H++}r.attributes=O,r.attributesNum=H,r.index=L}function v(){const _=r.newAttributes;for(let R=0,D=_.length;R<D;R++)_[R]=0}function m(_){d(_,0)}function d(_,R){const D=r.newAttributes,L=r.enabledAttributes,O=r.attributeDivisors;D[_]=1,L[_]===0&&(i.enableVertexAttribArray(_),L[_]=1),O[_]!==R&&(i.vertexAttribDivisor(_,R),O[_]=R)}function y(){const _=r.newAttributes,R=r.enabledAttributes;for(let D=0,L=R.length;D<L;D++)R[D]!==_[D]&&(i.disableVertexAttribArray(D),R[D]=0)}function E(_,R,D,L,O,X,H){H===!0?i.vertexAttribIPointer(_,R,D,O,X):i.vertexAttribPointer(_,R,D,L,O,X)}function x(_,R,D,L){v();const O=L.attributes,X=D.getAttributes(),H=R.defaultAttributeValues;for(const j in X){const z=X[j];if(z.location>=0){let tt=O[j];if(tt===void 0&&(j==="instanceMatrix"&&_.instanceMatrix&&(tt=_.instanceMatrix),j==="instanceColor"&&_.instanceColor&&(tt=_.instanceColor)),tt!==void 0){const it=tt.normalized,dt=tt.itemSize,Q=t.get(tt);if(Q===void 0)continue;const bt=Q.buffer,W=Q.type,J=Q.bytesPerElement,at=W===i.INT||W===i.UNSIGNED_INT||tt.gpuType===ko;if(tt.isInterleavedBufferAttribute){const st=tt.data,vt=st.stride,kt=tt.offset;if(st.isInstancedInterleavedBuffer){for(let Vt=0;Vt<z.locationSize;Vt++)d(z.location+Vt,st.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Vt=0;Vt<z.locationSize;Vt++)m(z.location+Vt);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let Vt=0;Vt<z.locationSize;Vt++)E(z.location+Vt,dt/z.locationSize,W,it,vt*J,(kt+dt/z.locationSize*Vt)*J,at)}else{if(tt.isInstancedBufferAttribute){for(let st=0;st<z.locationSize;st++)d(z.location+st,tt.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let st=0;st<z.locationSize;st++)m(z.location+st);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let st=0;st<z.locationSize;st++)E(z.location+st,dt/z.locationSize,W,it,dt*J,dt/z.locationSize*st*J,at)}}else if(H!==void 0){const it=H[j];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(z.location,it);break;case 3:i.vertexAttrib3fv(z.location,it);break;case 4:i.vertexAttrib4fv(z.location,it);break;default:i.vertexAttrib1fv(z.location,it)}}}}y()}function A(){I();for(const _ in n){const R=n[_];for(const D in R){const L=R[D];for(const O in L)h(L[O].object),delete L[O];delete R[D]}delete n[_]}}function T(_){if(n[_.id]===void 0)return;const R=n[_.id];for(const D in R){const L=R[D];for(const O in L)h(L[O].object),delete L[O];delete R[D]}delete n[_.id]}function C(_){for(const R in n){const D=n[R];if(D[_.id]===void 0)continue;const L=D[_.id];for(const O in L)h(L[O].object),delete L[O];delete D[_.id]}}function I(){b(),a=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function Gp(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,p){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*p[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Vp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==_n&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const I=C===qs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Yn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==wn&&!I)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:A,maxSamples:T}}function Wp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new _i,o=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const f=u.length!==0||p||n!==0||s;return s=p,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const y=r?0:n,E=y*4;let x=d.clippingState||null;c.value=x,x=h(g,p,E,f);for(let A=0;A!==E;++A)x[A]=e[A];d.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const d=f+v*4,y=p.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,x=f;E!==v;++E,x+=4)a.copy(u[E]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Xp(i){let t=new WeakMap;function e(a,o){return o===ja?a.mapping=cs:o===$a&&(a.mapping=ls),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ja||o===$a)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new ef(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class nh extends Ql{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const es=4,Wc=[.125,.215,.35,.446,.526,.582],yi=20,ya=new nh,Xc=new It;let Sa=null,ba=0,Ea=0,wa=!1;const xi=(1+Math.sqrt(5))/2,ji=1/xi,qc=[new P(-xi,ji,0),new P(xi,ji,0),new P(-ji,0,xi),new P(ji,0,xi),new P(0,xi,-ji),new P(0,xi,ji),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class wo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Sa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sa,ba,Ea),this._renderer.xr.enabled=wa,t.scissorTest=!1,gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:qs,format:_n,colorSpace:ps,depthBuffer:!1},s=Yc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qp(r)),this._blurMaterial=Yp(r,t,e)}return s}_compileMaterial(t){const e=new Pt(this._lodPlanes[0],t);this._renderer.compile(e,ya)}_sceneToCubeUV(t,e,n,s){const o=new Xe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Xc),h.toneMapping=ai,h.autoClear=!1;const f=new ke({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new Pt(new Wt,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Xc),v=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):y===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const E=this._cubeSize;gr(s,y*E,d>2?E:0,E,E),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===cs||t.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$c()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Pt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;gr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ya)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=qc[(s-r-1)%qc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Pt(this._lodPlanes[s],l),p=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*yi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):yi;m>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yi}`);const d=[];let y=0;for(let C=0;C<yi;++C){const I=C/v,b=Math.exp(-I*I/2);d.push(b),C===0?y+=b:C<m&&(y+=2*b)}for(let C=0;C<d.length;C++)d[C]=d[C]/y;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:E}=this;p.dTheta.value=g,p.mipInt.value=E-n;const x=this._sizeLods[s],A=3*x*(s>E-es?s-E+es:0),T=4*(this._cubeSize-x);gr(e,A,T,3*x,2*x),c.setRenderTarget(e),c.render(u,ya)}}function qp(i){const t=[],e=[],n=[];let s=i;const r=i-es+1+Wc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-es?c=Wc[a-i+es-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,d=1,y=new Float32Array(v*g*f),E=new Float32Array(m*g*f),x=new Float32Array(d*g*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,I=T>2?0:-1,b=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];y.set(b,v*g*T),E.set(p,m*g*T);const _=[T,T,T,T,T,T];x.set(_,d*g*T)}const A=new Ge;A.setAttribute("position",new cn(y,v)),A.setAttribute("uv",new cn(E,m)),A.setAttribute("faceIndex",new cn(x,d)),t.push(A),s>es&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Yc(i,t,e){const n=new Pi(i,t,e);return n.texture.mapping=Vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Yp(i,t,e){const n=new Float32Array(yi),s=new P(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function jc(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function $c(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Xo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ja||c===$a,h=c===cs||c===ls;if(l||h){let u=t.get(o);const p=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new wo(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new wo(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function $p(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Us("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Kp(i,t,e,n){const s={},r=new WeakMap;function a(u){const p=u.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const v=p.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)t.remove(v[m])}p.removeEventListener("dispose",a),delete s[p.id];const f=r.get(p);f&&(t.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(u,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function c(u){const p=u.attributes;for(const g in p)t.update(p[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,d=v.length;m<d;m++)t.update(v[m],i.ARRAY_BUFFER)}}function l(u){const p=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let E=0,x=y.length;E<x;E+=3){const A=y[E+0],T=y[E+1],C=y[E+2];p.push(A,T,T,C,C,A)}}else if(g!==void 0){const y=g.array;v=g.version;for(let E=0,x=y.length/3-1;E<x;E+=3){const A=E+0,T=E+1,C=E+2;p.push(A,T,T,C,C,A)}}else return;const m=new(Xl(p)?Jl:Kl)(p,1);m.version=v;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const p=r.get(u);if(p){const f=u.index;f!==null&&p.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Jp(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,f){i.drawElements(n,f,r,p*a),e.update(f,n,1)}function l(p,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,p*a,g),e.update(f,n,g))}function h(p,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,g);let m=0;for(let d=0;d<g;d++)m+=f[d];e.update(m,n,1)}function u(p,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<p.length;d++)l(p[d]/a,f[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,p,0,v,0,g);let d=0;for(let y=0;y<g;y++)d+=f[y]*v[y];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Zp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Qp(i,t,e){const n=new WeakMap,s=new le;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let p=n.get(o);if(p===void 0||p.count!==u){let b=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",b)};p!==void 0&&p.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let E=0;f===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let x=o.attributes.position.count*E,A=1;x>t.maxTextureSize&&(A=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const T=new Float32Array(x*A*4*u),C=new Yl(T,x,A,u);C.type=wn,C.needsUpdate=!0;const I=E*4;for(let _=0;_<u;_++){const R=m[_],D=d[_],L=y[_],O=x*A*4*_;for(let X=0;X<R.count;X++){const H=X*I;f===!0&&(s.fromBufferAttribute(R,X),T[O+H+0]=s.x,T[O+H+1]=s.y,T[O+H+2]=s.z,T[O+H+3]=0),g===!0&&(s.fromBufferAttribute(D,X),T[O+H+4]=s.x,T[O+H+5]=s.y,T[O+H+6]=s.z,T[O+H+7]=0),v===!0&&(s.fromBufferAttribute(L,X),T[O+H+8]=s.x,T[O+H+9]=s.y,T[O+H+10]=s.z,T[O+H+11]=L.itemSize===4?s.w:1)}}p={count:u,texture:C,size:new ft(x,A)},n.set(o,p),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function t0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class ih extends Oe{constructor(t,e,n,s,r,a,o,c,l,h=rs){if(h!==rs&&h!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===rs&&(n=Ci),n===void 0&&h===us&&(n=hs),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:He,this.minFilter=c!==void 0?c:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const sh=new Oe,Kc=new ih(1,1),rh=new Yl,ah=new Ou,oh=new th,Jc=[],Zc=[],Qc=new Float32Array(16),tl=new Float32Array(9),el=new Float32Array(4);function vs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Jc[s];if(r===void 0&&(r=new Float32Array(s),Jc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function we(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xr(i,t){let e=Zc[t];e===void 0&&(e=new Int32Array(t),Zc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function e0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function n0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function s0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function r0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;el.set(n),i.uniformMatrix2fv(this.addr,!1,el),Te(e,n)}}function a0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;tl.set(n),i.uniformMatrix3fv(this.addr,!1,tl),Te(e,n)}}function o0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;Qc.set(n),i.uniformMatrix4fv(this.addr,!1,Qc),Te(e,n)}}function c0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function l0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function h0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function u0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function f0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function d0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function p0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function m0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function g0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Kc.compareFunction=Wl,r=Kc):r=sh,e.setTexture2D(t||r,s)}function v0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ah,s)}function _0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||oh,s)}function x0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||rh,s)}function M0(i){switch(i){case 5126:return e0;case 35664:return n0;case 35665:return i0;case 35666:return s0;case 35674:return r0;case 35675:return a0;case 35676:return o0;case 5124:case 35670:return c0;case 35667:case 35671:return l0;case 35668:case 35672:return h0;case 35669:case 35673:return u0;case 5125:return f0;case 36294:return d0;case 36295:return p0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return g0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return x0}}function y0(i,t){i.uniform1fv(this.addr,t)}function S0(i,t){const e=vs(t,this.size,2);i.uniform2fv(this.addr,e)}function b0(i,t){const e=vs(t,this.size,3);i.uniform3fv(this.addr,e)}function E0(i,t){const e=vs(t,this.size,4);i.uniform4fv(this.addr,e)}function w0(i,t){const e=vs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function T0(i,t){const e=vs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function A0(i,t){const e=vs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function R0(i,t){i.uniform1iv(this.addr,t)}function C0(i,t){i.uniform2iv(this.addr,t)}function P0(i,t){i.uniform3iv(this.addr,t)}function L0(i,t){i.uniform4iv(this.addr,t)}function I0(i,t){i.uniform1uiv(this.addr,t)}function D0(i,t){i.uniform2uiv(this.addr,t)}function U0(i,t){i.uniform3uiv(this.addr,t)}function N0(i,t){i.uniform4uiv(this.addr,t)}function k0(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||sh,r[a])}function F0(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ah,r[a])}function O0(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||oh,r[a])}function B0(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||rh,r[a])}function z0(i){switch(i){case 5126:return y0;case 35664:return S0;case 35665:return b0;case 35666:return E0;case 35674:return w0;case 35675:return T0;case 35676:return A0;case 5124:case 35670:return R0;case 35667:case 35671:return C0;case 35668:case 35672:return P0;case 35669:case 35673:return L0;case 5125:return I0;case 36294:return D0;case 36295:return U0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return B0}}class H0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=M0(e.type)}}class G0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=z0(e.type)}}class V0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function nl(i,t){i.seq.push(t),i.map[t.id]=t}function W0(i,t,e){const n=i.name,s=n.length;for(Ta.lastIndex=0;;){const r=Ta.exec(n),a=Ta.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){nl(e,l===void 0?new H0(o,i,t):new G0(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new V0(o),nl(e,u)),e=u}}}class Pr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);W0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function il(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const X0=37297;let q0=0;function Y0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const sl=new Bt;function j0(i){Jt._getMatrix(sl,Jt.workingColorSpace,i);const t=`mat3( ${sl.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case Wr:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function rl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Y0(i.getShaderSource(t),a)}else return s}function $0(i,t){const e=j0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function K0(i,t){let e;switch(t){case fu:e="Linear";break;case du:e="Reinhard";break;case pu:e="Cineon";break;case No:e="ACESFilmic";break;case gu:e="AgX";break;case vu:e="Neutral";break;case mu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const vr=new P;function J0(){Jt.getLuminanceCoefficients(vr);const i=vr.x.toFixed(4),t=vr.y.toFixed(4),e=vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function Q0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ns(i){return i!==""}function al(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ol(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const em=/^[ \t]*#include +<([\w\d./]+)>/gm;function To(i){return i.replace(em,im)}const nm=new Map;function im(i,t){let e=Gt[t];if(e===void 0){const n=nm.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return To(e)}const sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cl(i){return i.replace(sm,rm)}function rm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ll(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function am(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Il?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Dl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function om(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case cs:case ls:t="ENVMAP_TYPE_CUBE";break;case Vr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ls:t="ENVMAP_MODE_REFRACTION";break}return t}function lm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Uo:t="ENVMAP_BLENDING_MULTIPLY";break;case hu:t="ENVMAP_BLENDING_MIX";break;case uu:t="ENVMAP_BLENDING_ADD";break}return t}function hm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function um(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=am(e),l=om(e),h=cm(e),u=lm(e),p=hm(e),f=Z0(e),g=Q0(r),v=s.createProgram();let m,d,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ns).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ns).join(`
`),d.length>0&&(d+=`
`)):(m=[ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),d=[ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?Gt.tonemapping_pars_fragment:"",e.toneMapping!==ai?K0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,$0("linearToOutputTexel",e.outputColorSpace),J0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ns).join(`
`)),a=To(a),a=al(a,e),a=ol(a,e),o=To(o),o=al(o,e),o=ol(o,e),a=cl(a),o=cl(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=y+m+a,x=y+d+o,A=il(s,s.VERTEX_SHADER,E),T=il(s,s.FRAGMENT_SHADER,x);s.attachShader(v,A),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(R){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(v).trim(),L=s.getShaderInfoLog(A).trim(),O=s.getShaderInfoLog(T).trim();let X=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,A,T);else{const j=rl(s,A,"vertex"),z=rl(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+j+`
`+z)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(L===""||O==="")&&(H=!1);H&&(R.diagnostics={runnable:X,programLog:D,vertexShader:{log:L,prefix:m},fragmentShader:{log:O,prefix:d}})}s.deleteShader(A),s.deleteShader(T),I=new Pr(s,v),b=tm(s,v)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,X0)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=q0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=T,this}let fm=0;class dm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new pm(t),e.set(t,n)),n}}class pm{constructor(t){this.id=fm++,this.code=t,this.usedTimes=0}}function mm(i,t,e,n,s,r,a){const o=new jl,c=new dm,l=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,_,R,D,L){const O=D.fog,X=L.geometry,H=b.isMeshStandardMaterial?D.environment:null,j=(b.isMeshStandardMaterial?e:t).get(b.envMap||H),z=j&&j.mapping===Vr?j.image.height:null,tt=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const it=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,dt=it!==void 0?it.length:0;let Q=0;X.morphAttributes.position!==void 0&&(Q=1),X.morphAttributes.normal!==void 0&&(Q=2),X.morphAttributes.color!==void 0&&(Q=3);let bt,W,J,at;if(tt){const se=bn[tt];bt=se.vertexShader,W=se.fragmentShader}else bt=b.vertexShader,W=b.fragmentShader,c.update(b),J=c.getVertexShaderID(b),at=c.getFragmentShaderID(b);const st=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),kt=L.isInstancedMesh===!0,Vt=L.isBatchedMesh===!0,xe=!!b.map,$t=!!b.matcap,ye=!!j,F=!!b.aoMap,nn=!!b.lightMap,Xt=!!b.bumpMap,qt=!!b.normalMap,Ct=!!b.displacementMap,me=!!b.emissiveMap,At=!!b.metalnessMap,w=!!b.roughnessMap,M=b.anisotropy>0,B=b.clearcoat>0,$=b.dispersion>0,Z=b.iridescence>0,Y=b.sheen>0,yt=b.transmission>0,ct=M&&!!b.anisotropyMap,pt=B&&!!b.clearcoatMap,Kt=B&&!!b.clearcoatNormalMap,et=B&&!!b.clearcoatRoughnessMap,mt=Z&&!!b.iridescenceMap,Lt=Z&&!!b.iridescenceThicknessMap,Dt=Y&&!!b.sheenColorMap,gt=Y&&!!b.sheenRoughnessMap,Yt=!!b.specularMap,zt=!!b.specularColorMap,de=!!b.specularIntensityMap,U=yt&&!!b.transmissionMap,ot=yt&&!!b.thicknessMap,q=!!b.gradientMap,K=!!b.alphaMap,ut=b.alphaTest>0,lt=!!b.alphaHash,Ft=!!b.extensions;let Me=ai;b.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Me=i.toneMapping);const Ie={shaderID:tt,shaderType:b.type,shaderName:b.name,vertexShader:bt,fragmentShader:W,defines:b.defines,customVertexShaderID:J,customFragmentShaderID:at,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Vt,batchingColor:Vt&&L._colorsTexture!==null,instancing:kt,instancingColor:kt&&L.instanceColor!==null,instancingMorph:kt&&L.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ps,alphaToCoverage:!!b.alphaToCoverage,map:xe,matcap:$t,envMap:ye,envMapMode:ye&&j.mapping,envMapCubeUVHeight:z,aoMap:F,lightMap:nn,bumpMap:Xt,normalMap:qt,displacementMap:p&&Ct,emissiveMap:me,normalMapObjectSpace:qt&&b.normalMapType===yu,normalMapTangentSpace:qt&&b.normalMapType===Vo,metalnessMap:At,roughnessMap:w,anisotropy:M,anisotropyMap:ct,clearcoat:B,clearcoatMap:pt,clearcoatNormalMap:Kt,clearcoatRoughnessMap:et,dispersion:$,iridescence:Z,iridescenceMap:mt,iridescenceThicknessMap:Lt,sheen:Y,sheenColorMap:Dt,sheenRoughnessMap:gt,specularMap:Yt,specularColorMap:zt,specularIntensityMap:de,transmission:yt,transmissionMap:U,thicknessMap:ot,gradientMap:q,opaque:b.transparent===!1&&b.blending===ss&&b.alphaToCoverage===!1,alphaMap:K,alphaTest:ut,alphaHash:lt,combine:b.combine,mapUv:xe&&v(b.map.channel),aoMapUv:F&&v(b.aoMap.channel),lightMapUv:nn&&v(b.lightMap.channel),bumpMapUv:Xt&&v(b.bumpMap.channel),normalMapUv:qt&&v(b.normalMap.channel),displacementMapUv:Ct&&v(b.displacementMap.channel),emissiveMapUv:me&&v(b.emissiveMap.channel),metalnessMapUv:At&&v(b.metalnessMap.channel),roughnessMapUv:w&&v(b.roughnessMap.channel),anisotropyMapUv:ct&&v(b.anisotropyMap.channel),clearcoatMapUv:pt&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:gt&&v(b.sheenRoughnessMap.channel),specularMapUv:Yt&&v(b.specularMap.channel),specularColorMapUv:zt&&v(b.specularColorMap.channel),specularIntensityMapUv:de&&v(b.specularIntensityMap.channel),transmissionMapUv:U&&v(b.transmissionMap.channel),thicknessMapUv:ot&&v(b.thicknessMap.channel),alphaMapUv:K&&v(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(qt||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!X.attributes.uv&&(xe||K),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:vt,skinning:L.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Q,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Me,decodeVideoTexture:xe&&b.map.isVideoTexture===!0&&Jt.getTransfer(b.map.colorSpace)===oe,decodeVideoTextureEmissive:me&&b.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(b.emissiveMap.colorSpace)===oe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ye,flipSided:b.side===Fe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ft&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&b.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function d(b){const _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)_.push(R),_.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(y(_,b),E(_,b),_.push(i.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function y(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function E(b,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),b.push(o.mask)}function x(b){const _=g[b.type];let R;if(_){const D=bn[_];R=Ju.clone(D.uniforms)}else R=b.uniforms;return R}function A(b,_){let R;for(let D=0,L=h.length;D<L;D++){const O=h[D];if(O.cacheKey===_){R=O,++R.usedTimes;break}}return R===void 0&&(R=new um(i,_,b,r),h.push(R)),R}function T(b){if(--b.usedTimes===0){const _=h.indexOf(b);h[_]=h[h.length-1],h.pop(),b.destroy()}}function C(b){c.remove(b)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:A,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:I}}function gm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function vm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function hl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ul(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,p,f,g,v,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:p,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=f,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=m),t++,d}function o(u,p,f,g,v,m){const d=a(u,p,f,g,v,m);f.transmission>0?n.push(d):f.transparent===!0?s.push(d):e.push(d)}function c(u,p,f,g,v,m){const d=a(u,p,f,g,v,m);f.transmission>0?n.unshift(d):f.transparent===!0?s.unshift(d):e.unshift(d)}function l(u,p){e.length>1&&e.sort(u||vm),n.length>1&&n.sort(p||hl),s.length>1&&s.sort(p||hl)}function h(){for(let u=t,p=i.length;u<p;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function _m(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new ul,i.set(n,[a])):s>=r.length?(a=new ul,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function xm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new It};break;case"SpotLight":e={position:new P,direction:new P,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Mm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let ym=0;function Sm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function bm(i){const t=new xm,e=Mm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,r=new ie,a=new ie;function o(l){let h=0,u=0,p=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,v=0,m=0,d=0,y=0,E=0,x=0,A=0,T=0,C=0;l.sort(Sm);for(let b=0,_=l.length;b<_;b++){const R=l[b],D=R.color,L=R.intensity,O=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=D.r*L,u+=D.g*L,p+=D.b*L;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],L);C++}else if(R.isDirectionalLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const j=R.shadow,z=e.get(R);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=R.shadow.matrix,y++}n.directional[f]=H,f++}else if(R.isSpotLight){const H=t.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(D).multiplyScalar(L),H.distance=O,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[v]=H;const j=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,j.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[v]=j.matrix,R.castShadow){const z=e.get(R);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,n.spotShadow[v]=z,n.spotShadowMap[v]=X,x++}v++}else if(R.isRectAreaLight){const H=t.get(R);H.color.copy(D).multiplyScalar(L),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=H,m++}else if(R.isPointLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){const j=R.shadow,z=e.get(R);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,z.shadowCameraNear=j.camera.near,z.shadowCameraFar=j.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=R.shadow.matrix,E++}n.point[g]=H,g++}else if(R.isHemisphereLight){const H=t.get(R);H.skyColor.copy(R.color).multiplyScalar(L),H.groundColor.copy(R.groundColor).multiplyScalar(L),n.hemi[d]=H,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==d||I.numDirectionalShadows!==y||I.numPointShadows!==E||I.numSpotShadows!==x||I.numSpotMaps!==A||I.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=x+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,I.directionalLength=f,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=d,I.numDirectionalShadows=y,I.numPointShadows=E,I.numSpotShadows=x,I.numSpotMaps=A,I.numLightProbes=C,n.version=ym++)}function c(l,h){let u=0,p=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let d=0,y=l.length;d<y;d++){const E=l[d];if(E.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(E.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const x=n.point[p];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),p++}else if(E.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function fl(i){const t=new bm(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Em(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new fl(i),t.set(s,[o])):r>=a.length?(o=new fl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class wm extends gs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Tm extends gs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Am=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Cm(i,t,e){let n=new Wo;const s=new ft,r=new ft,a=new le,o=new wm({depthPacking:Mu}),c=new Tm,l={},h=e.maxTextureSize,u={[oi]:Fe,[Fe]:oi,[Ye]:Ye},p=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Am,fragmentShader:Rm}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ge;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Pt(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Il;let d=this.type;this.render=function(T,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const b=i.getRenderTarget(),_=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),D=i.state;D.setBlending(ri),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const L=d!==zn&&this.type===zn,O=d===zn&&this.type!==zn;for(let X=0,H=T.length;X<H;X++){const j=T[X],z=j.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const tt=z.getFrameExtents();if(s.multiply(tt),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,z.mapSize.y=r.y)),z.map===null||L===!0||O===!0){const dt=this.type!==zn?{minFilter:He,magFilter:He}:{};z.map!==null&&z.map.dispose(),z.map=new Pi(s.x,s.y,dt),z.map.texture.name=j.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const it=z.getViewportCount();for(let dt=0;dt<it;dt++){const Q=z.getViewport(dt);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),D.viewport(a),z.updateMatrices(j,dt),n=z.getFrustum(),x(C,I,z.camera,j,this.type)}z.isPointLightShadow!==!0&&this.type===zn&&y(z,I),z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(b,_,R)};function y(T,C){const I=t.update(v);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Pi(s.x,s.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,I,p,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,I,f,v,null)}function E(T,C,I,b){let _=null;const R=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)_=R;else if(_=I.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const D=_.uuid,L=C.uuid;let O=l[D];O===void 0&&(O={},l[D]=O);let X=O[L];X===void 0&&(X=_.clone(),O[L]=X,C.addEventListener("dispose",A)),_=X}if(_.visible=C.visible,_.wireframe=C.wireframe,b===zn?_.side=C.shadowSide!==null?C.shadowSide:C.side:_.side=C.shadowSide!==null?C.shadowSide:u[C.side],_.alphaMap=C.alphaMap,_.alphaTest=C.alphaTest,_.map=C.map,_.clipShadows=C.clipShadows,_.clippingPlanes=C.clippingPlanes,_.clipIntersection=C.clipIntersection,_.displacementMap=C.displacementMap,_.displacementScale=C.displacementScale,_.displacementBias=C.displacementBias,_.wireframeLinewidth=C.wireframeLinewidth,_.linewidth=C.linewidth,I.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const D=i.properties.get(_);D.light=I}return _}function x(T,C,I,b,_){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===zn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const L=t.update(T),O=T.material;if(Array.isArray(O)){const X=L.groups;for(let H=0,j=X.length;H<j;H++){const z=X[H],tt=O[z.materialIndex];if(tt&&tt.visible){const it=E(T,tt,b,_);T.onBeforeShadow(i,T,C,I,L,it,z),i.renderBufferDirect(I,null,L,it,T,z),T.onAfterShadow(i,T,C,I,L,it,z)}}}else if(O.visible){const X=E(T,O,b,_);T.onBeforeShadow(i,T,C,I,L,X,null),i.renderBufferDirect(I,null,L,X,T,null),T.onAfterShadow(i,T,C,I,L,X,null)}}const D=T.children;for(let L=0,O=D.length;L<O;L++)x(D[L],C,I,b,_)}function A(T){T.target.removeEventListener("dispose",A);for(const I in l){const b=l[I],_=T.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}const Pm={[Ha]:Ga,[Va]:qa,[Wa]:Ya,[os]:Xa,[Ga]:Ha,[qa]:Va,[Ya]:Wa,[Xa]:os};function Lm(i,t){function e(){let U=!1;const ot=new le;let q=null;const K=new le(0,0,0,0);return{setMask:function(ut){q!==ut&&!U&&(i.colorMask(ut,ut,ut,ut),q=ut)},setLocked:function(ut){U=ut},setClear:function(ut,lt,Ft,Me,Ie){Ie===!0&&(ut*=Me,lt*=Me,Ft*=Me),ot.set(ut,lt,Ft,Me),K.equals(ot)===!1&&(i.clearColor(ut,lt,Ft,Me),K.copy(ot))},reset:function(){U=!1,q=null,K.set(-1,0,0,0)}}}function n(){let U=!1,ot=!1,q=null,K=null,ut=null;return{setReversed:function(lt){if(ot!==lt){const Ft=t.get("EXT_clip_control");ot?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);const Me=ut;ut=null,this.setClear(Me)}ot=lt},getReversed:function(){return ot},setTest:function(lt){lt?st(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(lt){q!==lt&&!U&&(i.depthMask(lt),q=lt)},setFunc:function(lt){if(ot&&(lt=Pm[lt]),K!==lt){switch(lt){case Ha:i.depthFunc(i.NEVER);break;case Ga:i.depthFunc(i.ALWAYS);break;case Va:i.depthFunc(i.LESS);break;case os:i.depthFunc(i.LEQUAL);break;case Wa:i.depthFunc(i.EQUAL);break;case Xa:i.depthFunc(i.GEQUAL);break;case qa:i.depthFunc(i.GREATER);break;case Ya:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=lt}},setLocked:function(lt){U=lt},setClear:function(lt){ut!==lt&&(ot&&(lt=1-lt),i.clearDepth(lt),ut=lt)},reset:function(){U=!1,q=null,K=null,ut=null,ot=!1}}}function s(){let U=!1,ot=null,q=null,K=null,ut=null,lt=null,Ft=null,Me=null,Ie=null;return{setTest:function(se){U||(se?st(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(se){ot!==se&&!U&&(i.stencilMask(se),ot=se)},setFunc:function(se,un,In){(q!==se||K!==un||ut!==In)&&(i.stencilFunc(se,un,In),q=se,K=un,ut=In)},setOp:function(se,un,In){(lt!==se||Ft!==un||Me!==In)&&(i.stencilOp(se,un,In),lt=se,Ft=un,Me=In)},setLocked:function(se){U=se},setClear:function(se){Ie!==se&&(i.clearStencil(se),Ie=se)},reset:function(){U=!1,ot=null,q=null,K=null,ut=null,lt=null,Ft=null,Me=null,Ie=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},p=new WeakMap,f=[],g=null,v=!1,m=null,d=null,y=null,E=null,x=null,A=null,T=null,C=new It(0,0,0),I=0,b=!1,_=null,R=null,D=null,L=null,O=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,j=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(z)[1]),H=j>=1):z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),H=j>=2);let tt=null,it={};const dt=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),bt=new le().fromArray(dt),W=new le().fromArray(Q);function J(U,ot,q,K){const ut=new Uint8Array(4),lt=i.createTexture();i.bindTexture(U,lt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<q;Ft++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(ot+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return lt}const at={};at[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(os),Xt(!1),qt(_c),st(i.CULL_FACE),F(ri);function st(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function vt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function kt(U,ot){return u[U]!==ot?(i.bindFramebuffer(U,ot),u[U]=ot,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ot),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function Vt(U,ot){let q=f,K=!1;if(U){q=p.get(ot),q===void 0&&(q=[],p.set(ot,q));const ut=U.textures;if(q.length!==ut.length||q[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Ft=ut.length;lt<Ft;lt++)q[lt]=i.COLOR_ATTACHMENT0+lt;q.length=ut.length,K=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,K=!0);K&&i.drawBuffers(q)}function xe(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const $t={[Mi]:i.FUNC_ADD,[Yh]:i.FUNC_SUBTRACT,[jh]:i.FUNC_REVERSE_SUBTRACT};$t[$h]=i.MIN,$t[Kh]=i.MAX;const ye={[Jh]:i.ZERO,[Zh]:i.ONE,[Qh]:i.SRC_COLOR,[Ba]:i.SRC_ALPHA,[ru]:i.SRC_ALPHA_SATURATE,[iu]:i.DST_COLOR,[eu]:i.DST_ALPHA,[tu]:i.ONE_MINUS_SRC_COLOR,[za]:i.ONE_MINUS_SRC_ALPHA,[su]:i.ONE_MINUS_DST_COLOR,[nu]:i.ONE_MINUS_DST_ALPHA,[au]:i.CONSTANT_COLOR,[ou]:i.ONE_MINUS_CONSTANT_COLOR,[cu]:i.CONSTANT_ALPHA,[lu]:i.ONE_MINUS_CONSTANT_ALPHA};function F(U,ot,q,K,ut,lt,Ft,Me,Ie,se){if(U===ri){v===!0&&(vt(i.BLEND),v=!1);return}if(v===!1&&(st(i.BLEND),v=!0),U!==qh){if(U!==m||se!==b){if((d!==Mi||x!==Mi)&&(i.blendEquation(i.FUNC_ADD),d=Mi,x=Mi),se)switch(U){case ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ur:i.blendFunc(i.ONE,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ur:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,E=null,A=null,T=null,C.set(0,0,0),I=0,m=U,b=se}return}ut=ut||ot,lt=lt||q,Ft=Ft||K,(ot!==d||ut!==x)&&(i.blendEquationSeparate($t[ot],$t[ut]),d=ot,x=ut),(q!==y||K!==E||lt!==A||Ft!==T)&&(i.blendFuncSeparate(ye[q],ye[K],ye[lt],ye[Ft]),y=q,E=K,A=lt,T=Ft),(Me.equals(C)===!1||Ie!==I)&&(i.blendColor(Me.r,Me.g,Me.b,Ie),C.copy(Me),I=Ie),m=U,b=!1}function nn(U,ot){U.side===Ye?vt(i.CULL_FACE):st(i.CULL_FACE);let q=U.side===Fe;ot&&(q=!q),Xt(q),U.blending===ss&&U.transparent===!1?F(ri):F(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const K=U.stencilWrite;o.setTest(K),K&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),me(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(U){_!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),_=U)}function qt(U){U!==Wh?(st(i.CULL_FACE),U!==R&&(U===_c?i.cullFace(i.BACK):U===Xh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),R=U}function Ct(U){U!==D&&(H&&i.lineWidth(U),D=U)}function me(U,ot,q){U?(st(i.POLYGON_OFFSET_FILL),(L!==ot||O!==q)&&(i.polygonOffset(ot,q),L=ot,O=q)):vt(i.POLYGON_OFFSET_FILL)}function At(U){U?st(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function w(U){U===void 0&&(U=i.TEXTURE0+X-1),tt!==U&&(i.activeTexture(U),tt=U)}function M(U,ot,q){q===void 0&&(tt===null?q=i.TEXTURE0+X-1:q=tt);let K=it[q];K===void 0&&(K={type:void 0,texture:void 0},it[q]=K),(K.type!==U||K.texture!==ot)&&(tt!==q&&(i.activeTexture(q),tt=q),i.bindTexture(U,ot||at[U]),K.type=U,K.texture=ot)}function B(){const U=it[tt];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(U){bt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),bt.copy(U))}function gt(U){W.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),W.copy(U))}function Yt(U,ot){let q=l.get(ot);q===void 0&&(q=new WeakMap,l.set(ot,q));let K=q.get(U);K===void 0&&(K=i.getUniformBlockIndex(ot,U.name),q.set(U,K))}function zt(U,ot){const K=l.get(ot).get(U);c.get(ot)!==K&&(i.uniformBlockBinding(ot,K,U.__bindingPointIndex),c.set(ot,K))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},tt=null,it={},u={},p=new WeakMap,f=[],g=null,v=!1,m=null,d=null,y=null,E=null,x=null,A=null,T=null,C=new It(0,0,0),I=0,b=!1,_=null,R=null,D=null,L=null,O=null,bt.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:vt,bindFramebuffer:kt,drawBuffers:Vt,useProgram:xe,setBlending:F,setMaterial:nn,setFlipSided:Xt,setCullFace:qt,setLineWidth:Ct,setPolygonOffset:me,setScissorTest:At,activeTexture:w,bindTexture:M,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:mt,texImage3D:Lt,updateUBOMapping:Yt,uniformBlockBinding:zt,texStorage2D:Kt,texStorage3D:et,texSubImage2D:Y,texSubImage3D:yt,compressedTexSubImage2D:ct,compressedTexSubImage3D:pt,scissor:Dt,viewport:gt,reset:de}}function dl(i,t,e,n){const s=Im(n);switch(e){case Ol:return i*t;case zl:return i*t;case Hl:return i*t*2;case Bo:return i*t/s.components*s.byteLength;case zo:return i*t/s.components*s.byteLength;case Gl:return i*t*2/s.components*s.byteLength;case Ho:return i*t*2/s.components*s.byteLength;case Bl:return i*t*3/s.components*s.byteLength;case _n:return i*t*4/s.components*s.byteLength;case Go:return i*t*4/s.components*s.byteLength;case wr:case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ar:case Rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:case to:return Math.max(i,16)*Math.max(t,8)/4;case Ja:case Qa:return Math.max(i,8)*Math.max(t,8)/2;case eo:case no:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case so:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ro:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ao:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case oo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case co:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case lo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ho:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case uo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case fo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case po:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case mo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case go:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case vo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case _o:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Cr:case xo:case Mo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vl:case yo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case So:case bo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Im(i){switch(i){case Yn:case Nl:return{byteLength:1,components:1};case Ws:case kl:case qs:return{byteLength:2,components:1};case Fo:case Oo:return{byteLength:2,components:4};case Ci:case ko:case wn:return{byteLength:4,components:1};case Fl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Dm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ft,h=new WeakMap;let u;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return f?new OffscreenCanvas(w,M):Fr("canvas")}function v(w,M,B){let $=1;const Z=At(w);if((Z.width>B||Z.height>B)&&($=B/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Y=Math.floor($*Z.width),yt=Math.floor($*Z.height);u===void 0&&(u=g(Y,yt));const ct=M?g(Y,yt):u;return ct.width=Y,ct.height=yt,ct.getContext("2d").drawImage(w,0,0,Y,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+yt+")."),ct}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function m(w){return w.generateMipmaps}function d(w){i.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,M,B,$,Z=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=M;if(M===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8)),M===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),M===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8)),M===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),M===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),M===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),M===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),M===i.RGBA){const yt=Z?Wr:Jt.getTransfer($);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=yt===oe?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(w,M){let B;return w?M===null||M===Ci||M===hs?B=i.DEPTH24_STENCIL8:M===wn?B=i.DEPTH32F_STENCIL8:M===Ws&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ci||M===hs?B=i.DEPTH_COMPONENT24:M===wn?B=i.DEPTH_COMPONENT32F:M===Ws&&(B=i.DEPTH_COMPONENT16),B}function A(w,M){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==He&&w.minFilter!==En?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function T(w){const M=w.target;M.removeEventListener("dispose",T),I(M),M.isVideoTexture&&h.delete(M)}function C(w){const M=w.target;M.removeEventListener("dispose",C),_(M)}function I(w){const M=n.get(w);if(M.__webglInit===void 0)return;const B=w.source,$=p.get(B);if($){const Z=$[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(w),Object.keys($).length===0&&p.delete(B)}n.remove(w)}function b(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const B=w.source,$=p.get(B);delete $[M.__cacheKey],a.memory.textures--}function _(w){const M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let Z=0;Z<M.__webglFramebuffer[$].length;Z++)i.deleteFramebuffer(M.__webglFramebuffer[$][Z]);else i.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)i.deleteFramebuffer(M.__webglFramebuffer[$]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=w.textures;for(let $=0,Z=B.length;$<Z;$++){const Y=n.get(B[$]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(B[$])}n.remove(w)}let R=0;function D(){R=0}function L(){const w=R;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),R+=1,w}function O(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function X(w,M){const B=n.get(w);if(w.isVideoTexture&&Ct(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(B,w,M);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+M)}function H(w,M){const B=n.get(w);if(w.version>0&&B.__version!==w.version){W(B,w,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+M)}function j(w,M){const B=n.get(w);if(w.version>0&&B.__version!==w.version){W(B,w,M);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+M)}function z(w,M){const B=n.get(w);if(w.version>0&&B.__version!==w.version){J(B,w,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+M)}const tt={[Nr]:i.REPEAT,[Si]:i.CLAMP_TO_EDGE,[Ka]:i.MIRRORED_REPEAT},it={[He]:i.NEAREST,[_u]:i.NEAREST_MIPMAP_NEAREST,[Js]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[Zr]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},dt={[Su]:i.NEVER,[Ru]:i.ALWAYS,[bu]:i.LESS,[Wl]:i.LEQUAL,[Eu]:i.EQUAL,[Au]:i.GEQUAL,[wu]:i.GREATER,[Tu]:i.NOTEQUAL};function Q(w,M){if(M.type===wn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===En||M.magFilter===Zr||M.magFilter===Js||M.magFilter===bi||M.minFilter===En||M.minFilter===Zr||M.minFilter===Js||M.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,tt[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,tt[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,tt[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,it[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,it[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,dt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===He||M.minFilter!==Js&&M.minFilter!==bi||M.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function bt(w,M){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",T));const $=M.source;let Z=p.get($);Z===void 0&&(Z={},p.set($,Z));const Y=O(M);if(Y!==w.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[Y].usedTimes++;const yt=Z[w.__cacheKey];yt!==void 0&&(Z[w.__cacheKey].usedTimes--,yt.usedTimes===0&&b(M)),w.__cacheKey=Y,w.__webglTexture=Z[Y].texture}return B}function W(w,M,B){let $=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=i.TEXTURE_3D);const Z=bt(w,M),Y=M.source;e.bindTexture($,w.__webglTexture,i.TEXTURE0+B);const yt=n.get(Y);if(Y.version!==yt.__version||Z===!0){e.activeTexture(i.TEXTURE0+B);const ct=Jt.getPrimaries(Jt.workingColorSpace),pt=M.colorSpace===ii?null:Jt.getPrimaries(M.colorSpace),Kt=M.colorSpace===ii||ct===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let et=v(M.image,!1,s.maxTextureSize);et=me(M,et);const mt=r.convert(M.format,M.colorSpace),Lt=r.convert(M.type);let Dt=E(M.internalFormat,mt,Lt,M.colorSpace,M.isVideoTexture);Q($,M);let gt;const Yt=M.mipmaps,zt=M.isVideoTexture!==!0,de=yt.__version===void 0||Z===!0,U=Y.dataReady,ot=A(M,et);if(M.isDepthTexture)Dt=x(M.format===us,M.type),de&&(zt?e.texStorage2D(i.TEXTURE_2D,1,Dt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Dt,et.width,et.height,0,mt,Lt,null));else if(M.isDataTexture)if(Yt.length>0){zt&&de&&e.texStorage2D(i.TEXTURE_2D,ot,Dt,Yt[0].width,Yt[0].height);for(let q=0,K=Yt.length;q<K;q++)gt=Yt[q],zt?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,gt.width,gt.height,mt,Lt,gt.data):e.texImage2D(i.TEXTURE_2D,q,Dt,gt.width,gt.height,0,mt,Lt,gt.data);M.generateMipmaps=!1}else zt?(de&&e.texStorage2D(i.TEXTURE_2D,ot,Dt,et.width,et.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,mt,Lt,et.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,et.width,et.height,0,mt,Lt,et.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){zt&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Dt,Yt[0].width,Yt[0].height,et.depth);for(let q=0,K=Yt.length;q<K;q++)if(gt=Yt[q],M.format!==_n)if(mt!==null)if(zt){if(U)if(M.layerUpdates.size>0){const ut=dl(gt.width,gt.height,M.format,M.type);for(const lt of M.layerUpdates){const Ft=gt.data.subarray(lt*ut/gt.data.BYTES_PER_ELEMENT,(lt+1)*ut/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,lt,gt.width,gt.height,1,mt,Ft)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,gt.width,gt.height,et.depth,mt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Dt,gt.width,gt.height,et.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,gt.width,gt.height,et.depth,mt,Lt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Dt,gt.width,gt.height,et.depth,0,mt,Lt,gt.data)}else{zt&&de&&e.texStorage2D(i.TEXTURE_2D,ot,Dt,Yt[0].width,Yt[0].height);for(let q=0,K=Yt.length;q<K;q++)gt=Yt[q],M.format!==_n?mt!==null?zt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Dt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,gt.width,gt.height,mt,Lt,gt.data):e.texImage2D(i.TEXTURE_2D,q,Dt,gt.width,gt.height,0,mt,Lt,gt.data)}else if(M.isDataArrayTexture)if(zt){if(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Dt,et.width,et.height,et.depth),U)if(M.layerUpdates.size>0){const q=dl(et.width,et.height,M.format,M.type);for(const K of M.layerUpdates){const ut=et.data.subarray(K*q/et.data.BYTES_PER_ELEMENT,(K+1)*q/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,et.width,et.height,1,mt,Lt,ut)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,mt,Lt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,et.width,et.height,et.depth,0,mt,Lt,et.data);else if(M.isData3DTexture)zt?(de&&e.texStorage3D(i.TEXTURE_3D,ot,Dt,et.width,et.height,et.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,mt,Lt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,et.width,et.height,et.depth,0,mt,Lt,et.data);else if(M.isFramebufferTexture){if(de)if(zt)e.texStorage2D(i.TEXTURE_2D,ot,Dt,et.width,et.height);else{let q=et.width,K=et.height;for(let ut=0;ut<ot;ut++)e.texImage2D(i.TEXTURE_2D,ut,Dt,q,K,0,mt,Lt,null),q>>=1,K>>=1}}else if(Yt.length>0){if(zt&&de){const q=At(Yt[0]);e.texStorage2D(i.TEXTURE_2D,ot,Dt,q.width,q.height)}for(let q=0,K=Yt.length;q<K;q++)gt=Yt[q],zt?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,mt,Lt,gt):e.texImage2D(i.TEXTURE_2D,q,Dt,mt,Lt,gt);M.generateMipmaps=!1}else if(zt){if(de){const q=At(et);e.texStorage2D(i.TEXTURE_2D,ot,Dt,q.width,q.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Lt,et)}else e.texImage2D(i.TEXTURE_2D,0,Dt,mt,Lt,et);m(M)&&d($),yt.__version=Y.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function J(w,M,B){if(M.image.length!==6)return;const $=bt(w,M),Z=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);const Y=n.get(Z);if(Z.version!==Y.__version||$===!0){e.activeTexture(i.TEXTURE0+B);const yt=Jt.getPrimaries(Jt.workingColorSpace),ct=M.colorSpace===ii?null:Jt.getPrimaries(M.colorSpace),pt=M.colorSpace===ii||yt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Kt=M.isCompressedTexture||M.image[0].isCompressedTexture,et=M.image[0]&&M.image[0].isDataTexture,mt=[];for(let K=0;K<6;K++)!Kt&&!et?mt[K]=v(M.image[K],!0,s.maxCubemapSize):mt[K]=et?M.image[K].image:M.image[K],mt[K]=me(M,mt[K]);const Lt=mt[0],Dt=r.convert(M.format,M.colorSpace),gt=r.convert(M.type),Yt=E(M.internalFormat,Dt,gt,M.colorSpace),zt=M.isVideoTexture!==!0,de=Y.__version===void 0||$===!0,U=Z.dataReady;let ot=A(M,Lt);Q(i.TEXTURE_CUBE_MAP,M);let q;if(Kt){zt&&de&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Yt,Lt.width,Lt.height);for(let K=0;K<6;K++){q=mt[K].mipmaps;for(let ut=0;ut<q.length;ut++){const lt=q[ut];M.format!==_n?Dt!==null?zt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,lt.width,lt.height,Dt,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,Yt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,lt.width,lt.height,Dt,gt,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,Yt,lt.width,lt.height,0,Dt,gt,lt.data)}}}else{if(q=M.mipmaps,zt&&de){q.length>0&&ot++;const K=At(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Yt,K.width,K.height)}for(let K=0;K<6;K++)if(et){zt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,mt[K].width,mt[K].height,Dt,gt,mt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Yt,mt[K].width,mt[K].height,0,Dt,gt,mt[K].data);for(let ut=0;ut<q.length;ut++){const Ft=q[ut].image[K].image;zt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,Ft.width,Ft.height,Dt,gt,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,Yt,Ft.width,Ft.height,0,Dt,gt,Ft.data)}}else{zt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Dt,gt,mt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Yt,Dt,gt,mt[K]);for(let ut=0;ut<q.length;ut++){const lt=q[ut];zt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,Dt,gt,lt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,Yt,Dt,gt,lt.image[K])}}}m(M)&&d(i.TEXTURE_CUBE_MAP),Y.__version=Z.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function at(w,M,B,$,Z,Y){const yt=r.convert(B.format,B.colorSpace),ct=r.convert(B.type),pt=E(B.internalFormat,yt,ct,B.colorSpace),Kt=n.get(M),et=n.get(B);if(et.__renderTarget=M,!Kt.__hasExternalTextures){const mt=Math.max(1,M.width>>Y),Lt=Math.max(1,M.height>>Y);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,Y,pt,mt,Lt,M.depth,0,yt,ct,null):e.texImage2D(Z,Y,pt,mt,Lt,0,yt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),qt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Z,et.__webglTexture,0,Xt(M)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Z,et.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(w,M,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){const $=M.depthTexture,Z=$&&$.isDepthTexture?$.type:null,Y=x(M.stencilBuffer,Z),yt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=Xt(M);qt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,Y,M.width,M.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,Y,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Y,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,w)}else{const $=M.textures;for(let Z=0;Z<$.length;Z++){const Y=$[Z],yt=r.convert(Y.format,Y.colorSpace),ct=r.convert(Y.type),pt=E(Y.internalFormat,yt,ct,Y.colorSpace),Kt=Xt(M);B&&qt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,pt,M.width,M.height):qt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt,pt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,pt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const Z=$.__webglTexture,Y=Xt(M);if(M.depthTexture.format===rs)qt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(M.depthTexture.format===us)qt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function kt(w){const M=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const $=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=$}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");vt(M.__webglFramebuffer,w)}else if(B){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=i.createRenderbuffer(),st(M.__webglDepthbuffer[$],w,!1);else{const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),st(M.__webglDepthbuffer,w,!1);else{const $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(w,M,B){const $=n.get(w);M!==void 0&&at($.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&kt(w)}function xe(w){const M=w.texture,B=n.get(w),$=n.get(M);w.addEventListener("dispose",C);const Z=w.textures,Y=w.isWebGLCubeRenderTarget===!0,yt=Z.length>1;if(yt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=M.version,a.memory.textures++),Y){B.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ct]=[];for(let pt=0;pt<M.mipmaps.length;pt++)B.__webglFramebuffer[ct][pt]=i.createFramebuffer()}else B.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ct=0;ct<M.mipmaps.length;ct++)B.__webglFramebuffer[ct]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(yt)for(let ct=0,pt=Z.length;ct<pt;ct++){const Kt=n.get(Z[ct]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&qt(w)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ct=0;ct<Z.length;ct++){const pt=Z[ct];B.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ct]);const Kt=r.convert(pt.format,pt.colorSpace),et=r.convert(pt.type),mt=E(pt.internalFormat,Kt,et,pt.colorSpace,w.isXRRenderTarget===!0),Lt=Xt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,mt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,B.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),st(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Q(i.TEXTURE_CUBE_MAP,M);for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)at(B.__webglFramebuffer[ct][pt],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,pt);else at(B.__webglFramebuffer[ct],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(M)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ct=0,pt=Z.length;ct<pt;ct++){const Kt=Z[ct],et=n.get(Kt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),Q(i.TEXTURE_2D,Kt),at(B.__webglFramebuffer,w,Kt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(Kt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ct=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,$.__webglTexture),Q(ct,M),M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)at(B.__webglFramebuffer[pt],w,M,i.COLOR_ATTACHMENT0,ct,pt);else at(B.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,ct,0);m(M)&&d(ct),e.unbindTexture()}w.depthBuffer&&kt(w)}function $t(w){const M=w.textures;for(let B=0,$=M.length;B<$;B++){const Z=M[B];if(m(Z)){const Y=y(w),yt=n.get(Z).__webglTexture;e.bindTexture(Y,yt),d(Y),e.unbindTexture()}}}const ye=[],F=[];function nn(w){if(w.samples>0){if(qt(w)===!1){const M=w.textures,B=w.width,$=w.height;let Z=i.COLOR_BUFFER_BIT;const Y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(w),ct=M.length>1;if(ct)for(let pt=0;pt<M.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let pt=0;pt<M.length;pt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[pt]);const Kt=n.get(M[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,B,$,0,0,B,$,Z,i.NEAREST),c===!0&&(ye.length=0,F.length=0,ye.push(i.COLOR_ATTACHMENT0+pt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ye.push(Y),F.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let pt=0;pt<M.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[pt]);const Kt=n.get(M[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Xt(w){return Math.min(s.maxSamples,w.samples)}function qt(w){const M=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ct(w){const M=a.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function me(w,M){const B=w.colorSpace,$=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==ps&&B!==ii&&(Jt.getTransfer(B)===oe?($!==_n||Z!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function At(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=D,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=j,this.setTextureCube=z,this.rebindTextures=Vt,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=qt}function Um(i,t){function e(n,s=ii){let r;const a=Jt.getTransfer(s);if(n===Yn)return i.UNSIGNED_BYTE;if(n===Fo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nl)return i.BYTE;if(n===kl)return i.SHORT;if(n===Ws)return i.UNSIGNED_SHORT;if(n===ko)return i.INT;if(n===Ci)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===qs)return i.HALF_FLOAT;if(n===Ol)return i.ALPHA;if(n===Bl)return i.RGB;if(n===_n)return i.RGBA;if(n===zl)return i.LUMINANCE;if(n===Hl)return i.LUMINANCE_ALPHA;if(n===rs)return i.DEPTH_COMPONENT;if(n===us)return i.DEPTH_STENCIL;if(n===Bo)return i.RED;if(n===zo)return i.RED_INTEGER;if(n===Gl)return i.RG;if(n===Ho)return i.RG_INTEGER;if(n===Go)return i.RGBA_INTEGER;if(n===wr||n===Tr||n===Ar||n===Rr)if(a===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ja||n===Za||n===Qa||n===to)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===to)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===eo||n===no||n===io)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===eo||n===no)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===io)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===so||n===ro||n===ao||n===oo||n===co||n===lo||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===vo||n===_o)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===so)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ro)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ao)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===co)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ho)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===po)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===go)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_o)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cr||n===xo||n===Mo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Cr)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vl||n===yo||n===So||n===bo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Cr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===So)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Nm extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ce extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const km={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),d=this._getHandJoint(l,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&p>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(km)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Fm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Om=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Bm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Oe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ci({vertexShader:Fm,fragmentShader:Om,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zm extends ms{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,p=null,f=null,g=null;const v=new Bm,m=e.getContextAttributes();let d=null,y=null;const E=[],x=[],A=new ft;let T=null;const C=new Xe;C.viewport=new le;const I=new Xe;I.viewport=new le;const b=[C,I],_=new Nm;let R=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=E[W];return J===void 0&&(J=new Aa,E[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=E[W];return J===void 0&&(J=new Aa,E[W]=J),J.getGripSpace()},this.getHand=function(W){let J=E[W];return J===void 0&&(J=new Aa,E[W]=J),J.getHandSpace()};function L(W){const J=x.indexOf(W.inputSource);if(J===-1)return;const at=E[J];at!==void 0&&(at.update(W.inputSource,W.frame,l||a),at.dispatchEvent({type:W.type,data:W.inputSource}))}function O(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",X);for(let W=0;W<E.length;W++){const J=x[W];J!==null&&(x[W]=null,E[W].disconnect(J))}R=null,D=null,v.reset(),t.setRenderTarget(d),f=null,p=null,u=null,s=null,y=null,bt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",O),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Pi(f.framebufferWidth,f.framebufferHeight,{format:_n,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,at=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?us:rs,at=m.stencil?hs:Ci);const vt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(s,e),p=u.createProjectionLayer(vt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),y=new Pi(p.textureWidth,p.textureHeight,{format:_n,type:Yn,depthTexture:new ih(p.textureWidth,p.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),bt.setContext(s),bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(W){for(let J=0;J<W.removed.length;J++){const at=W.removed[J],st=x.indexOf(at);st>=0&&(x[st]=null,E[st].disconnect(at))}for(let J=0;J<W.added.length;J++){const at=W.added[J];let st=x.indexOf(at);if(st===-1){for(let kt=0;kt<E.length;kt++)if(kt>=x.length){x.push(at),st=kt;break}else if(x[kt]===null){x[kt]=at,st=kt;break}if(st===-1)break}const vt=E[st];vt&&vt.connect(at)}}const H=new P,j=new P;function z(W,J,at){H.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(at.matrixWorld);const st=H.distanceTo(j),vt=J.projectionMatrix.elements,kt=at.projectionMatrix.elements,Vt=vt[14]/(vt[10]-1),xe=vt[14]/(vt[10]+1),$t=(vt[9]+1)/vt[5],ye=(vt[9]-1)/vt[5],F=(vt[8]-1)/vt[0],nn=(kt[8]+1)/kt[0],Xt=Vt*F,qt=Vt*nn,Ct=st/(-F+nn),me=Ct*-F;if(J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(me),W.translateZ(Ct),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),vt[10]===-1)W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const At=Vt+Ct,w=xe+Ct,M=Xt-me,B=qt+(st-me),$=$t*xe/w*At,Z=ye*xe/w*At;W.projectionMatrix.makePerspective(M,B,$,Z,At,w),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function tt(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let J=W.near,at=W.far;v.texture!==null&&(v.depthNear>0&&(J=v.depthNear),v.depthFar>0&&(at=v.depthFar)),_.near=I.near=C.near=J,_.far=I.far=C.far=at,(R!==_.near||D!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),R=_.near,D=_.far),C.layers.mask=W.layers.mask|2,I.layers.mask=W.layers.mask|4,_.layers.mask=C.layers.mask|I.layers.mask;const st=W.parent,vt=_.cameras;tt(_,st);for(let kt=0;kt<vt.length;kt++)tt(vt[kt],st);vt.length===2?z(_,C,I):_.projectionMatrix.copy(C.projectionMatrix),it(W,_,st)};function it(W,J,at){at===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(at.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Eo*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(W){c=W,p!==null&&(p.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let dt=null;function Q(W,J){if(h=J.getViewerPose(l||a),g=J,h!==null){const at=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let st=!1;at.length!==_.cameras.length&&(_.cameras.length=0,st=!0);for(let kt=0;kt<at.length;kt++){const Vt=at[kt];let xe=null;if(f!==null)xe=f.getViewport(Vt);else{const ye=u.getViewSubImage(p,Vt);xe=ye.viewport,kt===0&&(t.setRenderTargetTextures(y,ye.colorTexture,p.ignoreDepthValues?void 0:ye.depthStencilTexture),t.setRenderTarget(y))}let $t=b[kt];$t===void 0&&($t=new Xe,$t.layers.enable(kt),$t.viewport=new le,b[kt]=$t),$t.matrix.fromArray(Vt.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Vt.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(xe.x,xe.y,xe.width,xe.height),kt===0&&(_.matrix.copy($t.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),st===!0&&_.cameras.push($t)}const vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")){const kt=u.getDepthInformation(at[0]);kt&&kt.isValid&&kt.texture&&v.init(t,kt,s.renderState)}}for(let at=0;at<E.length;at++){const st=x[at],vt=E[at];st!==null&&vt!==void 0&&vt.update(st,J,l||a)}dt&&dt(W,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const bt=new eh;bt.setAnimationLoop(Q),this.setAnimationLoop=function(W){dt=W},this.dispose=function(){}}}const mi=new hn,Hm=new ie;function Gm(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Zl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,E,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),p(m,d),d.isMeshPhysicalMaterial&&f(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,y,E):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Fe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Fe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=t.get(d),E=y.envMap,x=y.envMapRotation;E&&(m.envMap.value=E,mi.copy(x),mi.x*=-1,mi.y*=-1,mi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),m.envMapRotation.value.setFromMatrix4(Hm.makeRotationFromEuler(mi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,y,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=E*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Fe&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const y=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vm(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,E){const x=E.program;n.uniformBlockBinding(y,x)}function l(y,E){let x=s[y.id];x===void 0&&(g(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",m));const A=E.program;n.updateUBOMapping(y,A);const T=t.render.frame;r[y.id]!==T&&(p(y),r[y.id]=T)}function h(y){const E=u();y.__bindingPointIndex=E;const x=i.createBuffer(),A=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,A,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,x),x}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const E=s[y.id],x=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,C=x.length;T<C;T++){const I=Array.isArray(x[T])?x[T]:[x[T]];for(let b=0,_=I.length;b<_;b++){const R=I[b];if(f(R,T,b,A)===!0){const D=R.__offset,L=Array.isArray(R.value)?R.value:[R.value];let O=0;for(let X=0;X<L.length;X++){const H=L[X],j=v(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,D+O,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,O),O+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,E,x,A){const T=y.value,C=E+"_"+x;if(A[C]===void 0)return typeof T=="number"||typeof T=="boolean"?A[C]=T:A[C]=T.clone(),!0;{const I=A[C];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return A[C]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(y){const E=y.uniforms;let x=0;const A=16;for(let C=0,I=E.length;C<I;C++){const b=Array.isArray(E[C])?E[C]:[E[C]];for(let _=0,R=b.length;_<R;_++){const D=b[_],L=Array.isArray(D.value)?D.value:[D.value];for(let O=0,X=L.length;O<X;O++){const H=L[O],j=v(H),z=x%A,tt=z%j.boundary,it=z+tt;x+=tt,it!==0&&A-it<j.storage&&(x+=A-it),D.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=j.storage}}}const T=x%A;return T>0&&(x+=A-T),y.__size=x,y.__cache={},this}function v(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){const E=y.target;E.removeEventListener("dispose",m);const x=a.indexOf(E.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function d(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}class ch{constructor(t={}){const{canvas:e=Pu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const y=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ce,this.toneMapping=ai,this.toneMappingExposure=1;const x=this;let A=!1,T=0,C=0,I=null,b=-1,_=null;const R=new le,D=new le;let L=null;const O=new It(0);let X=0,H=e.width,j=e.height,z=1,tt=null,it=null;const dt=new le(0,0,H,j),Q=new le(0,0,H,j);let bt=!1;const W=new Wo;let J=!1,at=!1;const st=new ie,vt=new ie,kt=new P,Vt=new le,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function ye(){return I===null?z:1}let F=n;function nn(S,N){return e.getContext(S,N)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Do}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",lt,!1),F===null){const N="webgl2";if(F=nn(N,S),F===null)throw nn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Xt,qt,Ct,me,At,w,M,B,$,Z,Y,yt,ct,pt,Kt,et,mt,Lt,Dt,gt,Yt,zt,de,U;function ot(){Xt=new $p(F),Xt.init(),zt=new Um(F,Xt),qt=new Vp(F,Xt,t,zt),Ct=new Lm(F,Xt),qt.reverseDepthBuffer&&p&&Ct.buffers.depth.setReversed(!0),me=new Zp(F),At=new gm,w=new Dm(F,Xt,Ct,At,qt,zt,me),M=new Xp(x),B=new jp(x),$=new rf(F),de=new Hp(F,$),Z=new Kp(F,$,me,de),Y=new t0(F,Z,$,me),Dt=new Qp(F,qt,w),et=new Wp(At),yt=new mm(x,M,B,Xt,qt,de,et),ct=new Gm(x,At),pt=new _m,Kt=new Em(Xt),Lt=new zp(x,M,B,Ct,Y,f,c),mt=new Cm(x,Y,qt),U=new Vm(F,me,qt,Ct),gt=new Gp(F,Xt,me),Yt=new Jp(F,Xt,me),me.programs=yt.programs,x.capabilities=qt,x.extensions=Xt,x.properties=At,x.renderLists=pt,x.shadowMap=mt,x.state=Ct,x.info=me}ot();const q=new zm(x,F);this.xr=q,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const S=Xt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Xt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(S){S!==void 0&&(z=S,this.setSize(H,j,!1))},this.getSize=function(S){return S.set(H,j)},this.setSize=function(S,N,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=S,j=N,e.width=Math.floor(S*z),e.height=Math.floor(N*z),G===!0&&(e.style.width=S+"px",e.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(H*z,j*z).floor()},this.setDrawingBufferSize=function(S,N,G){H=S,j=N,z=G,e.width=Math.floor(S*G),e.height=Math.floor(N*G),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(dt)},this.setViewport=function(S,N,G,V){S.isVector4?dt.set(S.x,S.y,S.z,S.w):dt.set(S,N,G,V),Ct.viewport(R.copy(dt).multiplyScalar(z).round())},this.getScissor=function(S){return S.copy(Q)},this.setScissor=function(S,N,G,V){S.isVector4?Q.set(S.x,S.y,S.z,S.w):Q.set(S,N,G,V),Ct.scissor(D.copy(Q).multiplyScalar(z).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(S){Ct.setScissorTest(bt=S)},this.setOpaqueSort=function(S){tt=S},this.setTransparentSort=function(S){it=S},this.getClearColor=function(S){return S.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(S=!0,N=!0,G=!0){let V=0;if(S){let k=!1;if(I!==null){const nt=I.texture.format;k=nt===Go||nt===Ho||nt===zo}if(k){const nt=I.texture.type,ht=nt===Yn||nt===Ci||nt===Ws||nt===hs||nt===Fo||nt===Oo,_t=Lt.getClearColor(),xt=Lt.getClearAlpha(),Ut=_t.r,Ot=_t.g,Mt=_t.b;ht?(g[0]=Ut,g[1]=Ot,g[2]=Mt,g[3]=xt,F.clearBufferuiv(F.COLOR,0,g)):(v[0]=Ut,v[1]=Ot,v[2]=Mt,v[3]=xt,F.clearBufferiv(F.COLOR,0,v))}else V|=F.COLOR_BUFFER_BIT}N&&(V|=F.DEPTH_BUFFER_BIT),G&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),pt.dispose(),Kt.dispose(),At.dispose(),M.dispose(),B.dispose(),Y.dispose(),de.dispose(),U.dispose(),yt.dispose(),q.dispose(),q.removeEventListener("sessionstart",hc),q.removeEventListener("sessionend",uc),li.stop()};function K(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const S=me.autoReset,N=mt.enabled,G=mt.autoUpdate,V=mt.needsUpdate,k=mt.type;ot(),me.autoReset=S,mt.enabled=N,mt.autoUpdate=G,mt.needsUpdate=V,mt.type=k}function lt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ft(S){const N=S.target;N.removeEventListener("dispose",Ft),Me(N)}function Me(S){Ie(S),At.remove(S)}function Ie(S){const N=At.get(S).programs;N!==void 0&&(N.forEach(function(G){yt.releaseProgram(G)}),S.isShaderMaterial&&yt.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,G,V,k,nt){N===null&&(N=xe);const ht=k.isMesh&&k.matrixWorld.determinant()<0,_t=Hh(S,N,G,V,k);Ct.setMaterial(V,ht);let xt=G.index,Ut=1;if(V.wireframe===!0){if(xt=Z.getWireframeAttribute(G),xt===void 0)return;Ut=2}const Ot=G.drawRange,Mt=G.attributes.position;let Qt=Ot.start*Ut,pe=(Ot.start+Ot.count)*Ut;nt!==null&&(Qt=Math.max(Qt,nt.start*Ut),pe=Math.min(pe,(nt.start+nt.count)*Ut)),xt!==null?(Qt=Math.max(Qt,0),pe=Math.min(pe,xt.count)):Mt!=null&&(Qt=Math.max(Qt,0),pe=Math.min(pe,Mt.count));const ge=pe-Qt;if(ge<0||ge===1/0)return;de.setup(k,V,_t,G,xt);let Ve,te=gt;if(xt!==null&&(Ve=$.get(xt),te=Yt,te.setIndex(Ve)),k.isMesh)V.wireframe===!0?(Ct.setLineWidth(V.wireframeLinewidth*ye()),te.setMode(F.LINES)):te.setMode(F.TRIANGLES);else if(k.isLine){let St=V.linewidth;St===void 0&&(St=1),Ct.setLineWidth(St*ye()),k.isLineSegments?te.setMode(F.LINES):k.isLineLoop?te.setMode(F.LINE_LOOP):te.setMode(F.LINE_STRIP)}else k.isPoints?te.setMode(F.POINTS):k.isSprite&&te.setMode(F.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)te.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))te.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const St=k._multiDrawStarts,Dn=k._multiDrawCounts,ee=k._multiDrawCount,fn=xt?$.get(xt).bytesPerElement:1,Ui=At.get(V).currentProgram.getUniforms();for(let $e=0;$e<ee;$e++)Ui.setValue(F,"_gl_DrawID",$e),te.render(St[$e]/fn,Dn[$e])}else if(k.isInstancedMesh)te.renderInstances(Qt,ge,k.count);else if(G.isInstancedBufferGeometry){const St=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Dn=Math.min(G.instanceCount,St);te.renderInstances(Qt,ge,Dn)}else te.render(Qt,ge)};function se(S,N,G){S.transparent===!0&&S.side===Ye&&S.forceSinglePass===!1?(S.side=Fe,S.needsUpdate=!0,Ks(S,N,G),S.side=oi,S.needsUpdate=!0,Ks(S,N,G),S.side=Ye):Ks(S,N,G)}this.compile=function(S,N,G=null){G===null&&(G=S),d=Kt.get(G),d.init(N),E.push(d),G.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),S!==G&&S.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights();const V=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const nt=k.material;if(nt)if(Array.isArray(nt))for(let ht=0;ht<nt.length;ht++){const _t=nt[ht];se(_t,G,k),V.add(_t)}else se(nt,G,k),V.add(nt)}),E.pop(),d=null,V},this.compileAsync=function(S,N,G=null){const V=this.compile(S,N,G);return new Promise(k=>{function nt(){if(V.forEach(function(ht){At.get(ht).currentProgram.isReady()&&V.delete(ht)}),V.size===0){k(S);return}setTimeout(nt,10)}Xt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let un=null;function In(S){un&&un(S)}function hc(){li.stop()}function uc(){li.start()}const li=new eh;li.setAnimationLoop(In),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(S){un=S,q.setAnimationLoop(S),S===null?li.stop():li.start()},q.addEventListener("sessionstart",hc),q.addEventListener("sessionend",uc),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,N,I),d=Kt.get(S,E.length),d.init(N),E.push(d),vt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),W.setFromProjectionMatrix(vt),at=this.localClippingEnabled,J=et.init(this.clippingPlanes,at),m=pt.get(S,y.length),m.init(),y.push(m),q.enabled===!0&&q.isPresenting===!0){const nt=x.xr.getDepthSensingMesh();nt!==null&&Jr(nt,N,-1/0,x.sortObjects)}Jr(S,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(tt,it),$t=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,$t&&Lt.addToRenderList(m,S),this.info.render.frame++,J===!0&&et.beginShadows();const G=d.state.shadowsArray;mt.render(G,S,N),J===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,k=m.transmissive;if(d.setupLights(),N.isArrayCamera){const nt=N.cameras;if(k.length>0)for(let ht=0,_t=nt.length;ht<_t;ht++){const xt=nt[ht];dc(V,k,S,xt)}$t&&Lt.render(S);for(let ht=0,_t=nt.length;ht<_t;ht++){const xt=nt[ht];fc(m,S,xt,xt.viewport)}}else k.length>0&&dc(V,k,S,N),$t&&Lt.render(S),fc(m,S,N);I!==null&&(w.updateMultisampleRenderTarget(I),w.updateRenderTargetMipmap(I)),S.isScene===!0&&S.onAfterRender(x,S,N),de.resetDefaultState(),b=-1,_=null,E.pop(),E.length>0?(d=E[E.length-1],J===!0&&et.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Jr(S,N,G,V){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||W.intersectsSprite(S)){V&&Vt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(vt);const ht=Y.update(S),_t=S.material;_t.visible&&m.push(S,ht,_t,G,Vt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||W.intersectsObject(S))){const ht=Y.update(S),_t=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Vt.copy(S.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Vt.copy(ht.boundingSphere.center)),Vt.applyMatrix4(S.matrixWorld).applyMatrix4(vt)),Array.isArray(_t)){const xt=ht.groups;for(let Ut=0,Ot=xt.length;Ut<Ot;Ut++){const Mt=xt[Ut],Qt=_t[Mt.materialIndex];Qt&&Qt.visible&&m.push(S,ht,Qt,G,Vt.z,Mt)}}else _t.visible&&m.push(S,ht,_t,G,Vt.z,null)}}const nt=S.children;for(let ht=0,_t=nt.length;ht<_t;ht++)Jr(nt[ht],N,G,V)}function fc(S,N,G,V){const k=S.opaque,nt=S.transmissive,ht=S.transparent;d.setupLightsView(G),J===!0&&et.setGlobalState(x.clippingPlanes,G),V&&Ct.viewport(R.copy(V)),k.length>0&&$s(k,N,G),nt.length>0&&$s(nt,N,G),ht.length>0&&$s(ht,N,G),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function dc(S,N,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new Pi(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?qs:Yn,minFilter:bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const nt=d.state.transmissionRenderTarget[V.id],ht=V.viewport||R;nt.setSize(ht.z,ht.w);const _t=x.getRenderTarget();x.setRenderTarget(nt),x.getClearColor(O),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),$t&&Lt.render(G);const xt=x.toneMapping;x.toneMapping=ai;const Ut=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),J===!0&&et.setGlobalState(x.clippingPlanes,V),$s(S,G,V),w.updateMultisampleRenderTarget(nt),w.updateRenderTargetMipmap(nt),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Mt=0,Qt=N.length;Mt<Qt;Mt++){const pe=N[Mt],ge=pe.object,Ve=pe.geometry,te=pe.material,St=pe.group;if(te.side===Ye&&ge.layers.test(V.layers)){const Dn=te.side;te.side=Fe,te.needsUpdate=!0,pc(ge,G,V,Ve,te,St),te.side=Dn,te.needsUpdate=!0,Ot=!0}}Ot===!0&&(w.updateMultisampleRenderTarget(nt),w.updateRenderTargetMipmap(nt))}x.setRenderTarget(_t),x.setClearColor(O,X),Ut!==void 0&&(V.viewport=Ut),x.toneMapping=xt}function $s(S,N,G){const V=N.isScene===!0?N.overrideMaterial:null;for(let k=0,nt=S.length;k<nt;k++){const ht=S[k],_t=ht.object,xt=ht.geometry,Ut=V===null?ht.material:V,Ot=ht.group;_t.layers.test(G.layers)&&pc(_t,N,G,xt,Ut,Ot)}}function pc(S,N,G,V,k,nt){S.onBeforeRender(x,N,G,V,k,nt),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(x,N,G,V,S,nt),k.transparent===!0&&k.side===Ye&&k.forceSinglePass===!1?(k.side=Fe,k.needsUpdate=!0,x.renderBufferDirect(G,N,V,k,S,nt),k.side=oi,k.needsUpdate=!0,x.renderBufferDirect(G,N,V,k,S,nt),k.side=Ye):x.renderBufferDirect(G,N,V,k,S,nt),S.onAfterRender(x,N,G,V,k,nt)}function Ks(S,N,G){N.isScene!==!0&&(N=xe);const V=At.get(S),k=d.state.lights,nt=d.state.shadowsArray,ht=k.state.version,_t=yt.getParameters(S,k.state,nt,N,G),xt=yt.getProgramCacheKey(_t);let Ut=V.programs;V.environment=S.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(S.isMeshStandardMaterial?B:M).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Ut===void 0&&(S.addEventListener("dispose",Ft),Ut=new Map,V.programs=Ut);let Ot=Ut.get(xt);if(Ot!==void 0){if(V.currentProgram===Ot&&V.lightsStateVersion===ht)return gc(S,_t),Ot}else _t.uniforms=yt.getUniforms(S),S.onBeforeCompile(_t,x),Ot=yt.acquireProgram(_t,xt),Ut.set(xt,Ot),V.uniforms=_t.uniforms;const Mt=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Mt.clippingPlanes=et.uniform),gc(S,_t),V.needsLights=Vh(S),V.lightsStateVersion=ht,V.needsLights&&(Mt.ambientLightColor.value=k.state.ambient,Mt.lightProbe.value=k.state.probe,Mt.directionalLights.value=k.state.directional,Mt.directionalLightShadows.value=k.state.directionalShadow,Mt.spotLights.value=k.state.spot,Mt.spotLightShadows.value=k.state.spotShadow,Mt.rectAreaLights.value=k.state.rectArea,Mt.ltc_1.value=k.state.rectAreaLTC1,Mt.ltc_2.value=k.state.rectAreaLTC2,Mt.pointLights.value=k.state.point,Mt.pointLightShadows.value=k.state.pointShadow,Mt.hemisphereLights.value=k.state.hemi,Mt.directionalShadowMap.value=k.state.directionalShadowMap,Mt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Mt.spotShadowMap.value=k.state.spotShadowMap,Mt.spotLightMatrix.value=k.state.spotLightMatrix,Mt.spotLightMap.value=k.state.spotLightMap,Mt.pointShadowMap.value=k.state.pointShadowMap,Mt.pointShadowMatrix.value=k.state.pointShadowMatrix),V.currentProgram=Ot,V.uniformsList=null,Ot}function mc(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=Pr.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function gc(S,N){const G=At.get(S);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Hh(S,N,G,V,k){N.isScene!==!0&&(N=xe),w.resetTextureUnits();const nt=N.fog,ht=V.isMeshStandardMaterial?N.environment:null,_t=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ps,xt=(V.isMeshStandardMaterial?B:M).get(V.envMap||ht),Ut=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ot=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Mt=!!G.morphAttributes.position,Qt=!!G.morphAttributes.normal,pe=!!G.morphAttributes.color;let ge=ai;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ge=x.toneMapping);const Ve=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,te=Ve!==void 0?Ve.length:0,St=At.get(V),Dn=d.state.lights;if(J===!0&&(at===!0||S!==_)){const sn=S===_&&V.id===b;et.setState(V,S,sn)}let ee=!1;V.version===St.__version?(St.needsLights&&St.lightsStateVersion!==Dn.state.version||St.outputColorSpace!==_t||k.isBatchedMesh&&St.batching===!1||!k.isBatchedMesh&&St.batching===!0||k.isBatchedMesh&&St.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&St.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&St.instancing===!1||!k.isInstancedMesh&&St.instancing===!0||k.isSkinnedMesh&&St.skinning===!1||!k.isSkinnedMesh&&St.skinning===!0||k.isInstancedMesh&&St.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&St.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&St.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&St.instancingMorph===!1&&k.morphTexture!==null||St.envMap!==xt||V.fog===!0&&St.fog!==nt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==et.numPlanes||St.numIntersection!==et.numIntersection)||St.vertexAlphas!==Ut||St.vertexTangents!==Ot||St.morphTargets!==Mt||St.morphNormals!==Qt||St.morphColors!==pe||St.toneMapping!==ge||St.morphTargetsCount!==te)&&(ee=!0):(ee=!0,St.__version=V.version);let fn=St.currentProgram;ee===!0&&(fn=Ks(V,N,k));let Ui=!1,$e=!1,Ms=!1;const ve=fn.getUniforms(),Mn=St.uniforms;if(Ct.useProgram(fn.program)&&(Ui=!0,$e=!0,Ms=!0),V.id!==b&&(b=V.id,$e=!0),Ui||_!==S){Ct.buffers.depth.getReversed()?(st.copy(S.projectionMatrix),Iu(st),Du(st),ve.setValue(F,"projectionMatrix",st)):ve.setValue(F,"projectionMatrix",S.projectionMatrix),ve.setValue(F,"viewMatrix",S.matrixWorldInverse);const $n=ve.map.cameraPosition;$n!==void 0&&$n.setValue(F,kt.setFromMatrixPosition(S.matrixWorld)),qt.logarithmicDepthBuffer&&ve.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ve.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),_!==S&&(_=S,$e=!0,Ms=!0)}if(k.isSkinnedMesh){ve.setOptional(F,k,"bindMatrix"),ve.setOptional(F,k,"bindMatrixInverse");const sn=k.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),ve.setValue(F,"boneTexture",sn.boneTexture,w))}k.isBatchedMesh&&(ve.setOptional(F,k,"batchingTexture"),ve.setValue(F,"batchingTexture",k._matricesTexture,w),ve.setOptional(F,k,"batchingIdTexture"),ve.setValue(F,"batchingIdTexture",k._indirectTexture,w),ve.setOptional(F,k,"batchingColorTexture"),k._colorsTexture!==null&&ve.setValue(F,"batchingColorTexture",k._colorsTexture,w));const ys=G.morphAttributes;if((ys.position!==void 0||ys.normal!==void 0||ys.color!==void 0)&&Dt.update(k,G,fn),($e||St.receiveShadow!==k.receiveShadow)&&(St.receiveShadow=k.receiveShadow,ve.setValue(F,"receiveShadow",k.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Mn.envMap.value=xt,Mn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(Mn.envMapIntensity.value=N.environmentIntensity),$e&&(ve.setValue(F,"toneMappingExposure",x.toneMappingExposure),St.needsLights&&Gh(Mn,Ms),nt&&V.fog===!0&&ct.refreshFogUniforms(Mn,nt),ct.refreshMaterialUniforms(Mn,V,z,j,d.state.transmissionRenderTarget[S.id]),Pr.upload(F,mc(St),Mn,w)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Pr.upload(F,mc(St),Mn,w),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ve.setValue(F,"center",k.center),ve.setValue(F,"modelViewMatrix",k.modelViewMatrix),ve.setValue(F,"normalMatrix",k.normalMatrix),ve.setValue(F,"modelMatrix",k.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const sn=V.uniformsGroups;for(let $n=0,Kn=sn.length;$n<Kn;$n++){const vc=sn[$n];U.update(vc,fn),U.bind(vc,fn)}}return fn}function Gh(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Vh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,N,G){At.get(S.texture).__webglTexture=N,At.get(S.depthTexture).__webglTexture=G;const V=At.get(S);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,N){const G=At.get(S);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,G=0){I=S,T=N,C=G;let V=!0,k=null,nt=!1,ht=!1;if(S){const xt=At.get(S);if(xt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(F.FRAMEBUFFER,null),V=!1;else if(xt.__webglFramebuffer===void 0)w.setupRenderTarget(S);else if(xt.__hasExternalTextures)w.rebindTextures(S,At.get(S.texture).__webglTexture,At.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Mt=S.depthTexture;if(xt.__boundDepthTexture!==Mt){if(Mt!==null&&At.has(Mt)&&(S.width!==Mt.image.width||S.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(S)}}const Ut=S.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ht=!0);const Ot=At.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ot[N])?k=Ot[N][G]:k=Ot[N],nt=!0):S.samples>0&&w.useMultisampledRTT(S)===!1?k=At.get(S).__webglMultisampledFramebuffer:Array.isArray(Ot)?k=Ot[G]:k=Ot,R.copy(S.viewport),D.copy(S.scissor),L=S.scissorTest}else R.copy(dt).multiplyScalar(z).floor(),D.copy(Q).multiplyScalar(z).floor(),L=bt;if(Ct.bindFramebuffer(F.FRAMEBUFFER,k)&&V&&Ct.drawBuffers(S,k),Ct.viewport(R),Ct.scissor(D),Ct.setScissorTest(L),nt){const xt=At.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,xt.__webglTexture,G)}else if(ht){const xt=At.get(S.texture),Ut=N||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,xt.__webglTexture,G||0,Ut)}b=-1},this.readRenderTargetPixels=function(S,N,G,V,k,nt,ht){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=At.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ht!==void 0&&(_t=_t[ht]),_t){Ct.bindFramebuffer(F.FRAMEBUFFER,_t);try{const xt=S.texture,Ut=xt.format,Ot=xt.type;if(!qt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-V&&G>=0&&G<=S.height-k&&F.readPixels(N,G,V,k,zt.convert(Ut),zt.convert(Ot),nt)}finally{const xt=I!==null?At.get(I).__webglFramebuffer:null;Ct.bindFramebuffer(F.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(S,N,G,V,k,nt,ht){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=At.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ht!==void 0&&(_t=_t[ht]),_t){const xt=S.texture,Ut=xt.format,Ot=xt.type;if(!qt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=S.width-V&&G>=0&&G<=S.height-k){Ct.bindFramebuffer(F.FRAMEBUFFER,_t);const Mt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Mt),F.bufferData(F.PIXEL_PACK_BUFFER,nt.byteLength,F.STREAM_READ),F.readPixels(N,G,V,k,zt.convert(Ut),zt.convert(Ot),0);const Qt=I!==null?At.get(I).__webglFramebuffer:null;Ct.bindFramebuffer(F.FRAMEBUFFER,Qt);const pe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Lu(F,pe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Mt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,nt),F.deleteBuffer(Mt),F.deleteSync(pe),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,N=null,G=0){S.isTexture!==!0&&(Us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,S=arguments[1]);const V=Math.pow(2,-G),k=Math.floor(S.image.width*V),nt=Math.floor(S.image.height*V),ht=N!==null?N.x:0,_t=N!==null?N.y:0;w.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,G,0,0,ht,_t,k,nt),Ct.unbindTexture()},this.copyTextureToTexture=function(S,N,G=null,V=null,k=0){S.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,S=arguments[1],N=arguments[2],k=arguments[3]||0,G=null);let nt,ht,_t,xt,Ut,Ot,Mt,Qt,pe;const ge=S.isCompressedTexture?S.mipmaps[k]:S.image;G!==null?(nt=G.max.x-G.min.x,ht=G.max.y-G.min.y,_t=G.isBox3?G.max.z-G.min.z:1,xt=G.min.x,Ut=G.min.y,Ot=G.isBox3?G.min.z:0):(nt=ge.width,ht=ge.height,_t=ge.depth||1,xt=0,Ut=0,Ot=0),V!==null?(Mt=V.x,Qt=V.y,pe=V.z):(Mt=0,Qt=0,pe=0);const Ve=zt.convert(N.format),te=zt.convert(N.type);let St;N.isData3DTexture?(w.setTexture3D(N,0),St=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(w.setTexture2DArray(N,0),St=F.TEXTURE_2D_ARRAY):(w.setTexture2D(N,0),St=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);const Dn=F.getParameter(F.UNPACK_ROW_LENGTH),ee=F.getParameter(F.UNPACK_IMAGE_HEIGHT),fn=F.getParameter(F.UNPACK_SKIP_PIXELS),Ui=F.getParameter(F.UNPACK_SKIP_ROWS),$e=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ge.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ge.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,xt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ut),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ot);const Ms=S.isDataArrayTexture||S.isData3DTexture,ve=N.isDataArrayTexture||N.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const Mn=At.get(S),ys=At.get(N),sn=At.get(Mn.__renderTarget),$n=At.get(ys.__renderTarget);Ct.bindFramebuffer(F.READ_FRAMEBUFFER,sn.__webglFramebuffer),Ct.bindFramebuffer(F.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let Kn=0;Kn<_t;Kn++)Ms&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,At.get(S).__webglTexture,k,Ot+Kn),S.isDepthTexture?(ve&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,At.get(N).__webglTexture,k,pe+Kn),F.blitFramebuffer(xt,Ut,nt,ht,Mt,Qt,nt,ht,F.DEPTH_BUFFER_BIT,F.NEAREST)):ve?F.copyTexSubImage3D(St,k,Mt,Qt,pe+Kn,xt,Ut,nt,ht):F.copyTexSubImage2D(St,k,Mt,Qt,pe+Kn,xt,Ut,nt,ht);Ct.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ve?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(St,k,Mt,Qt,pe,nt,ht,_t,Ve,te,ge.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(St,k,Mt,Qt,pe,nt,ht,_t,Ve,ge.data):F.texSubImage3D(St,k,Mt,Qt,pe,nt,ht,_t,Ve,te,ge):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,k,Mt,Qt,nt,ht,Ve,te,ge.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,k,Mt,Qt,ge.width,ge.height,Ve,ge.data):F.texSubImage2D(F.TEXTURE_2D,k,Mt,Qt,nt,ht,Ve,te,ge);F.pixelStorei(F.UNPACK_ROW_LENGTH,Dn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ee),F.pixelStorei(F.UNPACK_SKIP_PIXELS,fn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ui),F.pixelStorei(F.UNPACK_SKIP_IMAGES,$e),k===0&&N.generateMipmaps&&F.generateMipmap(St),Ct.unbindTexture()},this.copyTextureToTexture3D=function(S,N,G=null,V=null,k=0){return S.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,S=arguments[2],N=arguments[3],k=arguments[4]||0),Us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,N,G,V,k)},this.initRenderTarget=function(S){At.get(S).__webglFramebuffer===void 0&&w.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),Ct.unbindTexture()},this.resetState=function(){T=0,C=0,I=null,Ct.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}class qo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=n}clone(){return new qo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Yo extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Wm extends Oe{constructor(t=null,e=1,n=1,s,r,a,o,c,l=He,h=He,u,p){super(null,a,o,c,l,h,s,r,u,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pl extends cn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const $i=new ie,ml=new ie,_r=[],gl=new Di,Xm=new ie,As=new Pt,Rs=new js;class Fs extends Pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new pl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Xm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),gl.copy(t.boundingBox).applyMatrix4($i),this.boundingBox.union(gl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new js),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),Rs.copy(t.boundingSphere).applyMatrix4($i),this.boundingSphere.union(Rs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(As.geometry=this.geometry,As.material=this.material,As.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rs.copy(this.boundingSphere),Rs.applyMatrix4(n),t.ray.intersectsSphere(Rs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$i),ml.multiplyMatrices(n,$i),As.matrixWorld=ml,As.raycast(t,_r);for(let a=0,o=_r.length;a<o;a++){const c=_r[a];c.instanceId=r,c.object=this,e.push(c)}_r.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new pl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wm(new Float32Array(s*this.count),s,this.count,Bo,wn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class qr extends Oe{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],p=n[s+1]-h,f=(a-h)/p;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new ft:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],r=[],a=[],o=new P,c=new ie;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),p<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Pe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Pe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class jo extends Pn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new ft){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=c-this.aX,f=l-this.aY;c=p*h-f*u+this.aX,l=p*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class qm extends jo{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function $o(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let p=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;p*=h,f*=h,s(a,o,p,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const xr=new P,Ra=new $o,Ca=new $o,Pa=new $o;class Ym extends Pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(xr.subVectors(s[0],s[1]).add(s[0]),l=xr);const u=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(xr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=xr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ra.initNonuniformCatmullRom(l.x,u.x,p.x,h.x,g,v,m),Ca.initNonuniformCatmullRom(l.y,u.y,p.y,h.y,g,v,m),Pa.initNonuniformCatmullRom(l.z,u.z,p.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Ra.initCatmullRom(l.x,u.x,p.x,h.x,this.tension),Ca.initCatmullRom(l.y,u.y,p.y,h.y,this.tension),Pa.initCatmullRom(l.z,u.z,p.z,h.z,this.tension));return n.set(Ra.calc(c),Ca.calc(c),Pa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function jm(i,t){const e=1-i;return e*e*t}function $m(i,t){return 2*(1-i)*i*t}function Km(i,t){return i*i*t}function Os(i,t,e,n){return jm(i,t)+$m(i,e)+Km(i,n)}function Jm(i,t){const e=1-i;return e*e*e*t}function Zm(i,t){const e=1-i;return 3*e*e*i*t}function Qm(i,t){return 3*(1-i)*i*i*t}function tg(i,t){return i*i*i*t}function Bs(i,t,e,n,s){return Jm(i,t)+Zm(i,e)+Qm(i,n)+tg(i,s)}class lh extends Pn{constructor(t=new ft,e=new ft,n=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ft){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Bs(t,s.x,r.x,a.x,o.x),Bs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class eg extends Pn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Bs(t,s.x,r.x,a.x,o.x),Bs(t,s.y,r.y,a.y,o.y),Bs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hh extends Pn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ng extends Pn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uh extends Pn{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Os(t,s.x,r.x,a.x),Os(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ig extends Pn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Os(t,s.x,r.x,a.x),Os(t,s.y,r.y,a.y),Os(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fh extends Pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(vl(o,c.x,l.x,h.x,u.x),vl(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ft().fromArray(s))}return this}}var _l=Object.freeze({__proto__:null,ArcCurve:qm,CatmullRomCurve3:Ym,CubicBezierCurve:lh,CubicBezierCurve3:eg,EllipseCurve:jo,LineCurve:hh,LineCurve3:ng,QuadraticBezierCurve:uh,QuadraticBezierCurve3:ig,SplineCurve:fh});class sg extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _l[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new _l[s.type]().fromJSON(s))}return this}}class rg extends sg{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new hh(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new uh(this.currentPoint.clone(),new ft(t,e),new ft(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new lh(this.currentPoint.clone(),new ft(t,e),new ft(n,s),new ft(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new fh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new jo(t,e,n,s,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ko extends Ge{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Pe(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,u=new P,p=new ft,f=new P,g=new P,v=new P;let m=0,d=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,d=t[y+1].y-t[y].y,f.x=d*1,f.y=-m,f.z=d*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[y+1].x-t[y].x,d=t[y+1].y-t[y].y,f.x=d*1,f.y=-m,f.z=d*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let y=0;y<=e;y++){const E=n+y*h*s,x=Math.sin(E),A=Math.cos(E);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*x,u.y=t[T].y,u.z=t[T].x*A,a.push(u.x,u.y,u.z),p.x=y/e,p.y=T/(t.length-1),o.push(p.x,p.y);const C=c[3*T+0]*x,I=c[3*T+1],b=c[3*T+0]*A;l.push(C,I,b)}}for(let y=0;y<e;y++)for(let E=0;E<t.length-1;E++){const x=E+y*t.length,A=x,T=x+t.length,C=x+t.length+1,I=x+1;r.push(A,T,I),r.push(C,I,T)}this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("uv",new Zt(o,2)),this.setAttribute("normal",new Zt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ko(t.points,t.segments,t.phiStart,t.phiLength)}}class Yr extends Ko{constructor(t=1,e=1,n=4,s=8){const r=new rg;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Yr(t.radius,t.length,t.capSegments,t.radialSegments)}}class Ei extends Ge{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new P,h=new ft;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,p=3;u<=e;u++,p+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[p]/t+1)/2,h.y=(a[p+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(o,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ei(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ae extends Ge{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],p=[],f=[];let g=0;const v=[],m=n/2;let d=0;y(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(p,3)),this.setAttribute("uv",new Zt(f,2));function y(){const x=new P,A=new P;let T=0;const C=(e-t)/n;for(let I=0;I<=r;I++){const b=[],_=I/r,R=_*(e-t)+t;for(let D=0;D<=s;D++){const L=D/s,O=L*c+o,X=Math.sin(O),H=Math.cos(O);A.x=R*X,A.y=-_*n+m,A.z=R*H,u.push(A.x,A.y,A.z),x.set(X,C,H).normalize(),p.push(x.x,x.y,x.z),f.push(L,1-_),b.push(g++)}v.push(b)}for(let I=0;I<s;I++)for(let b=0;b<r;b++){const _=v[b][I],R=v[b+1][I],D=v[b+1][I+1],L=v[b][I+1];(t>0||b!==0)&&(h.push(_,R,L),T+=3),(e>0||b!==r-1)&&(h.push(R,D,L),T+=3)}l.addGroup(d,T,0),d+=T}function E(x){const A=g,T=new ft,C=new P;let I=0;const b=x===!0?t:e,_=x===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*_,0),p.push(0,_,0),f.push(.5,.5),g++;const R=g;for(let D=0;D<=s;D++){const O=D/s*c+o,X=Math.cos(O),H=Math.sin(O);C.x=b*H,C.y=m*_,C.z=b*X,u.push(C.x,C.y,C.z),p.push(0,_,0),T.x=X*.5+.5,T.y=H*.5*_+.5,f.push(T.x,T.y),g++}for(let D=0;D<s;D++){const L=A+D,O=R+D;x===!0?h.push(O,O+1,L):h.push(O+1,O,L),I+=3}l.addGroup(d,I,x===!0?1:2),d+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ae(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Jo extends ae{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Jo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zo extends Ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const E=new P,x=new P,A=new P;for(let T=0;T<e.length;T+=3)f(e[T+0],E),f(e[T+1],x),f(e[T+2],A),c(E,x,A,y)}function c(y,E,x,A){const T=A+1,C=[];for(let I=0;I<=T;I++){C[I]=[];const b=y.clone().lerp(x,I/T),_=E.clone().lerp(x,I/T),R=T-I;for(let D=0;D<=R;D++)D===0&&I===T?C[I][D]=b:C[I][D]=b.clone().lerp(_,D/R)}for(let I=0;I<T;I++)for(let b=0;b<2*(T-I)-1;b++){const _=Math.floor(b/2);b%2===0?(p(C[I][_+1]),p(C[I+1][_]),p(C[I][_])):(p(C[I][_+1]),p(C[I+1][_+1]),p(C[I+1][_]))}}function l(y){const E=new P;for(let x=0;x<r.length;x+=3)E.x=r[x+0],E.y=r[x+1],E.z=r[x+2],E.normalize().multiplyScalar(y),r[x+0]=E.x,r[x+1]=E.y,r[x+2]=E.z}function h(){const y=new P;for(let E=0;E<r.length;E+=3){y.x=r[E+0],y.y=r[E+1],y.z=r[E+2];const x=m(y)/2/Math.PI+.5,A=d(y)/Math.PI+.5;a.push(x,1-A)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){const E=a[y+0],x=a[y+2],A=a[y+4],T=Math.max(E,x,A),C=Math.min(E,x,A);T>.9&&C<.1&&(E<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),A<.2&&(a[y+4]+=1))}}function p(y){r.push(y.x,y.y,y.z)}function f(y,E){const x=y*3;E.x=t[x+0],E.y=t[x+1],E.z=t[x+2]}function g(){const y=new P,E=new P,x=new P,A=new P,T=new ft,C=new ft,I=new ft;for(let b=0,_=0;b<r.length;b+=9,_+=6){y.set(r[b+0],r[b+1],r[b+2]),E.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),T.set(a[_+0],a[_+1]),C.set(a[_+2],a[_+3]),I.set(a[_+4],a[_+5]),A.copy(y).add(E).add(x).divideScalar(3);const R=m(A);v(T,_+0,y,R),v(C,_+2,E,R),v(I,_+4,x,R)}}function v(y,E,x,A){A<0&&y.x===1&&(a[E]=y.x-1),x.x===0&&x.z===0&&(a[E]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zo(t.vertices,t.indices,t.radius,t.details)}}class zs extends Zo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new zs(t.radius,t.detail)}}class jr extends Ge{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let u=t;const p=(e-t)/s,f=new P,g=new ft;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const d=r+m/n*a;f.x=u*Math.cos(d),f.y=u*Math.sin(d),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=p}for(let v=0;v<s;v++){const m=v*(n+1);for(let d=0;d<n;d++){const y=d+m,E=y,x=y+n+1,A=y+n+2,T=y+1;o.push(E,x,T),o.push(x,A,T)}}this.setIndex(o),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Nt extends Ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new P,p=new P,f=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){const y=[],E=d/n;let x=0;d===0&&a===0?x=.5/e:d===n&&c===Math.PI&&(x=-.5/e);for(let A=0;A<=e;A++){const T=A/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+E*o),u.y=t*Math.cos(a+E*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+E*o),g.push(u.x,u.y,u.z),p.copy(u).normalize(),v.push(p.x,p.y,p.z),m.push(T+x,1-E),y.push(l++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<e;y++){const E=h[d][y+1],x=h[d][y],A=h[d+1][y],T=h[d+1][y+1];(d!==0||a>0)&&f.push(E,x,T),(d!==n-1||c<Math.PI)&&f.push(x,A,T)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class on extends Ge{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new P,u=new P,p=new P;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),p.subVectors(u,h).normalize(),c.push(p.x,p.y,p.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,d=(s+1)*(f-1)+g,y=(s+1)*f+g;a.push(v,m,y),a.push(m,d,y)}this.setIndex(a),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new on(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class en extends gs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vo,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Hn extends gs{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vo,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qo extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class dh extends Qo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const La=new ie,xl=new P,Ml=new P;class ph{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wo,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;xl.setFromMatrixPosition(t.matrixWorld),e.position.copy(xl),Ml.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ml),e.updateMatrixWorld(),La.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(La)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const yl=new ie,Cs=new P,Ia=new P;class ag extends ph{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Cs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Cs),Ia.copy(n.position),Ia.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ia),n.updateMatrixWorld(),s.makeTranslation(-Cs.x,-Cs.y,-Cs.z),yl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yl)}}class og extends Qo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ag}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class cg extends ph{constructor(){super(new nh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $r extends Qo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new cg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Do}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Do);const Re={jab:{name:"Jab",pose:"jab",startup:.07,active:.06,recovery:.14,dmg:7,reach:1.25,level:"high",hitstun:.28,push:1.5},chop:{name:"Knife Chop",pose:"chop",startup:.1,active:.06,recovery:.16,dmg:9,reach:1.2,level:"mid",hitstun:.3,push:1.8},palm:{name:"Palm Strike",pose:"palm",startup:.09,active:.07,recovery:.18,dmg:8,reach:1.35,level:"mid",hitstun:.3,push:3.2},frontKick:{name:"Front Kick",pose:"frontKick",startup:.12,active:.08,recovery:.2,dmg:11,reach:1.5,level:"mid",hitstun:.34,push:3},roundhouse:{name:"Roundhouse",pose:"roundhouse",startup:.15,active:.08,recovery:.24,dmg:13,reach:1.6,level:"high",hitstun:.38,push:3.5},knee:{name:"Knee Strike",pose:"knee",startup:.1,active:.07,recovery:.18,dmg:11,reach:1,level:"mid",hitstun:.36,push:2,launch:5.5},haymaker:{name:"Haymaker",pose:"haymaker",startup:.22,active:.08,recovery:.32,dmg:20,reach:1.45,level:"high",hitstun:.5,push:9,knockdown:!0,heavy:!0,wallBounce:!0,lunge:2.5},uppercut:{name:"Launcher Uppercut",pose:"uppercut",startup:.16,active:.08,recovery:.3,dmg:15,reach:1.15,level:"mid",hitstun:.5,push:1.2,launch:10,heavy:!0,lunge:1.5},headbutt:{name:"Headbutt",pose:"headbutt",startup:.14,active:.07,recovery:.26,dmg:17,reach:1.05,level:"high",hitstun:.5,push:4,heavy:!0,lunge:2},backfist:{name:"Spinning Backfist",pose:"backfist",startup:.18,active:.08,recovery:.26,dmg:16,reach:1.55,level:"high",hitstun:.45,push:5,heavy:!0,spin:!0},elbowDash:{name:"Dashing Elbow",pose:"elbow",startup:.13,active:.12,recovery:.24,dmg:14,reach:1.1,level:"mid",hitstun:.45,push:5,lunge:7,heavy:!0},sweep:{name:"Leg Sweep",pose:"sweep",startup:.16,active:.1,recovery:.3,dmg:11,reach:1.6,level:"low",hitstun:.5,push:2,knockdown:!0,spin:!0},lowKick:{name:"Shin Kick",pose:"lowKick",startup:.09,active:.06,recovery:.16,dmg:8,reach:1.4,level:"low",hitstun:.3,push:1.5},slide:{name:"Baseball Slide",pose:"slide",startup:.12,active:.2,recovery:.32,dmg:12,reach:1.3,level:"low",hitstun:.5,push:3,knockdown:!0,lunge:8}},mh={wreckingBall:{kind:"charge",name:"Wrecking Ball",pose:"haymaker",startup:.3,active:.4,recovery:.4,dmg:34,reach:1.5,level:"mid",hitstun:.6,push:14,knockdown:!0,heavy:!0,wallBounce:!0,lunge:10,armor:!0,color:16733491},thunderFlurry:{kind:"flurry",name:"Thunder Flurry",pose:"frontKick",startup:.12,active:.7,recovery:.35,dmg:6,reach:1.6,level:"mid",hitstun:.3,push:.8,hits:[0,.12,.24,.36,.5,.66],finisherLaunch:11,lunge:3.5,color:6737151},arcaneOrb:{kind:"projectile",name:"Arcane Orb",pose:"cast",startup:.22,active:.05,recovery:.35,dmg:26,level:"high",hitstun:.6,push:6,knockdown:!0,proj:{speed:11,size:.45,y:1.4,life:2},color:11563263},rocketFist:{kind:"projectile",name:"Rocket Fist",pose:"cast",startup:.3,active:.05,recovery:.45,dmg:25,level:"mid",hitstun:.6,push:9,knockdown:!0,wallBounce:!0,proj:{speed:16,size:.35,y:1.15,life:1.4},color:16755234},cannonball:{kind:"projectile",name:"Cannonball",pose:"cast",startup:.3,active:.05,recovery:.45,dmg:32,level:"mid",hitstun:.6,push:7,launch:9,proj:{speed:7,size:.55,y:1.6,life:3,arc:7},color:3355443},shadowStep:{kind:"teleport",name:"Shadow Step",pose:"backfist",startup:.25,active:.12,recovery:.3,dmg:28,reach:1.6,level:"mid",hitstun:.6,push:6,launch:8,unblockable:!0,color:10040319},bearHug:{kind:"grab",name:"Bear Hug Slam",pose:"grab",startup:.12,active:.16,recovery:.45,dmg:40,reach:1.5,level:"high",hitstun:.6,push:3,knockdown:!0,heavy:!0,color:13404228},flameUppercut:{kind:"rising",name:"Flame Uppercut",pose:"uppercut",startup:.1,active:.45,recovery:.4,dmg:10,reach:1.3,level:"mid",hitstun:.4,push:1,hits:[0,.14,.28],finisherLaunch:12,rise:10,lunge:2,color:16738816},thunderSlam:{kind:"slam",name:"Earthquake Slam",pose:"slam",startup:.2,active:.1,recovery:.45,dmg:30,reach:3.2,level:"low",hitstun:.6,push:5,knockdown:!0,heavy:!0,unblockable:!0,rise:11,color:16769126}};function lg(i){const t=i.stats;return{maxHp:75+t.health*7,dmgMult:.9+t.power*.05,walk:2+t.speed*.2,timeMult:1.25-t.speed*.05,reachMult:.88+t.reach*.025,weight:.8+t.power*.03+t.health*.02}}const Ps=new P;function an(i,t,e,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Ps.copy(t),Ps[n]=0,Ps.normalize();const l=.5*a/(a+o),h=1-Ps.angleTo(i)/c;return Math.sign(Ps[e])===1?h*l:o/(a+o)+l+l*(1-h)}class Sn extends Wt{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new P,c=new P,l=new P(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,p=this.attributes.uv.array,f=h.length/6,g=new P,v=.5/s;for(let m=0,d=0;m<h.length;m+=3,d+=2)switch(o.fromArray(h,m),c.copy(o),c.x-=Math.sign(c.x)*v,c.y-=Math.sign(c.y)*v,c.z-=Math.sign(c.z)*v,c.normalize(),h[m+0]=l.x*Math.sign(o.x)+c.x*r,h[m+1]=l.y*Math.sign(o.y)+c.y*r,h[m+2]=l.z*Math.sign(o.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),p[d+0]=an(g,c,"z","y",r,n),p[d+1]=1-an(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),p[d+0]=1-an(g,c,"z","y",r,n),p[d+1]=1-an(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),p[d+0]=1-an(g,c,"x","z",r,t),p[d+1]=an(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),p[d+0]=1-an(g,c,"x","z",r,t),p[d+1]=1-an(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),p[d+0]=1-an(g,c,"x","y",r,t),p[d+1]=1-an(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),p[d+0]=an(g,c,"x","y",r,t),p[d+1]=1-an(g,c,"y","x",r,e);break}}}const Ht=(i,t={})=>new en({color:i,roughness:.6,metalness:0,...t});function _s(i,t=256,e=128){const n=document.createElement("canvas");n.width=t,n.height=e,i(n.getContext("2d"),t,e);const s=new qr(n);return s.colorSpace=Ce,s.anisotropy=4,s}function Rt(i,t,e=0,n=0,s=0){const r=new Pt(i,t);return r.position.set(e,n,s),r.castShadow=!0,r}const Da={},gi=(i,t,e,n)=>Da[i]||(Da[i]=_s(t,e,n)),ns={wine(){const i=new ce,t=Ht(3804438,{roughness:.15,metalness:.1});i.add(Rt(new ae(.075,.075,.3,16),t,0,0,0)),i.add(Rt(new ae(.03,.07,.08,16),t,0,.19,0)),i.add(Rt(new ae(.028,.028,.12,12),t,0,.28,0)),i.add(Rt(new ae(.031,.031,.05,12),Ht(12066858),0,.33,0));const e=gi("wine",(n,s,r)=>{n.fillStyle="#efe6cf",n.fillRect(0,0,s,r),n.fillStyle="#5a1a1a",n.font="bold 34px Georgia",n.textAlign="center",n.fillText("VINO",s/2,50),n.font="22px Georgia",n.fillText("ROSSO",s/2,84),n.fillRect(30,100,s-60,4)});return i.add(Rt(new ae(.077,.077,.14,16,1,!0,-.9,1.8),Ht(16777215,{map:e}),0,-.02,0)),i},canesBag(){const i=new ce,t=Ht(13146716,{roughness:.9});i.add(Rt(new Sn(.26,.3,.14,2,.02),t,0,-.18,0)),i.add(Rt(new on(.06,.012,6,12,Math.PI),t,0,-.03,0));const e=gi("canes",(s,r,a)=>{s.fillStyle="#c89a5c",s.fillRect(0,0,r,a),s.fillStyle="#c8102e",s.beginPath(),s.ellipse(r/2,a/2,r*.45,a*.36,0,0,Math.PI*2),s.fill(),s.fillStyle="#fff",s.font="italic bold 52px Georgia",s.textAlign="center",s.textBaseline="middle",s.fillText("Cane's",r/2,a/2+2)}),n=Rt(new xn(.22,.11),Ht(16777215,{map:e}),0,-.2,.0715);return i.add(n),i},kfcBucket(){const i=new ce,t=gi("kfc",(n,s,r)=>{for(let a=0;a<16;a++)n.fillStyle=a%2?"#ffffff":"#c8102e",n.fillRect(a*s/16,0,s/16+1,r);n.fillStyle="#fff",n.fillRect(s*.36,r*.25,s*.28,r*.5),n.fillStyle="#c8102e",n.font="bold 30px Arial",n.textAlign="center",n.textBaseline="middle",n.fillText("KFC",s/2,r/2)},512,128);i.add(Rt(new ae(.15,.11,.24,20),[Ht(16777215,{map:t}),Ht(13111342),Ht(13111342)],0,-.16,0));const e=Ht(13206062,{roughness:.9});for(const[n,s]of[[-.06,.03],[.05,-.02],[0,.07],[.07,.06],[-.05,-.06]])i.add(Rt(new Nt(.06,8,6),e,n,-.02+Math.random()*.03,s));return i},iphone(){const i=new ce;i.add(Rt(new Sn(.11,.22,.02,2,.008),Ht(1710623,{roughness:.3,metalness:.5})));const t=gi("phone",(e,n,s)=>{const r=e.createLinearGradient(0,0,n,s);r.addColorStop(0,"#5ab4ff"),r.addColorStop(1,"#b070ff"),e.fillStyle=r,e.fillRect(0,0,n,s);for(let a=0;a<4;a++)for(let o=0;o<6;o++)e.fillStyle="rgba(255,255,255,0.75)",e.fillRect(14+a*30,30+o*34,18,18)},128,256);return i.add(Rt(new xn(.095,.2),new ke({map:t,toneMapped:!1}),0,0,.0105)),i},vape(){const i=new ce;return i.add(Rt(new Sn(.06,.16,.035,2,.01),Ht(16732064,{roughness:.35}))),i.add(Rt(new Sn(.06,.06,.036,2,.01),Ht(16767053,{roughness:.35}),0,-.06,0)),i.add(Rt(new ae(.012,.016,.04,8),Ht(2236962),0,.1,0)),i},burger(){const i=new ce,t=Ht(13666874,{roughness:.7}),e=Rt(new Nt(.15,16,10,0,Math.PI*2,0,Math.PI/2),t,0,.05,0);e.scale.y=.75,i.add(e),i.add(Rt(new ae(.16,.16,.035,18),Ht(16763194),0,.035,0)),i.add(Rt(new ae(.155,.155,.05,18),Ht(4860440,{roughness:.95}),0,-.005,0)),i.add(Rt(new ae(.165,.165,.02,18),Ht(5025616),0,-.035,0)),i.add(Rt(new ae(.15,.14,.05,18),t,0,-.07,0));for(let n=0;n<8;n++){const s=n*.8;i.add(Rt(new Nt(.008,4,3),Ht(16774084),Math.cos(s)*.08,.13,Math.sin(s)*.08))}return i},clickbomb(i=!1){const t=new ce,e=i?.34:.17;t.add(Rt(new Nt(e,18,14),Ht(i?13111342:1710623,{roughness:.35,metalness:.2}))),t.add(Rt(new ae(e*.3,e*.3,e*.25,10),Ht(7829367,{metalness:.6,roughness:.4}),0,e*.95,0)),t.add(Rt(new ae(.01,.01,e*.5,6),Ht(14267242),0,e*1.3,0));const n=Rt(new Nt(e*.12,8,6),new ke({color:16767053,toneMapped:!1}),0,e*1.55,0);t.add(n);const s=gi("cursor",(a,o,c)=>{a.clearRect(0,0,o,c),a.fillStyle="#fff",a.strokeStyle="#000",a.lineWidth=6,a.beginPath(),a.moveTo(80,20),a.lineTo(80,200),a.lineTo(122,160),a.lineTo(150,225),a.lineTo(180,212),a.lineTo(152,148),a.lineTo(205,148),a.closePath(),a.fill(),a.stroke()},256,256),r=Rt(new xn(e*1.1,e*1.1),new ke({map:s,transparent:!0,toneMapped:!1}),0,0,e*1.01);return t.add(r),t},poodle(){const i=new ce,t=Ht(16052458,{roughness:1}),e=Rt(new Nt(.17,12,10),t,0,.32,0);e.scale.set(.9,.85,1.3),i.add(e),i.add(Rt(new Nt(.15,12,10),t,0,.36,-.2)),i.add(Rt(new Nt(.13,12,10),t,0,.55,.2)),i.add(Rt(new Nt(.09,10,8),t,0,.67,.18));const n=Rt(new Nt(.06,8,6),t,0,.51,.33);n.scale.set(.8,.7,1.2),i.add(n),i.add(Rt(new Nt(.025,6,4),Ht(1118481),0,.53,.4));for(const s of[-1,1]){i.add(Rt(new Nt(.022,6,4),Ht(1118481),s*.05,.6,.31));const r=Rt(new Nt(.07,8,6),t,s*.13,.5,.18);r.scale.set(.6,1.2,.8),i.add(r)}i.add(Rt(new Nt(.07,8,6),t,0,.5,-.36)),i.add(Rt(new Wt(.12,.05,.04),Ht(16732064),0,.66,.1)),i.userData.legs=[];for(const[s,r]of[[-.08,.15],[.08,.15],[-.08,-.18],[.08,-.18]]){const a=new ce;a.position.set(s,.25,r),a.add(Rt(new ae(.03,.03,.2,6),t,0,-.1,0)),a.add(Rt(new Nt(.05,8,6),t,0,-.2,0)),i.add(a),i.userData.legs.push(a)}return i},cash(){const i=gi("cash",(n,s,r)=>{n.fillStyle="#7fbf6a",n.fillRect(0,0,s,r),n.strokeStyle="#2f6b2a",n.lineWidth=8,n.strokeRect(8,8,s-16,r-16),n.fillStyle="#2f6b2a",n.font="bold 70px Georgia",n.textAlign="center",n.textBaseline="middle",n.fillText("£",s/2,r/2+4)}),t=Rt(new Wt(.34,.012,.17),[Ht(6989914),Ht(6989914),Ht(16777215,{map:i}),Ht(16777215,{map:i}),Ht(6989914),Ht(6989914)]),e=new ce;return e.add(t),e},syringe(){const i=new ce;return i.add(Rt(new ae(.035,.035,.2,12),Ht(15267071,{transparent:!0,opacity:.55,roughness:.1}))),i.add(Rt(new ae(.028,.028,.14,12),new ke({color:5111658,toneMapped:!1}),0,-.02,0)),i.add(Rt(new ae(.006,.004,.12,6),Ht(13421772,{metalness:.9,roughness:.2}),0,-.16,0)),i.add(Rt(new ae(.012,.012,.1,6),Ht(16777215),0,.14,0)),i.add(Rt(new ae(.05,.05,.015,12),Ht(16777215),0,.19,0)),i},seat(){const i=new ce,t=Ht(7019834,{roughness:.55});i.add(Rt(new Sn(.7,.18,.6,3,.06),t,0,.32,.05));const e=Rt(new Sn(.7,.9,.16,3,.06),t,0,.75,-.3);e.rotation.x=-.35,i.add(e),i.add(Rt(new Sn(.4,.2,.14,3,.05),Ht(15261904),0,1.18,-.47));for(const s of[-1,1])i.add(Rt(new Sn(.1,.12,.55,2,.03),Ht(3805216),s*.38,.45,.05));i.add(Rt(new Wt(.5,.25,.08),Ht(3355443,{metalness:.7,roughness:.3}),0,.12,0));const n=gi("first",(s,r,a)=>{s.fillStyle="#ffd84d",s.fillRect(0,0,r,a),s.fillStyle="#3a1020",s.font="bold 40px Arial",s.textAlign="center",s.textBaseline="middle",s.fillText("1ST CLASS*",r/2,a/2),s.font="16px Arial",s.fillText("*not really",r/2,a-16)});return i.add(Rt(new xn(.5,.25),Ht(16777215,{map:n}),0,.85,-.2).rotateX(-.35)),i}},gh=new Map;function hg(i,t){const e=document.createElement("canvas");e.width=e.height=t;const n=e.getContext("2d"),s=n.createRadialGradient(t/2,t/2,t*.3,t/2,t/2,t*.5);s.addColorStop(0,"rgba(0,0,0,1)"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,t,t),i.globalCompositeOperation="destination-in",i.drawImage(e,0,0),i.globalCompositeOperation="source-over"}async function ug(i){await Promise.all(i.map(t=>new Promise(e=>{var s;if(!((s=t.face)!=null&&s.src)){e();return}const n=new Image;n.onload=()=>{const a=document.createElement("canvas");a.width=a.height=512;const o=a.getContext("2d",{willReadFrequently:!0}),{x:c,y:l,w:h,h:u}=t.face.crop;o.drawImage(n,c,l,h,u,0,0,512,512);const p=(y,E)=>o.getImageData(y*512|0,E*512|0,1,1).data,f=(t.face.skinAt||[[.27,.62],[.73,.62],[.5,.3]]).map(([y,E])=>p(y,E)),g=[0,1,2].map(y=>f.reduce((E,x)=>E+x[y],0)/f.length);hg(o,512);const v=new qr(a);v.colorSpace=Ce,v.anisotropy=8;const m=new It().setRGB(g[0]/255,g[1]/255,g[2]/255,Ce),d={};m.getHSL(d),m.setHSL(d.h,d.s*.62,Math.min(.78,d.l*1.08)),gh.set(t.id,{tex:v,skin:m,url:a.toDataURL()}),e()},n.onerror=()=>{console.warn("face missing",t.face.src),e()},n.src=t.face.src})))}const Ua=new Map;function fg(i){const t=JSON.stringify(i);if(Ua.has(t))return Ua.get(t);const e=512,n=_s(s=>{s.clearRect(0,0,e,e);for(const r of[-1,1]){const a=e/2+r*82,o=e*.47;s.fillStyle="#fff",s.beginPath(),s.ellipse(a,o,34,40,0,0,Math.PI*2),s.fill(),s.fillStyle=i.eyes||"#3a6ea8",s.beginPath(),s.arc(a+4,o+4,22,0,Math.PI*2),s.fill(),s.fillStyle="#111",s.beginPath(),s.arc(a+5,o+5,11,0,Math.PI*2),s.fill(),s.fillStyle="#fff",s.beginPath(),s.arc(a-4,o-6,6,0,Math.PI*2),s.fill(),i.lashes&&(s.strokeStyle="#111",s.lineWidth=7,s.beginPath(),s.ellipse(a,o,36,42,0,Math.PI*1.1,Math.PI*1.9),s.stroke()),s.strokeStyle=i.brows||"#5a3a20",s.lineWidth=9,s.lineCap="round",s.beginPath(),s.moveTo(a-32,o-62+(i.angry?r*10:0)),s.lineTo(a+30,o-66-(i.angry?r*10:0)),s.stroke()}s.fillStyle="rgba(255,110,120,0.35)";for(const r of[-1,1])s.beginPath(),s.ellipse(e/2+r*120,e*.62,34,20,0,0,Math.PI*2),s.fill();s.fillStyle=i.lips||"#c2185b",s.beginPath(),i.angry?s.ellipse(e/2,e*.72,46,14,0,Math.PI,0):s.ellipse(e/2,e*.69,50,26,0,0,Math.PI),s.fill(),s.fillStyle="rgba(0,0,0,0.12)",s.beginPath(),s.ellipse(e/2,e*.59,12,8,0,0,Math.PI*2),s.fill()},e,e);return Ua.set(t,n),n}function Ao(i,t,e=.09){const n=i.attributes.position;for(let s=0;s<n.count;s++){const r=n.getX(s),a=n.getY(s),o=n.getZ(s),c=a/t,l=o/t;let h=o,u=a,p=r;c<.1&&l>0&&(h=o+t*e*Math.min(1,(.1-c)*1.4)*l),c<-.4&&(p=r*(1-(-.4-c)*.25)),c>.3&&(u=a*1.03),n.setXYZ(s,p,u,h)}return i.computeVertexNormals(),i}function dg(i,t,e=[.5,.42],n=.12){Ao(i,t);const s=i.attributes.position,r=i.attributes.uv,a=i.attributes.normal;for(let o=0;o<s.count;o++){const c=r.getX(o),l=r.getY(o),h=Math.exp(-((c-e[0])**2/(2*.055**2)+(l-e[1])**2/(2*.09**2))),u=.35*Math.exp(-((l-(e[1]+.18))**2/(2*.04**2)))*Math.exp(-((c-.5)**2/(2*.22**2))),p=.25*(Math.exp(-(((c-.3)**2+(l-e[1]+.03)**2)/(2*.07**2)))+Math.exp(-(((c-.7)**2+(l-e[1]+.03)**2)/(2*.07**2)))),f=t*n*(h+u+p);s.setXYZ(o,s.getX(o)+a.getX(o)*f,s.getY(o)+a.getY(o)*f,s.getZ(o)+a.getZ(o)*f)}return i.computeVertexNormals(),i}const pg=(i,t={})=>new en({color:i,roughness:.75,metalness:0,...t});function vh(i){var dt;const t=i.look,e=gh.get(i.id),n=t.skinOverride??(e?e.skin.getHex():14724222),s=[],r=(Q,bt)=>{const W=pg(Q,bt);return s.push(W),W},a=r(n,{roughness:t.bald?.38:.62}),o=t.bulk||1,c=(t.headScale||1.15)*.36,l=.66,h=(Q,bt,W,J=0,at=0,st=0)=>{const vt=new Pt(bt,W);return vt.position.set(J,at,st),vt.castShadow=!0,vt.receiveShadow=!0,Q.add(vt),vt},u=(Q,bt=0,W=0,J=0)=>{const at=new ce;return at.position.set(bt,W,J),Q.add(at),at},p=(Q,bt)=>new Yr(Q,bt,8,16),f=(Q,bt,W,J=.06)=>new Sn(Q,bt,W,4,J),g=t.top==="skin"?a:r(t.top,t.topMap?{map:t.topMap()}:{}),v=t.sleeves==="skin"?a:t.sleeves?r(t.sleeves,t.topMap?{map:t.topMap()}:{}):g,m=t.forearms==="skin"||!t.forearms?a:v,d=t.bottom==="skin"?a:r(t.bottom,t.bottomMap?{map:t.bottomMap()}:{}),y=t.shins==="skin"?a:t.shins?d:a,E=t.trim?r(t.trim):null,x=new ce,A={};A.body=u(x,0,l,0);const T=.46*o,C=.34*Math.sqrt(o);if(h(A.body,f(T,.26,C,.11),d,0,0,0),t.belt&&h(A.body,f(T+.02,.06,C+.02,.03),r(t.belt),0,.11,0),t.skirt){const Q=h(A.body,new ae(T*.55,T*.75,.38,24,1,!0),r(t.skirt,{side:Ye}),0,-.13,0);Q.scale.z=.85}A.spine=u(A.body,0,.08,0);let I=.5;const b=.56*o,_=.36*Math.sqrt(o);if(t.belly){h(A.spine,new Nt(.42,40,30),a,0,.16,.08).scale.set(1.35,1.05,1.15),h(A.spine,new Nt(.34,32,20),a,0,.46,.02).scale.set(1.25,.8,1);for(const bt of[-1,1])h(A.spine,new Nt(.13,20,14),a,bt*.16,.45,.24).scale.set(1,.85,.7);for(const bt of[-1,1])h(A.spine,new Nt(.2,20,14),a,bt*.38,.1,.12).scale.set(.7,1,1);h(A.spine,new on(.03,.012,8,16),r(10117192),0,.12,.56),I=.62}else{h(A.spine,f(b,.52,_,.15),g,0,.25,0);for(const Q of[-1,1])h(A.spine,new Nt(.11*Math.sqrt(o),20,14),g,Q*(b/2-.06),.45,0);if(t.collar!==!1){const Q=h(A.spine,new on(.11,.025,10,24),t.collarColor?r(t.collarColor):g,0,.5,.01);Q.rotation.x=Math.PI/2}t.hem&&h(A.spine,f(b+.01,.05,_+.01,.025),E||g,0,0,0)}t.chest&&t.chest(A.spine,{add:h,M:r,std:r,bulk:o,torsoW:b,torsoD:_,rbox:f}),A.neck=u(A.spine,0,I,0),h(A.neck,new ae(c*.3,c*.36,.12,16),a,0,.02,0);const R=c*.88;if(h(A.neck,Ao(new Nt(c,48,36),c),a,0,R,0).scale.set(1,1.04,.98),!t.noEars)for(const Q of[-1,1])h(A.neck,new Nt(c*.26,16,12),a,Q*c*.97,R-c*.05,-c*.06).scale.set(.42,1,.72),h(A.neck,new Nt(c*.15,12,8),r(new It(n).multiplyScalar(.75).getHex()),Q*c*1.04,R-c*.05,-c*.03).scale.set(.3,.9,.6);const L=e?e.tex:t.cartoon?fg(t.cartoon):null;if(L){const Q=new en({map:L,transparent:!0,roughness:.6,alphaTest:.02});s.push(Q);const bt=t.faceWide||1.75,W=t.faceTall||1.65,J=new Nt(c*1.004,64,48,Math.PI/2-bt/2,bt,Math.PI/2-W/2+(t.faceLift||0),W);e?dg(J,c*1.004,i.face.nose||[.5,.42],t.noseDepth??.12):Ao(J,c*1.004);const at=h(A.neck,J,Q,0,R,0);at.scale.set(1,1.04,.98),at.castShadow=!1,at.renderOrder=2}t.headwear&&t.headwear(A.neck,{add:h,M:r,H:c,y:R,cap:p,rbox:f,skin:a});const O=.29*o+(t.belly?.12:.04),X=.075*Math.sqrt(t.armBulk||o),H={};for(const Q of["L","R"]){const bt=Q==="L"?1:-1,W=A["sh"+Q]=u(A.spine,bt*O,I-.1,0);if(h(W,p(X*1.12,.12),v,0,-.1,0),t.cuffs){const vt=h(W,new on(X*1.12,.018,8,18),E||v,0,-.2,0);vt.rotation.x=Math.PI/2}const J=A["el"+Q]=u(W,0,-.22,0);h(J,p(X,.1),m,0,-.08,0),h(J,new Nt(X*1.42,18,14),a,0,-.22,.01).scale.set(1,1.05,.9),h(J,p(X*.42,X*.6),a,-bt*X*.9,-.2,X*.7).rotation.set(.6,0,bt*.6);const st=(dt=t.hold)==null?void 0:dt[Q];if(st&&ns[st]){const vt=ns[st]();vt.position.set(0,-.24,.06),vt.rotation.x=-Math.PI/2+.3,(st==="canesBag"||st==="kfcBucket")&&(vt.rotation.set(0,0,0),vt.position.set(0,-.26,.02)),J.add(vt),H[Q]={mesh:vt,name:st}}}const j=.09*Math.sqrt(t.legBulk||o);for(const Q of["L","R"]){const bt=Q==="L"?1:-1,W=A["hip"+Q]=u(A.body,bt*.12*Math.min(1.5,o),-.08,0);if(h(W,p(j*1.18,.1),t.thighs==="skin"?a:d,0,-.11,0),t.hemLegs){const at=h(W,new on(j*1.2,.02,8,18),E||d,0,-.2,0);at.rotation.x=Math.PI/2}const J=A["kn"+Q]=u(W,0,-.24,0);if(h(J,p(j,.1),y,0,-.1,0),t.shoes==="bare"){h(J,f(.17,.09,.27,.04),a,0,-.27,.05);for(let at=0;at<4;at++)h(J,new Nt(.022,8,6),a,-.05+at*.033,-.29,.19)}else t.shoes&&t.shoes(J,{add:h,M:r,rbox:f,skin:a})}const z=t.size||1;x.scale.setScalar(z);const tt={};for(const Q of["body","spine","neck","shL","elL","shR","elR","hipL","knL","hipR","knR"])tt[Q]=[0,0,0];const it={};if(t.seat){const Q=ns.seat();Q.position.set(0,-.62,-.05),Q.visible=!1,A.body.add(Q),it.seat=Q}if(t.syringe){const Q=ns.syringe();Q.position.set(0,-.24,.05),Q.rotation.x=Math.PI,Q.visible=!1,A.elR.add(Q),it.syringe=Q}return{root:x,j:A,cur:tt,bodyY:0,mats:s,hipH:l,held:H,extras:it,chibi:!0,H:c}}const wi=(i,t=16777215,e=null,n=!0)=>(s,{add:r,M:a,rbox:o})=>{if(r(s,o(.2,.13,.31,.06),a(i,{roughness:.5}),0,-.265,.05),r(s,o(.215,.045,.33,.02),a(t,{roughness:.8}),0,-.325,.05),n&&!e)for(let c=0;c<3;c++)r(s,new Wt(.1,.012,.015),a(14540253),0,-.2,.1+c*.035);if(e)for(const[c,l]of[[-.05,.12],[.05,0],[-.04,-.06],[.06,.14],[0,.07],[.03,-.1]]){const h=r(s,new ae(.016,.016,.02,8),a(e),c,-.2,.05+l);h.scale.y=.4}},mg=(i=16777215,t=13707818)=>(e,{add:n,M:s,rbox:r,skin:a})=>{n(e,r(.16,.08,.26,.035),a,0,-.26,.05);for(let o=0;o<4;o++)n(e,new Nt(.02,8,6),a,-.05+o*.033,-.28,.18);n(e,r(.2,.03,.32,.015),s(15921906),0,-.31,.05),n(e,r(.2,.05,.12,.02),s(i),0,-.23,.07),n(e,new Wt(.04,.03,.02),s(t),.05,-.22,.135)},ts=(i,t,e,n="bold 44px Arial",s=256,r=128)=>_s(a=>{a.fillStyle=t,a.fillRect(0,0,s,r),a.fillStyle=e,a.font=n,a.textAlign="center",a.textBaseline="middle",a.fillText(i,s/2,r/2)},s,r);function Hs(i,{add:t,M:e},n,s){const r=e(n,{roughness:.7});for(const a of s)t(i,new Yr(a.r,a.len,6,12),r,a.x,a.y,a.z).rotation.set(a.rx||0,a.ry||0,a.rz||0);return r}const gg={},Ls=typeof import.meta<"u"&&gg&&"./"||"/",Sl=()=>_s((i,t,e)=>{i.fillStyle="#4b4c8f",i.fillRect(0,0,t,e);for(let n=0;n<2200;n++)i.fillStyle=Math.random()<.5?"rgba(20,20,60,0.35)":"rgba(180,180,240,0.25)",i.fillRect(Math.random()*t,Math.random()*e,2,1);i.strokeStyle="rgba(30,30,80,0.5)",i.lineWidth=2;for(let n=0;n<t;n+=32)i.beginPath(),i.moveTo(n,0),i.lineTo(n,e),i.stroke();for(let n=0;n<e;n+=32)i.beginPath(),i.moveTo(0,n),i.lineTo(t,n),i.stroke()},256,256),vg=()=>_s((i,t,e)=>{i.fillStyle="#4c72a8",i.fillRect(0,0,t,e);for(let n=0;n<1800;n++)i.fillStyle=`rgba(255,255,255,${Math.random()*.12})`,i.fillRect(Math.random()*t,Math.random()*e,3,1)},128,128),bl=()=>{const i=_s((t,e,n)=>{for(let s=0;s<10;s++)t.fillStyle=s%2?"#e2b13c":"#7a1020",t.fillRect(s*e/10,0,e/10+1,n)},256,32);return i.wrapS=Nr,i},tc=[{id:"robi",name:"ROBI",title:"The Continuation King",traits:["Continuations: his power punch always comes back for a second hit","Fakes flying first class"],stats:{power:8,speed:4,health:8,reach:4},face:{src:Ls+"characters/robi.jpg",crop:{x:112,y:66,w:146,h:152},nose:[.47,.45]},moves:{punch:{...Re.jab,name:"Bottle Jab",dmg:8},kick:{...Re.chop,name:"Cane's Bag Swing",pose:"chop",dmg:11,push:2.5},power:{...Re.haymaker,name:"The Continuation",hits:[0,.2],active:.3,dmg:12,knockdown:!1,wallBounce:!1,push:3,finisher:{dmg:11,launch:7,push:6}},low:{...Re.lowKick,name:"Sneaker Stomp",dmg:9}},special:{kind:"charge",name:"Fake First Class",pose:"seated",prop:"seat",startup:.3,active:.5,recovery:.4,dmg:32,reach:1.6,level:"mid",hitstun:.6,push:14,knockdown:!0,heavy:!0,wallBounce:!0,lunge:10,armor:!0,color:11561983},look:{headScale:1.3,bulk:1.3,size:1.12,bald:!0,top:1579036,sleeves:1579036,forearms:"skin",bottom:5010088,bottomMap:vg,shins:"skin",cuffs:!0,hemLegs:!0,hem:!0,trim:1052692,shoes:wi(16053492,14869218),hold:{L:"canesBag",R:"wine"},seat:!0,faceWide:1.8,faceTall:1.7,faceLift:.05,chest:(i,{add:t,M:e,torsoD:n})=>{const s=t(i,new Jo(.035,.07,3),e(12066858),-.13,.38,n/2+.005);s.rotation.z=Math.PI/2}}},{id:"oliver",name:"ANSWER OLIVER",title:"The Pay Pig",traits:["Throws iPhones like they are free","Big spender: makes it rain"],stats:{power:6,speed:7,health:7,reach:7},face:{src:Ls+"characters/paypig.jpg",crop:{x:145,y:96,w:108,h:112},nose:[.5,.48]},moves:{punch:{...Re.jab,name:"Quick Jab"},kick:{...Re.frontKick,name:"Croc Kick"},power:{name:"iPhone Toss",pose:"throw",startup:.14,active:.05,recovery:.3,dmg:11,level:"high",hitstun:.38,push:2.5,proj:{speed:15,size:.18,y:1.35,life:1.3,prop:"iphone",spin:18}},low:{...Re.sweep,name:"Bucket Sweep"}},special:{kind:"rain",name:"Money Rain",pose:"rain",startup:.2,active:.7,recovery:.35,dmg:6,level:"mid",hitstun:.32,push:.6,count:9,color:6989914,proj:{size:.2,prop:"cash",life:2}},look:{headScale:1.2,bulk:1.18,size:1.06,top:5996464,sleeves:5996464,forearms:"skin",cuffs:!0,hem:!0,trim:5074588,bottom:13151622,shins:"skin",hemLegs:!0,shoes:wi(16185078,14540253,4168250),hold:{L:"iphone",R:"kfcBucket"},faceWide:1.8,faceTall:1.55,faceLift:.12,headwear:(i,{add:t,M:e,H:n,y:s})=>{const r=e(4173370,{roughness:.55});t(i,new Nt(n*1.08,40,20,0,Math.PI*2,0,Math.PI/2.1),r,0,s+n*.14,-.02).scale.set(1.06,1,1.08);const o=t(i,new ae(n*1.1,n*1.12,n*.16,40,1,!0),r,0,s+n*.16,-.02);o.scale.z=1.06,t(i,new Nt(n*1.25,32,6,Math.PI*.18,Math.PI*.64,Math.PI/2-.1,.16),r,0,s+n*.24,n*.05).scale.set(1,.6,1.15);const l=t(i,new Ei(n*.3,32),e(16777215),0,s+n*.66,n*.86);l.rotation.x=-.55;const h=ts("O","#ffffff","#3fae3a","bold 200px Arial",256,256),u=t(i,new Ei(n*.28,32),new en({map:h}),0,s+n*.665,n*.87);u.rotation.x=-.55},chest:(i,{add:t,torsoD:e})=>{const n=ts("Answer Oliver","#5b7fb0","#ffffff","bold 34px Arial",384,96);t(i,new xn(.5,.125),new en({map:n,roughness:.8}),0,.33,e/2+.004);const s=ts("PR LINKS · TOP VIBE CODER · FOUNDER","#5b7fb0","#dfe8f5","bold 18px Arial",512,48);t(i,new xn(.46,.045),new en({map:s,roughness:.8}),0,.25,e/2+.004)}}},{id:"vickers",name:"SEO JESUS",title:"Lord of the Backlinks",traits:["Throws click bombs","Backlink Plague: a disease cloud all around him. Get close and you catch it (AoE damage that lingers)"],stats:{power:5,speed:5,health:6,reach:9},face:{src:Ls+"characters/vickers.jpg",crop:{x:92,y:45,w:122,h:130},nose:[.5,.47]},aura:{radius:2,dps:1.3,linger:1.2,color:8257357,name:"Backlink Plague"},moves:{punch:{...Re.palm,name:"Blessing Palm"},kick:{...Re.roundhouse,name:"Slider Kick"},power:{name:"Click Bomb",pose:"throw",startup:.2,active:.05,recovery:.34,dmg:13,level:"mid",hitstun:.45,push:3,proj:{speed:7.5,arc:6,size:.22,y:1.6,life:2.5,prop:"clickbomb",splash:1.3,spin:6}},low:{...Re.sweep,name:"Holy Sweep"}},special:{kind:"projectile",name:"Viral Click Bomb",pose:"cast",startup:.3,active:.05,recovery:.45,dmg:30,level:"mid",hitstun:.6,push:6,launch:9,heavy:!0,color:16732064,proj:{speed:6.5,arc:8,size:.4,y:2,life:3,prop:"megabomb",splash:2.3,spin:4}},look:{headScale:1.12,bulk:1,size:1.08,top:4934799,topMap:Sl,sleeves:4934799,forearms:"suit",bottom:4934799,bottomMap:Sl,shins:"suit",collar:!1,cuffs:!0,trim:16053492,shoes:mg(16777215,13707818),faceWide:1.6,faceTall:1.7,faceLift:.02,headwear:(i,t)=>{const{add:e,M:n,H:s,y:r}=t,a=n(5913894,{roughness:.7});e(i,new Nt(s*1.06,40,20,0,Math.PI*2,0,Math.PI/2.4),a,0,r+s*.05,-.03).scale.set(1.05,1,1.06);const c=[];for(let l=0;l<9;l++){const h=-Math.PI*.72+l/8*Math.PI*1.44,u=s*.98;c.push({r:s*.17,len:s*(1.3+l%3*.15),x:Math.sin(h)*u,y:r-s*.55,z:-Math.cos(h)*u*.85,rx:Math.cos(h)*-.18,rz:Math.sin(h)*.12})}for(const l of[-1,1])c.push({r:s*.16,len:s*1.35,x:l*s*.9,y:r-s*.45,z:s*.15,rz:l*.08});Hs(i,t,5913894,c)},chest:(i,{add:t,M:e,torsoD:n,torsoW:s})=>{const r=n/2;t(i,new Wt(.16,.34,.02),e(16053492),0,.33,r-.005),t(i,new Wt(.06,.26,.025),e(2047912),0,.31,r+.005);for(const u of[-1,1]){const p=t(i,new Wt(.09,.3,.02),e(4145280),u*.11,.34,r+.006);p.rotation.z=u*.35}for(let u=0;u<3;u++)t(i,new Nt(.014,8,6),e(14263584,{metalness:.8,roughness:.3}),.035,.14-u*.05,r+.01);t(i,new Wt(.06,.04,.01),e(16053492),.17,.38,r+.01);const a=e(14212324,{metalness:.9,roughness:.25}),o=e(14263584,{metalness:.9,roughness:.3}),c=t(i,new ae(.11,.11,.025,32),a,0,.2,r+.03);c.rotation.x=Math.PI/2;const l=ts("SEO JESUS","#c9ced8","#222","bold 46px Georgia",256,256);t(i,new Ei(.095,32),new en({map:l,metalness:.6,roughness:.3}),0,.2,r+.044);const h=t(i,new on(.17,.012,6,30,Math.PI),a,0,.42,r);h.rotation.z=Math.PI;for(const[u,p]of[[.2,.44],[.24,.38]]){const f=t(i,new on(u,.008,6,30,Math.PI),o,0,p,r-.005);f.rotation.z=Math.PI}t(i,new Nt(.035,10,8),e(2780159),-.17,.42,r+.01)}}},{id:"jamie",name:"JAMIE",title:"The Broke Wizard",traits:["Releases a poodle","Has no money: builds special meter 40% slower"],stats:{power:5,speed:9,health:5,reach:7},meterGain:.6,face:{src:Ls+"characters/jamie.jpg",crop:{x:88,y:30,w:135,h:150},nose:[.5,.45]},moves:{punch:{...Re.jab,name:"Wand Poke"},kick:{...Re.frontKick,name:"Robe Kick"},power:{name:"Vape Toss",pose:"throw",startup:.12,active:.05,recovery:.26,dmg:10,level:"high",hitstun:.36,push:2.5,proj:{speed:17,size:.16,y:1.4,life:1.2,prop:"vape",spin:20,smoke:!0}},low:{...Re.slide,name:"Robe Slide"}},special:{kind:"projectile",name:"Release the Poodle",pose:"cast",startup:.22,active:.05,recovery:.4,dmg:26,level:"low",hitstun:.6,push:5,knockdown:!0,color:16732064,proj:{speed:7.5,size:.35,y:0,life:2.6,prop:"poodle",ground:!0}},look:{headScale:1.15,bulk:.95,size:1.02,top:2302764,sleeves:2302764,forearms:"robe",bottom:2894900,shins:"robe",skirt:2302764,collar:!1,cuffs:!0,trim:7999520,shoes:wi(1118481,1118481,null,!1),hold:{R:"vape"},faceWide:1.75,faceTall:1.7,headwear:(i,t)=>{const{add:e,M:n,H:s,y:r}=t,a=n(12034170,{roughness:.6});e(i,new Nt(s*1.05,40,20,0,Math.PI*2,0,Math.PI/2.6),a,0,r+s*.1,-.03).scale.set(1.04,1,1.06),Hs(i,t,12034170,[{r:s*.18,len:s*.9,x:s*.15,y:r+s*.78,z:s*.42,rz:1.25,ry:.2},{r:s*.15,len:s*.7,x:-s*.35,y:r+s*.72,z:s*.45,rz:1.1},{r:s*.14,len:s*.6,x:s*.65,y:r+s*.55,z:s*.38,rz:.6},{r:s*.16,len:s*.5,x:-s*.85,y:r+s*.3,z:0,rz:.2},{r:s*.16,len:s*.5,x:s*.85,y:r+s*.3,z:0,rz:-.2}]),e(i,new Nt(s*1.16,32,16,Math.PI*.8,Math.PI*1.4,.25,Math.PI*.55),new en({map:bl(),roughness:.9,side:Ye}),0,r+s*.05,-s*.08).scale.set(1.05,1.05,1.05)},chest:(i,{add:t,M:e,torsoD:n})=>{const s=new en({map:bl(),roughness:.9});t(i,new on(.2,.075,12,28),s,0,.5,.02).rotation.x=Math.PI/2,t(i,new Wt(.11,.38,.05),s,.1,.3,n/2+.02),t(i,new Wt(.16,.2,.01),e(15329769),0,.4,n/2+.002),t(i,new Wt(.05,.18,.015),e(7999520),0,.37,n/2+.008),t(i,new Ei(.035,16),e(14856508),-.14,.34,n/2+.004)}}},{id:"sacha",name:"SPLASHA",title:"The Big Belly",traits:["Throws smash burgers","Belly Booster: injects himself right in the belly to heal (2 per round)","Built like a wall: barely moves when hit"],stats:{power:10,speed:2,health:10,reach:5},face:{src:Ls+"characters/sammy.jpg",crop:{x:127,y:26,w:82,h:86},skinAt:[[.25,.65],[.75,.65],[.5,.25]],nose:[.5,.47]},moves:{punch:{...Re.palm,name:"Belly Bump",pose:"bellyBump",dmg:10,push:5,lunge:2.5},kick:{...Re.knee,name:"Big Stomp",launch:0,knockdown:!1,dmg:12},power:{name:"Smash Burger",pose:"throw",startup:.2,active:.05,recovery:.32,dmg:15,level:"mid",hitstun:.45,push:4,knockdown:!0,proj:{speed:9,arc:4,size:.3,y:1.6,life:2,prop:"burger",spin:8}},low:{...Re.slide,name:"Belly Slide",dmg:13},heal:{kind:"heal",name:"Belly Booster",pose:"inject",startup:.45,active:.1,recovery:.35,heal:28,uses:2,color:7208842}},special:{kind:"slam",name:"Belly Flop",pose:"slam",startup:.2,active:.1,recovery:.5,dmg:34,reach:3.4,level:"low",hitstun:.6,push:6,knockdown:!0,heavy:!0,unblockable:!0,rise:10,color:16758891},look:{headScale:1,bulk:1.55,armBulk:1.6,legBulk:1.8,size:1.12,belly:!0,top:"skin",sleeves:"skin",forearms:"skin",bottom:5592926,bottomMap:()=>ts("JF","#55575e","#d8d8d8","bold 60px Arial",256,128),shins:"skin",thighs:"skin",shoes:"bare",belt:3816514,hold:{L:"burger",R:"wine"},syringe:!0,faceWide:1.85,faceTall:1.75,headwear:(i,t)=>{const{add:e,M:n,H:s,y:r}=t,a=n(2759700,{roughness:.85});e(i,new Nt(s*1.04,40,20,0,Math.PI*2,0,Math.PI/3),a,0,r+s*.12,-.04).scale.set(1.02,1,1.04),Hs(i,t,2759700,[{r:s*.16,len:s*.6,x:0,y:r+s*.88,z:s*.4,rz:Math.PI/2}])}}}];for(const i of tc)i.quote=i.quote||"";class _g extends Yo{constructor(){super();const t=new Wt;t.deleteAttribute("uv");const e=new en({side:Fe}),n=new en,s=new og(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Pt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Pt(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new Pt(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const c=new Pt(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new Pt(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new Pt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Pt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const p=new Pt(t,Ki(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);const f=new Pt(t,Ki(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new Pt(t,Ki(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const v=new Pt(t,Ki(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const m=new Pt(t,Ki(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const d=new Pt(t,Ki(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ki(i){const t=new ke;return t.color.setScalar(i),t}const Ee=7.2,xg=30,Mg=24,yg=60,Sg={name:"Jump Kick",pose:"airKick",startup:.06,active:.3,recovery:0,dmg:12,reach:1.35,level:"mid",hitstun:.4,push:3,air:!0},bg={name:"Tag Assault",pose:"airKick",startup:.02,active:.35,recovery:.1,dmg:14,reach:1.5,level:"mid",hitstun:.5,push:4,launch:7,air:!0},El=Object.freeze({left:!1,right:!1,up:!1,down:!1,qP:!1,eP:!1,tagP:!1,upP:!1}),Gs=(i,t,e)=>Math.max(t,Math.min(e,i));class Eg{constructor(t,e,n){this.def=t,this.d=lg(t),this.team=e,this.slot=n;const s=r=>typeof r=="string"?Re[r]:r;this.moves={punch:s(t.moves.punch),kick:s(t.moves.kick),power:s(t.moves.power),low:s(t.moves.low),heal:t.moves.heal?s(t.moves.heal):null,special:{...typeof t.special=="string"?mh[t.special]:t.special,special:!0}},this.meterGain=t.meterGain??1,this.hp=this.d.maxHp,this.meter=0,this.resetPosition(0,0)}resetPosition(t,e){this.x=t,this.y=0,this.z=e,this.vx=0,this.vy=0,this.facing=t<=0?1:-1,this.state="idle",this.t=0,this.move=null,this.moveT=0,this.mt=null,this.hitsDone=0,this.moveHit=!1,this.spawned=!1,this.crouch=!1,this.inBack=!1,this.invuln=0,this.combo=0,this.flash=0,this.visible=!0,this.pending=null,this.pendingT=0,this.buffer=null,this.bufferT=0,this.grabT=-1,this.grabbedBy=null,this.slamState=null,this.wallBounce=!1,this.armor=!1,this.walkPhase=0,this.tagFrom=null,this.lastMoveName="",this.x!==void 0&&!this.tagFrom&&(this.healUses=this.healUses??0)}get alive(){return this.hp>0}get grounded(){return this.y<=.001&&this.vy<=0}canAct(){return this.state==="idle"||this.state==="walk"||this.state==="crouch"}canBlock(){return this.grounded&&(this.canAct()||this.state==="blockstun")}startMove(t,e,n){const s=t.air||t.kind?Math.min(1,this.d.timeMult):this.d.timeMult;this.state="attack",this.move=t,this.moveT=0,this.mt={s:t.startup*s,a:t.active*(t.hits?1:s),r:t.recovery*s},this.hitsDone=0,this.moveHit=!1,this.spawned=!1,this.grabT=-1,this.slamState=null,this.armor=!!t.armor,this.lastMoveName=t.name,t.air||(this.crouch=!1),e.events.push({type:t.special?"special":"whoosh",f:this,name:t.name,color:t.color,heavy:!!t.heavy}),t.special&&e.stats.specials[this.team]++,this.rainNext=0,t.kind==="teleport"&&(this.visible=!1)}readAttack(t,e,n){if(t.qP||t.eP){const a=t.qP&&t.eP?"both":t.qP?"q":"e";this.pending&&a!=="both"&&a!==this.pending?this.pending="both":this.pending||(this.pending=a,this.pendingT=a==="both"?0:.055)}if(!this.pending||(this.pendingT-=e.dt,this.pendingT>0))return null;const s=this.pending;this.pending=null;const r=this.facing>0?t.right:t.left;return s==="both"?this.meter>=100?(this.meter=0,this.moves.special):this.moves.power:s==="q"&&t.down&&this.moves.heal&&this.healUses<this.moves.heal.uses?this.moves.heal:s==="q"?r?this.moves.power:this.moves.punch:t.down?this.moves.low:this.moves.kick}update(t,e,n,s){if(this.state==="bench"||this.state==="out"||(this.invuln>0&&(this.invuln-=t),this.flash>0&&(this.flash-=t),this.state==="grabbed"))return;const r=this.facing>0?e.right:e.left,a=this.facing>0?e.left:e.right;switch(this.inBack=a,this.state){case"idle":case"walk":case"crouch":{n&&n.x!==this.x&&(this.facing=Math.sign(n.x-this.x));const o=this.readAttack(e,s,n)||this.takeBuffer();if(o){this.startMove(o,s,n);break}if(e.tagP&&s.tryTag(this))break;if(e.up||e.upP){this.state="jump",this.vy=10.5,this.crouch=!1,this.vx=r?this.d.walk*1.15*this.facing:a?-this.d.walk*1*this.facing:0,s.events.push({type:"jump",f:this});break}e.down?(this.state="crouch",this.crouch=!0,this.vx=0):r?(this.state="walk",this.crouch=!1,this.vx=this.d.walk*this.facing):a?(this.state="walk",this.crouch=!1,this.vx=-this.d.walk*.7*this.facing):(this.state="idle",this.crouch=!1,this.vx=0),this.state==="walk"&&(this.walkPhase+=t*9*Math.sign(this.vx*this.facing));break}case"jump":{this.readAttack(e,s,n)&&this.startMove(Sg,s,n);break}case"attack":this.updateAttack(t,e,n,s);break;case"hitstun":case"blockstun":this.t-=t,this.vx*=Math.exp(-t*6),this.t<=0&&(this.state="idle",this.grounded&&(this.combo=0));break;case"down":this.t-=t,this.vx*=Math.exp(-t*8),this.t<=0&&(this.state="getup",this.t=.4,this.invuln=.55);break;case"getup":this.t-=t,this.t<=0&&(this.state="idle",this.combo=0);break;case"tagOut":case"tagIn":this.updateTag(t,s,n);return;case"win":case"lose":this.vx=0;break}if(this.state==="attack"&&(e.qP||e.eP)){const o=r;this.buffer=e.qP&&e.eP?"both":e.qP?o?"power":"punch":e.down?"low":"kick",this.bufferT=.3}this.bufferT>0&&(this.bufferT-=t),this.physics(t,s,n)}takeBuffer(){if(!this.buffer||this.bufferT<=0)return this.buffer=null,null;const t=this.buffer;return this.buffer=null,t==="both"?this.meter>=100?(this.meter=0,this.moves.special):this.moves.power:this.moves[t]}updateAttack(t,e,n,s){const r=this.move,{s:a,a:o,r:c}=this.mt;if(this.grabT>=0)return this.updateGrab(t,n,s);r.kind==="slam"&&(this.slamState==="up"||this.slamState==="down")||(this.moveT+=t);const l=this.moveT,h=l<a?"startup":l<a+o?"active":"recovery";switch(r.lunge&&h!=="recovery"&&this.grounded?this.vx=this.facing*r.lunge*(h==="startup"?.4:1):this.grounded&&r.kind!=="rising"&&(this.vx*=Math.exp(-t*12)),r.kind){case"projectile":h!=="startup"&&!this.spawned&&(this.spawned=!0,s.spawnProjectile(this,r));break;case"teleport":if(h!=="startup"&&!this.spawned){this.spawned=!0,this.visible=!0;const u=Math.sign(n.x-this.x)||1;let p=n.x+u*1.05;Math.abs(p)>Ee&&(p=n.x-u*1.05),s.events.push({type:"vanish",x:this.x,y:1,z:this.z,color:r.color}),this.x=Gs(p,-Ee,Ee),this.facing=Math.sign(n.x-this.x)||1,s.events.push({type:"vanish",x:this.x,y:1,z:this.z,color:r.color})}h==="active"&&!this.moveHit&&this.tryHit(r,n,s);break;case"grab":h==="active"&&!this.moveHit&&this.tryGrab(r,n,s);break;case"heal":if(h!=="startup"&&!this.spawned){this.spawned=!0,this.healUses++;const u=this.hp;this.hp=Math.min(this.d.maxHp,this.hp+r.heal),s.events.push({type:"heal",f:this,x:this.x,y:this.y+1,z:this.z,amount:Math.round(this.hp-u),color:r.color})}break;case"rain":if(h==="active"){const u=this.mt.a*.85/r.count;for(;this.rainNext<r.count&&l-a>=this.rainNext*u;)this.rainNext++,s.spawnProjectile(this,r,{x:n.x+(Math.random()-.5)*1.6,y:5+Math.random()*1.5,vx:(Math.random()-.5)*1.5,vy:-2,arc:!0})}break;case"slam":h!=="startup"&&this.slamState===null&&(this.slamState="up",this.vy=r.rise,this.vx=this.facing*2.5),this.slamState==="up"&&this.vy<0&&(this.slamState="down",this.vy=-26);break;case"rising":h!=="startup"&&!this.spawned&&(this.spawned=!0,this.vy=r.rise,this.vx=this.facing*r.lunge);case"flurry":if(h==="active")for(;this.hitsDone<r.hits.length&&l-a>=r.hits[this.hitsDone];){const u=this.hitsDone===r.hits.length-1;this.hitsDone++,this.tryHit(u?{...r,launch:r.finisherLaunch,heavy:!0,dmg:r.dmg*1.8}:r,n,s,!0)}r.kind==="flurry"&&h==="active"&&s.events.push({type:"trail",x:this.x+this.facing*.6,y:1,z:this.z,color:r.color});break;default:if(r.proj)h!=="startup"&&!this.spawned&&(this.spawned=!0,s.spawnProjectile(this,r));else if(r.hits){if(h==="active")for(;this.hitsDone<r.hits.length&&l-a>=r.hits[this.hitsDone];){const u=this.hitsDone===r.hits.length-1;this.hitsDone++,this.tryHit(u&&r.finisher?{...r,...r.finisher,heavy:!0}:r,n,s,!0)}}else h==="active"&&!this.moveHit&&this.tryHit(r,n,s)}if(r.kind==="rising"&&h==="active"&&s.events.push({type:"trail",x:this.x+this.facing*.3,y:this.y+1.6,z:this.z,color:r.color}),h==="recovery"&&this.moveHit&&this.buffer&&this.bufferT>0&&!r.kind&&!r.proj&&l>a+o+c*.3){const u=this.takeBuffer();if(u){this.startMove(u,s,n);return}}r.air||r.kind==="rising"&&!this.grounded||l>=a+o+c&&(this.state="idle",this.move=null,this.armor=!1,this.visible=!0)}inHitRange(t,e,n=0){const s=(e.x-this.x)*this.facing,r=(t.reach||1.2)*this.d.reachMult*(this.def.look.size||1)+.3+n;return s>-.35&&s<r&&Math.abs(e.y-this.y)<1.7}tryHit(t,e,n,s=!1){return!e||!e.hittable()||!this.inHitRange(t,e)?!1:t.level==="high"&&e.crouch&&e.grounded?(s||n.events.push({type:"duck",f:e}),!1):t.level==="low"&&e.y>.5?!1:(this.moveHit=!0,n.resolveHit(this,e,t),!0)}tryGrab(t,e,n){!e||!e.hittable()||!e.grounded||e.crouch||this.inHitRange(t,e)&&["idle","walk","attack","hitstun","blockstun","getup"].includes(e.state)&&(this.moveHit=!0,this.grabT=0,e.state="grabbed",e.grabbedBy=this,e.move=null,e.vx=0,e.vy=0,n.events.push({type:"grab",f:this}))}updateGrab(t,e,n){this.grabT+=t,this.vx=0;const s=Math.min(1,this.grabT/.45);e.x=this.x+this.facing*.75,e.y=Math.sin(s*Math.PI*.5)*1.6,e.facing=-this.facing,this.grabT>=.55&&(this.grabT=-1,this.moveT=this.mt.s+this.mt.a,e.state="juggle",e.grabbedBy=null,e.y=.6,e.vy=-6,n.resolveHit(this,e,{...this.move,launch:0},!0),n.events.push({type:"slam",x:e.x,y:.1,z:e.z,color:this.move.color}),n.shake=Math.max(n.shake,.5))}hittable(){return this.invuln>0||!this.visible||!this.alive?!1:!["down","getup","ko","bench","out","tagOut","tagIn","grabbed","win","lose"].includes(this.state)}physics(t,e,n){this.y>0||this.vy>0?(this.vy-=(this.state==="juggle"?Mg:xg)*t,this.y+=this.vy*t,this.y<=0&&(this.y=0,this.land(e,n))):this.state==="juggle"&&this.land(e,n),this.x+=this.vx*t,Math.abs(this.x)>Ee&&(this.x=Gs(this.x,-Ee,Ee),this.state==="juggle"&&this.wallBounce&&Math.abs(this.vx)>3?(this.vx=-this.vx*.25,this.vy=6.5,this.wallBounce=!1,e.events.push({type:"wall",x:this.x,y:this.y+1,z:this.z}),e.shake=Math.max(e.shake,.35)):this.state!=="juggle"&&(this.vx=0))}land(t,e){this.vy=0;const n=this.move;if(this.state==="juggle"){this.alive?(this.state="down",this.t=.75,this.vx*=.4):(this.state="ko",this.vx*=.4),t.events.push({type:"land",x:this.x,y:.05,z:this.z,heavy:!0});return}if(this.state==="jump"){this.state="idle",this.vx=0,t.events.push({type:"land",x:this.x,y:.05,z:this.z});return}if(this.state==="attack"&&n){if(n.kind==="slam"&&this.slamState==="down"){this.slamState="done",this.moveT=this.mt.s+this.mt.a,t.events.push({type:"quake",x:this.x,y:.05,z:this.z,color:n.color}),t.shake=Math.max(t.shake,.6),e&&e.hittable()&&e.y<.35&&Math.abs(e.x-this.x)<n.reach&&(this.facing=Math.sign(e.x-this.x)||this.facing,this.moveHit=!0,t.resolveHit(this,e,n)),this.vx=0;return}if(n.air){this.state="idle",this.move=null,this.vx=0;return}n.kind==="rising"&&(this.moveT=Math.max(this.moveT,this.mt.s+this.mt.a),this.vx=0)}}updateTag(t,e,n){this.t-=t;const s=1-Math.max(0,this.t)/.5,r=this.tagFrom,a=this.tagTo;this.x=r.x+(a.x-r.x)*s,this.z=r.z+(a.z-r.z)*s,this.y=Math.sin(s*Math.PI)*1.6,n&&this.state==="tagIn"&&(this.facing=Math.sign(n.x-this.x)||this.facing),this.t<=0&&(this.y=0,this.z=a.z,this.x=a.x,this.state==="tagOut"?(this.state="bench",this.facing=this.team===0?1:-1):(this.state="idle",this.invuln=.2,n&&Math.abs(n.x-this.x)<3&&this.alive&&e.phase==="fight"&&(this.y=.01,this.vy=6,this.vx=this.facing*4,this.startMove(bg,e,n))))}}class wg{constructor(t,{tag:e=!1}={}){this.tag=e,this.teams=t.map((n,s)=>({members:n.slice(0,e?2:1).map((r,a)=>new Eg(r,s,a)),active:0,wins:0})),this.round=0,this.events=[],this.projectiles=[],this.hitStop=0,this.shake=0,this.slowmo=0,this.dt=1/60,this.announce=null,this.winner=-1,this.matchWinner=-1,this.stats={hits:[0,0],specials:[0,0],maxCombo:[0,0]},this.startRound()}fighter(t){const e=this.teams[t];return e.members[e.active]}partner(t){const e=this.teams[t];return e.members.length>1?e.members[1-e.active]:null}benchPos(t){return{x:(t===0?-1:1)*(Ee+1.25),z:-2.3}}startRound(){this.round++,this.timer=yg,this.winner=-1,this.projectiles.length=0;for(let e=0;e<2;e++){const n=this.teams[e];n.active=0,n.members.forEach((s,r)=>{if(s.hp=s.d.maxHp,s.healUses=0,r===0)s.resetPosition(e===0?-2.6:2.6,0);else{const a=this.benchPos(e);s.resetPosition(a.x,a.z),s.state="bench",s.facing=e===0?1:-1}})}this.phase="intro",this.phaseT=2.2;const t=this.teams[0].wins===1&&this.teams[1].wins===1;this.say(t?"FINAL ROUND":`ROUND ${this.round}`,"",1.4),this.events.push({type:"announce",text:t?"Final round":`Round ${this.round}`})}say(t,e="",n=1.5){this.announce={text:t,sub:e,t:n}}tryTag(t){if(!this.tag||this.phase!=="fight")return!1;const e=this.partner(t.team);return!e||!e.alive||e.state!=="bench"?!1:(this.swap(t.team,!1),!0)}swap(t,e){const n=this.teams[t],s=n.members[n.active],r=n.members[1-n.active],a=this.benchPos(t);e?(s.state="out",s.visible=!1,s.x=a.x,s.z=a.z):(s.state="tagOut",s.t=.5,s.tagFrom={x:s.x,z:s.z},s.tagTo=a,s.move=null,s.crouch=!1);const o=e?Gs((t===0?-1:1)*4,-Ee,Ee):s.x;r.resetPosition(a.x,a.z),r.state="tagIn",r.t=.5,r.tagFrom={x:a.x,z:a.z},r.tagTo={x:o,z:0},r.invuln=.6,n.active=1-n.active,this.events.push({type:"tag",f:r})}spawnProjectile(t,e,n={}){const s=e.proj,r={x:n.x??t.x+t.facing*.7,y:n.y??s.y,z:t.z,vx:n.vx??t.facing*(s.speed||0),vy:n.vy??(s.arc||0),arc:n.arc??!!s.arc,ground:!!s.ground,size:s.size,life:s.life,owner:t,m:e,team:t.team,id:Math.random(),dir:t.facing};this.projectiles.push(r),n.x||this.events.push({type:"cast",x:r.x,y:Math.max(.4,r.y),z:t.z,color:e.color??16777215,prop:s.prop})}explode(t){this.events.push({type:"boom",x:t.x,y:Math.max(.2,t.y),z:t.z,color:t.m.color??16767053,big:(t.m.proj.splash||0)>2});const e=t.m.proj.splash;if(!e)return;const n=this.fighter(1-t.team);if(n.hittable()&&Math.abs(n.x-t.x)<e&&n.y<1.5){const s=t.owner,r=s.facing;s.facing=Math.sign(n.x-t.x)||t.dir,this.resolveHit(s,n,t.m),s.facing=r}this.shake=Math.max(this.shake,e>2?.5:.2)}resolveHit(t,e,n,s=!1){const r=t.facing,a=!s&&!n.unblockable&&e.canBlock()&&e.inBack&&(n.level==="low"?e.crouch:!e.crouch),o=n.level==="low"?.4:n.level==="high"?1.55:1.1;if(a){e.state="blockstun",e.t=n.hitstun*.7,e.move=null,e.vx=r*n.push*.6/e.d.weight,t.meter=Math.min(100,t.meter+3*t.meterGain),e.meter=Math.min(100,e.meter+3*e.meterGain),Math.abs(e.x)>=Ee-.05&&t.grounded&&(t.vx=-r*n.push*.4),this.events.push({type:"block",x:e.x-r*.3,y:e.y+o,z:e.z}),this.hitStop=Math.max(this.hitStop,.04);return}const c=Math.max(.35,1-e.combo*.09),l=Math.round(n.dmg*t.d.dmgMult*c*(e.y>.05?.85:1));if(e.armor&&e.state==="attack"&&e.alive){e.hp=Math.max(1,e.hp-Math.round(l*.5)),e.flash=.12,this.events.push({type:"armor",x:e.x,y:e.y+1.2,z:e.z}),this.hitStop=Math.max(this.hitStop,.05);return}e.hp=Math.max(0,e.hp-l),e.combo++,this.stats.hits[t.team]++,this.stats.maxCombo[t.team]=Math.max(this.stats.maxCombo[t.team],e.combo),t.meter=Math.min(100,t.meter+8*t.meterGain),e.meter=Math.min(100,e.meter+5*e.meterGain),e.flash=.12,e.move=null,e.armor=!1,e.visible=!0,e.pending=null,e.wallBounce=!!n.wallBounce,e.grabT>=0&&(e.grabT=-1);const h=e.y>.05||e.state==="juggle";e.alive?n.launch?(e.state="juggle",e.vy=n.launch,e.vx=r*Math.min(n.push,2.5)):h?(e.state="juggle",e.vy=Math.max(e.vy*.3,5),e.vx=r*Math.min(3,n.push)):n.knockdown?(e.state="juggle",e.vy=4.5,e.vx=r*n.push/e.d.weight):(e.state="hitstun",e.t=n.hitstun,e.vx=r*n.push/e.d.weight,e.crouch=!1):(e.state="juggle",e.vy=7.5,e.vx=r*6,e.wallBounce=!1,this.onKO(e,t)),e.state==="juggle"&&e.y<.02&&(e.y=.02);const u=!!n.heavy||!!n.kind;this.events.push({type:"hit",x:e.x-r*.3,y:e.y+o,z:e.z,heavy:u,dmg:l,color:n.color,combo:e.combo,attacker:t.team}),this.hitStop=Math.max(this.hitStop,u?.11:.055),this.shake=Math.max(this.shake,u?.3:.08)}onKO(t,e){this.teams[t.team];const n=this.partner(t.team);if(this.tag&&n&&n.alive){this.say("DOWN!",`${t.def.name} is out`,1.2),this.pendingSwap={team:t.team,t:1.6},this.events.push({type:"announce",text:"Down!"});return}this.winner=1-t.team,this.phase="ko",this.phaseT=3.2,this.slowmo=1.3;const s=this.teams[this.winner].members.every(r=>r.hp===r.d.maxHp);this.say("K.O.!",s?"PERFECT":"",2.2),this.events.push({type:"ko",text:s?"K.O. Perfect!":"K.O.!"})}update(t,e){var o;if(this.dt=t,this.announce&&(this.announce.t-=t,this.announce.t<=0&&(this.announce=null)),this.shake>0&&(this.shake=Math.max(0,this.shake-t*1.6)),this.hitStop>0){this.hitStop-=t;return}let n=t;if(this.slowmo>0&&(this.slowmo-=t,n*=.28),this.dt=n,this.phaseT-=t,this.phase==="intro")this.phaseT<=.8&&((o=this.announce)==null?void 0:o.text)!=="FIGHT!"&&(this.say("FIGHT!","",.8),this.events.push({type:"announce",text:"Fight!"})),this.phaseT<=0&&(this.phase="fight");else if(this.phase==="fight"){if(this.timer-=n,this.timer<=0){this.timer=0;const c=u=>this.teams[u].members.reduce((p,f)=>p+f.hp,0)/this.teams[u].members.reduce((p,f)=>p+f.d.maxHp,0),l=c(0),h=c(1);this.winner=l===h?-2:l>h?0:1,this.phase="ko",this.phaseT=2.6,this.say("TIME!",this.winner===-2?"DRAW":"",2),this.events.push({type:"announce",text:"Time!"})}}else this.phase==="ko"?(this.phaseT<1.6&&this.setResultPoses(),this.phaseT<=0&&this.endRound()):this.phase==="roundOver"&&this.phaseT<=0&&this.startRound();this.pendingSwap&&(this.pendingSwap.t-=n,this.pendingSwap.t<=0&&(this.swap(this.pendingSwap.team,!0),this.pendingSwap=null));const s=this.phase==="fight",r=this.fighter(0),a=this.fighter(1);for(let c=0;c<2;c++){const l=this.fighter(c),h=this.fighter(1-c);l.update(n,s?e[c]:El,h,this);const u=this.partner(c);u&&u.state==="bench"&&u.alive&&(u.hp=Math.min(u.d.maxHp,u.hp+u.d.maxHp*.015*n)),u&&u.state==="tagOut"&&u.update(n,El,h,this)}if(s)for(let c=0;c<2;c++){const l=this.fighter(c),h=this.fighter(1-c),u=l.def.aura;!u||!l.alive||!h.alive||!l.visible||Math.abs(h.x-l.x)<u.radius&&Math.abs(h.y-l.y)<2&&h.state!=="bench"&&h.state!=="out"&&(h.infected>0||this.events.push({type:"infected",f:h,color:u.color}),h.infected=u.linger,h.infectedBy=u,h.hp=Math.max(1,h.hp-u.dps*.5*n),l.meter=Math.min(100,l.meter+4*n))}for(let c=0;c<2;c++){const l=this.fighter(c);l.infected>0&&(l.infected-=n,s&&l.alive&&(l.hp=Math.max(1,l.hp-l.infectedBy.dps*n),Math.random()<n*9&&this.events.push({type:"aura",x:l.x,y:l.y+.4+Math.random()*1.4,z:l.z,color:l.infectedBy.color})))}if(r.visible&&a.visible&&r.state!=="grabbed"&&a.state!=="grabbed"&&r.state!=="tagIn"&&a.state!=="tagIn"){const c=a.x-r.x;if(Math.abs(c)<.8&&Math.abs(r.y-a.y)<1.3){const l=(.8-Math.abs(c))/2*(Math.sign(c)||1);r.x=Gs(r.x-l,-Ee,Ee),a.x=Gs(a.x+l,-Ee,Ee),Math.abs(a.x-r.x)<.79&&(Math.abs(r.x)>=Ee?a.x=r.x+Math.sign(-r.x)*.8:r.x=a.x-Math.sign(c||1)*.8)}}this.updateProjectiles(n)}updateProjectiles(t){for(const e of this.projectiles){e.life-=t,e.arc&&(e.vy-=14*t),e.x+=e.vx*t,e.y+=e.vy*t,e.ground&&(e.y=0);const n=this.fighter(1-e.team);if(n.hittable()&&Math.abs(e.x-n.x)<.4+e.size&&e.y>n.y-.4&&e.y<n.y+(n.crouch?1.15:2)){const s=e.owner,r=s.facing;s.facing=Math.sign(e.vx),this.resolveHit(s,n,e.m),s.facing=r,e.life=0,e.m.proj.splash?this.events.push({type:"boom",x:e.x,y:e.y,z:e.z,color:e.m.color??16767053,big:e.m.proj.splash>2}):this.events.push({type:"pop",x:e.x,y:e.y,z:e.z,color:e.m.color??16777215,prop:e.m.proj.prop})}for(const s of this.projectiles)s!==e&&s.team!==e.team&&s.life>0&&e.life>0&&!e.ground&&!s.ground&&Math.abs(s.x-e.x)<s.size+e.size&&Math.abs(s.y-e.y)<.6&&(e.life=0,s.life=0,this.events.push({type:"boom",x:(e.x+s.x)/2,y:e.y,z:e.z,color:16777215}));e.life>0&&(Math.abs(e.x)>Ee+1||e.y<0||e.ground&&e.life<.05)&&(e.life=0,e.m.proj.splash?this.explode(e):this.events.push({type:"pop",x:e.x,y:Math.max(.2,e.y),z:e.z,color:e.m.color??16777215,prop:e.m.proj.prop}))}this.projectiles=this.projectiles.filter(e=>e.life>0)}setResultPoses(){var e;if(this.winner<0)return;const t=this.fighter(this.winner);t.alive&&t.grounded&&(t.canAct()||t.state==="attack"&&!((e=t.move)!=null&&e.kind))&&(t.state="win",t.move=null)}endRound(){this.winner>=0?this.teams[this.winner].wins++:this.winner===-2&&(this.teams[0].wins++,this.teams[1].wins++);const t=this.teams[0].wins,e=this.teams[1].wins;if(t>=2||e>=2){this.matchWinner=t===e?-2:t>e?0:1,this.phase="matchOver",this.phaseT=999;const n=this.matchWinner>=0?this.teams[this.matchWinner].members.map(s=>s.def.name).join(" & "):"NOBODY";this.say(this.matchWinner>=0?`${n} WIN${this.tag?"":"S"}!`:"DRAW GAME","Q: rematch · E: character select",999),this.events.push({type:"announce",text:this.matchWinner>=0?`${n} wins!`:"Draw game"});for(let s=0;s<2;s++){const r=this.fighter(s);r.alive&&r.grounded&&(r.state=s===this.matchWinner?"win":"lose",r.move=null)}}else this.phase="roundOver",this.phaseT=1.2}}class Or{constructor(t=.6){this.skill=t,this.decideT=.5,this.holdT=0,this.hold={},this.blockT=0,this.blockLow=!1,this.seen=null}think(t,e,n,s){const r={left:!1,right:!1,up:!1,down:!1,qP:!1,eP:!1,tagP:!1};if(n.phase!=="fight"||!t||!e)return r;const a=t.facing>0?"right":"left",o=t.facing>0?"left":"right",c=Math.abs(e.x-t.x),l=Math.random;e.state==="attack"&&e.move&&e.move!==this.seen&&t.canAct()&&(this.seen=e.move,(e.move.kind==="projectile"||c<2.6)&&l()<this.skill*.6&&!e.move.unblockable&&(this.blockT=.45,this.blockLow=e.move.level==="low",e.move.level==="high"&&l()<.4&&(this.blockT=.35,this.blockLow=!0))),e.state!=="attack"&&(this.seen=null);for(const v of n.projectiles)v.team!==t.team&&Math.abs(v.x-t.x)<4&&Math.sign(t.x-v.x)===Math.sign(v.vx)&&this.blockT<=0&&l()<this.skill*.08&&(v.m.level==="high"?(this.blockT=.4,this.blockLow=!0):l()<.5?(this.hold={up:!0,[a]:!0},this.holdT=.15):(this.blockT=.5,this.blockLow=!1));if(this.blockT>0)return this.blockT-=s,r[o]=!0,r.down=this.blockLow,r;if(this.holdT>0&&(this.holdT-=s,Object.assign(r,this.hold)),e.state==="juggle"&&c<1.9&&e.y<2&&t.canAct()&&l()<this.skill*.35)return l()<.6?r.qP=!0:r.eP=!0,r;if(t.moves.heal&&t.healUses<t.moves.heal.uses&&t.hp<t.d.maxHp*.5&&c>3.2&&t.canAct()&&l()<.05)return r.qP=!0,r.down=!0,this.hold={down:!0},this.holdT=.1,r;const h=n.partner(t.team);if(h&&h.state==="bench"&&h.hp>t.hp+40&&t.hp<t.d.maxHp*.4&&c>2.2&&l()<.03)return r.tagP=!0,r;if(this.decideT-=s,this.decideT>0||!t.canAct())return r;this.decideT=.12+(1-this.skill)*.35+l()*.25,this.hold={},this.holdT=0;const u=t.moves.special,p=u.kind==="projectile"||u.kind==="rain",f=1.3*t.d.reachMult+.4;if(t.meter>=100&&(p&&c>2.5||u.kind==="slam"&&c<3||!p&&c<(u.reach||1.5)+.6||u.kind==="teleport")&&l()<.6)return r.qP=!0,r.eP=!0,r;if(t.moves.power.proj&&c>2.6&&c<9&&l()<.3)return r.qP=!0,r[a]=!0,this.hold={[a]:!0},this.holdT=.08,r;if(c>f+.3)return l()<.06?(this.hold={up:!0,[a]:!0},this.holdT=.1):(this.hold={[a]:!0},this.holdT=.15+l()*.35),Object.assign(r,this.hold),r;const g=l();return g<.28?r.qP=!0:g<.48?r.eP=!0:g<.63?(r.qP=!0,r[a]=!0,this.hold={[a]:!0},this.holdT=.08):g<.76?(r.eP=!0,r.down=!0,this.hold={down:!0},this.holdT=.08):g<.86?(this.hold={[o]:!0},this.holdT=.2+l()*.3):g<.92?(this.hold={[o]:!0,down:!0},this.holdT=.3):(this.hold={up:!0,[a]:!0},this.holdT=.1),Object.assign(r,this.hold),r}}const Ro=["body","spine","neck","shL","elL","shR","elR","hipL","knL","hipR","knR"],wt=i=>i,Se={shL:[-.75,0,.15],elL:[-1.75,0,0],shR:[-.55,0,-.2],elR:[-2.1,0,0]},Ze={hipL:[-.35,0,.04],knL:[.45,0,0],hipR:[.3,0,-.04],knR:[.45,0,0]},Mr={hipL:[-1.35,0,.06],knL:[2.1,0,0],hipR:[-.55,0,-.06],knR:[1.9,0,0]},re={stance:wt({by:-.06,body:[0,0,0],spine:[.1,-.35,0],neck:[0,.3,0],...Se,...Ze}),crouch:wt({by:-.42,body:[0,0,0],spine:[.45,-.2,0],neck:[-.3,.2,0],...Se,...Mr}),block:wt({by:-.08,spine:[.25,-.1,0],neck:[.2,.1,0],shL:[-1.05,0,.35],elL:[-2.4,0,0],shR:[-1.05,0,-.35],elR:[-2.4,0,0],...Ze}),crouchBlock:wt({by:-.42,spine:[.5,-.1,0],neck:[-.2,0,0],shL:[-1.05,0,.35],elL:[-2.4,0,0],shR:[-1.05,0,-.35],elR:[-2.4,0,0],...Mr}),jump:wt({by:0,spine:[.2,-.2,0],...Se,hipL:[-1.3,0,0],knL:[1.9,0,0],hipR:[-.9,0,0],knR:[1.7,0,0]}),jab:wt({by:-.06,spine:[.15,-.75,0],neck:[0,.6,0],shL:[-1.62,0,-.1],elL:[-.05,0,0],shR:[-.55,0,-.2],elR:[-2.1,0,0],...Ze}),chop_w:wt({by:-.04,spine:[-.1,-.2,0],neck:[0,.2,0],shL:[-2.8,0,.3],elL:[-.8,0,0],...Ze,shR:Se.shR,elR:Se.elR}),chop:wt({by:-.12,spine:[.4,-.5,0],neck:[-.2,.4,0],shL:[-1.3,0,.1],elL:[-.2,0,0],shR:Se.shR,elR:Se.elR,...Ze}),palm:wt({by:-.1,spine:[.3,-.6,0],neck:[-.1,.5,0],shL:[-1.55,0,-.1],elL:[-.1,0,0],shR:[-1.4,0,.1],elR:[-.3,0,0],hipL:[-.6,0,0],knL:[.6,0,0],hipR:[.5,0,0],knR:[.2,0,0]}),frontKick:wt({by:0,spine:[-.3,-.2,0],neck:[.3,.2,0],...Se,hipL:[.1,0,0],knL:[.25,0,0],hipR:[-1.65,0,0],knR:[.1,0,0]}),roundhouse_w:wt({by:0,body:[0,-.6,0],spine:[-.1,-.2,0],...Se,hipL:[0,0,0],knL:[.2,0,0],hipR:[-1.1,0,0],knR:[1.6,0,0]}),roundhouse:wt({by:.02,body:[0,-1.35,.25],spine:[-.25,0,0],neck:[0,1.1,0],...Se,hipL:[0,0,0],knL:[.15,0,0],hipR:[-1.75,0,0],knR:[.05,0,0]}),knee:wt({by:.02,spine:[.35,-.2,0],neck:[-.2,.2,0],shL:[-1.4,0,.3],elL:[-.9,0,0],shR:[-1.4,0,-.3],elR:[-.9,0,0],hipL:[.05,0,0],knL:[.2,0,0],hipR:[-2,0,0],knR:[2.5,0,0]}),haymaker_w:wt({by:-.1,spine:[-.05,.6,0],neck:[0,-.4,0],shL:[-1,0,.3],elL:[-1.5,0,0],shR:[.2,0,-.5],elR:[-1.6,0,0],...Ze}),haymaker:wt({by:-.14,spine:[.35,-1,0],neck:[-.2,.8,0],shL:[-.3,0,.4],elL:[-1.8,0,0],shR:[-1.62,0,.2],elR:[-.05,0,0],hipL:[-.75,0,0],knL:[.8,0,0],hipR:[.55,0,0],knR:[.15,0,0]}),uppercut_w:wt({by:-.32,spine:[.45,.3,0],neck:[-.3,0,0],shL:Se.shL,elL:Se.elL,shR:[.4,0,-.2],elR:[-1.7,0,0],...Mr}),uppercut:wt({by:.12,spine:[-.3,-.6,0],neck:[.3,.4,0],shL:Se.shL,elL:Se.elL,shR:[-2.85,0,.1],elR:[-.9,0,0],hipL:[-.2,0,0],knL:[.1,0,0],hipR:[.35,0,0],knR:[.1,0,0]}),headbutt_w:wt({by:-.06,spine:[-.45,0,0],neck:[-.3,0,0],shL:[.5,0,.3],elL:[-.6,0,0],shR:[.5,0,-.3],elR:[-.6,0,0],...Ze}),headbutt:wt({by:-.12,spine:[.85,0,0],neck:[.35,0,0],shL:[.7,0,.3],elL:[-.3,0,0],shR:[.7,0,-.3],elR:[-.3,0,0],hipL:[-.8,0,0],knL:[.7,0,0],hipR:[.5,0,0],knR:[.1,0,0]}),backfist:wt({by:-.04,body:[0,0,0],spine:[.1,-.2,0],neck:[0,.2,0],shL:[-1.55,0,-.1],elL:[-.05,0,0],shR:Se.shR,elR:Se.elR,...Ze}),elbow:wt({by:-.14,spine:[.45,-.9,0],neck:[-.2,.8,0],shL:[-1.45,0,.7],elL:[-2.6,0,0],shR:Se.shR,elR:Se.elR,hipL:[-.9,0,0],knL:[.9,0,0],hipR:[.6,0,0],knR:[.1,0,0]}),sweep:wt({by:-.55,body:[0,0,0],spine:[.5,0,0],neck:[-.4,0,0],shL:[-.5,0,.5],elL:[-.2,0,0],shR:[-.5,0,-.5],elR:[-.2,0,0],hipL:[-1.9,0,0],knL:[2.5,0,0],hipR:[-1.5,0,.1],knR:[0,0,0]}),lowKick:wt({by:-.12,spine:[.15,-.3,0],neck:[0,.3,0],...Se,hipL:[-.2,0,0],knL:[.5,0,0],hipR:[-.85,0,0],knR:[.05,0,0]}),slide:wt({by:-.62,body:[-1,0,0],spine:[.4,0,0],neck:[.5,0,0],shL:[.9,0,.3],elL:[-.3,0,0],shR:[.9,0,-.3],elR:[-.3,0,0],hipL:[-.5,0,0],knL:[1.2,0,0],hipR:[-.1,0,0],knR:[0,0,0]}),airKick:wt({by:0,body:[.1,-.3,0],spine:[-.3,0,0],...Se,hipL:[-.5,0,0],knL:[1.8,0,0],hipR:[-1.6,0,0],knR:[0,0,0]}),cast_w:wt({by:-.12,spine:[-.15,.3,0],neck:[0,-.2,0],shL:[.4,0,.3],elL:[-1.4,0,0],shR:[.4,0,-.3],elR:[-1.4,0,0],...Ze}),cast:wt({by:-.14,spine:[.25,-.2,0],neck:[-.1,.2,0],shL:[-1.6,0,-.25],elL:[0,0,0],shR:[-1.6,0,.25],elR:[0,0,0],hipL:[-.7,0,0],knL:[.7,0,0],hipR:[.5,0,0],knR:[.15,0,0]}),grab:wt({by:-.1,spine:[.35,0,0],neck:[-.2,0,0],shL:[-1.5,.3,.5],elL:[-.7,0,0],shR:[-1.5,-.3,-.5],elR:[-.7,0,0],...Ze}),grabLift:wt({by:-.05,spine:[-.35,0,0],neck:[.3,0,0],shL:[-2.8,0,.2],elL:[-.4,0,0],shR:[-2.8,0,-.2],elR:[-.4,0,0],hipL:[-.3,0,0],knL:[.3,0,0],hipR:[.3,0,0],knR:[.3,0,0]}),slam:wt({by:0,spine:[-.2,0,0],shL:[-3,0,.3],elL:[-.3,0,0],shR:[-3,0,-.3],elR:[-.3,0,0],hipL:[-1.4,0,0],knL:[2,0,0],hipR:[-1.4,0,0],knR:[2,0,0]}),hitstun:wt({by:-.08,spine:[-.5,.4,0],neck:[-.5,0,0],shL:[-.5,0,.7],elL:[-.6,0,0],shR:[-.4,0,-.7],elR:[-.6,0,0],hipL:[-.4,0,0],knL:[.6,0,0],hipR:[.2,0,0],knR:[.4,0,0]}),juggle:wt({by:0,body:[-.9,0,0],spine:[-.3,0,0],neck:[-.4,0,0],shL:[-2.4,0,.6],elL:[-.4,0,0],shR:[-2.4,0,-.6],elR:[-.4,0,0],hipL:[-.7,0,0],knL:[.9,0,0],hipR:[-.2,0,0],knR:[.3,0,0]}),down:wt({by:-.72,body:[-1.57,0,0],spine:[0,0,0],neck:[0,.4,0],shL:[-2.7,0,.5],elL:[-.2,0,0],shR:[-2.4,0,-.6],elR:[-.3,0,0],hipL:[-.1,0,.15],knL:[.2,0,0],hipR:[-.3,0,-.1],knR:[.5,0,0]}),getup:wt({by:-.3,spine:[.5,0,0],neck:[0,0,0],...Se,...Mr}),win:wt({by:0,spine:[-.15,0,0],neck:[.2,0,0],shL:[-2.95,0,.35],elL:[-.3,0,0],shR:[-2.95,0,-.35],elR:[-.3,0,0],hipL:[0,0,.12],knL:[0,0,0],hipR:[0,0,-.12],knR:[0,0,0]}),flex:wt({by:-.05,spine:[-.05,0,0],neck:[.1,0,0],shL:[-1.4,0,1.3],elL:[-2.2,0,0],shR:[-1.4,0,-1.3],elR:[-2.2,0,0],hipL:[0,0,.18],knL:[.1,0,0],hipR:[0,0,-.18],knR:[.1,0,0]}),lose:wt({by:-.2,spine:[.7,0,0],neck:[.5,0,0],shL:[.1,0,.1],elL:[-.2,0,0],shR:[.1,0,-.1],elR:[-.2,0,0],hipL:[-.4,0,0],knL:[.7,0,0],hipR:[-.4,0,0],knR:[.7,0,0]}),throw_w:wt({by:-.04,spine:[-.25,.5,0],neck:[.1,-.4,0],shL:[-.9,0,.3],elL:[-.6,0,0],shR:[-2.9,0,-.2],elR:[-1.3,0,0],...Ze}),throw:wt({by:-.12,spine:[.35,-.6,0],neck:[-.2,.5,0],shL:[-.3,0,.4],elL:[-.8,0,0],shR:[-1.35,0,-.1],elR:[-.05,0,0],hipL:[-.7,0,0],knL:[.7,0,0],hipR:[.5,0,0],knR:[.15,0,0]}),rain:wt({by:0,spine:[-.2,0,0],neck:[.3,0,0],shL:[-2.6,0,.7],elL:[-.9,0,0],shR:[-2.6,0,-.7],elR:[-.9,0,0],hipL:[0,0,.12],knL:[0,0,0],hipR:[0,0,-.12],knR:[0,0,0]}),seated:wt({by:-.1,body:[-.3,0,0],spine:[-.15,0,0],neck:[.25,0,0],shL:[-.5,0,.35],elL:[-1.2,0,0],shR:[-.5,0,-.35],elR:[-1.2,0,0],hipL:[-1.5,0,.08],knL:[1.3,0,0],hipR:[-1.5,0,-.08],knR:[1.3,0,0]}),bellyBump_w:wt({by:-.04,spine:[.25,0,0],neck:[-.2,0,0],shL:[.5,0,.4],elL:[-.5,0,0],shR:[.5,0,-.4],elR:[-.5,0,0],...Ze}),bellyBump:wt({by:-.02,body:[.2,0,0],spine:[-.55,0,0],neck:[.4,0,0],shL:[.9,0,.5],elL:[-.3,0,0],shR:[.9,0,-.5],elR:[-.3,0,0],hipL:[-.6,0,0],knL:[.4,0,0],hipR:[.4,0,0],knR:[.2,0,0]}),inject:wt({by:-.04,spine:[.3,0,0],neck:[.5,0,0],shL:[-.5,0,.3],elL:[-1,0,0],shR:[-.7,0,.75],elR:[-1.5,0,0],...Ze}),wag:wt({by:0,spine:[-.1,0,0],neck:[.1,0,0],shL:[-.3,0,.3],elL:[-.6,0,0],shR:[-2.2,0,-.3],elR:[-1.2,0,0],hipL:[0,0,.08],knL:[0,0,0],hipR:[0,0,-.08],knR:[0,0,0]}),phone:wt({by:0,spine:[.15,0,0],neck:[.45,0,0],shL:[-1.2,0,-.2],elL:[-1.6,0,0],shR:[-.3,0,-.2],elR:[-.6,0,0],hipL:[0,0,.08],knL:[0,0,0],hipR:[0,0,-.08],knR:[0,0,0]}),pay:wt({by:0,spine:[.15,0,0],neck:[.1,0,0],shL:[-.4,0,.2],elL:[-.8,0,0],shR:[-1.5,0,.1],elR:[-.3,0,0],hipL:[0,0,.08],knL:[0,0,0],hipR:[0,0,-.08],knR:[0,0,0]}),stop:wt({by:0,spine:[-.1,0,0],neck:[-.1,0,0],shL:[-.2,0,.2],elL:[-.4,0,0],shR:[-1.6,0,-.2],elR:[-.4,0,0],hipL:[0,0,.1],knL:[0,0,0],hipR:[0,0,-.1],knR:[0,0,0]}),shrug:wt({by:-.02,spine:[0,0,0],neck:[-.2,0,.2],shL:[-.5,0,1],elL:[-1.6,0,0],shR:[-.5,0,-1],elR:[-1.6,0,0],hipL:[0,0,.1],knL:[0,0,0],hipR:[0,0,-.1],knR:[0,0,0]}),rage:wt({by:-.06,spine:[.3,0,0],neck:[.2,0,0],shL:[-2.7,0,.5],elL:[-.8,0,0],shR:[-.4,0,-.3],elR:[-1.8,0,0],hipL:[-.2,0,.1],knL:[.3,0,0],hipR:[-.2,0,-.1],knR:[.3,0,0]}),swoon:wt({by:0,spine:[-.2,0,.1],neck:[-.3,0,.2],shL:[-2,0,.6],elL:[-1.6,0,0],shR:[-.6,0,-.4],elR:[-1.8,0,0],hipL:[0,0,.05],knL:[.2,0,0],hipR:[-.3,0,-.05],knR:[.6,0,0]}),bench:wt({by:-.02,spine:[0,0,0],neck:[0,0,0],shL:[-.4,0,.1],elL:[-1.4,0,0],shR:[-.4,0,-.1],elR:[-1.4,0,0],hipL:[0,0,.05],knL:[0,0,0],hipR:[0,0,-.05],knR:[0,0,0]})};for(const i of Object.keys(re)){const t=re[i];for(const e of Ro)t[e]||(t[e]=e==="body"?[0,0,0]:re.stance[e]||[0,0,0]);t.by===void 0&&(t.by=0)}function Tg(i,t){const e=i.move;let n=re.stance,s=14,r=0,a=null;if(i.poseOverride&&re[i.poseOverride])return{pose:re[i.poseOverride],rate:i.poseRate||10,spin:0,extra:a};switch(i.state){case"idle":case"walk":n=(i.inBack&&i.state==="walk",re.stance);break;case"crouch":n=i.inBack?re.crouchBlock:re.crouch;break;case"blockstun":n=i.crouch?re.crouchBlock:re.block,s=30;break;case"jump":case"tagIn":case"tagOut":n=re.jump,s=12;break;case"hitstun":case"grabbed":n=re.hitstun,s=30;break;case"juggle":n=re.juggle,s=10;break;case"down":case"ko":n=re.down,s=9;break;case"getup":n=re.getup,s=12;break;case"win":n=i.def.stats.power>=8?re.flex:re.win,s=6;break;case"lose":n=re.lose,s=4;break;case"bench":n=re.bench,s=6;break;case"attack":{const{s:o,a:c}=i.mt,l=i.moveT;let h=e.pose;e.kind==="flurry"&&(h=["frontKick","roundhouse","knee","frontKick","roundhouse","uppercut"][Math.min(5,i.hitsDone)]),e.kind==="grab"&&i.grabT>=0&&(h="grabLift"),e.kind==="slam"&&(h=i.slamState==="done"?"crouch":i.slamState?"slam":"crouch"),l<o?(n=re[h+"_w"]||re[h],s=re[h+"_w"]?16:9):l<o+c||e.air?(n=re[h],s=38,e.spin&&(r=-Math.min(1,(l-o)/Math.max(.05,c))*Math.PI*2)):(n=re.stance,s=11),e.kind==="flurry"&&l>=o&&l<o+c&&(s=45),e.kind==="rain"&&l>=o&&l<o+c&&(n=re.rain,s=20),e.prop==="seat"&&l<o+c+.15&&(n=re.seated,s=25);break}}return{pose:n,rate:s,spin:r,extra:a}}function ds(i,t,e,n){var g,v,m,d,y,E,x;const{pose:s,rate:r,spin:a}=Tg(t),o=1-Math.exp(-r*e),c=i.cur;for(const A of Ro){const T=s[A],C=c[A];for(let I=0;I<3;I++)C[I]+=(T[I]-C[I])*o}const l=i.hipH||.96;if(i.bodyY+=(s.by*(l/.96)-i.bodyY)*o,i.held){const A=t.state==="attack"&&((v=(g=t.move)==null?void 0:g.proj)==null?void 0:v.prop)&&t.moveT>t.mt.s;for(const T of Object.values(i.held))T.mesh.visible=!(A&&T.name===t.move.proj.prop)}if((m=i.extras)!=null&&m.syringe){const A=t.state==="attack"&&((d=t.move)==null?void 0:d.kind)==="heal";i.extras.syringe.visible=A,(y=i.held)!=null&&y.R&&(i.held.R.mesh.visible=i.held.R.mesh.visible&&!A)}(E=i.extras)!=null&&E.seat&&(i.extras.seat.visible=t.state==="attack"&&((x=t.move)==null?void 0:x.prop)==="seat");const h=i.j;let u=0,p=0,f=0;if(t.state==="walk"){const A=t.walkPhase;u=Math.sin(A)*.45,p=-Math.sin(A)*.45,f=Math.abs(Math.cos(A))*.04}else t.state==="idle"||t.state==="bench"?f=Math.sin(n*4+t.team*2)*.025:t.state==="win"&&(f=Math.abs(Math.sin(n*5))*.12);for(const A of Ro)h[A].rotation.set(c[A][0],c[A][1],c[A][2]);if(h.hipL.rotation.x+=u,h.hipR.rotation.x+=p,h.knL.rotation.x+=Math.max(0,-u)*.8,h.knR.rotation.x+=Math.max(0,-p)*.8,h.body.position.y=l+i.bodyY+f,h.body.rotation.y+=a,i.chibi&&t.faceCam!==!1){const A=t.facing!==void 0&&t.state!=="down"&&t.state!=="ko"&&t.state!=="juggle"?-t.facing*(t.state==="attack"?.35:.75):0;i.lookYaw=(i.lookYaw||0)+(A-(i.lookYaw||0))*Math.min(1,e*6),h.neck.rotation.y+=i.lookYaw}t.state==="juggle"&&(h.body.rotation.x=c.body[0]-Math.max(0,-t.vy)*.08)}const Qe=(i,t={})=>new en({color:i,roughness:.6,...t}),Be=(i,t,e,n,s,r,a,o=.04)=>{const c=new Pt(new Sn(i,t,e,3,o),n);return c.position.set(s,r,a),c.castShadow=c.receiveShadow=!0,c},Is=(i,t,e,n,s,r,a=!1)=>{const o=ts(i,n,s,r,512,Math.round(512*(e/t))),c=a?new ke({map:o,toneMapped:!1}):new en({map:o});return new Pt(new xn(t,e),c)},yr=(i,t=!1)=>(e,n)=>{const{add:s,M:r,H:a,y:o}=n,c=r(i,{roughness:.6});if(s(e,new Nt(a*1.06,32,16,0,Math.PI*2,0,Math.PI/2.3),c,0,o+a*.06,-.03).scale.set(1.05,1,1.06),t){Hs(e,n,i,[{r:a*.14,len:a*1.4,x:a*.8,y:o-a*.6,z:a*.1,rz:-.15},{r:a*.14,len:a*1.4,x:-a*.8,y:o-a*.6,z:a*.1,rz:.15}]);for(const u of[-1,1])s(e,new Nt(a*.12,8,6),r(13707818),u*a*.92,o-a*1.35,a*.15);return}const h=[];for(let u=0;u<9;u++){const p=-Math.PI*.7+u/8*Math.PI*1.4;h.push({r:a*.2,len:a*1.6,x:Math.sin(p)*a*.95,y:o-a*.75,z:-Math.cos(p)*a*.8,rx:Math.cos(p)*-.15})}Hs(e,n,i,h)},Sr={attendant:{id:"npc-attendant",look:{skinOverride:15780008,cartoon:{eyes:"#3a2a1a",lashes:!0,lips:"#b0203a"},headScale:1.05,bulk:.85,size:1.02,top:7019834,sleeves:7019834,forearms:"skin",bottom:7019834,skirt:7019834,shins:"skin",collarColor:16777215,cuffs:!0,trim:15325616,shoes:wi(1118481,1118481,null,!1),faceWide:1.6,faceTall:1.5,headwear:(i,t)=>{yr(3810324)(i,t);const{add:e,M:n,H:s,y:r}=t,a=e(i,new ae(s*.45,s*.5,s*.35,24),n(7019834),s*.25,r+s*.95,0);a.rotation.z=-.2}}},russian:{id:"npc-russian",look:{skinOverride:16178376,cartoon:{eyes:"#2f6fd1",lashes:!0,lips:"#d1123a",brows:"#c9a050"},headScale:1.08,bulk:.82,size:1.02,top:13111342,sleeves:"skin",forearms:"skin",bottom:13111342,skirt:13111342,shins:"skin",collar:!1,shoes:wi(1118481,1118481,null,!1),headwear:yr(15913594),chest:(i,{add:t,M:e,torsoD:n})=>t(i,new on(.12,.012,6,24),e(16777215,{metalness:.5,roughness:.2}),0,.46,n/2-.02)}},thai:{id:"npc-thai",look:{skinOverride:14726286,cartoon:{eyes:"#2a1a10",lashes:!0,lips:"#d84a6a",brows:"#1a1010"},headScale:1.08,bulk:.82,size:1,top:16740264,sleeves:16740264,forearms:"skin",bottom:16740264,skirt:16756736,shins:"skin",collar:!1,shoes:wi(16777215,15658734,null,!1),headwear:yr(1314832),hold:{L:"iphone"}}},german:{id:"npc-german",look:{skinOverride:16176832,cartoon:{eyes:"#3a7a3a",lashes:!0,lips:"#c2185b",brows:"#c9a050",angry:!0},headScale:1.08,bulk:.88,size:1.04,top:3046706,sleeves:16777215,forearms:"skin",bottom:3046706,skirt:3046706,shins:"skin",collarColor:16777215,shoes:wi(3810324,3810324,null,!1),headwear:yr(15913594,!0),chest:(i,{add:t,M:e,torsoD:n})=>{t(i,new Wt(.22,.2,.01),e(16777215),0,.42,n/2+.003);for(let s=0;s<3;s++)t(i,new Wt(.16,.012,.012),e(13707818),0,.12+s*.06,n/2+.008)}}}};function Ag(){let i=document.getElementById("cutscene");return i||(i=document.createElement("div"),i.id="cutscene",i.className="layer",document.body.appendChild(i)),i}function Ds(i,t){const e=document.createElement("div");return e.className=i,e.innerHTML=t,Ag().appendChild(e),e}const _h={robi:i=>{const t=new ce,e=Qe(4853800),n=Qe(14267242,{metalness:.7,roughness:.3});t.add(Be(.25,2.6,1.2,e,.2,1.3,-1.2),Be(.25,2.6,1.2,e,2.2,1.3,-1.2),Be(2.25,.4,1.2,e,1.2,2.6,-1.2));const s=Be(1.7,2.2,.06,Qe(8004680),1.2,1.1,-.65);t.add(s);const r=Is("QSUITE",1.6,.3,"#2a0614","#e8c88a","bold 72px Georgia",!0);r.position.set(1.2,2.6,-.59),t.add(r);const a=Is("BUSINESS ONLY",1.2,.16,"#d9b36a","#2a0614","bold 50px Arial");a.position.set(1.2,1.9,-.6),t.add(a),t.add(Be(.06,1.1,.06,n,.4,.55,.1),Be(.06,1.1,.06,n,-.7,.55,.1));const o=new Pt(new on(.55,.03,8,20,Math.PI),Qe(13111342));return o.position.set(-.15,1.05,.1),o.rotation.z=Math.PI,t.add(o),{set:t,cast:{robi:{def:i,x:-3.2,z:.4},att:{def:Sr.attendant,x:.9,z:.1,yaw:-.9}},cam:{pos:[-.4,1.7,5.4],look:[-.2,1.1,-.3]},steps:[{t:.1,run:c=>c.walk("robi",-.9,.4,1.4)},{t:1.6,run:c=>{c.bubble("robi","One Qsuite please. I have... continuations.",2),c.pose("robi","pay")}},{t:3.3,run:c=>{c.pose("att","stop"),c.bubble("att","Sir. Your ticket says 47E. Economy.",2.1)}},{t:5,run:c=>{c.stamp("REJECTED"),c.knock("robi",-2.6),c.sfx("boom")}},{t:5.8,run:c=>c.pose("robi","lose")}],caption:"ROBI. Loves a continuation. Has never once actually flown first class.",duration:8.6}},sacha:i=>({set:new ce,cast:{s:{def:i,x:-.4,z:.3,yaw:.3}},cam:{pos:[.3,1.7,4.8],look:[.2,1.2,0]},steps:[{t:.1,run:t=>{t.pose("s","phone"),t.phone([["bot","Your Smash Burger is on the way! ETA 12 min"]])}},{t:1.4,run:t=>t.phone([["bot","Driver is having a little rest. ETA 47 min"]])},{t:2.3,run:t=>{t.inject("s"),t.bubble("s","47 minutes?! Hold on, I need a top-up for this...",2.2)}},{t:3.6,run:t=>{t.endInject("s"),t.phone([["me","WHERE IS MY SMASH BURGER"]]),t.pose("s","rage"),t.shake("s",1.6)}},{t:4.6,run:t=>{t.phone([["me","I AM WASTING AWAY HERE"]]),t.inject("s")}},{t:5.5,run:t=>{t.endInject("s"),t.pose("s","rage"),t.phone([["sys","Complaint #14 this week submitted ★☆☆☆☆"]]),t.bubble("s","Unacceptable. I want a refund AND the burger.",2.4)}}],caption:"SPLASHA. One-star reviewer. Five-star eater. Topped up right in the belly.",duration:9.2}),oliver:i=>{const t=new ce,e=Qe(15920612,{roughness:.25}),n=Qe(14267242,{metalness:.8,roughness:.3});t.add(Be(2.2,1.05,.7,e,.6,.52,-.9),Be(2.3,.06,.8,n,.6,1.07,-.9));const s=new Pt(new Nt(.08,16,8,0,Math.PI*2,0,Math.PI/2),n);s.position.set(1.1,1.1,-.8),t.add(s);const r=Is("★★★★★  GRAND HOTEL",2.4,.32,"#1a1410","#e8c88a","bold 40px Georgia",!0);return r.position.set(.6,2.5,-1.5),t.add(r),t.add(Be(3.6,3,.1,Qe(3811872),.6,1.5,-1.6)),{set:t,cast:{o:{def:i,x:.1,z:-.2,yaw:0},lady:{def:Sr.russian,x:3.4,z:.3}},cam:{pos:[.6,1.7,5],look:[.6,1.2,-.3]},steps:[{t:.2,run:a=>{a.pose("o","pay"),a.bubble("o","Presidential suite. Put it on the card.",2)}},{t:2.1,run:a=>{a.popup("card","💳 PAYMENT APPROVED<br><b>£4,999</b> / night<br><small>Presidential Suite · 5★</small>"),a.sfx("confirm")}},{t:3,run:a=>a.walk("lady",.95,.15,1.5)},{t:4.9,run:a=>{a.face("lady","o"),a.bubble("lady","Privet, Oliver...",2.2),a.hearts("o"),a.pose("o","swoon")}}],caption:"ANSWER OLIVER. Top vibe coder. Pays for everything. Somehow everyone knows.",duration:8.4}},vickers:i=>{const t=new ce,e=Qe(10473727,{transparent:!0,opacity:.35,roughness:.05,metalness:.2}),n=Qe(3817290,{metalness:.6});t.add(Be(3.6,3,.12,Qe(14209732),.6,1.5,-1.6)),t.add(Be(1.3,2.2,.05,e,2,1.1,-1.5),Be(.06,2.3,.1,n,1.35,1.15,-1.5),Be(.06,2.3,.1,n,2.65,1.15,-1.5));const s=Is("ARRIVALS",1.4,.26,"#1a2a4a","#ffd84d","bold 72px Arial",!0);return s.position.set(2,2.45,-1.48),t.add(s),{set:t,cast:{v:{def:i,x:-.6,z:.2,yaw:.5},lady:{def:Sr.thai,x:2,z:-1.2}},cam:{pos:[.6,1.7,5.2],look:[.6,1.15,-.4]},steps:[{t:.2,run:r=>r.walk("lady",.7,.2,1.3)},{t:1.9,run:r=>{r.face("lady","v"),r.bubble("lady","Sawasdee ka!",1.6)}},{t:3,run:r=>{r.pose("v","pay"),r.bubble("v","Say no more. I ranked us a flight.",2.2)}},{t:4.6,run:r=>{r.popup("ticket","✈ BOARDING PASS<br><b>BKK → LHR</b><br><small>Business · Paid by SEO JESUS</small>"),r.sfx("confirm"),r.pose("lady","win"),r.hearts("lady")}}],caption:"SEO JESUS. Ranks number one for 'buy her a flight'.",duration:8.2}},jamie:i=>{const t=new ce;t.add(Be(3.6,3,.12,Qe(13617080),.6,1.5,-1.6));const e=Be(1,2.1,.08,Qe(5913122),2,1.05,-1.5);t.add(e);const n=new Pt(new Nt(.05,10,8),Qe(14267242,{metalness:.8}));n.position.set(1.65,1.05,-1.43),t.add(n);const s=Is("ORDNUNG MUSS SEIN",1.8,.24,"#111","#ffd84d","bold 42px Arial");return s.position.set(-.4,2.3,-1.53),t.add(s),{set:t,cast:{j:{def:i,x:-.5,z:.2,yaw:.4},lady:{def:Sr.german,x:2,z:-1.2}},cam:{pos:[.6,1.7,5.2],look:[.6,1.15,-.4]},steps:[{t:.1,run:r=>{r.pose("j","shrug"),r.bubble("j","Bank balance: £0.00. Vibes: immaculate.",2)}},{t:2.2,run:r=>r.walk("lady",.8,.2,1.6)},{t:3.7,run:r=>{r.face("lady","j"),r.pose("lady","wag"),r.wag("lady"),r.bubble("lady","NEIN Jamie! You cannot do ze powder, jahhhh!",2.8)}},{t:6.3,run:r=>{r.pose("j","lose")}}],caption:"JAMIE. Zero pounds in the bank, one poodle, and a very strict German supervisor.",duration:8.6}}};function Rg(i){return!!_h[i.id]}function Cg(i,t){const e=_h[i.id](i),n=new ce;n.add(e.set),t.scene.add(n);const s={};for(const[f,g]of Object.entries(e.cast)){const v=vh(g.def);v.root.position.set(g.x,0,g.z),v.root.rotation.y=g.yaw??(g.x<0?.9:-.9),n.add(v.root);const m={state:"idle",walkPhase:0,team:0,def:g.def,inBack:!1,vy:0,faceCam:!1};s[f]={model:v,fake:m,x:g.x,z:g.z,yaw:v.root.rotation.y,target:null,knock:null,shakeT:0,wagT:0};for(let d=0;d<20;d++)ds(v,m,.1,0)}const r=[],a=[],o=Ds("cs-caption",`<div class="cs-name">${i.name}</div><div class="cs-line"></div><div class="cs-skip">Q / Enter / click to skip</div>`);r.push(o);const c=new P,l={walk(f,g,v,m){s[f].target={x:g,z:v,speed:m}},pose(f,g){s[f].fake.poseOverride=g,s[f].fake.poseRate=9},face(f,g){const v=s[f],m=s[g];v.yawTarget=Math.atan2(m.x-v.x,m.z-v.z)},knock(f,g){s[f].knock={toX:g,t:0},s[f].fake.poseOverride="hitstun"},shake(f,g){s[f].shakeT=g},wag(f){s[f].wagT=2.5},bubble(f,g,v){var d;const m=Ds("cs-bubble",g);a.push({el:m,k:f,t:v}),(d=t.speak)==null||d.call(t,g)},stamp(f){r.push(Ds("cs-stamp",f))},popup(f,g){r.push(Ds(`cs-popup cs-${f}`,g))},phone(f){var m;let g=r.find(d=>d.classList.contains("cs-phone"));g||(g=Ds("cs-phone",'<div class="cs-ph-top">Grab Food</div><div class="cs-ph-body"></div>'),r.push(g));const v=g.querySelector(".cs-ph-body");for(const[d,y]of f){const E=document.createElement("div");E.className=`cs-msg ${d}`,E.textContent=y,v.appendChild(E)}(m=t.sfx)==null||m.call(t,"cursor")},inject(f){const g=s[f];g.fake.poseOverride="inject",g.fake.poseRate=14,g.fake.state="attack",g.fake.move={kind:"heal"},g.fake.moveT=0,g.fake.mt={s:0,a:0,r:0},setTimeout(()=>{var v;t.particles.emit(g.x,1,g.z+.5,7208842,24,2.5,.09,.9,-3),(v=t.sfx)==null||v.call(t,"tag")},350)},endInject(f){const g=s[f];g.fake.state="idle",g.fake.move=null},hearts(f){const g=s[f];for(let v=0;v<4;v++)setTimeout(()=>t.particles.emit(g.x,1.9,g.z+.2,16732042,6,2,.08,1,-2),v*220)},sfx(f){var g;(g=t.sfx)==null||g.call(t,f)}};let h=0,u=0,p=!1;return{cam:e.cam,update(f,g){var v;for(h+=f;u<e.steps.length&&h>=e.steps[u].t;)e.steps[u++].run(l);!p&&h>e.duration-3&&(p=!0,o.querySelector(".cs-line").textContent=e.caption.replace(/^[^.]+\.\s*/,""),o.classList.add("show"),(v=t.speak)==null||v.call(t,e.caption.replace(/^[^.]+\.\s*/,`${i.name.toLowerCase()}. `)));for(const m of Object.values(s)){const d=m.model.root;if(m.target){const y=m.target.x-m.x,E=m.target.z-m.z,x=Math.hypot(y,E);if(x<.05)m.target=null,m.fake.state="idle",m.yawTarget=.2*Math.sign(-m.x||1);else{const A=Math.min(x,m.target.speed*f);m.x+=y/x*A,m.z+=E/x*A,m.fake.state="walk",m.fake.walkPhase+=f*10,m.fake.facing=1,m.yawTarget=Math.atan2(y,E)}}if(m.knock){m.knock.t+=f;const y=Math.min(1,m.knock.t/.5);m.x+=(m.knock.toX-m.x)*Math.min(1,f*8),d.position.y=Math.sin(y*Math.PI)*.5,y>=1&&(m.knock=null)}else d.position.y=0;if(m.yawTarget!==void 0){let y=m.yawTarget-m.yaw;y=Math.atan2(Math.sin(y),Math.cos(y)),m.yaw+=y*Math.min(1,f*8)}d.rotation.y=m.yaw,d.position.x=m.x+(m.shakeT>0?(Math.random()-.5)*.06:0),d.position.z=m.z,m.shakeT>0&&(m.shakeT-=f),m.fake.facing=void 0,ds(m.model,m.fake,f,g),m.wagT>0&&(m.wagT-=f,m.model.j.elR.rotation.z=Math.sin(g*18)*.5)}for(let m=a.length-1;m>=0;m--){const d=a[m];if(d.t-=f,d.t<=0){d.el.remove(),a.splice(m,1);continue}const y=s[d.k];y.model.j.neck.getWorldPosition(c),c.y+=y.model.H*2.1*(y.model.root.scale.y||1),c.project(t.camera),d.el.style.left=`${Math.max(170,Math.min(window.innerWidth-170,(c.x+1)/2*window.innerWidth))}px`,d.el.style.top=`${Math.max(90,(1-c.y)/2*window.innerHeight)}px`}return h>=e.duration},dispose(){var f;t.scene.remove(n);for(const g of r)g.remove();for(const g of a)g.el.remove();(f=speechSynthesis==null?void 0:speechSynthesis.cancel)==null||f.call(speechSynthesis)}}}const wl=0,Co=1,xh=2,Mh=3,yh=4,ks=5,Sh=6,bh=7,ne={grassTop:0,grassSide:1,dirt:2,stone:3,logSide:4,logTop:5,leaves:6,sand:7,plank:8},Pg={[Co]:[ne.grassTop,ne.grassSide,ne.dirt],[xh]:[ne.dirt,ne.dirt,ne.dirt],[Mh]:[ne.stone,ne.stone,ne.stone],[yh]:[ne.logTop,ne.logSide,ne.logTop],[ks]:[ne.leaves,ne.leaves,ne.leaves],[Sh]:[ne.sand,ne.sand,ne.sand],[bh]:[ne.plank,ne.plank,ne.plank]},Eh=9;function Br(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Lg(){const i=document.createElement("canvas");i.width=16*Eh,i.height=16;const t=i.getContext("2d"),e=Br(7),n=(r,a,o,c,l=.12)=>{const h=1+(e()-.5)*2*l;t.fillStyle=`rgb(${Math.min(255,c[0]*h)|0},${Math.min(255,c[1]*h)|0},${Math.min(255,c[2]*h)|0})`,t.fillRect(r*16+a,o,1,1)};for(let r=0;r<16;r++)for(let a=0;a<16;a++){n(ne.grassTop,a,r,[96,160,62],.18);const o=r<3+(a*7%3===0?1:0);n(ne.grassSide,a,r,o?[96,160,62]:[134,96,67],.16),n(ne.dirt,a,r,[134,96,67],.16),n(ne.stone,a,r,e()<.12?[100,100,100]:[128,128,128],.1),n(ne.logSide,a,r,a%4===0?[80,58,34]:[104,78,46],.1);const c=Math.abs(Math.hypot(a-7.5,r-7.5)%3-1.5)<.5;n(ne.logTop,a,r,a===0||r===0||a===15||r===15?[104,78,46]:c?[150,116,70]:[176,140,86],.08),n(ne.leaves,a,r,e()<.15?[40,90,30]:[58,128,44],.2),n(ne.sand,a,r,[219,207,160],.06),n(ne.plank,a,r,r%4===3?[120,92,54]:[168,132,82],.08)}const s=new qr(i);return s.magFilter=He,s.minFilter=He,s.generateMipmaps=!1,s.colorSpace=Ce,s}function Ig(i){const t=Br(i),e=new Float32Array(256*256).map(()=>t()),n=(r,a)=>e[(r&255)+(a&255)*256],s=r=>r*r*(3-2*r);return(r,a)=>{const o=Math.floor(r),c=Math.floor(a),l=s(r-o),h=s(a-c),u=n(o,c),p=n(o+1,c),f=n(o,c+1),g=n(o+1,c+1);return u+(p-u)*l+(f-u)*h+(u-p-f+g)*l*h}}function Dg(i){const t=Math.ceil(i*2+70),e=28,n=t/2,s=new Uint8Array(t*t*e),r=(D,L,O)=>D+O*t+L*t*t,a=(D,L,O)=>D<0||O<0||D>=t||O>=t||L<0||L>=e?wl:s[r(D,L,O)],o=(D,L,O,X)=>{D>=0&&O>=0&&D<t&&O<t&&L>=0&&L<e&&(s[r(D,L,O)]=X)},c=Ig(3),l=new Int16Array(t*t),h=Br(11);for(let D=0;D<t;D++)for(let L=0;L<t;L++){const O=L-n,X=D-n,H=Math.max(Math.abs(O),Math.abs(X))-(i+4);let j=3;if(H>0){const z=c(L/14,D/14)*10+c(L/5,D/5)*3;j+=Math.min(e-8,Math.floor(Math.min(1,H/14)*z+H*.18))}l[L+D*t]=j;for(let z=0;z<=j;z++){const tt=z===j?Co:z>j-3?xh:Mh;o(L,z,D,tt)}}for(let D=0;D<t;D++)for(let L=0;L<t;L++){const O=L-n,X=D-n,H=Math.max(Math.abs(O),Math.abs(X))-(i+2);H>=0&&H<2&&l[L+D*t]===3&&o(L,3,D,Sh)}for(let D=0;D<260;D++){const L=h()*t|0,O=h()*t|0,X=L-n,H=O-n;if(Math.max(Math.abs(X),Math.abs(H))<i+8)continue;const j=l[L+O*t];if(a(L,j,O)!==Co)continue;const z=4+(h()*3|0);for(let tt=1;tt<=z;tt++)o(L,j+tt,O,yh);for(let tt=-2;tt<=1;tt++){const it=tt===1?1:2;for(let dt=-it;dt<=it;dt++)for(let Q=-it;Q<=it;Q++)Math.abs(dt)===it&&Math.abs(Q)===it&&h()<.6||a(L+dt,j+z+tt,O+Q)===wl&&o(L+dt,j+z+tt,O+Q,ks)}}for(const[D,L]of[[0,-27],[0,i+9]]){const O=Math.round(D+n),X=Math.round(L+n),H=L<0?-1:1;for(let j=0;j<4;j++)for(let z=-22;z<=22;z++){const tt=X+H*j;for(let it=4;it<=4+j;it++)o(O+z,it,tt,bh)}}const u=[],p=[],f=[],g=[],v=[{d:[0,1,0],c:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],k:0,shade:1},{d:[0,-1,0],c:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],k:2,shade:.5},{d:[1,0,0],c:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],k:1,shade:.8},{d:[-1,0,0],c:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],k:1,shade:.8},{d:[0,0,1],c:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],k:1,shade:.9},{d:[0,0,-1],c:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],k:1,shade:.7}],m=1/Eh;for(let D=0;D<e;D++)for(let L=0;L<t;L++)for(let O=0;O<t;O++){const X=s[r(O,D,L)];if(X)for(const H of v){const j=a(O+H.d[0],D+H.d[1],L+H.d[2]);if(j&&j!==ks||j===ks&&X===ks)continue;const z=Pg[X][H.k],tt=z*m+5e-4,it=(z+1)*m-5e-4,dt=.94+(O*73856093^L*19349663^D*83492791)%7/100,Q=H.shade*dt;for(const bt of H.c)u.push(O-n+bt[0]-.5,D-4+bt[1],L-n+bt[2]-.5),p.push(...H.d),g.push(Q,Q,Q);f.push(tt,0,it,0,it,1,tt,1)}}const d=u.length/12,y=new Uint32Array(d*6);for(let D=0;D<d;D++){const L=D*4;y.set([L,L+1,L+2,L,L+2,L+3],D*6)}const E=new Ge;E.setAttribute("position",new Zt(u,3)),E.setAttribute("normal",new Zt(p,3)),E.setAttribute("uv",new Zt(f,2)),E.setAttribute("color",new Zt(g,3)),E.setIndex(new cn(y,1)),E.computeBoundingSphere();const x=new Hn({map:Lg(),vertexColors:!0,alphaTest:.5}),A=new Pt(E,x);A.receiveShadow=!0,A.castShadow=!0;const T=new ce;T.add(A);const C=new Wt(1,1,1),I=new Hn({color:16777215,transparent:!0,opacity:.9}),b=new Fs(C,I,40),_=new ie,R=Br(5);for(let D=0;D<40;D++)_.compose(new P((R()-.5)*360,85+R()*12,(R()-.5)*360),new Ii,new P(10+R()*22,3,8+R()*14)),b.setMatrixAt(D,_);return T.add(b),{group:T,clouds:b,faces:d}}const Na=Ee+2,br=3.6;function Ug(){const i=document.createElement("canvas");i.width=1024,i.height=400;const t=i.getContext("2d");t.fillStyle="#e9e4d8",t.fillRect(0,0,i.width,i.height);for(let n=0;n<9e3;n++)t.fillStyle=`rgba(0,0,0,${Math.random()*.05})`,t.fillRect(Math.random()*i.width,Math.random()*i.height,2,2);t.fillStyle="#2b4fd6",t.fillRect(0,0,i.width,26),t.fillRect(0,i.height-26,i.width,26),t.fillStyle="#d23a3a",t.fillRect(0,0,26,i.height),t.fillRect(i.width-26,0,26,i.height),t.save(),t.globalAlpha=.16,t.fillStyle="#1b1b2a",t.font="bold 84px Silkscreen, monospace",t.textAlign="center",t.textBaseline="middle",t.fillText("BALI WET WIPES",i.width/2,i.height/2),t.restore();const e=new qr(i);return e.colorSpace=Ce,e.anisotropy=8,e}function Ng(){const i=new Nt(400,32,16),t=new It(2903966),e=new It(9418239),n=new It(16757882),s=[],r=i.attributes.position,a=new It;for(let o=0;o<r.count;o++){const c=r.getY(o)/400;c>.25?a.copy(e).lerp(t,Math.min(1,(c-.25)/.6)):a.copy(n).lerp(e,Math.max(0,(c+.05)/.3)),s.push(a.r,a.g,a.b)}return i.setAttribute("color",new Zt(s,3)),new Pt(i,new ke({vertexColors:!0,side:Fe,fog:!1}))}function kg(i){i.add(Ng()),i.fog=new qo(16763296,60,220);const t=Dg(18);t.group.position.y=-1.2,i.add(t.group);const e=new ce;i.add(e);const n=_=>new Hn({color:_}),s=new Hn({map:Ug()}),r=n(1778752),a=new Pt(new Wt(Na*2,1.2,br*2),[r,r,s,r,r,r]);a.position.y=-.6,a.receiveShadow=!0,e.add(a);const o=new Pt(new Wt(Na*2+.1,.12,br*2+.1),n(16767053));o.position.y=-.12,e.add(o);for(let _=0;_<3;_++){const R=new Pt(new Wt(1.6,.4,.5),n(7031338));R.position.set(-Na+1.6,-1+_*.4-0,br+1.25-_*.5),R.castShadow=R.receiveShadow=!0,e.add(R)}const c=Ee+.7,l=br-.25,h=[13777466,2838486,14540253,14540253];[[-c,-l],[c,-l],[-c,l],[c,l]].forEach(([_,R],D)=>{const L=new Pt(new Wt(.26,1.7,.26),n(h[D]));L.position.set(_,.85,R),L.castShadow=!0,e.add(L)});const u=n(15921906);for(const _ of[.55,.95,1.35]){const R=new Pt(new Wt(c*2,.06,.06),u);R.position.set(0,_,-l),R.castShadow=!0,e.add(R);for(const D of[-c,c]){const L=new Pt(new Wt(.06,.06,l*2),u);L.position.set(D,_,0),L.castShadow=!0,e.add(L)}}for(const _ of[-1,1]){const R=new Pt(new Wt(.6,12,.6),n(3817290));R.position.set(_*15,4.8,-9),e.add(R);const D=new Pt(new Wt(2.4,1.2,.5),new ke({color:16774084,toneMapped:!1}));D.position.set(_*15,11,-8.6),D.lookAt(0,0,0),e.add(D)}const p=420,f=new Fs(new Wt(.5,.75,.32),new Hn,p),g=new Fs(new Wt(.34,.34,.34),new Hn,p),v=new Fs(new Wt(.62,.12,.12),new Hn,p),m=[],d=[13777466,2838486,16767053,2071114,16777215,9055202,16742912,2236962],y=[16175796,14724222,13011550,9263675],E=new It;for(let _=0;_<p;_++){let R,D;Math.random()<.6?(R=(Math.random()-.5)*44,D=-6.5-Math.random()*10):(R=(Math.random()<.5?-1:1)*(11+Math.random()*11),D=-6+Math.random()*9),m.push({x:R,z:D,ph:Math.random()*6.28,sp:4+Math.random()*4,yaw:Math.atan2(-R,-D)}),f.setColorAt(_,E.set(d[Math.random()*d.length|0]));const O=y[Math.random()*y.length|0];g.setColorAt(_,E.set(O)),v.setColorAt(_,E.set(O))}for(const _ of[f,g,v])_.castShadow=!0,_.frustumCulled=!1,i.add(_);const x=new ie,A=new Ii,T=new P,C=new P(1,1,1),I=new hn;let b=0;return{world:t,hype(_){b=Math.min(1.5,b+_)},update(_,R){b=Math.max(.15,b-R*.35);for(let D=0;D<p;D++){const L=m[D],O=Math.max(0,Math.sin(_*L.sp+L.ph))*.35*b,X=-1.2;A.setFromEuler(I.set(0,L.yaw,0)),x.compose(T.set(L.x,X+.75+O,L.z),A,C),f.setMatrixAt(D,x),x.compose(T.set(L.x,X+1.32+O,L.z),A,C),g.setMatrixAt(D,x);const H=b>.6?1.05:.95;x.compose(T.set(L.x,X+H+O+(b>.6?.45:0),L.z),A,C),v.setMatrixAt(D,x)}f.instanceMatrix.needsUpdate=g.instanceMatrix.needsUpdate=v.instanceMatrix.needsUpdate=!0,t.clouds.position.x=_*1.2%120}}}[16726843,5111658,5944575,16767053].map(i=>new It(i));const Tl=new ie;new P;new P;const Ji=new It;new It(1,1,1);class Fg{constructor(t,e=6e3){this.max=e,this.mesh=new Fs(new Wt(1,1,1),new ke({color:16777215,toneMapped:!1}),e),this.mesh.frustumCulled=!1,this.mesh.setColorAt(0,Ji.set(1,1,1)),t.add(this.mesh);const n=()=>new Float32Array(e);this.x=n(),this.y=n(),this.z=n(),this.vx=n(),this.vy=n(),this.vz=n(),this.life=n(),this.maxLife=n(),this.size=n(),this.grav=n(),this.r=n(),this.g=n(),this.bl=n(),this.n=0,this.cursor=0}emit(t,e,n,s,r,a,o,c,l=18,h=.5){Ji.set(s);for(let u=0;u<r;u++){const p=this.cursor;this.cursor=(this.cursor+1)%this.max;const f=Math.random()*Math.PI*2,g=(Math.random()-.2)*Math.PI*h,v=a*(.4+Math.random()*.8);this.x[p]=t,this.y[p]=e,this.z[p]=n,this.vx[p]=Math.cos(f)*Math.cos(g)*v,this.vz[p]=Math.sin(f)*Math.cos(g)*v,this.vy[p]=Math.abs(Math.sin(g))*v+a*.3,this.life[p]=this.maxLife[p]=c*(.6+Math.random()*.8),this.size[p]=o*(.6+Math.random()*.8),this.grav[p]=l;const m=.8+Math.random()*.4;this.r[p]=Ji.r*m,this.g[p]=Ji.g*m,this.bl[p]=Ji.b*m}}update(t){let e=0;for(let n=0;n<this.max;n++){if(this.life[n]<=0)continue;this.life[n]-=t,this.vy[n]-=this.grav[n]*t,this.x[n]+=this.vx[n]*t,this.y[n]+=this.vy[n]*t,this.z[n]+=this.vz[n]*t,this.y[n]<.05&&(this.y[n]=.05,this.vy[n]*=-.3,this.vx[n]*=.7,this.vz[n]*=.7);const s=this.size[n]*Math.min(1,this.life[n]/this.maxLife[n]*2.5);Tl.makeScale(s,s,s).setPosition(this.x[n],this.y[n],this.z[n]),this.mesh.setMatrixAt(e,Tl),this.mesh.setColorAt(e,Ji.setRGB(this.r[n],this.g[n],this.bl[n])),e++}this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}}let fe=null,Ri=null,Ne=!1,Po=null;function ec(){if(fe){fe.state==="suspended"&&fe.resume();return}try{fe=new(window.AudioContext||window.webkitAudioContext),Ri=fe.createGain(),Ri.gain.value=.5,Ri.connect(fe.destination),Po=fe.createBuffer(1,fe.sampleRate*.5,fe.sampleRate);const i=Po.getChannelData(0);for(let t=0;t<i.length;t++)i[t]=Math.random()*2-1}catch{fe=null}}function wh(){return Ne=!Ne,Ri&&(Ri.gain.value=Ne?0:.5),Ne&&(speechSynthesis==null||speechSynthesis.cancel()),Ne}function vi(i,t,e,n,s="lowpass",r){const a=fe.currentTime,o=fe.createBufferSource();o.buffer=Po;const c=fe.createBiquadFilter();c.type=s,c.frequency.setValueAtTime(t,a),c.Q.value=e,r&&c.frequency.exponentialRampToValueAtTime(r,a+i);const l=fe.createGain();l.gain.setValueAtTime(n,a),l.gain.exponentialRampToValueAtTime(.001,a+i),o.connect(c).connect(l).connect(Ri),o.start(a),o.stop(a+i)}function yn(i,t,e,n,s="sine"){const r=fe.currentTime,a=fe.createOscillator();a.type=s,a.frequency.setValueAtTime(t,r),a.frequency.exponentialRampToValueAtTime(Math.max(20,e),r+i);const o=fe.createGain();o.gain.setValueAtTime(n,r),o.gain.exponentialRampToValueAtTime(.001,r+i),a.connect(o).connect(Ri),a.start(r),a.stop(r+i)}const ue={hit(i){!fe||Ne||(vi(i?.25:.12,i?1800:2600,.8,i?.9:.6),yn(i?.3:.12,i?140:200,45,i?.9:.5))},block(){!fe||Ne||(yn(.06,900,600,.25,"square"),vi(.05,4e3,2,.2,"highpass"))},whoosh(i){!fe||Ne||vi(i?.22:.12,i?500:900,3,i?.35:.2,"bandpass",i?2500:3500)},special(){!fe||Ne||(yn(.45,180,900,.25,"sawtooth"),vi(.4,600,2,.3,"bandpass",4e3))},boom(){!fe||Ne||(vi(.6,900,.7,1,"lowpass",120),yn(.5,90,30,1))},land(){!fe||Ne||(vi(.12,400,1,.4),yn(.12,90,50,.4))},jump(){!fe||Ne||vi(.08,1200,2,.12,"bandpass",2400)},tag(){!fe||Ne||(yn(.08,700,1400,.25,"square"),setTimeout(()=>yn(.1,1e3,1800,.25,"square"),70))},cursor(){!fe||Ne||yn(.05,600,650,.15,"square")},confirm(){!fe||Ne||(yn(.08,500,1e3,.25,"square"),setTimeout(()=>yn(.15,1e3,1500,.25,"square"),80))}};function zr(i){if(!(Ne||!("speechSynthesis"in window)))try{speechSynthesis.cancel();const t=new SpeechSynthesisUtterance(i);t.rate=.85,t.pitch=.5,t.volume=1,speechSynthesis.speak(t)}catch{}}const jn=tc,Kr=vh,Ln=new ch({antialias:!0,preserveDrawingBuffer:!0});Ln.setPixelRatio(Math.min(2,window.devicePixelRatio));Ln.setSize(window.innerWidth,window.innerHeight);Ln.shadowMap.enabled=!0;Ln.shadowMap.type=Dl;document.body.prepend(Ln.domElement);const _e=new Yo,Tn=new Xe(40,window.innerWidth/window.innerHeight,.1,900);Tn.position.set(0,2.2,10);_e.add(new dh(13623551,6965808,1.25));const xs=new $r(16765600,2.4);xs.position.set(-14,22,16);xs.castShadow=!0;xs.shadow.mapSize.set(2048,2048);Object.assign(xs.shadow.camera,{left:-14,right:14,top:10,bottom:-6,near:1,far:70});xs.shadow.bias=-4e-4;_e.add(xs);const Th=new $r(12574975,1.6);Th.position.set(4,6,-10);_e.add(Th);const Ah=new $r(10469631,.6);Ah.position.set(10,8,12);_e.add(Ah);const Og=new wo(Ln);_e.environment=Og.fromScene(new _g,.04).texture;_e.environmentIntensity=.45;Ln.toneMapping=No;Ln.toneMappingExposure=1.05;const Lr=kg(_e),he=new Fg(_e,3e3),ka={p1:{left:"KeyA",right:"KeyD",up:"KeyW",down:"KeyS",q:"KeyQ",e:"KeyE",tag:"KeyF"},p2:{left:"ArrowLeft",right:"ArrowRight",up:"ArrowUp",down:"ArrowDown",q:"KeyK",e:"KeyL",tag:"KeyO"}},Vn=new Set,si=new Set;window.addEventListener("keydown",i=>{ec(),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(i.code)&&i.preventDefault(),i.repeat||si.add(i.code),Vn.add(i.code),Oh(i.code)});window.addEventListener("keyup",i=>Vn.delete(i.code));const Rh=document.getElementById("touch"),Bg=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;for(const i of Rh.querySelectorAll("button")){const t=i.dataset.k.split("+"),e=s=>{s.preventDefault(),ec(),i.classList.add("down");for(const r of t)si.add(r),Vn.add(r),Oh(r)},n=s=>{s.preventDefault(),i.classList.remove("down");for(const r of t)Vn.delete(r)};i.addEventListener("pointerdown",e),i.addEventListener("pointerup",n),i.addEventListener("pointercancel",n),i.addEventListener("pointerleave",n)}function Ch(i){Rh.classList.toggle("hidden",!(i&&Bg))}window.addEventListener("blur",()=>Vn.clear());window.addEventListener("pointerdown",()=>ec());function zg(i){return{left:Vn.has(i.left),right:Vn.has(i.right),up:Vn.has(i.up),down:Vn.has(i.down),qP:si.has(i.q),eP:si.has(i.e),tagP:si.has(i.tag),upP:si.has(i.up)}}const Xs=new ch({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});Xs.setSize(200,200);Xs.outputColorSpace=Ce;Xs.toneMapping=No;const Vs=new Yo;Vs.add(new dh(16777215,4478310,1.6));const Ph=new $r(16777215,1.8);Ph.position.set(2,3,4);Vs.add(Ph);const Fa=new Xe(30,1,.1,50);function Lh(i){const t=Kr(i),e={state:"idle",walkPhase:0,team:0,def:i,inBack:!1,vy:0};for(let o=0;o<30;o++)ds(t,e,.1,0);t.root.rotation.y=.35,Vs.add(t.root),t.root.updateMatrixWorld(!0);const n=new P;t.j.neck.getWorldPosition(n);const s=i.look.size||1,r=n.y+(i.look.headScale||1.15)*.36*s*.8;Fa.position.set(.2*s,r+.05,2.1*s),Fa.lookAt(0,r-.12,0),Xs.render(Vs,Fa);const a=Xs.domElement.toDataURL();return Vs.remove(t.root),a}const nc=[{id:"cpu",label:"1 VS CPU",tag:!1,human:[!0,!1]},{id:"tagcpu",label:"TAG VS CPU",tag:!0,human:[!0,!1]},{id:"p2",label:"1 VS 1 (2P)",tag:!1,human:[!0,!0]},{id:"tagp2",label:"TAG 2P",tag:!0,human:[!0,!0]},{id:"watch",label:"CPU VS CPU",tag:!0,human:[!1,!1]}],Tt=i=>document.getElementById(i);let Rn="select",ic=0,qe=[...jn],sc=[];const Et={cursor:[0,jn.length-1],picks:[[],[]],readyT:-1};let Ih=null;function Cn(){return nc[ic]}function je(){return Cn().tag?2:1}function rc(){Tt("modes").innerHTML=nc.map((t,e)=>`<button data-i="${e}" class="${e===ic?"on":""}"><span class="key">${e+1}</span> ${t.label}</button>`).join("");for(const t of Tt("modes").querySelectorAll("button"))t.onclick=()=>ac(+t.dataset.i);Tt("grid").innerHTML=qe.map((t,e)=>`
    <div class="card ${t?"":"rand"}" data-i="${e}">
      <img src="${sc[e]}" alt="" />
      <div class="nm">${t?t.name:"? RANDOM ?"}</div>
    </div>`).join("");for(const t of Tt("grid").querySelectorAll(".card"))t.onclick=()=>{const e=Lo();e<0||(Et.cursor[e]=+t.dataset.i,Io(e))},t.onmouseenter=()=>{const e=Lo();e>=0&&(Et.cursor[e]=+t.dataset.i,Wn())};const i=Cn();Tt("selHelp").innerHTML=i.human[1]?"P1: A/D choose · Q pick · E undo &nbsp;|&nbsp; P2: ←/→ choose · K pick · L undo &nbsp;|&nbsp; 1-5 change mode":"A/D choose · Q pick · E undo · 1-5 change mode · or click a fighter",Wn()}function ac(i){ic=i,Et.picks=[[],[]],Et.readyT=-1,Tt("ready").classList.add("hidden"),ue.cursor(),rc(),An()}function Lo(){const i=Cn();return Et.picks[0].length<je()?0:!i.human[1]&&Et.picks[1].length<je()?i.human[0]&&i.id!=="watch"?-1:1:-1}function Hg(i){return qe[i]}function Io(i){if(Et.picks[i].length>=je())return;const t=Hg(Et.cursor[i]);Et.picks[i].push(t),ue.confirm(),Rg(t)?Dh(t):(zr(t.name.toLowerCase()),Uh())}let ln=null;function Dh(i){for(const t of qn)t.model.root.visible=!1;Tt("select").classList.add("hidden"),ln=Cg(i,{scene:_e,camera:Tn,particles:he,speak:zr,sfx:t=>{var e;return(e=ue[t])==null?void 0:e.call(ue)}})}function oc(){ln&&(ln.dispose(),ln=null,Tt("select").classList.remove("hidden"),Uh())}window.addEventListener("pointerdown",()=>{ln&&oc()});function Al(i){Et.picks[i].length&&(Et.picks[i].pop(),Et.readyT=-1,Tt("ready").classList.add("hidden"),ue.cursor(),Wn(),An())}function Uh(){const i=Cn();i.id!=="watch"&&!i.human[1]&&Et.picks[0].length>=je()&&Et.picks[1].length<je()&&setTimeout(()=>{for(;Et.picks[1].length<je();){const t=jn.filter(e=>!Et.picks[1].includes(e));Et.picks[1].push(t[Math.random()*t.length|0])}Et.cursor[1]=qe.indexOf(Et.picks[1][0])>=0?qe.indexOf(Et.picks[1][0]):qe.length-1,ue.confirm(),Wn(),An(),Rl()},500),Wn(),An(),Rl()}function Rl(){Et.picks[0].length>=je()&&Et.picks[1].length>=je()&&Et.readyT<0&&(Et.readyT=1.4,Tt("ready").classList.remove("hidden"))}function Gg(i){return["power","speed","health","reach"].map(t=>`<div class="stat"><span>${t.toUpperCase()}</span><div class="bar"><div style="width:${i.stats[t]*10}%"></div></div></div>`).join("")}const Bn=i=>typeof i=="string"?Re[i]:i;function Nh(i){const t=i.moves,e=typeof i.special=="string"?mh[i.special]:i.special,n=s=>s.proj?"throw":s.level;return`<div class="moves">
    <div><b>Q</b>${Bn(t.punch).name} <span style="opacity:.6">(${n(Bn(t.punch))})</span></div>
    <div><b>E</b>${Bn(t.kick).name} <span style="opacity:.6">(${n(Bn(t.kick))})</span></div>
    <div><b>→+Q</b>${Bn(t.power).name} <span style="opacity:.6">(${n(Bn(t.power))})</span></div>
    <div><b>↓+E</b>${Bn(t.low).name}</div>
    ${t.heal?`<div><b>↓+Q</b>${Bn(t.heal).name} <span style="opacity:.6">(heal, ${Bn(t.heal).uses}/round)</span></div>`:""}
    <div class="sp"><b>Q+E</b>★ ${e.name} <span style="opacity:.6">(full meter)</span></div>
  </div>`}function Wn(){const i=Cn();for(const e of[0,1]){const s=(Et.picks[e].length<je()?qe[Et.cursor[e]]:Et.picks[e][Et.picks[e].length-1])||(Et.cursor[e]===qe.length-1,null),r=e===0?i.human[0]?"PLAYER 1":"CPU":i.human[1]?"PLAYER 2":"CPU",a=Et.picks[e].map(o=>o.name).join(" + ")||"&nbsp;";s?Tt(`info${e}`).innerHTML=`<div class="who">${r}${i.tag?` · PICK ${Math.min(je(),Et.picks[e].length+1)} OF 2`:""}</div>
        <h2>${s.name}</h2><div class="ttl">${s.title}</div>
        <div class="quote">${(s.traits||[]).map(o=>`• ${o}`).join("<br/>")}</div>
        ${Gg(s)}${Nh(s)}<div class="picks">${a}</div>`:Tt(`info${e}`).innerHTML=`<div class="who">${r}</div><h2>? RANDOM ?</h2><div class="ttl">A brand new fighter every time</div>
        <div class="quote">Random name, look, stats, moves and special. Could be a legend. Could be Biscuit.</div><div class="picks">${a}</div>`}Tt("grid").querySelectorAll(".card").forEach((e,n)=>{e.classList.toggle("c1",Et.cursor[0]===n&&Et.picks[0].length<je()),e.classList.toggle("c2",Et.cursor[1]===n&&Et.picks[1].length<je()&&(i.human[1]||i.id==="watch")),e.querySelectorAll(".tagp").forEach(s=>s.remove())})}let qn=[];function An(){for(const i of qn)_e.remove(i.model.root);qn=[];for(const i of[0,1]){const t=[...Et.picks[i]];if(t.length<je()){const e=qe[Et.cursor[i]];e&&t.push(e)}t.forEach((e,n)=>{const s=Kr(e),r={state:n<Et.picks[i].length?"win":"idle",walkPhase:0,team:i,def:e,inBack:!1,vy:0};s.root.position.set((i===0?-1:1)*(1.5+n*1.3),0,-n*1.2),s.root.rotation.y=i===0?.6:-.6,_e.add(s.root),qn.push({model:s,fake:r})})}}let jt=null,Hr=[],Li=[null,null],is=new Map,Ti=!1;const tn={trail:[1,1],comboT:[0,0],spT:[0,0]};function cc(i,t=Cn()){Ih=i;for(const n of qn)_e.remove(n.model.root);qn=[],kh(),jt=new wg(i,{tag:t.tag}),Li=[t.human[0]?null:new Or(.62),t.human[1]?null:new Or(.6)];for(const n of jt.teams)for(const s of n.members){const r=Kr(s.def);r.root.rotation.y=s.facing>0?Math.PI/2-.3:-(Math.PI/2-.3),_e.add(r.root),Hr.push({f:s,model:r,yaw:r.root.rotation.y})}Rn="fight",Ch(t.human[0]),Tt("select").classList.add("hidden"),Tt("hud").classList.remove("hidden"),Wg();const e=t.human[0]&&t.human[1];Tt("hint").innerHTML=e?"P1: WASD · Q punch · E kick · F tag &nbsp;|&nbsp; P2: arrows · K punch · L kick · O tag &nbsp;|&nbsp; →+punch power · ↓+kick low · punch+kick special":t.human[0]?"A/D walk · W jump · S crouch · hold back = block &nbsp;|&nbsp; Q punch · E kick · →+Q power · ↓+E low · Q+E SPECIAL"+(t.tag?" · F tag":"")+" &nbsp;|&nbsp; Esc pause":"Watching CPU vs CPU · Esc pause",Tn.position.set(0,2.4,11)}function kh(){for(const i of Hr)_e.remove(i.model.root),i.plague&&_e.remove(i.plague);Hr=[];for(const i of is.values())_e.remove(i);is.clear(),jt=null}function lc(){kh(),Rn="select",Ti=!1,Ch(!1),Tt("pause").classList.add("hidden"),Tt("hud").classList.add("hidden"),Tt("select").classList.remove("hidden"),Et.picks=[[],[]],Et.readyT=-1,Tt("ready").classList.add("hidden"),rc(),An()}const Oa=new Map;function Vg(i){return Oa.has(i)||Oa.set(i,jn.includes(i)?sc[jn.indexOf(i)]:Lh(i)),Oa.get(i)}function Wg(){for(const i of[0,1])Tt(`side${i}`).innerHTML=`
      <div class="nameRow shadow"><img class="portrait" id="por${i}" /><div><div id="nm${i}"></div><div class="pips" id="pips${i}"></div></div></div>
      <div class="hp"><div class="trail" id="trail${i}"></div><div class="fill" id="hp${i}"></div></div>
      <div class="partner hidden" id="partner${i}"><span id="pnm${i}"></span><div class="mini"><div id="php${i}"></div></div></div>`;tn.trail=[1,1]}function Xg(i){const t=jt;for(const n of[0,1]){const s=t.fighter(n),r=s.hp/s.d.maxHp;Tt(`nm${n}`).textContent=s.def.name;const a=Tt(`por${n}`),o=Vg(s.def);a.src!==o&&(a.src=o),Tt(`hp${n}`).style.width=`${r*100}%`,Tt(`hp${n}`).classList.toggle("low",r<.3),(s.combo===0||r>tn.trail[n])&&(tn.trail[n]+=(r-tn.trail[n])*Math.min(1,i*3)),Tt(`trail${n}`).style.width=`${tn.trail[n]*100}%`,Tt(`pips${n}`).innerHTML=[0,1].map(h=>`<div class="pip ${t.teams[n].wins>h?"on":""}"></div>`).join("");const c=t.partner(n);Tt(`partner${n}`).classList.toggle("hidden",!c),c&&(Tt(`pnm${n}`).textContent=`TAG: ${c.def.name}${c.state==="bench"&&c.alive&&!Li[n]?` (press ${n===0?"F":"O"})`:""}`,Tt(`php${n}`).style.width=`${c.hp/c.d.maxHp*100}%`,Tt(`partner${n}`).classList.toggle("ko",!c.alive));const l=Tt(`meter${n}`);l.querySelector(".m div").style.width=`${s.meter}%`,l.classList.toggle("full",s.meter>=100),l.querySelector(".lbl").textContent=s.meter>=100?`★ ${s.moves.special.name.toUpperCase()} READY: ${Li[n]?"CPU":n===0&&!Cn().human[1]||n===0?"Q+E":"K+L"}`:"SPECIAL",tn.comboT[n]-=i,tn.spT[n]-=i,Tt(`combo${n}`).style.opacity=tn.comboT[n]>0?1:0,Tt(`sp${n}`).style.opacity=tn.spT[n]>0?1:0}Tt("clock").textContent=Math.ceil(t.timer),Tt("rnd").textContent=t.phase==="matchOver"?"MATCH OVER":`ROUND ${t.round}`;const e=t.announce;Tt("annBig").textContent=e?e.text:"",Tt("annSub").textContent=e?e.sub:""}const Gr=[];for(let i=0;i<10;i++){const t=new Pt(new jr(.35,.5,24),new ke({color:16777215,transparent:!0,opacity:0,side:Ye,depthWrite:!1,toneMapped:!1}));t.visible=!1,_e.add(t),Gr.push({mesh:t,t:0,life:.25,grow:4})}let qg=0;function gn(i,t,e,n,s=1,r=.22,a=!1){const o=Gr[qg++%Gr.length];o.mesh.position.set(i,t,e+(a?0:.6)),o.mesh.material.color.set(n),o.mesh.rotation.set(a?-Math.PI/2:0,0,0),o.mesh.visible=!0,o.t=0,o.life=r,o.grow=5*s,o.size=s}function Yg(i){for(const t of Gr){if(!t.mesh.visible)continue;t.t+=i;const e=t.t/t.life;if(e>=1){t.mesh.visible=!1;continue}t.mesh.scale.setScalar(t.size*(.5+e*t.grow*.5)),t.mesh.material.opacity=1-e}}function Fh(){for(const i of jt.events)switch(i.type){case"hit":{const t=i.color??(i.heavy?16767053:16777215);he.emit(i.x,i.y,i.z+.3,t,i.heavy?22:10,i.heavy?9:6,i.heavy?.13:.09,.35,10),he.emit(i.x,i.y,i.z+.3,16777215,6,5,.07,.2,0),gn(i.x,i.y,i.z,i.heavy?16767053:16777215,i.heavy?1.3:.8),ue.hit(i.heavy),Lr.hype(i.heavy?.45:.12),i.combo>=2&&(tn.comboT[i.attacker]=1.3,Tt(`combo${i.attacker}`).innerHTML=`${i.combo} HITS<small>COMBO!</small>`);break}case"block":he.emit(i.x,i.y,i.z+.3,8378111,8,4,.08,.25,0),gn(i.x,i.y,i.z,8378111,.6),ue.block();break;case"whoosh":ue.whoosh(i.heavy);break;case"special":{const t=i.f.team;tn.spT[t]=1.6,Tt(`sp${t}`).textContent=`★ ${i.name.toUpperCase()}!`,ue.special(),he.emit(i.f.x,1.2,i.f.z,i.color??16777215,30,6,.1,.5,2),gn(i.f.x,1.2,i.f.z,i.color??16777215,1.8,.35),Lr.hype(.6),Ir=.5;break}case"cast":i.prop||he.emit(i.x,i.y,i.z,i.color,14,4,.1,.35,0),ue.whoosh(!!i.prop&&i.prop!=="iphone");break;case"boom":he.emit(i.x,i.y,i.z,i.color,i.big?60:26,i.big?11:8,i.big?.2:.14,.6,6),he.emit(i.x,i.y,i.z,3355443,i.big?30:10,4,.25,.9,-1),gn(i.x,i.y,i.z,i.color,i.big?3:1.5,.35),ue.boom();break;case"vanish":he.emit(i.x,i.y,i.z,i.color,30,5,.12,.5,-2),gn(i.x,i.y,i.z,i.color,1.2);break;case"trail":Math.random()<.6&&he.emit(i.x,i.y,i.z+.2,i.color,2,2,.1,.3,-3);break;case"land":he.emit(i.x,.05,i.z,14209216,i.heavy?12:5,i.heavy?4:2,.12,.45,10,.25),i.heavy&&ue.land();break;case"quake":he.emit(i.x,.1,i.z,14209216,40,9,.16,.6,18,.2),he.emit(i.x,.1,i.z,i.color,20,6,.12,.5,6,.3),gn(i.x,.05,i.z,i.color,2.6,.45,!0),ue.boom();break;case"slam":he.emit(i.x,.1,i.z,14209216,30,7,.15,.6,16,.2),gn(i.x,.05,i.z,16767053,2,.4,!0),ue.boom();break;case"wall":he.emit(i.x,i.y,i.z,16777215,20,6,.12,.4,6),gn(i.x,i.y,i.z,16742912,1.4),ue.boom();break;case"armor":gn(i.x,i.y,i.z,16733491,1.2),ue.block();break;case"heal":he.emit(i.x,i.y,i.z+.3,i.color,26,3,.12,.9,-3),gn(i.x,i.y,i.z,i.color,1.4,.4),ue.tag(),tn.spT[i.f.team]=1.4,Tt(`sp${i.f.team}`).textContent=`+${i.amount} HP BELLY BOOSTER!`;break;case"pop":he.emit(i.x,i.y,i.z,i.prop==="burger"?13666874:i.prop==="cash"?6989914:16777215,10,4,.1,.35,8),i.prop==="vape"&&he.emit(i.x,i.y,i.z,15263984,14,2.5,.2,.9,-1.5);break;case"infected":gn(i.f.x,1.2,i.f.z,i.color,1.2,.4),tn.spT[i.f.team]=1.2,Tt(`sp${i.f.team}`).textContent="CAUGHT THE BACKLINK PLAGUE!";break;case"aura":he.emit(i.x+(Math.random()-.5)*.6,i.y,i.z+.3,i.color,1,1,.09,.6,-2);break;case"jump":ue.jump();break;case"tag":ue.tag(),he.emit(i.f.x,1,i.f.z,16767053,20,5,.1,.4,4);break;case"grab":ue.whoosh(!0);break;case"announce":zr(i.text);break;case"ko":zr(i.text),ue.boom(),Lr.hype(1.5);break}jt.events.length=0}let Ir=0;const Zi=new P,Qi=new P,Cl=new P(0,1.2,0);function jg(i,t){if(Rn==="lineup")Zi.set(0,1.6,6.4),Qi.set(0,1.25,0);else if(ln)Zi.set(...ln.cam.pos),Qi.set(...ln.cam.look);else if(Rn==="select")Zi.set(Math.sin(t*.15)*.6,1.9,7.6),Qi.set(0,1.25,0);else{const s=jt.fighter(0),r=jt.fighter(1),a=(s.x+r.x)/2,o=Math.abs(s.x-r.x),c=Math.max(-Ee+2.5,Math.min(Ee-2.5,a)),l=1-Ir*.25;if(Zi.set(c,2.3+o*.07+Math.max(s.y,r.y)*.3,(7.2+o*.55)*l),Qi.set(c,1.25+Math.max(s.y,r.y)*.3,0),jt.phase==="matchOver"){const h=jt.matchWinner>=0?jt.fighter(jt.matchWinner):s;Zi.set(h.x+Math.sin(t*.4)*2.5,1.8,h.z+4.6),Qi.set(h.x,1.4,h.z)}}Ir=Math.max(0,Ir-i*1.2);const e=1-Math.exp(-i*5);Tn.position.lerp(Zi,e),Cl.lerp(Qi,e);const n=jt?jt.shake:0;Tn.position.x+=(Math.random()-.5)*n*.5,Tn.position.y+=(Math.random()-.5)*n*.5,Tn.lookAt(Cl)}const $g=new It(16777215),Kg=new It(0),Jg=new It(3866410),Pl=new ke({color:8257357,transparent:!0,opacity:.22,depthWrite:!1,blending:Ur,side:Ye,toneMapped:!1}),Zg=new ke({color:11992938,transparent:!0,opacity:.6,depthWrite:!1,toneMapped:!1,side:Ye});function Qg(i,t){var n;for(const s of Hr){const r=s.f,a=s.model.root;a.visible=r.visible&&r.state!=="out",a.position.set(r.x,r.y,r.z);let c=(r.state==="bench"?r.team===0?.9:-.9:r.facing>0?Math.PI/2-.3:-(Math.PI/2-.3))-s.yaw;c=Math.atan2(Math.sin(c),Math.cos(c)),s.yaw+=c*Math.min(1,i*(r.state==="attack"?30:14)),a.rotation.y=s.yaw,ds(s.model,r,i,t);const l=r.flash>0,h=!l&&r.infected>0;if(l||h||s.flashing){const p=l?.7:h?.12+Math.sin(t*10)*.08:0;for(const f of s.model.mats)f.emissive.copy(l?$g:h?Jg:Kg).multiplyScalar(p||1);s.flashing=l||h}const u=r.def.aura;if(u){if(!s.plague){const f=new ce,g=new Pt(new Ei(u.radius,48),Pl);g.rotation.x=-Math.PI/2,g.position.y=.03,f.add(g);const v=new Pt(new jr(u.radius-.08,u.radius,64),Zg);v.rotation.x=-Math.PI/2,v.position.y=.04,f.add(v);const m=new Pt(new Nt(u.radius,32,12,0,Math.PI*2,0,Math.PI/2),Pl.clone());m.material.opacity=.07,m.scale.y=.55,f.add(m),_e.add(f),s.plague=f}const p=a.visible&&r.alive&&jt.phase!=="matchOver"&&r.state!=="bench"&&r.state!=="out";if(s.plague.visible=p,s.plague.position.set(r.x,0,r.z),s.plague.children[1].scale.setScalar(1+Math.sin(t*4)*.03),p&&Math.random()<i*22){const f=Math.random()*Math.PI*2,g=Math.random()*u.radius;he.emit(r.x+Math.cos(f)*g,.1+Math.random()*.8,r.z+Math.sin(f)*g*.6,u.color,1,.6,.06+Math.random()*.08,1.1,-1.2)}}r.meter>=100&&r.alive&&a.visible&&Math.random()<i*14&&he.emit(r.x+(Math.random()-.5)*.6,r.y+Math.random()*1.8,r.z,r.moves.special.color??16767053,1,1.2,.07,.6,-2.5)}const e=new Set;for(const s of jt.projectiles){e.add(s);let r=is.get(s);if(!r){const c=s.m.name,l=s.m.proj.prop;l?(r=l==="megabomb"?ns.clickbomb(!0):ns[l](),l==="cash"&&r.rotation.set(Math.random(),Math.random()*6,Math.random()),l==="poodle"&&(r.rotation.y=s.vx>0?Math.PI/2:-Math.PI/2),(l==="burger"||l==="clickbomb"||l==="megabomb")&&r.scale.setScalar(1.6),(l==="iphone"||l==="vape")&&r.scale.setScalar(1.8)):c==="Rocket Fist"?r=new Pt(new Wt(.55,.4,.4),new Hn({color:16747008,emissive:5579264})):c==="Cannonball"?r=new Pt(new zs(s.size,1),new Hn({color:2763306,flatShading:!0})):(r=new ce,r.add(new Pt(new zs(s.size*.6,1),new ke({color:16777215,toneMapped:!1}))),r.add(new Pt(new zs(s.size,1),new ke({color:s.m.color,transparent:!0,opacity:.55,blending:Ur,depthWrite:!1,toneMapped:!1})))),r.castShadow=!0,_e.add(r),is.set(s,r)}r.position.set(s.x,s.y,s.z);const a=s.m.proj,o=a.prop;if(o==="poodle"){const c=t*22;r.position.y=Math.abs(Math.sin(c*.5))*.12,(n=r.userData.legs)==null||n.forEach((l,h)=>{l.rotation.x=Math.sin(c+h%2*Math.PI)*.8}),Math.random()<.3&&he.emit(s.x,.05,s.z,14209216,1,1.5,.08,.3,6,.2)}else o==="cash"?(r.rotation.x+=i*5,r.rotation.y+=i*3):(r.rotation.z-=i*(a.spin||10)*Math.sign(s.vx||1),a.smoke?he.emit(s.x-Math.sign(s.vx)*.2,s.y,s.z,15263984,1,.6,.16,.6,-1.5):o==="clickbomb"||o==="megabomb"?he.emit(s.x,s.y+.35,s.z,16767053,1,1.5,.06,.25,-2):o||he.emit(s.x-Math.sign(s.vx)*.3,s.y,s.z,s.m.name==="Cannonball"?10066329:s.m.color,1,1,.12,.35,-1))}for(const[s,r]of is)e.has(s)||(_e.remove(r),is.delete(s))}function Oh(i){if(ln){["KeyQ","KeyE","Enter","Space","Escape","KeyK"].includes(i)&&oc();return}if(Rn==="select"){if(i>="Digit1"&&i<="Digit5")return ac(+i.slice(5)-1);const t=Cn(),e=Lo();e>=0&&(i==="KeyA"&&(Et.cursor[e]=(Et.cursor[e]+qe.length-1)%qe.length,ue.cursor(),Wn(),An()),i==="KeyD"&&(Et.cursor[e]=(Et.cursor[e]+1)%qe.length,ue.cursor(),Wn(),An()),(i==="KeyQ"||i==="Enter"||i==="Space")&&Io(e)),i==="KeyE"&&Al(Et.picks[1].length&&!t.human[1]&&t.id==="watch"?1:0),t.human[1]&&Et.picks[1].length<je()&&(i==="ArrowLeft"&&(Et.cursor[1]=(Et.cursor[1]+qe.length-1)%qe.length,ue.cursor(),Wn(),An()),i==="ArrowRight"&&(Et.cursor[1]=(Et.cursor[1]+1)%qe.length,ue.cursor(),Wn(),An()),i==="KeyK"&&Io(1)),t.human[1]&&i==="KeyL"&&Al(1);return}i==="Escape"&&Bh(),(jt==null?void 0:jt.phase)==="matchOver"&&((i==="KeyQ"||i==="Enter")&&cc(Ih),i==="KeyE"&&lc())}function Bh(){if(Ti=!Ti,Tt("pause").classList.toggle("hidden",!Ti),Ti){const i=[jt.fighter(0),jt.fighter(1)];Tt("moveLists").innerHTML=i.map((t,e)=>`<div><div style="color:${e?"var(--p2)":"var(--p1)"}">${t.def.name}</div>${Nh(t.def)}</div>`).join("")}}Tt("btnResume").onclick=Bh;Tt("btnSelect").onclick=lc;Tt("btnMute").onclick=()=>{Tt("btnMute").textContent=`Sound: ${wh()?"off":"on"}`};window.addEventListener("keydown",i=>{i.code==="KeyM"&&(Tt("btnMute").textContent=`Sound: ${wh()?"off":"on"}`)});window.addEventListener("resize",()=>{Tn.aspect=window.innerWidth/window.innerHeight,Tn.updateProjectionMatrix(),Ln.setSize(window.innerWidth,window.innerHeight)});const Ai=1/60;let Er=0,Ll=performance.now();function zh(i){const t=Math.min(.1,(i-Ll)/1e3);Ll=i;const e=i/1e3;if(Rn==="lineup")for(const n of Dr)ds(n.model,n.fake,t,e);if(ln)ln.update(t,e)&&oc();else if(Rn==="select"){for(const n of qn)ds(n.model,n.fake,t,e);Et.readyT>0&&(Et.readyT-=t,Et.readyT<=0&&(Tt("ready").classList.add("hidden"),cc([Et.picks[0],Et.picks[1]])))}else if(jt&&!Ti){Er+=t;let n=0;for(;Er>=Ai&&n<5;){const s=[0,1].map(r=>{if(Li[r])return Li[r].think(jt.fighter(r),jt.fighter(1-r),jt,Ai);const a=Cn().human[0]&&Cn().human[1];return zg(r===0?ka.p1:ka.p2)});jt.update(Ai,s),Fh(),si.clear(),Er-=Ai,n++}n===5&&(Er=0),Qg(t,e),Xg(t)}(Rn==="select"||Ti)&&si.clear(),he.update(t*((jt==null?void 0:jt.slowmo)>0?.3:1)),Yg(t),Lr.update(e,t),jg(t,e),Ln.render(_e,Tn),requestAnimationFrame(zh)}requestAnimationFrame(zh);ug(tc).then(()=>{sc=jn.map(Lh),rc(),An(),window.__fight.ready=!0});let Dr=[];function tv(i=!0){for(const t of Dr)_e.remove(t.model.root);if(Dr=[],!!i){for(const t of qn)_e.remove(t.model.root);qn=[],jn.forEach((t,e)=>{const n=Kr(t);n.root.position.set((e-2)*1.9,0,0),n.root.rotation.y=(e-2)*-.12,_e.add(n.root),Dr.push({model:n,fake:{state:"idle",walkPhase:0,team:0,def:t,inBack:!1,vy:0}})}),Tt("select").classList.add("hidden"),Rn="lineup"}}window.__fight={lineup:tv,playSkit:i=>Dh(jn[i]),get inSkit(){return!!ln},get match(){return jt},ROSTER:jn,startMatch:cc,toSelect:lc,setMode:ac,get screen(){return Rn},MODES:nc,fastForward(i,t=!0){const e=[new Or(.6),new Or(.6)];for(let n=0;n<i;n+=Ai){const s=[0,1].map(r=>t||Li[r]?(Li[r]||e[r]).think(jt.fighter(r),jt.fighter(1-r),jt,Ai):{});jt.update(Ai,s),Fh()}}};
