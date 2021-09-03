import { useEffect, useState } from 'react';

//firebase
import firebase from 'firebase/app';
import 'firebase/firestore';

export const useProductDetails = () => {
  const [productSearched, setProductSearched] = useState([]);

  const getProductDetail = async (product) => {
    const db = firebase.firestore();
    const productRef = db.collection('products').doc(`${product}`);

    productRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setProductSearched(doc.data());
        } else {
          console.error(
            '[Product details error] no se pudo obtener el producto'
          );
        }
      })
      .catch((error) => console.error(error.message));
  };

  return { productSearched, getProductDetail };
};
