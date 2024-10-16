const dialog = document.getElementById("modal");
const wrapper = document.getElementById("wrapper");
const dialog2 = document.getElementById("modal2");
const wrapper2 = document.getElementById("wrapper2");
const dialog3 = document.getElementById("modal3");
const wrapper3 = document.getElementById("wrapper3");
const dialog4 = document.getElementById("modal4");
const wrapper4 = document.getElementById("wrapper4");
            function showLoginDialog(){
              dialog.showModal()
            }

            function closeLoginDialog(){
                dialog.close()
            }

            dialog.addEventListener("click", (e) => {
                if(!wrapper.contains(e.target)) {
                  dialog.close()
                }
            })
            function showLoginDialog2(){
              dialog2.showModal()
            }

            function closeLoginDialog2(){
                dialog2.close()
            }

            dialog2.addEventListener("click", (e) => {
                if(!wrapper2.contains(e.target)) {
                  dialog2.close()
                }
            })
            function showLoginDialog3(){
              dialog3.showModal()
            }

            function closeLoginDialog3(){
                dialog3.close()
            }

            dialog3.addEventListener("click", (e) => {
                if(!wrapper.contains(e.target)) {
                  dialog3.close()
                }
            })
            function showLoginDialog4(){
              dialog4.showModal()
            }

            function closeLoginDialog4(){
                dialog4.close()
            }

            dialog4.addEventListener("click", (e) => {
                if(!wrapper.contains(e.target)) {
                  dialog4.close()
                }
            })
       
// const modal = document.querySelector('#modal');
// const openModal = document.querySelector('#openModal');
// const closeModal = document.querySelector('#closeModal');

// openModal.addEventListener('click', () => {
//     modal.show();
// });