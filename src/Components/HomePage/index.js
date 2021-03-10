import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'
import { Spinner } from 'react-bootstrap';
import ProductList from '../ProductList';
import {ThemeContext} from '../../Contexts/ThemeContextProvider'
import ShowCorrectPage from '../HOC/showCorrectPage';



function HomePage(props) {

    const currentUser=useSelector( state=>state.currentUser);

    console.log(currentUser);

    const [allProducts, changeAllProducts] = useState(null);
    const [currentProducts, changeCurrentProducts] = useState(null);
    const [textField, changeTextField] = useState("");

    const [categories,changeCategories]=useState(null);
    const [currentlyCheckedCategories,changeCurrentlyCheckedCategories]=useState([]);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                changeAllProducts(data);
                changeCurrentProducts(data);
        })

        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                changeCategories(data);

               const categoryData= data.map((category,index)=>
                {
                    return {name:category,isChecked:false};
                })
                changeCurrentlyCheckedCategories(categoryData);
                console.log(categoryData);
            })



    }, [])

    const onCheckboxChange=(e)=>
    {
        // which checkbox has been tocuhed
        // wherther the cb is checked or unchecked
        console.dir(e.target);

        const checkedCategory=e.target.name;
        const isCheckedCategory=e.target.checked;

        console.log(currentlyCheckedCategories);


        const updated=currentlyCheckedCategories.map((category,index)=>
        {
            if(category.name===checkedCategory)
            return {name:category.name,isChecked:isCheckedCategory};

            return category;
        })

        console.log(updated);

        const checkedCat=updated.filter((category,index)=>
        {
            return category.isChecked;
        })

        const catNames=checkedCat.map((cat,index)=>{
            return cat.name;
        })
    

        console.log(catNames);

        changeCurrentlyCheckedCategories(updated);

        //current products on the basis of categories which are checked 

        const products=[...allProducts];

        const updatedProducts= (!catNames.length)?[...allProducts]:products.filter((product,index)=>
        {
             return catNames.includes(product.category)
        })

        changeCurrentProducts(updatedProducts);
    }

    const renderCategories=()=>
    {
        if(categories===null)
        return <Spinner animation="grow"><span>Loading</span></Spinner>

        return categories.map((category,index)=>
        {
            return <div style={{width:"100%",display:"flex",justifyContent:"space-between"}} ><span>{category}</span>
             <input name={category} value={category} onChange={(e)=>onCheckboxChange(e)}   type="checkbox"/>  </div>
        })
    }

    const onTextFieldChange = (e) => {
        const value = e.target.value.toLowerCase();
        changeTextField(value);

        //new CurrentProducts

        const products=[...allProducts];

        const newProducts=products.filter((user,index)=>
        {
            const title=user.title.toLowerCase();
            return title.startsWith(value);
        });

        changeCurrentProducts(newProducts);

    }

    const comparatorLowToHigh=(product1,product2)=>
    {
        if(product1.price<product2.price)
        return -1;

        if(product1.price===product2.price)
        return 0;

        return 1;
    }

    const comparatorHighToLow=(product1,product2)=>
    {
        if(product1.price>product2.price)
        return -1;

        if(product1.price===product2.price)
        return 0;

        return 1;

    }

    const onSortLowToHigh=()=>
    {
        const products=[...allProducts];
        const updatedProducts=products.sort(comparatorLowToHigh);
        changeCurrentProducts(updatedProducts);
    }

    const onSortHighToLow=()=>
    {
        const products=[...allProducts];
        const updatedProducts=products.sort(comparatorHighToLow);
        changeCurrentProducts(updatedProducts);
    }

    const onReset=()=>
    {
        changeCurrentProducts([...allProducts]);   
    }

    return (
        
        <div style={{position:"relative"}}>

            <input style={{ border: "3px solid black", display: "inline-block", margin: "40px" }} type="text"
             value={textField}
              onChange={(e) => onTextFieldChange(e)} />

              <ThemeContext.Consumer>
              {

                (themeContextObject)=>
                {
                    const {onThemeChange}=themeContextObject;

                    return <button onClick={()=>onThemeChange()}>Toggle Theme</button>
                }

              }

              </ThemeContext.Consumer>




            <br />
            <button onClick={()=>onSortLowToHigh()}  style={{border:"3px solid black",color:"blue",margin:"20px",padding:"10px"}} >Sort Low to high</button>
            <button onClick={()=>onReset()}  style={{border:"3px solid black",color:"blue",margin:"20px",padding:"10px 35px"}} >Reset</button>
            <button onClick={()=>onSortHighToLow()}  style={{border:"3px solid black",color:"blue",margin:"20px",padding:"10px"}} >Sort High to Low</button>

            <div style={{padding:"20px",display:"inline-block",border:"2px solid black",position:"absolute",left:"10px",top:"10px"}}>
            <h5>Categories</h5>
            {renderCategories()}
            </div>

            {
                (currentProducts === null) ? <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner> : <ProductList currentProducts={currentProducts} />

            }
        </div>
    );
}

export default   HomePage;