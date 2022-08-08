import React from 'react';
import './Product.css';
import Policy from './Policy';

const Product = () => {
  return (
    <div className='Product' id="product">
        <h2 class="text-center">Products  <i class="fa-solid fa-box-open"></i></h2>
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
               
                <Policy/>
                
             </div>
                  
            
              <div class="col-lg-4">
              <Policy/>
              </div>
               <div class="col-lg-4">
               <Policy/>
               </div> 

               </div>
           
              <div class="row">
                <div class="col-lg-4">
                <Policy/>
                    
                </div>
                <div class="col-lg-4">
                <Policy/>
                </div>
                 <div class="col-lg-4">
                 <Policy/>
                 </div> 
                 
             </div>
             
              
          </div>
          <div  class="viewall pb-4">
          <button type="button" class="btn btn-secondary py-2">view all</button>
          </div>
          
          </div>
    
    
    
  )
}

export default Product
