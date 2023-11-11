const apiBaseUrl = import.meta.env.VITE_API_BASEURL;
const getAllProducts = async (page) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${apiBaseUrl}/api/v1/products?page=${page}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getProductByName = async (name) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(
      `${apiBaseUrl}/api/v1/products?search=${name}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const addNewProduct = async (data) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${apiBaseUrl}/api/v1/product`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (id, data) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${apiBaseUrl}/api/v1/product/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getProductById = async (id) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${apiBaseUrl}/api/v1/product/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (id) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${apiBaseUrl}/api/v1/product/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export {
  getAllProducts,
  addNewProduct,
  updateProduct,
  getProductById,
  deleteProduct,
  getProductByName,
};
