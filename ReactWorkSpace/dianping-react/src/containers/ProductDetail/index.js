import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ProductOverview from "./components/ProductOverview";
import ShopInfo from "./components/ShopInfo";
import Detail from "./components/Detail";
import Remark from "./components/Remark";
import BuyButton from "./components/BuyButton";
import Header from "../../components/Header";
import {
  actions as detailActions,
  getProduct,
  getRelatedShop,
} from "../../redux/modules/detail";

class ProductDetail extends Component {
  render() {
    const { product, relatedShop } = this.props;
    return (
      <div className="productDetail">
        <Header grey title="团购详情" onBack={this.handleBack} />
        {product && <ProductOverview data={product} />}
        {product && relatedShop && (
          <ShopInfo data={relatedShop} total={product.shopIds.length} />
        )}
        {product && (
          <React.Fragment>
            <Detail data={product} />
            <Remark data={product} />
            <BuyButton productId={product.id} />
          </React.Fragment>
        )}
      </div>
    );
  }
  handleBack = () => {
    this.props.history.goBack();
  };
  // 在组建挂载完成时获取信息
  componentDidMount() {
    const { product, relatedShop, detailActions } = this.props;
    if (!product) {
      const productId = this.props.match.params.id;
      detailActions.loadProductDetail(productId);
    } else if (!relatedShop) {
      detailActions.loadShopById(product.nearestShop);
    }
  }

  componentDidUpdate(preProps) {
    const { product, detailActions } = this.props;
    // 表示组件在componentDidMount函数内获取了product，则需要再次获取关联店铺
    if (!preProps.product && product) {
      detailActions.loadShopById(product.nearestShop);
    }
  }
}

const mapStateToProps = (state, props) => {
  const productId = props.match.params.id;
  return {
    product: getProduct(state, productId),
    relatedShop: getRelatedShop(state, productId),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    detailActions: bindActionCreators(detailActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
