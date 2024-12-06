export const handleClick = () => {
    document.getElementById('adding-div').style.display = "block";
    document.getElementById('Main-Content').style.filter = "blur(5px)";
  };
  
  export const handleCross = () => {
    document.getElementById('adding-div').style.display = "none";
    document.getElementById('Main-Content').style.filter = "blur(0px)";
  };
  
  export const handleCake = () => {
    document.getElementById('Add-Cake-Product').style.display = "flex";
    document.getElementById('Main-Content').style.filter = "blur(5px)";
  };
  
  export const handleMacrons = () => {
    document.getElementById('Add-Macrons-Product').style.display = "flex";
    document.getElementById('Main-Content').style.filter = "blur(5px)";
  };

  export const handleCookies = () => {
    document.getElementById('Add-Cookies-Product').style.display = "flex";
    document.getElementById('Main-Content').style.filter = "blur(5px)";
  };

  export const handleChocolate = () => {
    document.getElementById('Add-Chocolate-Product').style.display = "flex";
    document.getElementById('Main-Content').style.filter = "blur(5px)";
  };

  export const handlePastries = () => {
    document.getElementById('Add-Pastries-Product').style.display = "flex";
    document.getElementById('Main-Content').style.filter = "blur(5px)";
  };

  export const handleDonuts = () => {
    document.getElementById('Add-Donuts-Product').style.display = "flex";
    document.getElementById('Main-Content').style.filter = "blur(5px)";
  };
  
  export const handleCloseForm = () => {
    document.getElementById('Add-Cake-Product').style.display = "none";
    document.getElementById('Add-Macrons-Product').style.display = "none";
    document.getElementById('Add-Cookies-Product').style.display = "none";
    document.getElementById('Add-Donuts-Product').style.display = "none";
    document.getElementById('Add-Pastries-Product').style.display = "none";
    document.getElementById('adding-div').style.display = "none";
    document.getElementById('Main-Content').style.filter = "blur(0px)";
  };
  export const setupUIHandlers = () => {
    let elements = {};
  
    const setupListeners = () => {
      elements = {
        add: document.getElementById('add-button'),
        closeX: document.getElementById('X'),
        cakebutton: document.getElementById('cake-button'),
        Cross: document.getElementById('Cross-cake'),
        macronsbutton: document.getElementById('macrons-button'),
        cookiesbutton: document.getElementById('cookies-button'),
        donutsbutton: document.getElementById('donuts-button'),
        pastriesbutton: document.getElementById('pastries-button'),
        Cross2: document.getElementById('Cross-macrons'),
        Cross3: document.getElementById('Cross-cookies'),
        Cross4: document.getElementById('Cross-donuts'),
        Cross5: document.getElementById('Cross-pastries')
      };
  
 
      if (Object.values(elements).every(el => el)) {
        console.log("All elements found, adding event listeners");
        elements.add.addEventListener('click', handleClick);
        elements.closeX.addEventListener('click', handleCross);
        elements.cakebutton.addEventListener('click', handleCake);
        elements.macronsbutton.addEventListener('click', handleMacrons);
        elements.cookiesbutton.addEventListener('click', handleCookies);
        elements.donutsbutton.addEventListener('click', handleDonuts);
        elements.pastriesbutton.addEventListener('click', handlePastries);
        elements.Cross.addEventListener('click', handleCloseForm);
        elements.Cross2.addEventListener('click', handleCloseForm);
        elements.Cross3.addEventListener('click', handleCloseForm);
        elements.Cross4.addEventListener('click', handleCloseForm);
        elements.Cross5.addEventListener('click', handleCloseForm);
      } else {
        console.error('Some elements were not found in the DOM');
        console.log("Missing elements:", Object.entries(elements).filter(([k, v]) => !v));
      }
    };
  

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setupListeners);
    } else {
      setupListeners();
    }
  
 
    return () => {
      if (Object.values(elements).every(el => el)) {
        elements.add.removeEventListener('click', handleClick);
        elements.closeX.removeEventListener('click', handleCross);
        elements.cakebutton.removeEventListener('click', handleCake);
        elements.macronsbutton.removeEventListener('click', handleMacrons);
        elements.cookiesbutton.removeEventListener('click', handleCookies);
        elements.donutsbutton.removeEventListener('click', handleDonuts);
        elements.pastriesbutton.removeEventListener('click', handlePastries);
        elements.Cross.removeEventListener('click', handleCloseForm);
        elements.Cross2.removeEventListener('click', handleCloseForm);
        elements.Cross3.removeEventListener('click', handleCloseForm);
        elements.Cross4.removeEventListener('click', handleCloseForm);
        elements.Cross5.removeEventListener('click', handleCloseForm);
      }
    };
  };