import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import SearchBox from "./components/SearchBox";
import PopularSearch from "./components/PopularSearch";
import SearchHistory from "./components/SearchHistory";
import {
  actions as searchActions,
  getRelatedKeywords,
  getHistoryKeywords,
  getPopularKeywords,
  getInputText,
} from "../../redux/modules/search";

class Search extends Component {
  render() {
    const {
      inputText,
      relatedKeywords,
      popularKeywords,
      historyKeywords,
    } = this.props;

    return (
      <div className="search">
        <SearchBox
          inputText={inputText}
          relatedKeywords={relatedKeywords}
          onChange={this.handleChangeInput}
          onClear={this.handleClearInput}
          onCancel={this.handleCancel}
          onClickItem={this.handleClickItem}
        />
        <PopularSearch
          data={popularKeywords}
          onClickItem={this.handleClickItem}
        />
        <SearchHistory
          data={historyKeywords}
          onClickItem={this.handleClickItem}
          onClear={this.handleClearHistory}
        />
      </div>
    );
  }
  // 请求流行关键词
  componentDidMount() {
    const { loadPopularKeywords } = this.props.searchActions;
    loadPopularKeywords();
  }
  // 搜索框文本发生变化
  handleChangeInput = (text) => {
    const { setInputText, loadRelatedKeywords } = this.props.searchActions;
    setInputText(text);
    loadRelatedKeywords(text);
  };
  // 清除搜索
  handleClearInput = () => {
    const { clearInputText } = this.props.searchActions;
    clearInputText();
  };
  // 取消搜索
  handleCancel = () => {
    this.handleClearInput();
    this.props.history.goBack();
  };
  // 处理点击返回的结果
  handleClickItem = (item) => {
    const {
      setInputText,
      addHistoryKeyword,
      loadRelatedShops,
    } = this.props.searchActions;
    setInputText(item.keyword);
    addHistoryKeyword(item.id);
    // 跳转搜索逻辑
    loadRelatedShops(item.id);
    this.props.history.push("/search_result");
  };
  // 清除历史记录
  handleClearHistory = () => {
    const { clearHistoryKeyword } = this.props.searchActions;
    clearHistoryKeyword();
  };
  componentWillMount() {
    const { clearInputText } = this.props.searchActions;
    clearInputText();
  }
}

const mapStateToProps = (state, props) => {
  return {
    relatedKeywords: getRelatedKeywords(state),
    popularKeywords: getPopularKeywords(state),
    inputText: getInputText(state),
    historyKeywords: getHistoryKeywords(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchActions: bindActionCreators(searchActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
