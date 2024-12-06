import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User, Plus, Package, ShoppingBag, BarChart2, X, Upload } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../../src/css/products.css';
import { submitCakeProduct, submitMacronsProduct, submitCookiesProduct, submitDonutsProduct, submitPastriesProduct } from "../utils/Formfunction";
import { handleMacronsInputChange, handleCakeInputChange, handleCookiesInputChange, handleDonutsInputChange, handlePastriesInputChange, handleCakeSubmit, handleMacronsSubmit, handleCookiesSubmit, handleDonutsSubmit, handlePastriesSubmit } from "../utils/Handle";
import { handleClick, setupUIHandlers } from "../utils/Redirect";
import CategoryDistributionChart from "../utils/CategoryDistribution";
function Product() {
  const [cakeformData, setCakeFormData] = useState({
    name: '',
    weight: '',
    description: '',
    price: '',
    image: null
  })
  const [macronsformData, setMacronsFormData] = useState({
    name: '',
    packs: '',
    description: '',
    price: '',
    image: null
  })

  const [cookiesformData, setCookiesFormData] = useState({
    name: '',
    packs: '',
    description: '',
    price: '',
    image: null
  })

  const [donutsformData, setDonutsFormData] = useState({
    name: '',
    packs: '',
    description: '',
    price: '',
    image: null
  })

  const [pastriesformData, setPastriesFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: null
  })

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [cakeuploadText, setCakeUploadText] = useState('Upload Image');
  const [macronsuploadText, setMacronsUploadText] = useState('Upload Image');
  const [cookiesuploadText, setCookiesUploadText] = useState('Upload Image');
  const [donutsuploadText, setDonutsUploadText] = useState('Upload Image')
  const [pastriesuploadText, setPastriesUploadText] = useState('Upload Image')
  const [Total, setTotal] = useState(0)
  const [productCount, setProductCount] = useState(0);
  const handleCakeInputChangeWrapper = handleCakeInputChange(setCakeFormData, setCakeUploadText);
  const handleMacronsInputChangeWrapper = handleMacronsInputChange(setMacronsFormData, setMacronsUploadText);
  const handleCakeSubmitWrapper = handleCakeSubmit(cakeformData, setCakeFormData, setError, setSuccessMessage, setLoading, submitCakeProduct, setCakeUploadText);
  const handleMacronsSubmitWrapper = handleMacronsSubmit(macronsformData, setMacronsFormData, setError, setSuccessMessage, setLoading, submitMacronsProduct, setMacronsUploadText);
  const handleCookiesInputChangeWrapper = handleCookiesInputChange(setCookiesFormData, setCookiesUploadText);
  const handleCookiesSubmitWrapper = handleCookiesSubmit(cookiesformData, setCookiesFormData, setError, setSuccessMessage, setLoading, submitCookiesProduct, setCookiesUploadText);
  const handleDonutsInputChangeWrapper = handleDonutsInputChange(setDonutsFormData, setDonutsUploadText);
  const handleDonutsSubmitWrapper = handleDonutsSubmit(donutsformData, setDonutsFormData, setError, setSuccessMessage, setLoading, submitDonutsProduct, setDonutsUploadText);
  const handlePastriesInputChangeWrapper = handlePastriesInputChange(setPastriesFormData, setPastriesUploadText);
  const handlePastriesSubmitWrapper = handlePastriesSubmit(pastriesformData, setPastriesFormData, setError, setSuccessMessage, setLoading, submitPastriesProduct, setPastriesUploadText);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://192.168.1.8:3000/api/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
        setProductCount(data.length);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products. Please try again later.");
        setLoading(false);
      }
    };

    fetchProducts();

    const cleanup = setupUIHandlers();
    return cleanup;
  }, []);

  const handleCakeUploadClick = () => {
    document.getElementById('cake-image-input').click();
  };

  const handleMacronsUploadClick = () => {
    document.getElementById('macrons-image-input').click();
  };

  const handleCookiesUploadClick = () => {
    document.getElementById('cookies-image-input').click();
  };
  const handleDonutsUploadClick = () => {
    document.getElementById('donuts-image-input').click();
  };
  const handlePastriesUploadClick = () => {
    document.getElementById('pastries-image-input').click();
  };
  const handleTotal = () => {
    setTotal(prevTotal => prevTotal + 1)
  }
  return (
    <>
      <div id="sidebar">
        <div id="companys-name">
          <ShoppingBag className="Big-shopping-bag" />
          <h3 id="companys">MAGICPLATE</h3>
        </div>
        <div id="side-orders">
          <ShoppingBag className="shopping-bag" />
          <span id="order-type">Orders</span>
        </div>
        <div id="side-packaging">
          <Package className="package" />
          <span id="package-type">Products</span>
        </div>
        <div id="side-chart">
          <BarChart2 className="chart" />
          <span id="chart-type">Sales</span>
        </div>
        <div id="side-profile">
          <User className="profile" />
          <span id="profile-type">Profile</span>
        </div>
      </div>

      <div id="Main-Content">
        <div id="header-product">
          <header id="header-overview">Product Overview</header>
        </div>

        <div id="Total-Products">
          <div id="total-products-header">
            <header id="total-header">Total Products</header>
          </div>
          <div id="total-products-no">
            <p id="total-no">{productCount}</p>
          </div>
        </div>

        <div id="Ava-Products">
          <div id="ava-products-header">
            <header id="ava-header">Available Products</header>
          </div>
          <div id="ava-products-no">
            <p id="ava-no">{productCount}</p>
          </div>
        </div>

        <div id="Not-Products">
          <div id="not-products-header">
            <header id="not-header">Not Available</header>
          </div>
          <div id="not-products-no">
            <p id="not-no">0</p>
          </div>
        </div>

        <div id="add-product-box">
          <button id="add-button" onClick={handleClick}>
            <Plus className="plus" />
            <span id="add-product">Add Product</span>
          </button>
        </div>

        <div className="product-table-container">
          <table className="product-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              {product.map((productive, index) => (
                <tr key={index}>
                  <td>{productive.name}</td>
                  <td>{productive.category}</td>
                  <td>${parseFloat(productive.price).toFixed(2)}</td>
                  <td>{productive.weight}</td>
                  <td>
                    <span className={`status-badge ${product.status === "Available" ? "available" : "not-available"}`}>
                      {product.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <CategoryDistributionChart products={product} />

        <div id="extra"></div>
      </div>

      <div id="adding-div">
        <div id="product-add">
          <div id="product-add-header">
            <header id="add-new">Add New Product</header>
            <X height="20px" width="20px" id="X" cursor="pointer" />
          </div>
          <div id="select-category">
            <header id="category">Select Category:</header>
          </div>
          <div id="category-1">
            <div id="cake-category">
              <button id="cake-button">Cake</button>
            </div>
            <div id="macrons-category">
              <button id="macrons-button">Macrons</button>
            </div>
          </div>
          <div id="category-2">
            <div id="cookies-category">
              <button id="cookies-button">Cookies</button>
            </div>
            <div id="donuts-category">
              <button id="donuts-button">Donuts</button>
            </div>
          </div>
          <div id="category-3">
            <div id="pastries-category">
              <button id="pastries-button">Pastries</button>
            </div>
          </div>
        </div>
      </div>

      <div id="Add-Cake-Product">
        <form id="Add-Cake-Form" onSubmit={handleCakeSubmitWrapper}>
          <div id="add-cake-header">
            <h4 id="add-cake-head">Add New Product</h4>
            <X height="20px" width="20px" cursor="pointer" id="Cross-cake" />
          </div>
          <div id="add-cake-slogan">
            <header id="add-slogan">Enter Cake Details:</header>
          </div>
          <div id="Name-Cake">
            <div id="label-name">
              <label id="cake-name">Name Of The Item</label>
            </div>
            <div id="cake-input">
              <input type="text" name="name" id="naming-cake" value={cakeformData.name} onChange={handleCakeInputChangeWrapper} required />
            </div>
          </div>
          <div id="Weight-Cake">
            <div id="label-weight">
              <label id="cake-weight">Weight Of The Item</label>
            </div>
            <div id="weight-input">
              <input type="text" name="weight" id="weighting-cake" value={cakeformData.weight} onChange={handleCakeInputChangeWrapper} required />
            </div>
          </div>
          <div id="Flavour-Cake">
            <div id="label-flavour">
              <label id="cake-flavour">Description Of The Item</label>
            </div>
            <div id="flavour-input">
              <input type="text" name="description" id="flavour-cake" value={cakeformData.description} onChange={handleCakeInputChangeWrapper} required />
            </div>
          </div>
          <div id="Price-Cake">
            <div id="label-price">
              <label id="cake-price">Price Of The Item</label>
            </div>
            <div id="price-input">
              <input type="text" name="price" id="price-cake" value={cakeformData.price} onChange={handleCakeInputChangeWrapper} required />
            </div>
          </div>
          <div id="upload-image" onClick={handleCakeUploadClick} >
            <input type="file" name="image" accept="image/*" onChange={handleCakeInputChangeWrapper} style={{ display: 'none' }} id="cake-image-input" />
            <div id="upload-image-box">
              <Upload height="25px" width="25px" id="Uploading" />
              <span id="upload-image-text">{cakeuploadText}</span>
            </div>
          </div>
          <div id="Add-Cake-Button">
            <button id="adding-cake" type="submit" onClick={handleTotal} disabled={loading} >
              {loading ? (
                <div className="loader"></div>  // Spinner when loading is true
              ) : (
                'Add Product'  // Button text when loading is false
              )}
            </button>
          </div>
        </form>
      </div>
      <div id="Add-Macrons-Product">
        <form id="Add-Macrons-Form" onSubmit={handleMacronsSubmitWrapper} >
          <div id="add-macrons-header">
            <h4 id="add-macrons-head">Add New Product</h4>
            <X height="20px" width="20px" cursor="pointer" id="Cross-macrons" />
          </div>
          <div id="add-macrons-slogan">
            <header id="add-slogan">Enter Macrons Details:</header>
          </div>
          <div id="Name-Macrons">
            <div id="label-name">
              <label id="macrons-name">Name Of The Item</label>
            </div>
            <div id="macrons-input">
              <input type="text" name="name" id="naming-macrons" value={macronsformData.name} onChange={handleMacronsInputChangeWrapper} required />
            </div>
          </div>
          <div id="Veg-Macrons">
            <div id="label-veg">
              <label id="macrons-veg">Packs Of The Item</label>
            </div>
            <div id="veg-input">
              <input type="text" name="packs" id="veg-macrons" value={macronsformData.packs} onChange={handleMacronsInputChangeWrapper} required />
            </div>
          </div>
          <div id="Flavour-Macrons">
            <div id="label-flavour">
              <label id="macrons-flavour">Description Of The Item </label>
            </div>
            <div id="flavour-input">
              <input type="text" name="description" id="flavour-macrons" value={macronsformData.description} onChange={handleMacronsInputChangeWrapper} required />
            </div>
          </div>
          <div id="Price-Macrons">
            <div id="label-price">
              <label id="macrons-price">Price Of The Item</label>
            </div>
            <div id="price-input">
              <input type="text" name="price" id="price-macrons" value={macronsformData.price} onChange={handleMacronsInputChangeWrapper} />
            </div>
          </div>
          <div id="upload-image-1" onClick={handleMacronsUploadClick}  >
            <input type="file" name="image" accept="image/*" style={{ display: 'none' }} onChange={handleMacronsInputChangeWrapper} id="macrons-image-input" />
            <div id="upload-image-box-1">
              <Upload height="25px" width="25px" id="Uploading-1" />
              <span id="upload-image-text-1">{macronsuploadText}</span>
            </div>
          </div>
          <div id="Add-Macrons-Button">
            <button id="adding-macrons" type="submit" onClick={handleTotal} >Add Product</button>
          </div>
        </form>
      </div>
      <div id="Add-Cookies-Product">
        <form id="Add-Cookies-Form" onSubmit={handleCookiesSubmitWrapper} >
          <div id="add-cookies-header">
            <h4 id="add-cookies-head">Add New Product</h4>
            <X height="20px" width="20px" cursor="pointer" id="Cross-cookies" />
          </div>
          <div id="add-cookies-slogan">
            <header id="add-slogan">Enter Cookies Details:</header>
          </div>
          <div id="Name-Cookies">
            <div id="label-name">
              <label id="cookies-name">Name Of The Item</label>
            </div>
            <div id="cookies-input">
              <input type="text" name="name" id="naming-cookies" value={cookiesformData.name} onChange={handleCookiesInputChangeWrapper} required />
            </div>
          </div>
          <div id="Veg-Cookies">
            <div id="label-veg">
              <label id="cookies-veg">Packs Of The Item</label>
            </div>
            <div id="veg-input">
              <input type="text" name="packs" id="veg-cookies" value={cookiesformData.packs} onChange={handleCookiesInputChangeWrapper} required />
            </div>
          </div>
          <div id="Flavour-Cookies">
            <div id="label-flavour">
              <label id="cookies-flavour">Description Of The Item</label>
            </div>
            <div id="flavour-input">
              <input type="text" name="description" id="flavour-cookies" value={cookiesformData.description} onChange={handleCookiesInputChangeWrapper} required />
            </div>
          </div>
          <div id="Price-Cookies">
            <div id="label-price">
              <label id="cookies-price">Price Of The Item</label>
            </div>
            <div id="price-input">
              <input type="text" name="price" id="price-cookies" value={cookiesformData.price} onChange={handleCookiesInputChangeWrapper} />
            </div>
          </div>
          <div id="upload-image-2" onClick={handleCookiesUploadClick}  >
            <input type="file" name="image" accept="image/*" style={{ display: 'none' }} onChange={handleCookiesInputChangeWrapper} id="cookies-image-input" />
            <div id="upload-image-box-1">
              <Upload height="25px" width="25px" id="Uploading-1" />
              <span id="upload-image-text-1">{cookiesuploadText}</span>
            </div>
          </div>
          <div id="Add-Cookies-Button">
            <button id="adding-cookies" type="submit" onClick={handleTotal} >Add Product</button>
          </div>
        </form>
      </div>
      <div id="Add-Pastries-Product">
        <form id="Add-Pastries-Form" onSubmit={handlePastriesSubmitWrapper} >
          <div id="add-pastries-header">
            <h4 id="add-pastries-head">Add New Product</h4>
            <X height="20px" width="20px" cursor="pointer" id="Cross-pastries" />
          </div>
          <div id="add-pastries-slogan">
            <header id="add-slogan">Enter Pastries Details:</header>
          </div>
          <div id="Name-Pastries">
            <div id="label-name">
              <label id="pastries-name">Name Of The Item</label>
            </div>
            <div id="pastries-input">
              <input type="text" name="name" id="naming-pastries" value={pastriesformData.name} onChange={handlePastriesInputChangeWrapper} required />
            </div>
          </div>
          <div id="Flavour-Pastries">
            <div id="label-flavour">
              <label id="pastries-flavour">Description Of The Item</label>
            </div>
            <div id="flavour-input">
              <input type="text" name="description" id="flavour-pastries" value={pastriesformData.description} onChange={handlePastriesInputChangeWrapper} required />
            </div>
          </div>
          <div id="Price-Pastries">
            <div id="label-price">
              <label id="pastries-price">Price Of The Item</label>
            </div>
            <div id="price-input">
              <input type="text" name="price" id="price-pastries" value={pastriesformData.price} onChange={handlePastriesInputChangeWrapper} />
            </div>
          </div>
          <div id="upload-image-3" onClick={handlePastriesUploadClick}  >
            <input type="file" name="image" accept="image/*" style={{ display: 'none' }} onChange={handlePastriesInputChangeWrapper} id="pastries-image-input" />
            <div id="upload-image-box-1">
              <Upload height="25px" width="25px" id="Uploading-1" />
              <span id="upload-image-text-1">{pastriesuploadText}</span>
            </div>
          </div>
          <div id="Add-Pastries-Button">
            <button id="adding-pastries" type="submit" onClick={handleTotal} >Add Product</button>
          </div>
        </form>
      </div>

      <div id="Add-Donuts-Product">
        <form id="Add-Donuts-Form" onSubmit={handleDonutsSubmitWrapper} >
          <div id="add-donuts-header">
            <h4 id="add-donuts-head">Add New Product</h4>
            <X height="20px" width="20px" cursor="pointer" id="Cross-donuts" />
          </div>
          <div id="add-donuts-slogan">
            <header id="add-slogan">Enter Donuts Details:</header>
          </div>
          <div id="Name-Donuts">
            <div id="label-name">
              <label id="donuts-name">Name Of The Item</label>
            </div>
            <div id="donuts-input">
              <input type="text" name="name" id="naming-donuts" value={donutsformData.name} onChange={handleDonutsInputChangeWrapper} required />
            </div>
          </div>
          <div id="Veg-Donuts">
            <div id="label-veg">
              <label id="donuts-veg">Packs Of The Item</label>
            </div>
            <div id="veg-input">
              <input type="text" name="packs" id="veg-donuts" value={donutsformData.packs} onChange={handleDonutsInputChangeWrapper} required />
            </div>
          </div>
          <div id="Flavour-Donuts">
            <div id="label-flavour">
              <label id="donuts-flavour">Flavour Of The Item</label>
            </div>
            <div id="flavour-input">
              <input type="text" name="description" id="flavour-donuts" value={donutsformData.description} onChange={handleDonutsInputChangeWrapper} required />
            </div>
          </div>
          <div id="Price-Donuts">
            <div id="label-price">
              <label id="donuts-price">Price Of The Item</label>
            </div>
            <div id="price-input">
              <input type="text" name="price" id="price-donuts" value={donutsformData.price} onChange={handleDonutsInputChangeWrapper} />
            </div>
          </div>
          <div id="upload-image-4" onClick={handleDonutsUploadClick}>
            <input type="file" name="image" accept="image/*" style={{ display: 'none' }} onChange={handleDonutsInputChangeWrapper} id="donuts-image-input" />
            <div id="upload-image-box-1">
              <Upload height="25px" width="25px" id="Uploading-1" />
              <span id="upload-image-text-1">{donutsuploadText}</span>
            </div>
          </div>
          <div id="Add-Donuts-Button">
            <button id="adding-donuts" type="submit" onClick={handleTotal}>Add Product</button>
          </div>
        </form>
      </div>

    </>
  );
}

export default Product;
