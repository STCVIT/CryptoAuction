import React from "react";
import styles from "./postCard.module.css";
import Card from "../Posts";
import { CardDeck } from "react-bootstrap";
import Categories from "../Categories"
import Divider from "../Categories/divider"
function Home(props) {
  return (
    <div class="container">
      <div className={styles.w + " container  mb-3  "}>
        <h2>Trending</h2>
        <CardDeck>
          {props.products.map((product, key) => {
            return (
              <>
                {product.bidcount > 0 ? (
                  <div className="my-2 col-12 col-md-4 col-sm-12">
                  <Card
                    Id={parseInt(product.Id)}
                    Name={product.name}
                    Hbid={window.web3.utils.fromWei(
                      product.currentBid.toString(),
                      "Ether"
                    )}
                    discription={product.infoArray.discription}
                    img={`https://ipfs.infura.io/ipfs/${props.hashes[key]}`}
                  />
                  </div>
                ) : null}
           </>
            );
          })}
        </CardDeck>
      </div>
      <div className={styles.w + " container mt-3" }>
      <h2>Explore Categories</h2>
      {/* <Categories products={props.products} hashes={props.hashes} account={props.account} placeBid={props.placeBid} closeAuction={props.closeAuction}   /> */}
      <Divider products={props.products} hashes={props.hashes} account={props.account} placeBid={props.placeBid} closeAuction={props.closeAuction}   />
      </div>
     

      {/* <div className={styles.w + " container mt-3" }>
        <h2>All Products</h2>
        <CardDeck>
          {props.products.map((product, key) => {
            return (
              <div className="my-2 col-12 col-md-4 col-sm-12">
                <Card
                  Id={parseInt(product.Id)}
                  Name={product.name}
                  Hbid={window.web3.utils.fromWei(
                    product.currentBid.toString(),
                    "Ether"
                  )}
                  
                  discription={product.infoArray.discription}
                  img={`https://ipfs.infura.io/ipfs/${props.hashes[key]}`}
                />
              </div>
            );
          })}
        </CardDeck>
      </div> */}
    </div>
  );
}

export default Home;
