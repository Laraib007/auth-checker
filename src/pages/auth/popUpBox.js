import { useEffect, useState } from "react";
import Form from "@/components/auth/form";



export default function PopUpBox({Form}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
   
  const section = document.querySelector("section"),
        overlay = document.querySelector(".overlay"),
       
        closeBtn = document.querySelector(".close-btn");
        setMounted(true)
      

      overlay.addEventListener("click", () =>
        section.classList.remove("active")
      );
      setMounted(true)
      closeBtn.addEventListener("click", () =>
        section.classList.remove("active")
      );
    });
  
    return (
  
<>


    <section className=" active" >
     
     
      <span class="overlay"></span>

      <div class="modal-box">
        <i class="fa-regular fa-circle-check"></i>
        <h2>Completed</h2>
        <h3>Account created sucessfully</h3>

        <div class="buttons">
          <form action="/auth/login">
          <button class="close-btn" >Close</button></form>
          
        </div>
      </div>
    </section>


</>
    );
  };