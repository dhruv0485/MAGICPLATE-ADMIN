export async function submitCakeProduct(CakeProductInfo) {
    try {
      const API_URL = process.env.REACT_APP_API_URL || 'https://magicplate-admin.vercel.app/api/cakes'
      const formData = new FormData()
      formData.append('name', CakeProductInfo.name)
      formData.append('weight', CakeProductInfo.weight)
      formData.append('description', CakeProductInfo.description)
      formData.append('price', CakeProductInfo.price)
  
      if (CakeProductInfo.image) {
        formData.append('image', CakeProductInfo.image)
      }
      const response = await fetch(`${API_URL}/addCake`, {
        method: 'POST',
        body: formData,
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      console.log('Success', data)
      return data
    } catch (error) {
      console.error('Error submitting Product Information: ', error)
      return null
    }
  }
  
  export async function submitMacronsProduct(MacronsProductInfo) {
    try {
      const API_URL = process.env.REACT_APP_API_URL || 'https://magicplate-admin.vercel.app/api/macrons'
      const formData = new FormData()
      formData.append('name', MacronsProductInfo.name)
      formData.append('packs', MacronsProductInfo.packs)
      formData.append('description', MacronsProductInfo.description)
      formData.append('price', MacronsProductInfo.price)
  
      if (MacronsProductInfo.image) {
        formData.append('image', MacronsProductInfo.image)
      }
      const response = await fetch(`${API_URL}/addMacrons`, {
        method: 'POST',
        body: formData,
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      console.log('Success', data)
      return data
    } catch (error) {
      console.error('Error submitting Product Information: ', error)
      return null
    }
  }

  export async function submitCookiesProduct(CookiesProductInfo) {
    try {
      const API_URL = process.env.REACT_APP_API_URL || 'https://magicplate-admin.vercel.app/api/cookies'
      const formData = new FormData()
      formData.append('name', CookiesProductInfo.name)
      formData.append('packs', CookiesProductInfo.packs)
      formData.append('description', CookiesProductInfo.description)
      formData.append('price', CookiesProductInfo.price)
  
      if (CookiesProductInfo.image) {
        formData.append('image', CookiesProductInfo.image)
      }
      const response = await fetch(`${API_URL}/addCookies`, {
        method: 'POST',
        body: formData,
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      console.log('Success', data)
      return data
    } catch (error) {
      console.error('Error submitting Product Information: ', error)
      return null
    }
  }
  
  export async function submitDonutsProduct(DonutsProductInfo) {
    try {
      const API_URL = process.env.REACT_APP_API_URL || 'https://magicplate-admin.vercel.app/api/donuts';
      const formData = new FormData();
      formData.append('name', DonutsProductInfo.name);
      formData.append('packs', DonutsProductInfo.packs);
      formData.append('description', DonutsProductInfo.description);
      formData.append('price', DonutsProductInfo.price);
  
      if (DonutsProductInfo.image) {
        formData.append('image', DonutsProductInfo.image);
      }
      
      const response = await fetch(`${API_URL}/addDonuts`, {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Success', data);
      return data;
    } catch (error) {
      console.error('Error submitting Product Information: ', error);
      return null;
    }
  }
  

  export async function submitPastriesProduct(PastriesProductInfo) {
    try {
      const API_URL = process.env.REACT_APP_API_URL || 'https://magicplate-admin.vercel.app/api/pastries'
      const formData = new FormData()
      formData.append('name', PastriesProductInfo.name)
      formData.append('description', PastriesProductInfo.description)
      formData.append('price', PastriesProductInfo.price)
  
      if (PastriesProductInfo.image) {
        formData.append('image', PastriesProductInfo.image)
      }
      const response = await fetch(`${API_URL}/addPastries`, {
        method: 'POST',
        body: formData,
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      console.log('Success', data)
      return data
    } catch (error) {
      console.error('Error submitting Product Information: ', error)
      return null
    }
  }
  