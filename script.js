document.querySelector(".btn").addEventListener("click",()=>{
    gsap.to(".shipOrder",{
        opacity:0,
        delay:-1,
    })
    gsap.from(".truck",{
        x:"170%",
        delay:1,
    })
    gsap.to(".box",{
        x:"-270%",
        delay:1,
    })
    
    gsap.to("#g1", {
        rotateZ: 120, 
        delay:1.5,
    });
    
    gsap.to("#g2", {
        rotateZ: -120, 
        delay:1.5,
    });
    
    var tl = gsap.timeline();
    
    tl.to(".box",{
        x: "150%",
        duration:0.4,
        delay:2,
        opacity:0,
    })
    tl.to("#g1", {
        duration:0.3,
        rotateZ: 0, 
    });
    
    tl.to("#g2", {
        duration:0.3,
        rotateZ: 0, 
    });
    tl.to(".truck",{
        x:"-50%",
    })
    tl.to(".lspread",{
        autoAlpha: 1,
    })
    tl.to(".line",{
        x:"-50%",
    })
    tl.to(".truck",{
        x:"180%",
        duration:2,
    })
    tl.to(".line",{
        x:"-100%",
        delay:-3,
        duration:2,
    })
    tl.to(".line",{
        opacity:0,
        duration:0.1,
    })
    tl.to(".shipped",{
        autoAlpha:1,
        delay:0.2,
    })
    // tl.to(".shipped",{
    //     autoAlpha:0,
    //     delay:0.5,
    // })
    // tl.to(".shipOrder",{
    //     autoAlpha:1,
    //     delay:1,
    // })
})
