
const h = document.querySelector('.hoses');
    const ht = document.querySelector('.hosestype');
    const l = document.querySelector('.length');
    const f1 = document.querySelector('.fitting1');
    const f1t = document.querySelector('.fit1type');
    const f2 = document.querySelector('.fitting2');
    const f2t = document.querySelector('.fit2type');
    const s = document.querySelector('.sleeve');
    const st = document.querySelector('.slevtype');
    const to = document.querySelector('.tot');
    const sg = document.querySelector('.sgst');
    const cg = document.querySelector('.cgst');
    const gto = document.querySelector('.gtot');
    const b = document.querySelector('button');
    const preloader = document.querySelector('.loader');
    const c0 = document.querySelector('.tot');
    const c1 = document.querySelector('.sgst');
    const c2 = document.querySelector('.cgst');
    const c3 = document.querySelector('.gtot');
    const ca = document.querySelector('.c0');
    const cb = document.querySelector('.c1');
    const cc = document.querySelector('.c2');
    const cd = document.querySelector('.c3');

    window.addEventListener("load", () => {
        preloader.classList.add("disappear");
    });
    c1.style.display ="none";
    c2.style.display ="none";
    c3.style.display ="none";
    ca.style.display ="none";
    cb.style.display ="none";
    cc.style.display ="none";
    cd.style.display ="none";

    let hr1  = ["1/4","3/8"," 1/2","5/8","3/4","1","1* 1/4","1* 1/2","2","2* 1/2","3"];
    let hr2  = ["1/4","3/8"," 1/2","5/8","3/4","1","1* 1/4","1* 1/2","2","2* 1/2","3"];
    let h4sh  = ["1/2 4HS","5/8 4SH","3/4 4HS","1 4HS","1* 1/4 4HS","1 * 1/2 4HS","2 4HS"];

    let srs = ["1/4","5/16","3/8"," 1/2","5/8","3/4","1","1* 1/4","1* 1/2","2"];
    let s4sh = ["1/4","5/16","3/8"," 1/2","5/8","3/4","1","1* 1/4","1* 1/2","2"];

    let bspfsststr = ["1/4 x 1/8 BSP FSST","1/4 x 1/4 BSP FS ST","3/8 x 3/8 BSP FS ST","3/8 x 1/2 BSP FS ST","1/2 x 1/2 BSP FS ST","1/2 x 5/8 BSP FS ST","5/8 x 5/8 BSP FS ST","3/4 x 3/4 BSP FS ST","1 x 1 BSP FS ST","1*1/4 x 1*1/4 BSP FS ST","1*1/2 x 1*1/2 BSP FS ST","2 x 2 BSP FS ST"];
    let bspfssthpstr = ["5/8 X 5/8 BSP FSST (HP)","3/4 X 3/4 BSP FSST (HP)","1 X 1 BSP FSST (HP)","1* 1/4 X 1* 1/4 BSP FSST (HP)","1* 1/2 X 1* 1/2 BSP FSST (HP)"];
    let bsp90str = ["1/4 x 1/8 90`B","1/4 x 1/4 90`B","3/8 x 3/8 90`B","3/8 x 1/2 90`B","1/2 x 1/2 90`B","1/2 x 5/8 90`B","5/8 x 5/8 90`B","3/4 x 3/4 90`B","1 x 1 BSP 90`B","1*1/4 x 1*1/4 90`B","1*1/2 x 1*1/2 90`B","2 x 2 90`B"];
    let bsp90hpstr = ["5/8 X 5/8 90`B(H.P)","3/4 X 3/4 90`B(H.P)","1 X 1 BSP 90`B(H.P)","1* 1/4 X 1* 1/4 90`B(H.P)","1* 1/2 X 1* 1/2 90`B(H.P)"];
    
    let unf90str = ["1/4 x 9/16 90`B","1/4 x 11/16 90`B","3/8 x 11/16 90`B","3/8 x 13/16 90`B","1/2 x 13/16 90`B","1/2 x 1 UNF 90`B","5/8 x 1 UNF 90`B","5/8 x 1* 3/16 90`B","3/4 x 1* 3/16 90`B","1 x 1* 7/16 90`B"];
    let unf90hpstr = ["5/8 X 1* 3/16 90`B","3/4 X 1* 3/16 90`B","1 X 1* 7/16 90`B"];
    let unffsststr = ["1/4 x 9/16 UNF FSST","1/4 x 11/16  UNF FSST","3/8 x 11/16  UNF FSST","3/8 x 13/16  UNF FSST","1/2 x 13/16  UNF FSST","1/2 x 1 UNF  FSST","5/8 x 1 UNF   FSST","5/8 x 1* 3/16  UNF FSST","3/4 x 1* 3/16  UNF FSST","1 x 1* 7/16  UNF FSST"];
    let unffssthpstr = ["5/8 X 1* 3/16  UNF FSST","3/4 X 1* 3/16  UNF FSST","1 X 1* 7/16  UNF FSST"];
    let unf45str = ["3/8 x 11/16 45`B","3/8 x 13/16 45`B","1/2 x 13/16 45`B","1/2 X 1 UNF 45`B","5/8 X 1 UNF 45`B","3/4 x 1* 3/16 45`B","1 x 1* 7/16 45`B"];
    let unf45hpstr = ["5/8 x 1* 3/16 45`B","3/4 x 1* 3/16 45`B","1 x 1* 7/16 45`B"];
    let unf37t90str = ["1/4 x 7/16 90`B","3/8 x 9/16 90`B","3/8 x 3/4 90`B","1/2 x 3/4 UNF 90`B","1/2 x 7/8 UNF 90`B","5/8 x 7/8 UNF 90`B","5/8 x 1* 1/16 90`B","3/4 x 1* 1/16 90`B","3/4 x 1* 5/16 90`B","1 x 1* 5/16 90`B","3/8 X 5/8 UNF (45`) 90` B"];
    let unf37t90hpstr = ["3/4 X 1* 1/16  90`B "];
    let unf37t45str = ["3/8 x 9/16  45`B","1/2 x 7/8  45`B","5/8 x 1* 1/16 45`B","3/4 x 1* 1/16 45`B","3/4 x 1* 5/16 45`B"];
    let unf37tfsststr = ["1/4 x 7/16  UNF FSST","3/8 x 9/16  UNF FSST","3/8 x 3/4  UNF FSST","1/2 x 3/4  UNF FSST","1/2 x 7/8  UNF FSST","5/8 x 7/8  UNF FSST","5/8 x 1* 1/16  UNF FSST","5/8 x 1* 1/16  UNF FSST","3/4 x 1* 1/16  UNF FSST","3/4 x 1* 5/16  UNF FSST","1 x 1* 5/16  UNF FSST","3/8 X 5/8 UNF (45`)  UNF FSST"];
    let unf37tfssthpstr = ["3/4 X 1* 1/16   UNF FSST"];

    let met90str = ["1/4 x M14 90`B","1/4 x M16 90`B","5/16 x M16 90`B","3/18 x M18 90`B","1/2 x M22 90`B","1/2 x M24 90`B","1/2 x M20 90`B","5/8 x M26 90`B","3/4 x M30 90`B","1/2 x M26 90`B","3/4 x M36 90`B","1 x M36 90`B","1 x M42 90`B","1* 1/4 x M52  90`B"];
    let met90hpstr = ["3/4 X  M36  90`B","1 X M36  90`B","1 X M42  90`B"];
    let metfsststr = ["1/4 x M14  METRIC FSST","1/4 x M16  METRIC FSST","5/16 x M16  METRIC FSST","3/18 x M18  METRIC FSST","1/2 x M22  METRIC FSST","1/2 x M24  METRIC FSST","1/2 x M20  METRIC FSST","5/8 x M26  METRIC FSST","3/4 x M30  METRIC FSST","1/2 x M26  METRIC FSST","3/4 x M36  METRIC FSST","1 x M36  METRIC FSST","1 x M42  METRIC FSST","1* 1/4 x M52  METRIC FSST"];
    let metfssthpstr = ["3/4 X  M36  METRIC FSST","1 X M36 METRIC FSST","1 X M42 METRIC FSST"];
    
    let mfunfstr = ["3/8 x 11/16 MF","3/8 x 13/16 MF","1/2 x 13/16 MF","1/2 x 1 UNF MF","5/8 x 1 UNF MF","5/8 x 1* 3/16  MF","3/4 x 1* 3/16  MF"];
    let mfunfhpstr = ["5/8 X  1* 3/16  MF","3/4 X 1* 3/16  MF"];
    let mf37tstr = ["3/8 x 9/16 MF","3/8 x 3/4 MF","1/2 x 7/8 MF","5/8 x 1* 1/16 MF","3/4 x 1* 1/16 MF","3/4 x 1* 5/16 MF","1 x 1* 5/16 MF"];
    let mf37thpstr = ["3/4 X  1* 1/16  MF","1 X 1* 5/16  MF"];
    let mfmetstr = ["3/8 X M18 X 1.5  MF","1/2 X M22 X 1.5  MF","1/2 X M24 X 1.5  MF","5/8 X M26 X 1.5  MF"];

    let hosetype = ["R1","R2","4SH"];
    let fit1type = ["BSP-FSST","BSP-FSST(H.P)","BSP-90 BENDS","BSP-90 BENDS(H.P)","UNF-FLAT 90 BENDS","UNF-FLAT 90 BENDS(H.P)","UNF-FSST","UNF-FSST(H.P)","UNF-FLAT 45 BENDS","UNF-FLAT 45 BENDS(H.P)","UNF-37 T 90 BENDS","UNF-37 T 90 BENDS(H.P)","UNF-37 T 45 BENDS","UNF-37 T FSST BENDS","UNF-37 T FSST BENDS(H.P)","METRIC-90 BENDS","METRIC-90 BENDS(H.P)","METRIC-FSST","METRIC-FSST(H.P)","MALE-FIX UNF","MALE-FIX UNF(H.P)","MALE-FIX 37 T","MALE-FIX 37 T(H.P)","MALE-FIX METRIC"];
    let fit2type = ["BSP-FSST","BSP-FSST(H.P)","BSP-90 BENDS","BSP-90 BENDS(H.P)","UNF-FLAT 90 BENDS","UNF-FLAT 90 BENDS(H.P)","UNF-FSST","UNF-FSST(H.P)","UNF-FLAT 45 BENDS","UNF-FLAT 45 BENDS(H.P)","UNF-37 T 90 BENDS","UNF-37 T 90 BENDS(H.P)","UNF-37 T 45 BENDS","UNF-37 T FSST BENDS","UNF-37 T FSST BENDS(H.P)","METRIC-90 BENDS","METRIC-90 BENDS(H.P)","METRIC-FSST","METRIC-FSST(H.P)","MALE-FIX UNF","MALE-FIX UNF(H.P)","MALE-FIX 37 T","MALE-FIX 37 T(H.P)","MALE-FIX METRIC"];
    let slevtype = ["R1-R2","4SH"];

    let hotype,hl,stype,hbox,sbox,f1type,f2type,f1box,f2box,f1price=0.0,f2price=0.0,hprice=0.0,sprice=0.0,cost=0.0 ,temp=0.0,total=0.00,sgst=0.0,cgst=0.0;
    

    ht.innerHTML = hosetype.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
    f1t.innerHTML = fit1type.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
    f2t.innerHTML = fit2type.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
    st.innerHTML = slevtype.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');

    const htselect  = ()  =>{
        hotype = ht.options[ht.selectedIndex].value;
        if(hotype == 'R1' )
            h.innerHTML = hr1.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
        else if(hotype == 'R2')
            h.innerHTML = hr2.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
        else if(hotype == '4SH')
            h.innerHTML = h4sh.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
    }
    const stselect = () => {
        stype = st.options[st.selectedIndex].value;
        if(stype == "R1-R2")
            s.innerHTML = srs.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
        else if(stype == '4SH')
            s.innerHTML = s4sh.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
    };
    const ft1select  = ()  => {
        f1type = f1t.options[f1t.selectedIndex].value;
        if( f1type== "BSP-FSST")
            f1.innerHTML = bspfsststr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f1type=="BSP-FSST(H.P)")
            f1.innerHTML = bspfssthpstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,''); 
                
        else if(f1type=="BSP-90 BENDS")
            f1.innerHTML = bsp90str.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f1type=="BSP-90 BENDS(H.P)")
            f1.innerHTML = bsp90hpstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                 
        else if(f1type=="UNF-FLAT 90 BENDS")
            f1.innerHTML = unf90str.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f1type=="UNF-FLAT 90 BENDS(H.P)")
            f1.innerHTML = unf90hpstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,''); 
                
        else if(f1type=="UNF-FSST")
            f1.innerHTML = unffsststr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f1type=="UNF-FSST(H.P)")
            f1.innerHTML = unffssthpstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f1type=="UNF-FLAT 45 BENDS")
            f1.innerHTML = unf45str.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f1type=="UNF-FLAT 45 BENDS(H.P)")
            f1.innerHTML = unf45hpstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f1type=="UNF-37 T 90 BENDS")
            f1.innerHTML = unf37t90str.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f1type=="UNF-37 T 90 BENDS(H.P)")
            f1.innerHTML = unf37t90hpstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f1type=="UNF-37 T 45 BENDS")
            f1.innerHTML = unf37t45str.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f1type=="UNF-37 T FSST BENDS")
            f1.innerHTML = unf37tfsststr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f1type=="UNF-37 T FSST BENDS(H.P)")
            f1.innerHTML = unf37tfssthpstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f1type=="METRIC-90 BENDS")
            f1.innerHTML = met90str.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f1type=="METRIC-90 BENDS(H.P)")
            f1.innerHTML = met90hpstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f1type=="METRIC-FSST")
            f1.innerHTML = metfsststr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f1type=="METRIC-FSST(H.P)")
            f1.innerHTML = metfssthpstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f1type=="MALE-FIX UNF")
            f1.innerHTML = mfunfstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f1type=="MALE-FIX UNF(H.P)")
            f1.innerHTML = mfunfhpstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f1type=="MALE-FIX 37 T")
            f1.innerHTML = mf37tstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f1type=="MALE-FIX 37 T(H.P)")
            f1.innerHTML = mf37thpstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f1type=="MALE-FIX METRIC")
            f1.innerHTML = mfmetstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');

    };
    const ft2select  = () =>{
        f2type = f2t.options[f2t.selectedIndex].value;
        if( f2type== "BSP-FSST")
            f2.innerHTML = bspfsststr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f2type=="BSP-FSST(H.P)")
            f2.innerHTML = bspfssthpstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,''); 
                
        else if(f2type=="BSP-90 BENDS")
            f2.innerHTML = bsp90str.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f2type=="BSP-90 BENDS(H.P)")
            f2.innerHTML = bsp90hpstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                 
        else if(f2type=="UNF-FLAT 90 BENDS")
            f2.innerHTML = unf90str.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f2type=="UNF-FLAT 90 BENDS(H.P)")
            f2.innerHTML = unf90hpstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,''); 
                
        else if(f2type=="UNF-FSST")
            f2.innerHTML = unffsststr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f2type=="UNF-FSST(H.P)")
            f2.innerHTML = unffssthpstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f2type=="UNF-FLAT 45 BENDS")
            f2.innerHTML = unf45str.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f2type=="UNF-FLAT 45 BENDS(H.P)")
            f2.innerHTML = unf45hpstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f2type=="UNF-37 T 90 BENDS")
            f2.innerHTML = unf37t90str.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f2type=="UNF-37 T 90 BENDS(H.P)")
            f2.innerHTML = unf37t90hpstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f2type=="UNF-37 T 45 BENDS")
            f2.innerHTML = unf37t45str.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f2type=="UNF-37 T FSST BENDS")
            f2.innerHTML = unf37tfsststr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f2type=="UNF-37 T FSST BENDS(H.P)")
            f2.innerHTML = unf37tfssthpstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f2type=="METRIC-90 BENDS")
            f2.innerHTML = met90str.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f2type=="METRIC-90 BENDS(H.P)")
            f2.innerHTML = met90hpstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f2type=="METRIC-FSST")
            f2.innerHTML = metfsststr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f2type=="METRIC-FSST(H.P)")
            f2.innerHTML = metfssthpstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f2type=="MALE-FIX UNF")
            f2.innerHTML = mfunfstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f2type=="MALE-FIX UNF(H.P)")
            f2.innerHTML = mfunfhpstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f2type=="MALE-FIX 37 T")
            f2.innerHTML = mf37tstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f2type=="MALE-FIX 37 T(H.P)")
            f2.innerHTML = mf37thpstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');
                
        else if(f2type=="MALE-FIX METRIC")
            f2.innerHTML = mfmetstr.reduce((tmp,x) => `${tmp}<option>${x}</option>`,'');

    };
    const hselect  = () => {
        hbox = h.selectedIndex;
        if(hotype == 'R1' )
                {
                    if(hbox== 0)
                    hprice=250; 
                else if(hbox== 1)
                    hprice=250;
                else if(hbox== 2)
                    hprice=300;
                else if(hbox== 3)
                    hprice=350;
                else if(hbox== 4)
                    hprice=350;
                else if(hbox== 5)
                    hprice=500;
                else if(hbox== 6)
                    hprice=600;
                else if(hbox== 7)
                    hprice=650;
                else if(hbox== 8)
                    hprice=700;
                else if(hbox== 9)
                    hprice=750;
                else if(hbox== 10)
                    hprice=800;
                    
                } 
               else if(hotype == 'R2')
                {
                    if(hbox== 0)
                        hprice=300; 
                    else if(hbox== 1)
                        hprice=300;
                    else if(hbox== 2)
                        hprice=350;
                    else if(hbox== 3)
                        hprice=400;
                    else if(hbox== 4)
                        hprice=400;
                    else if(hbox== 5)
                        hprice=550;
                    else if(hbox== 6)
                        hprice=650;
                    else if(hbox== 7)
                        hprice=700;
                    else if(hbox== 8)
                        hprice=750;
                    else if(hbox== 9)
                        hprice=800;
                     else if(hbox== 10)
                        hprice=850;
                    
                } 
                else if(hotype == '4SH')
                {
                    if(hbox== 0)
                        hprice=300; 
                    else if(hbox== 1)
                        hprice=450;
                    else if(hbox== 2)
                        hprice=500;
                    else if(hbox== 3)
                        hprice=600;
                    else if(hbox== 4)
                        hprice=650;
                    else if(hbox== 5)
                        hprice=800;
                    else if(hbox== 6)
                        hprice=1200;
                    
                    
                } 
               
    }
    function sselect(){
        sbox = s.selectedIndex;
        
        if(stype == "R1-R2")
            {
                if(sbox== 0)
                        sprice=50; 
                    else if(sbox== 1)
                        sprice=50;
                    else if(sbox== 2)
                        sprice=50;
                    else if(sbox== 3)
                        sprice=75;
                    else if(sbox== 4)
                        sprice=75;
                    else if(sbox== 5)
                        sprice=75;
                    else if(sbox== 6)
                        sprice=100;
                    else if(sbox== 7)
                        sprice=120;
                    else if(sbox== 8)
                        sprice=150;
                    else if(sbox== 9)
                        sprice=200;
            }
        else if(stype == '4SH')
            {
                if(sbox== 0)
                        sprice=75; 
                    else if(sbox== 1)
                        sprice=75;
                    else if(sbox== 2)
                        sprice=75;
                    else if(sbox== 3)
                        sprice=75;
                    else if(sbox== 4)
                        sprice=100;
                    else if(sbox== 5)
                        sprice=100;
                    else if(sbox== 6)
                        sprice=125;
                    else if(sbox== 7)
                        sprice=150;
                    else if(sbox== 8)
                        sprice=200;
            }
    }
    function f1select(){
        f1box = f1.selectedIndex;
        if( f1type== "BSP-FSST")
            {
                if(f1box== 0)
                        f1price=75; 
                    else if(f1box== 1)
                        f1price=75;
                    else if(f1box== 2)
                        f1price=90;
                    else if(f1box== 3)
                        f1price=90;
                    else if(f1box== 4)
                        f1price=100;
                    else if(f1box== 5)
                        f1price=100;
                    else if(f1box== 6)
                        f1price=125;
                    else if(f1box== 7)
                        f1price=125;
                    else if(f1box== 8)
                        f1price=150;
                    else if(f1box== 9)
                        f1price=200;
                    else if(f1box== 10)
                        f1price=225;
                    else if(f1box== 11)
                        f1price=250;
            }
                
        else if(f1type=="BSP-FSST(H.P)")
            {
                if(f1box== 0)
                        f1price=225; 
                    else if(f1box== 1)
                        f1price=225;
                    else if(f1box== 2)
                        f1price=250;
                    else if(f1box== 3)
                        f1price=250;
                    else if(f1box== 4)
                        f1price=275;
            }   
                
        else if(f1type=="BSP-90 BENDS")
            {
                if(f1box== 0)
                        f1price=75; 
                    else if(f1box== 1)
                        f1price=75;
                    else if(f1box== 2)
                        f1price=75;
                    else if(f1box== 3)
                        f1price=100;
                    else if(f1box== 4)
                        f1price=100;
                    else if(f1box== 5)
                        f1price=125;
                    else if(f1box== 6)
                        f1price=125;
                    else if(f1box== 7)
                        f1price=125;
                    else if(f1box== 8)
                        f1price=150;
                    else if(f1box== 9)
                        f1price=150;
                    else if(f1box== 10)
                        f1price=175;
                    else if(f1box== 11)
                        f1price=200;
            } 
                
        else if(f1type=="BSP-90 BENDS(H.P)")
            {
                if(f1box== 0)
                        f1price=125; 
                    else if(f1box== 1)
                        f1price=150;
                    else if(f1box== 2)
                        f1price=175;
                    else if(f1box== 3)
                        f1price=200;
                    else if(f1box== 4)
                        f1price=225;
            } 
                 
        else if(f1type=="UNF-FLAT 90 BENDS")
            {
                if(f1box== 0)
                        f1price=50; 
                    else if(f1box== 1)
                        f1price=50;
                    else if(f1box== 2)
                        f1price=50;
                    else if(f1box== 3)
                        f1price=50;
                    else if(f1box== 4)
                        f1price=75;
                    else if(f1box== 5)
                        f1price=75;
                    else if(f1box== 6)
                        f1price=100;
                    else if(f1box== 7)
                        f1price=100;
                    else if(f1box== 8)
                        f1price=125;
                    else if(f1box== 9)
                        f1price=125;
            } 
                
        else if(f1type=="UNF-FLAT 90 BENDS(H.P)")
            {
                if(f1box== 0)
                        f1price=75; 
                    else if(f1box== 1)
                        f1price=100;
                    else if(f1box== 2)
                        f1price=125;
            }   
                
        else if(f1type=="UNF-FSST")
            {
                if(f1box== 0)
                        f1price=50; 
                    else if(f1box== 1)
                        f1price=50;
                    else if(f1box== 2)
                        f1price=50;
                    else if(f1box== 3)
                        f1price=50;
                    else if(f1box== 4)
                        f1price=75;
                    else if(f1box== 5)
                        f1price=75;
                    else if(f1box== 6)
                        f1price=100;
                    else if(f1box== 7)
                        f1price=100;
                    else if(f1box== 8)
                        f1price=125;
                    else if(f1box== 9)
                        f1price=150;
            } 
                
        else if(f1type=="UNF-FSST(H.P)")
            {
                if(f1box== 0)
                        f1price=75; 
                    else if(f1box== 1)
                        f1price=100;
                    else if(f1box== 2)
                        f1price=125;
            }  
                
        else if(f1type=="UNF-FLAT 45 BENDS")
            {
                if(f1box== 0)
                        f1price=75; 
                    else if(f1box== 1)
                        f1price=75;
                    else if(f1box== 2)
                        f1price=100;
                    else if(f1box== 3)
                        f1price=100;
                    else if(f1box== 4)
                        f1price=125;
                    else if(f1box== 5)
                        f1price=125;
                    else if(f1box== 6)
                        f1price=150;
            }  
                
        else if(f1type=="UNF-FLAT 45 BENDS(H.P)")
            {
                if(f1box== 0)
                        f1price=125; 
                    else if(f1box== 1)
                        f1price=150;
                    else if(f1box== 2)
                        f1price=175;
            } 
                
        else if(f1type=="UNF-37 T 90 BENDS")
            {
                if(f1box== 0)
                        f1price=75; 
                    else if(f1box== 1)
                        f1price=75;
                    else if(f1box== 2)
                        f1price=75;
                    else if(f1box== 3)
                        f1price=100;
                    else if(f1box== 4)
                        f1price=100;
                    else if(f1box== 5)
                        f1price=125;
                    else if(f1box== 6)
                        f1price=125;
                    else if(f1box== 7)
                        f1price=150;
                    else if(f1box== 8)
                        f1price=150;
                    else if(f1box== 9)
                        f1price=175;
                    else if(f1box== 10)
                        f1price=125;
            } 
                
        else if(f1type=="UNF-37 T 90 BENDS(H.P)")
            {
                if(f1box== 0)
                  f1price=225;
            }
                
        else if(f1type=="UNF-37 T 45 BENDS")
            {
                if(f1box== 0)
                        f1price=75; 
                    else if(f1box== 1)
                        f1price=120;
                    else if(f1box== 2)
                        f1price=150;
                    else if(f1box== 3)
                        f1price=175;
                    else if(f1box== 4)
                        f1price=200;
            } 
                
        else if(f1type=="UNF-37 T FSST BENDS")
            {
                if(f1box== 0)
                        f1price=75; 
                    else if(f1box== 1)
                        f1price=75;
                    else if(f1box== 2)
                        f1price=75;
                    else if(f1box== 3)
                        f1price=100;
                    else if(f1box== 4)
                        f1price=100;
                    else if(f1box== 5)
                        f1price=125;
                    else if(f1box== 6)
                        f1price=125;
                    else if(f1box== 7)
                        f1price=150;
                    else if(f1box== 8)
                        f1price=150;
                    else if(f1box== 9)
                        f1price=200;
                    else if(f1box== 10)
                        f1price=125;
            }  
                
        else if(f1type=="UNF-37 T FSST BENDS(H.P)")
            {
                if(f1box== 0)
                  f1price=225;
            }  
                
        else if(f1type=="METRIC-90 BENDS")
            {
                if(f1box== 0)
                        f1price=100; 
                    else if(f1box== 1)
                        f1price=125;
                    else if(f1box== 2)
                        f1price=100;
                    else if(f1box== 3)
                        f1price=125;
                    else if(f1box== 4)
                        f1price=150;
                    else if(f1box== 5)
                        f1price=150;
                    else if(f1box== 6)
                        f1price=150;
                    else if(f1box== 7)
                        f1price=175;
                    else if(f1box== 8)
                        f1price=175;
                    else if(f1box== 9)
                        f1price=150;
                    else if(f1box== 10)
                        f1price=200;
                    else if(f1box== 11)
                        f1price=225;
                    else if(f1box== 12)
                        f1price=250;
                    else if(f1box== 13)
                        f1price=250;
            } 
                
        else if(f1type=="METRIC-90 BENDS(H.P)")
            {
                if(f1box== 0)
                        f1price=225; 
                    else if(f1box== 1)
                        f1price=250;
                    else if(f1box== 2)
                        f1price=250;
            } 
                
        else if(f1type=="METRIC-FSST")
            {
                if(f1box== 0)
                        f1price=50; 
                    else if(f1box== 1)
                        f1price=50;
                    else if(f1box== 2)
                        f1price=50;
                    else if(f1box== 3)
                        f1price=50;
                    else if(f1box== 4)
                        f1price=75;
                    else if(f1box== 5)
                        f1price=75;
                    else if(f1box== 6)
                        f1price=75;
                    else if(f1box== 7)
                        f1price=100;
                    else if(f1box== 8)
                        f1price=125;
                    else if(f1box== 9)
                        f1price=125;
                    else if(f1box== 10)
                        f1price=150;
                    else if(f1box== 11)
                        f1price=175;
                    else if(f1box== 12)
                        f1price=200;
                    else if(f1box== 13)
                        f1price=225;
            }  
                
        else if(f1type=="METRIC-FSST(H.P)")
            {
                if(f1box== 0)
                        f1price=150; 
                    else if(f1box== 1)
                        f1price=150;
                    else if(f1box== 2)
                        f1price=175;
            } 
                
        else if(f1type=="MALE-FIX UNF")
            {
                if(f1box== 0)
                        f1price=50; 
                    else if(f1box== 1)
                        f1price=50;
                    else if(f1box== 2)
                        f1price=75;
                    else if(f1box== 3)
                        f1price=75;
                    else if(f1box== 4)
                        f1price=125;
                    else if(f1box== 5)
                        f1price=150;
                    else if(f1box== 6)
                        f1price=150;
            } 
                
        else if(f1type=="MALE-FIX UNF(H.P)")
            {
                if(f1box== 0)
                        f1price=175; 
                    else if(f1box== 1)
                        f1price=175;
            }  
                
        else if(f1type=="MALE-FIX 37 T")
            {
                if(f1box== 0)
                        f1price =50; 
                    else if(f1box== 1)
                        f1price =50;
                    else if(f1box== 2)
                        f1price =75;
                    else if(f1box== 3)
                        f1price =100;
                    else if(f1box== 4)
                        f1price =125;
                    else if(f1box== 5)
                        f1price =150;
                    else if(f1box== 6)
                        f1price =200;
            } 
                
        else if(f1type=="MALE-FIX 37 T(H.P)")
            {
                if(f1box== 0)
                        f1price=125; 
                    else if(f1box== 1)
                        f1price=150;
            }  
                
        else if(f1type=="MALE-FIX METRIC")
            {
                if(f1box== 0)
                        f1price=75; 
                    else if(f1box== 1)
                        f1price=120;
                    else if(f1box== 2)
                        f1price=120;
                    else if(f1box== 3)
                        f1price=150;q
            } 
            

    };


    //f2prce
    const f2select = () => {
        f2box = f2.selectedIndex;
        if( f2type== "BSP-FSST")
            {
                if(f2box== 0)
                        f2price=75; 
                    else if(f2box== 1)
                        f2price=75;
                    else if(f2box== 2)
                        f2price=90;
                    else if(f2box== 3)
                        f2price=90;
                    else if(f2box== 4)
                        f2price=100;
                    else if(f2box== 5)
                        f2price=100;
                    else if(f2box== 6)
                        f2price=125;
                    else if(f2box== 7)
                        f2price=125;
                    else if(f2box== 8)
                        f2price=150;
                    else if(f2box== 9)
                        f2price=200;
                    else if(f2box== 10)
                        f2price=225;
                    else if(f2box== 11)
                        f2price=250;
            }
                
        else if(f2type=="BSP-FSST(H.P)")
            {
                if(f2box== 0)
                        f2price=225; 
                    else if(f2box== 1)
                        f2price=225;
                    else if(f2box== 2)
                        f2price=250;
                    else if(f2box== 3)
                        f2price=250;
                    else if(f2box== 4)
                        f2price=275;
            }   
                
        else if(f2type=="BSP-90 BENDS")
            {
                if(f2box== 0)
                        f2price=75; 
                    else if(f2box== 1)
                        f2price=75;
                    else if(f2box== 2)
                        f2price=75;
                    else if(f2box== 3)
                        f2price=100;
                    else if(f2box== 4)
                        f2price=100;
                    else if(f2box== 5)
                        f2price=125;
                    else if(f2box== 6)
                        f2price=125;
                    else if(f2box== 7)
                        f2price=125;
                    else if(f2box== 8)
                        f2price=150;
                    else if(f2box== 9)
                        f2price=150;
                    else if(f2box== 10)
                        f2price=175;
                    else if(f2box== 11)
                        f2price=200;
            } 
                
        else if(f2type=="BSP-90 BENDS(H.P)")
            {
                if(f2box== 0)
                        f2price=125; 
                    else if(f2box== 1)
                        f2price=150;
                    else if(f2box== 2)
                        f2price=175;
                    else if(f2box== 3)
                        f2price=200;
                    else if(f2box== 4)
                        f2price=225;
            } 
                 
        else if(f2type=="UNF-FLAT 90 BENDS")
            {
                if(f2box== 0)
                        f2price=50; 
                    else if(f2box== 1)
                        f2price=50;
                    else if(f2box== 2)
                        f2price=50;
                    else if(f2box== 3)
                        f2price=50;
                    else if(f2box== 4)
                        f2price=75;
                    else if(f2box== 5)
                        f2price=75;
                    else if(f2box== 6)
                        f2price=100;
                    else if(f2box== 7)
                        f2price=100;
                    else if(f2box== 8)
                        f2price=125;
                    else if(f2box== 9)
                        f2price=125;
            } 
                
        else if(f2type=="UNF-FLAT 90 BENDS(H.P)")
            {
                if(f2box== 0)
                        f2price=75; 
                    else if(f2box== 1)
                        f2price=100;
                    else if(f2box== 2)
                        f2price=125;
            }   
                
        else if(f2type=="UNF-FSST")
            {
                if(f2box== 0)
                        f2price=50; 
                    else if(f2box== 1)
                        f2price=50;
                    else if(f2box== 2)
                        f2price=50;
                    else if(f2box== 3)
                        f2price=50;
                    else if(f2box== 4)
                        f2price=75;
                    else if(f2box== 5)
                        f2price=75;
                    else if(f2box== 6)
                        f2price=100;
                    else if(f2box== 7)
                        f2price=100;
                    else if(f2box== 8)
                        f2price=125;
                    else if(f2box== 9)
                        f2price=150;
            } 
                
        else if(f2type=="UNF-FSST(H.P)")
            {
                if(f2box== 0)
                        f2price=75; 
                    else if(f2box== 1)
                        f2price=100;
                    else if(f2box== 2)
                        f2price=125;
            }  
                
        else if(f2type=="UNF-FLAT 45 BENDS")
            {
                if(f2box== 0)
                        f2price=75; 
                    else if(f2box== 1)
                        f2price=75;
                    else if(f2box== 2)
                        f2price=100;
                    else if(f2box== 3)
                        f2price=100;
                    else if(f2box== 4)
                        f2price=125;
                    else if(f2box== 5)
                        f2price=125;
                    else if(f2box== 6)
                        f2price=150;
            }  
                
        else if(f2type=="UNF-FLAT 45 BENDS(H.P)")
            {
                if(f2box== 0)
                        f2price=125; 
                    else if(f2box== 1)
                        f2price=150;
                    else if(f2box== 2)
                        f2price=175;
            } 
                
        else if(f2type=="UNF-37 T 90 BENDS")
            {
                if(f2box== 0)
                        f2price=75; 
                    else if(f2box== 1)
                        f2price=75;
                    else if(f2box== 2)
                        f2price=75;
                    else if(f2box== 3)
                        f2price=100;
                    else if(f2box== 4)
                        f2price=100;
                    else if(f2box== 5)
                        f2price=125;
                    else if(f2box== 6)
                        f2price=125;
                    else if(f2box== 7)
                        f2price=150;
                    else if(f2box== 8)
                        f2price=150;
                    else if(f2box== 9)
                        f2price=175;
                    else if(f2box== 10)
                        f2price=125;
            } 
                
        else if(f2type=="UNF-37 T 90 BENDS(H.P)")
            {
                if(f2box== 0)
                  f2price=225;
            }
                
        else if(f2type=="UNF-37 T 45 BENDS")
            {
                if(f2box== 0)
                        f2price=75; 
                    else if(f2box== 1)
                        f2price=120;
                    else if(f2box== 2)
                        f2price=150;
                    else if(f2box== 3)
                        f2price=175;
                    else if(f2box== 4)
                        f2price=200;
            } 
                
        else if(f2type=="UNF-37 T FSST BENDS")
            {
                if(f2box== 0)
                        f2price=75; 
                    else if(f2box== 1)
                        f2price=75;
                    else if(f2box== 2)
                        f2price=75;
                    else if(f2box== 3)
                        f2price=100;
                    else if(f2box== 4)
                        f2price=100;
                    else if(f2box== 5)
                        f2price=125;
                    else if(f2box== 6)
                        f2price=125;
                    else if(f2box== 7)
                        f2price=150;
                    else if(f2box== 8)
                        f2price=150;
                    else if(f2box== 9)
                        f2price=200;
                    else if(f2box== 10)
                        f2price=125;
            }  
                
        else if(f2type=="UNF-37 T FSST BENDS(H.P)")
            {
                if(f2box== 0)
                  f2price=225;
            }  
                
        else if(f2type=="METRIC-90 BENDS")
            {
                if(f2box== 0)
                        f2price=100; 
                    else if(f2box== 1)
                        f2price=125;
                    else if(f2box== 2)
                        f2price=100;
                    else if(f2box== 3)
                        f2price=125;
                    else if(f2box== 4)
                        f2price=150;
                    else if(f2box== 5)
                        f2price=150;
                    else if(f2box== 6)
                        f2price=150;
                    else if(f2box== 7)
                        f2price=175;
                    else if(f2box== 8)
                        f2price=175;
                    else if(f2box== 9)
                        f2price=150;
                    else if(f2box== 10)
                        f2price=200;
                    else if(f2box== 11)
                        f2price=225;
                    else if(f2box== 12)
                        f2price=250;
                    else if(f2box== 13)
                        f2price=250;
            } 
                
        else if(f2type=="METRIC-90 BENDS(H.P)")
            {
                if(f2box== 0)
                        f2price=225; 
                    else if(f2box== 1)
                        f2price=250;
                    else if(f2box== 2)
                        f2price=250;
            } 
                
        else if(f2type=="METRIC-FSST")
            {
                if(f2box== 0)
                        f2price=50; 
                    else if(f2box== 1)
                        f2price=50;
                    else if(f2box== 2)
                        f2price=50;
                    else if(f2box== 3)
                        f2price=50;
                    else if(f2box== 4)
                        f2price=75;
                    else if(f2box== 5)
                        f2price=75;
                    else if(f2box== 6)
                        f2price=75;
                    else if(f2box== 7)
                        f2price=100;
                    else if(f2box== 8)
                        f2price=125;
                    else if(f2box== 9)
                        f2price=125;
                    else if(f2box== 10)
                        f2price=150;
                    else if(f2box== 11)
                        f2price=175;
                    else if(f2box== 12)
                        f2price=200;
                    else if(f2box== 13)
                        f2price=225;
            }  
                
        else if(f2type=="METRIC-FSST(H.P)")
            {
                if(f2box== 0)
                        f2price=150; 
                    else if(f2box== 1)
                        f2price=150;
                    else if(f2box== 2)
                        f2price=175;
            } 
                
        else if(f2type=="MALE-FIX UNF")
            {
                if(f2box== 0)
                        f2price=50; 
                    else if(f2box== 1)
                        f2price=50;
                    else if(f2box== 2)
                        f2price=75;
                    else if(f2box== 3)
                        f2price=75;
                    else if(f2box== 4)
                        f2price=125;
                    else if(f2box== 5)
                        f2price=150;
                    else if(f2box== 6)
                        f2price=150;
            } 
                
        else if(f2type=="MALE-FIX UNF(H.P)")
            {
                if(f2box== 0)
                        f2price=175; 
                    else if(f2box== 1)
                        f2price=175;
            }  
                
        else if(f2type=="MALE-FIX 37 T")
            {
                if(f2box== 0)
                        f2price =50; 
                    else if(f2box== 1)
                        f2price =50;
                    else if(f2box== 2)
                        f2price =75;
                    else if(f2box== 3)
                        f2price =100;
                    else if(f2box== 4)
                        f2price =125;
                    else if(f2box== 5)
                        f2price =150;
                    else if(f2box== 6)
                        f2price =200;
            } 
                
        else if(f2type=="MALE-FIX 37 T(H.P)")
            {
                if(f2box== 0)
                        f2price=125; 
                    else if(f2box== 1)
                        f2price=150;
            }  
                
        else if(f2type=="MALE-FIX METRIC")
            {
                if(f2box== 0)
                        f2price=75; 
                    else if(f2box== 1)
                        f2price=120;
                    else if(f2box== 2)
                        f2price=120;
                    else if(f2box== 3)
                        f2price=150;
            } 
            
    };
    
    const calci = () => {
                hl = parseFloat(l.value);
                cost = parseFloat((hprice*hl)+(f1price + f2price) +(2*sprice));
                temp = cost;
                temp = temp * 0.2;
                cost += temp;
                cost = cost.toFixed(2);
                temp = cost;
                temp = temp * 0.09;
                sgst = temp;
                sgst = sgst.toFixed(2);
                temp = cost;
                temp = temp * 0.09;
                cgst = temp;
                cgst = cgst.toFixed(2);
                total = parseFloat(cost)+parseFloat(sgst)+parseFloat(cgst);
                total = total.toFixed(2);
                to.innerHTML = ` Rs. ${cost}`;
                sg.innerHTML = ` Rs. ${sgst}`;
                cg.innerHTML = ` Rs. ${cgst}`;
                gto.innerHTML = ` Rs. ${total}`;
                b.classList.add('btro');
                ca.style.display="block";
                setTimeout(() =>{
                    c1.style.display ="block";
                    cb.style.display="block";
                },1000);
                setTimeout(() =>{
                    c2.style.display ="block";
                    cc.style.display="block";
                },1500);
                setTimeout(() =>{
                    c3.style.display ="block";
                    cd.style.display="block";
                },2000);
                setTimeout(() =>{
                    b.classList.remove('btro');
                },1000);
                
    };

    ht.addEventListener('click',htselect);
    st.addEventListener('click',stselect);
    h.addEventListener('click',hselect);
    s.addEventListener('click',sselect);
    f1t.addEventListener('click',ft1select);
    f2t.addEventListener('click',ft2select);
    f1.addEventListener('click',f1select);
    f2.addEventListener('click',f2select);
    b.addEventListener('click',calci);
    