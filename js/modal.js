 var Modal = {

     prefixs:{
         modalId :"modal",
         closeBottonId :"closeBotton",
         modalImgId :"modalImg"
     },

     openModal: function(url){
         document.getElementById(this.prefixs.modalImgId).src = url;
         document.getElementById(this.prefixs.modalId).style.display = "block";
     },

     closeModal: function(){
         document.getElementById(this.prefixs.modalId).style.display = "none";
     },

     createClickEvent: function(){
         document.getElementById(this.prefixs.closeBottonId).onclick = this.closeModal.bind(this);
     }

 };

 Modal.createClickEvent();

