
import { handleCloseForm } from "./Redirect";

export const handleCakeInputChange = (setCakeFormData, setCakeUploadText) => (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
        setCakeFormData(prevState => ({
            ...prevState,
            [name]: files[0]
        }));
        setCakeUploadText('Uploaded');
    } else {
        setCakeFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
};

export const handleMacronsInputChange = (setMacronsFormData, setMacronsUploadText) => (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
        setMacronsFormData(prevState => ({
            ...prevState,
            [name]: files[0]
        }));
        setMacronsUploadText('Uploaded');
    } else {
        setMacronsFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
};

export const handleCakeSubmit = (cakeformData, setCakeFormData, setError, setSuccessMessage, setLoading, submitCakeProduct, setCakeUploadText) => async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage('');
    setLoading(true);

    try {
        await submitCakeProduct(cakeformData);
        setSuccessMessage('Product added successfully!');
        setCakeFormData({
            name: '',
            weight: '',
            description: '',
            price: '',
            image: null
        });
        handleCloseForm()
        setCakeUploadText('Upload Image');
    } catch (error) {
        setError('Failed to add product. Please try again.');
    } finally {
        setLoading(false);
    }
};

export const handleMacronsSubmit = (macronsformData, setMacronsFormData, setError, setSuccessMessage, setLoading, submitMacronsProduct, setMacronsUploadText) => async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage('');
    setLoading(true);

    try {
        await submitMacronsProduct(macronsformData);
        setSuccessMessage('Macrons product added successfully!');
        setMacronsFormData({
            name: '',
            packs: '',
            description: '',
            price: '',
            image: null
        });
        handleCloseForm()
        setMacronsUploadText('Upload Image');
    } catch (error) {
        setError('Failed to add Macrons product. Please try again.');
    } finally {
        setLoading(false);
    }
};

export const handleCookiesInputChange = (setCookiesFormData, setCookiesUploadText) => (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
        setCookiesFormData(prevState => ({
            ...prevState,
            [name]: files[0]
        }));
        setCookiesUploadText('Uploaded');
    } else {
        setCookiesFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
};


export const handleCookiesSubmit = (cookiesformData, setCookiesFormData, setError, setSuccessMessage, setLoading, submitCookiesProduct, setCookiesUploadText) => async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage('');
    setLoading(true);

    try {
        await submitCookiesProduct(cookiesformData);
        setSuccessMessage('Bread product added successfully!');
        setCookiesFormData({
            name: '',
            packs: '',
            description: '',
            price: '',
            image: null
        });
        handleCloseForm()
        setCookiesUploadText('Upload Image');
    } catch (error) {
        setError('Failed to add bread product. Please try again.');
    } finally {
        setLoading(false);
    }
};

export const handleDonutsInputChange = (setDonutsFormData, setDonutsUploadText) => (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
        setDonutsFormData(prevState => ({
            ...prevState,
            [name]: files[0]
        }));
        setDonutsUploadText('Uploaded');
    } else {
        setDonutsFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
};

export const handleDonutsSubmit = (donutsformData, setDonutsFormData, setError, setSuccessMessage, setLoading, submitDonutsProduct, setDonutsUploadText) => async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage('');
    setLoading(true);

    try {
        await submitDonutsProduct(donutsformData);
        setSuccessMessage('Donuts product added successfully!');
        setDonutsFormData({
            name: '',
            packs: '',
            description: '',
            price: '',
            image: null
        });
        handleCloseForm()
        setDonutsUploadText('Upload Image');
    } catch (error) {
        setError('Failed to add Donuts product. Please try again.');
    } finally {
        setLoading(false);
    }
};


export const handlePastriesInputChange = (setPastriesFormData, setPastriesUploadText) => (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
        setPastriesFormData(prevState => ({
            ...prevState,
            [name]: files[0]
        }));
        setPastriesUploadText('Uploaded');
    } else {
        setPastriesFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
};


export const handlePastriesSubmit = (PastriesformData, setPastriesFormData, setError, setSuccessMessage, setLoading, submitPastriesProduct, setPastriesUploadText) => async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage('');
    setLoading(true);

    try {
        await submitPastriesProduct(PastriesformData);
        setSuccessMessage('Pastries product added successfully!');
        setPastriesFormData({
            name: '',
            description: '',
            price: '',
            image: null
        });
        handleCloseForm()
        setPastriesUploadText('Upload Image');
    } catch (error) {
        setError('Failed to add pastries product. Please try again.');
    } finally {
        setLoading(false);
    }
};