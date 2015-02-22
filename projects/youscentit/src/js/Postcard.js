//
// Postcard
//

(function(){
	
var Postcard = {
  setDesign: function(des){
    this.designName = des;
    this.design = this.getDesign(des);
    this.message = {};
  },
  getThumbNail: function(){
    return this.design.thumb;
  },
  getPostcardBack: function(){
    return this.designName;
  },
  getPostcardZoom: function(){
    return this.design.zoom;
  },
	getDesign: function(des){	
    var design;
		if(des=="paris"){
				design = {
          back : "back-paris.png",
				  thumb :  "paris2-thumb.png",
					zoom : "paris2.jpg"
        };
		}else if(des=="japan"){
				design = {
          back : "back-japan.png",
          thumb :  "japan1-thumb.png",
          zoom : "japan1.jpg"
        };
		}else if(des=="rio"){
        design = {
          back : "back-rio.png",
          thumb :  "rio1-thumb.png",
          zoom : "rio1.jpg"
        };
		}
	  return design;	
	}
};

window.PostCard = Postcard;


}());