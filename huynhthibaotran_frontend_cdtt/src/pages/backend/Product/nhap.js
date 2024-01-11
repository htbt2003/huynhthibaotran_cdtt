function filteredData() {
    setFilteredProducts(products) 
    // filteredProducts = products;

    // search
    if (key) {
      setFilteredProducts(products) 
      // filteredProducts = searchdata;
    }

    // filter
    if(filter_category !== 0 && filter_brand !== 0)
    {
      const filterdata = products.filter(item => item.category_id === filter_category && item.brand_id === filter_brand)
      setFilteredProducts(filterdata) 
    }
    else if(filter_category !== 0)
    {
      const filterdata = products.filter(item => item.category_id === filter_category)
      setFilteredProducts(filterdata) 
    }
    else
    {
      const filterdata = products.filter(item =>item.brand_id === filter_brand)
      setFilteredProducts(filterdata) 
    }
    
    // console.log(filteredProducts)
    // render
    // return filteredProducts.map((product) => (
    //     <tr className="datarow">
    //     <td className="" style={{ width: 26 }}>
    //       <input style={{ width: 16 }} type="checkbox" id="checkboxID" />
    //     </td>
    //     <td className="py-1">
    //       <img className="img-fluid" src={urlImage + "product/" + product.image} alt="hinh" />
    //     </td>
    //     <td>
    //       <div className='row'>
    //         <div className='col-7 pt-2'>{product.name}</div>
    //         <div className="col- 2 function_style">
    //           <button onClick={() => handleStatus(product.id)} className={product.status === 1 ? "btn btn-success btn-sm" : "btn btn-danger btn-sm"}>
    //             <i className={product.status === 1 ? "fa fa-toggle-on" : "fa fa-toggle-off"} />
    //           </button>
    //           <Link to={"/admin/product/update/" + product.id} className="btn btn-primary btn-sm">
    //             <i className="fa fa-edit" />
    //           </Link>
    //           <Link to={"/admin/product/show/" + product.id} className="btn btn-info btn-sm" >
    //             <i className="fa fa-eye" />
    //           </Link>
    //           <button href="#" className="btn btn-danger btn-sm" onClick={() => ProductDelete(product.id)}>
    //             <i className="fa fa-trash" />
    //           </button>
    //         </div>
    //       </div>
    //     </td>
    //     <td> {product.category_id} </td>
    //     <td> {product.brand_id} </td>
    //     <td> {product.id} </td>
    //   </tr>
    //   )
    // );
  }


  function filteredData() {
    let filteredProducts = [1,2,3]
    filteredProducts = products
    // search
    if (key) {
      filteredProducts = searchdata;
    }
    (async () => {
      const result = await ProductServices.filter();
      filteredProducts = result.categories
    })();
    // // filter
    if(filter_category && filter_brand)
    {
      filteredProducts = products.filter(item => item.category_id === filter_category && item.brand_id === filter_brand)
    }
    else if(filter_category)
    {
      filteredProducts = products.filter(item => item.category_id === filter_category)
    }
    else if(filter_brand)
    {
      filteredProducts = products.filter(item =>item.brand_id === filter_brand)
    }
    // console.log(products)
    // console.log(filteredProducts)
    // render
    return filteredProducts.map((product, index) => (
        <tr className="datarow" key={index}>
        <td className="" style={{ width: 26 }}>
          <input style={{ width: 16 }} type="checkbox" id="checkboxID" />
        </td>
        <td className="py-1">
          <img className="img-fluid" src={urlImage + "product/" + product.image} alt="hinh" />
        </td>
        <td>
          <div className='row'>
            <div className='col-7 pt-2'>{product.name}</div>
            <div className="col- 2 function_style">
              <button onClick={() => handleStatus(product.id)} className={product.status === 1 ? "btn btn-success btn-sm" : "btn btn-danger btn-sm"}>
                <i className={product.status === 1 ? "fa fa-toggle-on" : "fa fa-toggle-off"} />
              </button>
              <Link to={"/admin/product/update/" + product.id} className="btn btn-primary btn-sm">
                <i className="fa fa-edit" />
              </Link>
              <Link to={"/admin/product/show/" + product.id} className="btn btn-info btn-sm" >
                <i className="fa fa-eye" />
              </Link>
              <button href="#" className="btn btn-danger btn-sm" onClick={() => ProductDelete(product.id)}>
                <i className="fa fa-trash" />
              </button>
            </div>
          </div>
        </td>
        <td> {product.category_id} </td>
        <td> {product.brand_id} </td>
        <td> {product.id} </td>
      </tr>
      )
    );
  }
  // const result = filteredData();
