document.addEventListener("click", e =>{
    const isDropdownButton = e.target.matches("[db]")
    if(!isDropdownButton && e.target.closest ("[down2]") != null)return

    let cd 
    if(isDropdownButton){
        cd = e.target.closest ("[down2]")
        cd.classList.toggle("active")
        document.addEventListener("click", e =>{
            const isDropdownButton = e.target.matches("[db]")
            if(!isDropdownButton && e.target.closest ("[down2]") != null)return
        
            let cd 
            if(isDropdownButton){
                cd = e.target.closest ("[down2]")
                cd.classList.toggle("active")
        
            }
            document.addEventListener("click", e =>{
                const isDropdownButton = e.target.matches("[db]")
                if(!isDropdownButton && e.target.closest ("[down2]") != null)return
            
                let cd 
                if(isDropdownButton){
                    cd = e.target.closest ("[down2]")
                    cd.classList.toggle("active")
            
                }
                document.addEventListener("click", e =>{
                    const isDropdownButton = e.target.matches("[db]")
                    if(!isDropdownButton && e.target.closest ("[down2]") != null)return
                
                    let cd 
                    if(isDropdownButton){
                        cd = e.target.closest ("[down2]")
                        cd.classList.toggle("active")
                
                    }
                    document.addEventListener("click", e =>{
                        const isDropdownButton = e.target.matches("[db]")
                        if(!isDropdownButton && e.target.closest ("[down2]") != null)return
                    
                        let cd 
                        if(isDropdownButton){
                            cd = e.target.closest ("[down2]")
                            cd.classList.toggle("active")
                    
                        }
                        document.addEventListener("click", e =>{
                            const isDropdownButton = e.target.matches("[db]")
                            if(!isDropdownButton && e.target.closest ("[down2]") != null)return
                        
                            let cd 
                            if(isDropdownButton){
                                cd = e.target.closest ("[down2]")
                                cd.classList.toggle("active")
                        
                            }
                        
                        
                            document.querySelectorAll("[down2].active").forEach( dropdown =>{
                                if(dropdown === cd) return
                                dropdown.classList.remove("active")
                            })
                        
                        
                        })
                    
                        document.querySelectorAll("[down2].active").forEach( dropdown =>{
                            if(dropdown === cd) return
                            dropdown.classList.remove("active")
                        })
                    
                    
                    })
                
                    document.querySelectorAll("[down2].active").forEach( dropdown =>{
                        if(dropdown === cd) return
                        dropdown.classList.remove("active")
                    })
                
                
                })
            
                document.querySelectorAll("[down2].active").forEach( dropdown =>{
                    if(dropdown === cd) return
                    dropdown.classList.remove("active")
                })
            
            
            })
        
            document.querySelectorAll("[down2].active").forEach( dropdown =>{
                if(dropdown === cd) return
                dropdown.classList.remove("active")
            })
        
        
        })
    }


    document.querySelectorAll("[down2].active").forEach( dropdown =>{
        if(dropdown === cd) return
        dropdown.classList.remove("active")
    })


})






